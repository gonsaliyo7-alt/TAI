
import React from 'react';
import type { TestResult } from '../types';

interface ResultsViewProps {
  result: TestResult;
  totalQuestions: number;
  onReturn: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ result, totalQuestions, onReturn }) => {
  const isPassed = result.status === 'passed';
  const scoreColor = isPassed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  const bgColor = isPassed ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20';
  const borderColor = isPassed ? 'border-green-500 dark:border-green-600' : 'border-red-500 dark:border-red-600';
  const mistakes = totalQuestions - result.score;

  return (
    <div className={`text-center p-8 rounded-2xl border-4 transition-all animate-fade-in ${bgColor} ${borderColor} shadow-2xl`}>
      <h2 className="text-4xl font-black text-slate-800 dark:text-white mb-6 tracking-tight uppercase">Informe de Resultados</h2>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl max-w-md mx-auto mb-8 border border-slate-200 dark:border-slate-700">
        <p className="text-xl text-slate-500 dark:text-slate-400 mb-2 font-semibold uppercase tracking-widest text-sm">Tu puntuación final</p>
        <p className={`text-7xl font-black my-4 filter drop-shadow-sm ${scoreColor}`}>
          {result.score} <span className="text-3xl text-slate-400 dark:text-slate-500 font-normal">/ {totalQuestions}</span>
        </p>

        <div className="grid grid-cols-3 gap-2 mt-8 py-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex flex-col items-center">
            <span className="text-green-600 dark:text-green-400 font-black text-2xl">{result.score}</span>
            <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold">Aciertos</span>
          </div>
          <div className="flex flex-col items-center border-x border-slate-100 dark:border-slate-700">
            <span className="text-red-500 dark:text-red-400 font-black text-2xl">{mistakes}</span>
            <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold">Fallos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-600 dark:text-blue-400 font-black text-2xl">{Math.round((result.score / totalQuestions) * 100)}%</span>
            <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold">Efectividad</span>
          </div>
        </div>
      </div>

      {isPassed ? (
        <div className="bg-green-500 dark:bg-green-600 text-white p-6 rounded-2xl mb-8 inline-block shadow-lg transform -rotate-1">
          <p className="text-3xl font-black flex items-center gap-3">
            <span className="text-4xl">🎓</span> APTA / APTO
          </p>
          <p className="text-sm mt-2 font-medium opacity-90 italic">Has superado el nivel de exigencia para el cuerpo TAI.</p>
        </div>
      ) : (
        <div className="bg-red-500 dark:bg-red-600 text-white p-6 rounded-2xl mb-8 inline-block shadow-lg transform rotate-1">
          <p className="text-3xl font-black flex items-center gap-3">
            <span className="text-4xl">✍️</span> NO APTO
          </p>
          <p className="text-sm mt-2 font-medium opacity-90 italic">Sigue esforzándote, ¡la plaza está a tu alcance!</p>
        </div>
      )}

      <div>
        <button
          onClick={onReturn}
          className="group relative bg-slate-800 dark:bg-slate-200 hover:bg-slate-900 dark:hover:bg-white text-white dark:text-slate-900 font-black py-4 px-10 rounded-2xl text-xl transition-all transform hover:scale-110 active:scale-95 shadow-xl flex items-center gap-3 mx-auto"
        >
          <span>CONTINUAR</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResultsView;
