
import type { Test } from '../../types';

export const TEST_12: Test = {
  id: 'test-12',
  title: 'Test 12: Bloque I - Organización Territorial y UE',
  questions: [
    // Organización territorial
    {
      questionText: '¿Quién nombra y separa a los Delegados del Gobierno en las Comunidades Autónomas?',
      options: ['El Rey', 'El Presidente de la CCAA', 'El Consejo de Ministros, a propuesta del Presidente del Gobierno', 'El Ministro del Interior'],
      correctAnswer: 2,
      explanation: 'El artículo 154 de la Constitución establece que un Delegado nombrado por el Gobierno dirigirá la Administración del Estado en el territorio de la Comunidad Autónoma. La Ley 40/2015 especifica que es nombrado por Real Decreto del Consejo de Ministros a propuesta del Presidente del Gobierno.'
    },
    {
      questionText: 'Las competencias exclusivas del Estado están enumeradas en el artículo:',
      options: ['148 de la Constitución', '149 de la Constitución', '150 de la Constitución', '155 de la Constitución'],
      correctAnswer: 1,
      explanation: 'El artículo 149 de la Constitución enumera las materias sobre las que el Estado tiene competencia exclusiva.'
    },

    // La Unión Europea
    {
      questionText: '¿Dónde tiene su sede oficial el Parlamento Europeo?',
      options: ['Bruselas', 'Luxemburgo', 'Estrasburgo', 'Frankfurt'],
      correctAnswer: 2,
      explanation: 'Aunque el Parlamento Europeo tiene lugares de trabajo en Bruselas y Luxemburgo, su sede oficial para los periodos parciales de sesiones plenarias mensuales es Estrasburgo (Francia).'
    },
    {
      questionText: 'El Diario Oficial donde se publica la legislación de la UE se denomina:',
      options: ['BOE', 'DOUE', 'BOP', 'Gaceta Europea'],
      correctAnswer: 1,
      explanation: 'El DOUE es el Diario Oficial de la Unión Europea, donde se publican los actos jurídicos de la Unión.'
    },

    // Fuentes del Derecho
    {
      questionText: 'La costumbre solo regirá en defecto de:',
      options: ['Ley aplicable', 'Principios generales del derecho', 'Jurisprudencia', 'Doctrina'],
      correctAnswer: 0,
      explanation: 'El artículo 1.3 del Código Civil establece que la costumbre sólo regirá en defecto de ley aplicable, siempre que no sea contraria a la moral o al orden público y que resulte probada.'
    },
    {
      questionText: 'Los Reglamentos no podrán regular:',
      options: ['Materias objeto de reserva de Ley', 'Aspectos organizativos', 'Cuestiones técnicas', 'Horarios de oficinas'],
      correctAnswer: 0,
      explanation: 'El artículo 128.2 de la Ley 39/2015 establece que los reglamentos no podrán regular materias objeto de reserva de Ley, ni infringir normas con dicho rango.'
    },

    // Acto administrativo
    {
      questionText: 'Son nulos de pleno derecho los actos que:',
      options: ['Carezcan de los requisitos formales indispensables', 'Lesionen el contenido esencial de los derechos y libertades susceptibles de amparo constitucional', 'Tengan defecto de forma', 'Sean dictados fuera de plazo'],
      correctAnswer: 1,
      explanation: 'El artículo 47.1.a) de la Ley 39/2015 establece que son nulos de pleno derecho los actos que lesionen los derechos y libertades susceptibles de amparo constitucional.'
    },
    {
      questionText: 'La anulabilidad de un acto administrativo implica que el acto es:',
      options: ['Válido hasta que se impugne', 'Inválido desde el origen', 'Inexistente', 'Imposible de convalidar'],
      correctAnswer: 0,
      explanation: 'Los actos anulables producen efectos hasta que son anulados (eficacia claudicante) y pueden ser convalidados, a diferencia de los nulos de pleno derecho.'
    },

    // Procedimiento administrativo
    {
      questionText: 'El desistimiento en el procedimiento administrativo implica:',
      options: ['Renunciar al derecho', 'Renunciar a continuar el procedimiento, pero no al derecho', 'Aceptar la resolución', 'La caducidad por inactividad'],
      correctAnswer: 1,
      explanation: 'El artículo 94 de la Ley 39/2015 distingue entre desistimiento (renuncia al procedimiento) y renuncia (al derecho, si no está prohibido). El desistimiento no impide volver a iniciar el procedimiento si el derecho no ha prescrito.'
    },
    {
      questionText: 'La ejecución forzosa de los actos administrativos puede realizarse mediante multa coercitiva cuando:',
      options: ['Se trate de actos personalísimos', 'Lo autoricen las leyes y sea para vencer la resistencia del obligado', 'El obligado no tenga dinero', 'Sea un delito'],
      correctAnswer: 1,
      explanation: 'El artículo 103 de la Ley 39/2015 establece la multa coercitiva como medio de ejecución forzosa cuando así lo autoricen las leyes, para actos personalísimos en que no proceda la compulsión o actos en que, procediendo la compulsión, la Administración no la estimara conveniente.'
    },
  ]
};
