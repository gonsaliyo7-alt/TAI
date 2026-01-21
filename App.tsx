
import React, { useState, useMemo } from 'react';
import Dashboard from './components/Dashboard';
import TestView from './components/TestView';
import ResultsView from './components/ResultsView';
import InfoModal from './components/InfoModal';
import StatisticsView from './components/StatisticsView';
import FlashcardsView from './components/FlashcardsView';
import FlashcardView from './components/FlashcardView';
import SalaryView from './components/SalaryView';
import { TESTS_DATA, ALL_QUESTIONS } from './data/questions';
import { PRACTICAL_CASES } from './data/practicalCases';
import { RANKS } from './data/ranks';
import type { Test, TestResult, TestResults, Question, UserTrophies, TestHistory, TestAttempt } from './types';
import { useCookie } from './hooks/useCookie';
import { useLocalStorage } from './hooks/useLocalStorage';

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
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const newOptions = indices.map(i => question.options[i]);
    const newCorrectAnswer = indices.indexOf(question.correctAnswer);
    return {
        ...question,
        options: newOptions,
        correctAnswer: newCorrectAnswer
    };
};

const getTodayDateString = () => new Date().toISOString().split('T')[0];

const getRankInfo = (xp: number) => {
    let currentRank = RANKS[0];
    for (let i = 0; i < RANKS.length; i++) {
        if (xp >= RANKS[i].minXP) {
            currentRank = RANKS[i];
        } else {
            break;
        }
    }
    return currentRank;
};

function App() {
    const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
    const [results, setResults] = useCookie<TestResults>('testResults', {});
    const [testHistory, setTestHistory] = useLocalStorage<TestHistory>('testHistory', []);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    React.useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.className = 'bg-slate-900 transition-colors duration-300';
        } else {
            document.documentElement.classList.remove('dark');
            document.body.className = 'bg-slate-50 transition-colors duration-300';
        }
    }, [theme]);

    const [failedQuestionTexts, setFailedQuestionTexts] = useLocalStorage<string[]>('failedQuestions', []);
    const [survivalRecord, setSurvivalRecord] = useLocalStorage<number>('survivalRecord', 0);
    const [userXP, setUserXP] = useLocalStorage<number>('userXP', 0);
    const [userTrophies, setUserTrophies] = useLocalStorage<UserTrophies>('userTrophies', { diamonds: 0, trophies: 0, diplomas: 0 });
    const [dailyProgress, setDailyProgress] = useLocalStorage<{ date: string, count: number, rewards: { diploma: boolean, trophy: boolean, diamond: boolean } }>('dailyProgress', {
        date: getTodayDateString(),
        count: 0,
        rewards: { diploma: false, trophy: false, diamond: false }
    });

    const [activeTest, setActiveTest] = useState<Test | null>(null);
    const [activeFlashcards, setActiveFlashcards] = useState<{ id: string, title: string, questions: Question[] } | null>(null);

    const [lastResult, setLastResult] = useState<TestResult | null>(null);
    const [totalQuestionsInLastTest, setTotalQuestionsInLastTest] = useState<number>(0);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const [currentSection, setCurrentSection] = useState<'tests' | 'practical' | 'stats' | 'flashcards' | 'salary'>('tests');

    const handleStartTest = (testId: string) => {
        let testTemplate = TESTS_DATA.find(t => t.id === testId) || PRACTICAL_CASES.find(t => t.id === testId);

        if (!testTemplate) return;

        let testWithQuestions = { ...testTemplate };

        if (testId === 'test-failed-questions') {
            if (failedQuestionTexts.length === 0) {
                alert("No tienes preguntas pendientes de repaso.");
                return;
            }
            const failedQuestions = ALL_QUESTIONS.filter(q => failedQuestionTexts.includes(q.questionText.trim()));
            testWithQuestions.questions = getRandomQuestions(failedQuestions, failedQuestions.length).map(shuffleQuestionOptions);
            testWithQuestions.totalQuestions = failedQuestions.length;
        } else if (testId === 'test-infinite' || testId === 'test-survival') {
            const allQuestionsShuffled = getRandomQuestions(ALL_QUESTIONS, ALL_QUESTIONS.length);
            testWithQuestions.questions = allQuestionsShuffled.map(shuffleQuestionOptions);
            testWithQuestions.totalQuestions = allQuestionsShuffled.length;
        } else if (testId === 'test-ko-exams') {
            const examIds = ['test-examen-2019', 'test-examen-2020', 'test-examen-2021', 'test-examen-2022', 'test-examen-2025'];
            const examTests = TESTS_DATA.filter(t => examIds.includes(t.id));
            const allExamQuestions = examTests.flatMap(t => t.questions);
            const shuffledQuestions = getRandomQuestions(allExamQuestions, allExamQuestions.length);
            testWithQuestions.questions = shuffledQuestions.map(shuffleQuestionOptions);
            testWithQuestions.totalQuestions = shuffledQuestions.length;
        } else if (testTemplate.totalQuestions && testTemplate.questions.length === 0) {
            const randomQuestions = getRandomQuestions(ALL_QUESTIONS, testTemplate.totalQuestions);
            testWithQuestions.questions = randomQuestions.map(shuffleQuestionOptions);
        } else {
            // Shuffle options for regular tests too
            testWithQuestions.questions = testWithQuestions.questions.map(shuffleQuestionOptions);
        }

        setActiveTest(testWithQuestions);
    };

    const handleCompleteTest = (testId: string, score: number, totalQuestions: number, detailsX?: { correct: string[], incorrect: string[] }) => {
        // Fallback if details are not provided (shouldn't happen with current TestView)
        const details = detailsX || { correct: [], incorrect: [] };

        let newFailed = [...failedQuestionTexts];
        details.incorrect.forEach(qText => {
            if (!newFailed.includes(qText.trim())) newFailed.push(qText.trim());
        });
        details.correct.forEach(qText => {
            newFailed = newFailed.filter(f => f !== qText.trim());
        });
        setFailedQuestionTexts(newFailed);

        const xpChange = (details.correct.length * 200) - (details.incorrect.length * 100);
        setUserXP(prev => Math.max(0, prev + xpChange));

        const today = getTodayDateString();
        let newDaily = { ...dailyProgress };
        if (newDaily.date !== today) {
            newDaily = { date: today, count: details.correct.length + details.incorrect.length, rewards: { diploma: false, trophy: false, diamond: false } };
        } else {
            newDaily.count += (details.correct.length + details.incorrect.length);
        }

        const newTrophies = { ...userTrophies };
        if (newDaily.count >= 100 && !newDaily.rewards.diploma) {
            newDaily.rewards.diploma = true;
            newTrophies.diplomas++;
        }
        if (newDaily.count >= 500 && !newDaily.rewards.trophy) {
            newDaily.rewards.trophy = true;
            newTrophies.trophies++;
        }
        if (newDaily.count >= 1000 && !newDaily.rewards.diamond) {
            newDaily.rewards.diamond = true;
            newTrophies.diamonds++;
        }

        setDailyProgress(newDaily);
        setUserTrophies(newTrophies);

        const status = score / totalQuestions >= 0.8 ? 'passed' : 'failed';
        const result: TestResult = { score, status, date: new Date().toISOString(), totalQuestions };

        // Guardar el intento en el historial para gráficas
        const testTemplate = TESTS_DATA.find(t => t.id === testId) || PRACTICAL_CASES.find(t => t.id === testId);
        const attempt: TestAttempt = {
            ...result,
            id: crypto.randomUUID(),
            testId,
            testTitle: testTemplate?.title || 'Test Personalizado'
        };
        setTestHistory(prev => [...prev, attempt]);

        if (testId !== 'test-infinite' && testId !== 'test-failed-questions') {
            setResults(prev => ({ ...prev, [testId]: result }));
        }

        setLastResult(result);
        setTotalQuestionsInLastTest(totalQuestions);
        setActiveTest(null);
    };

    const currentRank = useMemo(() => getRankInfo(userXP), [userXP]);

    if (activeTest) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <main className="container mx-auto px-4 py-8 max-w-4xl">
                    <TestView
                        key={activeTest.id + Date.now()}
                        test={activeTest}
                        onComplete={handleCompleteTest}
                        onExit={() => setActiveTest(null)}
                        onSurvivalUpdate={(score) => {
                            if (score > survivalRecord) setUserXP(prev => prev + 10); // Bonus for survival
                        }}
                    />
                </main>
            </div>
        );
    }

    if (activeFlashcards) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <main className="container mx-auto px-4 py-8 max-w-4xl">
                    <FlashcardView
                        title={activeFlashcards.title}
                        questions={activeFlashcards.questions}
                        onExit={() => setActiveFlashcards(null)}
                    />
                </main>
            </div>
        );
    }

    if (lastResult) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 flex items-center justify-center p-4">
                <div className="max-w-xl w-full">
                    <ResultsView
                        result={lastResult}
                        totalQuestions={totalQuestionsInLastTest}
                        onReturn={() => setLastResult(null)}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
                            <span className="text-2xl">💻</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-slate-800 dark:text-white tracking-tight leading-none">OPOTEST TAI</h1>
                            <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">Admin. General del Estado</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-3 bg-slate-50 dark:bg-slate-700/50 px-4 py-1.5 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm">
                            <span className="text-2xl">{currentRank.icon}</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-tight leading-none">{currentRank.name}</span>
                                <span className="text-sm font-black text-slate-700 dark:text-white leading-tight">
                                    {userXP.toLocaleString()} <span className="text-[10px] text-slate-400 font-bold">XP</span>
                                </span>
                            </div>
                        </div>

                        {/* Daily Progress Badge */}
                        <div className="hidden lg:flex items-center gap-3 bg-slate-50 dark:bg-slate-700/50 px-4 py-1.5 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm group">
                            <span className="text-xl">🎯</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-tight leading-none">Hoy</span>
                                <span className="text-sm font-black text-slate-700 dark:text-white leading-tight">
                                    {dailyProgress.count} <span className="text-[10px] text-slate-400 font-bold">Resueltas</span>
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsInfoModalOpen(true)}
                            className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                            title="Ayuda e información"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all font-bold text-[10px] flex items-center gap-2 shadow-sm border border-slate-200 dark:border-slate-600"
                        >
                            {theme === 'light' ? '🌙 MODO OSCURO' : '☀️ MODO CLARO'}
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
                    <div className="flex gap-4 min-w-max">
                        <button
                            onClick={() => setCurrentSection('tests')}
                            className={`pb-2 px-4 font-bold text-sm transition-all whitespace-nowrap ${currentSection === 'tests' ? 'text-blue-600 dark:text-blue-400 border-b-4 border-blue-600 dark:border-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                        >
                            🏠 TESTS Y TEMAS
                        </button>
                        <button
                            onClick={() => setCurrentSection('practical')}
                            className={`pb-2 px-4 font-bold text-sm transition-all whitespace-nowrap ${currentSection === 'practical' ? 'text-blue-600 dark:text-blue-400 border-b-4 border-blue-600 dark:border-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                        >
                            📖 CASOS PRÁCTICOS
                        </button>
                        <button
                            onClick={() => setCurrentSection('flashcards')}
                            className={`pb-2 px-4 font-bold text-sm transition-all whitespace-nowrap ${currentSection === 'flashcards' ? 'text-blue-600 dark:text-blue-400 border-b-4 border-blue-600 dark:border-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                        >
                            ⚡ FLASHCARDS
                        </button>
                        <button
                            onClick={() => setCurrentSection('stats')}
                            className={`pb-2 px-4 font-bold text-sm transition-all whitespace-nowrap ${currentSection === 'stats' ? 'text-blue-600 dark:text-blue-400 border-b-4 border-blue-600 dark:border-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                        >
                            📈 ESTADÍSTICAS
                        </button>
                        <button
                            onClick={() => setCurrentSection('salary')}
                            className={`pb-2 px-4 font-bold text-sm transition-all whitespace-nowrap flex items-center gap-2 ${currentSection === 'salary' ? 'text-green-600 dark:text-green-400 border-b-4 border-green-600 dark:border-green-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
                        >
                            💰 SUELDOS TAI
                        </button>
                    </div>
                </div>

                {/* Banner de fallos */}
                {currentSection === 'tests' && failedQuestionTexts.length > 0 && (
                    <div className="mb-8 bg-gradient-to-r from-orange-50 to-white dark:from-orange-900/10 dark:to-slate-800 border border-orange-200 dark:border-orange-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-lg gap-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded-xl text-orange-600 dark:text-orange-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-black text-orange-800 dark:text-orange-300 text-lg uppercase tracking-tight">Expedientes con Errores</h3>
                                <p className="text-orange-700 dark:text-orange-400 text-sm">Hay {failedQuestionTexts.length} conceptos que necesitan revisión inmediata.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleStartTest('test-failed-questions')}
                            className="bg-orange-600 hover:bg-orange-700 text-white font-black py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 text-sm uppercase tracking-widest"
                        >
                            Repasar Fallos
                        </button>
                    </div>
                )}

                {currentSection === 'tests' && (
                    <Dashboard
                        tests={TESTS_DATA}
                        onStartTest={handleStartTest}
                        results={results}
                        survivalRecord={survivalRecord}
                    />
                )}

                {currentSection === 'practical' && (
                    <Dashboard
                        tests={PRACTICAL_CASES}
                        onStartTest={handleStartTest}
                        results={results}
                        survivalRecord={0}
                    />
                )}

                {currentSection === 'stats' && (
                    <StatisticsView
                        results={results}
                        failedQuestions={failedQuestionTexts}
                        allTests={[...TESTS_DATA, ...PRACTICAL_CASES]}
                        userXP={userXP}
                        userTrophies={userTrophies}
                        testHistory={testHistory}
                    />
                )}

                {currentSection === 'flashcards' && (
                    <FlashcardsView
                        allQuestions={ALL_QUESTIONS}
                        tests={TESTS_DATA}
                        onStartDeck={(deck) => setActiveFlashcards(deck)}
                    />
                )}

                {currentSection === 'salary' && (
                    <SalaryView />
                )}
            </main>

            <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
        </div>
    );
}

export default App;
