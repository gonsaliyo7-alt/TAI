
import React, { useState, useMemo } from 'react';
import Dashboard from './components/Dashboard';
import TestView from './components/TestView';
import ResultsView from './components/ResultsView';
import InfoModal from './components/InfoModal';
import StatisticsView from './components/StatisticsView';
import FlashcardView from './components/FlashcardView';
import { TESTS_DATA, ALL_QUESTIONS } from './data/questions';
import { PRACTICAL_CASES } from './data/practicalCases';
import type { Test, TestResult, TestResults, Question } from './types';
import { useCookie } from './hooks/useCookie';
import { useLocalStorage } from './hooks/useLocalStorage';

// Keywords to filter deadline-related questions
const TIME_KEYWORDS = [
    'plazo', 'días', 'dia', 'mes', 'año', 'hora', 'tiempo', 'duración', 
    'prescri', 'caduc', 'antigüedad', 'cómputo', 'tardía', 'prórroga', 
    'vigencia', 'periodo', 'edad', 'fecha'
];

// Algoritmo Fisher-Yates para una aleatorización perfecta de preguntas.
const getRandomQuestions = (questions: Question[], count: number): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

// Función para barajar las OPCIONES dentro de una pregunta y actualizar el índice de la correcta.
const shuffleQuestionOptions = (question: Question): Question => {
  const indices = question.options.map((_, i) => i);
  
  // Barajar índices
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const newOptions = indices.map(i => question.options[i]);
  // Buscamos dónde ha ido a parar el índice que era la respuesta correcta original
  const newCorrectAnswer = indices.indexOf(question.correctAnswer);

  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectAnswer
  };
};

function App() {
  const [results, setResults] = useCookie<TestResults>('testResults', {});
  // Usamos localStorage para las preguntas falladas porque la lista puede ser muy larga para una cookie
  const [failedQuestionTexts, setFailedQuestionTexts] = useLocalStorage<string[]>('failedQuestions', []);
  // LocalStorage para el récord de supervivencia
  const [survivalRecord, setSurvivalRecord] = useLocalStorage<number>('survivalRecord', 0);
  // LocalStorage para la experiencia (XP) y Rangos
  const [userXP, setUserXP] = useLocalStorage<number>('userXP', 0);
  
  const [activeTest, setActiveTest] = useState<Test | null>(null);
  // Nuevo estado para el mazo de flashcards activo
  const [activeFlashcards, setActiveFlashcards] = useState<{id: string, title: string, questions: Question[]} | null>(null);

  const [lastResult, setLastResult] = useState<TestResult | null>(null);
  const [totalQuestionsInLastTest, setTotalQuestionsInLastTest] = useState<number>(0);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  
  // Estado para controlar la sección actual: 'tests', 'practical', 'stats' o 'flashcards'
  const [currentSection, setCurrentSection] = useState<'tests' | 'practical' | 'stats' | 'flashcards'>('tests');

  const handleStartTest = (testId: string) => {
    // Buscar en ambas listas de datos
    const testTemplate = TESTS_DATA.find(t => t.id === testId) || PRACTICAL_CASES.find(t => t.id === testId);
    if (!testTemplate) return;

    // Creamos una copia del objeto del test para no modificar el original
    let testWithQuestions = { ...testTemplate };

    // Lógica para el Test de Preguntas Suspendidas
    if (testId === 'test-failed-questions') {
        if (failedQuestionTexts.length === 0) {
            alert("¡Enhorabuena! No tienes preguntas pendientes de repaso. Falla alguna pregunta primero para usar este test.");
            return;
        }
        // Filtramos todas las preguntas buscando las que coincidan con los textos fallados
        const failedQuestions = ALL_QUESTIONS.filter(q => failedQuestionTexts.includes(q.questionText.trim()));
        
        // Las barajamos para que no salgan siempre en el mismo orden
        testWithQuestions.questions = getRandomQuestions(failedQuestions, failedQuestions.length).map(shuffleQuestionOptions);
        testWithQuestions.totalQuestions = failedQuestions.length;
        
    } else if (testId === 'test-infinite' || testId === 'test-survival') {
        // Cargamos TODAS las preguntas disponibles en la base de datos, barajadas
        const allQuestionsShuffled = getRandomQuestions(ALL_QUESTIONS, ALL_QUESTIONS.length);
        testWithQuestions.questions = allQuestionsShuffled.map(shuffleQuestionOptions);
        testWithQuestions.totalQuestions = allQuestionsShuffled.length;
    } 
    // Si es otro test dinámico (General o Rápido)
    else if (testTemplate.totalQuestions && testTemplate.questions.length === 0) {
      // 1. Seleccionar preguntas al azar de toda la base de datos
      const randomQuestions = getRandomQuestions(ALL_QUESTIONS, testTemplate.totalQuestions);
      
      // 2. Barajar las opciones de cada pregunta seleccionada
      testWithQuestions.questions = randomQuestions.map(shuffleQuestionOptions);
    }
    // Si es un test estático (de los temas o casos prácticos), opcionalmente también podríamos barajar sus opciones aquí
    else {
         testWithQuestions.questions = testWithQuestions.questions.map(shuffleQuestionOptions);
    }

    // Establecemos el test activo
    setActiveTest(testWithQuestions);
  };

  const handleStartFlashcards = (deckId: string) => {
      // 1. Deck especial de Plazos
      if (deckId === 'flashcards-plazos') {
          const timeQuestions = ALL_QUESTIONS.filter(q => 
             TIME_KEYWORDS.some(keyword => q.questionText.toLowerCase().includes(keyword) || q.options.some(o => o.toLowerCase().includes(keyword)))
          );
          
          if (timeQuestions.length === 0) {
              alert("No se encontraron preguntas relacionadas con plazos.");
              return;
          }

          setActiveFlashcards({
              id: 'flashcards-plazos',
              title: 'Repaso Intensivo de Plazos',
              questions: getRandomQuestions(timeQuestions, timeQuestions.length) // Barajadas por defecto
          });
          return;
      }

      // 2. Deck basado en un Test/Tema existente
      const sourceTest = TESTS_DATA.find(t => t.id === deckId);
      if (sourceTest) {
          setActiveFlashcards({
              id: deckId,
              title: `Flashcards: ${sourceTest.title}`,
              questions: getRandomQuestions(sourceTest.questions, sourceTest.questions.length)
          });
      }
  };

  const handleCompleteTest = (testId: string, score: number, totalQuestions: number, details: { correct: string[], incorrect: string[] }) => {
    // Actualizar lista de fallos global:
    
    // COMPROBACIÓN IMPORTANTE: 
    // Si el test es un Caso Práctico, NO guardamos los fallos en la lista de repaso.
    // Los casos prácticos dependen del texto del supuesto y no tiene sentido repasarlos aisladamente.
    const isPracticalCase = PRACTICAL_CASES.some(t => t.id === testId);

    if (details && !isPracticalCase) {
        const currentFailedSet = new Set(failedQuestionTexts);
        
        // Añadir fallos nuevos
        details.incorrect.forEach(qText => currentFailedSet.add(qText));
        
        // Eliminar aciertos (Mastery learning: si la aciertas, sale de la lista de repaso)
        details.correct.forEach(qText => currentFailedSet.delete(qText));
        
        setFailedQuestionTexts(Array.from(currentFailedSet));
    }

    // --- Lógica de Gamificación (XP) ---
    // +200 XP por acierto, -100 XP por fallo
    const xpGained = (details.correct.length * 200);
    const xpLost = (details.incorrect.length * 100);
    const netXpChange = xpGained - xpLost;
    
    // Actualizamos XP asegurando que no baje de 0
    const newUserXP = Math.max(0, userXP + netXpChange);
    setUserXP(newUserXP);
    // -----------------------------------

    // Lógica Específica para Supervivencia
    if (testId === 'test-survival') {
        // En supervivencia, el 'score' son los aciertos (la racha).
        if (score > survivalRecord) {
            setSurvivalRecord(score);
            // Podríamos añadir una alerta visual aquí
        }
        // No guardamos status de passed/failed en cookie para supervivencia, solo el record en localStorage
    } else {
        // Para aprobar, se necesita un 80% de aciertos
        const passingScore = totalQuestions * 0.8;
        const result: TestResult = {
          score,
          status: score >= passingScore ? 'passed' : 'failed',
        };
        
        // Solo guardamos el resultado si NO es un test infinito ni el de fallos (para no desvirtuar estadísticas globales de temas)
        if (testId !== 'test-infinite' && testId !== 'test-failed-questions') {
            setResults({ ...results, [testId]: result });
        }
        
        setLastResult(result);
    }
    
    // En supervivencia, mostramos los resultados de "hasta donde has llegado"
    if (testId === 'test-survival') {
        setLastResult({
            score: score,
            status: 'failed' // Siempre es failed al final en muerte súbita (o passed si llega al final de todas las preguntas, improbable)
        });
    }

    setTotalQuestionsInLastTest(totalQuestions);
    setActiveTest(null);
  };

  const handleReturnToDashboard = () => {
    setLastResult(null);
    setActiveTest(null);
    setActiveFlashcards(null);
  };

  const currentView = useMemo(() => {
    if (activeTest) return 'test';
    if (activeFlashcards) return 'flashcards-active';
    if (lastResult) return 'results';
    return 'dashboard';
  }, [activeTest, activeFlashcards, lastResult]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <span className="text-2xl" role="img" aria-label="logo">👮‍♂️</span>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">OpoTest <span className="text-blue-600">Penitenciarias</span></h1>
              </div>
              <div className="flex items-center gap-3">
                  {/* Mini badge de XP en el header */}
                  <div className="hidden md:flex flex-col items-end text-xs font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      <span className="font-bold text-blue-600">XP: {userXP.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => setIsInfoModalOpen(true)}
                    className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-full transition-colors font-medium border border-blue-200"
                    aria-label="Información y ayuda sobre la aplicación"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="hidden sm:inline">Ayuda</span>
                  </button>
              </div>
            </div>
            
            {/* Navigation Tabs */}
            {currentView === 'dashboard' && (
                <div className="flex space-x-4 mt-4 border-b border-slate-200 overflow-x-auto">
                    <button 
                        onClick={() => setCurrentSection('tests')}
                        className={`pb-2 px-4 font-semibold transition-colors whitespace-nowrap ${currentSection === 'tests' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Tests y Temas
                    </button>
                    <button 
                        onClick={() => setCurrentSection('practical')}
                        className={`pb-2 px-4 font-semibold transition-colors whitespace-nowrap ${currentSection === 'practical' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Casos Prácticos
                    </button>
                    <button 
                        onClick={() => setCurrentSection('flashcards')}
                        className={`pb-2 px-4 font-semibold transition-colors whitespace-nowrap flex items-center gap-2 ${currentSection === 'flashcards' ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                        Flashcards
                    </button>
                    <button 
                        onClick={() => setCurrentSection('stats')}
                        className={`pb-2 px-4 font-semibold transition-colors whitespace-nowrap ${currentSection === 'stats' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Estadísticas
                    </button>
                </div>
            )}
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
            <>
             {/* Banner de fallos: Solo mostrar si estamos en sección tests y hay fallos */}
             {currentSection === 'tests' && failedQuestionTexts.length > 0 && (
                <div className="mb-6 bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-orange-800">Preguntas pendientes de repaso</h3>
                            <p className="text-orange-700 text-sm">Tienes {failedQuestionTexts.length} preguntas que has fallado anteriormente.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleStartTest('test-failed-questions')}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow transition-colors text-sm md:text-base"
                    >
                        Repasar fallos
                    </button>
                </div>
             )}

             {currentSection === 'tests' && (
                <Dashboard 
                    tests={TESTS_DATA} 
                    results={results} 
                    onStartTest={handleStartTest} 
                    title={'Tests por Bloques y Temas'}
                    survivalRecord={survivalRecord}
                />
             )}

             {currentSection === 'practical' && (
                <Dashboard 
                    tests={PRACTICAL_CASES} 
                    results={results} 
                    onStartTest={handleStartTest} 
                    title={'Supuestos Prácticos Penitenciarios'}
                />
             )}

             {currentSection === 'flashcards' && (
                 <div className="space-y-6 animate-fade-in">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    El modo <strong>Flashcards</strong> te permite estudiar sin presión. Se muestra la pregunta y tú decides cuándo ver la respuesta. Ideal para memorizar datos puros.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-slate-700 mb-6">Mazos de Estudio</h2>
                    
                    {/* Special Decks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                         <div 
                            onClick={() => handleStartFlashcards('flashcards-plazos')}
                            className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg transform transition hover:scale-105 cursor-pointer"
                         >
                             <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">Repaso de Plazos</h3>
                                <span className="bg-white/20 p-2 rounded-lg">⏳</span>
                             </div>
                             <p className="text-indigo-100 text-sm mb-4">
                                 Mazo inteligente generado automáticamente con preguntas sobre días, años, prescripciones y tiempos.
                             </p>
                             <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg font-semibold transition-colors">
                                 Empezar Estudio
                             </button>
                         </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-600 mb-4 border-b pb-2">Estudiar Temas Específicos</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {TESTS_DATA.filter(t => t.questions.length > 0 && !t.id.startsWith('test-')).map(test => (
                            <div 
                                key={test.id}
                                onClick={() => handleStartFlashcards(test.id)}
                                className="bg-white border border-slate-200 hover:border-yellow-400 p-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group"
                            >
                                <h4 className="font-semibold text-slate-700 group-hover:text-yellow-600 mb-2 line-clamp-2">{test.title}</h4>
                                <div className="flex justify-between items-center text-xs text-slate-500">
                                    <span>{test.questions.length} tarjetas</span>
                                    <span className="group-hover:translate-x-1 transition-transform">➔</span>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
             )}

             {currentSection === 'stats' && (
                 <StatisticsView 
                    results={results} 
                    failedQuestions={failedQuestionTexts} 
                    allTests={[...TESTS_DATA, ...PRACTICAL_CASES]} 
                    userXP={userXP}
                 />
             )}
            </>
        )}
        {/* Usamos una key basada en el ID y un timestamp para forzar el remount completo al reiniciar un test */}
        {currentView === 'test' && activeTest && <TestView key={activeTest.id + Date.now()} test={activeTest} onComplete={handleCompleteTest} onExit={handleReturnToDashboard} />}
        {currentView === 'flashcards-active' && activeFlashcards && <FlashcardView key={activeFlashcards.id} title={activeFlashcards.title} questions={activeFlashcards.questions} onExit={handleReturnToDashboard} />}
        {currentView === 'results' && lastResult && <ResultsView result={lastResult} totalQuestions={totalQuestionsInLastTest} onReturn={handleReturnToDashboard} />}
      </main>
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
    </div>
  );
}

export default App;
