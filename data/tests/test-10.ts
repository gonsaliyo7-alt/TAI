
import type { Test } from '../../types';

export const TEST_10: Test = {
  id: 'test-10',
  title: 'Test 10: JVP y Conducta Humana (Temas 46-50)',
  questions: [
    // Tema 46: Jurisdicción de Vigilancia
    { questionText: 'El Juez de Vigilancia Penitenciaria tiene competencia para:', options: ['Dictar sentencia condenatoria', 'Resolver quejas sobre el régimen y tratamiento penitenciario', 'Detener a los delincuentes', 'Nombrar al Director del centro'], correctAnswer: 1 },
    { questionText: 'Las resoluciones del Juez de Vigilancia en materia de clasificación de grado son recurribles ante:', options: ['El Tribunal Constitucional', 'El Juez de Instrucción', 'El Tribunal sentenciador (apelación)', 'El Ministerio del Interior'], correctAnswer: 2 },
    
    // Tema 47: Recursos y reclamaciones
    { questionText: 'Los internos pueden formular quejas y peticiones a:', options: ['Solo al Director', 'Al Director, Juez de Vigilancia, Defensor del Pueblo, etc.', 'Solo a su abogado', 'A la prensa directamente'], correctAnswer: 1 },
    { questionText: '¿Qué recurso cabe contra las sanciones disciplinarias impuestas por la Comisión Disciplinaria?', options: ['Alzada ante el Director', 'Queja/Recurso ante el Juez de Vigilancia Penitenciaria', 'Reposición ante la misma Comisión', 'No cabe recurso'], correctAnswer: 1 },
    
    // Tema 48: Bases de la conducta humana
    { questionText: 'En el esquema E-O-R (Estímulo-Organismo-Respuesta), el aprendizaje:', options: ['No influye', 'Modifica la estructura del organismo y sus futuras respuestas', 'Es genético', 'Solo depende del estímulo'], correctAnswer: 1 },
    { questionText: '¿Qué variable influye directamente en la conducta según la psicología básica?', options: ['La motivación', 'El clima meteorológico exclusivamente', 'La ropa', 'El nombre de la persona'], correctAnswer: 0 },
    
    // Tema 49: Subcultura carcelaria
    { questionText: 'El concepto de "prisionización" definido por Clemmer hace referencia a:', options: ['La construcción de prisiones', 'La asimilación por el interno de los usos, costumbres y cultura de la prisión', 'El intento de fuga', 'La condena penal'], correctAnswer: 1 },
    { questionText: 'Uno de los efectos de la prisionización es:', options: ['Aumento de la autoestima', 'Pérdida de autonomía e iniciativa (institucionalización)', 'Mejora de las habilidades laborales', 'Mayor libertad'], correctAnswer: 1 },
    
    // Tema 50: Habilidades sociales
    { questionText: 'La asertividad se define como:', options: ['La capacidad de imponer la propia voluntad a gritos', 'La capacidad de expresar opiniones y sentimientos de forma adecuada, respetando los derechos propios y ajenos', 'La sumisión ante la autoridad', 'La indiferencia'], correctAnswer: 1 },
    { questionText: 'En la comunicación, la "escucha activa" implica:', options: ['Oír sin prestar atención', 'Interrumpir constantemente', 'Prestar atención, comprender y dar feedback al interlocutor', 'Mirar hacia otro lado'], correctAnswer: 2 }
  ]
};
