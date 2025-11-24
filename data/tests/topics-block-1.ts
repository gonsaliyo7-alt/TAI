
import type { Test } from '../../types';

export const TEST_TOPIC_1: Test = {
  id: 'topic-1',
  title: 'Tema 1: La Constitución Española',
  questions: [
    { questionText: 'La Constitución se fundamenta en:', options: ['La indisoluble unidad de la Nación española', 'La autonomía de las regiones', 'La solidaridad internacional', 'La monarquía'], correctAnswer: 0 },
    { questionText: '¿Qué artículo establece que el castellano es la lengua española oficial del Estado?', options: ['Artículo 2', 'Artículo 3', 'Artículo 4', 'Artículo 5'], correctAnswer: 1 },
    { questionText: 'Los valores superiores del ordenamiento jurídico son la libertad, la justicia, la igualdad y:', options: ['La fraternidad', 'El pluralismo político', 'La seguridad', 'El orden'], correctAnswer: 1 },
    { questionText: 'La Constitución Española fue ratificada por el pueblo español en referéndum el día:', options: ['31 de octubre de 1978', '6 de diciembre de 1978', '27 de diciembre de 1978', '29 de diciembre de 1978'], correctAnswer: 1 },
    { questionText: '¿Cuál es la forma política del Estado español?', options: ['República Parlamentaria', 'Monarquía Parlamentaria', 'Monarquía Absoluta', 'Estado Federal'], correctAnswer: 1 },
    { questionText: 'La soberanía nacional reside en:', options: ['El Rey', 'Las Cortes Generales', 'El pueblo español', 'El Gobierno'], correctAnswer: 2 },
    { questionText: 'La bandera de España está formada por tres franjas horizontales:', options: ['Rojo, amarillo y rojo, siendo la amarilla de doble anchura', 'Rojo, amarillo y rojo, todas de igual anchura', 'Rojo, gualda y rojo, siendo la roja de doble anchura', 'Amarillo, rojo y amarillo'], correctAnswer: 0 },
    { questionText: 'Los partidos políticos expresan:', options: ['La unidad del Estado', 'El pluralismo político', 'La soberanía del Rey', 'El poder judicial'], correctAnswer: 1 },
    { questionText: '¿Qué título de la Constitución trata "De la Corona"?', options: ['Título I', 'Título II', 'Título III', 'Título IV'], correctAnswer: 1 },
    { questionText: 'La capital del Estado es la villa de:', options: ['Valladolid', 'Toledo', 'Madrid', 'Barcelona'], correctAnswer: 2 }
  ]
};

export const TEST_TOPIC_2: Test = {
  id: 'topic-2',
  title: 'Tema 2: Derechos y Deberes',
  questions: [
    { questionText: '¿Se puede obligar a alguien a declarar sobre su ideología, religión o creencias?', options: ['Sí, por seguridad nacional', 'No, nunca', 'Sí, ante un juez', 'Sí, para estadísticas'], correctAnswer: 1 },
    { questionText: 'El derecho a la huelga se reconoce en la Constitución para:', options: ['Todos los ciudadanos', 'Los trabajadores', 'Los funcionarios exclusivamente', 'Los estudiantes'], correctAnswer: 1 },
    { questionText: 'La detención preventiva no podrá durar más del tiempo estrictamente necesario y, en todo caso, en el plazo máximo de:', options: ['24 horas', '48 horas', '72 horas', '5 días'], correctAnswer: 2 },
    { questionText: 'Los españoles son mayores de edad:', options: ['A los 16 años', 'A los 18 años', 'A los 21 años', 'A los 25 años'], correctAnswer: 1 },
    { questionText: 'Nadie puede ser condenado o sancionado por acciones u omisiones que en el momento de producirse:', options: ['No fueran inmorales', 'No constituyan delito, falta o infracción administrativa según la legislación vigente', 'No sean conocidas por la policía', 'Sean leves'], correctAnswer: 1 },
    { questionText: 'El derecho a la vida se reconoce en el artículo:', options: ['14', '15', '16', '17'], correctAnswer: 1 },
    { questionText: '¿Se admite la pena de muerte en la Constitución?', options: ['Sí, en cualquier caso', 'No, salvo lo que puedan disponer las leyes penales militares para tiempos de guerra', 'Sí, para terrorismo', 'Nunca'], correctAnswer: 1 },
    { questionText: 'La enseñanza básica es:', options: ['Obligatoria y de pago', 'Obligatoria y gratuita', 'Voluntaria y gratuita', 'Voluntaria y de pago'], correctAnswer: 1 },
    { questionText: 'El Defensor del Pueblo es designado por:', options: ['El Rey', 'El Gobierno', 'Las Cortes Generales', 'El pueblo'], correctAnswer: 2 },
    { questionText: 'Los extranjeros gozarán en España de las libertades públicas que garantiza el Título I:', options: ['En los términos que establezcan los tratados y la ley', 'Igual que los españoles siempre', 'Solo si son comunitarios', 'No tienen derechos'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_3: Test = {
  id: 'topic-3',
  title: 'Tema 3: La Corona',
  questions: [
    { questionText: 'El Rey es:', options: ['Jefe del Gobierno', 'Jefe del Estado', 'Presidente de las Cortes', 'Defensor del Pueblo'], correctAnswer: 1 },
    { questionText: 'La persona del Rey es:', options: ['Inviolable y no está sujeta a responsabilidad', 'Responsable ante el Parlamento', 'Juzgable por el Supremo', 'Elegible'], correctAnswer: 0 },
    { questionText: '¿Qué corresponde al Rey respecto a las leyes?', options: ['Redactarlas', 'Sancionarlas y promulgarlas', 'Debatirlas', 'Ignorarlas'], correctAnswer: 1 },
    { questionText: 'La Corona de España es hereditaria en los sucesores de:', options: ['S.M. Don Juan Carlos I de Borbón', 'Los Reyes Católicos', 'Felipe VI', 'Carlos III'], correctAnswer: 0 },
    { questionText: 'En la sucesión a la Corona, ¿qué principio prevalece en el mismo grado?', options: ['El varón sobre la mujer', 'La mujer sobre el varón', 'El sorteo', 'La elección'], correctAnswer: 0 },
    { questionText: 'Si se extinguieran todas las líneas llamadas en Derecho, ¿quién proveerá a la sucesión?', options: ['El pueblo en referéndum', 'Las Cortes Generales', 'El Gobierno', 'El Consejo de Estado'], correctAnswer: 1 },
    { questionText: 'El Rey puede declarar la guerra y hacer la paz, previa autorización de:', options: ['El Gobierno', 'Las Cortes Generales', 'El Consejo de Seguridad Nacional', 'La ONU'], correctAnswer: 1 },
    { questionText: 'La Regencia se ejerce en nombre del Rey y:', options: ['Por mandato constitucional', 'Por mandato divino', 'Por elección', 'Por delegación'], correctAnswer: 0 },
    { questionText: 'El Príncipe heredero, desde su nacimiento, tendrá la dignidad de:', options: ['Infante de España', 'Príncipe de Asturias', 'Duque de Lugo', 'Conde de Barcelona'], correctAnswer: 1 },
    { questionText: 'Los actos del Rey serán refrendados, como norma general, por:', options: ['El Presidente del Gobierno y, en su caso, los Ministros competentes', 'El Presidente del Congreso', 'El Presidente del Senado', 'El Rey no necesita refrendo'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_4: Test = {
  id: 'topic-4',
  title: 'Tema 4: Las Cortes Generales',
  questions: [
    { questionText: 'El Congreso de los Diputados se compone de un mínimo y un máximo de:', options: ['300 y 400 diputados', '250 y 350 diputados', '100 y 200 diputados', 'No hay límite'], correctAnswer: 0 },
    { questionText: '¿Quién elige a los Senadores?', options: ['Solo el Rey', 'Una parte los ciudadanos y otra los Parlamentos Autonómicos', 'Solo los Parlamentos Autonómicos', 'El Gobierno'], correctAnswer: 1 },
    { questionText: 'El voto de los Diputados y Senadores es:', options: ['Personal e indelegable', 'Delegable en el portavoz', 'Público siempre', 'Colegiado'], correctAnswer: 0 },
    { questionText: 'Las Cortes Generales representan:', options: ['Al Gobierno', 'Al pueblo español', 'A las CCAA', 'Al Rey'], correctAnswer: 1 },
    { questionText: 'Los miembros de las Cortes Generales gozarán de inviolabilidad por:', options: ['Sus delitos privados', 'Las opiniones manifestadas en el ejercicio de sus funciones', 'Cualquier acto', 'Sus deudas'], correctAnswer: 1 },
    { questionText: 'Durante el periodo de su mandato, los Diputados y Senadores solo podrán ser detenidos en caso de:', options: ['Delito leve', 'Flagrante delito', 'Orden del Gobierno', 'Manifestación ilegal'], correctAnswer: 1 },
    { questionText: 'La circunscripción electoral del Congreso es:', options: ['La Comunidad Autónoma', 'La Provincia', 'El Municipio', 'El Estado único'], correctAnswer: 1 },
    { questionText: 'El Senado es la Cámara de:', options: ['Representación popular directa', 'Representación territorial', 'Control judicial', 'Segunda lectura obligatoria'], correctAnswer: 1 },
    { questionText: 'Las sesiones plenarias de las Cámaras serán:', options: ['Secretas', 'Públicas, salvo acuerdo en contrario', 'Solo para prensa', 'Televisadas obligatoriamente'], correctAnswer: 1 },
    { questionText: '¿Quién convalida los Decretos-leyes?', options: ['El Senado', 'El Congreso de los Diputados', 'El Rey', 'El Tribunal Constitucional'], correctAnswer: 1 }
  ]
};

export const TEST_TOPIC_5: Test = {
  id: 'topic-5',
  title: 'Tema 5: Gobierno y TC',
  questions: [
    { questionText: '¿Quién dirige la acción del Gobierno?', options: ['El Rey', 'El Presidente del Gobierno', 'El Ministro de Presidencia', 'Las Cortes'], correctAnswer: 1 },
    { questionText: 'La moción de censura debe ser propuesta al menos por:', options: ['La mayoría absoluta', 'La décima parte de los Diputados', '35 diputados', 'Un grupo parlamentario'], correctAnswer: 1 },
    { questionText: 'El Tribunal Constitucional se compone de:', options: ['10 miembros', '12 miembros', '15 miembros', '9 miembros'], correctAnswer: 1 },
    { questionText: 'Los miembros del Gobierno no podrán ejercer otras funciones representativas que las propias del:', options: ['Mandato parlamentario', 'Sindicato', 'Consejo de administración', 'Partido político'], correctAnswer: 0 },
    { questionText: 'El Gobierno cesa tras la celebración de:', options: ['Elecciones generales', 'El Consejo de Ministros', 'El Debate del Estado de la Nación', 'La Navidad'], correctAnswer: 0 },
    { questionText: 'El Consejo de Estado es el supremo órgano:', options: ['Consultivo del Gobierno', 'Jurisdiccional', 'Legislativo', 'Ejecutivo'], correctAnswer: 0 },
    { questionText: '¿Quién nombra a los miembros del Tribunal Constitucional?', options: ['El Rey', 'El Gobierno', 'El Presidente del TC', 'El Consejo General del Poder Judicial'], correctAnswer: 0 },
    { questionText: 'El Presidente del Tribunal Constitucional es nombrado por el Rey, a propuesta de:', options: ['El Gobierno', 'El mismo Tribunal en pleno', 'El Congreso', 'El Senado'], correctAnswer: 1 },
    { questionText: 'El recurso de amparo constitucional protege:', options: ['Todos los derechos', 'Los derechos y libertades reconocidos en los art. 14 a 29 y 30.2', 'Solo la propiedad', 'Los principios rectores'], correctAnswer: 1 },
    { questionText: '¿Pueden los miembros del Gobierno ser juzgados por traición?', options: ['No, son inviolables', 'Sí, solo ante la Sala de lo Penal del Tribunal Supremo', 'Sí, ante cualquier juez', 'Solo por el TC'], correctAnswer: 1 }
  ]
};

export const TEST_TOPIC_6: Test = {
  id: 'topic-6',
  title: 'Tema 6: Organización Territorial',
  questions: [
    { questionText: 'El gobierno y administración autónoma de las provincias corresponde a:', options: ['Los Ayuntamientos', 'Las Diputaciones u otras Corporaciones de carácter representativo', 'El Delegado del Gobierno', 'La CCAA'], correctAnswer: 1 },
    { questionText: 'El Estado garantiza la realización efectiva del principio de solidaridad velando por:', options: ['El equilibrio económico', 'La uniformidad cultural', 'La centralización', 'La independencia'], correctAnswer: 0 },
    { questionText: '¿Pueden las CCAA celebrar acuerdos de cooperación entre sí?', options: ['No, nunca', 'Sí, con autorización de las Cortes Generales', 'Sí, libremente', 'Solo para turismo'], correctAnswer: 1 },
    { questionText: 'El control de la constitucionalidad de las disposiciones normativas de las CCAA con fuerza de ley corresponde a:', options: ['El Gobierno', 'El Tribunal Constitucional', 'La Jurisdicción Contencioso-Administrativa', 'El Tribunal de Cuentas'], correctAnswer: 1 },
    { questionText: 'La iniciativa del proceso autonómico corresponde a:', options: ['El Rey', 'Las Diputaciones y órganos interinsulares y a las 2/3 partes de los municipios', 'El Gobierno central', 'Los sindicatos'], correctAnswer: 1 },
    { questionText: 'El Delegado del Gobierno en la Comunidad Autónoma es nombrado por:', options: ['El Presidente de la CCAA', 'El Consejo de Ministros', 'El Rey', 'El Parlamento Autonómico'], correctAnswer: 1 },
    { questionText: 'La norma institucional básica de cada Comunidad Autónoma es:', options: ['La Constitución', 'El Estatuto de Autonomía', 'La Ley de Bases', 'El Reglamento Orgánico'], correctAnswer: 1 },
    { questionText: 'Los Concejales son elegidos por:', options: ['El Alcalde', 'Los vecinos', 'La Diputación', 'Sorteo'], correctAnswer: 1 },
    { questionText: 'La provincia es una entidad local con personalidad jurídica propia determinada por la agrupación de:', options: ['Municipios', 'Comarcas', 'Barrios', 'Distritos'], correctAnswer: 0 },
    { questionText: 'En los archipiélagos, las islas tendrán además su administración propia en forma de:', options: ['Cabildos o Consejos', 'Diputaciones', 'Ayuntamientos', 'Comisiones'], correctAnswer: 0 }
  ]
};

export const TEST_TOPIC_7: Test = {
  id: 'topic-7',
  title: 'Tema 7: La Unión Europea',
  questions: [
    { questionText: 'El Tratado de adhesión de España a la CEE se firmó en:', options: ['1978', '1985', '1992', '1981'], correctAnswer: 1 },
    { questionText: '¿Qué institución representa los intereses de los Estados miembros?', options: ['La Comisión', 'El Parlamento', 'El Consejo de la Unión Europea', 'El Tribunal de Justicia'], correctAnswer: 2 },
    { questionText: 'La primacía del Derecho Comunitario implica que:', options: ['Prevalece sobre el derecho nacional en caso de conflicto', 'Es supletorio', 'Solo aplica si lo dice el Rey', 'Es inferior a la Ley nacional'], correctAnswer: 0 },
    { questionText: '¿Quiénes componen el Consejo Europeo?', options: ['Los Ministros de cada país', 'Los Jefes de Estado o de Gobierno de los Estados miembros, su Presidente y el Presidente de la Comisión', 'Los eurodiputados', 'Los jueces'], correctAnswer: 1 },
    { questionText: 'El poder legislativo en la UE es compartido principalmente por:', options: ['La Comisión y el Consejo', 'El Parlamento Europeo y el Consejo', 'El Tribunal y el Parlamento', 'El Consejo Europeo y el BCE'], correctAnswer: 1 },
    { questionText: 'La Comisión Europea representa:', options: ['Los intereses de los Estados', 'El interés general de la Unión', 'A los ciudadanos', 'A los bancos'], correctAnswer: 1 },
    { questionText: '¿Qué tratado estableció la ciudadanía europea?', options: ['Tratado de Roma', 'Tratado de Maastricht', 'Tratado de París', 'Acta Única'], correctAnswer: 1 },
    { questionText: 'El Tribunal de Justicia de la Unión Europea tiene su sede en:', options: ['Bruselas', 'Estrasburgo', 'Luxemburgo', 'La Haya'], correctAnswer: 2 },
    { questionText: 'Los Reglamentos comunitarios son:', options: ['Obligatorios en todos sus elementos y directamente aplicables', 'Obligatorios en cuanto al resultado', 'Recomendaciones', 'No vinculantes'], correctAnswer: 0 },
    { questionText: 'La Directiva comunitaria obliga al Estado miembro en cuanto a:', options: ['La forma y los medios', 'El resultado que debe conseguirse', 'Nada', 'El plazo solamente'], correctAnswer: 1 }
  ]
};

export const TEST_TOPIC_8: Test = {
  id: 'topic-8',
  title: 'Tema 8: Fuentes Dº Administrativo',
  questions: [
    { questionText: 'La inderogabilidad singular de los reglamentos significa que:', options: ['No se pueden derogar nunca', 'Las resoluciones administrativas de carácter particular no pueden vulnerar lo establecido en una disposición de carácter general', 'Solo el juez los deroga', 'Son eternos'], correctAnswer: 1 },
    { questionText: 'Los Decretos Legislativos son normas con rango de ley dictadas por:', options: ['El Parlamento', 'El Gobierno por delegación de las Cortes', 'Los Jueces', 'El Rey'], correctAnswer: 1 },
    { questionText: '¿Qué principio rige la relación entre Ley Orgánica y Ley Ordinaria?', options: ['Jerarquía', 'Competencia', 'Antigüedad', 'Especialidad'], correctAnswer: 1 },
    { questionText: 'La costumbre en nuestro ordenamiento jurídico:', options: ['Es la fuente principal', 'Solo rige en defecto de ley aplicable', 'No es fuente', 'Es superior a la ley'], correctAnswer: 1 },
    { questionText: 'Los Tratados Internacionales válidamente celebrados formarán parte del ordenamiento interno:', options: ['Inmediatamente', 'Una vez publicados oficialmente en España', 'Cuando lo diga el Rey', 'A los 20 días'], correctAnswer: 1 },
    { questionText: '¿Qué son los Decretos-Leyes?', options: ['Normas del Parlamento', 'Disposiciones legislativas provisionales dictadas por el Gobierno en caso de extraordinaria y urgente necesidad', 'Reglamentos', 'Leyes orgánicas'], correctAnswer: 1 },
    { questionText: 'La potestad reglamentaria originaria corresponde:', options: ['A los Ministros', 'Al Gobierno de la Nación', 'A los Directores Generales', 'A los Alcaldes'], correctAnswer: 1 },
    { questionText: '¿Pueden los reglamentos regular materias reservadas a la Ley?', options: ['Sí, siempre', 'No', 'Solo si es urgente', 'Solo organizativamente'], correctAnswer: 1 },
    { questionText: 'Las Leyes Orgánicas requieren para su aprobación:', options: ['Mayoría simple', 'Mayoría absoluta del Congreso', 'Mayoría de 2/3', 'Unanimidad'], correctAnswer: 1 },
    { questionText: 'La jurisprudencia complementará el ordenamiento jurídico con la doctrina que establezca:', options: ['El Tribunal Constitucional', 'El Tribunal Supremo', 'La Audiencia Nacional', 'Los Juzgados'], correctAnswer: 1 }
  ]
};

export const TEST_TOPIC_9: Test = {
  id: 'topic-9',
  title: 'Tema 9: El Acto Administrativo',
  questions: [
    { questionText: 'Los actos presuntos son:', options: ['Actos escritos', 'Actos verbales', 'Los que resultan del silencio administrativo', 'Actos nulos'], correctAnswer: 2 },
    { questionText: '¿Qué actos ponen fin a la vía administrativa?', options: ['Todos', 'Los de los Ministros y Secretarios de Estado (salvo ley en contrario)', 'Los de los Jefes de Sección', 'Los de trámite'], correctAnswer: 1 },
    { questionText: 'La notificación defectuosa:', options: ['Es válida siempre', 'Surte efecto si el interesado realiza actuaciones que supongan el conocimiento del contenido', 'Es nula radicalmente', 'No existe'], correctAnswer: 1 },
    { questionText: 'Son anulables los actos de la Administración que:', options: ['Incurran en cualquier infracción del ordenamiento jurídico, incluso la desviación de poder', 'Sean dictados por órgano manifiestamente incompetente', 'Lesionen derechos fundamentales', 'Sean constitutivos de delito'], correctAnswer: 0 },
    { questionText: 'Los actos nulos de pleno derecho:', options: ['Pueden convalidarse', 'No pueden convalidarse', 'Caducan a los 4 años', 'Son válidos si no se recurren'], correctAnswer: 1 },
    { questionText: 'La eficacia de los actos administrativos quedará demorada cuando:', options: ['Así lo exija el contenido del acto o esté supeditada a notificación/publicación', 'El funcionario quiera', 'Sea fin de semana', 'Haya huelga'], correctAnswer: 0 },
    { questionText: 'La motivación de los actos es obligatoria:', options: ['Siempre', 'Para los actos que limiten derechos subjetivos o intereses legítimos', 'Nunca', 'Solo en multas'], correctAnswer: 1 },
    { questionText: 'El silencio administrativo en procedimientos iniciados a solicitud del interesado es generalmente:', options: ['Negativo', 'Positivo', 'Neutro', 'Aleatorio'], correctAnswer: 1 },
    { questionText: 'Los actos administrativos se presumen:', options: ['Nulos', 'Válidos y producen efectos desde que se dictan', 'Falsos', 'Inexistentes'], correctAnswer: 1 },
    { questionText: 'La ejecución de los actos administrativos puede realizarse mediante:', options: ['Multa coercitiva', 'Embargo', 'Compulsión sobre las personas', 'Todas son correctas'], correctAnswer: 3 }
  ]
};

export const TEST_TOPIC_10: Test = {
  id: 'topic-10',
  title: 'Tema 10: Procedimiento Administrativo',
  questions: [
    { questionText: 'La iniciación del procedimiento puede ser:', options: ['De oficio o a solicitud de interesado', 'Solo de oficio', 'Solo a solicitud', 'Por sorteo'], correctAnswer: 0 },
    { questionText: 'El trámite de audiencia se realiza:', options: ['Antes de la propuesta de resolución (instrucción)', 'Después de la resolución', 'Al inicio', 'Cuando quiera el funcionario'], correctAnswer: 0 },
    { questionText: 'La caducidad del procedimiento se produce por:', options: ['Falta de pago', 'Paralización por causa imputable al interesado (tras advertencia y plazo)', 'Desistimiento de la Administración', 'Error informático'], correctAnswer: 1 },
    { questionText: 'Los plazos expresados en días se cuentan:', options: ['Días naturales', 'Días hábiles (excluyendo sábados, domingos y festivos)', 'Semanas', 'Meses'], correctAnswer: 1 },
    { questionText: '¿Es obligatoria la resolución expresa en todos los procedimientos?', options: ['Sí, la Administración está obligada a dictar resolución expresa', 'No, basta el silencio', 'Solo en los sancionadores', 'Depende del funcionario'], correctAnswer: 0 },
    { questionText: 'Las medidas provisionales se pueden adoptar:', options: ['Solo al final', 'En cualquier momento del procedimiento para asegurar la eficacia de la resolución', 'Nunca', 'Solo si hay delito'], correctAnswer: 1 },
    { questionText: 'La ampliación de plazos no puede exceder de:', options: ['La mitad de los mismos', 'El doble', 'Un mes', 'Diez días'], correctAnswer: 0 },
    { questionText: 'La causa de abstención "tener interés personal en el asunto" aplica a:', options: ['Los interesados', 'Las autoridades y personal al servicio de la Administración', 'Los jueces solo', 'Los testigos'], correctAnswer: 1 },
    { questionText: 'El periodo de prueba podrá tener una duración no superior a:', options: ['10 días', '20 días', '30 días', '6 meses'], correctAnswer: 2 },
    { questionText: 'La terminación convencional del procedimiento consiste en:', options: ['Una sentencia', 'Un acuerdo, pacto o convenio', 'El archivo', 'La caducidad'], correctAnswer: 1 }
  ]
};
