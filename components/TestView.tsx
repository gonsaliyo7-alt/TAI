
import React, { useState, useMemo, useEffect } from 'react';
import type { Test } from '../types';

interface TestViewProps {
  test: Test;
  onComplete: (testId: string, score: number, totalQuestions: number, details: { correct: string[], incorrect: string[] }) => void;
  onExit: () => void;
}

const TestView: React.FC<TestViewProps> = ({ test, onComplete, onExit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(test.questions.length).fill(null));
  
  // Survival Mode States
  const isSurvival = test.id === 'test-survival';
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  const currentQuestion = useMemo(() => test.questions[currentQuestionIndex], [test, currentQuestionIndex]);
  const isInfinite = test.id === 'test-infinite';
  
  const currentScenario = currentQuestion.scenario || test.scenario;

  const handleAnswerSelect = (optionIndex: number) => {
    // Bloquear la respuesta si ya se ha contestado
    if (answers[currentQuestionIndex] !== null || gameOver) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);

    // Logic for Survival Mode
    if (isSurvival) {
        const isCorrect = optionIndex === currentQuestion.correctAnswer;
        if (!isCorrect) {
            const newLives = lives - 1;
            setLives(newLives);
            if (newLives === 0) {
                setGameOver(true);
                // Give a small delay so the user sees the red answer before finishing
                setTimeout(() => {
                    handleFinishSurvival(newAnswers);
                }, 1500);
            }
        } else {
            // If correct in survival mode, we can auto-advance or wait. 
            // Let's wait for user to click Next to keep consistency, 
            // but we could auto-advance.
        }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getResultsDetails = (currentAnswers = answers) => {
      const correct: string[] = [];
      const incorrect: string[] = [];
      let score = 0;

      currentAnswers.forEach((answer, index) => {
          if (answer !== null) {
              const question = test.questions[index];
              if (answer === question.correctAnswer) {
                  score++;
                  correct.push(question.questionText.trim());
              } else {
                  incorrect.push(question.questionText.trim());
              }
          }
      });
      return { score, correct, incorrect };
  };

  const handleSubmit = () => {
    const { score, correct, incorrect } = getResultsDetails();
    onComplete(test.id, score, test.questions.length, { correct, incorrect });
  };
  
  const handleFinishInfinite = () => {
      const { score, correct, incorrect } = getResultsDetails();
      const answeredCount = answers.filter(a => a !== null).length;
      const totalForStats = answeredCount > 0 ? answeredCount : 1; 
      
      onComplete(test.id, score, totalForStats, { correct, incorrect });
  };

  const handleFinishSurvival = (finalAnswers: (number | null)[]) => {
      const { score, correct, incorrect } = getResultsDetails(finalAnswers);
      // In survival, "score" is the number of correct answers (the streak/record)
      // Total questions is irrelevant, but we pass the number of attempted questions
      const attempted = correct.length + incorrect.length;
      onComplete(test.id, score, attempted, { correct, incorrect });
  };
  
  const progressPercentage = ((currentQuestionIndex + 1) / test.questions.length) * 100;
  const isAnswered = answers[currentQuestionIndex] !== null;

  return (
    <div className={`flex flex-col ${isSurvival && lives === 1 ? 'animate-pulse bg-red-50 p-2 rounded-xl' : ''}`}>
      <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-700 flex items-center gap-2">
             {test.title}
             {isInfinite && <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full border border-purple-200">Modo Infinito</span>}
          </h2>
          
          {isSurvival ? (
              <div className="flex items-center gap-2 mt-2">
                  <span className="text-slate-600 font-semibold">Vidas:</span>
                  <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                          <span key={i} className={`text-2xl transition-all duration-500 ${i < lives ? 'text-red-500 scale-100' : 'text-gray-300 scale-75 grayscale'}`}>
                              ❤️
                          </span>
                      ))}
                  </div>
                  <span className="ml-4 text-sm font-mono bg-slate-800 text-white px-2 py-1 rounded">Racha: {answers.filter((a, i) => a !== null && a === test.questions[i].correctAnswer).length}</span>
              </div>
          ) : (
            <p className="text-slate-500 mt-1">Pregunta {currentQuestionIndex + 1} {isInfinite ? '' : `de ${test.questions.length}`}</p>
          )}
        </div>
        <button
            onClick={onExit}
            className="self-end sm:self-auto bg-white hover:bg-red-50 text-red-600 hover:text-red-700 border border-red-200 px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Abandonar
        </button>
      </div>
      
      {!isSurvival && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      )}

      {isSurvival && (
          <div className="w-full bg-gray-200 rounded-full h-1 mb-6">
             <div className="bg-red-500 h-1 rounded-full transition-all duration-300" style={{ width: `${(currentQuestionIndex / 100) * 100}%` }}></div>
          </div>
      )}

      {currentScenario && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 text-slate-700 rounded-r shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-blue-800 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Supuesto de Hecho
            </h3>
            <p className="whitespace-pre-line leading-relaxed text-justify">{currentScenario}</p>
        </div>
      )}

      <div className="bg-slate-50 p-6 rounded-lg shadow-inner border border-slate-100 relative overflow-hidden">
        {gameOver && (
            <div className="absolute inset-0 bg-red-100/80 z-10 flex items-center justify-center flex-col animate-fade-in">
                <span className="text-6xl">💀</span>
                <h3 className="text-3xl font-bold text-red-800 mt-4">¡Fin del Juego!</h3>
                <p className="text-red-700">Has perdido tus 3 vidas.</p>
            </div>
        )}
        <h3 className="text-lg font-semibold mb-4 text-slate-800">{currentQuestion.questionText}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = answers[currentQuestionIndex] === index;
            const isCorrect = index === currentQuestion.correctAnswer;

            let containerClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between ";
            let badgeClass = "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-3 font-bold text-sm ";

            if (!isAnswered) {
                // Estado normal: no respondida
                containerClass += "bg-white border-slate-200 hover:bg-slate-100 hover:border-slate-300 cursor-pointer";
                badgeClass += "bg-slate-200 text-slate-600";
            } else {
                // Estado respondida: feedback inmediato
                if (isCorrect) {
                    containerClass += "bg-green-50 border-green-500 shadow-sm";
                    badgeClass += "bg-green-500 text-white";
                } else if (isSelected) {
                    containerClass += "bg-red-50 border-red-500 shadow-sm";
                    badgeClass += "bg-red-500 text-white";
                } else {
                    containerClass += "bg-white border-slate-100 opacity-50";
                    badgeClass += "bg-slate-100 text-slate-400";
                }
            }

            return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isAnswered || gameOver}
              className={containerClass}
            >
              <div className="flex items-center">
                <span className={badgeClass}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={isAnswered && isCorrect ? "font-medium text-green-800" : (isAnswered && isSelected ? "font-medium text-red-800" : "text-slate-700")}>
                    {option}
                </span>
              </div>
              {isAnswered && isCorrect && (
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              )}
              {isAnswered && isSelected && !isCorrect && (
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              )}
            </button>
          )})}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 gap-2 flex-wrap sm:flex-nowrap">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0 || gameOver}
          className="order-1 flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold py-2 px-5 rounded-lg border border-slate-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Anterior
        </button>
        
        {isInfinite && (
            <button
                onClick={handleFinishInfinite}
                className="order-3 sm:order-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-lg shadow-md flex items-center gap-2 flex-grow sm:flex-grow-0 justify-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Finalizar y ver nota
            </button>
        )}

        {currentQuestionIndex === test.questions.length - 1 ? (
          <button
            onClick={isInfinite ? handleFinishInfinite : handleSubmit}
            disabled={!isInfinite && answers.some(a => a === null)} 
            className="order-2 sm:order-3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Finalizar Test
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={gameOver}
            className="order-2 sm:order-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg shadow-md disabled:opacity-50"
          >
            Siguiente
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default TestView;
