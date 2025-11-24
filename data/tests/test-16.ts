
import type { Test } from '../../types';

export const TEST_16: Test = {
  id: 'test-16',
  title: 'Test 16: Delitos/Penitenciario (26-30)',
  questions: [
    // Tema 26: Delitos personas
    { questionText: 'El ensañamiento en el asesinato implica:', options: ['Matar por sorpresa', 'Aumentar deliberada e inhumanamente el dolor del ofendido', 'Matar por precio', 'Matar a un familiar'], correctAnswer: 1 },
    { questionText: 'El robo se distingue del hurto en que en el robo concurre:', options: ['Ánimo de lucro', 'Fuerza en las cosas o violencia/intimidación en las personas', 'Valor superior a 400 euros', 'No hay diferencia'], correctAnswer: 1 },
    
    // Tema 27: Delitos sexuales
    { questionText: 'Tras la Ley "Solo sí es sí", el elemento clave de los delitos sexuales es:', options: ['La violencia', 'La ausencia de consentimiento', 'La intimidación', 'La resistencia de la víctima'], correctAnswer: 1 },
    { questionText: 'El allanamiento de morada lo comete el particular que:', options: ['Entra en domicilio ajeno o se mantiene en él contra la voluntad de su morador', 'Entra en un local público', 'Salta una valla', 'Rompe una ventana'], correctAnswer: 0 },
    
    // Tema 28: LOGP
    { questionText: 'El Reglamento Penitenciario vigente fue aprobado por Real Decreto en el año:', options: ['1979', '1981', '1996', '2011'], correctAnswer: 2 },
    { questionText: 'La LOGP atribuye al Juez de Vigilancia la función de:', options: ['Dirigir la prisión', 'Salvaguardar los derechos de los internos y corregir abusos de la administración', 'Nombrar funcionarios', 'Construir cárceles'], correctAnswer: 1 },
    
    // Tema 29: Interno
    { questionText: 'Los cacheos con desnudo integral:', options: ['Están prohibidos siempre', 'Se pueden realizar por motivos de seguridad concreta, con autorización del Jefe de Servicios', 'Son rutinarios', 'Los decide el interno'], correctAnswer: 1 },
    { questionText: '¿Tienen los internos derecho a la Seguridad Social?', options: ['No, pierden ese derecho', 'Sí, conservan sus derechos de Seguridad Social', 'Solo si pagan', 'Solo en régimen abierto'], correctAnswer: 1 },
    
    // Tema 30: Personal
    { questionText: 'Es incompatible para el personal penitenciario:', options: ['Tener hijos', 'Realizar actividades privadas que comprometan su imparcialidad o independencia', 'Votar', 'Afiliarse a un sindicato'], correctAnswer: 1 },
    { questionText: 'La formación de los funcionarios penitenciarios es:', options: ['Un derecho y un deber', 'Opcional', 'Solo para interinos', 'Innecesaria'], correctAnswer: 0 }
  ]
};
