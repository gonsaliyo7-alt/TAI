
import React, { useMemo } from 'react';
import type { Test, TestResults, TestResult, UserTrophies, TestHistory } from '../types';
import { RANKS } from '../data/ranks';

interface StatisticsViewProps {
    results: TestResults;
    failedQuestions: string[];
    allTests: Test[];
    userXP?: number;
    userTrophies?: UserTrophies;
    testHistory?: TestHistory;
    studyStreak?: number;
}

const EvolutionChart: React.FC<{ history: TestHistory }> = ({ history }) => {
    // Tomamos los últimos 15 intentos para no saturar
    const data = useMemo(() => {
        const sorted = [...history].sort((a, b) => new Date(a.date || '').getTime() - new Date(b.date || '').getTime());
        return sorted.slice(-15).map((h, i) => ({
            x: i,
            y: h.totalQuestions ? (h.score / h.totalQuestions) * 100 : 0,
            date: new Date(h.date || '').toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
            title: h.testTitle
        }));
    }, [history]);

    if (data.length < 2) {
        return (
            <div className="h-64 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900/30 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
                <span className="text-4xl mb-2">📈</span>
                <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Necesitas realizar al menos 2 tests para generar gráficas.</p>
            </div>
        );
    }

    const width = 800;
    const height = 200;
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    const points = data.map((d, i) => {
        const x = padding + (i / (data.length - 1)) * chartWidth;
        const y = (height - padding) - (d.y / 100) * chartHeight;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
                {/* Grids horizontales */}
                {[0, 25, 50, 75, 100].map(val => {
                    const y = (height - padding) - (val / 100) * chartHeight;
                    return (
                        <g key={val}>
                            <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="currentColor" className="text-slate-100 dark:text-slate-700/50" strokeWidth="1" />
                            <text x={padding - 10} y={y + 4} textAnchor="end" className="text-[10px] fill-slate-400 font-bold">{val}%</text>
                        </g>
                    );
                })}

                {/* Línea de evolución */}
                <polyline
                    points={points}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-lg"
                />

                {/* Puntos y etiquetas */}
                {data.map((d, i) => {
                    const x = padding + (i / (data.length - 1)) * chartWidth;
                    const y = (height - padding) - (d.y / 100) * chartHeight;
                    return (
                        <g key={i} className="group cursor-help">
                            <circle cx={x} cy={y} r="5" fill="white" stroke="#3b82f6" strokeWidth="3" className="transition-all hover:r-7" />
                            <text x={x} y={height - padding + 20} textAnchor="middle" className="text-[10px] fill-slate-500 font-bold transform -rotate-45 md:rotate-0">
                                {d.date}
                            </text>

                            {/* Tooltip simple (mostrado solo en hover por CSS o interactividad) */}
                            <title>{`${d.title}: ${Math.round(d.y)}%`}</title>
                        </g>
                    );
                })}

                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

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

const StatisticsView: React.FC<StatisticsViewProps> = ({ results, failedQuestions, allTests, userXP = 0, userTrophies, testHistory = [], studyStreak = 0 }) => {

    const stats = useMemo(() => {
        // ... (cálculos idénticos)
        const totalTests = allTests.filter(t => t.id !== 'test-infinite' && t.id !== 'test-failed-questions' && t.id !== 'test-all-comprehensive' && t.id !== 'test-all-quick').length;
        const testsAttempted = Object.keys(results).length;
        const resultsValues = Object.values(results) as TestResult[];
        const testsPassed = resultsValues.filter(r => r.status === 'passed').length;
        const testsFailed = resultsValues.filter(r => r.status === 'failed').length;
        const globalScoreSum = resultsValues.reduce((acc, curr) => acc + curr.score, 0);

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

        const failuresByTopic: Record<string, number> = {};
        failedQuestions.forEach(failText => {
            const originTest = allTests.find(t =>
                t.id.startsWith('topic-') &&
                t.questions.some(q => q.questionText.trim() === failText)
            ) || allTests.find(t =>
                t.questions.some(q => q.questionText.trim() === failText)
            );

            if (originTest) {
                failuresByTopic[originTest.title] = (failuresByTopic[originTest.title] || 0) + 1;
            }
        });

        const weakTopics = Object.entries(failuresByTopic)
            .map(([title, count]) => ({ title, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);

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
        <div className="space-y-6 animate-fade-in pb-10">
            {/* Study Streak Card - High Visibility */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-2xl p-6 text-white shadow-2xl border-2 border-orange-400 relative overflow-hidden group animate-fade-in">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <div className="flex items-center justify-between z-10 relative">
                    <div className="flex items-center gap-6">
                        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md animate-bounce">
                            <span className="text-5xl">🔥</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black uppercase tracking-tighter italic">Racha de Estudio Actual</h2>
                            <p className="text-orange-100 font-bold opacity-80 uppercase text-xs tracking-widest">¡Tu disciplina te llevará directo a la plaza!</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bg-black/20 px-8 py-3 rounded-2xl border border-white/20 backdrop-blur-sm">
                        <span className="text-6xl font-black leading-none">{studyStreak}</span>
                        <span className="text-xs font-black uppercase tracking-[0.3em] mt-1">Días Seguidos</span>
                    </div>
                </div>
                <div className="absolute -bottom-10 -right-10 text-white/10 text-[12rem] font-black italic pointer-events-none">TAI</div>
            </div>

            {/* Rango de Funcionario Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-2xl border-2 border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                    <span className="text-9xl">🏛️</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 z-10 relative">
                    <div className="flex flex-col items-center">
                        <div className="w-28 h-28 bg-slate-700 rounded-2xl flex items-center justify-center border-4 border-blue-400 shadow-xl text-6xl mb-3 transform rotate-3">
                            {rankInfo.currentRank.icon}
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-blue-300 font-bold">Cargo Público Actual</span>
                        <h2 className="text-xl font-black text-white text-center">{rankInfo.currentRank.name}</h2>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="flex justify-between items-end mb-3">
                            <div>
                                <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">{userXP.toLocaleString()} <span className="text-sm font-normal text-slate-400 uppercase tracking-widest">XP de Méritos</span></p>
                            </div>
                            <div className="text-right">
                                {rankInfo.nextRank ? (
                                    <>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Próximo Escalafón: <span className="text-white">{rankInfo.nextRank.name}</span></p>
                                        <p className="text-[10px] text-blue-300">Faltan {rankInfo.xpForNextLevel.toLocaleString()} XP</p>
                                    </>
                                ) : (
                                    <p className="text-yellow-400 font-black animate-pulse">¡NIVEL MÁXIMO DE ADMINISTRACIÓN!</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full bg-slate-950/50 rounded-full h-5 border border-slate-700 p-1">
                            <div
                                className="bg-gradient-to-r from-blue-600 to-blue-300 h-full rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                style={{ width: `${rankInfo.progress}%` }}
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 animate-pulse rounded-r-full"></div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-3 text-[10px] text-slate-500 font-bold">
                            <span>{rankInfo.currentRank.minXP.toLocaleString()} XP base</span>
                            <span>{rankInfo.nextRank ? rankInfo.nextRank.minXP.toLocaleString() : 'LÍMITE'} XP</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vitrina de Premios */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                <h2 className="text-xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                    <span className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg">🏆</span> Sala de Condecoraciones
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="group flex flex-col items-center p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 transition-all hover:scale-105 hover:shadow-lg">
                        <span className="text-5xl mb-3 filter drop-shadow-md group-hover:animate-bounce">💎</span>
                        <span className="text-4xl font-black text-slate-800 dark:text-white">{userTrophies?.diamonds || 0}</span>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 uppercase tracking-widest font-black mt-1">Diamantes TAI</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 text-center">(1000 preg/día)</span>
                    </div>
                    <div className="group flex flex-col items-center p-5 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-100 dark:border-yellow-800 transition-all hover:scale-105 hover:shadow-lg">
                        <span className="text-5xl mb-3 filter drop-shadow-md group-hover:animate-bounce">🏆</span>
                        <span className="text-4xl font-black text-slate-800 dark:text-white">{userTrophies?.trophies || 0}</span>
                        <span className="text-[10px] text-yellow-600 dark:text-yellow-400 uppercase tracking-widest font-black mt-1">Trofeos de Oro</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 text-center">(500 preg/día)</span>
                    </div>
                    <div className="group flex flex-col items-center p-5 bg-slate-50 dark:bg-slate-700/50 rounded-2xl border border-slate-200 dark:border-slate-600 transition-all hover:scale-105 hover:shadow-lg">
                        <span className="text-5xl mb-3 filter drop-shadow-md group-hover:animate-bounce">📜</span>
                        <span className="text-4xl font-black text-slate-800 dark:text-white">{userTrophies?.diplomas || 0}</span>
                        <span className="text-[10px] text-slate-600 dark:text-slate-400 uppercase tracking-widest font-black mt-1">Diplomas Mérito</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 text-center">(100 preg/día)</span>
                    </div>
                </div>
            </div>

            {/* Gráfica de Evolución */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 relative">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                        <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">📈</span> Análisis de Rendimiento Temporal
                    </h2>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">Últimos 15 Intentos</span>
                </div>

                <EvolutionChart history={testHistory} />

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                        <p className="text-[10px] font-black text-slate-400 uppercase">Tendencia</p>
                        <p className="text-lg font-black text-blue-600 dark:text-blue-400">Escalable</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                        <p className="text-[10px] font-black text-slate-400 uppercase">Consistencia</p>
                        <p className="text-lg font-black text-purple-600 dark:text-purple-400">Alta</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                        <p className="text-[10px] font-black text-slate-400 uppercase">Racha Actual</p>
                        <p className="text-lg font-black text-orange-600 dark:text-orange-400">{studyStreak} Días</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                        <p className="text-[10px] font-black text-slate-400 uppercase">Velocidad</p>
                        <p className="text-lg font-black text-orange-600 dark:text-orange-400">Vibrante</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group transition-colors hover:border-blue-500">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded-2xl mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-widest">Tests Superados</h3>
                    <p className="text-4xl font-black text-slate-800 dark:text-white mt-1">{stats.testsPassed} <span className="text-sm text-slate-400 font-normal">/ {stats.totalTests}</span></p>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 mt-4 overflow-hidden p-0.5">
                        <div className="bg-blue-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(59,130,246,0.4)]" style={{ width: `${stats.totalTests > 0 ? (stats.testsPassed / stats.totalTests) * 100 : 0}%` }}></div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group transition-colors hover:border-green-500">
                    <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded-2xl mb-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3 className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-widest">Precisión Administrativa</h3>
                    <p className="text-4xl font-black text-slate-800 dark:text-white mt-1">{stats.globalAccuracy}%</p>
                    <p className="text-[10px] text-green-600 dark:text-green-500 mt-2 font-bold italic">Media de eficiencia en campo</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center group transition-colors hover:border-red-500">
                    <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-2xl mb-4 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h3 className="text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-widest">Expedientes en Revisión</h3>
                    <p className="text-4xl font-black text-slate-800 dark:text-white mt-1">{stats.totalFailedQuestions}</p>
                    <p className="text-[10px] text-red-600 dark:text-red-500 mt-2 font-bold italic">Preguntas con errata detectada</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ranking de Debilidades */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-black text-red-600 dark:text-red-400 mb-6 flex items-center gap-3">
                        <span className="bg-red-100 dark:bg-red-900/40 p-2 rounded-lg">⚠️</span> Áreas de Mejora Prioritaria
                    </h3>
                    {stats.weakTopics.length > 0 ? (
                        <div className="space-y-6">
                            {stats.weakTopics.map((topic, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors uppercase text-xs tracking-wider">{topic.title}</span>
                                        <span className="text-red-600 dark:text-red-400 font-black">{topic.count} incidencias</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 p-0.5">
                                        <div
                                            className="bg-gradient-to-r from-red-600 to-red-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(220,38,38,0.3)]"
                                            style={{ width: `${Math.min((topic.count / stats.totalFailedQuestions) * 100 * 1.5, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-slate-500 dark:text-slate-400 italic">
                            <p className="text-4xl mb-3">✅</p>
                            <p>¡Expediente impecable! No se han registrado fallos en el sistema.</p>
                        </div>
                    )}
                </div>

                {/* Ranking de Fortalezas */}
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-black text-green-600 dark:text-green-400 mb-6 flex items-center gap-3">
                        <span className="bg-green-100 dark:bg-green-900/40 p-2 rounded-lg">⭐</span> Especialidades Dominadas
                    </h3>
                    {stats.strongTopics.length > 0 ? (
                        <div className="space-y-6">
                            {stats.strongTopics.map((topic, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-bold text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors uppercase text-xs tracking-wider truncate pr-4">{topic!.title}</span>
                                        <span className="text-green-600 dark:text-green-400 font-black">{Math.round(topic!.percentage)}%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 p-0.5">
                                        <div
                                            className="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(22,163,74,0.3)]"
                                            style={{ width: `${topic!.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-slate-500 dark:text-slate-400 italic">
                            <p className="text-4xl mb-3">📚</p>
                            <p>Aún no has consolidado ninguna área. ¡Sigue con la formación!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatisticsView;
