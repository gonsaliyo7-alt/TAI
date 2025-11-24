
import type { Test } from '../../types';

export const TEST_8: Test = {
  id: 'test-8',
  title: 'Test 8: Dº Penitenciario III (Temas 36-40)',
  questions: [
    // Tema 36: Régimen Cerrado
    { questionText: 'El régimen cerrado se aplica a internos calificados en:', options: ['Segundo grado', 'Primer grado', 'Tercer grado', 'Preventivos siempre'], correctAnswer: 1 },
    { questionText: 'En la modalidad de departamentos de régimen cerrado, los internos disfrutarán de un mínimo de horas de salida al patio de:', options: ['1 hora diaria', '4 horas diarias', '3 horas diarias (o 4 si hay actividades)', '8 horas diarias'], correctAnswer: 1 },
    
    // Tema 37: Permisos de salida
    { questionText: 'Para conceder un permiso ordinario es necesario haber cumplido:', options: ['La mitad de la condena', 'La cuarta parte de la condena', 'Las tres cuartas partes', 'Un año de prisión'], correctAnswer: 1 },
    { questionText: 'Los permisos extraordinarios se conceden por:', options: ['Buena conducta', 'Motivos graves justificados (fallecimiento familiar, nacimiento hijo...)', 'Antigüedad', 'Vacaciones'], correctAnswer: 1 },
    
    // Tema 38: Libertad condicional
    { questionText: 'La revocación de la libertad condicional se produce si:', options: ['El liberado delinque o incumple las reglas de conducta', 'No encuentra trabajo', 'Llega tarde a casa un día', 'No tiene dinero'], correctAnswer: 0 },
    { questionText: '¿Qué grado de tratamiento es necesario para acceder a la libertad condicional ordinaria?', options: ['Primero', 'Segundo', 'Tercero', 'Cuarto'], correctAnswer: 2 },
    
    // Tema 39: Asistencia Social
    { questionText: 'La Comisión de Asistencia Social Penitenciaria tiene como función:', options: ['Juzgar al interno', 'Prestar asistencia a los internos, liberados y familiares', 'Vigilar los muros', 'Limpiar las celdas'], correctAnswer: 1 },
    { questionText: '¿Qué ayuda económica existe para los liberados de prisión que no tengan derecho a desempleo?', options: ['El subsidio de liberados de prisión', 'La pensión de jubilación', 'La beca de estudios', 'Ninguna'], correctAnswer: 0 },
    
    // Tema 40: El trabajo penitenciario
    { questionText: 'La relación laboral especial penitenciaria se caracteriza por:', options: ['Ser obligatoria para todos', 'Ser voluntaria, retribuida y con Seguridad Social', 'No tener derecho a vacaciones', 'Ser gratuita'], correctAnswer: 1 },
    { questionText: '¿Quién es el empleador en el trabajo productivo en los talleres penitenciarios?', options: ['El Director de la prisión', 'La Entidad Estatal TPFE (o empresa colaboradora)', 'El Ministerio de Justicia', 'El funcionario de vigilancia'], correctAnswer: 1 }
  ]
};
