
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { Question } from "../types";

export class AIService {
    private genAI: GoogleGenerativeAI | null = null;
    private model: any = null;
    private apiKey: string | null = null;

    constructor() {
        const storedKey = localStorage.getItem('gemini_api_key');
        if (storedKey) {
            this.initialize(storedKey);
        }
    }

    initialize(apiKey: string) {
        this.apiKey = apiKey;
        this.genAI = new GoogleGenerativeAI(apiKey);
        this.model = null;
        localStorage.setItem('gemini_api_key', apiKey);
    }

    hasKey(): boolean {
        return !!this.apiKey;
    }

    clearKey() {
        this.apiKey = null;
        this.genAI = null;
        this.model = null;
        localStorage.removeItem('gemini_api_key');
    }

    async generateQuestion(topic?: string): Promise<Question> {
        if (!this.genAI) {
            throw new Error("API Key no configurada");
        }

        // Initialize model if not already done
        if (!this.model) {
            this.model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        }

        const prompt = `Eres un experto en oposiciones de España. Crea una pregunta de examen tipo test sobre el temario del Cuerpo de Técnicos Auxiliares de Informática de la Administración del Estado.

FORMATO REQUERIDO (responde SOLO con este JSON):
{
  "questionText": "¿Pregunta sobre informática, tecnología de sistemas, desarrollo o legislación administrativa?",
  "options": ["Primera opción", "Segunda opción", "Tercera opción", "Cuarta opción"],
  "correctAnswer": 0,
  "explanation": "Explicación clara de por qué es correcta, citando artículos si procede"
}

IMPORTANTE: Responde ÚNICAMENTE con el JSON, sin texto antes ni después.`;

        try {
            const result = await this.model.generateContent(prompt);
            const response = await result.response;

            console.log("📥 Respuesta completa de la API:", response);

            const text = response.text();
            console.log("📄 Texto extraído:", text);

            // Clean JSON
            let cleanText = text.trim();
            cleanText = cleanText.replace(/```json\n?/g, '');
            cleanText = cleanText.replace(/```\n?/g, '');
            cleanText = cleanText.replace(/^[^{]*({[\s\S]*})[^}]*$/, '$1');

            console.log("🧹 Texto limpio:", cleanText);

            const questionData = JSON.parse(cleanText);

            // Validate
            if (!questionData.questionText || !Array.isArray(questionData.options) || typeof questionData.correctAnswer !== 'number') {
                throw new Error("Estructura inválida");
            }

            if (questionData.options.length !== 4) {
                throw new Error("Debe tener 4 opciones");
            }

            return questionData as Question;
        } catch (error: any) {
            console.error("AI Service Error:", error);

            const msg = error.message?.toLowerCase() || "";

            if (msg.includes('api key not found') || msg.includes('invalid api key') || msg.includes('api_key_invalid')) {
                throw new Error("⚠️ API KEY INVÁLIDA: La clave introducida no es correcta o ha sido revocada. Por favor, asegúrate de pegarla exactamente como aparece en Google AI Studio.");
            } else if (msg.includes('quota') || msg.includes('429')) {
                throw new Error("⏳ LÍMITE EXCEDIDO: Has superado el límite de preguntas gratuitas por minuto. Espera 60 segundos antes de intentar generar otra.");
            } else if (msg.includes('overloaded') || msg.includes('demand') || msg.includes('503')) {
                throw new Error("🔥 ALTA DEMANDA: Los servidores de Google están saturados en este momento. Reintenta en unos instantes.");
            } else if (msg.includes('permission') || msg.includes('403')) {
                throw new Error("🚫 PERMISO DENEGADO: Tu API Key no tiene permisos para usar este modelo o tu región no está soportada.");
            } else if (error instanceof SyntaxError) {
                throw new Error("🧩 ERROR DE FORMATO: La IA generó una respuesta pero no pudimos procesar el JSON. Reintenta generar otra.");
            } else {
                throw new Error(`❌ ERROR TÉCNICO: ${error.message || "Error desconocido en la comunicación con la IA"}`);
            }
        }
    }
}

export const aiService = new AIService();
