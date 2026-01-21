
import type { Test } from '../../types';

export const TEST_13: Test = {
  id: 'test-13',
  title: 'Test 13: Bloque I - Función Pública y Procedimiento',
  questions: [
    // La Administración Pública
    { 
      questionText: 'La transferencia de titularidad de competencias de un órgano superior a uno inferior se denomina:', 
      options: ['Delegación de firma', 'Desconcentración', 'Encomienda de gestión', 'Suplencia'], 
      correctAnswer: 1,
      explanation: 'La desconcentración implica la transferencia de la titularidad y el ejercicio de competencias de un órgano superior a otro inferior (Art. 8 Ley 40/2015). La delegación solo transfiere el ejercicio.'
    },
    { 
      questionText: 'El Consejo de Estado es el supremo órgano:', 
      options: ['Consultivo del Gobierno', 'Ejecutivo', 'Judicial', 'Legislativo'], 
      correctAnswer: 0,
      explanation: 'El artículo 107 de la Constitución define al Consejo de Estado como el supremo órgano consultivo del Gobierno.'
    },
    
    // Ley 40/2015
    { 
      questionText: 'Los consorcios son entidades de derecho público que surgen de la cooperación entre:', 
      options: ['Empresas privadas exclusivamente', 'Varias Administraciones Públicas o entidades integrantes del sector público', 'Partidos políticos', 'Sindicatos'], 
      correctAnswer: 1,
      explanation: 'El artículo 118 de la Ley 40/2015 define los consorcios como entidades de derecho público creadas por varias Administraciones Públicas o entidades integrantes del sector público institucional, con participación de entidades privadas si procede.'
    },
    { 
      questionText: 'La sede electrónica es aquella dirección electrónica disponible para los ciudadanos cuya titularidad corresponde a:', 
      options: ['Una empresa de telecomunicaciones', 'Una Administración Pública', 'Cualquier usuario', 'Google'], 
      correctAnswer: 1,
      explanation: 'El artículo 38 de la Ley 40/2015 define la sede electrónica como aquella dirección electrónica, disponible para los ciudadanos a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública.'
    },
    
    // El personal al servicio AAPP
    { 
      questionText: 'Las retribuciones de los funcionarios se clasifican en:', 
      options: ['Básicas y complementarias', 'Directas e indirectas', 'Fijas y variables', 'Ordinarias y extraordinarias'], 
      correctAnswer: 0,
      explanation: 'El artículo 22 del TREBEP establece que las retribuciones de los funcionarios se clasifican en básicas y complementarias.'
    },
    { 
      questionText: 'Los trienios son una retribución básica que consiste en una cantidad igual para cada Grupo por cada:', 
      options: ['5 años de servicio', '3 años de servicio', '2 años de servicio', '4 años de servicio'], 
      correctAnswer: 1,
      explanation: 'El artículo 23 del TREBEP define los trienios como una cantidad por cada tres años de servicio.'
    },
    
    // Situaciones administrativas
    { 
      questionText: '¿En qué situación se declara a un funcionario que es nombrado miembro del Gobierno?', 
      options: ['Excedencia voluntaria', 'Servicios especiales', 'Servicio activo', 'Suspensión de funciones'], 
      correctAnswer: 1,
      explanation: 'El artículo 87 del TREBEP establece que los funcionarios serán declarados en situación de servicios especiales cuando sean nombrados miembros del Gobierno, entre otros cargos políticos.'
    },
    { 
      questionText: 'La excedencia por cuidado de familiares tiene una duración máxima de:', 
      options: ['1 año', '3 años', '5 años', 'Indefinida'], 
      correctAnswer: 1,
      explanation: 'El artículo 89.4 del TREBEP establece que la excedencia por cuidado de familiares tendrá una duración no superior a tres años.'
    },
    
    // Ley 39/2015
    { 
      questionText: 'Cuando una notificación en papel es infructuosa tras dos intentos, se procederá a:', 
      options: ['Archivar el expediente', 'Publicar el anuncio en el BOE', 'Llamar por teléfono', 'Enviar un correo ordinario'], 
      correctAnswer: 1,
      explanation: 'El artículo 44 de la Ley 39/2015 establece que cuando los interesados sean desconocidos o se ignore el lugar de notificación, o bien intentada ésta no se hubiese podido practicar, la notificación se hará por medio de un anuncio publicado en el BOE.'
    },
    { 
      questionText: 'Salvo que se disponga lo contrario, el cómputo de plazos fijados en meses se realiza:', 
      options: ['De fecha a fecha', 'Por días naturales', 'Excluyendo festivos', 'Por semanas'], 
      correctAnswer: 0,
      explanation: 'El artículo 30.4 de la Ley 39/2015 establece que si el plazo se fija en meses o años, éstos se computarán a partir del día siguiente a aquel en que tenga lugar la notificación o publicación del acto, o desde el siguiente a aquel en que se produzca la estimación o desestimación por silencio administrativo. El plazo concluirá el mismo día en que se produjo la notificación, publicación o silencio administrativo en el mes o el año de vencimiento (cómputo de fecha a fecha).'
    },
  ]
};
