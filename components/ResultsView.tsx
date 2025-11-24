
import React from 'react';
import type { TestResult } from '../types';

interface ResultsViewProps {
  result: TestResult;
  totalQuestions: number;
  onReturn: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ result, totalQuestions, onReturn }) => {
  const isPassed = result.status === 'passed';
  const scoreColor = isPassed ? 'text-green-600' : 'text-red-600';
  const bgColor = isPassed ? 'bg-green-100' : 'bg-red-100';
  const borderColor = isPassed ? 'border-green-500' : 'border-red-500';
  const mistakes = totalQuestions - result.score;

  return (
    <div className={`text-center p-8 rounded-lg border-4 ${bgColor} ${borderColor}`}>
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Test Finalizado</h2>
      
      <div className="bg-white p-6 rounded-xl shadow-sm max-w-md mx-auto mb-6">
        <p className="text-xl text-slate-600 mb-2 font-medium">Tu puntuación final</p>
        <p className={`text-6xl font-bold my-2 ${scoreColor}`}>
          {result.score} <span className="text-3xl text-slate-400">/ {totalQuestions}</span>
        </p>
        <div className="flex justify-center gap-6 mt-4 text-lg">
            <div className="flex flex-col items-center">
                <span className="text-green-600 font-bold text-2xl">{result.score}</span>
                <span className="text-slate-500 text-sm">Aciertos</span>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div className="flex flex-col items-center">
                <span className="text-red-500 font-bold text-2xl">{mistakes}</span>
                <span className="text-slate-500 text-sm">Fallos</span>
            </div>
            <div className="w-px bg-slate-200"></div>
            <div className="flex flex-col items-center">
                <span className="text-blue-600 font-bold text-2xl">{Math.round((result.score / totalQuestions) * 100)}%</span>
                <span className="text-slate-500 text-sm">Aciertos</span>
            </div>
        </div>
      </div>

      {isPassed ? (
        <div className="bg-green-200 text-green-800 p-4 rounded-lg mb-6 inline-block">
            <p className="text-2xl font-bold">¡Enhorabuena, has aprobado!</p>
            <p className="text-sm mt-1 opacity-75">Has superado el 80% de aciertos requeridos.</p>
        </div>
      ) : (
        <div className="bg-red-200 text-red-800 p-4 rounded-lg mb-6 inline-block">
            <p className="text-2xl font-bold">No Aprobado</p>
            <p className="text-sm mt-1 opacity-75">Necesitas un 80% de aciertos para aprobar. ¡Sigue practicando!</p>
        </div>
      )}

      <div>
        <button
            onClick={onReturn}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
        >
            Volver al Menú Principal
        </button>
      </div>
    </div>
  );
};

export default ResultsView;
