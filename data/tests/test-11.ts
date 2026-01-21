
import type { Test } from '../../types';

export const TEST_11: Test = {
  id: 'test-11',
  title: 'Test 11: Bloque I - Organización del Estado',
  questions: [
    // Constitución Española
    {
      questionText: '¿Qué mayoría se requiere en el Senado para la reforma constitucional por el procedimiento ordinario (art. 167)?',
      options: ['Mayoría absoluta', 'Tres quintos', 'Dos tercios', 'Mayoría simple'],
      correctAnswer: 1,
      explanation: 'El artículo 167 de la Constitución establece que los proyectos de reforma constitucional deberán ser aprobados por una mayoría de tres quintos de cada una de las Cámaras.'
    },
    {
      questionText: 'El Título Preliminar de la Constitución establece que la soberanía nacional reside en:',
      options: ['El Rey', 'Las Cortes Generales', 'El pueblo español', 'El Gobierno'],
      correctAnswer: 2,
      explanation: 'El artículo 1.2 de la Constitución establece que la soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado.'
    },

    // Derechos y deberes
    {
      questionText: 'El procedimiento de "Habeas Corpus" tiene por objeto:',
      options: ['La inmediata puesta a disposición judicial de toda persona detenida ilegalmente', 'La defensa de la propiedad privada', 'El recurso de amparo', 'La solicitud de asilo'],
      correctAnswer: 0,
      explanation: 'El artículo 17.4 de la Constitución establece el procedimiento de "habeas corpus" para producir la inmediata puesta a disposición judicial de toda persona detenida ilegalmente.'
    },
    {
      questionText: '¿En qué estados se pueden suspender los derechos del artículo 19 (libertad de residencia y circulación)?',
      options: ['Solo en estado de sitio', 'En estado de excepción y de sitio', 'En estado de alarma, excepción y sitio', 'Nunca'],
      correctAnswer: 1,
      explanation: 'El artículo 55.1 de la Constitución establece que los derechos reconocidos en el artículo 19 podrán ser suspendidos cuando se acuerde la declaración del estado de excepción o de sitio.'
    },

    // La Corona
    {
      questionText: '¿Quién asume la Regencia si el Rey es menor de edad y no tiene padre ni madre?',
      options: ['El Príncipe de Asturias', 'El pariente mayor de edad más próximo a suceder en la Corona', 'El Presidente del Gobierno', 'El Presidente del Congreso'],
      correctAnswer: 1,
      explanation: 'El artículo 59.1 de la Constitución establece que si el Rey fuere menor de edad, entrará a ejercer la Regencia el padre o la madre y, en su defecto, el pariente mayor de edad más próximo a suceder en la Corona.'
    },
    {
      questionText: 'La Reina consorte o el consorte de la Reina:',
      options: ['Podrán asumir funciones constitucionales libremente', 'No podrán asumir funciones constitucionales, salvo lo dispuesto para la Regencia', 'Tienen poder ejecutivo', 'Pueden vetar leyes'],
      correctAnswer: 1,
      explanation: 'El artículo 58 de la Constitución establece que la Reina consorte o el consorte de la Reina no podrán asumir funciones constitucionales, salvo lo dispuesto para la Regencia.'
    },

    // Cortes Generales
    {
      questionText: 'Las Cámaras se reúnen anualmente en dos periodos ordinarios de sesiones. El primero es:',
      options: ['De enero a junio', 'De septiembre a diciembre', 'De febrero a junio', 'De septiembre a junio'],
      correctAnswer: 1,
      explanation: 'El artículo 73 de la Constitución establece que las Cámaras se reunirán anualmente en dos períodos ordinarios de sesiones: el primero, de septiembre a diciembre, y el segundo, de febrero a junio.'
    },
    {
      questionText: '¿Qué órgano ejerce las funciones de las Cámaras cuando estas están disueltas?',
      options: ['La Mesa del Congreso', 'La Junta de Portavoces', 'La Diputación Permanente', 'El Gobierno en funciones'],
      correctAnswer: 2,
      explanation: 'El artículo 78 de la Constitución establece que en cada Cámara habrá una Diputación Permanente que velará por los poderes de la Cámara cuando ésta no esté reunida o hubiere sido disuelta.'
    },

    // Gobierno y Tribunal Constitucional
    {
      questionText: 'La cuestión de confianza se plantea por el Presidente del Gobierno ante:',
      options: ['El Senado', 'El Congreso de los Diputados', 'El Rey', 'El Consejo de Estado'],
      correctAnswer: 1,
      explanation: 'El artículo 112 de la Constitución establece que el Presidente del Gobierno, previa deliberación del Consejo de Ministros, puede plantear ante el Congreso de los Diputados la cuestión de confianza.'
    },
    {
      questionText: 'Para interponer un recurso de inconstitucionalidad están legitimados 50 Diputados y:',
      options: ['25 Senadores', '50 Senadores', 'El Defensor del Pueblo y el Ministerio Fiscal', 'Cualquier ciudadano'],
      correctAnswer: 1,
      explanation: 'El artículo 162.1.a) de la Constitución legitima para interponer el recurso de inconstitucionalidad al Presidente del Gobierno, el Defensor del Pueblo, 50 Diputados, 50 Senadores, los órganos colegiados ejecutivos de las CCAA y, en su caso, las Asambleas de las mismas.'
    },
  ]
};
