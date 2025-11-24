
import type { Test } from '../../types';

export const TEST_15: Test = {
  id: 'test-15',
  title: 'Test 15: Dº Penal III (Temas 21-25)',
  questions: [
    // Tema 21: Formas delito
    { questionText: 'La inducción consiste en:', options: ['Ayudar al autor', 'Hacer nacer en otro la resolución de cometer un delito', 'Ser testigo del delito', 'Ocultar el delito'], correctAnswer: 1 },
    { questionText: 'Existe autoría mediata cuando:', options: ['Se realiza el hecho por medio de otro del que se sirve como instrumento', 'Se coopera necesariamente', 'Se conspira', 'Se encubre'], correctAnswer: 0 },
    
    // Tema 22: Extinción responsabilidad
    { questionText: 'El indulto es una medida de gracia que corresponde otorgar a:', options: ['El Rey (a propuesta del Gobierno)', 'El Juez de Vigilancia', 'El Director de la prisión', 'El Tribunal Constitucional'], correctAnswer: 0 },
    { questionText: 'El perdón del ofendido extingue la responsabilidad penal en:', options: ['Todos los delitos', 'Delitos leves perseguibles a instancia de parte o cuando la ley lo prevea', 'Delitos graves', 'Ningún caso'], correctAnswer: 1 },
    
    // Tema 23: Penas
    { questionText: 'El sistema de días-multa fija la cuota diaria en función de:', options: ['La gravedad del delito', 'La capacidad económica del reo', 'La edad del reo', 'El coste del juicio'], correctAnswer: 1 },
    { questionText: 'La localización permanente obliga al penado a permanecer en su domicilio o lugar determinado:', options: ['Solo los fines de semana', 'Hasta 12 meses', 'Hasta 6 meses', 'De por vida'], correctAnswer: 2 },
    
    // Tema 24: Suspensión
    { questionText: '¿Se puede suspender una pena de prisión superior a 2 años?', options: ['Nunca', 'Excepcionalmente en casos de enfermedad muy grave con padecimientos incurables o drogodependencia (con requisitos)', 'Siempre si es primario', 'Si paga una fianza'], correctAnswer: 1 },
    { questionText: 'La sustitución de penas de prisión por expulsión del territorio nacional se aplica a:', options: ['Ciudadanos españoles', 'Ciudadanos extranjeros no residentes legalmente (y residentes con penas > 1 año)', 'Menores de edad', 'Diplomáticos'], correctAnswer: 1 },
    
    // Tema 25: Delitos Admin
    { questionText: 'El funcionario que acepta una dádiva o regalo para realizar un acto propio de su cargo comete delito de:', options: ['Malversación', 'Cohecho', 'Prevaricación', 'Tráfico de influencias'], correctAnswer: 1 },
    { questionText: 'El delito de tráfico de influencias requiere que el sujeto activo:', options: ['Use armas', 'Influyan en un funcionario o autoridad prevaliéndose de su cargo o relación personal', 'Robe dinero público', 'Falsifique documentos'], correctAnswer: 1 }
  ]
};
