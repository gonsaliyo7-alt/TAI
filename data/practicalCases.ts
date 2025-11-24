
import type { Test, Question } from '../types';

// ==========================================
// SUPUESTO 1: DERECHO PENAL (CÁLCULO DE PENAS Y ACUMULACIÓN)
// ==========================================
const SCENARIO_1 = 'El interno J.M., nacido el 15/02/1990, ingresa en prisión para cumplir tres condenas impuestas en distintos procedimientos, por hechos cometidos en el año 2022. \n\n1. Sentencia A: 15 años de prisión por homicidio. \n2. Sentencia B: 10 años de prisión por robo con violencia. \n3. Sentencia C: 2 años por lesiones. \n\nEl interno solicita la acumulación jurídica de penas (refundición) conforme al artículo 76 del Código Penal.';

const QUESTIONS_1: Question[] = [
  { questionText: 'Si se aplica la acumulación de penas del art. 76 CP (triple de la mayor), ¿cuál sería el límite máximo de cumplimiento efectivo en este caso?', options: ['27 años (suma aritmética)', '20 años (límite general)', '30 años (triple de la mayor 15x3=45, pero topado a 20 salvo excepciones)', '25 años'], correctAnswer: 1 },
  { questionText: '¿Quién es el órgano competente para aprobar la liquidación de condena y la acumulación de penas?', options: ['El Director del Centro', 'El Tribunal Sentenciador de la última sentencia', 'El Tribunal que dictó la sentencia más grave (o el último si son iguales)', 'El Juez de Vigilancia Penitenciaria'], correctAnswer: 2 },
  { questionText: 'Para calcular la fecha de libertad condicional (a las 3/4 partes), ¿sobre qué condena se calcula si hay acumulación?', options: ['Sobre la suma total (27 años)', 'Sobre el límite máximo de cumplimiento fijado en la acumulación (20 años)', 'Sobre cada una por separado', 'Sobre la primera sentencia'], correctAnswer: 1 },
  { questionText: 'El Código Penal establece que, excepcionalmente, el límite máximo de cumplimiento será de 25 años cuando:', options: ['Haya dos o más delitos y uno de ellos esté castigado con pena de prisión superior a 20 años', 'El sujeto sea reincidente', 'Haya delitos de terrorismo', 'Lo pida el Fiscal'], correctAnswer: 0 },
  { questionText: '¿En qué momento se considera extinguida la responsabilidad penal por cumplimiento?', options: ['El día que sale de permiso', 'El día que termina la libertad condicional satisfactoriamente o el día de licenciamiento definitivo', 'Al cumplir la mitad', 'Al obtener el tercer grado'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 2: DERECHO PENITENCIARIO (CLASIFICACIÓN Y PERMISOS)
// ==========================================
const SCENARIO_2 = 'La interna R.G. cumple una condena de 6 años. Ha cumplido 1/4 parte de la condena y está clasificada en segundo grado de tratamiento. La Junta de Tratamiento, valorando su buena conducta y apoyo familiar, estudia su evolución. Sin embargo, R.G. solicita salir a trabajar diariamente al exterior manteniendo la pernocta en prisión, pese a no estar en tercer grado.';

const QUESTIONS_2: Question[] = [
  { questionText: '¿Es posible que un interno en segundo grado salga a trabajar al exterior diariamente?', options: ['No, es exclusivo del tercer grado', 'Sí, mediante la aplicación del artículo 100.2 del Reglamento Penitenciario (Principio de Flexibilidad)', 'Sí, si lo autoriza el Director', 'Solo si es fin de semana'], correctAnswer: 1 },
  { questionText: 'Para disfrutar de permisos ordinarios de salida en segundo grado, ¿cuál es el límite anual?', options: ['36 días', '48 días', '12 días', '7 días'], correctAnswer: 0 },
  { questionText: 'Si la Junta de Tratamiento propone por unanimidad la progresión a tercer grado, ¿la resolución es ejecutiva inmediatamente?', options: ['Sí, siempre', 'No, si el Ministerio Fiscal recurre la decisión del órgano competente en delitos graves, se suspende hasta que resuelva el JVP (o apelación)', 'Solo si el Director quiere', 'Depende de la condena'], correctAnswer: 1 },
  { questionText: 'El "periodo de seguridad" que impide el tercer grado hasta el cumplimiento de la mitad de la pena se aplica obligatoriamente en condenas:', options: ['Superiores a 3 años', 'Superiores a 5 años (cuando así lo imponga la sentencia)', 'Superiores a 10 años', 'En todas'], correctAnswer: 1 },
  { questionText: '¿Quién tiene la competencia final para conceder un permiso ordinario de más de 2 días a un interno en segundo grado?', options: ['El Director del Centro', 'La Secretaría General de II.PP.', 'El Juez de Vigilancia Penitenciaria', 'La Junta de Tratamiento'], correctAnswer: 2 }
];

// ==========================================
// SUPUESTO 3: GESTIÓN ADMINISTRATIVA (PECULIO Y PERTENENCIAS)
// ==========================================
const SCENARIO_3 = 'Ingresa el interno L.P. con 1.500 euros en efectivo. Tiene una responsabilidad civil pendiente de pago de 10.000 euros derivada de la sentencia. Durante su estancia, solicita comprar un televisor para su celda y enviar 200 euros a su madre.';

const QUESTIONS_3: Question[] = [
  { questionText: 'El dinero en efectivo que trae al ingresar:', options: ['Se le deja en el bolsillo', 'Se le retira, se le da un recibo y se ingresa en su cuenta de peculio', 'Se confisca por el Estado', 'Se reparte entre los funcionarios'], correctAnswer: 1 },
  { questionText: 'Respecto a la responsabilidad civil pendiente, ¿puede ser embargado su saldo de peculio?', options: ['No, el peculio es inembargable', 'Sí, pero respetando siempre el Salario Mínimo Interprofesional (SMI) y escalas de inembargabilidad aplicables', 'Sí, en su totalidad hasta saldar la deuda', 'Solo si él quiere'], correctAnswer: 1 },
  { questionText: 'Para la compra del televisor:', options: ['Puede comprar cualquiera que le traiga la familia', 'Debe solicitarlo y adquirirlo a través del economato o demandadero del centro (previa autorización)', 'Está prohibido tener TV', 'Solo si es de alquiler'], correctAnswer: 1 },
  { questionText: '¿Existe un límite de saldo de libre disposición semanal en las tarjetas de peculio?', options: ['No, puede gastar lo que tenga', 'Sí, lo fija el Consejo de Dirección para garantizar el orden y evitar el tráfico ilícito', 'Es de 1000 euros', 'Es de 10 euros'], correctAnswer: 1 },
  { questionText: 'Si L.P. es trasladado a otro centro, ¿qué ocurre con su peculio?', options: ['Se le entrega en efectivo para el viaje', 'Se realiza una transferencia ("conducción de caudales") a la cuenta del nuevo centro', 'Se pierde', 'Se lo queda el primer centro'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 4: DERECHO PENITENCIARIO (RÉGIMEN DISCIPLINARIO)
// ==========================================
const SCENARIO_4 = 'El interno H.H. agrede a otro interno en el patio causándole lesiones leves. El Jefe de Servicios ordena su traslado inmediato a una celda de aislamiento como medida cautelar. Se le incoa expediente disciplinario por falta muy grave.';

const QUESTIONS_4: Question[] = [
  { questionText: 'El aislamiento provisional como medida cautelar (antes de la sanción):', options: ['No puede durar más de 14 días', 'Durará el tiempo estrictamente necesario hasta que cedan las razones de seguridad o se resuelva el expediente', 'Es indefinido', 'Lo decide el médico'], correctAnswer: 1 },
  { questionText: 'La agresión a otro interno causando lesiones se considera falta:', options: ['Grave', 'Muy grave (art. 108 RP)', 'Leve', 'Delito solamente'], correctAnswer: 1 },
  { questionText: '¿Quién debe aprobar la sanción de aislamiento en celda superior a 14 días?', options: ['El Director', 'La Comisión Disciplinaria', 'El Juez de Vigilancia Penitenciaria', 'El Consejo de Dirección'], correctAnswer: 2 },
  { questionText: 'Durante el cumplimiento de la sanción de aislamiento, el interno:', options: ['No puede salir al patio', 'Tiene derecho a disfrutar de al menos 2 horas de salida al patio', 'Solo sale 10 minutos', 'Está atado'], correctAnswer: 1 },
  { questionText: 'Si el interno recurre la sanción ante el JVP, ¿se suspende la ejecución?', options: ['Sí, como regla general', 'No, la interposición del recurso no suspende la ejecución (salvo orden expresa del Juez)', 'Depende de la falta', 'Siempre se suspende'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 5: CONDUCTA HUMANA (PSICOLOGÍA Y DINÁMICAS)
// ==========================================
const SCENARIO_5 = 'En un Módulo de Respeto, se observa que el interno A. lidera un grupo que coacciona sutilmente a los nuevos ingresos para que les entreguen tabaco a cambio de "protección". A. muestra encanto superficial, ausencia de empatía y manipulación. El ambiente del módulo se está deteriorando.';

const QUESTIONS_5: Question[] = [
  { questionText: 'Los rasgos de A. (encanto superficial, falta de empatía, manipulación) son característicos de:', options: ['Esquizofrenia', 'Psicopatía o Trastorno Antisocial de la Personalidad', 'Depresión', 'Ansiedad'], correctAnswer: 1 },
  { questionText: 'El proceso por el cual los nuevos ingresos asumen los valores y normas de la subcultura carcelaria (el código del recluso) se denomina:', options: ['Reinserción', 'Prisionización (Clemmer)', 'Institucionalización', 'Adaptación'], correctAnswer: 1 },
  { questionText: 'En los Módulos de Respeto, la organización se basa en:', options: ['La jerarquía pura', 'Grupos de autogestión y comisiones de internos', 'La vigilancia armada', 'El aislamiento'], correctAnswer: 1 },
  { questionText: 'El "Efecto Halo" en la percepción social consistiría en:', options: ['Juzgar a A. positivamente en todo solo porque tiene "encanto superficial"', 'Odiar a todos', 'Tener miedo', 'Ver luces'], correctAnswer: 0 },
  { questionText: '¿Qué técnica de modificación de conducta sería adecuada para reforzar comportamientos positivos en el módulo?', options: ['El castigo físico', 'La Economía de Fichas (refuerzo positivo)', 'La indiferencia', 'El aislamiento'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 6: DERECHO PENAL (DELITOS FUNCIONARIOS - COHECHO)
// ==========================================
const SCENARIO_6 = 'Un funcionario de prisiones acepta 500 euros de un familiar de un interno para introducir un teléfono móvil (objeto prohibido) en el centro. Aunque finalmente no introduce el móvil, se queda con el dinero.';

const QUESTIONS_6: Question[] = [
  { questionText: 'La conducta del funcionario al aceptar dinero por realizar un acto contrario a sus deberes (cohecho) se tipifica en el Código Penal como:', options: ['Malversación', 'Cohecho', 'Prevaricación', 'Estafa'], correctAnswer: 1 },
  { questionText: 'Si el acto que se solicita (introducir un móvil) no fuera delito en sí mismo, pero sí injusto (prohibido administrativamente), estaríamos ante:', options: ['Cohecho propio', 'Cohecho impropio', 'Tráfico de influencias', 'Falta administrativa'], correctAnswer: 0 },
  { questionText: '¿Qué responsabilidad penal tendría el familiar que paga (el corruptor)?', options: ['Ninguna, es víctima', 'La misma pena que al funcionario (en prisión e inhabilitación según el caso)', 'Solo multa', 'Solo falta'], correctAnswer: 1 },
  { questionText: 'La pena principal característica para los delitos de funcionarios (además de prisión o multa) es:', options: ['Trabajos comunitarios', 'Inhabilitación especial o absoluta', 'Privación de carnet', 'Destierro'], correctAnswer: 1 },
  { questionText: 'El funcionario comete el delito desde el momento en que:', options: ['Introduce el móvil', 'Solicita o acepta la dádiva', 'Gasta el dinero', 'Se lo cuenta a alguien'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 7: DERECHO PENITENCIARIO (COMUNICACIONES Y VISITAS)
// ==========================================
const SCENARIO_7 = 'El interno F.L., clasificado en primer grado por su pertenencia a banda armada, solicita una comunicación "vis a vis" con su pareja. Paralelamente, el Director del Centro ordena la intervención de sus comunicaciones telefónicas con su familia y escritas con su abogado defensor, alegando motivos de seguridad generales.';

const QUESTIONS_7: Question[] = [
  { questionText: 'Las comunicaciones "vis a vis" (íntimas) para internos en primer grado:', options: ['Están prohibidas totalmente', 'Se pueden conceder, pero están sujetas a las limitaciones de seguridad del régimen cerrado (normalmente restringidas)', 'Son un derecho absoluto', 'Son diarias'], correctAnswer: 1 },
  { questionText: '¿Puede el Director ordenar la intervención de las comunicaciones escritas con el Abogado Defensor?', options: ['Sí, por seguridad', 'No, solo puede acordarla la Autoridad Judicial (y en supuestos de terrorismo)', 'Sí, informando al Juez', 'Solo si el abogado consiente'], correctAnswer: 1 },
  { questionText: 'La intervención de comunicaciones telefónicas con la familia (no abogado) puede ser acordada por:', options: ['El Director del establecimiento, dando cuenta a la Autoridad Judicial', 'Solo el Juez', 'El Jefe de Servicios', 'El Ministro'], correctAnswer: 0 },
  { questionText: 'Las comunicaciones orales en régimen cerrado se realizan, por norma general:', options: ['En locutorios con mampara de cristal', 'En salas abiertas', 'En el patio', 'En la celda'], correctAnswer: 0 },
  { questionText: 'Si se interviene una carta y no hay delito, ¿se entrega al interno?', options: ['No, se destruye', 'Sí, se entrega tras su control', 'Se devuelve al remitente', 'Se archiva'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 8: DERECHO PENAL (DELITOS SEXUALES Y AGRESIONES)
// ==========================================
const SCENARIO_8 = 'A. agrede a B. en un callejón, obligándola mediante fuerza física a realizar actos de carácter sexual. La defensa alega que no hubo "violencia extrema" y que debería ser abuso sexual, no agresión. Los hechos ocurren bajo la vigencia de la LO 10/2022 ("Solo sí es sí").';

const QUESTIONS_8: Question[] = [
  { questionText: 'Tras la reforma de la LO 10/2022, la distinción entre abuso sexual y agresión sexual:', options: ['Se mantiene', 'Desaparece, calificándose todo atentado contra la libertad sexual sin consentimiento como agresión sexual', 'Depende de la edad', 'Depende del horario'], correctAnswer: 1 },
  { questionText: 'El elemento clave para determinar la existencia del delito es:', options: ['La resistencia de la víctima', 'La ausencia de consentimiento expreso ("solo sí es sí")', 'El uso de armas', 'Las lesiones físicas'], correctAnswer: 1 },
  { questionText: 'Si la agresión sexual consiste en acceso carnal (penetración), se denomina:', options: ['Violación (tipo agravado de agresión sexual)', 'Abuso con penetración', 'Acoso', 'Estupro'], correctAnswer: 0 },
  { questionText: 'El consentimiento debe manifestarse:', options: ['Por silencio', 'Libremente mediante actos que, en atención a las circunstancias, expresen de manera clara la voluntad', 'Por escrito', 'A posteriori'], correctAnswer: 1 },
  { questionText: 'Si la víctima estuviera privada de sentido (ej. drogas), ¿hay delito?', options: ['No, porque no se resiste', 'Sí, agresión sexual (no hay consentimiento válido)', 'Solo abuso', 'Es culpa de ella'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 9: GESTIÓN ADMINISTRATIVA (INGRESOS Y DERECHOS)
// ==========================================
const SCENARIO_9 = 'La Guardia Civil se presenta en el Centro Penitenciario un viernes a las 20:00 horas con una persona detenida. No aportan mandamiento judicial de prisión, sino únicamente las diligencias policiales de detención. El Funcionario de Ingresos duda si admitirlo.';

const QUESTIONS_9: Question[] = [
  { questionText: '¿Puede el Director admitir a un detenido sin mandamiento judicial?', options: ['Nunca', 'Sí, excepcionalmente, por plazo máximo de 72 horas, si lo presenta la Policía/GC en horas en que el Juzgado no opera (con orden de detención)', 'Sí, hasta el juicio', 'Solo si es fin de semana'], correctAnswer: 1 },
  { questionText: 'Tras la admisión, ¿qué plazo tiene el Director para solicitar el mandamiento judicial de prisión o libertad?', options: ['24 horas (o primera hora hábil)', '72 horas', '1 semana', 'No hace falta'], correctAnswer: 0 },
  { questionText: 'En el momento del ingreso, al interno se le debe informar de:', options: ['Sus derechos y deberes, situación procesal y normas de régimen interior (por escrito)', 'El menú del día', 'Los nombres de los funcionarios', 'La política del país'], correctAnswer: 0 },
  { questionText: 'Si el interno solicita el "Habeas Corpus" desde prisión al considerarse detenido ilegalmente:', options: ['El Director debe tramitarlo inmediatamente ante el Juez de Instrucción', 'Se ignora porque ya está en prisión', 'Lo decide el Director', 'Solo lo puede pedir el abogado'], correctAnswer: 0 },
  { questionText: '¿Es obligatorio el reconocimiento médico al ingreso?', options: ['No, es voluntario', 'Sí, dentro de las primeras 24 horas', 'Sí, a la semana', 'Solo si tiene heridas'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 10: CONDUCTA HUMANA (LIDERAZGO Y GRUPOS)
// ==========================================
const SCENARIO_10 = 'En el módulo 4 existe un grupo cohesionado de internos liderado por X. X toma todas las decisiones, no admite opiniones y controla férreamente a los miembros (reparto de tareas, castigos). Otro grupo, liderado por Y, funciona de forma más asamblearia y participativa.';

const QUESTIONS_10: Question[] = [
  { questionText: 'El estilo de liderazgo de X se clasifica como:', options: ['Democrático', 'Autoritario', 'Laissez-faire (dejar hacer)', 'Paternalista'], correctAnswer: 1 },
  { questionText: 'El estilo de liderazgo de Y se aproxima más a:', options: ['Autoritario', 'Democrático', 'Caótico', 'Dictatorial'], correctAnswer: 1 },
  { questionText: 'En situaciones de crisis o emergencia (ej. un motín), ¿qué liderazgo suele ser más "eficaz" a corto plazo para el control del grupo?', options: ['El democrático (votar qué hacer)', 'El autoritario (órdenes claras y directas)', 'El laissez-faire', 'Ninguno'], correctAnswer: 1 },
  { questionText: 'La cohesión del grupo de X probablemente se basa en:', options: ['El afecto mutuo', 'El miedo y la sumisión al líder', 'La libertad', 'El caos'], correctAnswer: 1 },
  { questionText: 'Para intervenir y reducir la conflictividad de un grupo negativo, la Administración puede utilizar:', options: ['La dispersión de sus miembros (traslados/cambios de módulo)', 'Darles más poder', 'Ignorarlos', 'Castigar a todos'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 11: DERECHO PENITENCIARIO (ÓRGANOS COLEGIADOS)
// ==========================================
const SCENARIO_11 = 'Se reúne la Comisión Disciplinaria del Centro para resolver varios expedientes. Asisten el Director, el Subdirector de Seguridad, el Subdirector de Tratamiento, el Jurista, el Jefe de Servicios, un Funcionario y un Asistente Social. Hay un empate en una votación sobre una sanción.';

const QUESTIONS_11: Question[] = [
  { questionText: '¿Quién preside la Comisión Disciplinaria?', options: ['El Jurista', 'El Director', 'El Jefe de Servicios', 'El Juez'], correctAnswer: 1 },
  { questionText: 'En caso de empate en la votación, ¿cómo se resuelve?', options: ['Se anula la sanción', 'Decide el voto de calidad del Presidente (Director)', 'Se vota mañana', 'Decide el Jurista'], correctAnswer: 1 },
  { questionText: 'La composición descrita en el supuesto (Director + Subdirectores + Jurista + Jefe S. + 1 Funcionario + 1 A. Social) es:', options: ['Correcta según el Reglamento', 'Incorrecta, sobra el Asistente Social', 'Incorrecta, falta el médico', 'Incorrecta, sobran subdirectores'], correctAnswer: 0 },
  { questionText: '¿Quién actúa como Secretario de la Comisión Disciplinaria?', options: ['El Jurista', 'Un funcionario administrativo designado (o el que haga las funciones de Secretario del centro)', 'El Jefe de Servicios', 'El Director'], correctAnswer: 1 },
  { questionText: 'Las sanciones impuestas por la Comisión son ejecutivas:', options: ['Inmediatamente (salvo recurso que suspenda o falta muy grave que requiera aprobación)', 'Nunca', 'Solo si el interno acepta', 'Al año'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 12: DERECHO PENAL (SUSPENSIÓN DE LA PENA)
// ==========================================
const SCENARIO_12 = 'K. es condenado a 18 meses de prisión por un delito de robo. Es su primer delito (no tiene antecedentes). Sin embargo, K. tiene un problema grave de adicción a las drogas que motivó el delito. Solicita la suspensión de la pena.';

const QUESTIONS_12: Question[] = [
  { questionText: 'Para la suspensión ordinaria (art 80.1 CP), los requisitos básicos son:', options: ['Pena no superior a 2 años y carecer de antecedentes penales computables', 'Pena no superior a 5 años', 'Tener trabajo', 'Pagar fianza'], correctAnswer: 0 },
  { questionText: 'Al ser drogodependiente, ¿podría acceder a la suspensión extraordinaria del art 80.5 CP aunque la pena fuera mayor de 2 años?', options: ['No, nunca', 'Sí, hasta penas de 5 años, si certifica deshabituación o tratamiento', 'Sí, sin límite', 'Solo si es joven'], correctAnswer: 1 },
  { questionText: 'La suspensión de la pena está condicionada a:', options: ['Que no vuelva a delinquir en el plazo fijado', 'Que viva con sus padres', 'Que tenga hijos', 'Que vote'], correctAnswer: 0 },
  { questionText: 'Si durante la suspensión K. comete un nuevo delito o abandona el tratamiento de deshabituación:', options: ['Se le perdona', 'El Juez puede revocar la suspensión y ordenar el ingreso en prisión', 'Paga una multa', 'No pasa nada'], correctAnswer: 1 },
  { questionText: 'El plazo de suspensión para una pena de 18 meses (pena leve/menos grave) será de:', options: ['2 a 5 años', '3 meses', '10 años', 'Indefinido'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 13: GESTIÓN ADMINISTRATIVA (OFICINA Y ARCHIVO)
// ==========================================
const SCENARIO_13 = 'El interno M. quiere saber qué documentos hay en su expediente personal. Acude a la oficina de Régimen. Además, quiere solicitar un traslado a otra prisión y presenta una instancia.';

const QUESTIONS_13: Question[] = [
  { questionText: 'El expediente personal del interno (Protocolo) se custodia en:', options: ['La Oficina de Gestión (o Régimen)', 'La celda del interno', 'El despacho del Director', 'El Ministerio'], correctAnswer: 0 },
  { questionText: '¿Tiene derecho el interno a acceder a los documentos de su expediente?', options: ['No, es secreto', 'Sí, salvo aquellos que afecten a la intimidad de terceros o seguridad del centro', 'Sí, a todo sin límite', 'Solo al salir'], correctAnswer: 1 },
  { questionText: 'El "silencio administrativo" ante las peticiones de los internos se entiende generalmente como:', options: ['Positivo (estimatorio)', 'Negativo (desestimatorio)', 'No existe', 'Neutro'], correctAnswer: 1 },
  { questionText: 'El Libro de Ingresos y Salidas debe contener:', options: ['Solo el nombre', 'Datos de filiación, hora/día de ingreso/salida y motivo', 'Menú preferido', 'Firma del Rey'], correctAnswer: 1 },
  { questionText: 'Si el interno presenta una instancia dirigida al Juez de Vigilancia, la Oficina debe:', options: ['Leerla y decidir', 'Cursarla (enviarla) al destinatario registrando la salida', 'Tirarla', 'Guardarla'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 14: DERECHO PENITENCIARIO (TRASLADOS Y CONDUCCIONES)
// ==========================================
const SCENARIO_14 = 'Se ordena el traslado del interno J. desde el CP de Madrid al CP de Sevilla para asistir a un juicio oral. El traslado se realizará en furgón celular.';

const QUESTIONS_14: Question[] = [
  { questionText: '¿Quién tiene la competencia exclusiva para ordenar el traslado de un centro a otro (salvo urgencia hospitalaria)?', options: ['El Director de la prisión de origen', 'El Centro Directivo (Secretaría General de II.PP. o equivalente autonómico)', 'El Juez', 'La Policía'], correctAnswer: 1 },
  { questionText: 'La ejecución material del traslado (conducción) corresponde a:', options: ['Funcionarios de Prisiones', 'Fuerzas y Cuerpos de Seguridad (Guardia Civil/Policía)', 'Empresa de autobuses', 'Ejército'], correctAnswer: 1 },
  { questionText: 'Si el traslado requiere pernoctar en el camino, se hará en:', options: ['Un hotel', 'Establecimientos o departamentos de transeúntes de otras prisiones', 'La furgoneta', 'Comisaría'], correctAnswer: 1 },
  { questionText: 'El interno solicita quedarse en Madrid porque ahí vive su familia ("arraigo"). La Administración:', options: ['Debe respetar el arraigo siempre', 'Debe procurar evitar el desarraigo, pero no es un derecho absoluto si hay otras causas (judiciales, clasificación)', 'Le da igual', 'Lo manda a Canarias'], correctAnswer: 1 },
  { questionText: 'Las pertenencias del interno durante el traslado:', options: ['Se envían por correo', 'Viajan con él (limitadas) o se expiden como equipaje ("conducción de objetos")', 'Se tiran', 'Se venden'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 15: CONDUCTA HUMANA (ESTRÉS Y BURNOUT)
// ==========================================
const SCENARIO_15 = 'El funcionario Z. lleva 20 años trabajando en el módulo de aislamiento. Últimamente muestra irritabilidad constante, trata a los internos con cinismo y deshumanización ("son números"), y se siente emocionalmente agotado y fracasado profesionalmente.';

const QUESTIONS_15: Question[] = [
  { questionText: 'El cuadro que presenta el funcionario Z. es compatible con:', options: ['Síndrome de Estocolmo', 'Síndrome de Burnout (Quemado)', 'Depresión mayor', 'Euforia'], correctAnswer: 1 },
  { questionText: 'Las tres dimensiones clásicas del Burnout (Maslach) son:', options: ['Cansancio, hambre y sueño', 'Agotamiento emocional, Despersonalización y Baja realización personal', 'Miedo, ira y tristeza', 'Alegría, sorpresa y asco'], correctAnswer: 1 },
  { questionText: 'La "Despersonalización" en este contexto significa:', options: ['Perder la memoria', 'Actitud cínica, distante y cosificadora hacia los usuarios (internos)', 'Salir del cuerpo', 'No saber quién es'], correctAnswer: 1 },
  { questionText: '¿Qué estrategia institucional ayuda a prevenir el Burnout?', options: ['Aumentar las horas de trabajo', 'Rotación de puestos (especialmente en áreas conflictivas)', 'Reducir el sueldo', 'Aislar al funcionario'], correctAnswer: 1 },
  { questionText: 'El apoyo social de los compañeros suele actuar como:', options: ['Factor de riesgo', 'Factor protector (amortiguador del estrés)', 'Indiferente', 'Causa de estrés'], correctAnswer: 1 }
];

export const PRACTICAL_CASES: Test[] = [
  { id: 'case-1', title: 'Caso Práctico 1: Penal (Cálculo de Penas)', scenario: SCENARIO_1, questions: QUESTIONS_1 },
  { id: 'case-2', title: 'Caso Práctico 2: Penitenciario (Clasificación)', scenario: SCENARIO_2, questions: QUESTIONS_2 },
  { id: 'case-3', title: 'Caso Práctico 3: Gestión Admin (Peculio)', scenario: SCENARIO_3, questions: QUESTIONS_3 },
  { id: 'case-4', title: 'Caso Práctico 4: Penitenciario (Disciplinario)', scenario: SCENARIO_4, questions: QUESTIONS_4 },
  { id: 'case-5', title: 'Caso Práctico 5: Conducta (Psicopatía)', scenario: SCENARIO_5, questions: QUESTIONS_5 },
  { id: 'case-6', title: 'Caso Práctico 6: Penal (Delito Funcionario)', scenario: SCENARIO_6, questions: QUESTIONS_6 },
  { id: 'case-7', title: 'Caso Práctico 7: Penitenciario (Comunicaciones)', scenario: SCENARIO_7, questions: QUESTIONS_7 },
  { id: 'case-8', title: 'Caso Práctico 8: Penal (Delitos Sexuales)', scenario: SCENARIO_8, questions: QUESTIONS_8 },
  { id: 'case-9', title: 'Caso Práctico 9: Gestión Admin (Ingreso)', scenario: SCENARIO_9, questions: QUESTIONS_9 },
  { id: 'case-10', title: 'Caso Práctico 10: Conducta (Liderazgo)', scenario: SCENARIO_10, questions: QUESTIONS_10 },
  { id: 'case-11', title: 'Caso Práctico 11: Penitenciario (Órganos)', scenario: SCENARIO_11, questions: QUESTIONS_11 },
  { id: 'case-12', title: 'Caso Práctico 12: Penal (Suspensión Pena)', scenario: SCENARIO_12, questions: QUESTIONS_12 },
  { id: 'case-13', title: 'Caso Práctico 13: Gestión Admin (Oficina)', scenario: SCENARIO_13, questions: QUESTIONS_13 },
  { id: 'case-14', title: 'Caso Práctico 14: Penitenciario (Traslados)', scenario: SCENARIO_14, questions: QUESTIONS_14 },
  { id: 'case-15', title: 'Caso Práctico 15: Conducta (Burnout)', scenario: SCENARIO_15, questions: QUESTIONS_15 },
];
