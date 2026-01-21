
export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: number;
  scenario?: string; // Campo opcional para el supuesto específico de esta pregunta (o grupo de preguntas)
  explanation?: string; // Explicación de por qué la respuesta es correcta
}

export interface Test {
  id: string;
  title: string;
  scenario?: string; // Campo opcional para el texto del supuesto práctico global (si aplica a todo el test)
  questions: Question[];
  totalQuestions?: number;
}

export interface TestResult {
  score: number;
  status: 'passed' | 'failed';
  totalQuestions?: number;
  date?: string;
}

export interface TestResults {
  [key: string]: TestResult;
}

export interface TestAttempt extends TestResult {
  id: string; // ID único para el intento
  testId: string; // ID del test realizado
  testTitle: string; // Título del test realizado
}

export type TestHistory = TestAttempt[];

export interface UserTrophies {
  diamonds: number;
  trophies: number;
  diplomas: number;
}
