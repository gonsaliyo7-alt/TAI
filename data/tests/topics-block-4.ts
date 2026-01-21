
import type { Test } from '../../types';

export const TEST_TOPIC_31: Test = {
  id: 'topic-31',
  title: 'Tema: Administración de Sistemas Operativos',
  questions: [
    {
      questionText: 'En un sistema Linux, ¿qué archivo contiene la información sobre los usuarios del sistema?',
      options: ['/etc/pass', '/etc/shadow', '/etc/passwd', '/etc/users'],
      correctAnswer: 2,
      explanation: 'El archivo /etc/passwd contiene la información básica de las cuentas de usuario. Las contraseñas cifradas suelen estar en /etc/shadow.'
    },
    {
      questionText: '¿Qué comando de Windows se utiliza para mostrar la configuración IP detallada?',
      options: ['ifconfig', 'ipconfig /all', 'ping', 'tracert'],
      correctAnswer: 1,
      explanation: 'El comando "ipconfig /all" muestra toda la información de configuración de la red, incluyendo dirección IP, máscara, puerta de enlace y DNS.'
    },
    {
      questionText: 'En Linux, ¿qué permiso octal corresponde a lectura y ejecución para el propietario?',
      options: ['5', '6', '7', '3'],
      correctAnswer: 0,
      explanation: 'Lectura es 4, Escritura es 2, Ejecución es 1. Lectura (4) + Ejecución (1) = 5.'
    },
    {
      questionText: '¿Qué es el Registro de Windows?',
      options: ['Una base de datos jerárquica que almacena la configuración del sistema', 'Un log de eventos', 'La carpeta de Archivos de Programa', 'El administrador de tareas'],
      correctAnswer: 0,
      explanation: 'El Registro es una base de datos centralizada y jerárquica utilizada en Windows para almacenar información necesaria para configurar el sistema.'
    },
    {
      questionText: '¿Qué sistema de archivos es el predeterminado en las versiones modernas de Windows?',
      options: ['FAT32', 'EXT4', 'NTFS', 'HFS+'],
      correctAnswer: 2,
      explanation: 'NTFS (New Technology File System) es el sistema de archivos estándar de Windows NT, incluyendo sus versiones posteriores como Windows 10 y 11.'
    },
    {
      questionText: '¿Qué comando se usa en Linux para cambiar el propietario de un archivo?',
      options: ['chmod', 'chown', 'chgrp', 'umask'],
      correctAnswer: 1,
      explanation: 'El comando "chown" (change owner) se utiliza para cambiar el propietario de un archivo o directorio.'
    },
    {
      questionText: '¿Qué es Active Directory?',
      options: ['Un antivirus', 'Un servicio de directorio para redes Windows', 'Un protocolo de correo', 'Un navegador web'],
      correctAnswer: 1,
      explanation: 'Active Directory (AD) es un servicio de directorio desarrollado por Microsoft para redes de dominio Windows.'
    },
    {
      questionText: 'En Linux, ¿qué hace el comando "grep"?',
      options: ['Borra archivos', 'Busca patrones de texto dentro de archivos', 'Copia archivos', 'Mueve archivos'],
      correctAnswer: 1,
      explanation: '"grep" es una utilidad de línea de comandos para buscar conjuntos de datos de texto plano que coincidan con una expresión regular.'
    },
    {
      questionText: '¿Qué es PowerShell?',
      options: ['Un programa de dibujo', 'Una interfaz de línea de comandos y lenguaje de scripting de Microsoft', 'Un juego', 'Un editor de texto'],
      correctAnswer: 1,
      explanation: 'PowerShell es un marco de automatización de tareas y gestión de configuración de Microsoft, que consiste en un shell de línea de comandos y un lenguaje de scripting.'
    },
    {
      questionText: '¿Qué es un proceso "zombie" en Unix/Linux?',
      options: ['Un proceso que consume mucha CPU', 'Un proceso que ha completado su ejecución pero aún tiene una entrada en la tabla de procesos', 'Un virus', 'Un proceso del sistema'],
      correctAnswer: 1,
      explanation: 'Un proceso zombie es aquel que ha terminado su ejecución pero su padre aún no ha leído su estado de salida, por lo que permanece en la tabla de procesos.'
    }
  ]
};

export const TEST_TOPIC_32: Test = {
  id: 'topic-32',
  title: 'Tema: Redes y Modelo OSI',
  questions: [
    {
      questionText: '¿Cuántas capas tiene el modelo OSI?',
      options: ['4', '5', '6', '7'],
      correctAnswer: 1,
      explanation: 'El modelo OSI (Open Systems Interconnection) tiene 7 capas: Física, Enlace, Red, Transporte, Sesión, Presentación y Aplicación.'
    },
    {
      questionText: '¿En qué capa del modelo OSI funciona un Router?',
      options: ['Capa 1 (Física)', 'Capa 2 (Enlace)', 'Capa 3 (Red)', 'Capa 4 (Transporte)'],
      correctAnswer: 2,
      explanation: 'Los routers operan principalmente en la Capa 3 (Red), utilizando direcciones IP para encaminar paquetes.'
    },
    {
      questionText: '¿Qué protocolo se utiliza para la resolución de direcciones MAC a partir de direcciones IP?',
      options: ['DNS', 'DHCP', 'ARP', 'RARP'],
      correctAnswer: 2,
      explanation: 'ARP (Address Resolution Protocol) se utiliza para encontrar la dirección física (MAC) asociada a una dirección IP conocida.'
    },
    {
      questionText: '¿Cuál es la PDU (Unidad de Datos de Protocolo) de la capa de Transporte?',
      options: ['Bit', 'Trama', 'Paquete', 'Segmento'],
      correctAnswer: 3,
      explanation: 'En la capa de Transporte, la unidad de datos se denomina Segmento (TCP) o Datagrama (UDP).'
    },
    {
      questionText: '¿Qué puerto utiliza por defecto el protocolo HTTPS?',
      options: ['80', '8080', '443', '21'],
      correctAnswer: 2,
      explanation: 'HTTPS (Hypertext Transfer Protocol Secure) utiliza por defecto el puerto 443.'
    },
    {
      questionText: '¿Qué es una dirección IP privada de clase C?',
      options: ['10.0.0.1', '172.16.0.1', '192.168.1.1', '8.8.8.8'],
      correctAnswer: 2,
      explanation: 'El rango 192.168.0.0 a 192.168.255.255 está reservado para redes privadas de Clase C.'
    },
    {
      questionText: '¿Qué protocolo se utiliza para enviar correos electrónicos?',
      options: ['POP3', 'IMAP', 'SMTP', 'HTTP'],
      correctAnswer: 2,
      explanation: 'SMTP (Simple Mail Transfer Protocol) es el protocolo estándar para el envío de correo electrónico.'
    },
    {
      questionText: '¿Qué dispositivo trabaja en la Capa 2 (Enlace) y utiliza direcciones MAC para filtrar tráfico?',
      options: ['Hub', 'Switch', 'Router', 'Repeater'],
      correctAnswer: 1,
      explanation: 'Un Switch (conmutador) opera en la capa de enlace de datos y utiliza direcciones MAC para enviar tramas al puerto correcto.'
    },
    {
      questionText: '¿Qué es el DNS?',
      options: ['Domain Name System', 'Data Network Service', 'Digital Name Server', 'Dynamic Network System'],
      correctAnswer: 0,
      explanation: 'DNS (Domain Name System) es el sistema que traduce nombres de dominio legibles por humanos a direcciones IP numéricas.'
    },
    {
      questionText: '¿Qué es una VLAN?',
      options: ['Una red de área local virtual', 'Una red muy larga', 'Una red de vídeo', 'Una red de voz'],
      correctAnswer: 0,
      explanation: 'Una VLAN (Virtual LAN) es una red de área local lógica que agrupa dispositivos independientemente de su ubicación física.'
    }
  ]
};

export const TEST_TOPIC_33: Test = {
  id: 'topic-33',
  title: 'Tema: Seguridad Informática',
  questions: [
    {
      questionText: '¿Qué es la tríada CIA en seguridad de la información?',
      options: ['Confidencialidad, Integridad, Disponibilidad', 'Control, Inteligencia, Autenticación', 'Certificación, Identidad, Acceso', 'Complejidad, Integración, Análisis'],
      correctAnswer: 0,
      explanation: 'La tríada CIA (Confidentiality, Integrity, Availability) son los tres pilares fundamentales de la seguridad de la información.'
    },
    {
      questionText: '¿Qué tipo de ataque intenta adivinar una contraseña probando todas las combinaciones posibles?',
      options: ['Ataque de diccionario', 'Ataque de fuerza bruta', 'Phishing', 'SQL Injection'],
      correctAnswer: 1,
      explanation: 'Un ataque de fuerza bruta consiste en probar sistemáticamente todas las posibles combinaciones de caracteres hasta encontrar la contraseña correcta.'
    },
    {
      questionText: '¿Qué es un ataque DDoS?',
      options: ['Distributed Denial of Service', 'Direct Data on Server', 'Dynamic Domain System', 'Double Data Security'],
      correctAnswer: 0,
      explanation: 'Un ataque DDoS (Denegación de Servicio Distribuido) intenta hacer que un servicio no esté disponible abrumándolo con tráfico desde múltiples fuentes.'
    },
    {
      questionText: '¿Qué es el ENS?',
      options: ['Esquema Nacional de Seguridad', 'Estándar Nacional de Software', 'Entidad Nacional de Sistemas', 'Equipo Nacional de Soporte'],
      correctAnswer: 0,
      explanation: 'El Esquema Nacional de Seguridad (ENS) establece los principios y requisitos de seguridad para la protección de la información en el sector público español.'
    },
    {
      questionText: '¿Qué es un certificado digital?',
      options: ['Un documento en papel', 'Un fichero informático que asocia unos datos de identidad a una persona física, organismo o empresa', 'Una contraseña', 'Un antivirus'],
      correctAnswer: 1,
      explanation: 'Un certificado digital es un documento electrónico que vincula una clave pública con la identidad de su propietario, firmado por una Autoridad de Certificación.'
    },
    {
      questionText: '¿Qué es el malware?',
      options: ['Hardware defectuoso', 'Software malicioso', 'Un tipo de red', 'Un sistema operativo'],
      correctAnswer: 1,
      explanation: 'Malware (malicious software) es cualquier software diseñado intencionalmente para causar daño a un ordenador, servidor, cliente o red informática.'
    },
    {
      questionText: '¿Qué es la ingeniería social en seguridad?',
      options: ['Construir edificios seguros', 'Manipular a las personas para que revelen información confidencial', 'Programar en redes sociales', 'Diseñar redes seguras'],
      correctAnswer: 1,
      explanation: 'La ingeniería social es el arte de manipular a las personas para que eludan los sistemas de seguridad o revelen información confidencial.'
    },
    {
      questionText: '¿Qué es un Firewall de capa de aplicación (WAF)?',
      options: ['Un cortafuegos que protege aplicaciones web filtrando y monitoreando el tráfico HTTP', 'Un antivirus', 'Un router', 'Un switch'],
      correctAnswer: 0,
      explanation: 'Un WAF (Web Application Firewall) protege las aplicaciones web de ataques como SQL injection, XSS, etc.'
    },
    {
      questionText: '¿Qué significa VPN?',
      options: ['Virtual Private Network', 'Very Private Network', 'Visual Public Network', 'Virtual Public Node'],
      correctAnswer: 0,
      explanation: 'VPN (Virtual Private Network) es una tecnología de red que crea una conexión segura y cifrada sobre una red menos segura, como Internet.'
    },
    {
      questionText: '¿Qué es la autenticación de doble factor (2FA)?',
      options: ['Usar dos contraseñas iguales', 'Un método que requiere dos formas diferentes de identificación para acceder', 'Entrar dos veces', 'Tener dos cuentas'],
      correctAnswer: 1,
      explanation: '2FA añade una capa extra de seguridad al requerir no solo la contraseña y el nombre de usuario, sino también algo que solo el usuario tiene (ej. código SMS).'
    }
  ]
};

export const TEST_TOPIC_34: Test = {
  id: 'topic-34',
  title: 'Tema: Internet y Servicios',
  questions: [
    {
      questionText: '¿Qué protocolo se utiliza para la transferencia de archivos?',
      options: ['HTTP', 'FTP', 'SMTP', 'DNS'],
      correctAnswer: 1,
      explanation: 'FTP (File Transfer Protocol) es el protocolo estándar para la transferencia de archivos entre cliente y servidor.'
    },
    {
      questionText: '¿Qué es la World Wide Web (WWW)?',
      options: ['Internet', 'Un sistema de distribución de documentos de hipertexto accesibles vía Internet', 'Un navegador', 'Un buscador'],
      correctAnswer: 1,
      explanation: 'La WWW es un sistema de información donde los documentos y otros recursos web se identifican mediante URLs y son accesibles a través de Internet.'
    },
    {
      questionText: '¿Qué es HTML?',
      options: ['HyperText Markup Language', 'High Tech Modern Language', 'Hyper Transfer Main Link', 'Home Tool Markup Language'],
      correctAnswer: 0,
      explanation: 'HTML es el lenguaje de marcado estándar para crear páginas web.'
    },
    {
      questionText: '¿Qué es una URL?',
      options: ['Uniform Resource Locator', 'Universal Resource Link', 'Unified Real Location', 'Ultra Rapid Link'],
      correctAnswer: 0,
      explanation: 'URL (Localizador Uniforme de Recursos) es la dirección única que identifica un recurso en Internet.'
    },
    {
      questionText: '¿Qué es una Cookie en el contexto web?',
      options: ['Una galleta', 'Un pequeño archivo de texto que un sitio web guarda en el navegador del usuario', 'Un virus', 'Un programa'],
      correctAnswer: 1,
      explanation: 'Las cookies se utilizan para recordar información sobre el usuario, como preferencias o estado de sesión.'
    },
    {
      questionText: '¿Qué es el Cloud Computing?',
      options: ['Computación en la nube', 'Computación en casa', 'Computación bajo tierra', 'Computación sin cables'],
      correctAnswer: 0,
      explanation: 'Cloud Computing es la entrega de servicios informáticos (servidores, almacenamiento, bases de datos, etc.) a través de Internet.'
    },
    {
      questionText: '¿Qué modelo de servicio en la nube ofrece infraestructura como servicio?',
      options: ['SaaS', 'PaaS', 'IaaS', 'DaaS'],
      correctAnswer: 2,
      explanation: 'IaaS (Infrastructure as a Service) proporciona recursos informáticos virtualizados a través de Internet.'
    },
    {
      questionText: '¿Qué es el IoT?',
      options: ['Internet of Things (Internet de las Cosas)', 'Input of Text', 'Internal office Technology', 'International open Trade'],
      correctAnswer: 0,
      explanation: 'IoT se refiere a la red de objetos físicos ("cosas") que llevan incorporados sensores, software y otras tecnologías para conectar e intercambiar datos.'
    },
    {
      questionText: '¿Qué es el Big Data?',
      options: ['Un disco duro grande', 'Conjuntos de datos tan grandes y complejos que requieren aplicaciones informáticas no tradicionales para su procesamiento', 'Una base de datos pequeña', 'Un virus grande'],
      correctAnswer: 1,
      explanation: 'Big Data hace referencia a cantidades masivas de datos que pueden ser analizados para obtener información valiosa.'
    },
    {
      questionText: '¿Qué es la Web 2.0?',
      options: ['La segunda versión de Internet', 'La web social y colaborativa', 'Una web más rápida', 'Una web de pago'],
      correctAnswer: 1,
      explanation: 'La Web 2.0 se refiere a los sitios web que enfatizan el contenido generado por el usuario, la usabilidad y la interoperabilidad (ej. redes sociales, wikis).'
    }
  ]
};

export const TEST_TOPIC_35: Test = {
  id: 'topic-35',
  title: 'Tema: Desarrollo de Aplicaciones',
  questions: [
    {
      questionText: '¿Qué es el ciclo de vida del software?',
      options: ['El tiempo que dura un programa', 'Las fases por las que pasa el software desde su concepción hasta su retirada', 'La vida del programador', 'El tiempo de compilación'],
      correctAnswer: 1,
      explanation: 'El ciclo de vida del desarrollo de software (SDLC) describe las etapas de planificación, creación, prueba y despliegue de un sistema de información.'
    },
    {
      questionText: '¿Qué es el control de versiones?',
      options: ['Un antivirus', 'Un sistema que registra los cambios en un archivo o conjunto de archivos a lo largo del tiempo', 'Un control parental', 'Un sistema de copias de seguridad'],
      correctAnswer: 1,
      explanation: 'El control de versiones (como Git) permite gestionar los cambios en el código fuente y coordinar el trabajo de varios desarrolladores.'
    },
    {
      questionText: '¿Qué es Git?',
      options: ['Un lenguaje de programación', 'Un sistema de control de versiones distribuido', 'Un editor de texto', 'Un sistema operativo'],
      correctAnswer: 1,
      explanation: 'Git es el sistema de control de versiones más utilizado en el desarrollo de software moderno.'
    },
    {
      questionText: '¿Qué es un Bug?',
      options: ['Un insecto', 'Un error o fallo en un programa informático', 'Una característica nueva', 'Un virus'],
      correctAnswer: 1,
      explanation: 'Un bug es un error en el software que produce un resultado incorrecto o inesperado.'
    },
    {
      questionText: '¿Qué es la programación estructurada?',
      options: ['Programar con estructuras', 'Un paradigma de programación orientado a mejorar la claridad y calidad del código', 'Programar rápido', 'Programar sin errores'],
      correctAnswer: 1,
      explanation: 'La programación estructurada utiliza subrutinas, estructuras de bloques, bucles y condicionales para mejorar la legibilidad.'
    },
    {
      questionText: '¿Qué es una API?',
      options: ['Application Programming Interface', 'Application Public Internet', 'Advanced Program Input', 'Automated Process Integration'],
      correctAnswer: 0,
      explanation: 'Una API (Interfaz de Programación de Aplicaciones) permite que dos aplicaciones se comuniquen entre sí.'
    },
    {
      questionText: '¿Qué es el código fuente?',
      options: ['El código binario', 'El conjunto de instrucciones escritas por un programador en un lenguaje de programación', 'El código de barras', 'El código postal'],
      correctAnswer: 1,
      explanation: 'El código fuente es el texto legible por humanos que compone un programa informático antes de ser compilado o interpretado.'
    },
    {
      questionText: '¿Qué es un algoritmo?',
      options: ['Un logaritmo', 'Un conjunto ordenado de operaciones sistemáticas que permite hacer un cálculo y hallar la solución de un tipo de problemas', 'Un programa', 'Un ordenador'],
      correctAnswer: 1,
      explanation: 'Un algoritmo es una secuencia de pasos lógicos para resolver un problema.'
    },
    {
      questionText: '¿Qué es la depuración (debugging)?',
      options: ['Limpiar el ordenador', 'El proceso de identificar y corregir errores en el código', 'Borrar archivos', 'Instalar programas'],
      correctAnswer: 1,
      explanation: 'La depuración es el proceso metódico de encontrar y reducir defectos o errores en un programa informático.'
    },
    {
      questionText: '¿Qué es el Open Source?',
      options: ['Software de código abierto', 'Software gratis', 'Software pirata', 'Software cerrado'],
      correctAnswer: 0,
      explanation: 'El software de código abierto es aquel cuyo código fuente se publica bajo una licencia que permite su uso, modificación y distribución.'
    }
  ]
};

export const TEST_TOPIC_36: Test = {
  id: 'topic-36',
  title: 'Tema: Bases de Datos Relacionales',
  questions: [
    {
      questionText: '¿Qué es una clave primaria (Primary Key)?',
      options: ['Una clave para abrir la base de datos', 'Un campo que identifica de forma única cada registro en una tabla', 'Una clave secreta', 'La primera columna'],
      correctAnswer: 1,
      explanation: 'La clave primaria es un identificador único para cada fila de una tabla de base de datos.'
    },
    {
      questionText: '¿Qué es una consulta (Query)?',
      options: ['Una pregunta al profesor', 'Una petición de información a la base de datos', 'Un error', 'Un dato'],
      correctAnswer: 1,
      explanation: 'Una consulta es una solicitud precisa para recuperar información de una base de datos.'
    },
    {
      questionText: '¿Qué es una tabla en una base de datos relacional?',
      options: ['Un mueble', 'Una estructura de datos organizada en filas y columnas', 'Un gráfico', 'Un informe'],
      correctAnswer: 1,
      explanation: 'Las tablas son los objetos principales donde se almacena la información en una base de datos relacional.'
    },
    {
      questionText: '¿Qué es la integridad referencial?',
      options: ['Que los datos sean honestos', 'Un sistema de reglas que garantiza que las relaciones entre registros de tablas relacionadas sean válidas', 'Que no haya virus', 'Que la base de datos sea rápida'],
      correctAnswer: 1,
      explanation: 'La integridad referencial asegura que no existan referencias a registros que no existen.'
    },
    {
      questionText: '¿Qué es un índice en una base de datos?',
      options: ['El índice del libro', 'Una estructura de datos que mejora la velocidad de las operaciones de recuperación de datos', 'Una lista de tablas', 'Un error'],
      correctAnswer: 1,
      explanation: 'Los índices se utilizan para encontrar filas con valores específicos de una columna rápidamente.'
    },
    {
      questionText: '¿Qué sentencia SQL se usa para insertar datos?',
      options: ['ADD', 'INSERT INTO', 'PUT', 'UPDATE'],
      correctAnswer: 1,
      explanation: 'INSERT INTO es la sentencia estándar SQL para añadir nuevos registros a una tabla.'
    },
    {
      questionText: '¿Qué sentencia SQL se usa para modificar datos existentes?',
      options: ['MODIFY', 'CHANGE', 'UPDATE', 'ALTER'],
      correctAnswer: 2,
      explanation: 'UPDATE es la sentencia utilizada para modificar los registros existentes en una tabla.'
    },
    {
      questionText: '¿Qué es una vista (View)?',
      options: ['Una tabla virtual basada en el conjunto de resultados de una consulta SQL', 'Una foto', 'Una ventana', 'Un informe impreso'],
      correctAnswer: 0,
      explanation: 'Una vista es una consulta almacenada que se presenta como una tabla virtual.'
    },
    {
      questionText: '¿Qué es un SGBD?',
      options: ['Sistema Gestor de Bases de Datos', 'Sistema General de Búsqueda de Datos', 'Servidor Grande de Base de Datos', 'Software Gratuito de Base de Datos'],
      correctAnswer: 0,
      explanation: 'SGBD (o DBMS en inglés) es el software que interactúa con los usuarios finales, las aplicaciones y la base de datos para capturar y analizar los datos.'
    },
    {
      questionText: '¿Qué es el modelo Entidad-Relación?',
      options: ['Un modelo de datos conceptual de alto nivel', 'Un programa', 'Una relación personal', 'Un tipo de ordenador'],
      correctAnswer: 0,
      explanation: 'El modelo E-R se utiliza para representar datos y sus relaciones en el diseño de bases de datos.'
    }
  ]
};

export const TEST_TOPIC_37: Test = {
  id: 'topic-37',
  title: 'Tema: Accesibilidad y Usabilidad',
  questions: [
    {
      questionText: '¿Qué significan las siglas WAI?',
      options: ['Web Accessibility Initiative', 'World Artificial Intelligence', 'Wide Area Internet', 'Web Application Interface'],
      correctAnswer: 0,
      explanation: 'WAI (Iniciativa de Accesibilidad Web) es una rama del W3C que desarrolla estándares de accesibilidad.'
    },
    {
      questionText: '¿Qué es la usabilidad?',
      options: ['La capacidad de un producto para ser usado por usuarios específicos para lograr objetivos específicos con efectividad, eficiencia y satisfacción', 'Que funcione rápido', 'Que sea bonito', 'Que sea barato'],
      correctAnswer: 0,
      explanation: 'Definición estándar de usabilidad (ISO 9241-11).'
    },
    {
      questionText: '¿Qué es el diseño universal?',
      options: ['Diseño para todos, sin necesidad de adaptación', 'Diseño para el universo', 'Diseño solo para expertos', 'Diseño gráfico'],
      correctAnswer: 0,
      explanation: 'El diseño universal busca crear productos y entornos que puedan ser utilizados por todas las personas, en la mayor medida posible.'
    },
    {
      questionText: '¿Qué es un lector de pantalla?',
      options: ['Un software que identifica e interpreta lo que se muestra en pantalla (para ciegos)', 'Un limpiador de monitor', 'Unas gafas', 'Una lupa'],
      correctAnswer: 0,
      explanation: 'Los lectores de pantalla son tecnologías de asistencia fundamentales para personas con discapacidad visual.'
    },
    {
      questionText: '¿Qué es el atributo "alt" en una imagen HTML?',
      options: ['Texto alternativo que describe la imagen', 'Altura de la imagen', 'Alteración de la imagen', 'Alerta'],
      correctAnswer: 0,
      explanation: 'El atributo alt proporciona una descripción textual de la imagen, esencial para la accesibilidad.'
    },
    {
      questionText: '¿Qué nivel de contraste es recomendable para la accesibilidad?',
      options: ['Alto contraste entre texto y fondo', 'Bajo contraste', 'Ningún contraste', 'Colores brillantes'],
      correctAnswer: 0,
      explanation: 'Un alto contraste facilita la lectura para personas con baja visión o dificultades visuales.'
    },
    {
      questionText: '¿Qué es la navegación por teclado?',
      options: ['Poder usar el sitio web solo con el teclado (sin ratón)', 'Escribir rápido', 'Usar un teclado musical', 'Navegar en barco'],
      correctAnswer: 0,
      explanation: 'La accesibilidad requiere que todas las funcionalidades sean operables a través del teclado.'
    },
    {
      questionText: '¿Qué es la jerarquía de encabezados (H1, H2...)?',
      options: ['Estructura lógica del contenido', 'Tamaño de letra', 'Decoración', 'Nada importante'],
      correctAnswer: 0,
      explanation: 'El uso correcto de encabezados permite a los usuarios (y lectores de pantalla) entender la estructura de la página.'
    },
    {
      questionText: '¿Qué es el W3C?',
      options: ['World Wide Web Consortium', 'World Wrestling Championship', 'Web 3 Connection', 'Wide Web Center'],
      correctAnswer: 0,
      explanation: 'El W3C es la comunidad internacional que desarrolla estándares abiertos para asegurar el crecimiento de la Web.'
    },
    {
      questionText: '¿Qué es un test de usabilidad?',
      options: ['Observar a usuarios reales intentando completar tareas en el sitio', 'Un examen escrito', 'Probar si el servidor funciona', 'Mirar el código'],
      correctAnswer: 0,
      explanation: 'Los tests de usabilidad evalúan un producto probándolo con usuarios representativos.'
    }
  ]
};

export const TEST_TOPIC_38: Test = {
  id: 'topic-38',
  title: 'Tema: Hardware y Arquitectura',
  questions: [
    {
      questionText: '¿Qué es la CPU?',
      options: ['Central Processing Unit', 'Central Power Unit', 'Computer Personal Unit', 'Control Panel Unit'],
      correctAnswer: 0,
      explanation: 'La CPU es la unidad central de procesamiento, el "cerebro" del ordenador.'
    },
    {
      questionText: '¿Qué es la memoria RAM?',
      options: ['Random Access Memory', 'Read Access Memory', 'Rapid Access Memory', 'Real Access Memory'],
      correctAnswer: 0,
      explanation: 'La RAM es la memoria de acceso aleatorio, volátil, utilizada para almacenar datos temporales.'
    },
    {
      questionText: '¿Qué es un bus de datos?',
      options: ['Un sistema de transporte público', 'Un sistema que transfiere datos entre componentes de un ordenador', 'Un cable de red', 'Un tipo de memoria'],
      correctAnswer: 1,
      explanation: 'El bus de datos es el camino de comunicación por el cual se transfieren los datos.'
    },
    {
      questionText: '¿Qué es la BIOS?',
      options: ['Basic Input/Output System', 'Binary Input Output System', 'Basic Internal Operating System', 'Bus Input Output System'],
      correctAnswer: 0,
      explanation: 'La BIOS es el firmware que inicializa el hardware durante el proceso de arranque.'
    },
    {
      questionText: '¿Qué es un periférico de entrada?',
      options: ['Un dispositivo para introducir datos (ej. teclado)', 'Un dispositivo para mostrar datos (ej. monitor)', 'Un cable', 'Un procesador'],
      correctAnswer: 0,
      explanation: 'Los periféricos de entrada permiten al usuario introducir información en el ordenador.'
    },
    {
      questionText: '¿Qué es la ALU?',
      options: ['Arithmetic Logic Unit', 'Advanced Logic Unit', 'Automatic Learning Unit', 'Access Link Unit'],
      correctAnswer: 0,
      explanation: 'La Unidad Aritmético Lógica (ALU) realiza operaciones aritméticas y lógicas en la CPU.'
    },
    {
      questionText: '¿Qué es un SSD?',
      options: ['Solid State Drive', 'Super Speed Drive', 'Solid System Disk', 'Simple Storage Device'],
      correctAnswer: 0,
      explanation: 'Un SSD es una unidad de estado sólido, un dispositivo de almacenamiento más rápido que los discos duros tradicionales.'
    },
    {
      questionText: '¿Qué es la memoria caché?',
      options: ['Una memoria rápida y pequeña integrada en la CPU', 'La memoria RAM', 'El disco duro', 'Un USB'],
      correctAnswer: 0,
      explanation: 'La caché almacena datos usados frecuentemente para un acceso rápido por parte de la CPU.'
    },
    {
      questionText: '¿Qué es la placa base (Motherboard)?',
      options: ['El circuito impreso principal que conecta todos los componentes', 'La caja del ordenador', 'El teclado', 'La pantalla'],
      correctAnswer: 0,
      explanation: 'La placa base es el componente central que permite la comunicación entre la CPU, RAM, almacenamiento y periféricos.'
    },
    {
      questionText: '¿Qué es la GPU?',
      options: ['Graphics Processing Unit', 'General Processing Unit', 'Global Power Unit', 'Gaming Processing Unit'],
      correctAnswer: 0,
      explanation: 'La GPU es la unidad de procesamiento gráfico, especializada en el procesamiento de imágenes y vídeo.'
    }
  ]
};

export const TEST_TOPIC_39: Test = {
  id: 'topic-39',
  title: 'Tema: Sistemas de Ficheros',
  questions: [
    {
      questionText: '¿Qué es un sistema de archivos?',
      options: ['El método y estructura de datos que un sistema operativo utiliza para seguir la pista de los archivos en un disco', 'Un archivador físico', 'Una carpeta', 'Un programa'],
      correctAnswer: 0,
      explanation: 'El sistema de archivos controla cómo se almacenan y recuperan los datos.'
    },
    {
      questionText: '¿Qué sistema de archivos usa Linux habitualmente?',
      options: ['EXT4', 'NTFS', 'FAT32', 'APFS'],
      correctAnswer: 0,
      explanation: 'EXT4 es el sistema de archivos journaling más común en distribuciones Linux modernas.'
    },
    {
      questionText: '¿Qué es la fragmentación de disco?',
      options: ['Cuando los archivos se dividen en pedazos dispersos por el disco', 'Cuando el disco se rompe', 'Cuando se borran archivos', 'Cuando se llena el disco'],
      correctAnswer: 0,
      explanation: 'La fragmentación ocurre cuando el sistema de archivos no puede asignar espacio contiguo para almacenar un archivo completo.'
    },
    {
      questionText: '¿Qué es un inodo en Unix/Linux?',
      options: ['Una estructura de datos que almacena información sobre un archivo (metadatos)', 'Un nodo de internet', 'Un usuario', 'Un comando'],
      correctAnswer: 0,
      explanation: 'El inodo contiene metadatos como permisos, propietario, tamaño y ubicación de los bloques de datos.'
    },
    {
      questionText: '¿Qué es FAT32?',
      options: ['Un sistema de archivos antiguo pero muy compatible', 'Un virus', 'Un programa de compresión', 'Un tipo de memoria'],
      correctAnswer: 0,
      explanation: 'FAT32 es un sistema de archivos ampliamente compatible con diferentes sistemas operativos y dispositivos.'
    },
    {
      questionText: '¿Qué es el montaje (mounting) de un sistema de archivos?',
      options: ['Hacer accesible el sistema de archivos en un punto del árbol de directorios', 'Instalar el disco físico', 'Formatear el disco', 'Copiar archivos'],
      correctAnswer: 0,
      explanation: 'Montar es el proceso de hacer que un sistema de archivos esté disponible para su uso por el sistema operativo.'
    },
    {
      questionText: '¿Qué es un enlace simbólico (symlink)?',
      options: ['Un archivo que apunta a otro archivo o directorio', 'Un virus', 'Un error de disco', 'Un archivo oculto'],
      correctAnswer: 0,
      explanation: 'Un enlace simbólico es un tipo especial de archivo que contiene una referencia a otro archivo o directorio.'
    },
    {
      questionText: '¿Qué es el journaling en un sistema de archivos?',
      options: ['Un registro de cambios que ayuda a la recuperación ante fallos', 'Un diario personal', 'Un periódico', 'Un tipo de archivo'],
      correctAnswer: 0,
      explanation: 'El journaling mantiene un registro de los cambios que se van a realizar, lo que mejora la integridad y recuperación.'
    },
    {
      questionText: '¿Qué es NTFS?',
      options: ['New Technology File System', 'New Type File System', 'Network Transfer File System', 'No Technology File System'],
      correctAnswer: 0,
      explanation: 'NTFS es el sistema de archivos propietario de Microsoft introducido con Windows NT.'
    },
    {
      questionText: '¿Qué es la ruta absoluta?',
      options: ['La ruta completa desde el directorio raíz', 'Una ruta relativa', 'Una ruta corta', 'Una ruta incorrecta'],
      correctAnswer: 0,
      explanation: 'Una ruta absoluta especifica la ubicación de un archivo o directorio comenzando desde la raíz del sistema de archivos.'
    }
  ]
};

export const TEST_TOPIC_40: Test = {
  id: 'topic-40',
  title: 'Tema: Virtualización y Nube',
  questions: [
    {
      questionText: '¿Qué es un hipervisor?',
      options: ['Software que crea y ejecuta máquinas virtuales', 'Un monitor grande', 'Un superordenador', 'Un virus'],
      correctAnswer: 0,
      explanation: 'El hipervisor (o monitor de máquina virtual) es el software que permite la virtualización.'
    },
    {
      questionText: '¿Qué es SaaS?',
      options: ['Software as a Service', 'System as a Service', 'Storage as a Service', 'Security as a Service'],
      correctAnswer: 0,
      explanation: 'SaaS es un modelo de distribución de software donde las aplicaciones se alojan en la nube y se accede a ellas vía Internet.'
    },
    {
      questionText: '¿Qué es Docker?',
      options: ['Una plataforma de contenedores', 'Un barco', 'Un sistema operativo', 'Un lenguaje'],
      correctAnswer: 0,
      explanation: 'Docker es una plataforma abierta para desarrollar, enviar y ejecutar aplicaciones dentro de contenedores.'
    },
    {
      questionText: '¿Qué es Kubernetes?',
      options: ['Un sistema de orquestación de contenedores', 'Un juego', 'Un sistema operativo', 'Una base de datos'],
      correctAnswer: 0,
      explanation: 'Kubernetes es un sistema de código abierto para automatizar el despliegue, el escalado y la gestión de aplicaciones en contenedores.'
    },
    {
      questionText: '¿Qué es una máquina virtual (VM)?',
      options: ['Una emulación de un sistema informático', 'Un robot', 'Un ordenador falso', 'Un juego de realidad virtual'],
      correctAnswer: 0,
      explanation: 'Una VM es un archivo informático que se comporta como un ordenador real.'
    },
    {
      questionText: '¿Qué es la nube híbrida?',
      options: ['Una combinación de nube pública y privada', 'Una nube que llueve', 'Una nube solo para híbridos', 'Una nube lenta'],
      correctAnswer: 0,
      explanation: 'La nube híbrida combina infraestructura local (o nube privada) con nube pública.'
    },
    {
      questionText: '¿Qué es AWS?',
      options: ['Amazon Web Services', 'Advanced Web System', 'Apple Web Service', 'Automated Web Server'],
      correctAnswer: 0,
      explanation: 'AWS es la plataforma de servicios en la nube de Amazon.'
    },
    {
      questionText: '¿Qué es Azure?',
      options: ['La plataforma de nube de Microsoft', 'Un color', 'Un sistema operativo', 'Un antivirus'],
      correctAnswer: 0,
      explanation: 'Azure es el servicio de computación en la nube creado por Microsoft.'
    },
    {
      questionText: '¿Qué es la virtualización de escritorio (VDI)?',
      options: ['Virtual Desktop Infrastructure', 'Very Direct Interface', 'Virtual Disk Image', 'Video Display Interface'],
      correctAnswer: 0,
      explanation: 'VDI permite alojar entornos de escritorio en un servidor centralizado y acceder a ellos de forma remota.'
    },
    {
      questionText: '¿Qué es un Snapshot en virtualización?',
      options: ['Una instantánea del estado de una máquina virtual en un momento dado', 'Una foto', 'Un error', 'Un virus'],
      correctAnswer: 0,
      explanation: 'Un snapshot captura el estado, datos y configuración de la máquina virtual en un momento específico.'
    }
  ]
};
