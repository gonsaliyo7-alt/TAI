
export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: number;
  scenario?: string; // Campo opcional para el supuesto específico de esta pregunta (o grupo de preguntas)
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
}

export interface TestResults {
  [key: string]: TestResult;
}
