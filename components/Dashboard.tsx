
import React from 'react';
import type { Test, TestResults } from '../types';

interface DashboardProps {
  tests: Test[];
  results: TestResults;
  onStartTest: (testId: string) => void;
  title?: string;
  survivalRecord?: number;
}

const getStatusClasses = (status: 'passed' | 'failed' | undefined, testId: string): string => {
  if (testId === 'test-survival') {
      return 'bg-gradient-to-r from-red-50 to-red-100 border-red-600';
  }
  if (status === 'passed') {
    return 'bg-green-100 border-green-500 text-green-800';
  }
  if (status === 'failed') {
    return 'bg-red-100 border-red-500 text-red-800';
  }
  return 'bg-slate-100 border-slate-300 text-slate-800';
};

const getButtonClasses = (status: 'passed' | 'failed' | undefined, testId: string): string => {
    if (testId === 'test-survival') {
        return 'bg-red-600 hover:bg-red-700 text-white ring-2 ring-red-300';
    }
    if (status === 'passed') {
        return 'bg-green-500 hover:bg-green-600';
    }
    if (status === 'failed') {
        return 'bg-red-500 hover:bg-red-600';
    }
  return 'bg-blue-500 hover:bg-blue-600';
}

const TestCard: React.FC<{test: Test, result?: {score: number; status: 'passed' | 'failed'}, onStartTest: (id: string) => void, survivalRecord?: number}> = ({test, result, onStartTest, survivalRecord}) => {
    const totalQuestions = test.totalQuestions ?? test.questions.length;
    const isSurvival = test.id === 'test-survival';
    
    return (
        <div className={`p-4 rounded-lg border-l-4 transition-transform transform hover:-translate-y-1 shadow-sm ${getStatusClasses(result?.status, test.id)}`}>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        {test.title}
                        {isSurvival && <span className="text-2xl">💀</span>}
                    </h3>
                    
                    {isSurvival ? (
                         <div className="mt-1">
                             <p className="text-sm font-semibold text-red-800">
                                 Objetivo: Sobrevivir sin fallar.
                             </p>
                             <p className="text-xs text-red-600 mt-1 font-mono">
                                 Récord actual: <span className="font-bold text-lg">{survivalRecord || 0}</span> preguntas
                             </p>
                         </div>
                    ) : (
                        result ? (
                            <p className="text-sm font-semibold mt-1">
                                Resultado: {result.score}/{totalQuestions} - {result.status === 'passed' ? 'Aprobado' : 'No Aprobado'}
                            </p>
                        ) : (
                            <p className="text-sm mt-1 opacity-75">Aún no realizado</p>
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
  // Separamos el test de supervivencia para ponerlo destacado arriba
  const survivalTest = tests.find(t => t.id === 'test-survival');
  const otherTests = tests.filter(t => t.id !== 'test-survival');

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-700 mb-6">{title || 'Listado de Tests'}</h2>
      
      {survivalTest && (
          <div className="mb-8 animate-fade-in">
              <TestCard test={survivalTest} onStartTest={onStartTest} survivalRecord={survivalRecord} />
          </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {otherTests.map(test => (
          <TestCard key={test.id} test={test} result={results[test.id]} onStartTest={onStartTest} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
