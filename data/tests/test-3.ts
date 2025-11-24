
import type { Test } from '../../types';

export const TEST_3: Test = {
  id: 'test-3',
  title: 'Test 3: Función Pública y Procedimiento (Temas 11-15)',
  questions: [
    // Tema 11: La Administración Pública
    { questionText: '¿Cuál de los siguientes es un principio de actuación de la Administración Pública según la Constitución?', options: ['Arbitrariedad', 'Eficacia', 'Secreto', 'Lentitud'], correctAnswer: 1 },
    { questionText: 'La potestad sancionadora de la Administración:', options: ['Puede imponer penas de prisión', 'No puede imponer penas privativas de libertad', 'Es ilimitada', 'Sustituye a los Tribunales Penales'], correctAnswer: 1 },
    
    // Tema 12: Ley 40/2015 Sector Público
    { questionText: 'Según la Ley 40/2015, los órganos administrativos podrán dirigir las actividades de sus órganos jerárquicamente dependientes mediante:', options: ['Instrucciones y órdenes de servicio', 'Decretos Leyes', 'Sentencias', 'Reglamentos orgánicos'], correctAnswer: 0 },
    { questionText: '¿Qué principio rige las relaciones entre las distintas Administraciones Públicas?', options: ['Jerarquía', 'Lealtad institucional', 'Competencia desleal', 'Subordinación absoluta'], correctAnswer: 1 },
    
    // Tema 13: El personal al servicio de las AAPP
    { questionText: 'Según el EBEP, ¿quiénes son empleados públicos?', options: ['Solo los funcionarios de carrera', 'Funcionarios de carrera, interinos, personal laboral y personal eventual', 'Solo el personal laboral', 'Los políticos electos'], correctAnswer: 1 },
    { questionText: 'El personal eventual se caracteriza por:', options: ['Tener un nombramiento permanente', 'Realizar funciones de confianza o asesoramiento especial', 'Acceder por concurso-oposición', 'Ser inamovible'], correctAnswer: 1 },
    
    // Tema 14: Adquisición y pérdida relación servicio
    { questionText: '¿Cuál de las siguientes NO es una causa de pérdida de la condición de funcionario de carrera?', options: ['La renuncia', 'La jubilación', 'La sanción disciplinaria de separación del servicio', 'La excedencia voluntaria por interés particular'], correctAnswer: 3 },
    { questionText: '¿Qué tipo de falta es el abandono del servicio según el régimen disciplinario?', options: ['Leve', 'Grave', 'Muy grave', 'No es falta'], correctAnswer: 2 },
    
    // Tema 15: Ley 39/2015
    { questionText: 'Según la Ley 39/2015, los sábados se consideran días:', options: ['Hábiles', 'Inhábiles', 'Festivos', 'Depende de la CCAA'], correctAnswer: 1 },
    { questionText: 'Contra los actos que ponen fin a la vía administrativa, ¿qué recurso administrativo cabe interponer?', options: ['Recurso de alzada', 'Recurso potestativo de reposición', 'Recurso de queja', 'Ninguno, solo vía judicial'], correctAnswer: 1 }
  ]
};
