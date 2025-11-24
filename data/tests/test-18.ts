
import type { Test } from '../../types';

export const TEST_18: Test = {
  id: 'test-18',
  title: 'Test 18: Dº Penitenciario VI (36-40)',
  questions: [
    // Tema 36: Régimen Cerrado
    { questionText: 'El artículo 91 del Reglamento Penitenciario regula:', options: ['El régimen abierto', 'El régimen ordinario', 'Las modalidades de vida en régimen cerrado', 'Las visitas'], correctAnswer: 2 },
    { questionText: 'En los departamentos de régimen cerrado, los cacheos de celdas se realizarán:', options: ['Semanalmente', 'Mensualmente', 'Diariamente', 'Nunca'], correctAnswer: 2 },
    
    // Tema 37: Permisos
    { questionText: 'Los permisos ordinarios tienen una duración máxima anual para internos en 2º grado de:', options: ['36 días', '48 días', '18 días', '12 días'], correctAnswer: 0 },
    { questionText: 'Si un interno tiene que salir por fallecimiento de un familiar y es peligroso, el permiso extraordinario será:', options: ['Denegado siempre', 'Concedido con medidas de seguridad (custodia policial)', 'Concedido libremente', 'Aplazado'], correctAnswer: 1 },
    
    // Tema 38: Libertad condicional
    { questionText: 'La libertad condicional se puede adelantar a los 90 años de edad:', options: ['Falso', 'Verdadero, cumpliendo ciertos requisitos (septuagenarios)', 'Solo a los 70', 'A los 65'], correctAnswer: 1 },
    { questionText: 'Para la concesión de la libertad condicional se requiere un informe de:', options: ['Pronóstico de reinserción social', 'Antecedentes penales', 'Solvencia económica', 'Salud física exclusivamente'], correctAnswer: 0 },
    
    // Tema 39: Asistencia Social
    { questionText: 'La colaboración de las ONG y el voluntariado en prisión:', options: ['Está prohibida', 'Es fomentada por la Administración Penitenciaria', 'Es obligatoria', 'Solo para actos religiosos'], correctAnswer: 1 },
    { questionText: 'Los programas de intervención para drogodependientes son parte de la:', options: ['Seguridad', 'Asistencia y Tratamiento', 'Administración', 'Limpieza'], correctAnswer: 1 },
    
    // Tema 40: Trabajo
    { questionText: 'La retribución de los internos trabajadores se fija tomando como referencia:', options: ['El Salario Mínimo Interprofesional (proporcional)', 'Lo que quiera la empresa', 'No cobran', 'El sueldo de los funcionarios'], correctAnswer: 0 },
    { questionText: 'En caso de accidente laboral en los talleres productivos, el interno:', options: ['No tiene cobertura', 'Tiene derecho a las prestaciones de Seguridad Social correspondientes', 'Es expulsado', 'Paga los daños'], correctAnswer: 1 }
  ]
};
