
import type { Test } from '../../types';

export const TEST_TOPIC_21: Test = {
  id: 'topic-21',
  title: 'Tema: Servidores Web y de Aplicaciones',
  questions: [
    { 
      questionText: '¿Cuál de los siguientes es un servidor de aplicaciones Java EE?', 
      options: ['Apache HTTP Server', 'Nginx', 'Apache Tomcat', 'Microsoft IIS'], 
      correctAnswer: 2,
      explanation: 'Apache Tomcat es un contenedor de servlets y servidor de aplicaciones Java.'
    },
    { 
      questionText: '¿Qué código de estado HTTP indica "Página no encontrada"?', 
      options: ['200', '301', '404', '500'], 
      correctAnswer: 2,
      explanation: 'El código 404 Not Found indica que el servidor no puede encontrar el recurso solicitado.'
    },
    { 
      questionText: '¿Qué archivo de configuración se utiliza comúnmente en Apache HTTP Server?', 
      options: ['web.config', 'httpd.conf', 'server.xml', 'nginx.conf'], 
      correctAnswer: 1,
      explanation: 'httpd.conf es el archivo de configuración principal para el servidor web Apache.'
    },
    { 
      questionText: '¿Qué significa LAMP en el contexto de servidores web?', 
      options: ['Linux, Apache, MySQL, PHP', 'Local, Area, Map, Protocol', 'Link, Access, Mode, Port', 'Linux, Apple, Mac, PC'], 
      correctAnswer: 0,
      explanation: 'LAMP es un acrónimo para un conjunto de soluciones de software: Linux, Apache, MySQL y PHP/Perl/Python.'
    },
    { 
      questionText: '¿Qué puerto utiliza por defecto el protocolo HTTPS?', 
      options: ['80', '8080', '443', '21'], 
      correctAnswer: 2,
      explanation: 'HTTPS utiliza el puerto 443 para comunicaciones seguras.'
    },
    { 
      questionText: '¿Qué es un Proxy Inverso?', 
      options: ['Un servidor que recupera recursos en nombre de un cliente desde uno o más servidores', 'Un virus', 'Un error de red', 'Un cliente de correo'], 
      correctAnswer: 0,
      explanation: 'Un proxy inverso se sitúa delante de los servidores web y reenvía las solicitudes de los clientes a esos servidores (ej. para balanceo de carga).'
    },
    { 
      questionText: '¿Qué tecnología permite ejecutar código Java en el servidor para generar contenido web dinámico?', 
      options: ['Applet', 'Servlet', 'JavaScript', 'Flash'], 
      correctAnswer: 1,
      explanation: 'Los Servlets son clases Java que responden a peticiones HTTP y generan contenido dinámico.'
    },
    { 
      questionText: '¿Qué es el Balanceo de Carga?', 
      options: ['Distribuir el tráfico de red entre varios servidores', 'Pesar el servidor', 'Medir la electricidad', 'Apagar el servidor'], 
      correctAnswer: 0,
      explanation: 'El balanceo de carga mejora la capacidad de respuesta y la disponibilidad de las aplicaciones distribuyendo la carga.'
    },
    { 
      questionText: '¿Qué es una sesión en una aplicación web?', 
      options: ['Una reunión', 'Un mecanismo para persistir el estado entre múltiples peticiones del mismo usuario', 'Un error', 'Una base de datos'], 
      correctAnswer: 1,
      explanation: 'Las sesiones permiten mantener información sobre el usuario a través de diferentes páginas o peticiones.'
    },
    { 
      questionText: '¿Qué es IIS?', 
      options: ['Internet Information Services', 'Internal Internet System', 'International Information Standard', 'Intelligent Input System'], 
      correctAnswer: 0,
      explanation: 'IIS es el servidor web y de aplicaciones creado por Microsoft para sistemas operativos Windows.'
    }
  ]
};

export const TEST_TOPIC_22: Test = {
  id: 'topic-22',
  title: 'Tema: Interoperabilidad y XML',
  questions: [
    { 
      questionText: '¿Qué significa XML?', 
      options: ['eXtensible Markup Language', 'Extra Modern Language', 'X-ray Machine Language', 'External Memory Link'], 
      correctAnswer: 0,
      explanation: 'XML (Lenguaje de Marcado Extensible) es un formato para almacenar y transportar datos.'
    },
    { 
      questionText: '¿Qué es un esquema XSD?', 
      options: ['XML Schema Definition', 'XML Style Definition', 'XML Simple Data', 'XML System Design'], 
      correctAnswer: 0,
      explanation: 'XSD describe la estructura de un documento XML.'
    },
    { 
      questionText: '¿Qué tecnología se usa para transformar documentos XML?', 
      options: ['XSLT', 'HTML', 'CSS', 'JSON'], 
      correctAnswer: 0,
      explanation: 'XSLT (Extensible Stylesheet Language Transformations) se usa para transformar documentos XML en otros formatos.'
    },
    { 
      questionText: '¿Qué es JSON?', 
      options: ['JavaScript Object Notation', 'Java Source Object Name', 'Just Some Other Name', 'Joint System On Network'], 
      correctAnswer: 0,
      explanation: 'JSON es un formato ligero de intercambio de datos, fácil de leer y escribir.'
    },
    { 
      questionText: '¿Qué es el ENI?', 
      options: ['Esquema Nacional de Interoperabilidad', 'Esquema Nacional de Internet', 'Entidad Nacional de Informática', 'Estándar Nacional de Intercambio'], 
      correctAnswer: 0,
      explanation: 'El ENI comprende el conjunto de criterios y recomendaciones en materia de seguridad, conservación y normalización de la información.'
    },
    { 
      questionText: '¿Qué es un Servicio Web?', 
      options: ['Un sistema de software diseñado para soportar la interacción máquina a máquina a través de una red', 'Una página web', 'Un navegador', 'Un servidor'], 
      correctAnswer: 0,
      explanation: 'Los servicios web permiten la comunicación entre aplicaciones diferentes.'
    },
    { 
      questionText: '¿Qué protocolo utiliza SOAP?', 
      options: ['XML', 'JSON', 'CSV', 'TXT'], 
      correctAnswer: 0,
      explanation: 'SOAP (Simple Object Access Protocol) utiliza XML para el intercambio de mensajes.'
    },
    { 
      questionText: '¿Qué es REST?', 
      options: ['Representational State Transfer', 'Remote Execution System Tool', 'Real State Transfer', 'Random External Service Type'], 
      correctAnswer: 0,
      explanation: 'REST es un estilo de arquitectura de software para sistemas hipermedia distribuidos como la World Wide Web.'
    },
    { 
      questionText: '¿Qué es WSDL?', 
      options: ['Web Services Description Language', 'Web Server Data Link', 'Wide System Data Language', 'Web Standard Design Language'], 
      correctAnswer: 0,
      explanation: 'WSDL es un formato XML para describir servicios de red como un conjunto de puntos finales.'
    },
    { 
      questionText: '¿Qué es UDDI?', 
      options: ['Universal Description, Discovery and Integration', 'User Data Direct Interface', 'Unified Data Definition Interface', 'Universal Data Design Integration'], 
      correctAnswer: 0,
      explanation: 'UDDI es un estándar XML para describir, publicar y encontrar servicios web.'
    }
  ]
};

export const TEST_TOPIC_23: Test = {
  id: 'topic-23',
  title: 'Tema: Seguridad de la Información',
  questions: [
    { 
      questionText: '¿Qué es el ENS?', 
      options: ['Esquema Nacional de Seguridad', 'Estándar Nacional de Software', 'Entidad Nacional de Sistemas', 'Equipo Nacional de Soporte'], 
      correctAnswer: 0,
      explanation: 'El ENS tiene por objeto establecer la política de seguridad en la utilización de medios electrónicos.'
    },
    { 
      questionText: '¿Qué es la firma electrónica?', 
      options: ['Un conjunto de datos electrónicos que acompañan o están asociados a otros datos electrónicos y que permiten la identificación del firmante', 'Una foto de la firma', 'Un dibujo', 'Un nombre escrito'], 
      correctAnswer: 0,
      explanation: 'La firma electrónica garantiza la autenticidad, integridad y no repudio de los documentos.'
    },
    { 
      questionText: '¿Qué es un certificado digital?', 
      options: ['Un documento firmado electrónicamente por un prestador de servicios de certificación que vincula unos datos de verificación de firma a un firmante', 'Un diploma', 'Un archivo de texto', 'Un programa'], 
      correctAnswer: 0,
      explanation: 'El certificado digital permite la identificación de las partes en Internet.'
    },
    { 
      questionText: '¿Qué es la criptografía asimétrica?', 
      options: ['Usa una clave pública y una privada', 'Usa una sola clave', 'No usa claves', 'Es insegura'], 
      correctAnswer: 0,
      explanation: 'La criptografía asimétrica utiliza un par de claves: una pública para cifrar y una privada para descifrar (o viceversa para firma).'
    },
    { 
      questionText: '¿Qué es el DNI electrónico?', 
      options: ['El documento nacional de identidad que acredita electrónicamente la identidad personal de su titular', 'Un DNI de plástico', 'Un DNI falso', 'Un DNI caducado'], 
      correctAnswer: 0,
      explanation: 'El DNIe permite la firma electrónica de documentos.'
    },
    { 
      questionText: '¿Qué es un ataque de fuerza bruta?', 
      options: ['Probar todas las combinaciones posibles de contraseñas', 'Golpear el ordenador', 'Cortar los cables', 'Apagar la luz'], 
      correctAnswer: 0,
      explanation: 'Consiste en intentar adivinar una credencial probando sistemáticamente todas las opciones posibles.'
    },
    { 
      questionText: '¿Qué es el Phishing?', 
      options: ['Suplantación de identidad para robar credenciales', 'Pescar', 'Un virus', 'Un error'], 
      correctAnswer: 1,
      explanation: 'El phishing es una técnica de ingeniería social para engañar a los usuarios y obtener información confidencial.'
    },
    { 
      questionText: '¿Qué es un Firewall?', 
      options: ['Un sistema de seguridad que controla el tráfico de red', 'Un antivirus', 'Un programa de dibujo', 'Un juego'], 
      correctAnswer: 0,
      explanation: 'Un firewall monitoriza y filtra el tráfico de red basándose en reglas de seguridad.'
    },
    { 
      questionText: '¿Qué es la LOPDGDD?', 
      options: ['Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales', 'Ley de Ordenación de Pagos', 'Ley de Organización Policial', 'Ley de Obras Públicas'], 
      correctAnswer: 0,
      explanation: 'Es la norma española que adapta el RGPD europeo.'
    },
    { 
      questionText: '¿Qué es el RGPD?', 
      options: ['Reglamento General de Protección de Datos', 'Registro General de Protección de Datos', 'Regla General de Privacidad', 'Red Global de Protección'], 
      correctAnswer: 0,
      explanation: 'El RGPD es la normativa europea de protección de datos.'
    }
  ]
};

export const TEST_TOPIC_24: Test = {
  id: 'topic-24',
  title: 'Tema: Accesibilidad Web',
  questions: [
    { 
      questionText: '¿Qué significan las siglas WCAG?', 
      options: ['Web Content Accessibility Guidelines', 'World Computer Accessibility Group', 'Web Coding And Graphics', 'Wide Content Access Guide'], 
      correctAnswer: 0,
      explanation: 'WCAG (Pautas de Accesibilidad para el Contenido Web) son documentos que explican cómo hacer que el contenido web sea más accesible.'
    },
    { 
      questionText: '¿Cuál es el nivel de conformidad más alto en WCAG?', 
      options: ['A', 'AA', 'AAA', 'AAAA'], 
      correctAnswer: 2,
      explanation: 'El nivel AAA es el más exigente.'
    },
    { 
      questionText: '¿Qué es WAI-ARIA?', 
      options: ['Una especificación para hacer el contenido web más accesible', 'Un navegador', 'Un virus', 'Un lenguaje'], 
      correctAnswer: 1,
      explanation: 'WAI-ARIA define formas de hacer el contenido web y las aplicaciones web más accesibles.'
    },
    { 
      questionText: '¿Para qué sirve el atributo "alt" en las imágenes?', 
      options: ['Para proporcionar un texto alternativo', 'Para decorar', 'Para el tamaño', 'Para el color'], 
      correctAnswer: 0,
      explanation: 'El texto alternativo es esencial para que los lectores de pantalla describan la imagen.'
    },
    { 
      questionText: '¿Qué es un lector de pantalla?', 
      options: ['Un software que lee el texto en voz alta', 'Una lupa', 'Un monitor', 'Un teclado'], 
      correctAnswer: 1,
      explanation: 'Los lectores de pantalla son tecnologías de asistencia para personas con discapacidad visual.'
    },
    { 
      questionText: '¿Qué principio de accesibilidad es "Perceptible"?', 
      options: ['La información debe presentarse de manera que los usuarios puedan percibirla', 'Debe ser bonito', 'Debe ser rápido', 'Debe ser barato'], 
      correctAnswer: 0,
      explanation: 'Los 4 principios son: Perceptible, Operable, Comprensible y Robusto (POUR).'
    },
    { 
      questionText: '¿Qué es el contraste de color?', 
      options: ['La diferencia de luminosidad entre el texto y el fondo', 'El brillo', 'La saturación', 'El tono'], 
      correctAnswer: 0,
      explanation: 'Un contraste adecuado es necesario para que el texto sea legible para personas con baja visión.'
    },
    { 
      questionText: '¿Qué es la navegación por teclado?', 
      options: ['Poder usar el sitio web solo con el teclado', 'Escribir rápido', 'Usar un teclado musical', 'Navegar en barco'], 
      correctAnswer: 0,
      explanation: 'La accesibilidad requiere que todas las funcionalidades sean operables a través del teclado.'
    },
    { 
      questionText: '¿Qué es el diseño universal?', 
      options: ['Diseño para todos, sin necesidad de adaptación', 'Diseño para el universo', 'Diseño solo para expertos', 'Diseño gráfico'], 
      correctAnswer: 0,
      explanation: 'El diseño universal busca crear productos y entornos que puedan ser utilizados por todas las personas.'
    },
    { 
      questionText: '¿Qué es la usabilidad?', 
      options: ['Facilidad de uso', 'Utilidad', 'Rapidez', 'Precio'], 
      correctAnswer: 0,
      explanation: 'La usabilidad se refiere a la eficacia, eficiencia y satisfacción con la que los usuarios pueden lograr objetivos.'
    }
  ]
};

export const TEST_TOPIC_25: Test = {
  id: 'topic-25',
  title: 'Tema: Protección de Datos (RGPD)',
  questions: [
    { 
      questionText: '¿Qué es un dato personal?', 
      options: ['Cualquier información sobre una persona física identificada o identificable', 'Solo el nombre', 'Solo el DNI', 'Datos de empresas'], 
      correctAnswer: 0,
      explanation: 'El RGPD define dato personal de forma muy amplia.'
    },
    { 
      questionText: '¿Qué es el consentimiento en el RGPD?', 
      options: ['Manifestación de voluntad libre, específica, informada e inequívoca', 'Firmar un papel', 'Decir que sí', 'No decir nada'], 
      correctAnswer: 0,
      explanation: 'El consentimiento debe ser una acción afirmativa clara.'
    },
    { 
      questionText: '¿Qué es el DPO?', 
      options: ['Data Protection Officer (Delegado de Protección de Datos)', 'Data Processing Officer', 'Digital Privacy Officer', 'Direct Public Officer'], 
      correctAnswer: 0,
      explanation: 'El DPO es el encargado de supervisar el cumplimiento de la normativa de protección de datos.'
    },
    { 
      questionText: '¿Qué es el derecho al olvido?', 
      options: ['Derecho de supresión', 'Derecho a no recordar', 'Derecho a borrar la memoria', 'Derecho a desaparecer'], 
      correctAnswer: 0,
      explanation: 'Es el derecho a obtener la supresión de los datos personales.'
    },
    { 
      questionText: '¿Qué es una violación de seguridad de los datos?', 
      options: ['Destrucción, pérdida, alteración o comunicación no autorizada de datos', 'Romper un ordenador', 'Perder una llave', 'Olvidar la contraseña'], 
      correctAnswer: 0,
      explanation: 'Brecha de seguridad que afecta a datos personales.'
    },
    { 
      questionText: '¿Qué es la AEPD?', 
      options: ['Agencia Española de Protección de Datos', 'Asociación Española de Privacidad', 'Agencia Europea de Protección de Datos', 'Autoridad Estatal de Privacidad'], 
      correctAnswer: 0,
      explanation: 'La AEPD es la autoridad de control en España.'
    },
    { 
      questionText: '¿Qué es el principio de minimización de datos?', 
      options: ['Los datos deben ser adecuados, pertinentes y limitados a lo necesario', 'Recoger cuantos más datos mejor', 'No recoger datos', 'Guardar datos para siempre'], 
      correctAnswer: 0,
      explanation: 'Solo se deben tratar los datos estrictamente necesarios para el fin.'
    },
    { 
      questionText: '¿Qué es la portabilidad de los datos?', 
      options: ['Derecho a recibir los datos personales en un formato estructurado y transmitirlos a otro responsable', 'Llevar el ordenador', 'Mover datos en un USB', 'Copiar y pegar'], 
      correctAnswer: 0,
      explanation: 'Permite al interesado recuperar sus datos para reutilizarlos.'
    },
    { 
      questionText: '¿Qué es una evaluación de impacto (EIPD)?', 
      options: ['Análisis de los riesgos que un tratamiento puede conllevar para los derechos y libertades', 'Un examen', 'Una auditoría', 'Una multa'], 
      correctAnswer: 0,
      explanation: 'Es obligatoria para tratamientos de alto riesgo.'
    },
    { 
      questionText: '¿Qué es el principio de licitud?', 
      options: ['Los datos deben tratarse de manera lícita, leal y transparente', 'Todo vale', 'Solo si hay contrato', 'Solo si hay ley'], 
      correctAnswer: 0,
      explanation: 'El tratamiento debe tener una base legal válida.'
    }
  ]
};

export const TEST_TOPIC_26: Test = {
  id: 'topic-26',
  title: 'Tema: Inteligencia Artificial',
  questions: [
    { 
      questionText: '¿Qué es el Machine Learning?', 
      options: ['Aprendizaje Automático', 'Máquina de Aprender', 'Inteligencia Artificial General', 'Robótica'], 
      correctAnswer: 0,
      explanation: 'Es una rama de la IA que permite a las máquinas aprender de los datos.'
    },
    { 
      questionText: '¿Qué es una Red Neuronal Artificial?', 
      options: ['Un modelo computacional inspirado en el cerebro humano', 'Una red de cables', 'Internet', 'Un virus'], 
      correctAnswer: 0,
      explanation: 'Las redes neuronales son la base del Deep Learning.'
    },
    { 
      questionText: '¿Qué es el Deep Learning?', 
      options: ['Aprendizaje Profundo', 'Aprendizaje Superficial', 'Aprendizaje Rápido', 'Aprendizaje Lento'], 
      correctAnswer: 0,
      explanation: 'Es un subcampo del Machine Learning basado en redes neuronales profundas.'
    },
    { 
      questionText: '¿Qué es el Procesamiento del Lenguaje Natural (PLN)?', 
      options: ['La capacidad de las máquinas para entender y generar lenguaje humano', 'Hablar con robots', 'Traducir textos', 'Escribir código'], 
      correctAnswer: 0,
      explanation: 'El PLN permite la interacción entre ordenadores y lenguaje humano.'
    },
    { 
      questionText: '¿Qué es un Chatbot?', 
      options: ['Un programa que simula una conversación humana', 'Un robot físico', 'Un chat de amigos', 'Un virus'], 
      correctAnswer: 0,
      explanation: 'Los chatbots usan IA para interactuar con usuarios mediante texto o voz.'
    },
    { 
      questionText: '¿Qué es la Visión por Computadora?', 
      options: ['La capacidad de las máquinas para "ver" e interpretar imágenes', 'Usar gafas', 'Pantallas grandes', 'Cámaras de seguridad'], 
      correctAnswer: 0,
      explanation: 'Permite a los ordenadores extraer información de imágenes y vídeos.'
    },
    { 
      questionText: '¿Qué es el Big Data?', 
      options: ['Grandes volúmenes de datos', 'Un disco duro grande', 'Una base de datos pequeña', 'Un virus'], 
      correctAnswer: 0,
      explanation: 'Big Data se refiere al análisis de conjuntos de datos muy grandes y complejos.'
    },
    { 
      questionText: '¿Qué es la IA Generativa?', 
      options: ['IA capaz de crear nuevo contenido (texto, imágenes, etc.)', 'IA que genera energía', 'IA antigua', 'IA básica'], 
      correctAnswer: 0,
      explanation: 'Modelos como GPT o DALL-E que generan contenido original.'
    },
    { 
      questionText: '¿Qué es un Algoritmo Genético?', 
      options: ['Un algoritmo de búsqueda inspirado en la evolución biológica', 'Un virus genético', 'ADN digital', 'Un programa médico'], 
      correctAnswer: 0,
      explanation: 'Utiliza conceptos como mutación y selección para resolver problemas de optimización.'
    },
    { 
      questionText: '¿Qué es la Ética de la IA?', 
      options: ['El estudio de los problemas morales relacionados con la IA', 'Programar bien', 'Hacer robots buenos', 'Leyes de la robótica'], 
      correctAnswer: 0,
      explanation: 'Aborda temas como el sesgo, la privacidad y la responsabilidad en sistemas de IA.'
    }
  ]
};

export const TEST_TOPIC_27: Test = {
  id: 'topic-27',
  title: 'Tema: Blockchain y Criptografía',
  questions: [
    { 
      questionText: '¿Qué es Blockchain?', 
      options: ['Una cadena de bloques', 'Una base de datos distribuida y segura', 'Una moneda', 'Un banco'], 
      correctAnswer: 1,
      explanation: 'Es un registro compartido e inmutable de transacciones.'
    },
    { 
      questionText: '¿Qué es Bitcoin?', 
      options: ['Una criptomoneda', 'Un banco', 'Una empresa', 'Un país'], 
      correctAnswer: 0,
      explanation: 'Bitcoin es la primera criptomoneda descentralizada basada en blockchain.'
    },
    { 
      questionText: '¿Qué es un Smart Contract?', 
      options: ['Un contrato inteligente', 'Un programa que se ejecuta automáticamente cuando se cumplen ciertas condiciones', 'Un abogado robot', 'Un contrato digital'], 
      correctAnswer: 1,
      explanation: 'Son programas almacenados en una blockchain que se ejecutan cuando se cumplen condiciones predeterminadas.'
    },
    { 
      questionText: '¿Qué es la Minería de Criptomonedas?', 
      options: ['El proceso de validar transacciones y crear nuevos bloques', 'Buscar oro', 'Robar monedas', 'Crear dinero falso'], 
      correctAnswer: 0,
      explanation: 'Es el proceso computacional para asegurar la red y procesar transacciones.'
    },
    { 
      questionText: '¿Qué es un Hash?', 
      options: ['Una función matemática que convierte una entrada en una cadena de longitud fija', 'Una comida', 'Una clave', 'Un virus'], 
      correctAnswer: 0,
      explanation: 'Los hashes son fundamentales en blockchain para asegurar la integridad de los datos.'
    },
    { 
      questionText: '¿Qué es Ethereum?', 
      options: ['Una plataforma de blockchain descentralizada', 'Una moneda', 'Un gas', 'Una empresa'], 
      correctAnswer: 0,
      explanation: 'Ethereum permite la creación de contratos inteligentes y aplicaciones descentralizadas (DApps).'
    },
    { 
      questionText: '¿Qué es un NFT?', 
      options: ['Non-Fungible Token', 'New File Type', 'Network File Transfer', 'No Free Token'], 
      correctAnswer: 0,
      explanation: 'Un NFT es un activo digital único verificado mediante tecnología blockchain.'
    },
    { 
      questionText: '¿Qué es la Descentralización?', 
      options: ['La ausencia de una autoridad central', 'El caos', 'La anarquía', 'La libertad'], 
      correctAnswer: 0,
      explanation: 'En blockchain, significa que la red no está controlada por una sola entidad.'
    },
    { 
      questionText: '¿Qué es una Wallet (Cartera)?', 
      options: ['Un software o hardware para almacenar claves criptográficas', 'Una cartera de piel', 'Un banco', 'Una caja fuerte'], 
      correctAnswer: 0,
      explanation: 'Permite a los usuarios almacenar y gestionar sus criptomonedas.'
    },
    { 
      questionText: '¿Qué es la Criptografía?', 
      options: ['La técnica de escribir en clave', 'Escribir rápido', 'Escribir mal', 'Escribir en otro idioma'], 
      correctAnswer: 0,
      explanation: 'Es la práctica y el estudio de técnicas para la comunicación segura.'
    }
  ]
};

export const TEST_TOPIC_28: Test = {
  id: 'topic-28',
  title: 'Tema: Metodologías Ágiles',
  questions: [
    { 
      questionText: '¿Qué es el Manifiesto Ágil?', 
      options: ['Un documento que establece los valores y principios del desarrollo ágil de software', 'Una ley', 'Un libro', 'Un contrato'], 
      correctAnswer: 0,
      explanation: 'Publicado en 2001, define los 4 valores y 12 principios del desarrollo ágil.'
    },
    { 
      questionText: '¿Qué es Scrum?', 
      options: ['Un marco de trabajo ágil', 'Un deporte', 'Un lenguaje de programación', 'Una herramienta'], 
      correctAnswer: 0,
      explanation: 'Scrum es un marco de trabajo para la gestión de proyectos complejos.'
    },
    { 
      questionText: '¿Qué es un Sprint?', 
      options: ['Un periodo de tiempo fijo (iteración) en Scrum', 'Correr rápido', 'Una reunión', 'Un error'], 
      correctAnswer: 1,
      explanation: 'En Scrum, el trabajo se divide en iteraciones cortas llamadas Sprints.'
    },
    { 
      questionText: '¿Qué es Kanban?', 
      options: ['Un método visual para gestionar el trabajo', 'Una ciudad', 'Una comida', 'Un software'], 
      correctAnswer: 0,
      explanation: 'Kanban utiliza tableros visuales para gestionar el flujo de trabajo.'
    },
    { 
      questionText: '¿Qué es el Product Owner?', 
      options: ['El dueño del producto', 'El jefe', 'El programador', 'El cliente'], 
      correctAnswer: 0,
      explanation: 'En Scrum, es el responsable de maximizar el valor del producto.'
    },
    { 
      questionText: '¿Qué es el Scrum Master?', 
      options: ['El facilitador del equipo Scrum', 'El jefe', 'El dueño', 'El experto'], 
      correctAnswer: 0,
      explanation: 'Ayuda al equipo a entender y aplicar Scrum.'
    },
    { 
      questionText: '¿Qué es una Historia de Usuario?', 
      options: ['Una descripción breve de una funcionalidad desde la perspectiva del usuario', 'Un cuento', 'Una novela', 'Un error'], 
      correctAnswer: 0,
      explanation: 'Es una forma de capturar requisitos en metodologías ágiles.'
    },
    { 
      questionText: '¿Qué es el Daily Stand-up?', 
      options: ['Una reunión diaria breve de sincronización', 'Estar de pie todo el día', 'Un monólogo', 'Una fiesta'], 
      correctAnswer: 0,
      explanation: 'Reunión diaria de 15 minutos para planificar el día.'
    },
    { 
      questionText: '¿Qué es la Retrospectiva?', 
      options: ['Una reunión al final del Sprint para inspeccionar y adaptar el proceso', 'Mirar atrás', 'Un informe', 'Un castigo'], 
      correctAnswer: 0,
      explanation: 'Permite al equipo identificar mejoras para el siguiente Sprint.'
    },
    { 
      questionText: '¿Qué es el Backlog?', 
      options: ['La lista ordenada de todo lo que se necesita en el producto', 'La espalda', 'Un registro', 'Un archivo'], 
      correctAnswer: 0,
      explanation: 'El Product Backlog es la fuente única de requisitos.'
    }
  ]
};

export const TEST_TOPIC_29: Test = {
  id: 'topic-29',
  title: 'Tema: DevOps y CI/CD',
  questions: [
    { 
      questionText: '¿Qué es DevOps?', 
      options: ['Un conjunto de prácticas que combinan el desarrollo de software y las operaciones de TI', 'Un departamento', 'Un software', 'Un servidor'], 
      correctAnswer: 0,
      explanation: 'DevOps busca acortar el ciclo de vida del desarrollo de sistemas y proporcionar una entrega continua de alta calidad.'
    },
    { 
      questionText: '¿Qué es CI?', 
      options: ['Integración Continua', 'Inteligencia Colectiva', 'Informática Central', 'Internet Común'], 
      correctAnswer: 0,
      explanation: 'Continuous Integration es la práctica de fusionar copias de trabajo de todos los desarrolladores en una línea principal compartida varias veces al día.'
    },
    { 
      questionText: '¿Qué es CD?', 
      options: ['Entrega Continua / Despliegue Continuo', 'Disco Compacto', 'Cambio de Directorio', 'Centro de Datos'], 
      correctAnswer: 0,
      explanation: 'Continuous Delivery/Deployment automatiza la entrega de software.'
    },
    { 
      questionText: '¿Qué es Jenkins?', 
      options: ['Un servidor de automatización de código abierto', 'Un mayordomo', 'Un lenguaje', 'Un sistema operativo'], 
      correctAnswer: 0,
      explanation: 'Jenkins se utiliza para construir y probar proyectos de software de forma continua.'
    },
    { 
      questionText: '¿Qué es Ansible?', 
      options: ['Una herramienta de automatización de TI', 'Un juego', 'Un cable', 'Un servidor'], 
      correctAnswer: 0,
      explanation: 'Ansible se usa para la gestión de configuración, despliegue de aplicaciones y orquestación.'
    },
    { 
      questionText: '¿Qué es Terraform?', 
      options: ['Una herramienta de infraestructura como código', 'Un planeta', 'Un juego', 'Un sistema de archivos'], 
      correctAnswer: 0,
      explanation: 'Terraform permite construir, cambiar y versionar infraestructura de forma segura y eficiente.'
    },
    { 
      questionText: '¿Qué es un Pipeline?', 
      options: ['Una serie de pasos automatizados para llevar el software desde el control de versiones hasta producción', 'Una tubería', 'Un cable', 'Un canal'], 
      correctAnswer: 0,
      explanation: 'En CI/CD, un pipeline define el flujo de trabajo de automatización.'
    },
    { 
      questionText: '¿Qué es la Infraestructura como Código (IaC)?', 
      options: ['Gestionar y aprovisionar infraestructura a través de código en lugar de procesos manuales', 'Escribir código en servidores', 'Programar edificios', 'Códigos de barras'], 
      correctAnswer: 0,
      explanation: 'IaC permite gestionar la infraestructura mediante archivos de definición legibles por máquina.'
    },
    { 
      questionText: '¿Qué es GitOps?', 
      options: ['Un conjunto de prácticas que utiliza Git para gestionar la infraestructura y las configuraciones', 'Operar Git', 'Un comando de Git', 'Un error de Git'], 
      correctAnswer: 0,
      explanation: 'GitOps utiliza repositorios Git como fuente única de verdad para la infraestructura y las aplicaciones.'
    },
    { 
      questionText: '¿Qué es la Monitorización?', 
      options: ['El proceso de recopilar, analizar y utilizar información para rastrear el rendimiento y la salud de las aplicaciones', 'Mirar la pantalla', 'Vigilar a los empleados', 'Grabar vídeos'], 
      correctAnswer: 0,
      explanation: 'Es crucial en DevOps para asegurar la fiabilidad y el rendimiento.'
    }
  ]
};

export const TEST_TOPIC_30: Test = {
  id: 'topic-30',
  title: 'Tema: Microservicios',
  questions: [
    { 
      questionText: '¿Qué es la arquitectura de microservicios?', 
      options: ['Un enfoque para desarrollar una aplicación como un conjunto de pequeños servicios', 'Un servicio pequeño', 'Un ordenador pequeño', 'Un programa corto'], 
      correctAnswer: 0,
      explanation: 'Cada servicio se ejecuta en su propio proceso y se comunica con mecanismos ligeros (HTTP).'
    },
    { 
      questionText: '¿Qué ventaja ofrecen los microservicios?', 
      options: ['Escalabilidad, flexibilidad y despliegue independiente', 'Son más lentos', 'Son más difíciles de hacer', 'Requieren más hardware'], 
      correctAnswer: 0,
      explanation: 'Permiten escalar partes específicas de la aplicación y desplegar cambios sin afectar a todo el sistema.'
    },
    { 
      questionText: '¿Qué es un contenedor?', 
      options: ['Una unidad estándar de software que empaqueta el código y sus dependencias', 'Una caja', 'Un servidor', 'Un archivo zip'], 
      correctAnswer: 0,
      explanation: 'Los contenedores permiten que la aplicación se ejecute de forma rápida y fiable en diferentes entornos.'
    },
    { 
      questionText: '¿Qué es la orquestación de contenedores?', 
      options: ['La gestión automatizada de contenedores (despliegue, escalado, redes)', 'Tocar música', 'Crear contenedores', 'Borrar contenedores'], 
      correctAnswer: 0,
      explanation: 'Kubernetes es la herramienta de orquestación más popular.'
    },
    { 
      questionText: '¿Qué es API Gateway?', 
      options: ['Un servidor que actúa como punto de entrada único para un sistema de microservicios', 'Una puerta', 'Un router', 'Un firewall'], 
      correctAnswer: 0,
      explanation: 'Gestiona las peticiones, el enrutamiento, la autenticación y otras tareas transversales.'
    },
    { 
      questionText: '¿Qué es el acoplamiento?', 
      options: ['El grado de interdependencia entre módulos de software', 'Juntar cosas', 'Copiar código', 'Pegar código'], 
      correctAnswer: 0,
      explanation: 'En microservicios se busca un bajo acoplamiento (loose coupling).'
    },
    { 
      questionText: '¿Qué es la cohesión?', 
      options: ['El grado en que los elementos de un módulo pertenecen juntos', 'Pegamento', 'Estar unidos', 'Ser amigos'], 
      correctAnswer: 0,
      explanation: 'Se busca una alta cohesión dentro de cada microservicio.'
    },
    { 
      questionText: '¿Qué es la escalabilidad horizontal?', 
      options: ['Añadir más máquinas al conjunto de recursos', 'Hacer la máquina más grande', 'Hacer la pantalla más ancha', 'Comprar más discos'], 
      correctAnswer: 0,
      explanation: 'Es típica en arquitecturas de microservicios y nube.'
    },
    { 
      questionText: '¿Qué es la tolerancia a fallos?', 
      options: ['La capacidad de un sistema para continuar operando correctamente en caso de fallo de alguno de sus componentes', 'No tener fallos', 'Arreglar fallos', 'Ignorar fallos'], 
      correctAnswer: 0,
      explanation: 'Es esencial en sistemas distribuidos.'
    },
    { 
      questionText: '¿Qué es Service Mesh?', 
      options: ['Una capa de infraestructura dedicada para facilitar la comunicación entre servicios', 'Una red de servicios', 'Una malla de cables', 'Un servidor web'], 
      correctAnswer: 0,
      explanation: 'Gestiona el tráfico, la seguridad y la observabilidad entre microservicios (ej. Istio).'
    }
  ]
};
