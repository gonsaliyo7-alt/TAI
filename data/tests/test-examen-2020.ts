
import type { Test } from '../../types';

export const TEST_EXAMEN_2020: Test = {
    id: 'test-examen-2020',
    title: 'Examen Oficial TAI 2020 (Simulacro Nivel Avanzado)',
    questions: [
        // BLOQUE I: ADMINISTRACIÓN PÚBLICA Y LEGISLACIÓN
        {
            questionText: 'Según la Ley 19/2013 de transparencia, ¿cuál es el plazo general para resolver las solicitudes de acceso a la información pública?',
            options: ['10 días', '15 días', '1 mes', '2 meses'],
            correctAnswer: 2,
            explanation: 'El plazo es de un mes, ampliable por otro mes en razones de volumen o complejidad.'
        },
        {
            questionText: 'En el marco de la LOPDGDD 3/2018, ¿a partir de qué edad se considera lícito el tratamiento de datos basado en el consentimiento del menor en España?',
            options: ['12 años', '13 años', '14 años', '16 años'],
            correctAnswer: 2,
            explanation: 'En España el umbral es de 14 años (Art. 7 LOPDGDD).'
        },
        {
            questionText: '¿Qué tipo de recurso cabe contra los actos de trámite que decidan directa o indirectamente el fondo del asunto?',
            options: ['Solo recurso de queja', 'Recurso de alzada o reposición (según agote o no la vía)', 'Ninguno, solo contra la resolución final', 'Recurso extraordinario de revisión'],
            correctAnswer: 1,
            explanation: 'Los actos de trámite cualificados son impugnables de forma independiente.'
        },
        {
            questionText: 'En la Ley del Gobierno, ¿qué órgano tiene la competencia para crear, modificar y suprimir las Subsecretarías?',
            options: ['El Presidente del Gobierno', 'El Consejo de Ministros, a propuesta del Ministro respectivo', 'El Rey', 'Las Cortes Generales'],
            correctAnswer: 1,
            explanation: 'Se realiza mediante Real Decreto del Consejo de Ministros.'
        },
        {
            questionText: '¿Cuál de los siguientes no es un principio de la potestad sancionadora según la Ley 40/2015?',
            options: ['Irretroactividad', 'Tipicidad', 'Proporcionalidad', 'Jerarquía'],
            correctAnswer: 3,
            explanation: 'La jerarquía es un principio organizativo, no de la potestad sancionadora.'
        },

        // BLOQUE II: HARDWARE Y SISTEMAS
        {
            questionText: '¿Qué algoritmo de planificación de disco intenta minimizar el tiempo de búsqueda moviendo el cabezal hacia el extremo y volviendo al inicio (circular)?',
            options: ['SSTF', 'SCAN', 'C-LOOK', 'Round Robin'],
            correctAnswer: 2,
            explanation: 'C-LOOK es una variante de C-SCAN que solo llega hasta el último requerimiento en cada dirección.'
        },
        {
            questionText: 'En una arquitectura NUMA (Non-Uniform Memory Access), ¿qué ocurre con el rendimiento?',
            options: [
                'Es constante para todos los procesadores.',
                'El tiempo de acceso a memoria depende de la ubicación relativa del procesador respecto a la memoria.',
                'La memoria es compartida de forma centralizada.',
                'Solo existe en sistemas monoprocesador.'
            ],
            correctAnswer: 1,
            explanation: 'NUMA optimiza el acceso a la memoria local de cada socket/nodo.'
        },
        {
            questionText: '¿Cuál es la función del bit de "dirty" (sucio) en una tabla de páginas?',
            options: [
                'Indicar que la página ha sido modificada y debe escribirse en disco antes de ser reemplazada.',
                'Indicar que la página contiene un virus.',
                'Bloquear el acceso de lectura.',
                'Indicar que la página ya no se usa.'
            ],
            correctAnswer: 0,
            explanation: 'Optimiza el intercambio de páginas al evitar escrituras innecesarias en el swap.'
        },
        {
            questionText: 'En el protocolo de coherencia de caché MESI, ¿qué significa el estado "E" (Exclusive)?',
            options: [
                'La línea de caché está en varias cachés y no ha sido modificada.',
                'La línea de caché solo está en esta caché y no ha sido modificada.',
                'La línea ha sido modificada y es la única copia correcta.',
                'La línea es inválida.'
            ],
            correctAnswer: 1,
            explanation: 'MESI: Modified, Exclusive, Shared, Invalid.'
        },
        {
            questionText: '¿Qué tipo de almacenamiento se caracteriza por enviar bloques directamente a través de una red dedicada de alta velocidad (normalmente FC)?',
            options: ['DAS', 'NAS', 'SAN', 'Cloud'],
            correctAnswer: 2,
            explanation: 'Storage Area Network (SAN).'
        },

        // BLOQUE III: DESARROLLO Y BASES DE DATOS
        {
            questionText: '¿Qué patrón de diseño se utiliza para añadir responsabilidades a un objeto de forma dinámica sin usar la herencia?',
            options: ['Proxy', 'Decorator', 'Composite', 'Adapter'],
            correctAnswer: 1,
            explanation: 'El decorador "envuelve" al objeto original para extender su funcionalidad.'
        },
        {
            questionText: 'En una prueba de software, ¿cuál es la diferencia principal entre un "Stub" y un "Mock"?',
            options: [
                'El Stub solo devuelve valores predefinidos; el Mock verifica el comportamiento y las interacciones.',
                'Son exactamente lo mismo.',
                'El Mock es para bases de datos y el Stub para interfaces.',
                'Los Stubs son para C++ y los Mocks para Java.'
            ],
            correctAnswer: 0,
            explanation: 'Mocks se usan para testear interacciones (verificar que se llamó a un método), stubs para simular datos de entrada.'
        },
        {
            questionText: 'En el lenguaje SQL, ¿qué tipo de JOIN devuelve todas las filas de la tabla izquierda y las filas coincidentes de la tabla derecha?',
            options: ['INNER JOIN', 'FULL OUTER JOIN', 'LEFT JOIN', 'RIGHT JOIN'],
            correctAnswer: 2,
            explanation: 'Si no hay coincidencia, devuelve NULL en las columnas de la derecha.'
        },
        {
            questionText: '¿Qué técnica de ingeniería de software permite transformar el código para mejorar su estructura interna sin cambiar su comportamiento externo?',
            options: ['Compilación', 'Refactorización (Refactoring)', 'Depuración', 'Testing'],
            correctAnswer: 1,
            explanation: 'Refactoring reduce la deuda técnica y mejora la legibilidad.'
        },
        {
            questionText: 'En una expresión regular, ¿qué cuantificador indica "cero o una coincidencia"?',
            options: ['*', '+', '?', '{1,}'],
            correctAnswer: 2,
            explanation: '?: opcional. *: 0 o más. +: 1 o más.'
        },

        // BLOQUE IV: REDES Y SEGURIDAD
        {
            questionText: '¿Qué capa del modelo OSI se encarga del control del diálogo y la sincronización del intercambio de datos?',
            options: ['Transporte', 'Sesión', 'Presentación', 'Aplicación'],
            correctAnswer: 1,
            explanation: 'Capa 5: Sesión.'
        },
        {
            questionText: '¿Cuál es el propósito del protocolo SNMP (Simple Network Management Protocol)?',
            options: [
                'Asignar nombres de dominio.',
                'Monitorizar y gestionar dispositivos de red desde una consola central.',
                'Transferir archivos de forma segura.',
                'Sincronizar la hora de los equipos.'
            ],
            correctAnswer: 1,
            explanation: 'SNMP permite recoger métricas y configurar switches, routers, etc.'
        },
        {
            questionText: '¿Qué algoritmo de cifrado utiliza una clave de 128, 192 o 256 bits y es el estándar de cifrado del gobierno de EE.UU.?',
            options: ['DES', '3DES', 'AES', 'RC4'],
            correctAnswer: 2,
            explanation: 'Advanced Encryption Standard (AES) sustituyó a DES.'
        },
        {
            questionText: 'Un ataque de "Envenenamiento de Caché DNS" (DNS Cache Poisoning) tiene como objetivo:',
            options: [
                'Bloquear el acceso a Internet.',
                'Hacer que el servidor DNS devuelva una dirección IP falsa para un dominio legítimo.',
                'Robar el ancho de banda.',
                'Borrar los nombres de dominio de la base de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Deriva el tráfico a servidores controlados por el atacante.'
        },
        {
            questionText: '¿Qué principio de la contratación pública prohíbe el fraccionamiento del contrato con el fin de eludir la aplicación de procedimientos de adjudicación más estrictos?',
            options: ['Principio de anualidad', 'Principio de integridad del objeto del contrato', 'Principio de publicidad', 'Principio de igualdad'],
            correctAnswer: 1,
            explanation: 'El artículo 99 de la LCSP establece que el objeto del contrato debe ser completo y no puede fraccionarse para eludir umbrales.'
        },
        {
            questionText: 'En el contexto de la administración electrónica, ¿qué es la Red SARA?',
            options: [
                'Una red social para funcionarios.',
                'Un conjunto de servicios e infraestructuras de comunicaciones para la interconexión de las Administraciones Públicas españolas.',
                'Un sistema de almacenamiento en la nube.',
                'Una base de datos de resoluciones judiciales.'
            ],
            correctAnswer: 1,
            explanation: 'SARA: Sistema de Aplicaciones y Redes para las Administraciones.'
        },
        {
            questionText: '¿Cuál es el plazo de prescripción de las infracciones muy graves según el TREBEP?',
            options: ['1 año', '2 años', '3 años', '5 años'],
            correctAnswer: 2,
            explanation: 'Las muy graves prescriben a los 3 años; las graves a los 2 años; y las leves a los 6 meses (Art. 97 TREBEP).'
        },
        {
            questionText: 'En el modelo ACID de bases de datos, ¿qué garantiza la "Consistencia"?',
            options: [
                'Que los datos se guarden en varios discos.',
                'Que una transacción solo mueva la base de datos de un estado válido a otro estado válido, cumpliendo todas las reglas de integridad.',
                'Que el sistema nunca se apague.',
                'Que se puedan leer los datos mientras se escriben.'
            ],
            correctAnswer: 1,
            explanation: 'Evita que se violen claves foráneas, restricciones de tipo, etc.'
        },
        {
            questionText: '¿Qué es el "Escrutinio" (Snooping) en el contexto de la coherencia de caché?',
            options: [
                'Un tipo de virus.',
                'Un protocolo donde los controladores de caché monitorizan el bus de memoria para detectar accesos a líneas que ellos tienen.',
                'Borrar la caché cada 10 minutos.',
                'Un modo de depuración del procesador.'
            ],
            correctAnswer: 1,
            explanation: 'Permite que una caché invalide o actualice sus copias cuando otra CPU escribe en ellas.'
        },
        {
            questionText: '¿Cuál es la diferencia entre un proceso y un hilo (thread)?',
            options: [
                'Los procesos comparten memoria, los hilos no.',
                'Los hilos comparten el espacio de direcciones del proceso padre; los procesos tienen su propio segmento de memoria independiente.',
                'No hay diferencia.',
                'Los procesos solo existen en Linux.'
            ],
            correctAnswer: 1,
            explanation: 'Los hilos son unidades más ligeras de ejecución dentro de un mismo proceso.'
        },
        {
            questionText: 'En Java, ¿qué es el Garbage Collector?',
            options: [
                'Un programa que borra archivos de log.',
                'Un proceso automático que libera la memoria ocupada por objetos que ya no tienen ninguna referencia activa.',
                'Un depurador.',
                'Una herramienta de optimización de disco.'
            ],
            correctAnswer: 1,
            explanation: 'Evita fugas de memoria (memory leaks) gestionando el heap automáticamente.'
        },
        {
            questionText: '¿Qué significan las siglas SOLID en el desarrollo de software orientado a objetos?',
            options: [
                'Cinco principios de diseño para hacer el software más comprensible, flexible y mantenible.',
                'Una librería para conectar con bases de datos.',
                'Un lenguaje de programación antiguo.',
                'Un tipo de servidor seguro.'
            ],
            correctAnswer: 0,
            explanation: 'Single responsibility, Open/closed, Liskov substitution, Interface segregation y Dependency inversion.'
        },
        {
            questionText: '¿Qué es un "Deadlock" (Interbloqueo)?',
            options: [
                'Un error de sintaxis.',
                'Una situación donde dos o más procesos esperan indefinidamente por recursos que están siendo usados por los otros.',
                'Un cierre repentino del sistema.',
                'Un ataque de denegación de servicio.'
            ],
            correctAnswer: 1,
            explanation: 'Requiere 4 condiciones: exclusión mutua, retención y espera, no expropiación y espera circular.'
        },
        {
            questionText: 'En CSS, ¿qué es la "Especificidad"?',
            options: [
                'Lo rápido que carga el estilo.',
                'El sistema por el cual el navegador decide qué reglas CSS se aplican a un elemento si hay conflictos.',
                'El tamaño de la fuente.',
                'Un tipo de selector nuevo.'
            ],
            correctAnswer: 1,
            explanation: 'Se calcula basándose en el tipo de selector (ID > Clase > Elemento).'
        },
        {
            questionText: '¿Qué protocolo de red se utiliza para la transferencia de archivos de forma interactiva y bidireccional, utilizando los puertos 20 y 21?',
            options: ['HTTP', 'SMTP', 'FTP', 'Telnet'],
            correctAnswer: 2,
            explanation: 'Puerto 21 para control y 20 para datos (en modo activo).'
        },
        {
            questionText: '¿Qué es el "Envenenamiento de ARP" (ARP Spoofing)?',
            options: [
                'Un ataque que inyecta entradas falsas en la tabla ARP para asociar la MAC del atacante a la IP de la víctima (ej: el gateway).',
                'Borrar las direcciones IP de la red.',
                'Un fallo eléctrico en el switch.',
                'Un virus de correo.'
            ],
            correctAnswer: 0,
            explanation: 'Permite realizar ataques de Hombre en el Medio (MitM) en redes locales.'
        },
        {
            questionText: '¿Cuál es el propósito del protocolo HSTS (HTTP Strict Transport Security)?',
            options: [
                'Aumentar la velocidad de carga.',
                'Obligar al navegador a comunicarse siempre a través de HTTPS con un servidor determinado.',
                'Bloquear anuncios.',
                'Cifrar el nombre de usuario.'
            ],
            correctAnswer: 1,
            explanation: 'Mitiga ataques de degradación de protocolo (downgrade attacks).'
        },
        {
            questionText: '¿Qué es un clúster de bases de datos?',
            options: [
                'Un grupo de varios servidores de bases de datos que trabajan juntos para proporcionar alta disponibilidad o escalabilidad.',
                'Una tabla muy grande.',
                'Un tipo de consulta compleja.',
                'Un índice especial.'
            ],
            correctAnswer: 0,
            explanation: 'Puede ser activo-activo o activo-pasivo.'
        },
        {
            questionText: 'En el desarrollo web, ¿qué es un "Service Worker"?',
            options: [
                'Un empleado de correos.',
                'Un script que el navegador ejecuta en segundo plano, permitiendo funciones como notificaciones push y uso offline.',
                'Un tipo de base de datos.',
                'Un servidor de archivos.'
            ],
            correctAnswer: 1,
            explanation: 'Es la base de las Progressive Web Apps (PWA).'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo SMTP?',
            options: ['21', '25', '80', '110'],
            correctAnswer: 1,
            explanation: 'Para la transferencia de correo entre servidores.'
        },
        {
            questionText: '¿Qué técnica de seguridad en redes Wi-Fi utiliza el protocolo SAE (Simultaneous Authentication of Equals) para evitar ataques de fuerza bruta offline?',
            options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
            correctAnswer: 3,
            explanation: 'WPA3 mejora drásticamente la seguridad del handshake frente a ataques de diccionario.'
        },
        {
            questionText: '¿Qué es "Salting" en el almacenamiento de contraseñas?',
            options: [
                'Borrar la contraseña después de un año.',
                'Añadir una cadena aleatoria única a la contraseña antes de aplicar el hash para dificultar ataques con tablas precomputadas.',
                'Un error de red.',
                'Un tipo de cifrado asimétrico.'
            ],
            correctAnswer: 1,
            explanation: 'Asegura que dos usuarios con la misma clave tengan un hash guardado diferente.'
        },
        {
            questionText: '¿Qué significan las siglas REST en el contexto de APIs?',
            options: [
                'Representational State Transfer',
                'Remote Execution System Tool',
                'Real State Transfer',
                'Random External Service Type'
            ],
            correctAnswer: 0,
            explanation: 'Estilo de arquitectura basado en recursos e interfaces uniformes (normalmente HTTP).'
        },
        {
            questionText: 'En un sistema de archivos Linux (ej: ext4), ¿qué información NO contiene un inodo?',
            options: [
                'El nombre del archivo.',
                'Los permisos de acceso.',
                'La ubicación de los bloques de datos en el disco.',
                'El tamaño del archivo.'
            ],
            correctAnswer: 0,
            explanation: 'El nombre se guarda en la estructura del directorio, no en el inodo.'
        },
        {
            questionText: '¿Qué es la "Virtualización nivel de Sistema Operativo" (Contenedores)?',
            options: [
                'Instalar varios sistemas operativos completos.',
                'Compartir el kernel del SO anfitrión permitiendo aislar procesos con sus propios recursos.',
                'Comprar más servidores.',
                'Un tipo de emulador de hardware.'
            ],
            correctAnswer: 1,
            explanation: 'Tecnología base de Docker.'
        },
        {
            questionText: '¿Qué es el "Modelo CAP" en sistemas distribuidos?',
            options: [
                'Un modelo de red.',
                'Un teorema que afirma que en un sistema distribuido solo se pueden garantizar 2 de 3: Consistencia, Disponibilidad y Tolerancia a Particiones.',
                'Un estándar de cables.',
                'Un protocolo de seguridad.'
            ],
            correctAnswer: 1,
            explanation: 'Fundamental para elegir entre bases de datos SQL (normalmente CA) o NoSQL (normalmente AP).'
        },
        {
            questionText: 'En criptografía, ¿cuál es la principal función de una Infraestructura de Clave Pública (PKI)?',
            options: [
                'Acelerar la red.',
                'Gestionar el ciclo de vida de los certificados digitales y vincular identidades a claves públicas.',
                'Crear contraseñas seguras.',
                'Bloquear virus.'
            ],
            correctAnswer: 1,
            explanation: 'Incluye Autoridades de Certificación, Registro, etc.'
        },
        {
            questionText: '¿Qué es el "Análisis de impacto" en una evaluación de riesgos de seguridad?',
            options: [
                'Ver cuánto pesa el servidor.',
                'Estimar las consecuencias negativas para la organización si se materializa una amenaza sobre un activo.',
                'Contar los virus bloqueados.',
                'Medir la velocidad del firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Parte esencial de la metodología Magerit.'
        },
        {
            questionText: '¿Qué comando de Windows permite ver la configuración de red detallada, incluyendo la dirección física (MAC)?',
            options: ['ipconfig', 'ipconfig /all', 'ping', 'route print'],
            correctAnswer: 1,
            explanation: '/all muestra DNS, DHCP y MAC (Physical Address).'
        },
        {
            questionText: '¿Qué es "Cross-Site Request Forgery" (CSRF)?',
            options: [
                'Un robo de archivos.',
                'Un ataque que obliga a un usuario autenticado a realizar acciones no deseadas en una aplicación web en la que confía.',
                'Un fallo del monitor.',
                'Un tipo de spam.'
            ],
            correctAnswer: 1,
            explanation: 'Se previene con tokens anti-CSRF.'
        },
        {
            questionText: '¿Cuál es el puerto estándar para el protocolo HTTPS?',
            options: ['80', '443', '8080', '22'],
            correctAnswer: 1,
            explanation: 'HTTP sobre SSL/TLS.'
        },
        {
            questionText: 'En GIT, ¿qué comando se usa para fusionar una rama en otra?',
            options: ['git commit', 'git add', 'git merge', 'git push'],
            correctAnswer: 2,
            explanation: 'Normalmente se fusiona una rama de desarrollo en la rama main.'
        },
        {
            questionText: '¿Qué es el "Sharding" en bases de datos?',
            options: [
                'Un error de disco.',
                'Particionar horizontalmente los datos distribuyéndolos en múltiples servidores independientes.',
                'Hacer copias de seguridad.',
                'Borrar tablas antiguas.'
            ],
            correctAnswer: 1,
            explanation: 'Permite escalar de forma horizontal bases de datos masivas.'
        },
        {
            questionText: '¿Qué técnica de accesibilidad web permite que los elementos complejos de la interfaz (como pestañas o menús) sean entendidos por lectores de pantalla?',
            options: ['HTML5', 'WAI-ARIA', 'CSS3', 'JavaScript'],
            correctAnswer: 1,
            explanation: 'Proporciona roles, estados y propiedades adicionales al HTML.'
        },
        {
            questionText: '¿Qué es un "Buffer Overflow" (Desbordamiento de búfer)?',
            options: [
                'Un error que ocurre cuando se escriben más datos de los que caben en un bloque de memoria, pudiendo sobreescribir direcciones de retorno.',
                'El disco está lleno.',
                'La CPU está lenta.',
                'Un tipo de spam.'
            ],
            correctAnswer: 0,
            explanation: 'Vulnerabilidad clásica de C/C++.'
        },
        {
            questionText: '¿Qué protocolo se encarga de asignar direcciones IP de forma dinámica en una red?',
            options: ['DNS', 'DHCP', 'HTTP', 'FTP'],
            correctAnswer: 1,
            explanation: 'Dynamic Host Configuration Protocol.'
        },
        {
            questionText: 'En el contexto de la nube, ¿qué significa "IaaS"?',
            options: [
                'Infrastructure as a Service',
                'Information as a System',
                'Internet as a Service',
                'Input as a Source'
            ],
            correctAnswer: 0,
            explanation: 'Alquiler de infraestructura bruta (servidores, redes, almacenamiento).'
        },
        {
            questionText: '¿Qué es un "Exploit"?',
            options: [
                'Un programa o fragmento de código diseñado para aprovechar una vulnerabilidad de seguridad.',
                'Un antivirus.',
                'Un tipo de cable.',
                'Un monitor caro.'
            ],
            correctAnswer: 0,
            explanation: 'Es la herramienta que materializa el ataque sobre la debilidad.'
        },
        {
            questionText: '¿Cuál es la función del protocolo ICMP?',
            options: [
                'Transferir archivos.',
                'Enviar mensajes de error y control operacional en redes IP (usado por ping y traceroute).',
                'Asignar nombres de dominio.',
                'Navegar por la web.'
            ],
            correctAnswer: 1,
            explanation: 'Internet Control Message Protocol.'
        },
        {
            questionText: '¿Qué es el "Single Point of Failure" (Punto único de fallo)?',
            options: [
                'Un error de un solo usuario.',
                'Cualquier componente del sistema que, si falla, provoca que todo el sistema deje de funcionar.',
                'Un ordenador viejo.',
                'Un fusible.'
            ],
            correctAnswer: 1,
            explanation: 'Se elimina mediante redundancia.'
        },
        {
            questionText: '¿Qué comando de Linux permite ver el uso de CPU y memoria de los procesos en tiempo real?',
            options: ['ps', 'ls', 'top', 'free'],
            correctAnswer: 2,
            explanation: 'top (o el más interactivo htop).'
        },
        {
            questionText: 'En el Esquema Nacional de Seguridad (ENS), ¿qué es una auditoría de seguridad?',
            options: [
                'Un examen periódico para verificar el cumplimiento de las medidas de seguridad previstas.',
                'Un curso de formación.',
                'Instalar un antivirus.',
                'Contratar a un guardia.'
            ],
            correctAnswer: 0,
            explanation: 'Obligatoria para sistemas de categoría media o alta cada 2 años.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo SSH?',
            options: ['21', '22', '23', '25'],
            correctAnswer: 1,
            explanation: 'Secure Shell, sustituto seguro de Telnet.'
        },
        {
            questionText: '¿Qué es un "Indice de cobertura" en las pruebas de software?',
            options: [
                'El número de errores encontrados.',
                'El porcentaje de código que ha sido ejecutado durante las pruebas.',
                'Lo rápido que son los tests.',
                'El precio de la licencia del software de test.'
            ],
            correctAnswer: 1,
            explanation: 'Indica qué parte del sistema se ha verificado realmente.'
        },
        {
            questionText: '¿Qué técnica de red permite dividir un switch físico en varias redes lógicas independientes?',
            options: ['VLAN', 'VPN', 'Subnetting', 'NAT'],
            correctAnswer: 0,
            explanation: 'Virtual Local Area Network.'
        },
        {
            questionText: '¿Qué es el "Big Data"?',
            options: [
                'Un disco duro muy grande.',
                'Conjuntos de datos tan voluminosos y complejos que los métodos tradicionales de procesamiento son insuficientes.',
                'Un servidor de Google.',
                'Muchos archivos Excel.'
            ],
            correctAnswer: 1,
            explanation: 'Se define por las "V": Volumen, Velocidad, Variedad...'
        },
        {
            questionText: 'En la Ley 40/2015, ¿cuál es el plazo de prescripción para las sanciones impuestas por infracciones muy graves?',
            options: ['1 año', '2 años', '3 años', '4 años'],
            correctAnswer: 2,
            explanation: 'Las sanciones muy graves prescriben a los 3 años (Art. 30 Ley 40/2015).'
        },
        {
            questionText: '¿Qué es la "Inyección de dependencias"?',
            options: [
                'Un virus que se propaga.',
                'Un patrón de diseño que suministra los objetos que una clase necesita en lugar de crearlos ella misma.',
                'Actualizar Windows.',
                'Instalar librerías nuevas.'
            ],
            correctAnswer: 1,
            explanation: 'Mejora el desacoplamiento y facilita las pruebas unitarias.'
        },
        {
            questionText: '¿Qué comando de SQL se usa para añadir una nueva fila a una tabla?',
            options: ['ADD', 'UPDATE', 'INSERT INTO', 'NEW'],
            correctAnswer: 2,
            explanation: 'Sintaxis: INSERT INTO tabla (columnas) VALUES (valores).'
        },
        {
            questionText: '¿Qué es el protocolo OAuth 2.0?',
            options: [
                'Un protocolo de correo.',
                'Un marco de autorización que permite a aplicaciones obtener acceso limitado a cuentas de usuario en otros servicios (ej: Entrar con Google).',
                'Un tipo de cifrado.',
                'Un servidor web.'
            ],
            correctAnswer: 1,
            explanation: 'Diferencia claramente entre autenticación (OpenID Connect) y autorización.'
        },
        {
            questionText: '¿Qué es un "Token" en seguridad informática?',
            options: [
                'Un objeto físico o digital que se utiliza para acreditar la identidad de un usuario.',
                'Una moneda de juego.',
                'Un cable de red.',
                'Una pantalla táctil.'
            ],
            correctAnswer: 0,
            explanation: 'Puede ser un software token (ej: OTP en móvil) o hardware (ej: Yubikey).'
        },
        {
            questionText: '¿Qué es el "Aprendizaje Automático" (Machine Learning)?',
            options: [
                'Que las máquinas nunca se cansen.',
                'Rama de la IA que permite que los sistemas aprendan y mejoren a partir de los datos sin ser programados explícitamente.',
                'Robotica pura.',
                'Cálculo matemático básico.'
            ],
            correctAnswer: 1,
            explanation: 'Utiliza algoritmos estadísticos para encontrar patrones.'
        },
        {
            questionText: '¿Qué es una "Copia de seguridad incremental"?',
            options: [
                'Copia de todos los archivos cada vez.',
                'Copia solo de los datos que han cambiado desde la última copia de seguridad de cualquier tipo.',
                'Copia solo de archivos de texto.',
                'Copia en la nube.'
            ],
            correctAnswer: 1,
            explanation: 'Es más rápida y ahorra espacio frente a la copia completa.'
        },
        {
            questionText: 'En IPv6, ¿cómo se llama el mecanismo que permite generar una dirección de 128 bits automáticamente usando la dirección MAC?',
            options: ['SLAAC (EUI-64)', 'DHCPv4', 'NAT', 'ARP'],
            correctAnswer: 0,
            explanation: 'Stateless Address Autoconfiguration.'
        },
        {
            questionText: '¿Qué componente de hardware se encarga de convertir la energía alterna de la red eléctrica en continua para los componentes del PC?',
            options: ['Placa base', 'Fuente de alimentación (PSU)', 'Procesador', 'Disco duro'],
            correctAnswer: 1,
            explanation: 'Power Supply Unit.'
        },
        {
            questionText: 'En el desarrollo de aplicaciones móviles, ¿qué es el desarrollo "Híbrido"?',
            options: [
                'Usar dos móviles a la vez.',
                'Desarrollo que utiliza tecnologías web (HTML, CSS, JS) envueltas en un contenedor nativo.',
                'Solo para tablets.',
                'Un código que no funciona.'
            ],
            correctAnswer: 1,
            explanation: 'Ejemplos: Ionic o antiguos PhoneGap/Cordova.'
        },
        {
            questionText: '¿Qué es un "Webook"?',
            options: [
                'Una página web de libros.',
                'Una forma de recibir información en tiempo real de una aplicación a otra mediante peticiones HTTP POST automáticas.',
                'Un virus de navegador.',
                'Un buscador.'
            ],
            correctAnswer: 1,
            explanation: 'Permite que una app avise a otra de que ha ocurrido un evento (ej: un pago realizado).'
        },
        {
            questionText: '¿Qué significa "NoSQL"?',
            options: [
                'No SQL (Sin SQL)',
                'Not Only SQL (No solo SQL)',
                'New SQL (Nuevo SQL)',
                'Network SQL (Red SQL)'
            ],
            correctAnswer: 1,
            explanation: 'Indica que los sistemas pueden usar SQL pero también otros lenguajes de consulta y modelos de datos no relacionales.'
        },
        {
            questionText: '¿Qué comando de GIT muestra el historial de cambios y commits?',
            options: ['git history', 'git log', 'git status', 'git show'],
            correctAnswer: 1,
            explanation: 'Muestra autor, fecha y mensaje de cada versión.'
        },
        {
            questionText: '¿Qué es el "Escalamiento horizontal" de un servidor?',
            options: [
                'Cambiar la RAM por una mejor.',
                'Añadir más máquinas al conjunto de recursos (clúster).',
                'Convertir el servidor en una estación de trabajo.',
                'Poner el servidor tumbado.'
            ],
            correctAnswer: 1,
            explanation: 'Añadir nodos frente a añadir recursos a un solo nodo (Escalamiento Vertical).'
        },
        {
            questionText: '¿Cuál es la función del archivo "hosts" en un sistema operativo?',
            options: [
                'Guardar las contraseñas.',
                'Mapear nombres de dominio a direcciones IP de forma local antes de consultar al DNS.',
                'Es el archivo donde vive el virus.',
                'Configurar el teclado.'
            ],
            correctAnswer: 1,
            explanation: 'Ubicado en C:\\Windows\\System32\\drivers\\etc\\hosts en Windows o /etc/hosts en Linux.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo remoto Telnet?',
            options: ['21', '22', '23', '25'],
            correctAnswer: 2,
            explanation: 'A diferencia de SSH, transmite todo en texto plano (inseguro).'
        },
        {
            questionText: 'En la Ley 9/2017, ¿qué es un "Contrato Menor"?',
            options: [
                'Un contrato para jóvenes.',
                'Contratos de importe bajo que pueden adjudicarse directamente sin publicidad previa.',
                'Un contrato de corta duración.',
                'Un contrato que no tiene validez legal.'
            ],
            correctAnswer: 1,
            explanation: 'Umbrales: 40.000€ en obras y 15.000€ en servicios/suministros.'
        },
        {
            questionText: '¿Qué es la "Firma Electrónica Cualificada"?',
            options: [
                'Una firma que se hace con bolígrafo digital.',
                'Una firma electrónica avanzada creada mediante un dispositivo cualificado y basada en un certificado cualificado.',
                'Enviar una foto del DNI.',
                'Escribir el nombre en el email.'
            ],
            correctAnswer: 1,
            explanation: 'Tiene el mismo valor legal que una firma manuscrita (Reglamento eIDAS).'
        },
        {
            questionText: '¿Qué arquitectura de red sitúa los servidores públicos en una subred aislada entre la red interna y la externa (Internet)?',
            options: ['Intranet', 'VPN', 'DMZ (Zona Desmilitarizada)', 'VLAN'],
            correctAnswer: 2,
            explanation: 'La DMZ protege la red interna si un servidor público es comprometido.'
        }
    ]
};
