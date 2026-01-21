
import React from 'react';

interface SalaryTier {
    title: string;
    level: string;
    range: string;
    description: string;
    icon: string;
    isA1?: boolean;
    isHighLevel?: boolean;
}

const SALARY_TIERS: SalaryTier[] = [
    {
        title: "TAI Recién Ingresado",
        level: "Nivel 15-18",
        range: "24.000€ - 29.000€",
        description: "Sueldo base de C1 + Complemento de Destino + Específico básico. ¡Tu primer sueldo público!",
        icon: "🔰"
    },
    {
        title: "TAI Consolidado",
        level: "Nivel 22",
        range: "32.000€ - 38.000€",
        description: "Con unos años de experiencia, trienios y una plaza con mayor complemento específico.",
        icon: "💻"
    },
    {
        title: "Gestión de Sistemas (A2)",
        level: "Nivel 24-26",
        range: "38.000€ - 48.000€",
        description: "Promoción interna a Gestión. Más responsabilidad, gestión de equipos y proyectos.",
        icon: "📊"
    },
    {
        title: "Cuerpo Superior (A1)",
        level: "Nivel 26-28",
        range: "48.000€ - 75.000€",
        description: "Ingenieros y licenciados. Diseño de arquitecturas críticas y alta dirección técnica.",
        icon: "🚀",
        isA1: true
    },
    {
        title: "Máximo Nivel (Alto Cargo)",
        level: "Nivel 30 / Político",
        range: "85.000€ - 120.000€+",
        description: "Subdirectores Generales, Directores TIC o Secretarios de Estado. El techo de la administración.",
        icon: "👑",
        isHighLevel: true
    }
];

const SalaryView: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in pb-12">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-black text-slate-800 dark:text-white mb-4">
                    💰 Plan de Carrera y Retribuciones
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    El esfuerzo de hoy es la estabilidad de mañana. Mira el potencial económico de tu carrera en la Administración General del Estado.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {SALARY_TIERS.map((tier, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden p-6 rounded-2xl border-2 transition-all transform hover:scale-[1.02] hover:shadow-2xl flex flex-col md:flex-row items-center gap-6 ${tier.isHighLevel
                                ? 'bg-gradient-to-r from-yellow-500/10 to-yellow-600/20 border-yellow-500 shadow-yellow-500/20 shadow-lg'
                                : tier.isA1
                                    ? 'bg-gradient-to-r from-blue-600/10 to-blue-700/20 border-blue-500 dark:bg-blue-900/20'
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-md'
                            }`}
                    >
                        {/* Indicador de Nivel */}
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-inner ${tier.isHighLevel ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-blue-400'
                            }`}>
                            {tier.icon}
                        </div>

                        {/* Contenido Principal */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-black text-slate-800 dark:text-white">
                                {tier.title}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-xs font-bold rounded-lg mt-1 mb-2">
                                {tier.level}
                            </span>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-xl">
                                {tier.description}
                            </p>
                        </div>

                        {/* Rango Salarial */}
                        <div className="text-center md:text-right min-w-[200px]">
                            <p className="text-xs text-slate-400 uppercase font-black tracking-widest mb-1">Estimación Bruta Anual</p>
                            <p className={`text-3xl font-black ${tier.isHighLevel ? 'text-yellow-600 dark:text-yellow-400' : 'text-blue-600 dark:text-blue-400'
                                }`}>
                                {tier.range}
                            </p>
                            <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 italic">
                                *Sujeto a complementos y productividad
                            </p>
                        </div>

                        {/* Ribbon para niveles altos */}
                        {tier.isHighLevel && (
                            <div className="absolute top-0 right-0">
                                <div className="bg-yellow-500 text-white text-[10px] font-black py-1 px-8 transform rotate-45 translate-x-4 -translate-y-0.5 shadow-sm">
                                    ÉLITE
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 text-9xl opacity-20 transform -rotate-12">💶</div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-4">¿Por qué estudiar TAI?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-90">
                        <div className="flex items-start gap-2">
                            <span className="text-lg">✔️</span>
                            <p><strong>Subida garantizada:</strong> Acuerdos de subida salarial anual + trienios cada 3 años (+4% de sueldo base aprox).</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-lg">✔️</span>
                            <p><strong>Horario Conciliador:</strong> Jornada de 37.5h con posibilidad de teletrabajo 2-3 días a la semana.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-lg">✔️</span>
                            <p><strong>Pagas Extras Reales:</strong> 14 pagas íntegras aseguradas por ley. Sin excepciones.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-lg">✔️</span>
                            <p><strong>Excedencias y Movilidad:</strong> Puedes moverte por toda España y volver al sector privado si quieres con excedencia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalaryView;
