import React, { useState, useEffect } from 'react';
import type { Question } from '../types';

interface FlashcardViewProps {
  title: string;
  questions: Question[];
  onExit: () => void;
}

const FlashcardView: React.FC<FlashcardViewProps> = ({ title, questions: initialQuestions, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([...initialQuestions]);
  const [isShuffled, setIsShuffled] = useState(false);

  const currentQuestion = shuffledQuestions[currentIndex];
  const correctOptionText = currentQuestion.options[currentQuestion.correctAnswer];

  // Reset state when title changes (new deck loaded)
  useEffect(() => {
    setShuffledQuestions([...initialQuestions]);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsShuffled(false);
  }, [initialQuestions]);

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
    }
  };

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleShuffle = () => {
    const newOrder = [...shuffledQuestions];
    for (let i = newOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
    }
    setShuffledQuestions(newOrder);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsShuffled(true);
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-700 flex items-center gap-2">
          <span className="bg-yellow-100 text-yellow-700 p-2 rounded-lg text-xl">⚡</span>
          {title}
        </h2>
        <button
            onClick={onExit}
            className="bg-white hover:bg-red-50 text-red-600 hover:text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Salir
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
            className="bg-yellow-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-slate-500 mb-4 px-1">
        <span>Tarjeta {currentIndex + 1} de {shuffledQuestions.length}</span>
        {isShuffled && <span className="text-purple-600 font-medium flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Aleatorio</span>}
      </div>

      {/* Flashcard Area */}
      <div className="perspective-1000 relative h-96 min-h-[400px] mb-8 cursor-pointer group" onClick={handleToggleAnswer}>
        <div className={`relative w-full h-full transition-all duration-500 transform-style-3d shadow-xl rounded-2xl border border-slate-200 bg-white flex flex-col items-center justify-center p-8 text-center ${showAnswer ? 'bg-yellow-50 border-yellow-200' : ''}`}>
            
            {/* Content */}
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="flex-grow flex flex-col justify-center">
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">
                        {showAnswer ? 'RESPUESTA CORRECTA' : 'PREGUNTA'}
                    </span>
                    
                    {!showAnswer ? (
                        <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                            {currentQuestion.questionText}
                        </p>
                    ) : (
                        <div className="animate-fade-in-up">
                             <p className="text-xl md:text-2xl font-bold text-green-700 leading-relaxed mb-2">
                                {correctOptionText}
                            </p>
                            {currentQuestion.scenario && (
                                <div className="mt-4 p-3 bg-white rounded border border-yellow-200 text-sm text-slate-500 italic">
                                    Contexto: {currentQuestion.scenario.substring(0, 100)}...
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Hint/Instruction */}
                <div className="mt-6 text-slate-400 text-sm flex items-center gap-2">
                    {!showAnswer ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Pulsa para ver la respuesta
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Pulsa para volver a la pregunta
                        </>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center gap-4">
         <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1 bg-white border border-slate-300 text-slate-700 font-bold py-3 px-4 rounded-xl shadow-sm hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex justify-center items-center gap-2"
         >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Anterior
         </button>

         <button
            onClick={handleShuffle}
            className="bg-purple-100 text-purple-700 hover:bg-purple-200 p-3 rounded-xl shadow-sm transition-colors"
            title="Barajar cartas"
         >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
         </button>

         <button
            onClick={handleNext}
            disabled={currentIndex === shuffledQuestions.length - 1}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex justify-center items-center gap-2"
         >
            Siguiente
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
         </button>
      </div>

      <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">Modo estudio: Las respuestas no se guardan en las estadísticas.</p>
      </div>
    </div>
  );
};

export default FlashcardView;