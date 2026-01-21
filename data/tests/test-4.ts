
import type { Test } from '../../types';

export const TEST_4: Test = {
  id: 'test-4',
  title: 'Test 4: Políticas Públicas y Transparencia',
  questions: [
    // Tema 16: El Presupuesto del Estado
    { 
      questionText: 'El control externo de la gestión económica y financiera del Sector Público corresponde a:', 
      options: ['La Intervención General', 'El Tribunal de Cuentas', 'El Ministerio de Hacienda', 'El Banco de España'], 
      correctAnswer: 1,
      explanation: 'El artículo 136 de la Constitución establece que el Tribunal de Cuentas es el supremo órgano fiscalizador de las cuentas y de la gestión económica del Estado, así como del sector público.'
    },
    { 
      questionText: 'Si la Ley de Presupuestos no se aprueba antes del primer día del ejercicio económico correspondiente:', 
      options: ['Se paraliza la Administración', 'Se consideran automáticamente prorrogados los del ejercicio anterior', 'El Gobierno debe dimitir', 'Se aprueba un presupuesto de emergencia'], 
      correctAnswer: 1,
      explanation: 'El artículo 134.4 de la Constitución dispone que si la Ley de Presupuestos no se aprobara antes del primer día del ejercicio económico correspondiente, se considerarán automáticamente prorrogados los Presupuestos del ejercicio anterior hasta la aprobación de los nuevos.'
    },
    
    // Tema: Igualdad de Género
    { 
      questionText: 'La Ley Orgánica 3/2007 es para:', 
      options: ['La protección de datos', 'La igualdad efectiva de mujeres y hombres', 'La transparencia', 'El presupuesto'], 
      correctAnswer: 1,
      explanation: 'La Ley Orgánica 3/2007, de 22 de marzo, es para la igualdad efectiva de mujeres y hombres.'
    },
    { 
      questionText: 'El principio de presencia equilibrada se refiere a que las personas de cada sexo no superen el 60% ni sean menos del:', 
      options: ['20%', '30%', '40%', '50%'], 
      correctAnswer: 2,
      explanation: 'La Ley de Igualdad define la presencia equilibrada como aquella en la que las personas de cada sexo no superen el 60% ni sean menos del 40%.'
    },
    
    // Tema: Transparencia
    { 
      questionText: 'La Ley 19/2013 regula:', 
      options: ['La transparencia, el acceso a la información pública y el buen gobierno', 'El procedimiento administrativo', 'Los contratos', 'El presupuesto'], 
      correctAnswer: 0,
      explanation: 'La Ley 19/2013 tiene por objeto ampliar y reforzar la transparencia de la actividad pública, regular y garantizar el derecho de acceso a la información y establecer las obligaciones de buen gobierno.'
    },
    { 
      questionText: 'El derecho de acceso a la información pública puede ser limitado por:', 
      options: ['La seguridad nacional', 'La defensa', 'La protección de datos personales', 'Todas las anteriores'], 
      correctAnswer: 3,
      explanation: 'El derecho de acceso está sujeto a límites como la seguridad nacional, la defensa, las relaciones exteriores, la seguridad pública y la protección de datos, entre otros.'
    },
    
    // Tema: Protección de Datos
    { 
      questionText: '¿Qué es un dato de carácter personal?', 
      options: ['Cualquier información numérica', 'Cualquier información concerniente a personas físicas identificadas o identificables', 'Solo el DNI', 'Solo el nombre'], 
      correctAnswer: 1,
      explanation: 'Se considera dato personal cualquier información numérica, alfabética, gráfica, fotográfica, acústica o de cualquier otro tipo concerniente a personas físicas identificadas o identificables.'
    },
    { 
      questionText: 'El consentimiento para el tratamiento de datos debe ser:', 
      options: ['Tácito', 'Inequívoco', 'Presunto', 'Obligatorio'], 
      correctAnswer: 1,
      explanation: 'El RGPD exige que el consentimiento sea libre, específico, informado e inequívoco.'
    },
    
    // Tema: Discapacidad
    { 
      questionText: 'La reserva de plazas para personas con discapacidad en la oferta de empleo público es del:', 
      options: ['2%', '5%', '7%', '10%'], 
      correctAnswer: 2,
      explanation: 'En las ofertas de empleo público se reservará un cupo no inferior al 7% de las vacantes para ser cubiertas por personas con discapacidad.'
    },
    { 
      questionText: '¿Qué ley regula los derechos de las personas con discapacidad?', 
      options: ['Ley General de Sanidad', 'Texto Refundido de la Ley General de derechos de las personas con discapacidad y de su inclusión social', 'Código Civil', 'Estatuto de los Trabajadores'], 
      correctAnswer: 1,
      explanation: 'Es el Real Decreto Legislativo 1/2013, de 29 de noviembre.'
    },
  ]
};
