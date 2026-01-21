
import type { Test } from '../../types';

export const TEST_1: Test = {
  id: 'test-1',
  title: 'Test 1: Organización y Funcionamiento de la Administración',
  questions: [
    // Tema: Constitución y Derechos Digitales
    {
      questionText: '¿Qué artículo de la Constitución Española garantiza el secreto de las comunicaciones?',
      options: ['Artículo 18.1', 'Artículo 18.2', 'Artículo 18.3', 'Artículo 18.4'],
      correctAnswer: 2,
      explanation: 'El artículo 18.3 garantiza el secreto de las comunicaciones y, en especial, de las postales, telegráficas y telefónicas, salvo resolución judicial.'
    },
    {
      questionText: 'El artículo 18.4 de la Constitución establece que la ley limitará el uso de la informática para garantizar:',
      options: ['El honor y la intimidad personal y familiar', 'La seguridad nacional', 'El desarrollo económico', 'La propiedad intelectual'],
      correctAnswer: 0,
      explanation: 'El artículo 18.4 establece que la ley limitará el uso de la informática para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.'
    },

    // Tema: Administración Electrónica
    {
      questionText: 'Según la Ley 40/2015, el Esquema Nacional de Interoperabilidad (ENI) tiene por objeto:',
      options: ['Comprender el conjunto de criterios y recomendaciones en materia de seguridad', 'Comprender el conjunto de criterios y recomendaciones que deberán ser tenidos en cuenta por las Administraciones Públicas para la toma de decisiones tecnológicas', 'Regular el DNI electrónico', 'Crear la sede electrónica'],
      correctAnswer: 1,
      explanation: 'El ENI comprende el conjunto de criterios y recomendaciones en materia de seguridad, conservación y normalización de la información, de los formatos y de las aplicaciones que deberán ser tenidos en cuenta por las Administraciones Públicas para la toma de decisiones tecnológicas que garanticen la interoperabilidad.'
    },
    {
      questionText: 'La sede electrónica es aquella dirección electrónica disponible para los ciudadanos cuya titularidad corresponde a:',
      options: ['Una empresa privada', 'Una Administración Pública', 'Cualquier ciudadano', 'Un proveedor de servicios de internet'],
      correctAnswer: 1,
      explanation: 'El artículo 38 de la Ley 40/2015 define la sede electrónica como aquella dirección electrónica, disponible para los ciudadanos a través de redes de telecomunicaciones, cuya titularidad corresponde a una Administración Pública.'
    },

    // Tema: Protección de Datos
    {
      questionText: '¿Quién es la autoridad de control independiente en materia de protección de datos en España?',
      options: ['El Ministerio del Interior', 'La Agencia Española de Protección de Datos (AEPD)', 'El Defensor del Pueblo', 'El Consejo de Estado'],
      correctAnswer: 1,
      explanation: 'La Agencia Española de Protección de Datos (AEPD) es la autoridad administrativa independiente de ámbito estatal encargada de velar por el cumplimiento de la normativa sobre protección de datos.'
    },
    {
      questionText: 'El Delegado de Protección de Datos (DPD) es obligatorio en:',
      options: ['Todas las empresas', 'Solo en empresas de más de 250 empleados', 'Las autoridades y organismos públicos', 'Nadie'],
      correctAnswer: 2,
      explanation: 'El RGPD y la LOPDGDD establecen la obligatoriedad de designar un DPD en las autoridades y organismos públicos.'
    },

    // Tema: Transparencia y Buen Gobierno
    {
      questionText: 'La Ley 19/2013 regula:',
      options: ['La transparencia, el acceso a la información pública y el buen gobierno', 'El procedimiento administrativo común', 'El régimen jurídico del sector público', 'La protección de datos'],
      correctAnswer: 0,
      explanation: 'La Ley 19/2013 tiene por objeto ampliar y reforzar la transparencia de la actividad pública, regular y garantizar el derecho de acceso a la información relativa a aquella actividad y establecer las obligaciones de buen gobierno.'
    },
    {
      questionText: 'El Portal de Transparencia de la Administración General del Estado facilitará el acceso a:',
      options: ['Toda la información de la Administración', 'La información cuyo conocimiento sea relevante para garantizar la transparencia de su actividad', 'Solo la información económica', 'Solo la información organizativa'],
      correctAnswer: 1,
      explanation: 'El Portal de Transparencia facilitará el acceso de los ciudadanos a toda la información a la que se refiere la Ley de Transparencia.'
    },

    // Tema: Igualdad
    {
      questionText: 'La Ley Orgánica 3/2007 es para:',
      options: ['La igualdad efectiva de mujeres y hombres', 'La protección integral contra la violencia de género', 'La conciliación de la vida familiar y laboral', 'La igualdad de trato y no discriminación'],
      correctAnswer: 0,
      explanation: 'La Ley Orgánica 3/2007, de 22 de marzo, es para la igualdad efectiva de mujeres y hombres.'
    },
    {
      questionText: 'El principio de presencia equilibrada se refiere a que las personas de cada sexo no superen el 60% ni sean menos del:',
      options: ['20%', '30%', '40%', '50%'],
      correctAnswer: 2,
      explanation: 'La Ley de Igualdad define la presencia equilibrada como aquella en la que las personas de cada sexo no superen el 60% ni sean menos del 40%.'
    }
  ]
};
