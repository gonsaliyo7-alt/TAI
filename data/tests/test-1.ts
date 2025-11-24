
import type { Test } from '../../types';

export const TEST_1: Test = {
  id: 'test-1',
  title: 'Test 1: Organización del Estado (Temas 1-5)',
  questions: [
    // Tema 1: Constitución Española
    { questionText: 'Según el artículo 1 de la Constitución, ¿qué forma política adopta el Estado español?', options: ['República Federal', 'Monarquía Parlamentaria', 'Estado Social y Democrático', 'Monarquía Constitucional'], correctAnswer: 1 },
    { questionText: '¿Cuál de los siguientes NO es un valor superior del ordenamiento jurídico español?', options: ['La libertad', 'La justicia', 'La igualdad', 'La solidaridad'], correctAnswer: 3 },
    
    // Tema 2: Derechos y deberes
    { questionText: '¿Qué recurso cabe interponer ante el Tribunal Constitucional por violación de los derechos fundamentales reconocidos en los artículos 14 a 29?', options: ['Recurso de inconstitucionalidad', 'Cuestión de inconstitucionalidad', 'Recurso de amparo', 'Recurso de reforma'], correctAnswer: 2 },
    { questionText: 'El Defensor del Pueblo es designado por las Cortes Generales por un periodo de:', options: ['4 años', '5 años', '6 años', '3 años'], correctAnswer: 1 },
    
    // Tema 3: La Corona
    { questionText: '¿A quién corresponde proponer el candidato a Presidente del Gobierno según la Constitución?', options: ['Al Rey, previa consulta con los representantes de los grupos políticos', 'Al Presidente del Congreso', 'Al Consejo de Estado', 'Al Gobierno saliente'], correctAnswer: 0 },
    { questionText: 'Los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes. De los actos del Rey serán responsables:', options: ['El propio Rey', 'Las personas que los refrenden', 'El Tribunal Supremo', 'Nadie, son actos simbólicos'], correctAnswer: 1 },
    
    // Tema 4: Cortes Generales y Poder Judicial
    { questionText: 'Las Cortes Generales están formadas por:', options: ['El Congreso de los Diputados exclusivamente', 'El Congreso de los Diputados y el Senado', 'El Gobierno y el Parlamento', 'El Rey y las Cámaras'], correctAnswer: 1 },
    { questionText: 'El Consejo General del Poder Judicial es el órgano de gobierno de:', options: ['Los Jueces y Magistrados', 'Los Fiscales', 'El Tribunal Constitucional', 'El Ministerio de Justicia'], correctAnswer: 0 },
    
    // Tema 5: Gobierno y Tribunal Constitucional
    { questionText: 'El Gobierno responde solidariamente de su gestión política ante:', options: ['El Rey', 'El Congreso de los Diputados', 'El Senado', 'El Tribunal Supremo'], correctAnswer: 1 },
    { questionText: 'Los miembros del Tribunal Constitucional son nombrados por un periodo de:', options: ['4 años', '5 años', '9 años', '12 años'], correctAnswer: 2 }
  ]
};
