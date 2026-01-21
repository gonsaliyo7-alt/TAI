
import React from 'react';
import { RANKS } from '../data/ranks';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function InfoModal({ isOpen, onClose }: InfoModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex justify-between items-center mb-4 border-b pb-4">
          <h2 id="info-modal-title" className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Guía de Uso y Contenido
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Cerrar modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-slate-600 space-y-6">
          <p className="text-lg text-slate-800 font-medium">
            Bienvenido a tu plataforma de preparación para el Cuerpo de Técnicos Auxiliares de Informática (TAI) de la Administración del Estado.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Cómo funciona la aplicación</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="bg-blue-200 text-blue-800 text-xs font-bold px-2 py-1 rounded mt-1 mr-2">DINÁMICO</span>
                <div>
                  <strong>Tests Aleatorios "Siempre Nuevos":</strong>
                  <p className="text-sm mt-1">El "Test Comprensivo" (50 preguntas) y el "Test Rápido" (10 preguntas) se generan en el momento. El sistema selecciona preguntas al azar de toda la base de datos y <u>baraja las respuestas</u>, garantizando que nunca hagas el mismo test dos veces.</p>
                </div>
              </li>
              <li className="flex items-start mt-4">
                <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded mt-1 mr-2">TEMARIO</span>
                <div>
                  <strong>Tests por Bloques y Temas:</strong>
                  <p className="text-sm mt-1">Dispones de tests que agrupan bloques de 5 temas (Tests 1-20) y ahora también <strong>50 nuevos tests específicos</strong>, uno por cada tema del programa oficial.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-3 border-b pb-2">Estructura del Contenido</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold text-slate-800">Bloque I: Admin. Pública</h4>
                <ul className="list-disc list-inside text-slate-600 pl-2">
                  <li>Constitución y Estado (Temas 1-5)</li>
                  <li>Derecho Administrativo (Temas 6-9)</li>
                  <li>Gestión de Personal y Presupuesto (Temas 10-12)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Bloque II: Tecnología Básica</h4>
                <ul className="list-disc list-inside text-slate-600 pl-2">
                  <li>Informática Básica y Hardware (Temas 1-4)</li>
                  <li>Sistemas Operativos (Temas 5-7)</li>
                  <li>Redes y Comunicaciones (Temas 8-10)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Bloque III: Desarrollo de Sistemas</h4>
                <ul className="list-disc list-inside text-slate-600 pl-2">
                  <li>Metodologías y Diseño (Temas 1-3)</li>
                  <li>Bases de Datos y SQL (Temas 4-6)</li>
                  <li>Lenguajes de Programación y Web (Temas 7-10)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Bloque IV: Infraestructuras</h4>
                <ul className="list-disc list-inside text-slate-600 pl-2">
                  <li>Administración de Sistemas (Temas 1-3)</li>
                  <li>Seguridad y Accesibilidad (Temas 4-7)</li>
                  <li>Cloud y Microservicios (Temas 8-10)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-sm text-slate-500 bg-gray-50 p-3 rounded">
            <p><strong>Nota:</strong> Para aprobar cualquier test se requiere un <strong>80% de aciertos</strong>. Tus resultados se guardan en este dispositivo para que puedas seguir tu progreso.</p>
          </div>

          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-bold text-slate-800 mb-3">🎖️ Sistema de Rangos y Experiencia</h3>
            <p className="text-sm text-slate-600 mb-4">
              Ganas <span className="text-green-600 font-bold">+200 XP</span> por cada pregunta acertada y pierdes <span className="text-red-600 font-bold">-100 XP</span> por cada fallo. Acumula experiencia para ascender de rango.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 max-h-60 overflow-y-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-100 sticky top-0">
                  <tr>
                    <th className="px-3 py-2 bg-slate-100">Rango</th>
                    <th className="px-3 py-2 text-right bg-slate-100">XP Necesaria</th>
                  </tr>
                </thead>
                <tbody>
                  {RANKS.map((rank) => (
                    <tr key={rank.name} className="border-b border-slate-100 last:border-0 hover:bg-slate-100 transition-colors">
                      <td className="px-3 py-2 font-medium text-slate-700 flex items-center gap-2">
                        <span className="text-xl w-8 text-center">{rank.icon}</span> {rank.name}
                      </td>
                      <td className="px-3 py-2 text-right text-blue-600 font-mono font-semibold">
                        {rank.minXP.toLocaleString()} XP
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Entendido, ir a los tests
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
