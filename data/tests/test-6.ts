
import type { Test } from '../../types';

export const TEST_6: Test = {
  id: 'test-6',
  title: 'Test 6: Delitos y Dº Penitenciario I (Temas 26-30)',
  questions: [
    // Tema 26: Delitos personas y patrimonio
    { questionText: 'El que matare a otro concurriendo alevosía comete un delito de:', options: ['Homicidio imprudente', 'Asesinato', 'Homicidio doloso', 'Lesiones'], correctAnswer: 1 },
    { questionText: 'El delito de estafa se caracteriza fundamentalmente por el uso de:', options: ['Fuerza en las cosas', 'Violencia o intimidación', 'Engaño bastante', 'Armas'], correctAnswer: 2 },
    
    // Tema 27: Delitos sexuales y honor
    { questionText: 'En los delitos contra la libertad sexual, tras la reforma de la LO 10/2022, la distinción entre abuso y agresión:', options: ['Se mantiene igual', 'Desaparece, unificándose en agresión sexual', 'Se basa en la edad', 'Depende del horario'], correctAnswer: 1 },
    { questionText: 'La acción o expresión que lesionan la dignidad de otra persona, menoscabando su fama, constituye:', options: ['Calumnia', 'Injuria', 'Falso testimonio', 'Amenaza'], correctAnswer: 1 },
    
    // Tema 28: LOGP
    { questionText: 'La Ley Orgánica General Penitenciaria establece que la actividad penitenciaria se ejercerá respetando:', options: ['La personalidad del interno y sus derechos e intereses legítimos no afectados por la condena', 'Solo las órdenes del Director', 'La voluntad de la víctima', 'La religión católica'], correctAnswer: 0 },
    { questionText: 'Según la LOGP, ¿cuál es el fin primordial de las instituciones penitenciarias?', options: ['La retención y custodia', 'La reeducación y reinserción social', 'El castigo físico', 'La explotación laboral'], correctAnswer: 1 },
    
    // Tema 29: El interno
    { questionText: 'Los internos tienen derecho a ser llamados por:', options: ['Su número de expediente', 'Su mote o alias', 'Su nombre', 'Su delito'], correctAnswer: 2 },
    { questionText: 'Las comunicaciones de los internos con sus abogados defensores:', options: ['Pueden ser intervenidas siempre', 'No pueden ser suspendidas ni intervenidas, salvo orden judicial y supuestos de terrorismo', 'Deben hacerse en presencia de un funcionario', 'Están prohibidas'], correctAnswer: 1 },
    
    // Tema 30: Personal penitenciario
    { questionText: 'El Cuerpo de Ayudantes de Instituciones Penitenciarias realiza funciones de:', options: ['Vigilancia, custodia y tareas administrativas', 'Dirección del centro', 'Tratamiento psicológico', 'Asistencia jurídica'], correctAnswer: 0 },
    { questionText: 'Los funcionarios de instituciones penitenciarias, en el ejercicio de sus funciones, tienen la consideración de:', options: ['Personal laboral', 'Autoridad (o Agentes de la autoridad)', 'Jueces', 'Militares'], correctAnswer: 1 }
  ]
};
