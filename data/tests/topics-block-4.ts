
import type { Test } from '../../types';

export const TEST_TOPIC_31: Test = {
  id: 'topic-31',
  title: 'Tema 31: Establecimientos',
  questions: [
    { questionText: 'Los Centros de Inserción Social son establecimientos de régimen:', options: ['Cerrado', 'Abierto', 'Ordinario', 'Preventivo'], correctAnswer: 1 },
    { questionText: 'Las Unidades Psiquiátricas Penitenciarias son establecimientos:', options: ['De cumplimiento', 'Especiales', 'De preventivos', 'De ocio'], correctAnswer: 1 },
    { questionText: 'El aforo de las celdas, según la LOGP, debe ser preferentemente:', options: ['Individual', 'Doble', 'Cuádruple', 'Colectivo'], correctAnswer: 0 },
    { questionText: 'Los establecimientos de preventivos sirven para:', options: ['La retención y custodia de detenidos y presos', 'Cumplir penas largas', 'Tratamiento', 'Vacaciones'], correctAnswer: 0 },
    { questionText: 'Los Centros Penitenciarios pueden ser:', options: ['Preventivos, Cumplimiento y Especiales', 'Rojos y Azules', 'Grandes y Pequeños', 'Nacionales y Locales'], correctAnswer: 0 },
    { questionText: 'Los Departamentos de Régimen Cerrado se ubican en:', options: ['Centros de cumplimiento (o preventivos)', 'Hoteles', 'Comisarías', 'Juzgados'], correctAnswer: 0 },
    { questionText: 'Las Unidades de Madres son para:', options: ['Madres con hijos menores de 3 años', 'Embarazadas solo', 'Madres solas', 'Visitas'], correctAnswer: 0 },
    { questionText: 'Los Departamentos Mixtos:', options: ['Pueden existir excepcionalmente', 'Están prohibidos', 'Son la norma', 'No existen'], correctAnswer: 0 },
    { questionText: 'El patio es un elemento:', options: ['Obligatorio en cada departamento', 'Opcional', 'Prohibido', 'Decorativo'], correctAnswer: 0 },
    { questionText: 'La seguridad interior corresponde a:', options: ['Funcionarios de II.PP.', 'Guardia Civil', 'Policía Local', 'Ejército'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_32: Test = {
  id: 'topic-32',
  title: 'Tema 32: Ingreso y Libertad',
  questions: [
    { questionText: 'Tras el ingreso, el interno pasa al departamento de:', options: ['Aislamiento', 'Ingresos', 'Enfermería', 'Talleres'], correctAnswer: 1 },
    { questionText: 'El plazo máximo para que el médico reconozca al interno tras su ingreso es:', options: ['24 horas', '48 horas', '72 horas', '1 semana'], correctAnswer: 0 },
    { questionText: 'La libertad definitiva debe ser aprobada por:', options: ['El Director (conforme a la liquidación de condena aprobada por el Tribunal)', 'El Funcionario', 'El Abogado', 'El Médico'], correctAnswer: 0 },
    { questionText: 'El ingreso requiere mandamiento de:', options: ['Autoridad Judicial', 'Policía', 'Abogado', 'Alcalde'], correctAnswer: 0 },
    { questionText: 'En caso de presentación voluntaria:', options: ['Se admite y se comunica al Juez (plazo 24h para orden)', 'Se rechaza', 'Se detiene', 'Se ignora'], correctAnswer: 0 },
    { questionText: 'Al ingresar se abre un:', options: ['Expediente personal', 'Blog', 'Juicio', 'Negocio'], correctAnswer: 0 },
    { questionText: 'Los objetos de valor se:', options: ['Retiran y guardan a buen recaudo (o entregan a familia)', 'Tiran', 'Venden', 'Regalan'], correctAnswer: 0 },
    { questionText: 'El interno tiene derecho a realizar una llamada al ingresar:', options: ['Sí', 'No', 'Solo si paga', 'A la policía'], correctAnswer: 0 },
    { questionText: 'La libertad por cumplimiento se notifica al:', options: ['Tribunal Sentenciador', 'Rey', 'Vecino', 'Portero'], correctAnswer: 0 },
    { questionText: 'La excarcelación de un preventivo la ordena:', options: ['La Autoridad Judicial a cuya disposición esté', 'El Director', 'El Ministro', 'La Policía'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_33: Test = {
  id: 'topic-33',
  title: 'Tema 33: Clasificación',
  questions: [
    { questionText: 'La Junta de Tratamiento debe revisar la clasificación de los penados cada:', options: ['3 meses máx (grados 1º y 2º) o 6 meses', '6 meses máx', '1 año', 'Nunca'], correctAnswer: 1 },
    { questionText: 'El principio de flexibilidad (art 100.2 RP) necesita aprobación del:', options: ['Director', 'Juez de Vigilancia Penitenciaria', 'Ministro', 'Jefe de Servicios'], correctAnswer: 1 },
    { questionText: 'Los preventivos:', options: ['Se clasifican en primer grado', 'No se clasifican', 'Se clasifican en segundo grado', 'Se clasifican en tercer grado'], correctAnswer: 1 },
    { questionText: 'El tercer grado corresponde al régimen:', options: ['Abierto', 'Ordinario', 'Cerrado', 'Preventivo'], correctAnswer: 0 },
    { questionText: 'El primer grado corresponde al régimen:', options: ['Cerrado', 'Abierto', 'Ordinario', 'Libertad'], correctAnswer: 0 },
    { questionText: 'La clasificación inicial se hace en un plazo de:', options: ['2 meses desde recepción testimonio sentencia', '6 meses', '1 mes', '15 días'], correctAnswer: 0 },
    { questionText: 'El periodo de seguridad impide el tercer grado hasta cumplir la mitad de la condena en penas superiores a:', options: ['5 años', '3 años', '1 año', '10 años'], correctAnswer: 0 },
    { questionText: 'La regresión de grado la acuerda:', options: ['La Secretaría General (tras propuesta Junta)', 'El Director', 'El Juez', 'El Funcionario'], correctAnswer: 0 },
    { questionText: 'La Central Penitenciaria de Observación asesora sobre:', options: ['Clasificación y tratamiento', 'Seguridad', 'Obras', 'Comida'], correctAnswer: 0 },
    { questionText: '¿Es recurrible la clasificación?', options: ['Sí, ante el JVP', 'No', 'Solo ante el Director', 'Ante el Rey'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_34: Test = {
  id: 'topic-34',
  title: 'Tema 34: Régimen Ordinario',
  questions: [
    { questionText: 'El régimen ordinario se aplica a:', options: ['Penados de 2º grado, preventivos y penados sin clasificar', 'Solo 3º grado', 'Solo 1º grado', 'Menores'], correctAnswer: 0 },
    { questionText: 'Los cacheos con desnudo integral deben ser autorizados por:', options: ['El funcionario', 'El Jefe de Servicios (y comunicados al Director)', 'El Juez', 'El Médico'], correctAnswer: 1 },
    { questionText: 'Las puertas de las celdas durante el día permanecerán:', options: ['Siempre cerradas', 'Abiertas o cerradas según el horario y actividades', 'Entornadas', 'Bloqueadas'], correctAnswer: 1 },
    { questionText: 'El recuento ordinario se hace:', options: ['Al levantarse, acostarse y relevos', 'Solo de noche', 'Una vez', 'Nunca'], correctAnswer: 0 },
    { questionText: 'Las visitas de familiares en locutorios duran:', options: ['20 minutos', '40 minutos al menos', '1 hora', '2 horas'], correctAnswer: 0 },
    { questionText: 'Los vis a vis íntimos se conceden:', options: ['Al menos una vez al mes', 'Diariamente', 'Anualmente', 'Nunca'], correctAnswer: 0 },
    { questionText: 'Los internos pueden recibir paquetes:', options: ['Libremente', 'Con las limitaciones reglamentarias (número y peso)', 'Prohibido', 'Solo comida'], correctAnswer: 1 },
    { questionText: 'El horario es aprobado por:', options: ['Consejo de Dirección', 'Junta de Tratamiento', 'Director', 'Juez'], correctAnswer: 0 },
    { questionText: 'Los medios coercitivos se usan:', options: ['Como castigo', 'Para restablecer la normalidad, evitar fugas o daños', 'Por diversión', 'Siempre'], correctAnswer: 1 },
    { questionText: 'El uso de esposas es un medio:', options: ['Coercitivo', 'Disciplinario', 'De tratamiento', 'Educativo'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_35: Test = {
  id: 'topic-35',
  title: 'Tema 35: Régimen Abierto',
  questions: [
    { questionText: 'El objetivo del régimen abierto es:', options: ['El castigo', 'Potenciar las capacidades de inserción social en semilibertad', 'La vigilancia extrema', 'El trabajo forzado'], correctAnswer: 1 },
    { questionText: 'La modalidad de vida en régimen abierto que permite no pernoctar en el centro es:', options: ['Control telemático (art 86.4)', 'Tercer grado pleno', 'Restringido', 'Ninguna'], correctAnswer: 0 },
    { questionText: 'Las salidas de fin de semana son propias del régimen:', options: ['Cerrado', 'Ordinario', 'Abierto', 'Preventivo'], correctAnswer: 2 },
    { questionText: 'El régimen abierto se aplica a internos en:', options: ['Tercer grado', 'Segundo grado', 'Primer grado', 'Preventivos'], correctAnswer: 0 },
    { questionText: 'Un CIS es un:', options: ['Centro de Inserción Social', 'Centro de Internamiento Severo', 'Club', 'Cine'], correctAnswer: 0 },
    { questionText: 'El artículo 82 RP define:', options: ['El régimen abierto restringido', 'El ordinario', 'El cerrado', 'La libertad'], correctAnswer: 0 },
    { questionText: 'Las salidas de fin de semana comienzan:', options: ['El viernes tarde', 'El sábado', 'El domingo', 'El lunes'], correctAnswer: 0 },
    { questionText: 'Para acceder a tercer grado es necesario:', options: ['Haber satisfecho la responsabilidad civil (o compromiso/garantías)', 'Ser alto', 'Ser rico', 'Saber inglés'], correctAnswer: 0 },
    { questionText: 'El régimen abierto busca:', options: ['La autodisciplina y confianza', 'El miedo', 'La fuga', 'El dolor'], correctAnswer: 0 },
    { questionText: '¿Pueden ir al régimen abierto los preventivos?', options: ['No', 'Sí', 'A veces', 'Si pagan'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_36: Test = {
  id: 'topic-36',
  title: 'Tema 36: Régimen Cerrado',
  questions: [
    { questionText: 'Se aplica régimen cerrado por:', options: ['Peligrosidad extrema o inadaptación manifiesta', 'Delitos leves', 'No tener familia', 'Solicitud propia'], correctAnswer: 0 },
    { questionText: 'La revisión de la clasificación en primer grado se hace cada:', options: ['6 meses', '3 meses', '1 mes', '1 año'], correctAnswer: 1 },
    { questionText: 'Las actividades en régimen cerrado son:', options: ['Inexistentes', 'Prioritariamente culturales, deportivas y ocupacionales, en grupos reducidos', 'Solo laborales', 'Al aire libre siempre'], correctAnswer: 1 },
    { questionText: 'Las horas de salida al patio en régimen cerrado son:', options: ['Mínimo 4 horas (o 3)', 'Mínimo 8 horas', 'Mínimo 1 hora', 'Libres'], correctAnswer: 0 },
    { questionText: 'El número de internos en actividades conjuntas en régimen cerrado se limita a:', options: ['5', '10', '20', '50'], correctAnswer: 0 },
    { questionText: 'El régimen cerrado se aplica en:', options: ['Departamentos especiales o módulos cerrados', 'Celdas normales', 'En la calle', 'En hospitales'], correctAnswer: 0 },
    { questionText: 'El artículo 10 LOGP regula:', options: ['Los departamentos de régimen cerrado', 'El régimen abierto', 'La libertad', 'El trabajo'], correctAnswer: 0 },
    { questionText: 'La clasificación en primer grado requiere:', options: ['Resolución motivada', 'Sorteo', 'Petición', 'Nada'], correctAnswer: 0 },
    { questionText: 'Los cacheos en régimen cerrado son:', options: ['Más frecuentes (diarios celdas)', 'Menos frecuentes', 'Iguales', 'No se hacen'], correctAnswer: 0 },
    { questionText: '¿Es recurrible la aplicación del régimen cerrado?', options: ['Sí, al JVP', 'No', 'Solo al Director', 'A la prensa'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_37: Test = {
  id: 'topic-37',
  title: 'Tema 37: Permisos',
  questions: [
    { questionText: 'La duración máxima de los permisos ordinarios en 3º grado es de:', options: ['36 días', '48 días', '18 días', '7 días'], correctAnswer: 1 },
    { questionText: 'Los permisos de hasta 2 días (en 2º grado) los concede:', options: ['El Director', 'El Juez de Vigilancia', 'El Ministerio', 'La Junta'], correctAnswer: 1 },
    { questionText: '¿Se puede conceder un permiso a un preventivo?', options: ['No', 'Sí, con autorización de la Autoridad Judicial a cuya disposición esté', 'Sí, lo da el Director', 'Sí, la Policía'], correctAnswer: 1 },
    { questionText: 'Los permisos ordinarios en 2º grado son de máximo:', options: ['36 días al año', '48 días', '12 días', '6 días'], correctAnswer: 0 },
    { questionText: 'Para disfrutar permiso ordinario se requiere haber cumplido:', options: ['1/4 de la condena', '1/2 condena', '3/4 condena', '1/3 condena'], correctAnswer: 0 },
    { questionText: 'Los permisos extraordinarios se dan por:', options: ['Motivos muy graves (muerte familiar, nacimiento...)', 'Vacaciones', 'Buen comportamiento', 'Estudios'], correctAnswer: 0 },
    { questionText: 'La duración de los permisos extraordinarios es:', options: ['El tiempo necesario (hasta límites)', '7 días fijos', '1 mes', '3 días'], correctAnswer: 0 },
    { questionText: '¿Quién autoriza los permisos ordinarios de más de 2 días en 2º grado?', options: ['El JVP', 'El Director', 'La Junta', 'El Centro Directivo'], correctAnswer: 0 },
    { questionText: 'Durante el permiso, el interno:', options: ['Sigue cumpliendo condena', 'Interrumpe la condena', 'Está libre', 'No cuenta'], correctAnswer: 0 },
    { questionText: 'El mal comportamiento durante un permiso puede motivar:', options: ['Su suspensión o revocación', 'Un premio', 'Nada', 'El traslado'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_38: Test = {
  id: 'topic-38',
  title: 'Tema 38: Libertad Condicional',
  questions: [
    { questionText: 'La libertad condicional se considera:', options: ['Una gracia', 'El último grado de cumplimiento de la condena (suspensión)', 'Una amnistía', 'Un indulto'], correctAnswer: 1 },
    { questionText: 'Para la libertad condicional ordinaria se requiere haber cumplido:', options: ['1/2 condena', '2/3 condena', '3/4 partes de la condena', '1/4 condena'], correctAnswer: 2 },
    { questionText: '¿Quién concede la libertad condicional?', options: ['El Juez de Vigilancia Penitenciaria', 'El Director', 'La Junta de Tratamiento', 'El Rey'], correctAnswer: 0 },
    { questionText: 'La libertad condicional se puede adelantar a los 2/3 de condena por:', options: ['Desarrollo continuo de actividades laborales, culturales o deportivas y pronóstico favorable', 'Edad', 'Enfermedad', 'Azar'], correctAnswer: 0 },
    { questionText: 'La libertad condicional para septuagenarios o enfermos muy graves:', options: ['No requiere cumplir 3/4', 'Requiere cumplir 3/4', 'No existe', 'Requiere pago'], correctAnswer: 0 },
    { questionText: 'La revocación de la libertad condicional conlleva:', options: ['Reingreso en prisión', 'Multa', 'Nada', 'Amonestación'], correctAnswer: 0 },
    { questionText: 'El periodo de libertad condicional dura:', options: ['Lo que falte de condena', '1 año fijo', '5 años', 'Toda la vida'], correctAnswer: 0 },
    { questionText: 'Es requisito estar clasificado en:', options: ['Tercer grado', 'Segundo grado', 'Primer grado', 'Ninguno'], correctAnswer: 0 },
    { questionText: 'La buena conducta es requisito para:', options: ['La libertad condicional', 'Ingresar', 'Comer', 'Dormir'], correctAnswer: 0 },
    { questionText: 'El JVP puede imponer reglas de conducta:', options: ['Sí', 'No', 'Solo si quiere el interno', 'Nunca'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_39: Test = {
  id: 'topic-39',
  title: 'Tema 39: Asistencia Social',
  questions: [
    { questionText: 'La acción social penitenciaria se dirige a:', options: ['La reincorporación social del interno y soporte familiar', 'Vigilar', 'Castigar', 'Juzgar'], correctAnswer: 0 },
    { questionText: 'El Trabajo Social es parte del:', options: ['Equipo Técnico', 'Servicio de vigilancia', 'Servicio de limpieza', 'Sindicato'], correctAnswer: 0 },
    { questionText: '¿Existen ayudas para el transporte de familiares para visitas?', options: ['No', 'Sí, pueden existir ayudas de la Comisión de Asistencia Social u ONGs', 'Están prohibidas', 'Solo en Navidad'], correctAnswer: 1 },
    { questionText: 'La Comisión de Asistencia Social Penitenciaria es un órgano:', options: ['Colegiado', 'Unipersonal', 'Judicial', 'Privado'], correctAnswer: 0 },
    { questionText: 'El subsidio de excarcelación se gestiona ante:', options: ['El SEPE', 'La Prisión', 'El Juez', 'El Ayuntamiento'], correctAnswer: 0 },
    { questionText: 'La asistencia social atiende a:', options: ['Internos, liberados condicionales y familiares', 'Solo funcionarios', 'Solo víctimas', 'Turistas'], correctAnswer: 0 },
    { questionText: 'Las ONGs pueden entrar en prisión:', options: ['Sí, para programas autorizados', 'No, nunca', 'Libremente', 'Solo a rezar'], correctAnswer: 0 },
    { questionText: 'El programa de preparación para la libertad es:', options: ['Prioritario', 'Irrelevante', 'Prohibido', 'Opcional'], correctAnswer: 0 },
    { questionText: 'Los problemas de documentación (DNI) los gestiona:', options: ['Trabajo Social / Oficinas', 'El médico', 'El interno solo', 'Nadie'], correctAnswer: 0 },
    { questionText: 'La acogida a la salida de prisión puede hacerse en:', options: ['Pisos de acogida', 'La calle', 'La comisaría', 'El juzgado'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_40: Test = {
  id: 'topic-40',
  title: 'Tema 40: Trabajo Penitenciario',
  questions: [
    { questionText: 'El trabajo penitenciario es un derecho y un deber, pero NO puede ser:', options: ['Remunerado', 'Productivo', 'Aflictivo (castigo)', 'Formativo'], correctAnswer: 2 },
    { questionText: '¿Tienen derecho los internos trabajadores a vacaciones?', options: ['No', 'Sí, 30 días naturales', 'Solo si son buenos', 'Depende del Director'], correctAnswer: 1 },
    { questionText: 'La organización del trabajo productivo corresponde a:', options: ['La TPFE (Trabajo Penitenciario y Formación para el Empleo)', 'La Policía', 'El Juez', 'Los internos'], correctAnswer: 0 },
    { questionText: 'El trabajo productivo se retribuye:', options: ['Conforme al rendimiento y horario (referencia SMI)', 'Con tabaco', 'No se paga', 'Con permisos'], correctAnswer: 0 },
    { questionText: 'Los internos trabajadores cotizan a:', options: ['La Seguridad Social', 'Nadie', 'Un fondo privado', 'Al Director'], correctAnswer: 0 },
    { questionText: 'El trabajo es:', options: ['Voluntario en su acceso', 'Obligatorio forzoso', 'Esclavitud', 'Juego'], correctAnswer: 0 },
    { questionText: 'La relación laboral especial penitenciaria se regula por:', options: ['RD 782/2001', 'Estatuto de los Trabajadores general', 'Código Penal', 'Ley de Vagos'], correctAnswer: 0 },
    { questionText: 'El despido disciplinario en prisión:', options: ['Es posible', 'No existe', 'Es imposible', 'Es premio'], correctAnswer: 0 },
    { questionText: 'Los trabajos ocupacionales (no productivos):', options: ['No son remunerados (pueden tener estímulos)', 'Son pagados como salario', 'Cotizan', 'Son delito'], correctAnswer: 0 },
    { questionText: 'La formación profesional es:', options: ['Fundamental para la reinserción', 'Pérdida de tiempo', 'Castigo', 'Ocio'], correctAnswer: 0 }
  ]
};
