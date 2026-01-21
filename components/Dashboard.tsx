
import React from 'react';
import type { Test, TestResults, TestResult } from '../types';

interface DashboardProps {
    tests: Test[];
    results: TestResults;
    onStartTest: (testId: string) => void;
    title?: string;
    survivalRecord?: number;
}

const getStatusClasses = (status: 'passed' | 'failed' | undefined, testId: string): string => {
    if (testId === 'test-survival' || testId === 'test-ko-exams') {
        return 'bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/30 border-red-600 dark:border-red-500 shadow-red-500/10';
    }
    if (testId === 'test-ai' || testId === 'test-ai-ko' || testId === 'test-ai-practical') {
        return 'bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 border-purple-600 dark:border-purple-500 shadow-purple-500/10';
    }
    if (status === 'passed') {
        return 'bg-green-100 dark:bg-green-900/20 border-green-500 dark:border-green-600 text-green-800 dark:text-green-300';
    }
    if (status === 'failed') {
        return 'bg-red-100 dark:bg-red-900/20 border-red-500 dark:border-red-600 text-red-800 dark:text-red-300';
    }
    return 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200';
};

const getButtonClasses = (status: 'passed' | 'failed' | undefined, testId: string): string => {
    if (testId === 'test-survival' || testId === 'test-ko-exams') {
        return 'bg-red-600 hover:bg-red-700 text-white ring-2 ring-red-300 dark:ring-red-900/50';
    }
    if (testId === 'test-ai' || testId === 'test-ai-ko' || testId === 'test-ai-practical') {
        return 'bg-purple-600 hover:bg-purple-700 text-white ring-2 ring-purple-300 dark:ring-purple-900/50';
    }
    if (status === 'passed') {
        return 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500';
    }
    if (status === 'failed') {
        return 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500';
    }
    return 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500';
}

const TestCard: React.FC<{ test: Test, result?: TestResult, onStartTest: (id: string) => void, survivalRecord?: number }> = ({ test, result, onStartTest, survivalRecord }) => {
    const totalQuestions = result?.totalQuestions ?? test.totalQuestions ?? test.questions.length;
    const isSurvival = test.id === 'test-survival' || test.id === 'test-ko-exams' || test.id === 'test-ai-ko';

    return (
        <div className={`p-4 rounded-lg border-l-4 transition-transform transform hover:-translate-y-1 shadow-sm ${getStatusClasses(result?.status, test.id)}`}>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg flex items-center gap-2 dark:text-white">
                        {test.title}
                        {isSurvival && <span className="text-2xl">💀</span>}
                        {(test.id === 'test-ai' || test.id === 'test-ai-ko' || test.id === 'test-ai-practical') && <span className="text-2xl">🤖</span>}
                    </h3>

                    {isSurvival ? (
                        <div className="mt-1">
                            <p className="text-sm font-semibold text-red-800 dark:text-red-400">
                                Objetivo: Sobrevivir sin fallar.
                            </p>
                            <p className="text-xs text-red-600 dark:text-red-300 mt-1 font-mono">
                                Récord actual: <span className="font-bold text-lg">{survivalRecord || 0}</span> preguntas
                            </p>
                        </div>
                    ) : (
                        result ? (
                            <p className="text-sm font-semibold mt-1 dark:text-slate-300">
                                Resultado: <span className="text-lg">{result.score}</span>/{totalQuestions} - <span className={result.status === 'passed' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>{result.status === 'passed' ? 'Aprobado' : 'No Aprobado'}</span>
                            </p>
                        ) : (
                            <p className="text-sm mt-1 opacity-75 dark:text-slate-400">Aún no realizado</p>
                        )
                    )}
                </div>
                <button
                    onClick={() => onStartTest(test.id)}
                    className={`text-white font-bold py-2 px-4 rounded-lg shadow-md transition-colors whitespace-nowrap ml-4 ${getButtonClasses(result?.status, test.id)}`}
                >
                    {isSurvival ? 'JUGAR' : (result ? 'Repetir' : 'Empezar')}
                </button>
            </div>
        </div>
    );
};


const Dashboard: React.FC<DashboardProps> = ({ tests, results, onStartTest, title, survivalRecord }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    // Filtrar tests por búsqueda
    const filteredTests = React.useMemo(() => {
        return tests.filter(t =>
            t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.id.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [tests, searchTerm]);

    const survivalTest = filteredTests.find(t => t.id === 'test-survival');
    const simulationTests = filteredTests.filter(t => t.id.startsWith('test-examen-'));
    const dynamicTests = filteredTests.filter(t => t.id.startsWith('test-all-') || t.id === 'test-infinite' || t.id === 'test-ai' || t.id === 'test-ai-ko' || t.id === 'test-ai-practical');

    // Todo lo que no sea simulacro o dinámico va aquí (Temas, Bloques y Casos Prácticos)
    const topicTests = filteredTests.filter(t =>
        !simulationTests.includes(t) &&
        !dynamicTests.includes(t) &&
        t !== survivalTest &&
        t.id !== 'test-failed-questions'
    );

    return (
        <div className="animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-slate-700 dark:text-white">{title || 'Listado de Tests'}</h2>

                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Buscar test..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                    />
                    <svg className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {survivalTest && searchTerm === '' && (
                <div className="mb-8">
                    <TestCard test={survivalTest} onStartTest={onStartTest} survivalRecord={survivalRecord} />
                </div>
            )}

            <div className="space-y-8">
                {simulationTests.length > 0 && (
                    <section>
                        <h3 className="text-lg font-bold text-slate-600 dark:text-slate-400 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
                            <span>📅</span> Simulacros Oficiales y Anuales
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {simulationTests.map(test => (
                                <TestCard key={test.id} test={test} result={results[test.id]} onStartTest={onStartTest} />
                            ))}
                        </div>
                    </section>
                )}

                {topicTests.length > 0 && (
                    <section>
                        <h3 className="text-lg font-bold text-slate-600 dark:text-slate-400 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
                            <span>📚</span> Temario por Bloques y Temas
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {topicTests.map(test => (
                                <TestCard key={test.id} test={test} result={results[test.id]} onStartTest={onStartTest} />
                            ))}
                        </div>
                    </section>
                )}

                {dynamicTests.length > 0 && (
                    <section>
                        <h3 className="text-lg font-bold text-slate-600 dark:text-slate-400 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
                            <span>⚡</span> Generación Dinámica y Avanzada
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dynamicTests.map(test => (
                                <TestCard key={test.id} test={test} result={results[test.id]} onStartTest={onStartTest} />
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {filteredTests.length === 0 && (
                <div className="text-center py-12">
                    <span className="text-5xl">🔍</span>
                    <p className="mt-4 text-slate-500 dark:text-slate-400">No se encontraron tests que coincidan con "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
