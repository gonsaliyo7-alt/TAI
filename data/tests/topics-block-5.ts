
import type { Test } from '../../types';

export const TEST_TOPIC_41: Test = {
  id: 'topic-41',
  title: 'Tema: Ingeniería del Software y Metodologías',
  questions: [
    {
      questionText: '¿Cuál de las siguientes es una metodología ágil de desarrollo de software?',
      options: ['Modelo en Cascada', 'Scrum', 'Modelo en V', 'Prototipado'],
      correctAnswer: 0,
      explanation: 'Scrum es un marco de trabajo ágil para el desarrollo de software, caracterizado por iteraciones cortas (sprints) y entregas incrementales.'
    },
    {
      questionText: 'En el ciclo de vida del software, ¿qué fase se encarga de traducir los requisitos en una representación técnica del sistema?',
      options: ['Análisis', 'Diseño', 'Codificación', 'Pruebas'],
      correctAnswer: 1,
      explanation: 'La fase de Diseño define la arquitectura, componentes, interfaces y otros datos del sistema para satisfacer los requisitos especificados.'
    },
    {
      questionText: '¿Qué es Métrica v3?',
      options: ['Una herramienta de medición de rendimiento', 'La metodología de planificación, desarrollo y mantenimiento de sistemas de información de la Administración Pública', 'Un lenguaje de programación', 'Un estándar de calidad ISO'],
      correctAnswer: 1,
      explanation: 'Métrica v3 es la metodología estándar utilizada por las Administraciones Públicas en España para la planificación, desarrollo y mantenimiento de sistemas de información.'
    },
    {
      questionText: 'En la programación orientada a objetos, ¿qué concepto permite que una clase herede atributos y métodos de otra?',
      options: ['Polimorfismo', 'Encapsulamiento', 'Herencia', 'Abstracción'],
      correctAnswer: 0,
      explanation: 'La herencia es el mecanismo por el cual una clase (subclase) adquiere las propiedades y comportamientos de otra clase (superclase).'
    },
    {
      questionText: '¿Qué diagrama UML se utiliza para representar la interacción entre objetos a lo largo del tiempo?',
      options: ['Diagrama de Clases', 'Diagrama de Secuencia', 'Diagrama de Casos de Uso', 'Diagrama de Despliegue'],
      correctAnswer: 0,
      explanation: 'El diagrama de secuencia muestra cómo los objetos interactúan entre sí y en qué orden ocurren esas interacciones.'
    },
    {
      questionText: 'En el contexto de pruebas de software, ¿qué son las pruebas unitarias?',
      options: ['Pruebas del sistema completo', 'Pruebas de aceptación del usuario', 'Pruebas de componentes individuales o módulos de código', 'Pruebas de rendimiento'],
      correctAnswer: 0,
      explanation: 'Las pruebas unitarias verifican el funcionamiento correcto de las unidades más pequeñas de código (funciones, métodos) de forma aislada.'
    },
    {
      questionText: '¿Qué patrón de diseño se utiliza para garantizar que una clase tenga una única instancia?',
      options: ['Factory', 'Singleton', 'Observer', 'Adapter'],
      correctAnswer: 0,
      explanation: 'El patrón Singleton asegura que una clase tenga una única instancia y proporciona un punto de acceso global a ella.'
    },
    {
      questionText: 'En el desarrollo web, ¿qué significa CSS?',
      options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Code Style Standard'],
      correctAnswer: 0,
      explanation: 'CSS (Cascading Style Sheets) u Hojas de Estilo en Cascada se utiliza para definir la presentación y el diseño de documentos HTML.'
    },
    {
      questionText: '¿Qué es un IDE?',
      options: ['Integrated Development Environment', 'Internet Data Exchange', 'Internal Data Entry', 'Interface Design Element'],
      correctAnswer: 0,
      explanation: 'Un IDE (Entorno de Desarrollo Integrado) es una aplicación que proporciona servicios integrales para facilitar el desarrollo de software (editor, depurador, compilador, etc.).'
    },
    {
      questionText: 'En accesibilidad web, ¿qué nivel de conformidad es el más exigente según las WCAG?',
      options: ['A', 'AA', 'AAA', 'AAAA'],
      correctAnswer: 0,
      explanation: 'El nivel AAA es el nivel más alto y exigente de conformidad en las Pautas de Accesibilidad para el Contenido Web (WCAG).'
    }
  ]
};

export const TEST_TOPIC_42: Test = {
  id: 'topic-42',
  title: 'Tema: Lenguajes de Programación',
  questions: [
    {
      questionText: '¿Java es un lenguaje de tipado...?',
      options: ['Dinámico y débil', 'Estático y fuerte', 'Dinámico y fuerte', 'Estático y débil'],
      correctAnswer: 0,
      explanation: 'Java es un lenguaje de tipado estático (se comprueba en compilación) y fuerte (no permite conversiones implícitas que pierdan información fácilmente).'
    },
    {
      questionText: '¿Qué lenguaje se ejecuta principalmente en el lado del cliente (navegador) en desarrollo web?',
      options: ['PHP', 'Java', 'JavaScript', 'Python'],
      correctAnswer: 1,
      explanation: 'JavaScript es el lenguaje estándar para la programación en el lado del cliente en los navegadores web.'
    },
    {
      questionText: 'En SQL, ¿qué comando se utiliza para recuperar datos de una base de datos?',
      options: ['GET', 'SELECT', 'FETCH', 'RETRIEVE'],
      correctAnswer: 1,
      explanation: 'La sentencia SELECT se utiliza para consultar y recuperar datos de una o más tablas en una base de datos relacional.'
    },
    {
      questionText: '¿Qué es XML?',
      options: ['eXtensible Markup Language', 'Extra Modern Language', 'X-ray Machine Language', 'External Memory Link'],
      correctAnswer: 0,
      explanation: 'XML (eXtensible Markup Language) es un lenguaje de marcado diseñado para almacenar y transportar datos, siendo legible tanto por humanos como por máquinas.'
    },
    {
      questionText: '¿Qué significa que un lenguaje sea "compilado"?',
      options: ['Que se ejecuta línea por línea mediante un intérprete', 'Que se traduce a código máquina antes de su ejecución', 'Que solo funciona en Windows', 'Que no tiene errores'],
      correctAnswer: 0,
      explanation: 'Un lenguaje compilado es aquel cuyo código fuente se traduce completamente a código máquina (o bytecode) mediante un compilador antes de ser ejecutado.'
    },
    {
      questionText: 'En HTML5, ¿qué etiqueta se utiliza para definir la navegación principal?',
      options: ['<navigation>', '<nav>', '<menu>', '<dir>'],
      correctAnswer: 0,
      explanation: 'La etiqueta <nav> se utiliza en HTML5 para definir una sección de navegación con enlaces a otras páginas o partes de la misma página.'
    },
    {
      questionText: '¿Qué es JSON?',
      options: ['JavaScript Object Notation', 'Java Source Object Name', 'Just Some Other Name', 'Joint System On Network'],
      correctAnswer: 0,
      explanation: 'JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos, fácil de leer y escribir para humanos y fácil de analizar y generar para máquinas.'
    },
    {
      questionText: '¿Qué operador lógico representa el "Y" en la mayoría de lenguajes (C, Java, JS)?',
      options: ['OR', '&&', '||', 'AND'],
      correctAnswer: 0,
      explanation: 'El operador && se utiliza comúnmente para representar la conjunción lógica AND.'
    },
    {
      questionText: '¿Qué es una variable "booleana"?',
      options: ['Una variable que almacena texto', 'Una variable que solo puede tener dos valores: verdadero o falso', 'Una variable numérica entera', 'Una variable decimal'],
      correctAnswer: 0,
      explanation: 'El tipo de dato booleano (boolean) solo puede representar dos valores: true (verdadero) o false (falso).'
    },
    {
      questionText: 'En programación, ¿qué es un "bucle infinito"?',
      options: ['Un error de sintaxis', 'Un bucle que nunca termina su ejecución porque la condición de salida nunca se cumple', 'Un programa muy largo', 'Un virus'],
      correctAnswer: 0,
      explanation: 'Un bucle infinito ocurre cuando la condición para terminar el bucle nunca se evalúa como verdadera (o falsa, según el tipo), provocando que el código se repita indefinidamente.'
    }
  ]
};

export const TEST_TOPIC_43: Test = {
  id: 'topic-43',
  title: 'Tema: Bases de Datos y Administración',
  questions: [
    {
      questionText: '¿Qué significa SQL?',
      options: ['Structured Query Language', 'Simple Question List', 'System Quality Level', 'Standard Query Link'],
      correctAnswer: 1,
      explanation: 'SQL (Structured Query Language) es el lenguaje estándar para gestionar bases de datos relacionales.'
    },
    {
      questionText: 'En una base de datos, la normalización se utiliza para:',
      options: ['Aumentar la redundancia', 'Reducir la redundancia y mejorar la integridad de los datos', 'Hacer la base de datos más lenta', 'Crear copias de seguridad'],
      correctAnswer: 1,
      explanation: 'La normalización es el proceso de organizar los datos en una base de datos para reducir la redundancia y mejorar la integridad.'
    },
    {
      questionText: '¿Qué comando SQL se usa para eliminar una tabla completa?',
      options: ['DELETE TABLE', 'REMOVE TABLE', 'DROP TABLE', 'ERASE TABLE'],
      correctAnswer: 0,
      explanation: 'El comando DROP TABLE elimina una tabla y todos sus datos de la base de datos.'
    },
    {
      questionText: '¿Qué es un "backup"?',
      options: ['Un virus', 'Una copia de seguridad de los datos', 'Un usuario administrador', 'Un error del sistema'],
      correctAnswer: 0,
      explanation: 'Un backup es una copia de seguridad de los datos originales que se realiza para poder recuperarlos en caso de pérdida.'
    },
    {
      questionText: '¿Qué es el "Directorio Activo" (Active Directory)?',
      options: ['Una carpeta de Windows', 'Un servicio de directorio de Microsoft para redes de dominio', 'Un antivirus', 'Una base de datos de Oracle'],
      correctAnswer: 0,
      explanation: 'Active Directory es un servicio de directorio desarrollado por Microsoft para redes de dominio Windows, utilizado para autenticación y autorización.'
    },
    {
      questionText: '¿Qué puerto utiliza por defecto el protocolo HTTP?',
      options: ['21', '25', '80', '443'],
      correctAnswer: 0,
      explanation: 'El puerto estándar para el protocolo HTTP (web no segura) es el 80. El 443 es para HTTPS.'
    },
    {
      questionText: '¿Qué es un "Firewall" (Cortafuegos)?',
      options: ['Un programa para quemar CDs', 'Un sistema de seguridad que controla el tráfico de red entrante y saliente', 'Un virus informático', 'Un tipo de cable'],
      correctAnswer: 0,
      explanation: 'Un firewall es un dispositivo o software de seguridad de red que monitoriza y filtra el tráfico de red basándose en reglas de seguridad.'
    },
    {
      questionText: '¿Qué significa la sigla "RAID" en almacenamiento?',
      options: ['Redundant Array of Independent Disks', 'Random Access Internal Drive', 'Read And Input Data', 'Rapid Access Internet Device'],
      correctAnswer: 0,
      explanation: 'RAID (Redundant Array of Independent Disks) es una tecnología de virtualización de almacenamiento que combina múltiples discos físicos en una unidad lógica para redundancia o rendimiento.'
    },
    {
      questionText: '¿Qué es el "Phishing"?',
      options: ['Pescar en internet', 'Una técnica de ingeniería social para obtener información confidencial de forma fraudulenta', 'Un virus que borra datos', 'Un software de diseño'],
      correctAnswer: 0,
      explanation: 'El Phishing es un método de ciberdelincuencia que intenta engañar a los usuarios para que revelen información confidencial como contraseñas o datos bancarios.'
    },
    {
      questionText: '¿Qué es una dirección IP?',
      options: ['Un código postal', 'Una etiqueta numérica que identifica a una interfaz de red', 'El nombre del ordenador', 'La marca del router'],
      correctAnswer: 0,
      explanation: 'Una dirección IP es una etiqueta numérica asignada a cada dispositivo conectado a una red informática que utiliza el protocolo IP para la comunicación.'
    }
  ]
};

export const TEST_TOPIC_44: Test = {
  id: 'topic-44',
  title: 'Tema: Lenguaje SQL',
  questions: [
    {
      questionText: '¿Qué comando SQL se utiliza para modificar la estructura de una tabla existente?',
      options: ['UPDATE TABLE', 'MODIFY TABLE', 'ALTER TABLE', 'CHANGE TABLE'],
      correctAnswer: 1,
      explanation: 'ALTER TABLE es el comando DDL (Data Definition Language) utilizado para añadir, eliminar o modificar columnas en una tabla existente.'
    },
    {
      questionText: '¿Cuál es el resultado de una operación INNER JOIN?',
      options: ['Todas las filas de ambas tablas', 'Solo las filas que tienen coincidencia en ambas tablas', 'Todas las filas de la tabla izquierda', 'Todas las filas de la tabla derecha'],
      correctAnswer: 1,
      explanation: 'INNER JOIN devuelve solo las filas cuando hay una coincidencia en ambas tablas unidas.'
    },
    {
      questionText: '¿Qué función de agregación se usa para contar el número de filas?',
      options: ['SUM()', 'TOTAL()', 'COUNT()', 'NUMBER()'],
      correctAnswer: 2,
      explanation: 'COUNT() devuelve el número de filas que coinciden con un criterio especificado.'
    },
    {
      questionText: '¿Qué cláusula se utiliza para filtrar grupos de filas creados por GROUP BY?',
      options: ['WHERE', 'HAVING', 'ORDER BY', 'FILTER'],
      correctAnswer: 1,
      explanation: 'HAVING se utiliza para filtrar grupos después de aplicar GROUP BY, mientras que WHERE filtra filas antes de agrupar.'
    },
    {
      questionText: '¿Qué comando se usa para eliminar filas de una tabla?',
      options: ['REMOVE', 'DROP', 'DELETE', 'TRUNCATE'],
      correctAnswer: 2,
      explanation: 'DELETE FROM se usa para eliminar filas específicas (o todas si no hay WHERE). TRUNCATE elimina todas las filas pero es DDL.'
    },
    {
      questionText: '¿Qué restricción (constraint) asegura que todos los valores de una columna sean diferentes?',
      options: ['NOT NULL', 'UNIQUE', 'PRIMARY KEY', 'FOREIGN KEY'],
      correctAnswer: 1,
      explanation: 'La restricción UNIQUE garantiza que todos los valores de una columna sean únicos.'
    },
    {
      questionText: '¿Qué operador se utiliza para buscar un patrón específico en una columna?',
      options: ['IN', 'BETWEEN', 'LIKE', 'EXISTS'],
      correctAnswer: 2,
      explanation: 'El operador LIKE se usa en una cláusula WHERE para buscar un patrón específico en una columna (usando % y _).'
    },
    {
      questionText: '¿Qué es una transacción en SQL?',
      options: ['Una compra', 'Una secuencia de operaciones tratadas como una sola unidad lógica', 'Una tabla', 'Un índice'],
      correctAnswer: 1,
      explanation: 'Una transacción es una unidad de trabajo que se ejecuta de forma completa o no se ejecuta en absoluto (Atomicidad).'
    },
    {
      questionText: '¿Qué comando deshace una transacción?',
      options: ['COMMIT', 'ROLLBACK', 'SAVEPOINT', 'RETURN'],
      correctAnswer: 1,
      explanation: 'ROLLBACK deshace las transacciones que no han sido guardadas (committed) en la base de datos.'
    },
    {
      questionText: '¿Qué tipo de dato SQL almacenaría una fecha y hora?',
      options: ['VARCHAR', 'INTEGER', 'DATETIME', 'BLOB'],
      correctAnswer: 2,
      explanation: 'DATETIME (o TIMESTAMP) se utiliza para almacenar una combinación de fecha y hora.'
    }
  ]
};

export const TEST_TOPIC_45: Test = {
  id: 'topic-45',
  title: 'Tema: Administración de Redes',
  questions: [
    {
      questionText: '¿Qué protocolo se utiliza para asignar direcciones IP dinámicamente?',
      options: ['DNS', 'DHCP', 'HTTP', 'FTP'],
      correctAnswer: 1,
      explanation: 'DHCP (Dynamic Host Configuration Protocol) asigna direcciones IP y otros parámetros de configuración de red a los dispositivos.'
    },
    {
      questionText: '¿Qué es una máscara de subred?',
      options: ['Una contraseña', 'Un número que distingue la parte de red y la parte de host de una dirección IP', 'Un tipo de cable', 'Un virus'],
      correctAnswer: 1,
      explanation: 'La máscara de subred (ej. 255.255.255.0) determina qué parte de la dirección IP corresponde a la red y cuál al host.'
    },
    {
      questionText: '¿Qué comando se usa para comprobar la conectividad con otro host?',
      options: ['ipconfig', 'ping', 'netstat', 'nslookup'],
      correctAnswer: 1,
      explanation: 'El comando "ping" envía paquetes ICMP Echo Request para verificar si un host es accesible.'
    },
    {
      questionText: '¿Qué es la puerta de enlace predeterminada (Gateway)?',
      options: ['Un router que conecta una red local con redes externas (como Internet)', 'Un servidor web', 'Un switch', 'Un firewall'],
      correctAnswer: 0,
      explanation: 'La puerta de enlace es el dispositivo que actúa como punto de acceso para que los dispositivos de una red se comuniquen con otras redes.'
    },
    {
      questionText: '¿Qué es NAT?',
      options: ['Network Address Translation', 'Network Access Time', 'New Advanced Technology', 'No Access Token'],
      correctAnswer: 0,
      explanation: 'NAT traduce direcciones IP privadas de una red local a una dirección IP pública para acceder a Internet.'
    },
    {
      questionText: '¿Qué puerto utiliza el protocolo SSH?',
      options: ['21', '22', '23', '80'],
      correctAnswer: 1,
      explanation: 'SSH (Secure Shell) utiliza por defecto el puerto 22 para conexiones seguras.'
    },
    {
      questionText: '¿Qué es una dirección MAC?',
      options: ['Una dirección IP', 'Un identificador único asignado a la tarjeta de red', 'Un nombre de dominio', 'Una contraseña'],
      correctAnswer: 1,
      explanation: 'La dirección MAC (Media Access Control) es un identificador físico único de 48 bits asignado por el fabricante.'
    },
    {
      questionText: '¿Qué protocolo de enrutamiento utiliza el algoritmo de vector de distancia?',
      options: ['OSPF', 'RIP', 'BGP', 'ISIS'],
      correctAnswer: 1,
      explanation: 'RIP (Routing Information Protocol) es un protocolo de vector de distancia.'
    },
    {
      questionText: '¿Qué es una DMZ?',
      options: ['Zona Desmilitarizada', 'Zona de Datos', 'Zona de Dominio', 'Zona Directa'],
      correctAnswer: 0,
      explanation: 'Una DMZ es una subred física o lógica que expone los servicios externos de una organización a una red no confiable (Internet).'
    },
    {
      questionText: '¿Qué comando muestra las conexiones de red activas?',
      options: ['ping', 'tracert', 'netstat', 'ipconfig'],
      correctAnswer: 2,
      explanation: 'netstat (network statistics) muestra conexiones de red, tablas de enrutamiento y estadísticas de interfaces.'
    }
  ]
};

export const TEST_TOPIC_46: Test = {
  id: 'topic-46',
  title: 'Tema: Seguridad en Redes',
  questions: [
    {
      questionText: '¿Qué es un ataque Man-in-the-Middle (MitM)?',
      options: ['Un virus', 'Un ataque donde el atacante intercepta y posiblemente altera la comunicación entre dos partes', 'Un ataque de fuerza bruta', 'Un firewall'],
      correctAnswer: 0,
      explanation: 'En un ataque MitM, el atacante se sitúa secretamente entre dos partes que creen comunicarse directamente entre sí.'
    },
    {
      questionText: '¿Qué protocolo proporciona comunicación segura sobre una red insegura?',
      options: ['HTTP', 'FTP', 'Telnet', 'SSH'],
      correctAnswer: 3,
      explanation: 'SSH (Secure Shell) cifra la sesión de conexión, impidiendo que alguien pueda interceptar contraseñas o datos.'
    },
    {
      questionText: '¿Qué es un IDS?',
      options: ['Sistema de Detección de Intrusos', 'Sistema de Datos Internos', 'Servidor de Identidad', 'Sistema de Dominio'],
      correctAnswer: 0,
      explanation: 'Un IDS monitoriza el tráfico de red en busca de actividad sospechosa y emite alertas.'
    },
    {
      questionText: '¿Qué es el Spoofing?',
      options: ['Suplantación de identidad', 'Encriptación', 'Compresión', 'Navegación'],
      correctAnswer: 0,
      explanation: 'El spoofing es una técnica donde un atacante se hace pasar por otra entidad falsificando datos (ej. IP spoofing).'
    },
    {
      questionText: '¿Qué es un ataque de inyección SQL?',
      options: ['Insertar código SQL malicioso en una consulta para manipular la base de datos', 'Un virus', 'Un error de red', 'Un tipo de backup'],
      correctAnswer: 0,
      explanation: 'SQL Injection aprovecha vulnerabilidades en la validación de entradas para ejecutar comandos SQL no autorizados.'
    },
    {
      questionText: '¿Qué es un Honeypot?',
      options: ['Un sistema trampa diseñado para atraer y analizar ataques', 'Un antivirus', 'Un servidor de correo', 'Una contraseña'],
      correctAnswer: 0,
      explanation: 'Un honeypot simula ser un objetivo vulnerable para distraer a los atacantes y estudiar sus métodos.'
    },
    {
      questionText: '¿Qué es el Ransomware?',
      options: ['Software que cifra los datos y pide un rescate', 'Software gratuito', 'Software de diseño', 'Software de red'],
      correctAnswer: 0,
      explanation: 'El ransomware es un tipo de malware que impide el acceso a los archivos hasta que se paga un rescate.'
    },
    {
      questionText: '¿Qué es la criptografía asimétrica?',
      options: ['Usa una sola clave', 'Usa un par de claves (pública y privada)', 'No usa claves', 'Es muy lenta'],
      correctAnswer: 1,
      explanation: 'La criptografía asimétrica utiliza una clave pública para cifrar y una clave privada para descifrar (o viceversa para firmas).'
    },
    {
      questionText: '¿Qué es un ataque de fuerza bruta?',
      options: ['Probar todas las combinaciones posibles de contraseñas', 'Golpear el servidor', 'Cortar los cables', 'Apagar la luz'],
      correctAnswer: 0,
      explanation: 'Consiste en intentar adivinar una credencial probando sistemáticamente todas las opciones posibles.'
    },
    {
      questionText: '¿Qué es un certificado SSL/TLS?',
      options: ['Un documento digital que autentica la identidad de un sitio web y cifra la información', 'Un diploma', 'Un archivo de texto', 'Un programa'],
      correctAnswer: 0,
      explanation: 'Los certificados SSL/TLS permiten conexiones seguras (HTTPS) y garantizan la identidad del servidor.'
    }
  ]
};

export const TEST_TOPIC_47: Test = {
  id: 'topic-47',
  title: 'Tema: Tecnologías Web (HTML/CSS/JS)',
  questions: [
    {
      questionText: '¿Qué etiqueta HTML se usa para definir una lista desordenada?',
      options: ['<ol>', '<ul>', '<li>', '<list>'],
      correctAnswer: 1,
      explanation: '<ul> (Unordered List) define una lista con viñetas.'
    },
    {
      questionText: '¿Qué propiedad CSS cambia el color del texto?',
      options: ['text-color', 'font-color', 'color', 'background-color'],
      correctAnswer: 2,
      explanation: 'La propiedad "color" en CSS define el color del texto del elemento.'
    },
    {
      questionText: '¿Qué es el DOM?',
      options: ['Document Object Model', 'Data Object Mode', 'Digital Ordinance Model', 'Disk Operating Method'],
      correctAnswer: 0,
      explanation: 'El DOM es una interfaz de programación para documentos HTML y XML que representa la página como un árbol de objetos.'
    },
    {
      questionText: 'En JavaScript, ¿cómo se declara una variable constante?',
      options: ['var', 'let', 'const', 'constant'],
      correctAnswer: 2,
      explanation: '"const" declara una variable de solo lectura y ámbito de bloque.'
    },
    {
      questionText: '¿Qué significa CSS?',
      options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style System', 'Colorful Style Sheets'],
      correctAnswer: 0,
      explanation: 'CSS (Hojas de Estilo en Cascada) describe cómo se mostrarán los elementos HTML.'
    },
    {
      questionText: '¿Qué evento de JavaScript se dispara al hacer clic en un elemento?',
      options: ['onchange', 'onmouseover', 'onclick', 'onload'],
      correctAnswer: 2,
      explanation: 'El evento "onclick" ocurre cuando el usuario hace clic en un elemento.'
    },
    {
      questionText: '¿Qué etiqueta HTML se usa para insertar una imagen?',
      options: ['<img>', '<image>', '<pic>', '<src>'],
      correctAnswer: 0,
      explanation: 'La etiqueta <img> se utiliza para incrustar una imagen en una página HTML.'
    },
    {
      questionText: '¿Qué es JSON?',
      options: ['JavaScript Object Notation', 'Java Source Object Name', 'Just Some Other Name', 'Joint System On Network'],
      correctAnswer: 0,
      explanation: 'JSON es un formato ligero de intercambio de datos, fácil de leer y escribir para humanos y máquinas.'
    },
    {
      questionText: '¿Qué atributo HTML especifica una URL de destino para un enlace?',
      options: ['src', 'href', 'link', 'target'],
      correctAnswer: 1,
      explanation: 'El atributo "href" (Hypertext Reference) en la etiqueta <a> especifica la URL de la página a la que va el enlace.'
    },
    {
      questionText: '¿Qué es Bootstrap?',
      options: ['Un sistema operativo', 'Un framework CSS', 'Un lenguaje de programación', 'Una base de datos'],
      correctAnswer: 1,
      explanation: 'Bootstrap es un framework front-end popular para desarrollar sitios web responsivos y móviles.'
    }
  ]
};

export const TEST_TOPIC_48: Test = {
  id: 'topic-48',
  title: 'Tema: Accesibilidad (WCAG)',
  questions: [
    {
      questionText: '¿Qué significan las siglas WCAG?',
      options: ['Web Content Accessibility Guidelines', 'World Computer Accessibility Group', 'Web Coding And Graphics', 'Wide Content Access Guide'],
      correctAnswer: 0,
      explanation: 'WCAG (Pautas de Accesibilidad para el Contenido Web) son documentos que explican cómo hacer que el contenido web sea más accesible.'
    },
    {
      questionText: '¿Cuál es uno de los cuatro principios de la accesibilidad web (POUR)?',
      options: ['Perceptible', 'Bonito', 'Rápido', 'Barato'],
      correctAnswer: 0,
      explanation: 'Los cuatro principios son: Perceptible, Operable, Comprensible (Understandable) y Robusto.'
    },
    {
      questionText: '¿Qué nivel de conformidad es el más bajo en WCAG?',
      options: ['A', 'AA', 'AAA', 'B'],
      correctAnswer: 0,
      explanation: 'El nivel A es el nivel mínimo de conformidad. AA es el estándar habitual y AAA es el más alto.'
    },
    {
      questionText: '¿Para qué sirve el texto alternativo (alt) en las imágenes?',
      options: ['Para que Google sepa qué es', 'Para usuarios con discapacidad visual que usan lectores de pantalla', 'Para decorar', 'No sirve para nada'],
      correctAnswer: 1,
      explanation: 'El texto alternativo proporciona una descripción textual de la imagen para quienes no pueden verla.'
    },
    {
      questionText: '¿Qué es WAI-ARIA?',
      options: ['Una especificación para hacer el contenido web más accesible', 'Un navegador', 'Un virus', 'Un lenguaje de programación'],
      correctAnswer: 0,
      explanation: 'WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) define formas de hacer el contenido web más accesible.'
    },
    {
      questionText: '¿Qué elemento ayuda a la navegación por teclado?',
      options: ['El ratón', 'El atributo tabindex', 'El color', 'El sonido'],
      correctAnswer: 1,
      explanation: 'El atributo tabindex especifica el orden de tabulación de un elemento.'
    },
    {
      questionText: '¿Qué contraste de color mínimo se recomienda para texto normal (AA)?',
      options: ['4.5:1', '3:1', '1:1', '10:1'],
      correctAnswer: 0,
      explanation: 'WCAG 2.0 nivel AA requiere una relación de contraste de al menos 4.5:1 para texto normal.'
    },
    {
      questionText: '¿Qué es un lector de pantalla?',
      options: ['Un software que lee el texto en voz alta', 'Una lupa', 'Un monitor', 'Un teclado'],
      correctAnswer: 0,
      explanation: 'Los lectores de pantalla (como JAWS o NVDA) convierten el texto y la estructura de la página en voz o braille.'
    },
    {
      questionText: '¿Por qué es importante usar etiquetas semánticas (header, nav, main)?',
      options: ['Para que el código sea más bonito', 'Para mejorar la accesibilidad y el SEO', 'Para que cargue más rápido', 'No es importante'],
      correctAnswer: 1,
      explanation: 'Las etiquetas semánticas proporcionan significado al contenido, ayudando a los lectores de pantalla y motores de búsqueda.'
    },
    {
      questionText: '¿Qué se debe evitar para prevenir ataques epilépticos fotosensibles?',
      options: ['Contenido que parpadea más de 3 veces por segundo', 'Colores rojos', 'Texto grande', 'Imágenes estáticas'],
      correctAnswer: 0,
      explanation: 'El contenido que parpadea rápidamente puede desencadenar convulsiones en personas con epilepsia fotosensible.'
    }
  ]
};

export const TEST_TOPIC_49: Test = {
  id: 'topic-49',
  title: 'Tema: Cloud Computing y Virtualización',
  questions: [
    {
      questionText: '¿Qué es la virtualización?',
      options: ['Crear una versión virtual de un recurso tecnológico', 'Jugar a videojuegos', 'Usar gafas VR', 'Navegar por internet'],
      correctAnswer: 0,
      explanation: 'La virtualización permite crear múltiples entornos simulados o recursos dedicados desde un solo sistema de hardware físico.'
    },
    {
      questionText: '¿Qué es un Hipervisor de Tipo 1 (Bare Metal)?',
      options: ['Se ejecuta directamente sobre el hardware', 'Se ejecuta sobre un sistema operativo', 'Es una aplicación', 'Es un virus'],
      correctAnswer: 0,
      explanation: 'Los hipervisores de Tipo 1 (como ESXi o Hyper-V) se instalan directamente en el hardware físico.'
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
      questionText: '¿Qué modelo de servicio ofrece aplicaciones a través de internet?',
      options: ['SaaS (Software as a Service)', 'IaaS', 'PaaS', 'DaaS'],
      correctAnswer: 0,
      explanation: 'SaaS (Software como Servicio) permite a los usuarios conectarse a aplicaciones basadas en la nube a través de Internet (ej. Gmail, Office 365).'
    },
    {
      questionText: '¿Qué es IaaS?',
      options: ['Infrastructure as a Service', 'Internet as a Service', 'Image as a Service', 'Input as a Service'],
      correctAnswer: 0,
      explanation: 'IaaS proporciona infraestructura informática (servidores, almacenamiento, redes) a través de Internet.'
    },
    {
      questionText: '¿Qué es una Nube Híbrida?',
      options: ['Combina nube pública y privada', 'Una nube que llueve', 'Solo nube pública', 'Solo nube privada'],
      correctAnswer: 0,
      explanation: 'La nube híbrida es un entorno informático que combina una nube pública y una nube privada permitiendo compartir datos y aplicaciones entre ellas.'
    },
    {
      questionText: '¿Qué ventaja ofrece el Cloud Computing?',
      options: ['Escalabilidad y pago por uso', 'Es más lento', 'Es más caro siempre', 'Requiere más hardware local'],
      correctAnswer: 0,
      explanation: 'La nube permite escalar recursos rápidamente según la demanda y pagar solo por lo que se utiliza.'
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
    }
  ]
};

export const TEST_TOPIC_50: Test = {
  id: 'topic-50',
  title: 'Tema: Herramientas Ofimáticas',
  questions: [
    {
      questionText: 'En una hoja de cálculo, ¿qué función suma un rango de celdas?',
      options: ['SUMA()', 'TOTAL()', 'ADD()', 'PLUS()'],
      correctAnswer: 0,
      explanation: 'La función SUMA() (o SUM() en inglés) suma los valores de las celdas seleccionadas.'
    },
    {
      questionText: '¿Qué es una tabla dinámica?',
      options: ['Una herramienta para resumir y analizar grandes cantidades de datos', 'Una tabla que se mueve', 'Una tabla de madera', 'Una base de datos'],
      correctAnswer: 0,
      explanation: 'Las tablas dinámicas permiten agrupar, comparar y analizar datos de una hoja de cálculo de forma interactiva.'
    },
    {
      questionText: 'En un procesador de textos, ¿qué es la combinación de correspondencia?',
      options: ['Crear múltiples documentos personalizados a partir de una plantilla y una lista de datos', 'Enviar emails', 'Escribir cartas', 'Pegar texto'],
      correctAnswer: 0,
      explanation: 'Permite crear un lote de documentos personalizados para cada destinatario.'
    },
    {
      questionText: '¿Qué extensión de archivo usa Microsoft Word por defecto?',
      options: ['.docx', '.xlsx', '.pptx', '.txt'],
      correctAnswer: 0,
      explanation: '.docx es el formato predeterminado de documentos de Word desde la versión 2007.'
    },
    {
      questionText: '¿Qué es LibreOffice?',
      options: ['Una suite ofimática de código abierto y gratuita', 'Un virus', 'Un juego', 'Un sistema operativo'],
      correctAnswer: 0,
      explanation: 'LibreOffice es una potente suite de oficina libre y de código abierto.'
    },
    {
      questionText: 'En Excel, ¿qué símbolo inicia una fórmula?',
      options: ['=', '+', '-', '*'],
      correctAnswer: 0,
      explanation: 'Todas las fórmulas en Excel deben comenzar con el signo igual (=).'
    },
    {
      questionText: '¿Qué es un PDF?',
      options: ['Portable Document Format', 'Personal Data File', 'Public Document File', 'Print Data Format'],
      correctAnswer: 0,
      explanation: 'PDF es un formato de archivo utilizado para presentar documentos de manera independiente del software, hardware o sistema operativo.'
    },
    {
      questionText: '¿Qué tecla se usa habitualmente para "Deshacer"?',
      options: ['Ctrl + Z', 'Ctrl + C', 'Ctrl + V', 'Ctrl + X'],
      correctAnswer: 0,
      explanation: 'Ctrl + Z es el atajo de teclado estándar para deshacer la última acción.'
    },
    {
      questionText: 'En PowerPoint, ¿qué es una transición?',
      options: ['El efecto visual al pasar de una diapositiva a otra', 'Una animación de texto', 'Un sonido', 'Un vídeo'],
      correctAnswer: 0,
      explanation: 'Las transiciones son efectos de movimiento que se producen al avanzar de una diapositiva a la siguiente.'
    },
    {
      questionText: '¿Qué es una macro?',
      options: ['Una serie de comandos e instrucciones que se agrupan como un solo comando para automatizar tareas', 'Un virus', 'Una imagen grande', 'Un tipo de letra'],
      correctAnswer: 0,
      explanation: 'Las macros permiten automatizar tareas repetitivas en aplicaciones como Excel o Word.'
    }
  ]
};
