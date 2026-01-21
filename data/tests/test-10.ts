
import type { Test } from '../../types';

export const TEST_10: Test = {
  id: 'test-10',
  title: 'Test 10: Protección de Datos y LOPD',
  questions: [
    // Tema: LOPDGDD
    {
      questionText: '¿Cuál es el objeto de la Ley Orgánica 3/2018 (LOPDGDD)?',
      options: ['Adaptar el ordenamiento jurídico español al RGPD y garantizar los derechos digitales', 'Regular el comercio electrónico', 'Crear la AEPD', 'Prohibir internet'],
      correctAnswer: 1,
      explanation: 'La LOPDGDD tiene por objeto adaptar el derecho español al Reglamento General de Protección de Datos (UE) y garantizar los derechos digitales.'
    },
    {
      questionText: 'La edad mínima para el consentimiento del tratamiento de datos en España es:',
      options: ['13 años', '14 años', '16 años', '18 años'],
      correctAnswer: 2,
      explanation: 'El artículo 7 de la LOPDGDD fija la edad mínima en 14 años (el RGPD permite entre 13 y 16, España eligió 14).'
    },

    // Tema: Derechos Digitales
    {
      questionText: 'El derecho a la desconexión digital se reconoce a:',
      options: ['Los trabajadores y empleados públicos', 'Solo a los jefes', 'A nadie', 'A los robots'],
      correctAnswer: 0,
      explanation: 'El artículo 88 de la LOPDGDD reconoce el derecho a la desconexión digital en el ámbito laboral.'
    },
    {
      questionText: 'El derecho al olvido en búsquedas de internet:',
      options: ['Permite solicitar que se eliminen ciertos resultados de las búsquedas', 'Borra la noticia original', 'Es automático', 'No existe'],
      correctAnswer: 1,
      explanation: 'El artículo 93 regula el derecho al olvido en búsquedas de internet.'
    },

    // Tema: AEPD
    {
      questionText: 'La Agencia Española de Protección de Datos es:',
      options: ['Una autoridad administrativa independiente', 'Un ministerio', 'Una empresa privada', 'Un juzgado'],
      correctAnswer: 0,
      explanation: 'La AEPD es una autoridad administrativa independiente de ámbito estatal.'
    },
    {
      questionText: '¿Quién nombra al Presidente de la AEPD?',
      options: ['El Gobierno, a propuesta del Ministerio de Justicia', 'El Rey', 'El Parlamento', 'Los ciudadanos'],
      correctAnswer: 0,
      explanation: 'Es nombrado por el Gobierno mediante Real Decreto.'
    },

    // Tema: Infracciones
    {
      questionText: 'Las infracciones muy graves prescriben a los:',
      options: ['3 años', '2 años', '1 año', '5 años'],
      correctAnswer: 1,
      explanation: 'El artículo 72 de la LOPDGDD establece que las infracciones muy graves prescriben a los tres años.'
    },
    {
      questionText: 'Tratar datos de manera ilícita es una infracción:',
      options: ['Muy grave', 'Grave', 'Leve', 'No es infracción'],
      correctAnswer: 0,
      explanation: 'El tratamiento de datos personales vulnerando los principios y garantías del RGPD es infracción muy grave.'
    },

    // Tema: Delegado de Protección de Datos
    {
      questionText: '¿Es obligatorio el DPD en los Colegios Profesionales?',
      options: ['Sí', 'No', 'Solo si quieren', 'Depende del tamaño'],
      correctAnswer: 0,
      explanation: 'El artículo 34 de la LOPDGDD lista las entidades obligadas a tener DPD, incluyendo los Colegios Profesionales.'
    },
    {
      questionText: 'El DPD debe ser comunicado a:',
      options: ['La AEPD', 'El Ministerio del Interior', 'La Policía', 'Nadie'],
      correctAnswer: 0,
      explanation: 'Los responsables y encargados del tratamiento comunicarán a la AEPD las designaciones de DPD.'
    },
  ]
};
