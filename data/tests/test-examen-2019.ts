
import type { Test } from '../../types';

export const TEST_EXAMEN_2019: Test = {
    id: 'test-examen-2019',
    title: 'Examen Oficial TAI 2019 (Simulacro Nivel Avanzado)',
    questions: [
        // BLOQUE I: ADMINISTRACIÓN PÚBLICA
        {
            questionText: 'En el procedimiento administrativo común, ¿cuál es el plazo máximo para notificar la resolución de un recurso de alzada?',
            options: ['1 mes', '3 meses', '6 meses', '10 días'],
            correctAnswer: 1,
            explanation: 'Según la Ley 39/2015, el plazo máximo para dictar y notificar la resolución del recurso de alzada será de tres meses.'
        },
        {
            questionText: 'Según la Ley 40/2015, ¿cuál de estos órganos NO es considerado un órgano directivo de la AGE?',
            options: ['Subsecretario', 'Director General', 'Secretario de Estado', 'Secretario General Técnico'],
            correctAnswer: 2,
            explanation: 'El Secretario de Estado es un órgano superior, no directivo (Art. 55 Ley 40/2015).'
        },
        {
            questionText: 'En la Ley 9/2017 (LCSP), el valor estimado de un contrato de obras sujeto a regulación armonizada (SARA) debe ser igual o superior a:',
            options: ['215.000 €', '5.382.000 €', '443.000 €', '135.000 €'],
            correctAnswer: 1,
            explanation: 'El umbral actual para obras SARA es de 5.382.000 €.'
        },
        {
            questionText: '¿Cuál es la situación administrativa en la que queda un funcionario de carrera que es nombrado cargo de confianza en un Gabinete de un Ministro?',
            options: ['Servicio activo', 'Servicios especiales', 'Excedencia forzosa', 'Excedencia por interés particular'],
            correctAnswer: 1,
            explanation: 'El artículo 87 del TREBEP establece que serán declarados en servicios especiales quienes sean nombrados para puestos de personal eventual.'
        },
        {
            questionText: 'El principio de "inderogabilidad singular de los reglamentos" implica que:',
            options: [
                'Un reglamento no puede ser derogado por una ley posterior.',
                'Una resolución administrativa particular no puede vulnerar lo establecido en una disposición de carácter general.',
                'Solo el Consejo de Ministros puede derogar reglamentos.',
                'Un reglamento no puede ser modificado si no es por otro del mismo rango.'
            ],
            correctAnswer: 1,
            explanation: 'Artículo 37 de la Ley 39/2015.'
        },

        // BLOQUE II: TECNOLOGÍA BÁSICA
        {
            questionText: 'En una arquitectura de computadores, ¿qué función cumple el "Buffer de Reordenamiento" (ROB) en una ejecución fuera de orden?',
            options: [
                'Almacenar las instrucciones antes de ser decodificadas.',
                'Registrar los resultados temporales de las instrucciones para permitir el commit en orden.',
                'Gestionar la caché L1 de datos.',
                'Realizar el salto predictivo en el cauce (pipeline).'
            ],
            correctAnswer: 1,
            explanation: 'El ROB es fundamental para permitir la ejecución especulativa y asegurar que el estado del sistema se actualice siguiendo el orden lógico del programa.'
        },
        {
            questionText: '¿Cuál es el tamaño máximo de archivo soportado teóricamente por el sistema de ficheros NTFS?',
            options: ['4 GB', '16 GB', '16 TB', '256 TB'],
            correctAnswer: 3,
            explanation: 'Aunque las implementaciones varían, el límite teórico del formato NTFS es de 2^64-1 clusters (256 TB con clusters de 64KB).'
        },
        {
            questionText: 'En el estándar PCIe 4.0, ¿cuál es el ancho de banda por carril (lane) en cada dirección?',
            options: ['250 MB/s', '985 MB/s', '1969 MB/s', '3938 MB/s'],
            correctAnswer: 2,
            explanation: 'PCIe 4.0 ofrece aproximadamente 1.969 GB/s por carril (x1).'
        },
        {
            questionText: '¿Qué tipo de memoria caché suele estar integrada directamente dentro del núcleo del procesador y es privada para cada core?',
            options: ['L1 y L2', 'Solo L1', 'L2 y L3', 'Todas'],
            correctAnswer: 0,
            explanation: 'En los diseños modernos, L1 y L2 suelen ser privadas de cada núcleo, mientras que L3 es compartida por todos.'
        },
        {
            questionText: 'El protocolo IEEE 802.11ax es comercialmente conocido como:',
            options: ['Wi-Fi 5', 'Wi-Fi 6', 'Wi-Fi 6E', 'Wi-Fi 7'],
            correctAnswer: 1,
            explanation: '802.11ax corresponde al Wi-Fi 6.'
        },

        // BLOQUE III: DESARROLLO DE SISTEMAS
        {
            questionText: 'En el patrón de diseño "Strategy", ¿cuál es el objetivo principal?',
            options: [
                'Asegurar que una clase solo tenga una instancia.',
                'Definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables.',
                'Notificar cambios de estado a una lista de observadores automáticamente.',
                'Adaptar la interfaz de una clase antigua a una nueva.'
            ],
            correctAnswer: 1,
            explanation: 'Strategy permite cambiar el comportamiento de un objeto en tiempo de ejecución.'
        },
        {
            questionText: '¿Qué propiedad ACID garantiza que una transacción fallida no deje la base de datos en un estado intermedio parcial?',
            options: ['Atomicidad', 'Consistencia', 'Aislamiento (Isolation)', 'Durabilidad'],
            correctAnswer: 0,
            explanation: 'La atomicidad asegura que se realicen todas las operaciones de la transacción o ninguna.'
        },
        {
            questionText: 'En SQL, la cláusula "HAVING" se utiliza para:',
            options: [
                'Filtrar filas antes de agruparlas.',
                'Filtrar grupos de filas después de aplicar un GROUP BY.',
                'Ordenar los resultados de forma descendente.',
                'Eliminar duplicados en una tabla.'
            ],
            correctAnswer: 1,
            explanation: 'HAVING es a los grupos lo que WHERE es a las filas.'
        },
        {
            questionText: '¿Qué nivel de aislamiento en SQL Server evita las "lecturas sucias" (dirty reads) pero NO las "lecturas no repetibles"?',
            options: ['Read Uncommitted', 'Read Committed', 'Repeatable Read', 'Serializable'],
            correctAnswer: 1,
            explanation: 'Read Committed es el nivel por defecto en muchos SGBD y evita leer datos no confirmados.'
        },
        {
            questionText: '¿Cuál es la complejidad temporal media de la operación de búsqueda en una tabla Hash correctamente implementada?',
            options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
            correctAnswer: 0,
            explanation: 'Las tablas Hash ofrecen acceso directo constante en promedio.'
        },

        // BLOQUE IV: INFRAESTRUCTURA
        {
            questionText: 'En Linux, ¿qué comando se usa para cambiar la prioridad (niceness) de un proceso que ya se está ejecutando?',
            options: ['nice', 'renice', 'top', 'ps'],
            correctAnswer: 1,
            explanation: 'nice lanza un proceso con prioridad nueva, renice cambia la de uno vivo.'
        },
        {
            questionText: '¿Qué protocolo de capa de aplicación utiliza el comando traceroute en sistemas basados en Unix por defecto?',
            options: ['ICMP Echo Request', 'UDP', 'TCP SYN', 'IGMP'],
            correctAnswer: 1,
            explanation: 'A diferencia de Windows que usa ICMP, Unix/Linux usa paquetes UDP a puertos altos por defecto.'
        },
        {
            questionText: '¿Cuál es la máscara de subred abreviada (/x) para una red con 254 hosts utilizables?',
            options: ['/23', '/24', '/25', '/26'],
            correctAnswer: 1,
            explanation: '/24 permite 256 direcciones (254 útiles + red + broadcast).'
        },
        {
            questionText: '¿Qué tecnología de almacenamiento utiliza el protocolo Fibre Channel over Ethernet (FCoE) para transportar tramas FC?',
            options: ['Cables de cobre RJ45', 'Redes Ethernet convergentes de 10Gbps o superiores', 'Cables paralelos SCSI', 'Wi-Fi 6'],
            correctAnswer: 1,
            explanation: 'FCoE requiere switches Ethernet con soporte para Lossless Ethernet para funcionar correctamente.'
        },
        {
            questionText: 'En el modelo de seguridad de Active Directory, ¿cuál es el contenedor de nivel superior que define la frontera de seguridad?',
            options: ['Dominio', 'Unidad Organizativa', 'Bosque (Forest)', 'Árbol (Tree)'],
            correctAnswer: 2,
            explanation: 'El Bosque es la instancia más alta de AD y es la unidad real de seguridad y gestión única.'
        },
        {
            questionText: 'En el marco de la LCSP 9/2017, ¿cuál es el plazo de interposición de un recurso especial en materia de contratación contra una adjudicación?',
            options: ['10 días hábiles', '15 días hábiles', '1 mes', '15 días naturales'],
            correctAnswer: 1,
            explanation: 'El plazo es de 15 días hábiles a contar desde el día siguiente a la notificación.'
        },
        {
            questionText: '¿Qué protocolo se utiliza en redes SAN para mapear tramas de canal de fibra sobre redes IP de larga distancia?',
            options: ['iSCSI', 'FCIP', 'FCoE', 'InfiniBand'],
            correctAnswer: 1,
            explanation: 'FCIP (Fibre Channel over IP) permite tunelizar tramas FC a través de redes IP estándar.'
        },
        {
            questionText: 'En Oracle/PostgreSQL, ¿qué estructura de almacenamiento permite mejorar el rendimiento de consultas sobre columnas con baja cardinalidad?',
            options: ['Índice B-Tree', 'Índice Bitmap', 'Índice Hash', 'Índice Cluster'],
            correctAnswer: 1,
            explanation: 'Los índices de mapa de bits son ideales cuando hay pocos valores distintos (ej: género, estado civil).'
        },
        {
            questionText: '¿Cuál es la función del registro de control CR3 en procesadores x86-64?',
            options: [
                'Habilitar el modo protegido.',
                'Almacenar la dirección base de la tabla de páginas (PML4) del proceso actual.',
                'Gestionar las interrupciones de hardware.',
                'Controlar la caché L1.'
            ],
            correctAnswer: 1,
            explanation: 'CR3 apunta al directorio de páginas y es esencial para la gestión de memoria virtual.'
        },
        {
            questionText: 'En el desarrollo con React, ¿qué hook se utiliza para memorizar el resultado de un cálculo costoso entre renderizados?',
            options: ['useEffect', 'useCallback', 'useMemo', 'useRef'],
            correctAnswer: 2,
            explanation: 'useMemo memoriza el valor, useCallback memoriza la función.'
        },
        {
            questionText: '¿Cuál es el valor predeterminado de la "distancia administrativa" para una ruta de OSPF en routers Cisco?',
            options: ['90', '110', '115', '120'],
            correctAnswer: 1,
            explanation: 'OSPF tiene una distancia de 110 (RIP 120, EIGRP 90, Estática 1).'
        },
        {
            questionText: '¿Qué tipo de ataque de inyección consiste en enviar comandos a la base de datos a través de cabeceras HTTP como User-Agent o Referer?',
            options: ['Inyección SQL clásica', 'Inyección de segundo orden', 'Blind SQLi', 'Inyección a través de metadatos/headers'],
            correctAnswer: 3,
            explanation: 'Cualquier entrada de usuario, incluidas cabeceras, puede ser un vector de ataque si no se sanea.'
        },
        {
            questionText: 'En Kubernetes, ¿cuál es la función del componente "kube-proxy"?',
            options: [
                'Gestionar el ciclo de vida de los contenedores.',
                'Mantener las reglas de red en los nodos y permitir la comunicación con los servicios.',
                'Programar los pods en los nodos disponibles.',
                'Almacenar el estado del clúster.'
            ],
            correctAnswer: 1,
            explanation: 'kube-proxy implementa la abstracción Service y gestiona el enrutamiento de red local.'
        },
        {
            questionText: '¿Qué nivel RAID utiliza bandas a nivel de bloque y dos bloques de paridad distribuidos entre todos los discos?',
            options: ['RAID 5', 'RAID 6', 'RAID 10', 'RAID 50'],
            correctAnswer: 1,
            explanation: 'RAID 6 permite el fallo simultáneo de hasta dos discos.'
        },
        {
            questionText: 'En el protocolo Kerberos, ¿qué componente es responsable de emitir los Service Tickets (ST) tras validar el TGT?',
            options: ['AS (Authentication Service)', 'TGS (Ticket Granting Service)', 'KDC (Key Distribution Center)', 'SSO'],
            correctAnswer: 1,
            explanation: 'El TGS emite tickets para servicios específicos una vez el usuario tiene un TGT válido.'
        },
        {
            questionText: '¿Qué algoritmo de planificación de CPU puede provocar inanición (starvation) de procesos largos?',
            options: ['First-Come First-Served', 'Round Robin', 'Shortest Job First (SJF)', 'Multilevel Queue'],
            correctAnswer: 2,
            explanation: 'SJF siempre prioriza los cortos, pudiendo dejar los largos en espera indefinida.'
        },
        {
            questionText: 'En IPv6, ¿cuál es el prefijo de las direcciones de enlace local (link-local)?',
            options: ['fc00::/7', 'ff00::/8', 'fe80::/10', '2000::/3'],
            correctAnswer: 2,
            explanation: 'Las direcciones fe80:: son obligatorias en cada interfaz IPv6 y sirven para comunicación local.'
        },
        {
            questionText: '¿Qué metodología ágil se centra en eliminar el desperdicio (waste) y optimizar el flujo de valor?',
            options: ['Scrum', 'XP', 'Lean Software Development', 'Crystal'],
            correctAnswer: 2,
            explanation: 'Lean hereda los principios de fabricación de Toyota aplicados al software.'
        },
        {
            questionText: '¿Qué es una vulnerabilidad de tipo XSS reflejado?',
            options: [
                'El script malicioso se almacena en la base de datos del servidor.',
                'El script se incluye en un parámetro de la URL y el servidor lo devuelve inmediatamente en la respuesta.',
                'Se ataca directamente al hardware del cliente.',
                'Es un ataque que solo afecta a archivos PDF.'
            ],
            correctAnswer: 1,
            explanation: 'Reflejado: viaja en la petición y aparece en la respuesta del servidor.'
        },
        {
            questionText: 'En un entorno Docker, ¿cuál es la diferencia entre la instrucción COPY y ADD en el Dockerfile?',
            options: [
                'ADD permite descargar archivos de URLs y extraer archivos tar automáticamente; COPY es más simple.',
                'COPY es para carpetas y ADD para archivos sueltos.',
                'Son sinónimos.',
                'ADD es más seguro que COPY.'
            ],
            correctAnswer: 0,
            explanation: 'Se recomienda COPY a menos que se necesiten las funciones extra de ADD.'
        },
        {
            questionText: '¿Qué protocolo de correo electrónico permite la gestión de carpetas en el servidor y la sincronización entre dispositivos?',
            options: ['POP3', 'SMTP', 'IMAP4', 'MIME'],
            correctAnswer: 2,
            explanation: 'IMAP mantiene los correos en el servidor y sincroniza estados (leído/no leído).'
        },
        {
            questionText: 'En la Ley 39/2015, ¿en qué caso el silencio administrativo tiene efectos desestimatorios por regla general?',
            options: [
                'En procedimientos cuya estimación tuviera como consecuencia que se transfirieran facultades relativas al dominio público.',
                'En solicitudes de licencias de obra menor.',
                'Siempre que el interesado sea una empresa.',
                'Si la Administración no responde en 10 días.'
            ],
            correctAnswer: 0,
            explanation: 'El silencio positivo es la norma, pero casos de dominio público, responsabilidad patrimonial o impugnación de actos son excepciones claras.'
        },
        {
            questionText: '¿Qué componente de la arquitectura Java Virtual Machine (JVM) es responsable de compilar el bytecode a código máquina nativo en tiempo de ejecución?',
            options: ['Class Loader', 'Interpreter', 'JIT Compiler', 'Garbage Collector'],
            correctAnswer: 2,
            explanation: 'Just-In-Time (JIT) mejora el rendimiento compilando partes críticas del código a nativo.'
        },
        {
            questionText: '¿Cuál es el propósito del protocolo Spanning Tree (STP) en redes conmutadas?',
            options: [
                'Asignar direcciones IP dinámicamente.',
                'Evitar bucles de capa 2 en redes con topología redundante.',
                'Cifrar el tráfico de los terminales.',
                'Permitir la conexión de routers inalámbricos.'
            ],
            correctAnswer: 1,
            explanation: 'STP bloquea puertos redundantes para crear una topología lógica sin ciclos.'
        },
        {
            questionText: '¿Qué cabecera HTTP se utiliza para mitigar ataques de Clickjacking prohibiendo la carga de la página en un iframe?',
            options: [
                'Content-Type',
                'X-Frame-Options',
                'Strict-Transport-Security',
                'Referrer-Policy'
            ],
            correctAnswer: 1,
            explanation: 'Valores como DENY o SAMEORIGIN evitan que el sitio se enmarque maliciosamente.'
        },
        {
            questionText: 'En el desarrollo de software, ¿qué es la "deuda técnica"?',
            options: [
                'El dinero que se debe a los proveedores de hardware.',
                'El coste futuro de reelaborar soluciones rápidas y sucias tomadas hoy.',
                'El sueldo de los programadores.',
                'Una multa por entregar tarde un proyecto.'
            ],
            correctAnswer: 1,
            explanation: 'Representa el compromiso entre calidad y tiempo de entrega.'
        },
        {
            questionText: '¿Qué comando de PowerShell se utiliza para detener un servicio llamado "Spooler"?',
            options: ['Stop-Process Spooler', 'Stop-Service Spooler', 'Kill-Service Spooler', 'Disable-Service Spooler'],
            correctAnswer: 1,
            explanation: 'Cmdlet estándar de gestión de servicios en Windows.'
        },
        {
            questionText: '¿Cuál es el límite de dispositivos direccionables en un bus SCSI tradicional de 8 bits (Narrow SCSI)?',
            options: ['8', '16', '32', '128'],
            correctAnswer: 0,
            explanation: 'Usa IDs del 0 al 7 (el controlador suele ser el ID 7).'
        },
        {
            questionText: '¿Qué es el "Escalamiento de privilegios vertical"?',
            options: [
                'Un usuario accede a funciones de otro usuario del mismo nivel.',
                'Un usuario con pocos privilegios logra obtener permisos de administrador.',
                'Moverse de un servidor a otro dentro de la red.',
                'Aumentar la memoria RAM del servidor.'
            ],
            correctAnswer: 1,
            explanation: 'Vertical implica subir en la jerarquía de permisos (ej: de user a root).'
        },
        {
            questionText: 'En redes móviles, ¿cuál es la principal novedad técnica que introduce el Core de 5G (5GC) frente a 4G?',
            options: [
                'Mayor tamaño de la tarjeta SIM.',
                'Arquitectura basada en servicios (SBA) y virtualización nativa.',
                'Solo permite conexiones de voz.',
                'Elimina el uso de antenas.'
            ],
            correctAnswer: 1,
            explanation: '5G introduce el network slicing y una infraestructura mucho más modularizada.'
        },
        {
            questionText: '¿Qué técnica de optimización de bases de datos consiste en dividir una tabla grande en partes más pequeñas basadas en un rango de fechas o valores?',
            options: ['Normalización', 'Particionado (Partitioning)', 'Indexación', 'Vistas'],
            correctAnswer: 1,
            explanation: 'El particionado mejora la gestión y el rendimiento de tablas masivas.'
        },
        {
            questionText: 'En criptografía, ¿qué es un "Salt" (sal)?',
            options: [
                'Una clave secreta de 256 bits.',
                'Un dato aleatorio que se añade a la contraseña antes de aplicar el hash para evitar ataques de Tablas Arcoíris (Rainbow Tables).',
                'Un error de comunicación.',
                'El nombre del algoritmo de cifrado.'
            ],
            correctAnswer: 1,
            explanation: 'Asegura que dos contraseñas iguales tengan hashes distintos.'
        },
        {
            questionText: '¿Cuál es el puerto estándar que utiliza el protocolo LDAP sobre SSL/TLS (LDAPS)?',
            options: ['389', '443', '636', '993'],
            correctAnswer: 2,
            explanation: '389 es LDAP plano, 636 es LDAPS.'
        },
        {
            questionText: '¿Qué es el "Throttling" en el contexto de APIs REST o Servicios Web?',
            options: [
                'Borrar datos antiguos automáticamente.',
                'Limitar el número de peticiones que un cliente puede realizar en un tiempo determinado.',
                'Aumentar la velocidad de respuesta.',
                'Un tipo de autenticación basada en huella dactilar.'
            ],
            correctAnswer: 1,
            explanation: 'Sirve para proteger el sistema de abusos y ataques DoS.'
        },
        {
            questionText: 'En el contexto de la firma electrónica, ¿qué garantiza el Sellado de Tiempo (Timestamping)?',
            options: [
                'Que el documento fue firmado por una persona real.',
                'Que los datos existían en un momento determinado y no han sido modificados desde entonces.',
                'Que el certificado nunca caducará.',
                'La velocidad de la conexión.'
            ],
            correctAnswer: 1,
            explanation: 'Proporciona evidencia legal de la existencia de datos en un instante preciso.'
        },
        {
            questionText: '¿Qué es el "Lazy Loading" en el desarrollo web?',
            options: [
                'Cargar todos los scripts al inicio.',
                'Retrasar la carga de recursos no críticos (como imágenes fuera de pantalla) hasta que se necesiten.',
                'Un modo de depuración lento.',
                'Un error de red.'
            ],
            correctAnswer: 1,
            explanation: 'Mejora la velocidad de carga percibida inicial.'
        },
        {
            questionText: '¿Qué protocolo de capa de transporte es "no orientado a conexión" y no garantiza el orden de llegada de los paquetes?',
            options: ['TCP', 'UDP', 'SCTP', 'HTTP'],
            correctAnswer: 1,
            explanation: 'UDP es ideal para streaming y juegos por su baja latencia.'
        },
        {
            questionText: 'En Linux, ¿qué archivo contiene la configuración de los puntos de montaje de los sistemas de archivos que se cargan al arrancar?',
            options: ['/etc/passwd', '/etc/fstab', '/etc/hosts', '/etc/resolv.conf'],
            correctAnswer: 1,
            explanation: 'File Systems Table (fstab).'
        },
        {
            questionText: '¿Cuál es el principal objetivo de un Sistema de Prevención de Intrusiones (IPS)?',
            options: [
                'Solo monitorizar el tráfico.',
                'Identificar y bloquear activamente actividades sospechosas o ataques conocidos.',
                'Servir de servidor de correo.',
                'Gestionar las copias de seguridad.'
            ],
            correctAnswer: 1,
            explanation: 'A diferencia del IDS, el IPS toma medidas proactivas inmediatamente.'
        },
        {
            questionText: 'En el modelo OSI, ¿en qué capa operan los hubs (concentradores)?',
            options: ['Capa 1 (Física)', 'Capa 2 (Enlace)', 'Capa 3 (Red)', 'Capa 4 (Transporte)'],
            correctAnswer: 0,
            explanation: 'Son repetidores eléctricos simples, no entienden de direcciones MAC.'
        },
        {
            questionText: '¿Qué directiva del protocolo robots.txt indica a los buscadores que no indexen una carpeta específica?',
            options: ['Block: /carpeta', 'Disallow: /carpeta', 'NoIndex: /carpeta', 'Private: /carpeta'],
            correctAnswer: 1,
            explanation: 'Disallow es el estándar reconocido.'
        },
        {
            questionText: 'En la Ley del Procedimiento Administrativo Común, ¿qué plazo tiene el interesado para subsanar una solicitud incompleta?',
            options: ['5 días', '10 días', '15 días', '1 mes'],
            correctAnswer: 1,
            explanation: 'Artículo 68 de la Ley 39/2015, ampliable en cinco días adicionales en ciertos casos.'
        },
        {
            questionText: '¿Qué herramienta se utiliza comúnmente en entornos Java para la gestión de dependencias y la automatización de la construcción (build)?',
            options: ['npm', 'pip', 'Maven', 'Composer'],
            correctAnswer: 2,
            explanation: 'Maven (y Gradle) son los estándares en el ecosistema Java.'
        },
        {
            questionText: '¿Cuál es el rango de puertos "bien conocidos" (Well-Known Ports) según la IANA?',
            options: ['0 - 1023', '1024 - 49151', '49152 - 65535', '0 - 255'],
            correctAnswer: 0,
            explanation: 'Reservados para servicios del sistema y protocolos estándar.'
        },
        {
            questionText: 'En CSS, ¿qué propiedad se usa para crear un layout flexible y dinámico alineando elementos en filas o columnas?',
            options: ['display: block', 'display: grid', 'display: flex', 'float: left'],
            correctAnswer: 2,
            explanation: 'Flexbox es ideal para diseños unidimensionales.'
        },
        {
            questionText: '¿Qué técnica criptográfica permite a dos partes generar una clave compartida a través de un canal inseguro sin haberla intercambiado previamente?',
            options: ['RSA', 'Diffie-Hellman', 'SHA-256', 'AES'],
            correctAnswer: 1,
            explanation: 'Diffie-Hellman es el pilar del intercambio de claves moderno.'
        },
        {
            questionText: '¿Qué componente de la CPU se encarga de realizar operaciones aritméticas y lógicas?',
            options: ['CU (Control Unit)', 'ALU (Arithmetic Logic Unit)', 'Registro de instrucción', 'Caché'],
            correctAnswer: 1,
            explanation: 'La ALU es el "músculo" computacional.'
        },
        {
            questionText: 'En una red IPv4 con máscara 255.255.255.224, ¿cuántos hosts útiles hay por subred?',
            options: ['32', '30', '16', '14'],
            correctAnswer: 1,
            explanation: '256-224 = 32. Menos red y broadcast = 30.'
        },
        {
            questionText: '¿Qué tipo de cable utiliza conectores LC, SC o ST?',
            options: ['Par trenzado (UTP)', 'Coaxial', 'Fibra Óptica', 'Serie'],
            correctAnswer: 2,
            explanation: 'Son los conectores típicos de fibra monomodo y multimodo.'
        },
        {
            questionText: '¿Qué comando de Linux muestra las conexiones de red activas y los puertos abiertos?',
            options: ['ifconfig', 'route', 'netstat', 'ping'],
            correctAnswer: 2,
            explanation: 'netstat (o el más moderno ss) muestra estadísticas de red.'
        },
        {
            questionText: '¿Qué es el "Pharmaing"?',
            options: [
                'Enviar correos falsos.',
                'Redirigir a un usuario de un sitio web legítimo a uno falso mediante la manipulación de archivos hosts o envenenamiento DNS.',
                'Robar contraseñas de redes sociales.',
                'Un virus de teléfono móvil.'
            ],
            correctAnswer: 1,
            explanation: 'A diferencia del phishing, no requiere que el usuario haga clic en un enlace falso, sino que manipula el sistema de nombres.'
        },
        {
            questionText: '¿En qué año se aprobó el Reglamento General de Protección de Datos (RGPD) de la UE?',
            options: ['2014', '2016', '2018', '2020'],
            correctAnswer: 1,
            explanation: 'Aprobado en 2016, entró en vigor de forma obligatoria en mayo de 2018.'
        },
        {
            questionText: '¿Qué es un "Zero-Day Exploit"?',
            options: [
                'Un ataque que dura solo un día.',
                'Un ataque que aprovecha una vulnerabilidad desconocida para el fabricante y para la que no existe parche.',
                'Un virus muy antiguo.',
                'Un error de configuración del firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Día cero significa que el fabricante tiene 0 días para arreglarlo antes de que sea explotado.'
        },
        {
            questionText: '¿Cuál es la función del registro MX en una zona DNS?',
            options: [
                'Definir la dirección IP de un servidor.',
                'Especificar el servidor de correo responsable de recibir mensajes para ese dominio.',
                'Crear un alias para un nombre de dominio.',
                'Asignar una dirección IPv6.'
            ],
            correctAnswer: 1,
            explanation: 'Mail Exchanger (MX).'
        },
        {
            questionText: '¿Qué lenguaje se utiliza principalmente para realizar consultas y manipular bases de datos relacionales?',
            options: ['HTML', 'Java', 'SQL', 'C++'],
            correctAnswer: 2,
            explanation: 'Structured Query Language.'
        },

        // (Generando más preguntas difíciles...)
        {
            questionText: '¿Qué algoritmo de cifrado asimétrico se basa en la dificultad de factorizar números enteros grandes?',
            options: ['AES', 'Diffie-Hellman', 'DSA', 'RSA'],
            correctAnswer: 3,
            explanation: 'RSA basa su seguridad en el problema de la factorización de números primos grandes.'
        },
        {
            questionText: 'En la norma WCAG 2.1, el criterio de éxito 1.4.3 (Contraste mínimo) para nivel AA requiere una relación de contraste para texto normal de al menos:',
            options: ['3:1', '4.5:1', '7:1', '10:1'],
            correctAnswer: 1,
            explanation: '4.5:1 para texto normal, 3:1 para texto grande (18pt o 14pt negrita).'
        },
        {
            questionText: '¿Qué directiva de configuración de Apache permite deshabilitar el listado de archivos en un directorio si no hay un index.html?',
            options: ['Options -Indexes', 'DirectoryIndex none', 'Order Deny,Allow', 'AllowOverride None'],
            correctAnswer: 0,
            explanation: 'Añadir el signo menos a la opción Indexes evita que se generen listados de archivos automáticos.'
        },
        {
            questionText: 'En Virtualización, ¿qué es la "página fantasma" (Ballooning)?',
            options: [
                'Una técnica para que el hipervisor recupere memoria no utilizada por el SO invitado.',
                'Un error de falta de memoria.',
                'La memoria caché de disco.',
                'Un tipo de red virtual.'
            ],
            correctAnswer: 0,
            explanation: 'El driver de globo solicita memoria al SO invitado para liberarla para el hipervisor.'
        },
        {
            questionText: '¿Cuál es la dirección de loopback estándar en IPv6?',
            options: ['127.0.0.1', '::1', 'fe80::1', '::'],
            correctAnswer: 1,
            explanation: '::1 es el equivalente a 127.0.0.1 en IPv4.'
        },
        {
            questionText: 'En una base de datos relacional, ¿qué asegura la Tercera Forma Normal (3NF)?',
            options: [
                'Que no haya dependencias parciales.',
                'Que no haya dependencias transitivas entre atributos no clave.',
                'Que no haya grupos repetitivos.',
                'Que haya una clave primaria.'
            ],
            correctAnswer: 1,
            explanation: '3NF requiere estar en 2NF y eliminar dependencias de atributos que dependen de otros atributos no clave.'
        },
        {
            questionText: '¿Qué puerto TCP utiliza por defecto el protocolo BGP (Border Gateway Protocol)?',
            options: ['80', '110', '179', '443'],
            correctAnswer: 2,
            explanation: 'BGP utiliza el puerto 179.'
        },
        {
            questionText: 'En Java, ¿cuál es la diferencia entre "==" y ".equals()" al comparar objetos?',
            options: [
                '"==" compara referencias de memoria, ".equals()" compara contenido lógico.',
                'Son idénticos.',
                '".equals()" es solo para números.',
                '"==" es más lento.'
            ],
            correctAnswer: 0,
            explanation: '"==" verifica si apuntan al mismo sitio, ".equals()" (si se sobreescribe) mira el valor real.'
        },
        {
            questionText: '¿Qué comando de GIT permite traer los cambios de un repositorio remoto sin fusionarlos automáticamente?',
            options: ['git pull', 'git fetch', 'git push', 'git update'],
            correctAnswer: 1,
            explanation: 'fetch descarga la información, pull descarga y fusiona (fetch + merge).'
        },
        {
            questionText: 'En el Protocolo de Resolución de Direcciones (ARP), ¿qué tipo de mensajes se envían por broadcast?',
            options: ['ARP Reply', 'ARP Request', 'Ambos', 'Ninguno'],
            correctAnswer: 1,
            explanation: 'La petición (Who has?) se hace a todos, la respuesta es unicast dirigida al solicitante.'
        }
    ]
};
