
import type { Test } from '../../types';

export const TEST_20: Test = {
  id: 'test-20',
  title: 'Test 20: JVP/Conducta II (46-50)',
  questions: [
    // Tema 46: JVP
    { questionText: 'Para sancionar con aislamiento en celda superior a 14 días se requiere:', options: ['Aprobación del Director', 'Aprobación del Juez de Vigilancia', 'Aprobación del Ministro', 'Visto bueno del médico'], correctAnswer: 1 },
    { questionText: 'La competencia territorial del JVP se determina por:', options: ['El lugar del delito', 'El lugar donde radica el establecimiento penitenciario', 'El domicilio del interno', 'Madrid siempre'], correctAnswer: 1 },
    
    // Tema 47: Recursos
    { questionText: 'El plazo para interponer recurso de reforma contra autos del JVP es de:', options: ['3 días', '5 días', '10 días', '15 días'], correctAnswer: 0 },
    { questionText: '¿Están legitimados los internos para acudir al Defensor del Pueblo?', options: ['No, están presos', 'Sí, libremente y sin censura', 'Solo con permiso del Director', 'Solo a través de abogado'], correctAnswer: 1 },
    
    // Tema 48: Conducta
    { questionText: 'En el condicionamiento operante, el refuerzo positivo busca:', options: ['Disminuir una conducta', 'Aumentar la probabilidad de repetición de una conducta', 'Castigar', 'Ignorar'], correctAnswer: 1 },
    { questionText: 'La Pirámide de Maslow jerarquiza:', options: ['Los delitos', 'Las necesidades humanas', 'Los grados penitenciarios', 'Las leyes'], correctAnswer: 1 },
    
    // Tema 49: Subcultura
    { questionText: 'Una norma básica del código subcultural recluso ("código del preso") es:', options: ['Colaborar con los funcionarios', 'No "chivarse" o delatar a otros internos', 'Pagar impuestos', 'Ser puntual'], correctAnswer: 1 },
    { questionText: 'La aculturación en prisión se refiere a:', options: ['Aprender cultura general', 'El proceso de pérdida de la cultura propia y asimilación de la carcelaria', 'Hacer cursos', 'Leer libros'], correctAnswer: 1 },
    
    // Tema 50: Habilidades
    { questionText: 'La comunicación no verbal incluye:', options: ['Solo las palabras escritas', 'Gestos, postura, mirada y tono de voz', 'El correo electrónico', 'El teléfono'], correctAnswer: 1 },
    { questionText: 'La empatía se diferencia de la simpatía en que:', options: ['Es lo mismo', 'La empatía implica comprender emocionalmente al otro sin necesariamente compartir su opinión o afecto', 'La empatía es reírse con el otro', 'La simpatía es mala'], correctAnswer: 1 }
  ]
};
