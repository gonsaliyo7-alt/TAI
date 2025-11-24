
import type { Test } from '../../types';

export const TEST_12: Test = {
  id: 'test-12',
  title: 'Test 12: Org. Territorial II (Temas 6-10)',
  questions: [
    // Tema 6: Organización territorial
    { questionText: '¿Quién nombra y separa a los Delegados del Gobierno en las Comunidades Autónomas?', options: ['El Rey', 'El Presidente de la CCAA', 'El Consejo de Ministros, a propuesta del Presidente del Gobierno', 'El Ministro del Interior'], correctAnswer: 2 },
    { questionText: 'Las competencias exclusivas del Estado están enumeradas en el artículo:', options: ['148 de la Constitución', '149 de la Constitución', '150 de la Constitución', '155 de la Constitución'], correctAnswer: 1 },
    
    // Tema 7: La Unión Europea
    { questionText: '¿Dónde tiene su sede oficial el Parlamento Europeo?', options: ['Bruselas', 'Luxemburgo', 'Estrasburgo', 'Frankfurt'], correctAnswer: 2 },
    { questionText: 'El Diario Oficial donde se publica la legislación de la UE se denomina:', options: ['BOE', 'DOUE', 'BOP', 'Gaceta Europea'], correctAnswer: 1 },
    
    // Tema 8: Fuentes del Derecho
    { questionText: 'La costumbre solo regirá en defecto de:', options: ['Ley aplicable', 'Principios generales del derecho', 'Jurisprudencia', 'Doctrina'], correctAnswer: 0 },
    { questionText: 'Los Reglamentos no podrán regular:', options: ['Materias objeto de reserva de Ley', 'Aspectos organizativos', 'Cuestiones técnicas', 'Horarios de oficinas'], correctAnswer: 0 },
    
    // Tema 9: Acto administrativo
    { questionText: 'Son nulos de pleno derecho los actos que:', options: ['Carezcan de los requisitos formales indispensables', 'Lesionen el contenido esencial de los derechos y libertades susceptibles de amparo constitucional', 'Tengan defecto de forma', 'Sean dictados fuera de plazo'], correctAnswer: 1 },
    { questionText: 'La anulabilidad de un acto administrativo implica que el acto es:', options: ['Válido hasta que se impugne', 'Inválido desde el origen', 'Inexistente', 'Imposible de convalidar'], correctAnswer: 0 },
    
    // Tema 10: Procedimiento administrativo
    { questionText: 'El desistimiento en el procedimiento administrativo implica:', options: ['Renunciar al derecho', 'Renunciar a continuar el procedimiento, pero no al derecho', 'Aceptar la resolución', 'La caducidad por inactividad'], correctAnswer: 1 },
    { questionText: 'La ejecución forzosa de los actos administrativos puede realizarse mediante multa coercitiva cuando:', options: ['Se trate de actos personalísimos', 'Lo autoricen las leyes y sea para vencer la resistencia del obligado', 'El obligado no tenga dinero', 'Sea un delito'], correctAnswer: 1 }
  ]
};
