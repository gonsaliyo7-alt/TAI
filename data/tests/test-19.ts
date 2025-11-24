
import type { Test } from '../../types';

export const TEST_19: Test = {
  id: 'test-19',
  title: 'Test 19: Dº Penitenciario VII (41-45)',
  questions: [
    // Tema 41: Disciplinario
    { questionText: '¿Quién compone la Comisión Disciplinaria?', options: ['Solo el Director', 'Director, Subdirector Seg., Subdirector Trat., Jurista, Jefe Servicios, 1 Funcionario y 1 Asistente Social', 'El Juez de Vigilancia', 'Los internos'], correctAnswer: 1 },
    { questionText: 'Las faltas muy graves prescriben a los:', options: ['3 años', '2 años', '1 año', '6 meses'], correctAnswer: 0 },
    
    // Tema 42: Recompensas
    { questionText: 'Las notas meritorias son:', options: ['Una sanción', 'Una recompensa que se anota en el expediente', 'Un permiso', 'Dinero'], correctAnswer: 1 },
    { questionText: 'Los premios en metálico concedidos como recompensa:', options: ['Se entregan en mano', 'Se abonan al peculio del interno', 'Son ilegales', 'Se envían a la familia'], correctAnswer: 1 },
    
    // Tema 43: Sanidad
    { questionText: 'La historia clínica de los internos es:', options: ['Pública', 'Confidencial', 'Accesible a todos los funcionarios', 'Propiedad del Juez'], correctAnswer: 1 },
    { questionText: 'Si un interno necesita hospitalización y no puede ser atendido en la enfermería:', options: ['Se le da el alta', 'Se le traslada a un hospital extra-penitenciario (preferentemente con unidad de custodia)', 'Se espera a que mejore', 'Se llama a un curandero'], correctAnswer: 1 },
    
    // Tema 44: Oficina
    { questionText: 'Al ingresar un interno se le toman las impresiones dactilares para:', options: ['Ver si tiene las manos limpias', 'Su plena identificación', 'Estudios estadísticos', 'Hacerle el DNI'], correctAnswer: 1 },
    { questionText: 'Las conducciones de traslado de presos entre centros las realiza habitualmente:', options: ['Los funcionarios de prisiones', 'La Guardia Civil', 'El Ejército', 'Empresas privadas'], correctAnswer: 1 },
    
    // Tema 45: Peculio
    { questionText: 'Las tarjetas monedero utilizadas en prisión sirven para:', options: ['Llamar por teléfono y comprar en economato', 'Abrir puertas', 'Identificarse', 'Salir a la calle'], correctAnswer: 0 },
    { questionText: '¿Existe un límite máximo de saldo de libre disposición semanal en las tarjetas?', options: ['No', 'Sí, establecido por el Consejo de Dirección', 'Es de 1000 euros', 'Depende del banco'], correctAnswer: 1 }
  ]
};
