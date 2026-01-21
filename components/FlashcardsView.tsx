
import React from 'react';
import type { Test, Question } from '../types';

interface FlashcardsViewProps {
    allQuestions: Question[];
    tests: Test[];
    onStartDeck: (deck: { id: string, title: string, questions: Question[] }) => void;
}

const FlashcardsView: React.FC<FlashcardsViewProps> = ({ allQuestions, tests, onStartDeck }) => {
    const TIME_KEYWORDS = [
        'plazo', 'días', 'dia', 'mes', 'año', 'hora', 'tiempo', 'duración',
        'prescri', 'caduc', 'antigüedad', 'cómputo', 'tardía', 'prórroga',
        'vigencia', 'periodo', 'edad', 'fecha'
    ];

    const handleStartTimeDeck = () => {
        const timeQuestions = allQuestions.filter(q =>
            TIME_KEYWORDS.some(keyword => q.questionText.toLowerCase().includes(keyword) || q.options.some(o => o.toLowerCase().includes(keyword)))
        );
        if (timeQuestions.length === 0) {
            alert("No se encontraron preguntas de plazos.");
            return;
        }
        onStartDeck({
            id: 'flashcards-plazos',
            title: 'Repaso de Plazos y Tiempos',
            questions: timeQuestions
        });
    };

    const handleStartTestDeck = (test: Test) => {
        onStartDeck({
            id: test.id,
            title: `Flashcards: ${test.title}`,
            questions: test.questions
        });
    };

    const topicTests = tests.filter(t => t.id.startsWith('topic-'));

    return (
        <div className="space-y-8 animate-fade-in pb-12">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2">⚡ Flashcards de Repaso</h2>
                <p className="text-slate-600 dark:text-slate-400">Memoriza conceptos clave de forma rápida y eficiente.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mazo Especial */}
                <div
                    onClick={handleStartTimeDeck}
                    className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl text-white shadow-xl cursor-pointer transform transition hover:scale-105 active:scale-95 group relative overflow-hidden"
                >
                    <div className="absolute -right-4 -bottom-4 text-8xl opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform">🕒</div>
                    <h3 className="text-2xl font-black mb-2">Mazo de Plazos</h3>
                    <p className="text-white/80 text-sm">Todas las preguntas sobre días, meses y plazos administrativos.</p>
                    <div className="mt-6 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full font-bold text-sm">
                        Comenzar Repaso →
                    </div>
                </div>

                {/* Mazos por Temas */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border-2 border-slate-100 dark:border-slate-700 shadow-lg">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                        <span className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg text-blue-600 dark:text-blue-400">📚</span> Por Temas Específicos
                    </h3>
                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {topicTests.map(test => (
                            <button
                                key={test.id}
                                onClick={() => handleStartTestDeck(test)}
                                className="w-full text-left p-3 rounded-xl border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex justify-between items-center group"
                            >
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{test.title}</span>
                                <span className="text-[10px] bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-md text-slate-400 font-bold uppercase">{test.questions.length} CARDS</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashcardsView;
