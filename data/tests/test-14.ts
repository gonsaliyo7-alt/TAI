
import type { Test } from '../../types';

export const TEST_14: Test = {
  id: 'test-14',
  title: 'Test 14: Presupuesto y Contratación Pública',
  questions: [
    // Tema 16: Presupuesto
    {
      questionText: '¿Qué principio presupuestario exige que todos los ingresos y gastos se incluyan en un único documento?',
      options: ['Principio de unidad', 'Principio de especialidad', 'Principio de universalidad', 'Principio de anualidad'],
      correctAnswer: 0,
      explanation: 'El principio de unidad presupuestaria exige que todos los ingresos y gastos del Estado se incluyan en un único documento para facilitar su control y aprobación.'
    },
    {
      questionText: 'Los créditos ampliables son aquellos cuya cuantía:',
      options: ['No puede aumentarse', 'Puede incrementarse en función de la recaudación o reconocimiento de obligaciones específicas', 'Se puede transferir libremente', 'Es secreta'],
      correctAnswer: 1,
      explanation: 'Los créditos ampliables (art. 54 LGP) son aquellos que pueden incrementarse en función de la efectiva recaudación de los derechos afectados o de las obligaciones específicas que se reconozcan.'
    },

    // Tema: Contratos del Sector Público (LCSP)
    {
      questionText: '¿Cuál es el plazo de duración máximo de un contrato de servicios, incluidas las prórrogas?',
      options: ['3 años', '4 años', '5 años', '6 años'],
      correctAnswer: 2,
      explanation: 'Según el artículo 29 de la LCSP, la duración de los contratos de servicios no podrá exceder de 5 años, incluyendo las posibles prórrogas.'
    },
    {
      questionText: '¿Qué tipo de contrato es aquel que tiene por objeto la adquisición de productos o bienes muebles?',
      options: ['Contrato de obras', 'Contrato de servicios', 'Contrato de suministro', 'Contrato de concesión'],
      correctAnswer: 2,
      explanation: 'El contrato de suministro tiene por objeto la adquisición, el arrendamiento financiero, o el arrendamiento, con o sin opción de compra, de productos o bienes muebles.'
    },

    // Tema: Procedimiento de Contratación
    {
      questionText: '¿Qué procedimiento de adjudicación permite la negociación de los términos del contrato con los licitadores?',
      options: ['Procedimiento abierto', 'Procedimiento restringido', 'Procedimiento negociado', 'Asociación para la innovación'],
      correctAnswer: 2,
      explanation: 'En el procedimiento negociado la adjudicación recae en el licitador justificadamente elegido por el órgano de contratación, tras efectuar consultas con diversos candidatos y negociar las condiciones.'
    },
    {
      questionText: 'El recurso especial en materia de contratación es:',
      options: ['Obligatorio', 'Potestativo y gratuito', 'Judicial', 'De pago'],
      correctAnswer: 1,
      explanation: 'El recurso especial en materia de contratación es de carácter potestativo y gratuito para el recurrente.'
    },

    // Tema: Ejecución Presupuestaria
    {
      questionText: 'La fase de "Compromiso" del gasto (Fase D) implica:',
      options: ['El pago material', 'La autorización del gasto', 'El acuerdo de realización de gastos previamente autorizados por un importe determinado', 'La propuesta de pago'],
      correctAnswer: 2,
      explanation: 'El compromiso de gasto (D) es el acto por el que se acuerda la realización de gastos previamente autorizados, por un importe determinado o determinable.'
    },
    {
      questionText: '¿Qué documento contable refleja la fase de Reconocimiento de la Obligación?',
      options: ['Documento A', 'Documento D', 'Documento OK', 'Documento P'],
      correctAnswer: 2,
      explanation: 'El documento OK (o ADOK si se acumulan fases) refleja el reconocimiento de la obligación y la propuesta de pago.'
    },

    // Tema: Modificaciones Presupuestarias
    {
      questionText: 'La transferencia de crédito:',
      options: ['Aumenta el presupuesto total', 'Disminuye el presupuesto total', 'No altera la cuantía total del presupuesto', 'Crea nuevos créditos'],
      correctAnswer: 2,
      explanation: 'La transferencia de crédito es una modificación cualitativa que traspasa dotaciones de un crédito a otro sin alterar la cuantía total del presupuesto.'
    },
    {
      questionText: 'Los créditos extraordinarios se tramitan cuando:',
      options: ['No existe crédito presupuestario para un gasto', 'El crédito es insuficiente', 'Sobra dinero', 'Se quiere ahorrar'],
      correctAnswer: 0,
      explanation: 'Se tramita un crédito extraordinario cuando ha de realizarse un gasto que no puede demorarse y no existe crédito presupuestario.'
    },
  ]
};
