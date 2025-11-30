
import React, { useMemo } from 'react';
import type { Test, TestResults, TestResult, UserTrophies } from '../types';
import { RANKS } from '../data/ranks';

interface StatisticsViewProps {
    results: TestResults;
    failedQuestions: string[];
    allTests: Test[];
    userXP?: number;
    userTrophies?: UserTrophies;
}

const getRankInfo = (xp: number) => {
    let currentRankIndex = 0;
    for (let i = 0; i < RANKS.length; i++) {
        if (xp >= RANKS[i].minXP) {
            currentRankIndex = i;
        } else {
            break;
        }
    }

    const currentRank = RANKS[currentRankIndex];
    const nextRank = RANKS[currentRankIndex + 1];

    let progress = 0;
    let xpForNextLevel = 0;

    if (nextRank) {
        const xpInLevel = xp - currentRank.minXP;
        const range = nextRank.minXP - currentRank.minXP;
        progress = Math.min(100, Math.max(0, (xpInLevel / range) * 100));
        xpForNextLevel = nextRank.minXP - xp;
    } else {
        progress = 100; // Máximo rango alcanzado
    }

    return { currentRank, nextRank, progress, xpForNextLevel };
};

const StatisticsView: React.FC<StatisticsViewProps> = ({ results, failedQuestions, allTests, userXP = 0, userTrophies }) => {

    const stats = useMemo(() => {
        // 1. Cálculos Generales
        const totalTests = allTests.filter(t => t.id !== 'test-infinite' && t.id !== 'test-failed-questions' && t.id !== 'test-all-comprehensive' && t.id !== 'test-all-quick').length;
        const testsAttempted = Object.keys(results).length;

        const resultsValues = Object.values(results) as TestResult[];

        const testsPassed = resultsValues.filter(r => r.status === 'passed').length;
        const testsFailed = resultsValues.filter(r => r.status === 'failed').length;

        const globalScoreSum = resultsValues.reduce((acc, curr) => acc + curr.score, 0);
        // Estimación de preguntas totales respondidas en tests guardados (aproximado)
        // Para ser exactos deberíamos buscar el test y ver su longitud, pero usaremos una media o cálculo directo si es posible
        let totalQuestionsAnsweredInStoredTests = 0;
        Object.entries(results).forEach(([testId, result]) => {
            const res = result as TestResult;
            if (res.totalQuestions) {
                totalQuestionsAnsweredInStoredTests += res.totalQuestions;
            } else {
                const t = allTests.find(at => at.id === testId);
                if (t) totalQuestionsAnsweredInStoredTests += (t.totalQuestions || t.questions.length);
            }
        });

        const globalAccuracy = totalQuestionsAnsweredInStoredTests > 0
            ? Math.round((globalScoreSum / totalQuestionsAnsweredInStoredTests) * 100)
            : 0;

        // 2. Análisis de Debilidades (Por Temas)
        // Mapeamos cada pregunta fallada a su test de origen para ver qué tema falla más
        const failuresByTopic: Record<string, number> = {};

        failedQuestions.forEach(failText => {
            // Buscamos a qué test pertenece esta pregunta
            // Nota: Una pregunta podría estar en varios tests (ej. Bloque y Tema específico), contamos el primero que encontremos o el específico
            const originTest = allTests.find(t =>
                t.id.startsWith('topic-') && // Priorizamos los tests por temas específicos para la estadística
                t.questions.some(q => q.questionText.trim() === failText)
            ) || allTests.find(t =>
                t.questions.some(q => q.questionText.trim() === failText)
            );

            if (originTest) {
                failuresByTopic[originTest.title] = (failuresByTopic[originTest.title] || 0) + 1;
            }
        });

        // Convertir a array y ordenar
        const weakTopics = Object.entries(failuresByTopic)
            .map(([title, count]) => ({ title, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5); // Top 5

        // 3. Análisis de Fortalezas (Tests con mejor nota)
        const strongTopics = Object.entries(results)
            .map(([id, result]) => {
                const res = result as TestResult;
                const test = allTests.find(t => t.id === id);
                if (!test) return null;
                const total = test.totalQuestions || test.questions.length;
                const percentage = (res.score / total) * 100;
                return { title: test.title, percentage, status: res.status };
            })
            .filter(item => item !== null && item.status === 'passed')
            .sort((a, b) => b!.percentage - a!.percentage)
            .slice(0, 5);

        return {
            totalTests,
            testsAttempted,
            testsPassed,
            testsFailed,
            globalAccuracy,
            weakTopics,
            strongTopics,
            totalFailedQuestions: failedQuestions.length
        };
    }, [results, failedQuestions, allTests]);

    const rankInfo = getRankInfo(userXP);

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Military Rank Card */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 text-white shadow-lg border-2 border-slate-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                    <span className="text-9xl">🎖️</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 z-10 relative">
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-xl text-5xl mb-2">
                            {rankInfo.currentRank.icon}
                        </div>
                        <span className="text-xs uppercase tracking-widest text-slate-300">Rango Actual</span>
                        <h2 className="text-2xl font-bold text-yellow-400">{rankInfo.currentRank.name}</h2>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <p className="text-3xl font-bold">{userXP.toLocaleString()} <span className="text-sm font-normal text-slate-300">XP</span></p>
                            </div>
                            <div className="text-right">
                                {rankInfo.nextRank ? (
                                    <>
                                        <p className="text-sm text-slate-300">Siguiente rango: <span className="text-white font-bold">{rankInfo.nextRank.name}</span></p>
                                        <p className="text-xs text-slate-400">Faltan {rankInfo.xpForNextLevel.toLocaleString()} XP</p>
                                    </>
                                ) : (
                                    <p className="text-yellow-400 font-bold">¡Rango Máximo!</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full bg-slate-900/50 rounded-full h-4 border border-slate-600">
                            <div
                                className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-full rounded-full transition-all duration-1000 ease-out relative"
                                style={{ width: `${rankInfo.progress}%` }}
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-2 text-xs text-slate-400">
                            <span>{rankInfo.currentRank.minXP.toLocaleString()} XP</span>
                            <span>{rankInfo.nextRank ? rankInfo.nextRank.minXP.toLocaleString() : 'MAX'} XP</span>
                        </div>

                        <div className="mt-4 flex gap-4 text-xs bg-slate-900/30 p-2 rounded-lg inline-flex">
                            <span className="flex items-center gap-1"><span className="text-green-400 font-bold">+200 XP</span> por Acierto</span>
                            <span className="flex items-center gap-1"><span className="text-red-400 font-bold">-100 XP</span> por Fallo</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trophy Case */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 mb-8 relative overflow-hidden">
                <h2 className="text-xl font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span>🏆</span> Sala de Trofeos
                </h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg border border-blue-100 transform transition hover:scale-105">
                        <span className="text-4xl mb-2 filter drop-shadow-md">💎</span>
                        <span className="text-3xl font-bold text-slate-800">{userTrophies?.diamonds || 0}</span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Diamantes</span>
                        <span className="text-[10px] text-slate-400 mt-1">1000 preguntas/día</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg border border-yellow-100 transform transition hover:scale-105">
                        <span className="text-4xl mb-2 filter drop-shadow-md">🏆</span>
                        <span className="text-3xl font-bold text-slate-800">{userTrophies?.trophies || 0}</span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Trofeos</span>
                        <span className="text-[10px] text-slate-400 mt-1">500 preguntas/día</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-slate-50 rounded-lg border border-slate-100 transform transition hover:scale-105">
                        <span className="text-4xl mb-2 filter drop-shadow-md">📜</span>
                        <span className="text-3xl font-bold text-slate-800">{userTrophies?.diplomas || 0}</span>
                        <span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Diplomas</span>
                        <span className="text-[10px] text-slate-400 mt-1">100 preguntas/día</span>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-700 mb-4">Tus Estadísticas de Progreso</h2>

            {/* Tarjetas Superiores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-slate-500 font-semibold">Tests Aprobados</h3>
                    <p className="text-3xl font-bold text-slate-800">{stats.testsPassed} <span className="text-sm text-slate-400 font-normal">/ {stats.totalTests}</span></p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${stats.totalTests > 0 ? (stats.testsPassed / stats.totalTests) * 100 : 0}%` }}></div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
                    <div className="bg-green-100 p-3 rounded-full mb-3 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3 className="text-slate-500 font-semibold">Precisión Global</h3>
                    <p className="text-3xl font-bold text-slate-800">{stats.globalAccuracy}%</p>
                    <p className="text-xs text-slate-400 mt-1">Media de aciertos en tests realizados</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
                    <div className="bg-orange-100 p-3 rounded-full mb-3 text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h3 className="text-slate-500 font-semibold">Fallos Pendientes</h3>
                    <p className="text-3xl font-bold text-slate-800">{stats.totalFailedQuestions}</p>
                    <p className="text-xs text-slate-400 mt-1">Preguntas en la lista de repaso</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ranking de Debilidades */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Temas donde más fallas
                    </h3>
                    {stats.weakTopics.length > 0 ? (
                        <div className="space-y-4">
                            {stats.weakTopics.map((topic, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-slate-700">{topic.title}</span>
                                        <span className="text-red-600 font-bold">{topic.count} fallos</span>
                                    </div>
                                    <div className="w-full bg-red-100 rounded-full h-2">
                                        <div
                                            className="bg-red-500 h-2 rounded-full"
                                            style={{ width: `${Math.min((topic.count / stats.totalFailedQuestions) * 100 * 2, 100)}%` }} // *2 para exagerar visualmente si hay pocos datos
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-slate-500">
                            <p>¡No tienes fallos registrados! Realiza tests para ver tus puntos débiles.</p>
                        </div>
                    )}
                </div>

                {/* Ranking de Fortalezas */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h3 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Tus mejores Tests
                    </h3>
                    {stats.strongTopics.length > 0 ? (
                        <div className="space-y-4">
                            {stats.strongTopics.map((topic, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-slate-700 truncate pr-2">{topic!.title}</span>
                                        <span className="text-green-600 font-bold">{Math.round(topic!.percentage)}%</span>
                                    </div>
                                    <div className="w-full bg-green-100 rounded-full h-2">
                                        <div
                                            className="bg-green-500 h-2 rounded-full"
                                            style={{ width: `${topic!.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-slate-500">
                            <p>Aún no has aprobado ningún test. ¡Sigue intentándolo!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatisticsView;
