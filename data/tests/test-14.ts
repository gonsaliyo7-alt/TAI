
import type { Test } from '../../types';

export const TEST_14: Test = {
  id: 'test-14',
  title: 'Test 14: Presupuesto/Penal II (Temas 16-20)',
  questions: [
    // Tema 16: Presupuesto
    { questionText: '¿Qué principio presupuestario exige que todos los ingresos y gastos se incluyan en un único documento?', options: ['Principio de unidad', 'Principio de especialidad', 'Principio de universalidad', 'Principio de anualidad'], correctAnswer: 0 },
    { questionText: 'Los créditos ampliables son aquellos cuya cuantía:', options: ['No puede aumentarse', 'Puede incrementarse en función de la recaudación o reconocimiento de obligaciones específicas', 'Se puede transferir libremente', 'Es secreta'], correctAnswer: 1 },
    
    // Tema 17: Interior
    { questionText: 'En la estructura periférica del Estado, ¿quién ejerce el mando de las Fuerzas y Cuerpos de Seguridad del Estado en la provincia?', options: ['El Alcalde', 'El Subdelegado del Gobierno (bajo la dirección del Delegado)', 'El Juez Decano', 'El Presidente de la Diputación'], correctAnswer: 1 },
    { questionText: 'La Entidad Estatal Trabajo Penitenciario y Formación para el Empleo (TPFE) tiene personalidad jurídica:', options: ['Pública diferenciada', 'Privada', 'No tiene personalidad jurídica', 'Mixta'], correctAnswer: 0 },
    
    // Tema 18: Penal I
    { questionText: 'La prohibición de la analogía en Derecho Penal se aplica:', options: ['Siempre', 'Cuando perjudica al reo (in malam partem)', 'Cuando le beneficia', 'Nunca'], correctAnswer: 1 },
    { questionText: 'El principio de intervención mínima implica que el Derecho Penal es:', options: ['La primera opción', 'La ultima ratio (último recurso)', 'Irrelevante', 'Opcional'], correctAnswer: 1 },
    
    // Tema 19: Penal Tiempo/Espacio
    { questionText: 'Respecto al lugar de comisión del delito, el Código Penal español sigue la teoría de:', options: ['La actividad', 'El resultado', 'La ubicuidad (se considera cometido tanto donde se actúa como donde se produce el resultado)', 'La nacionalidad'], correctAnswer: 2 },
    { questionText: 'El delito se considera cometido:', options: ['En el momento en que se ejecuta la acción u omisión', 'Cuando se produce el resultado', 'Cuando se descubre', 'Cuando se condena'], correctAnswer: 0 },
    
    // Tema 20: Omisión y Clasificación
    { questionText: 'Los delitos leves solo se castigan cuando:', options: ['Han sido consumados (salvo excepciones)', 'Son intentados', 'Se piensan', 'Hay conspiración'], correctAnswer: 0 },
    { questionText: 'El error sobre un hecho constitutivo de la infracción penal se denomina:', options: ['Error de prohibición', 'Error de tipo', 'Error de cálculo', 'Error judicial'], correctAnswer: 1 }
  ]
};
