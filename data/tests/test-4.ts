
import type { Test } from '../../types';

export const TEST_4: Test = {
  id: 'test-4',
  title: 'Test 4: Presupuesto y Dº Penal I (Temas 16-20)',
  questions: [
    // Tema 16: El Presupuesto del Estado
    { questionText: 'El control externo de la gestión económica y financiera del Sector Público corresponde a:', options: ['La Intervención General', 'El Tribunal de Cuentas', 'El Ministerio de Hacienda', 'El Banco de España'], correctAnswer: 1 },
    { questionText: 'Si la Ley de Presupuestos no se aprueba antes del primer día del ejercicio económico correspondiente:', options: ['Se paraliza la Administración', 'Se consideran automáticamente prorrogados los del ejercicio anterior', 'El Gobierno debe dimitir', 'Se aprueba un presupuesto de emergencia'], correctAnswer: 1 },
    
    // Tema 17: Ministerio del Interior
    { questionText: 'La Secretaría General de Instituciones Penitenciarias tiene rango de:', options: ['Dirección General', 'Subsecretaría', 'Secretaría de Estado', 'Vicepresidencia'], correctAnswer: 1 },
    { questionText: '¿De quién depende la Entidad de Derecho Público Trabajo Penitenciario y Formación para el Empleo?', options: ['Del Ministerio de Trabajo', 'De la Secretaría General de Instituciones Penitenciarias', 'Del Ministerio de Educación', 'De las Comunidades Autónomas'], correctAnswer: 1 },
    
    // Tema 18: Concepto y principios Dº Penal
    { questionText: 'El principio "non bis in idem" significa que:', options: ['No se puede castigar dos veces el mismo hecho si hay identidad de sujeto, hecho y fundamento', 'Siempre hay que imponer dos penas', 'La pena debe ser doble si hay reincidencia', 'No se puede juzgar a dos personas a la vez'], correctAnswer: 0 },
    { questionText: '¿Cuál es la fuente principal del Derecho Penal?', options: ['La costumbre', 'Los principios generales del derecho', 'La Ley Orgánica', 'La jurisprudencia'], correctAnswer: 2 },
    
    // Tema 19: Ley Penal tiempo/espacio y Acción
    { questionText: 'Las leyes penales tienen efecto retroactivo cuando:', options: ['Son sancionadoras', 'Favorecen al reo', 'El delito es muy grave', 'Nunca'], correctAnswer: 1 },
    { questionText: 'En la teoría del delito, la "tipicidad" significa que:', options: ['La acción debe estar descrita en la ley como delito', 'La acción es contraria a derecho', 'El autor es culpable', 'La acción es habitual'], correctAnswer: 0 },
    
    // Tema 20: Omisión y Clasificación
    { questionText: 'En los delitos de omisión impropia (comisión por omisión), se requiere que el sujeto tenga:', options: ['Antecedentes penales', 'Posición de garante', 'Intención de dañar', 'Armas'], correctAnswer: 1 },
    { questionText: 'Según el Código Penal, los delitos se clasifican en:', options: ['Graves, menos graves y leves', 'Mayores y menores', 'Crímenes y delitos', 'Dolosos e imprudentes'], correctAnswer: 0 }
  ]
};
