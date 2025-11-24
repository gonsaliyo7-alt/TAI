
import type { Test } from '../../types';

export const TEST_7: Test = {
  id: 'test-7',
  title: 'Test 7: Dº Penitenciario II (Temas 31-35)',
  questions: [
    // Tema 31: Establecimientos Penitenciarios
    { questionText: 'Los establecimientos de preventivos están destinados a:', options: ['El cumplimiento de penas privativas de libertad', 'La retención y custodia de detenidos y presos', 'El cumplimiento en régimen abierto', 'La asistencia hospitalaria'], correctAnswer: 1 },
    { questionText: '¿Cómo se denominan los departamentos para jóvenes según el Reglamento Penitenciario?', options: ['Departamentos de menores', 'Departamentos de jóvenes (menores de 21 años, excepcionalmente 25)', 'Escuelas reformatorio', 'Centros de día'], correctAnswer: 1 },
    
    // Tema 32: Ingreso y libertad
    { questionText: 'El ingreso de un detenido en prisión requiere obligatoriamente:', options: ['Orden de detención de la policía', 'Mandamiento judicial de prisión o detención', 'Solicitud de la familia', 'Petición del propio interno'], correctAnswer: 1 },
    { questionText: 'En el momento del ingreso, si el interno presenta lesiones, ¿qué se debe hacer?', options: ['Ignorarlas', 'Dar cuenta inmediata al Juez de Guardia', 'Esperar a que se curen', 'Sancionar al interno'], correctAnswer: 1 },
    
    // Tema 33: Clasificación
    { questionText: 'El tercer grado de tratamiento corresponde al régimen:', options: ['Cerrado', 'Ordinario', 'Abierto', 'Preventivo'], correctAnswer: 2 },
    { questionText: 'La propuesta de clasificación inicial debe formularse en el plazo máximo de:', options: ['1 mes desde el ingreso', '2 meses desde la recepción del testimonio de sentencia', '6 meses', '15 días'], correctAnswer: 1 },
    
    // Tema 34: Régimen Ordinario
    { questionText: 'En el régimen ordinario, los recuentos de la población reclusa se harán:', options: ['Una vez al día', 'Al menos, al levantarse, al acostarse y en los relevos de servicio', 'Solo si hay sospecha de fuga', 'Semanalmente'], correctAnswer: 1 },
    { questionText: '¿Cuál es el horario habitual de silencio nocturno en régimen ordinario?', options: ['De 22:00 a 07:00', 'Desde el cierre de celdas hasta la apertura (mínimo 8 horas)', 'De 00:00 a 10:00', 'No hay horario fijo'], correctAnswer: 1 },
    
    // Tema 35: Régimen Abierto
    { questionText: 'El régimen abierto se caracteriza por:', options: ['La ausencia de controles rígidos y la confianza en el interno', 'El aislamiento en celda', 'Muros de 6 metros de altura', 'La vigilancia armada'], correctAnswer: 0 },
    { questionText: '¿Qué es un CIS?', options: ['Centro de Internamiento de Seguridad', 'Centro de Inserción Social', 'Centro de Instrucción Superior', 'Comisión de Investigación'], correctAnswer: 1 }
  ]
};
