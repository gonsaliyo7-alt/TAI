
import type { Test, Question } from '../types';
import { TEST_1 } from './tests/test-1';
import { TEST_2 } from './tests/test-2';
import { TEST_3 } from './tests/test-3';
import { TEST_4 } from './tests/test-4';
import { TEST_5 } from './tests/test-5';
import { TEST_6 } from './tests/test-6';
import { TEST_7 } from './tests/test-7';
import { TEST_8 } from './tests/test-8';
import { TEST_9 } from './tests/test-9';
import { TEST_10 } from './tests/test-10';
import { TEST_11 } from './tests/test-11';
import { TEST_12 } from './tests/test-12';
import { TEST_13 } from './tests/test-13';
import { TEST_14 } from './tests/test-14';
import { TEST_15 } from './tests/test-15';
import { TEST_16 } from './tests/test-16';
import { TEST_17 } from './tests/test-17';
import { TEST_18 } from './tests/test-18';
import { TEST_19 } from './tests/test-19';
import { TEST_20 } from './tests/test-20';
import { TEST_EXAMEN_2021 } from './tests/test-examen-2021';
import { TEST_EXAMEN_2025 } from './tests/test-examen-2025';
import { TEST_EXAMEN_2019 } from './tests/test-examen-2019';
import { TEST_EXAMEN_2022 } from './tests/test-examen-2022';
import { TEST_EXAMEN_2020 } from './tests/test-examen-2020';

// Importar nuevos tests específicos por tema
import { TEST_TOPIC_1, TEST_TOPIC_2, TEST_TOPIC_3, TEST_TOPIC_4, TEST_TOPIC_5, TEST_TOPIC_6, TEST_TOPIC_7, TEST_TOPIC_8, TEST_TOPIC_9, TEST_TOPIC_10 } from './tests/topics-block-1';
import { TEST_TOPIC_11, TEST_TOPIC_12, TEST_TOPIC_13, TEST_TOPIC_14, TEST_TOPIC_15, TEST_TOPIC_16, TEST_TOPIC_17, TEST_TOPIC_18, TEST_TOPIC_19, TEST_TOPIC_20 } from './tests/topics-block-2';
import { TEST_TOPIC_21, TEST_TOPIC_22, TEST_TOPIC_23, TEST_TOPIC_24, TEST_TOPIC_25, TEST_TOPIC_26, TEST_TOPIC_27, TEST_TOPIC_28, TEST_TOPIC_29, TEST_TOPIC_30 } from './tests/topics-block-3';
import { TEST_TOPIC_31, TEST_TOPIC_32, TEST_TOPIC_33, TEST_TOPIC_34, TEST_TOPIC_35, TEST_TOPIC_36, TEST_TOPIC_37, TEST_TOPIC_38, TEST_TOPIC_39, TEST_TOPIC_40 } from './tests/topics-block-4';
import { TEST_TOPIC_41, TEST_TOPIC_42, TEST_TOPIC_43, TEST_TOPIC_44, TEST_TOPIC_45, TEST_TOPIC_46, TEST_TOPIC_47, TEST_TOPIC_48, TEST_TOPIC_49, TEST_TOPIC_50 } from './tests/topics-block-5';

const EXISTING_TESTS = [
  TEST_1, TEST_2, TEST_3, TEST_4, TEST_5, TEST_6, TEST_7, TEST_8, TEST_9, TEST_10,
  TEST_11, TEST_12, TEST_13, TEST_14, TEST_15, TEST_16, TEST_17, TEST_18, TEST_19, TEST_20,
  TEST_EXAMEN_2021,
  TEST_EXAMEN_2025,
  TEST_EXAMEN_2019,
  TEST_EXAMEN_2022,
  TEST_EXAMEN_2020,
];

const SPECIFIC_TOPIC_TESTS = [
  TEST_TOPIC_1, TEST_TOPIC_2, TEST_TOPIC_3, TEST_TOPIC_4, TEST_TOPIC_5, TEST_TOPIC_6, TEST_TOPIC_7, TEST_TOPIC_8, TEST_TOPIC_9, TEST_TOPIC_10,
  TEST_TOPIC_11, TEST_TOPIC_12, TEST_TOPIC_13, TEST_TOPIC_14, TEST_TOPIC_15, TEST_TOPIC_16, TEST_TOPIC_17, TEST_TOPIC_18, TEST_TOPIC_19, TEST_TOPIC_20,
  TEST_TOPIC_21, TEST_TOPIC_22, TEST_TOPIC_23, TEST_TOPIC_24, TEST_TOPIC_25, TEST_TOPIC_26, TEST_TOPIC_27, TEST_TOPIC_28, TEST_TOPIC_29, TEST_TOPIC_30,
  TEST_TOPIC_31, TEST_TOPIC_32, TEST_TOPIC_33, TEST_TOPIC_34, TEST_TOPIC_35, TEST_TOPIC_36, TEST_TOPIC_37, TEST_TOPIC_38, TEST_TOPIC_39, TEST_TOPIC_40,
  TEST_TOPIC_41, TEST_TOPIC_42, TEST_TOPIC_43, TEST_TOPIC_44, TEST_TOPIC_45, TEST_TOPIC_46, TEST_TOPIC_47, TEST_TOPIC_48, TEST_TOPIC_49, TEST_TOPIC_50,
];

// Combinamos TODOS los tests disponibles
const ACTIVE_TESTS = [...EXISTING_TESTS, ...SPECIFIC_TOPIC_TESTS];

// 1. Recopilar todas las preguntas en un único array para usarlas en los tests aleatorios
// Usamos un Map para eliminar duplicados exactos (mismo texto de pregunta)
const uniqueQuestionsMap = new Map<string, Question>();
ACTIVE_TESTS.forEach(test => {
  test.questions.forEach(q => {
    const key = q.questionText.trim();
    if (!uniqueQuestionsMap.has(key)) {
      uniqueQuestionsMap.set(key, q);
    }
  });
});

export const ALL_QUESTIONS: Question[] = Array.from(uniqueQuestionsMap.values());

// 2. Crear placeholders para los tests dinámicos
const infiniteTestPlaceholder: Test = {
  id: 'test-infinite',
  title: 'Test Infinito (Todas las preguntas)',
  questions: [],
  totalQuestions: 0, // Se calculará dinámicamente
};

const failedQuestionsTestPlaceholder: Test = {
  id: 'test-failed-questions',
  title: 'Repaso de Fallos (Preguntas Suspendidas)',
  questions: [],
  totalQuestions: 0, // Se calculará dinámicamente
};

const survivalTestPlaceholder: Test = {
  id: 'test-survival',
  title: 'Modo Supervivencia (Muerte Súbita)',
  questions: [],
  totalQuestions: 0,
};

const comprehensiveTestPlaceholder: Test = {
  id: 'test-all-comprehensive',
  title: 'Test General: 50 Preguntas (Toda la base de datos)',
  questions: [],
  totalQuestions: 50,
};

const quickTestPlaceholder: Test = {
  id: 'test-all-quick',
  title: 'Test Rápido: 10 Preguntas (Toda la base de datos)',
  questions: [],
  totalQuestions: 10,
};

const general25TestPlaceholder: Test = {
  id: 'test-all-25',
  title: 'Test General: 25 Preguntas (Toda la base de datos)',
  questions: [],
  totalQuestions: 25,
};

const aiTestPlaceholder: Test = {
  id: 'test-ai',
  title: 'Test por IA (Generativo)',
  questions: [],
  totalQuestions: 0,
};

const aiKoTestPlaceholder: Test = {
  id: 'test-ai-ko',
  title: 'Test IA K.O. (Generativo - 3 Vidas)',
  questions: [],
  totalQuestions: 0,
};

const koExamTestPlaceholder: Test = {
  id: 'test-ko-exams',
  title: 'Test del K.O. (Exámenes 2019-2025) - 3 Vidas',
  questions: [],
  totalQuestions: 0,
};

const rouletteTestPlaceholder: Test = {
  id: 'test-roulette',
  title: '🎲 Ruleta Rusa (6 Vidas - Recupera cada 5 aciertos)',
  questions: [],
  totalQuestions: 0,
};

// 3. Exportar todos los tests
export const TESTS_DATA: Test[] = [
  aiTestPlaceholder,
  aiKoTestPlaceholder,
  koExamTestPlaceholder,
  rouletteTestPlaceholder,
  survivalTestPlaceholder,
  failedQuestionsTestPlaceholder,
  infiniteTestPlaceholder,
  comprehensiveTestPlaceholder,
  general25TestPlaceholder,
  quickTestPlaceholder,
  ...ACTIVE_TESTS,
];
