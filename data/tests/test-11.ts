
import type { Test } from '../../types';

export const TEST_11: Test = {
  id: 'test-11',
  title: 'Test 11: Org. Estado II (Temas 1-5)',
  questions: [
    // Tema 1: Constitución Española
    { questionText: '¿Qué mayoría se requiere en el Senado para la reforma constitucional por el procedimiento ordinario (art. 167)?', options: ['Mayoría absoluta', 'Tres quintos', 'Dos tercios', 'Mayoría simple'], correctAnswer: 1 },
    { questionText: 'El Título Preliminar de la Constitución establece que la soberanía nacional reside en:', options: ['El Rey', 'Las Cortes Generales', 'El pueblo español', 'El Gobierno'], correctAnswer: 2 },
    
    // Tema 2: Derechos y deberes
    { questionText: 'El procedimiento de "Habeas Corpus" tiene por objeto:', options: ['La inmediata puesta a disposición judicial de toda persona detenida ilegalmente', 'La defensa de la propiedad privada', 'El recurso de amparo', 'La solicitud de asilo'], correctAnswer: 0 },
    { questionText: '¿En qué estados se pueden suspender los derechos del artículo 19 (libertad de residencia y circulación)?', options: ['Solo en estado de sitio', 'En estado de excepción y de sitio', 'En estado de alarma, excepción y sitio', 'Nunca'], correctAnswer: 1 },
    
    // Tema 3: La Corona
    { questionText: '¿Quién asume la Regencia si el Rey es menor de edad y no tiene padre ni madre?', options: ['El Príncipe de Asturias', 'El pariente mayor de edad más próximo a suceder en la Corona', 'El Presidente del Gobierno', 'El Presidente del Congreso'], correctAnswer: 1 },
    { questionText: 'La Reina consorte o el consorte de la Reina:', options: ['Podrán asumir funciones constitucionales libremente', 'No podrán asumir funciones constitucionales, salvo lo dispuesto para la Regencia', 'Tienen poder ejecutivo', 'Pueden vetar leyes'], correctAnswer: 1 },
    
    // Tema 4: Cortes Generales
    { questionText: 'Las Cámaras se reúnen anualmente en dos periodos ordinarios de sesiones. El primero es:', options: ['De enero a junio', 'De septiembre a diciembre', 'De febrero a junio', 'De septiembre a junio'], correctAnswer: 1 },
    { questionText: '¿Qué órgano ejerce las funciones de las Cámaras cuando estas están disueltas?', options: ['La Mesa del Congreso', 'La Junta de Portavoces', 'La Diputación Permanente', 'El Gobierno en funciones'], correctAnswer: 2 },
    
    // Tema 5: Gobierno y Tribunal Constitucional
    { questionText: 'La cuestión de confianza se plantea por el Presidente del Gobierno ante:', options: ['El Senado', 'El Congreso de los Diputados', 'El Rey', 'El Consejo de Estado'], correctAnswer: 1 },
    { questionText: 'Para interponer un recurso de inconstitucionalidad están legitimados 50 Diputados y:', options: ['25 Senadores', '50 Senadores', 'El Defensor del Pueblo y el Ministerio Fiscal', 'Cualquier ciudadano'], correctAnswer: 1 }
  ]
};
