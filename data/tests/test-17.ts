
import type { Test } from '../../types';

export const TEST_17: Test = {
  id: 'test-17',
  title: 'Test 17: Dº Penitenciario V (31-35)',
  questions: [
    // Tema 31: Establecimientos
    { questionText: 'Las Unidades de Madres están destinadas a:', options: ['Internas embarazadas', 'Internas con hijos menores de 3 años consigo', 'Visitas familiares', 'Madres de funcionarios'], correctAnswer: 1 },
    { questionText: '¿Pueden existir departamentos mixtos para hombres y mujeres?', options: ['No, la separación es absoluta', 'Sí, excepcionalmente para actividades o tratamiento específico', 'Sí, en todas las prisiones', 'Solo en régimen abierto'], correctAnswer: 1 },
    
    // Tema 32: Ingreso
    { questionText: 'En caso de presentación voluntaria sin orden judicial, el Director:', options: ['No puede admitirlo', 'Lo admite y recaba la orden judicial en 24 horas', 'Lo detiene', 'Llama a su familia'], correctAnswer: 1 },
    { questionText: 'La separación interior de los reclusos debe tener en cuenta:', options: ['El sexo, la edad y los antecedentes delictivos', 'La raza', 'La religión', 'La altura'], correctAnswer: 0 },
    
    // Tema 33: Clasificación
    { questionText: 'La regresión de grado procede cuando:', options: ['El interno evoluciona positivamente', 'Se produce una evolución negativa en el pronóstico de integración', 'Lleva mucho tiempo en el mismo grado', 'Lo pide la familia'], correctAnswer: 1 },
    { questionText: 'La Central Penitenciaria de Observación (CPO) se encarga de:', options: ['Vigilar con cámaras', 'Realizar labores de observación y clasificación de internos complejos', 'Cocinar', 'Limpiar'], correctAnswer: 1 },
    
    // Tema 34: Régimen Ordinario
    { questionText: 'El horario general del centro es aprobado por:', options: ['El Director', 'El Consejo de Dirección', 'La Junta de Tratamiento', 'El Juez'], correctAnswer: 1 },
    { questionText: 'El número de paquetes que un interno puede recibir en régimen ordinario es habitualmente:', options: ['Uno al año', 'Dos al mes', 'Diario', 'Sin límite'], correctAnswer: 1 },
    
    // Tema 35: Régimen Abierto
    { questionText: 'Los internos en tercer grado pueden ser asignados a Unidades Dependientes, que son:', options: ['Instalaciones ubicadas fuera del recinto penitenciario, gestionadas por entidades públicas o privadas', 'Celdas de castigo', 'Hospitales', 'Comisarías'], correctAnswer: 0 },
    { questionText: 'El artículo 100.2 del Reglamento Penitenciario permite:', options: ['La libertad total', 'Aplicar aspectos de un grado a internos clasificados en otro (principio de flexibilidad)', 'No trabajar', 'Salir sin permiso'], correctAnswer: 1 }
  ]
};
