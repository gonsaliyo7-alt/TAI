
import type { Test } from '../../types';

export const TEST_EXAMEN_2022: Test = {
    id: 'test-examen-2022',
    title: 'Examen Oficial TAI 2022 (Simulacro Nivel Avanzado)',
    questions: [
        // BLOQUE I: ORGANIZACIÓN DEL ESTADO Y DERECHO
        {
            questionText: 'En el marco de la Ley 40/2015, ¿cuál es la diferencia principal entre los Organismos Autónomos y las Entidades Públicas Empresariales (EPE)?',
            options: [
                'Los OA se rigen siempre por derecho privado.',
                'Las EPE se financian mayoritariamente con ingresos de mercado y se rigen por derecho privado en su actividad externa.',
                'Los OA tienen personalidad jurídica y las EPE no.',
                'No hay diferencia legal.'
            ],
            correctAnswer: 1,
            explanation: 'Artículo 103 de la Ley 40/2015.'
        },
        {
            questionText: 'Según la Ley General Presupuestaria, ¿qué fase de la ejecución del gasto implica el reconocimiento de la obligación y la existencia de un documento que acredita que la prestación se ha realizado?',
            options: ['Autorización (A)', 'Disposición (D)', 'Reconocimiento de la Obligación (O)', 'Ordenación del Pago (P)'],
            correctAnswer: 2,
            explanation: 'La fase O es el acto mediante el cual se declara la existencia de una deuda exigible.'
        },
        {
            questionText: 'En la Ley 39/2015, contra las disposiciones administrativas de carácter general (reglamentos):',
            options: [
                'Cabe recurso de alzada.',
                'Cabe recurso potestativo de reposición.',
                'No cabe recurso en vía administrativa.',
                'Solo cabe recurso ante el Defensor del Pueblo.'
            ],
            correctAnswer: 2,
            explanation: 'Artículo 112.3: Contra las disposiciones administrativas de carácter general no cabrá recurso en vía administrativa.'
        },
        {
            questionText: '¿Cuál es el quórum necesario para la válida constitución de un órgano colegiado en segunda convocatoria según la Ley 40/2015?',
            options: [
                'La mayoría absoluta.',
                'La presencia del Presidente, el Secretario o quienes les sustituyan, y un tercio de sus miembros.',
                'La ley no establece un quórum específico para la segunda convocatoria, permitiendo que se determine en las normas propias del órgano.',
                'La mitad más uno.'
            ],
            correctAnswer: 2,
            explanation: 'Artículo 17 de la Ley 40/2015.'
        },
        {
            questionText: '¿Qué tipo de invalidez de los actos administrativos se aplica cuando la infracción del ordenamiento es una mera irregularidad no esencial?',
            options: ['Nulidad de pleno derecho', 'Anulabilidad', 'Irregularidad no invalidante', 'Caducidad'],
            correctAnswer: 2,
            explanation: 'No afecta a la validez del acto si no provoca indefensión.'
        },

        // BLOQUE II: TECNOLOGÍA BÁSICA
        {
            questionText: '¿Qué es el "Hyper-threading" de Intel?',
            options: [
                'Duplicar el número de núcleos físicos.',
                'Permitir que un solo núcleo físico ejecute dos hilos de forma paralela compartiendo recursos de ejecución.',
                'Aumentar la velocidad del bus de datos.',
                'Un tipo de memoria caché.'
            ],
            correctAnswer: 1,
            explanation: 'Es una implementación de SMT (Simultaneous Multithreading).'
        },
        {
            questionText: 'En el contexto de la virtualización, ¿qué es un Hipervisor de Tipo 1 (Bare Metal)?',
            options: [
                'Un software que se ejecuta sobre un sistema operativo anfitrión.',
                'Un software que se ejecuta directamente sobre el hardware físico.',
                'Un tipo de tarjeta gráfica.',
                'Un sistema de almacenamiento.'
            ],
            correctAnswer: 1,
            explanation: 'Ejemplos: VMware ESXi, Microsoft Hyper-V (en su forma pura) o Citrix XenServer.'
        },
        {
            questionText: '¿Cuál es el tamaño físico estándar de un rack de servidores en unidades de altura (U)?',
            options: ['1.75 pulgadas por U', '2 pulgadas por U', '10 cm por U', '5 cm por U'],
            correctAnswer: 0,
            explanation: '1U equivale a 44.45 mm (1.75 pulgadas).'
        },
        {
            questionText: '¿Qué característica define al sistema de archivos Btrfs frente a ext4?',
            options: [
                'Copia en escritura (CoW), soporte nativo de snapshots y gestión de volúmenes integrada.',
                'Es más antiguo.',
                'Solo funciona en Windows.',
                'No permite archivos de más de 2GB.'
            ],
            correctAnswer: 0,
            explanation: 'Btrfs es un sistema de archivos moderno con funciones avanzadas de integridad y gestión.'
        },
        {
            questionText: 'En una red SAN, ¿qué es el "Zoning"?',
            options: [
                'Dividir el data center en salas.',
                'Una técnica de seguridad que restringe la visibilidad y comunicación entre dispositivos finales dentro de un fabric de FC.',
                'Configurar el aire acondicionado.',
                'Un tipo de backup.'
            ],
            correctAnswer: 1,
            explanation: 'Similar a las VLANs pero para el entorno de almacenamiento.'
        },

        // BLOQUE III: DESARROLLO DE SISTEMAS
        {
            questionText: '¿Qué es el "Shadow DOM" en el contexto de Web Components?',
            options: [
                'Una copia de seguridad de la página.',
                'Una técnica para encapsular el estilo y la estructura de un componente, aislándolo del DOM principal.',
                'Un modo oscuro automático.',
                'Un tipo de ataque XSS.'
            ],
            correctAnswer: 1,
            explanation: 'Evita colisiones de CSS y scripts entre el componente y el resto de la aplicación.'
        },
        {
            questionText: 'En el patrón de arquitectura Model-View-ViewModel (MVVM), ¿qué componente es responsable de exponer los datos y comandos de forma que se puedan enlazar (bind) a la vista?',
            options: ['Model', 'View', 'ViewModel', 'Controller'],
            correctAnswer: 2,
            explanation: 'El ViewModel actúa como un traductor del modelo para la vista sin conocer a esta última directamente.'
        },
        {
            questionText: 'En un entorno de integración continua (CI), ¿qué es una "Build Artefact"?',
            options: [
                'El código fuente original.',
                'El resultado ejecutable o paquete generado por el proceso de compilación y empaquetado (ej: .jar, .war, .docker image).',
                'Un error de compilación.',
                'Una reunión de programadores.'
            ],
            correctAnswer: 1,
            explanation: 'Es lo que se despliega finalmente en los entornos.'
        },
        {
            questionText: '¿Cuál es la diferencia principal entre una base de datos Relacional y una de Grafos (Neo4j)?',
            options: [
                'La de grafos no permite relaciones.',
                'La de grafos está optimizada para consultas sobre relaciones complejas y profundas entre nodos.',
                'La de grafos solo guarda imágenes.',
                'Son idénticas en rendimiento.'
            ],
            correctAnswer: 1,
            explanation: 'Las de grafos eliminan la necesidad de JOINS masivos para navegar por redes de datos.'
        },
        {
            questionText: '¿Qué significan las siglas KISS en el diseño de software?',
            options: ['Keep It Simple, Stupid', 'Known In System Solution', 'Key Independent Search System', 'Keep Information Secure Always'],
            correctAnswer: 0,
            explanation: 'Aboga por la simplicidad como objetivo clave del diseño.'
        },

        // BLOQUE IV: INFRAESTRUCTURA Y SEGURIDAD
        {
            questionText: 'En el marco de ciberseguridad, ¿qué es el "Zero Trust"?',
            options: [
                'No confiar en nadie fuera de la oficina.',
                'Un modelo de seguridad que asume que no hay un perímetro de confianza y verifica cada petición como si proviniera de una red abierta.',
                'Un antivirus que bloquea todo por defecto.',
                'No usar contraseñas.'
            ],
            correctAnswer: 1,
            explanation: 'Se basa en el principio de "nunca confiar, siempre verificar".'
        },
        {
            questionText: '¿Qué tipo de registro DNS se utiliza para publicar una clave pública para verificar firmas de correo electrónico (DKIM)?',
            options: ['A', 'MX', 'TXT', 'CNAME'],
            correctAnswer: 2,
            explanation: 'TXT es el registro comodín para metadatos y configuraciones externas.'
        },
        {
            questionText: '¿Cuál es la función del protocolo OCSP (Online Certificate Status Protocol)?',
            options: [
                'Cifrar el tráfico.',
                'Permitir verificar en tiempo real si un certificado digital ha sido revocado sin descargar toda la lista CRL.',
                'Emitir certificados nuevos.',
                'Guardar las claves privadas.'
            ],
            correctAnswer: 1,
            explanation: 'Es más eficiente que las Listas de Revocación de Certificados (CRL).'
        },
        {
            questionText: 'En una red WiFi, ¿qué es el "Beamforming"?',
            options: [
                'Un tipo de antena más grande.',
                'Una técnica de procesamiento de señales que focaliza la energía de la radio hacia un cliente específico para mejorar la señal.',
                'Cambiar de canal automáticamente.',
                'Un modo de ahorro de energía.'
            ],
            correctAnswer: 1,
            explanation: 'Aumenta el alcance y la velocidad efectiva.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo de escritorio remoto (RDP) de Microsoft?',
            options: ['22', '443', '3389', '5900'],
            correctAnswer: 2,
            explanation: 'Standard RDP port.'
        },
        {
            questionText: '¿Cuál es el plazo de prescripción para las faltas graves según el Reglamento Disciplinario de los Funcionarios de la Administración del Estado?',
            options: ['1 año', '2 años', '3 años', '6 meses'],
            correctAnswer: 1,
            explanation: 'Las faltas graves prescriben a los 2 años.'
        },
        {
            questionText: 'En el marco de la Ley 39/2015, ¿qué sucede si un interesado no realiza la subsanación requerida en el plazo de 10 días?',
            options: [
                'Se le tendrá por desistido de su petición, previa resolución.',
                'Se abrirá un periodo de prueba.',
                'Se dictará sentencia inmediata.',
                'Se archiva el expediente automáticamente sin aviso.'
            ],
            correctAnswer: 0,
            explanation: 'Artículo 68 de la Ley 39/2015.'
        },
        {
            questionText: '¿Qué tipo de contratos del sector público NO admiten el recurso especial en materia de contratación?',
            options: [
                'Contratos de obras de valor estimado superior a 3.000.000 €.',
                'Contratos de servicios de valor estimado superior a 100.000 €.',
                'Contratos de suministros de valor estimado superior a 100.000 €.',
                'Contratos de concesión de servicios de valor estimado superior a 200.000 €.'
            ],
            correctAnswer: 0,
            explanation: 'El umbral para el recurso especial en obras es de 3.000.000 €. Los de servicios y suministros es 100.000 €.'
        },
        {
            questionText: 'En una CPU con arquitectura Superscalar, ¿qué es un "Hazard" estructural?',
            options: [
                'Un error en el código.',
                'Un conflicto que ocurre cuando dos instrucciones necesitan el mismo recurso de hardware simultáneamente.',
                'Una caída de tensión.',
                'Un tipo de salto condicional.'
            ],
            correctAnswer: 1,
            explanation: 'Ocurre por falta de unidades de ejecución suficientes.'
        },
        {
            questionText: '¿Qué es el "Microcódigo" en un procesador?',
            options: [
                'Un lenguaje de programación para web.',
                'Una capa de instrucciones interna que traduce las instrucciones de lenguaje máquina complejas en micro-operaciones más simples para el hardware.',
                'Un virus muy pequeño.',
                'El código de los drivers.'
            ],
            correctAnswer: 1,
            explanation: 'Permite implementar arquitecturas CISC de forma interna como RISC.'
        },
        {
            questionText: 'En el almacenamiento masivo, ¿en qué consiste la técnica de "Tiering" (Almacenamiento por niveles)?',
            options: [
                'Borrar datos antiguos.',
                'Mover automáticamente los datos entre diferentes tipos de soportes (SSD, HDD, Cinta) basándose en su frecuencia de acceso.',
                'Poner los servidores uno encima de otro.',
                'Un tipo de RAID.'
            ],
            correctAnswer: 1,
            explanation: 'Optimiza el balance entre rendimiento y coste.'
        },
        {
            questionText: '¿Qué es un "Kernel Panic" en sistemas Unix/Linux?',
            options: [
                'Una alerta de virus.',
                'Un error crítico del núcleo del sistema del que no se puede recuperar, forzando la detención del sistema.',
                'La actualización del sistema.',
                'Un modo de ahorro de energía.'
            ],
            correctAnswer: 1,
            explanation: 'Es el equivalente a la pantalla azul (BSOD) de Windows.'
        },
        {
            questionText: '¿Qué es la "Inyección de SQL de segundo orden"?',
            options: [
                'Un ataque el doble de rápido.',
                'Un ataque donde el código malicioso no se ejecuta inmediatamente, sino que se almacena y se activa posteriormente en una consulta diferente.',
                'Inyectar en dos bases de datos a la vez.',
                'Un error de sintaxis.'
            ],
            correctAnswer: 1,
            explanation: 'Mucho más difícil de detectar mediante simples validaciones de entrada inicial.'
        },
        {
            questionText: 'En el desarrollo con TypeScript, ¿qué es un "Interface"?',
            options: [
                'Un diseño visual.',
                'Un contrato de forma que define la estructura que debe tener un objeto sin implementar la lógica.',
                'Un tipo de clase que se hereda.',
                'Una herramienta de traducción.'
            ],
            correctAnswer: 1,
            explanation: 'Ayuda a garantizar el tipado estático en tiempo de desarrollo.'
        },
        {
            questionText: '¿Qué significa el código de estado HTTP 429?',
            options: [
                'Bad Request',
                'Unauthorized',
                'Too Many Requests',
                'Internal Server Error'
            ],
            correctAnswer: 2,
            explanation: 'Indica que el cliente ha superado los límites de tasa (rate limiting).'
        },
        {
            questionText: '¿Qué puerto TCP utiliza por defecto el protocolo seguro de transferencia de archivos SFTP (sobre SSH)?',
            options: ['20', '21', '22', '443'],
            correctAnswer: 2,
            explanation: 'A diferencia de FTPS (puertos 990/21), SFTP viaja sobre el túnel SSH.'
        },
        {
            questionText: '¿Cuál es el propósito del mecanismo "DHCP Snooping" en un switch?',
            options: [
                'Asignar IPs más rápido.',
                'Evitar que servidores DHCP no autorizados (Rogue DHCP) entreguen direcciones IP falsas en la red.',
                'Espiar los correos de los usuarios.',
                'Bloquear el acceso a YouTube.'
            ],
            correctAnswer: 1,
            explanation: 'Crea una base de datos de vinculación entre puertos confiables e IPs asignadas.'
        },
        {
            questionText: 'En la norma ISO/IEC 27001, ¿qué es el SOA (Statement of Applicability)?',
            options: [
                'Un contrato con el proveedor.',
                'Un documento que identifica los controles de seguridad seleccionados para la organización y justifica su inclusión o exclusión.',
                'Una lista de empleados.',
                'El manual del administrador.'
            ],
            correctAnswer: 1,
            explanation: 'Documento fundamental para la certificación formal.'
        },
        {
            questionText: '¿Qué es el "Manejo de estados" (State Management) en frameworks frontend como React o Angular?',
            options: [
                'Borrar la caché del navegador.',
                'La gestión centralizada de los datos que determinan lo que el usuario ve en la pantalla en cada momento.',
                'Configurar el servidor web.',
                'Contar el número de clicks.'
            ],
            correctAnswer: 1,
            explanation: 'Librerías como Redux o el hook useContext ayudan a esto.'
        },
        {
            questionText: '¿Qué es una vulnerabilidad de "IDOR" (Insecure Direct Object Reference)?',
            options: [
                'Un fallo en el cable de red.',
                'Un tipo de control de acceso fallido donde un usuario puede acceder a datos de otro simplemente cambiando un ID en la URL o parámetros.',
                'Un virus de macro.',
                'Un error de hardware.'
            ],
            correctAnswer: 1,
            explanation: 'Ejemplo: Acceder a `/api/profile/123` siendo el usuario 456.'
        },
        {
            questionText: '¿Qué es el "Garbage First" (G1) en el contexto de Java?',
            options: [
                'Instrucción para borrar el disco.',
                'Un recolector de basura (Garbage Collector) diseñado para aplicaciones con grandes cantidades de memoria y tiempos de pausa bajos.',
                'Un juego.',
                'Un error de carga.'
            ],
            correctAnswer: 1,
            explanation: 'Divide el heap en regiones para gestionarlas más eficientemente.'
        },
        {
            questionText: '¿Qué protocolo permite la comunicación entre dispositivos industriales y de IoT de baja potencia utilizando un modelo de publicación/suscripción?',
            options: ['HTTP', 'FTP', 'MQTT', 'SSH'],
            correctAnswer: 2,
            explanation: 'Message Queuing Telemetry Transport.'
        },
        {
            questionText: '¿Cuál es la función del registro "PTR" en una zona de búsqueda inversa DNS?',
            options: [
                'Apuntar de un nombre a una dirección IP.',
                'Apuntar de una dirección IP a un nombre de dominio.',
                'Redirigir el correo.',
                'Definir el servidor maestro.'
            ],
            correctAnswer: 1,
            explanation: 'Pointer Record.'
        },
        {
            questionText: '¿Qué es un "Side-channel attack" (Ataque de canal lateral)?',
            options: [
                'Entrar por la ventana.',
                'Un ataque que se basa en información obtenida de la implementación física del sistema (consumo eléctrico, fugas electromagnéticas, tiempo) en lugar de vulnerabilidades en el algoritmo.',
                'Un ataque de fuerza bruta.',
                'Un virus de red.'
            ],
            correctAnswer: 1,
            explanation: 'Ejemplos famosos son Spectre y Meltdown basados en tiempos de acceso a caché.'
        },
        {
            questionText: '¿Qué es "Infrastructure as Code" (IaC)?',
            options: [
                'Escribir a mano las IPs en los servidores.',
                'Gestionar y aprovisionar la infraestructura tecnológica (servidores, redes) utilizando archivos de definición legibles por máquina.',
                'Programar páginas web.',
                'Un tipo de manual de usuario.'
            ],
            correctAnswer: 1,
            explanation: 'Herramientas como Terraform o Ansible permiten esto.'
        },
        {
            questionText: '¿Qué protocolo de capa de enlace se utiliza en redes de fibra para evitar el problema de "viento de broadcast" mediante el uso de niveles lógicos de red?',
            options: ['Ethernet', 'Token Ring', 'VLAN/Trunking (802.1Q)', 'ATM'],
            correctAnswer: 2,
            explanation: 'Etiqueta las tramas para separarlas lógicamente en el mismo cable físico.'
        },
        {
            questionText: 'En el Esquema Nacional de Interoperabilidad (ENI), ¿cuál es el propósito de la "Sustitución de papel por documentos electrónicos"?',
            options: [
                'Gastar menos luz.',
                'Garantizar la autenticidad, integridad y conservación del documento electrónico con el mismo valor legal.',
                'Que los funcionarios aprendan a usar ordenadores.',
                'Borrar el pasado.'
            ],
            correctAnswer: 1,
            explanation: 'Incluye la digitalización segura de archivos físicos.'
        },
        {
            questionText: '¿Qué es el "Cloud Computing"?',
            options: [
                'Enviar archivos por email.',
                'La entrega de servicios de computación bajo demanda a través de Internet, con un modelo de pago por uso.',
                'Un programa de dibujo de nubes.',
                'Bajar aplicaciones piratas.'
            ],
            correctAnswer: 1,
            explanation: 'SaaS, PaaS e IaaS son sus pilares.'
        },
        {
            questionText: '¿Qué es el "Control de Versiones"?',
            options: [
                'Saber qué hora es.',
                'Un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo para poder recuperar versiones específicas.',
                'Un antivirus.',
                'Un programa para ordenar fotos.'
            ],
            correctAnswer: 1,
            explanation: 'Git es el ejemplo más utilizado actualmente.'
        },
        {
            questionText: '¿Cuál es el puerto estándar para el protocolo de gestión remota de bases de datos MySQL/MariaDB?',
            options: ['1433', '3306', '5432', '1521'],
            correctAnswer: 1,
            explanation: '1433 es SQL Server, 5432 Postgre, 1521 Oracle.'
        },
        {
            questionText: '¿Qué es un "ataque de denegación de servicio distribuido" (DDoS)?',
            options: [
                'Un virus que borra archivos.',
                'Un intento de saturar un servidor o una red con tráfico masivo proveniente de múltiples fuentes coordinadas (botnets).',
                'Robar contraseñas de bancos.',
                'Romper el teclado del servidor.'
            ],
            correctAnswer: 1,
            explanation: 'Diferencia del DoS simple porque usa muchas IPs de origen.'
        },
        {
            questionText: 'En el desarrollo web, ¿qué es el "DOM" (Document Object Model)?',
            options: [
                'Un lenguaje de programación.',
                'Una interfaz de programación que permite representar un documento HTML o XML como una estructura de árbol que los programas pueden manipular.',
                'Un tipo de servidor.',
                'Un buscador.'
            ],
            correctAnswer: 1,
            explanation: 'Permite a JavaScript cambiar el contenido de la página.'
        },
        {
            questionText: '¿Qué es la "Banda ancha"?',
            options: [
                'Un tipo de cable muy gordo.',
                'Una conexión de alta velocidad que permite la transmisión simultánea de múltiples señales y datos.',
                'Una antena de radio.',
                'Pagar mucho por Internet.'
            ],
            correctAnswer: 1,
            explanation: 'Sustituyó a las conexiones por módem (dial-up).'
        },
        {
            questionText: '¿Qué es un "Webcam Hijacking"?',
            options: [
                'Comprar una cámara robada.',
                'El acceso no autorizado a la cámara web de un usuario para espiarlo.',
                'Que la cámara no funcione.',
                'Un tipo de filtro para fotos.'
            ],
            correctAnswer: 1,
            explanation: 'Suele realizarse mediante Troyanos de Acceso Remoto (RAT).'
        },
        {
            questionText: 'En la Ley 40/2015, ¿cuál de estos principios rige la actuación de las Administraciones Públicas?',
            options: ['Secretismo', 'Eficacia', 'Arbitrariedad', 'Inmortalidad'],
            correctAnswer: 1,
            explanation: 'Artículo 3: Actúan con objetividad y de acuerdo con los principios de eficacia, jerarquía...'
        },
        {
            questionText: '¿Qué es la "Inteligencia Artificial" (IA)?',
            options: [
                'Un robot con sentimientos.',
                'La simulación de procesos de inteligencia humana por parte de sistemas informáticos.',
                'Un programa matemático muy rápido.',
                'Un juego de ordenador.'
            ],
            correctAnswer: 1,
            explanation: 'Incluye aprendizaje, razonamiento y autocorrección.'
        },
        {
            questionText: '¿Qué es un "Virus informático"?',
            options: [
                'Un error de fabricación del PC.',
                'Un programa malicioso que se replica a sí mismo y se adjunta a otros archivos para propagarse y causar daños.',
                'La suciedad del ratón.',
                'Un cable pelado.'
            ],
            correctAnswer: 1,
            explanation: 'A diferencia de los gusanos, suelen requerir la acción del usuario para ejecutarse inicialment.'
        },
        {
            questionText: '¿En qué año entró en vigor de forma obligatoria el Esquema Nacional de Seguridad (ENS)?',
            options: ['2005', '2010', '2015', '2020'],
            correctAnswer: 1,
            explanation: 'A través del Real Decreto 3/2010.'
        },
        {
            questionText: '¿Qué es un "Hoax" (Bulo)?',
            options: [
                'Un tipo de virus destructivo.',
                'Una noticia o alerta falsa que se propaga masivamente por Internet (normalmente por email o redes sociales).',
                'Un juego pirata.',
                'Un fallo del monitor.'
            ],
            correctAnswer: 1,
            explanation: 'Buscan causar desinformación o alarma social.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo de transferencia de noticias NNTP?',
            options: ['80', '110', '119', '143'],
            correctAnswer: 2,
            explanation: '110 es POP3, 119 es NNTP, 143 es IMAP.'
        },
        {
            questionText: 'En Linux, ¿qué comando se usa para listar los módulos del kernel cargados actualmente?',
            options: ['modinfo', 'insmod', 'lsmod', 'rmmod'],
            correctAnswer: 2,
            explanation: 'lsmod muestra el contenido de /proc/modules.'
        },
        {
            questionText: '¿Qué es el "Dual Channel" en la memoria RAM?',
            options: [
                'Tener dos memorias distintas.',
                'Técnica que permite al procesador acceder a dos módulos de memoria simultáneamente, duplicando el ancho de banda efectivo.',
                'Usar RAM de dos marcas.',
                'Un modo de ahorro de energía.'
            ],
            correctAnswer: 1,
            explanation: 'Requiere instalar los módulos en parejas coordinadas.'
        },
        {
            questionText: '¿Qué significan las siglas UPS (o SAI en español)?',
            options: [
                'Universal Power Source',
                'Uninterruptible Power Supply',
                'United Parcel Service',
                'Uniform Power System'
            ],
            correctAnswer: 1,
            explanation: 'Proporciona energía de reserva durante apagones.'
        },
        {
            questionText: '¿Cuál es el principal objetivo de la Ley de Contratos del Sector Público?',
            options: [
                'Que el Gobierno gaste todo el dinero.',
                'Garantizar la libertad de acceso, publicidad, transparencia e igualdad de trato en las licitaciones públicas.',
                'Contratar a amigos.',
                'Hacer obras caras.'
            ],
            correctAnswer: 1,
            explanation: 'Busca la eficiencia en el uso de fondos públicos y la competencia.'
        },
        {
            questionText: '¿Qué es un "Certificado Raíz"?',
            options: [
                'Un diploma inicial.',
                'El certificado de la Autoridad de Certificación (CA) que encabeza la jerarquía de confianza.',
                'Un certificado falso.',
                'La clave wifi.'
            ],
            correctAnswer: 1,
            explanation: 'Si el navegador confía en la Raíz, confía en todos los certificados que esta emita.'
        },
        {
            questionText: '¿Qué puerto UDP utiliza por defecto el protocolo DNS?',
            options: ['21', '53', '80', '123'],
            correctAnswer: 1,
            explanation: 'Domain Name System (puerto 53).'
        },
        {
            questionText: 'En el desarrollo de software, ¿atacar las vulnerabilidades "antes" de que el código llegue a producción se conoce como?',
            options: ['Post-mortem', 'Shift-Left Security', 'Over-the-air', 'Waterfall'],
            correctAnswer: 1,
            explanation: 'Mover la seguridad a las etapas iniciales del ciclo de vida.'
        },
        {
            questionText: '¿Qué es un "Ataque MitM" (Man-in-the-Middle)?',
            options: [
                'Un ataque rápido.',
                'Un ataque donde el atacante se sitúa físicamente o lógicamente entre dos partes que creen comunicarse directamente para interceptar o alterar los datos.',
                'Un virus de macro.',
                'Entrar en el despacho del jefe.'
            ],
            correctAnswer: 1,
            explanation: 'Ejemplo: una red wifi abierta falsa.'
        },
        {
            questionText: '¿Qué protocolo de red permite la sincronización precisa de la hora entre ordenadores en una red IP?',
            options: ['HTTP', 'SMTP', 'NTP', 'FTP'],
            correctAnswer: 2,
            explanation: 'Network Time Protocol (Puerto UDP 123).'
        },
        {
            questionText: '¿Qué es un "Adware"?',
            options: [
                'Un software avanzado.',
                'Malware que muestra anuncios no deseados de forma intrusiva en el ordenador del usuario.',
                'Un programa de dibujo.',
                'Un monitor nuevo.'
            ],
            correctAnswer: 1,
            explanation: 'Muchas veces se instala como un complemento de navegador "gratuito".'
        },
        {
            questionText: 'En el contexto de las bases de datos, ¿qué es la "Normalización"?',
            options: [
                'Hacer los datos normales.',
                'Proceso de organizar los datos en tablas para minimizar la redundancia y evitar anomalías en la actualización.',
                'Borrar archivos.',
                'Actualizar el SQL.'
            ],
            correctAnswer: 1,
            explanation: 'Suele seguir reglas llamadas Formas Normales (1NF, 2NF, 3NF...).'
        },
        {
            questionText: '¿Qué es el "Scraping" web?',
            options: [
                'Borrar una web.',
                'Técnica para extraer información de sitios web de forma automatizada simulando la navegación humana.',
                'Hackear un servidor.',
                'Hacer una copia de seguridad.'
            ],
            correctAnswer: 1,
            explanation: 'Suele usarse para comparadores de precios o agregadores de noticias.'
        },
        {
            questionText: '¿Qué significa "URL"?',
            options: [
                'Uniform Resource Locator',
                'Universal Resource Link',
                'Unit Reference Level',
                'Uniform Radio Light'
            ],
            correctAnswer: 0,
            explanation: 'Es la dirección única de un recurso en la web.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo remoto seguro de bases de datos MSSQL?',
            options: ['1433', '3306', '5432', '1521'],
            correctAnswer: 0,
            explanation: 'Microsoft SQL Server.'
        },
        {
            questionText: 'En un sistema operativo Windows, ¿cuál es el visor de eventos oficial?',
            options: ['Task Manager', 'Event Viewer (eventvwr)', 'Registry Editor', 'Notepad'],
            correctAnswer: 1,
            explanation: 'Permite analizar logs de sistema, seguridad y aplicaciones.'
        },
        {
            questionText: '¿Qué es la "Informática Forense"?',
            options: [
                'Arreglar ordenadores rotos.',
                'Técnicas científicas y analíticas aplicadas a las infraestructuras tecnológicas para identificar, preservar y presentar pruebas digitales válidas en un proceso legal.',
                'Programar virus.',
                'Dar clases de informática.'
            ],
            correctAnswer: 1,
            explanation: 'Vital para investigar ciberataques y fraudes.'
        },
        {
            questionText: '¿Cuál es el principal riesgo de usar redes Wi-Fi públicas abiertas?',
            options: [
                'Que son lentas.',
                'La interceptación de datos sensibles no cifrados por parte de terceros en la misma red.',
                'Que se acabe la batería.',
                'Que hay mucha gente conectada.'
            ],
            correctAnswer: 1,
            explanation: 'Se recomienda usar siempre una VPN en estos entornos.'
        },
        {
            questionText: '¿Qué es un "Web Shell"?',
            options: [
                'Una caracola de mar.',
                'Un script malicioso subido a un servidor web que permite al atacante ejecutar comandos a través del navegador.',
                'Un tipo de servidor.',
                'Un buscador.'
            ],
            correctAnswer: 1,
            explanation: 'Es la puerta de entrada para controlar un servidor comprometido.'
        },
        {
            questionText: '¿Qué significa el código de estado HTTP 403?',
            options: [
                'Not Found',
                'Forbidden (Acceso prohibido)',
                'Unauthorized',
                'OK'
            ],
            correctAnswer: 1,
            explanation: 'El servidor entiende la petición pero se niega a autorizar el acceso.'
        },
        {
            questionText: '¿Qué es el "Overclocking"?',
            options: [
                'Poner un reloj encima del PC.',
                'Aumentar la velocidad de reloj de un componente por encima de las especificaciones del fabricante.',
                'Borrar la hora del sistema.',
                'Actualizar el software.'
            ],
            correctAnswer: 1,
            explanation: 'Mejora el rendimiento a costa de mayor temperatura y menor vida útil.'
        },
        {
            questionText: 'En el contexto de la protección de datos, ¿qué es la "Pseudonimización"?',
            options: [
                'Cambiar el nombre por otro real.',
                'Tratamiento de datos personales de forma que ya no puedan atribuirse a un interesado sin utilizar información adicional por separado.',
                'Borrar los nombres.',
                'Llamarse por un alias.'
            ],
            correctAnswer: 1,
            explanation: 'A diferencia de la anonimización, es un proceso reversible.'
        },
        {
            questionText: '¿Qué es un "Gusano informático" (Worm)?',
            options: [
                'Un virus de tierra.',
                'Malware que se propaga de forma autónoma a través de redes explotando vulnerabilidades sin necesidad de intervención humana ni de un archivo anfitrión.',
                'Un cable de red.',
                'Un fallo de la pantalla.'
            ],
            correctAnswer: 1,
            explanation: 'Su objetivo principal suele ser saturar el ancho de banda de las redes.'
        },
        {
            questionText: '¿Qué significa "SaaS"?',
            options: [
                'Software as a Service',
                'Systems as a Source',
                'Security as a Service',
                'Software as a System'
            ],
            correctAnswer: 0,
            explanation: 'Uso de aplicaciones a través de la web sin instalarlas (ej: Gmail, O365).'
        },
        {
            questionText: '¿Qué es una "Vulnerabilidad"?',
            options: [
                'Un ataque realizado.',
                'Una debilidad o fallo en un sistema de información que puede ser aprovechado por una amenaza.',
                'Un ordenador viejo.',
                'Un antivirus caducado.'
            ],
            correctAnswer: 1,
            explanation: 'La gestión de vulnerabilidades es clave en cualquier política de seguridad.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo de transferencia de noticias seguras (NNTPS)?',
            options: ['119', '443', '563', '993'],
            correctAnswer: 2,
            explanation: 'NNTP sobre SSL/TLS.'
        },
        {
            questionText: '¿Qué es un "Zero-day exploit"?',
            options: [
                'Un exploit que no funciona.',
                'Una vulnerabilidad de software que es desconocida para el fabricante y para la que no existe un parche disponible.',
                'Un ataque que dura un día.',
                'Un exploit muy antiguo.'
            ],
            correctAnswer: 1,
            explanation: 'Son muy peligrosos porque no hay defensa conocida.'
        },
        {
            questionText: '¿Qué es el "Principio de Mínimo Privilegio" en seguridad informática?',
            options: [
                'Dar a todos los usuarios los mismos permisos.',
                'Otorgar a cada usuario o proceso solo los permisos necesarios para realizar sus funciones, y no más.',
                'No dar ningún permiso a nadie.',
                'Dar permisos solo al administrador.'
            ],
            correctAnswer: 1,
            explanation: 'Reduce la superficie de ataque y el impacto de una brecha.'
        },
        {
            questionText: '¿Qué es un "honeypot" en ciberseguridad?',
            options: [
                'Un servidor de producción crítico.',
                'Un sistema informático diseñado para atraer y atrapar a atacantes, con el fin de estudiar sus métodos y herramientas.',
                'Un sistema de almacenamiento de contraseñas.',
                'Un tipo de firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Actúa como un señuelo para desviar a los atacantes de los sistemas reales.'
        },
        {
            questionText: '¿Qué es la "Esteganografía"?',
            options: [
                'El estudio de las estrellas.',
                'La técnica de ocultar un mensaje o archivo dentro de otro mensaje o archivo, de forma que su existencia no sea aparente.',
                'Un tipo de cifrado muy complejo.',
                'El arte de escribir rápido.'
            ],
            correctAnswer: 1,
            explanation: 'A diferencia de la criptografía, que oculta el contenido, la esteganografía oculta la existencia del mensaje.'
        },
        {
            questionText: '¿Qué es un "Reverse Proxy"?',
            options: [
                'Un servidor que reenvía peticiones de clientes a servidores internos, actuando como intermediario y ofreciendo seguridad y balanceo de carga.',
                'Un servidor que solo permite conexiones salientes.',
                'Un tipo de base de datos.',
                'Un programa para hacer copias de seguridad.'
            ],
            correctAnswer: 0,
            explanation: 'Protege los servidores backend y distribuye el tráfico.'
        },
        {
            questionText: '¿Qué es el "Cross-Site Scripting" (XSS)?',
            options: [
                'Un ataque que permite a un atacante inyectar scripts maliciosos en páginas web vistas por otros usuarios.',
                'Un tipo de ataque de denegación de servicio.',
                'Un error en la base de datos.',
                'Un ataque de fuerza bruta.'
            ],
            correctAnswer: 0,
            explanation: 'Los scripts se ejecutan en el navegador de la víctima, pudiendo robar cookies o sesiones.'
        },
        {
            questionText: '¿Qué es un "Content Delivery Network" (CDN)?',
            options: [
                'Una red de servidores distribuidos geográficamente que trabajan juntos para proporcionar una entrega rápida de contenido web a los usuarios.',
                'Un tipo de red local.',
                'Un sistema de almacenamiento en la nube.',
                'Un protocolo de red.'
            ],
            correctAnswer: 0,
            explanation: 'Mejora la velocidad de carga y reduce la latencia al servir contenido desde el servidor más cercano.'
        },
        {
            questionText: '¿Qué es el "Phishing"?',
            options: [
                'Un tipo de pesca.',
                'Un intento de adquirir información sensible (como nombres de usuario, contraseñas y detalles de tarjetas de crédito) haciéndose pasar por una entidad de confianza en una comunicación electrónica.',
                'Un ataque de fuerza bruta.',
                'Un virus que borra archivos.'
            ],
            correctAnswer: 1,
            explanation: 'Suele realizarse a través de correos electrónicos o mensajes falsos.'
        },
        {
            questionText: '¿Qué es un "Firewall de Aplicación Web" (WAF)?',
            options: [
                'Un firewall que protege la red interna.',
                'Un tipo de firewall diseñado específicamente para proteger aplicaciones web de ataques comunes como SQL Injection o XSS.',
                'Un antivirus para servidores.',
                'Un sistema de detección de intrusiones.'
            ],
            correctAnswer: 1,
            explanation: 'Opera en la capa de aplicación (capa 7 del modelo OSI).'
        },
        {
            questionText: '¿Qué es el "Hashing" en criptografía?',
            options: [
                'Un método para cifrar datos de forma reversible.',
                'Una función matemática que transforma una entrada de cualquier tamaño en una cadena de caracteres de tamaño fijo, de forma unidireccional.',
                'Un tipo de compresión de archivos.',
                'Un algoritmo para generar números aleatorios.'
            ],
            correctAnswer: 1,
            explanation: 'Se usa para verificar la integridad de los datos y almacenar contraseñas de forma segura.'
        },
        {
            questionText: '¿Qué es un "Botnet"?',
            options: [
                'Una red de robots físicos.',
                'Una red de ordenadores comprometidos (bots) controlados por un atacante para realizar tareas maliciosas de forma coordinada.',
                'Un tipo de red social.',
                'Un sistema de inteligencia artificial.'
            ],
            correctAnswer: 1,
            explanation: 'Se usan para ataques DDoS, envío de spam, minería de criptomonedas, etc.'
        },
        {
            questionText: '¿Qué es el "Single Sign-On" (SSO)?',
            options: [
                'Un sistema que requiere múltiples inicios de sesión.',
                'Un método de autenticación que permite a un usuario acceder a múltiples aplicaciones y servicios con un único conjunto de credenciales.',
                'Un tipo de cifrado.',
                'Un protocolo de red.'
            ],
            correctAnswer: 1,
            explanation: 'Mejora la experiencia del usuario y la seguridad al reducir la gestión de contraseñas.'
        },
        {
            questionText: '¿Qué es un "Rootkit"?',
            options: [
                'Un kit de herramientas para jardinería.',
                'Un conjunto de herramientas de software diseñado para ocultar la existencia de ciertos procesos o programas de software malicioso en un sistema informático.',
                'Un tipo de antivirus.',
                'Un programa de recuperación de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Permite al atacante mantener el acceso y el control sobre un sistema comprometido de forma sigilosa.'
        },
        {
            questionText: '¿Qué es el "Sandboxing" en seguridad informática?',
            options: [
                'Un juego de niños.',
                'Una técnica de seguridad que aísla la ejecución de programas en un entorno controlado y restringido para evitar que afecten al sistema principal.',
                'Un tipo de almacenamiento en la nube.',
                'Un método de cifrado.'
            ],
            correctAnswer: 1,
            explanation: 'Se usa para probar software sospechoso o ejecutar aplicaciones web de forma segura.'
        },
        {
            questionText: '¿Qué es el "Spoofing"?',
            options: [
                'Un tipo de ataque de fuerza bruta.',
                'La suplantación de identidad de una entidad (IP, MAC, correo electrónico) para engañar a un sistema o usuario.',
                'Un error de software.',
                'Un tipo de cifrado.'
            ],
            correctAnswer: 1,
            explanation: 'Se usa en ataques de phishing, Man-in-the-Middle, etc.'
        },
        {
            questionText: '¿Qué es un "Sistema de Detección de Intrusiones" (IDS)?',
            options: [
                'Un sistema que bloquea intrusiones.',
                'Un dispositivo o aplicación de software que monitorea una red o sistemas en busca de actividades maliciosas o violaciones de políticas.',
                'Un antivirus.',
                'Un firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Alerta sobre posibles ataques, pero no los detiene activamente (a diferencia de un IPS).'
        },
        {
            questionText: '¿Qué es el "Cifrado Asimétrico" (o de clave pública)?',
            options: [
                'Un cifrado que usa la misma clave para cifrar y descifrar.',
                'Un método de cifrado que utiliza un par de claves (pública y privada) para cifrar y descifrar mensajes.',
                'Un cifrado que no es seguro.',
                'Un cifrado que solo funciona en una dirección.'
            ],
            correctAnswer: 1,
            explanation: 'La clave pública se comparte, la privada se mantiene secreta. Se usa en SSL/TLS.'
        },
        {
            questionText: '¿Qué es un "Malware"?',
            options: [
                'Un software de seguridad.',
                'Software diseñado para infiltrarse o dañar un sistema informático sin el consentimiento del propietario.',
                'Un tipo de hardware.',
                'Un error de programación.'
            ],
            correctAnswer: 1,
            explanation: 'Es un término genérico que incluye virus, gusanos, troyanos, ransomware, etc.'
        },
        {
            questionText: '¿Qué es el "Ransomware"?',
            options: [
                'Un tipo de antivirus.',
                'Un tipo de malware que cifra los archivos de la víctima y exige un rescate (generalmente en criptomonedas) para restaurar el acceso.',
                'Un programa para recuperar archivos borrados.',
                'Un sistema de copia de seguridad.'
            ],
            correctAnswer: 1,
            explanation: 'Uno de los ataques más lucrativos y dañinos actualmente.'
        },
        {
            questionText: '¿Qué es la "Autenticación de Dos Factores" (2FA)?',
            options: [
                'Un método de autenticación que solo requiere una contraseña.',
                'Un método de seguridad que requiere dos formas diferentes de identificación para verificar la identidad de un usuario.',
                'Un sistema de autenticación para dos usuarios.',
                'Un tipo de cifrado.'
            ],
            correctAnswer: 1,
            explanation: 'Combina algo que sabes (contraseña) con algo que tienes (móvil) o eres (huella dactilar).'
        },
        {
            questionText: '¿Qué es un "Troyano" en ciberseguridad?',
            options: [
                'Un programa útil que esconde un código malicioso.',
                'Un tipo de malware que se disfraza de software legítimo para engañar al usuario y obtener acceso al sistema.',
                'Un virus que se replica a sí mismo.',
                'Un ataque de denegación de servicio.'
            ],
            correctAnswer: 1,
            explanation: 'No se replica a sí mismo, sino que se instala por engaño.'
        },
        {
            questionText: '¿Qué es el "VPN" (Virtual Private Network)?',
            options: [
                'Una red pública.',
                'Una tecnología que crea una conexión segura y cifrada sobre una red pública (como Internet), permitiendo el acceso remoto a recursos privados.',
                'Un tipo de antivirus.',
                'Un sistema de almacenamiento en la nube.'
            ],
            correctAnswer: 1,
            explanation: 'Protege la privacidad y la seguridad de las comunicaciones.'
        },
        {
            questionText: '¿Qué es el "Brute-force attack" (Ataque de fuerza bruta)?',
            options: [
                'Un ataque que usa la fuerza física.',
                'Un método de ataque que intenta todas las combinaciones posibles de contraseñas o claves hasta encontrar la correcta.',
                'Un ataque que explota una vulnerabilidad conocida.',
                'Un ataque que usa ingeniería social.'
            ],
            correctAnswer: 1,
            explanation: 'Es lento pero efectivo si la contraseña es corta o débil.'
        },
        {
            questionText: '¿Qué es el "SSL/TLS"?',
            options: [
                'Un protocolo de red para correo electrónico.',
                'Protocolos criptográficos que proporcionan comunicaciones seguras a través de una red, comúnmente usados para proteger transacciones web (HTTPS).',
                'Un tipo de base de datos.',
                'Un lenguaje de programación.'
            ],
            correctAnswer: 1,
            explanation: 'TLS es la evolución de SSL.'
        },
        {
            questionText: '¿Qué es un "Exploit"?',
            options: [
                'Un programa que arregla errores.',
                'Un fragmento de software, datos o secuencia de comandos que aprovecha un error o vulnerabilidad en un sistema informático para causar un comportamiento no deseado.',
                'Un tipo de antivirus.',
                'Un sistema de detección de intrusiones.'
            ],
            correctAnswer: 1,
            explanation: 'Es la herramienta que se usa para llevar a cabo un ataque.'
        },
        {
            questionText: '¿Qué es el "Ingeniería Social" en ciberseguridad?',
            options: [
                'El estudio de las redes sociales.',
                'La manipulación psicológica de personas para que realicen acciones o divulguen información confidencial.',
                'Un tipo de ataque de fuerza bruta.',
                'Un ataque que explota vulnerabilidades técnicas.'
            ],
            correctAnswer: 1,
            explanation: 'Es una de las técnicas más efectivas para obtener acceso a sistemas.'
        },
        {
            questionText: '¿Qué es un "Proxy Server"?',
            options: [
                'Un servidor que solo permite conexiones internas.',
                'Un servidor que actúa como intermediario para las solicitudes de clientes que buscan recursos de otros servidores.',
                'Un tipo de base de datos.',
                'Un programa para hacer copias de seguridad.'
            ],
            correctAnswer: 1,
            explanation: 'Puede mejorar la seguridad, el rendimiento y el anonimato.'
        },
        {
            questionText: '¿Qué es el "Web Application Firewall" (WAF)?',
            options: [
                'Un firewall que protege la red interna.',
                'Un tipo de firewall diseñado específicamente para proteger aplicaciones web de ataques comunes como SQL Injection o XSS.',
                'Un antivirus para servidores.',
                'Un sistema de detección de intrusiones.'
            ],
            correctAnswer: 1,
            explanation: 'Opera en la capa de aplicación (capa 7 del modelo OSI).'
        },
        {
            questionText: '¿Qué es el "Cifrado Simétrico"?',
            options: [
                'Un cifrado que usa un par de claves (pública y privada).',
                'Un método de cifrado que utiliza la misma clave para cifrar y descifrar mensajes.',
                'Un cifrado que no es seguro.',
                'Un cifrado que solo funciona en una dirección.'
            ],
            correctAnswer: 1,
            explanation: 'Es más rápido que el asimétrico y se usa para cifrar grandes volúmenes de datos.'
        },
        {
            questionText: '¿Qué es un "Sistema de Prevención de Intrusiones" (IPS)?',
            options: [
                'Un sistema que solo detecta intrusiones.',
                'Un dispositivo o aplicación de software que monitorea una red o sistemas en busca de actividades maliciosas y toma acciones para bloquearlas.',
                'Un antivirus.',
                'Un firewall.'
            ],
            correctAnswer: 1,
            explanation: 'A diferencia de un IDS, un IPS puede detener activamente los ataques.'
        },
        {
            questionText: '¿Qué es el "Data Loss Prevention" (DLP)?',
            options: [
                'Un sistema para recuperar datos perdidos.',
                'Un conjunto de herramientas y procesos diseñados para asegurar que la información sensible no sea perdida, robada o utilizada de forma indebida.',
                'Un sistema de copia de seguridad.',
                'Un tipo de cifrado.'
            ],
            correctAnswer: 1,
            explanation: 'Evita la fuga de información confidencial.'
        },
        {
            questionText: '¿Qué es un "Security Information and Event Management" (SIEM)?',
            options: [
                'Un sistema de gestión de usuarios.',
                'Una solución de software que recopila y analiza datos de seguridad de múltiples fuentes para proporcionar una visión centralizada de la postura de seguridad de una organización.',
                'Un antivirus.',
                'Un firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Ayuda a detectar y responder a incidentes de seguridad.'
        },
        {
            questionText: '¿Qué es el "Penetration Testing" (Pentesting)?',
            options: [
                'Un tipo de prueba de software.',
                'Una simulación de un ataque cibernético contra un sistema informático para encontrar vulnerabilidades de seguridad.',
                'Un análisis de rendimiento.',
                'Una auditoría de código.'
            ],
            correctAnswer: 1,
            explanation: 'Se realiza con el consentimiento del propietario del sistema para mejorar la seguridad.'
        },
        {
            questionText: '¿Qué es el "Threat Intelligence"?',
            options: [
                'Información sobre el clima.',
                'Información basada en evidencia sobre amenazas existentes o emergentes que puede ser utilizada para tomar decisiones de seguridad.',
                'Un tipo de inteligencia artificial.',
                'Un sistema de detección de intrusiones.'
            ],
            correctAnswer: 1,
            explanation: 'Ayuda a las organizaciones a comprender y anticipar los ataques.'
        },
        {
            questionText: '¿Qué es el "Endpoint Detection and Response" (EDR)?',
            options: [
                'Un sistema de detección de intrusiones en la red.',
                'Una solución de seguridad que monitorea y registra la actividad en los endpoints (ordenadores, servidores) para detectar y responder a amenazas avanzadas.',
                'Un antivirus tradicional.',
                'Un firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Va más allá del antivirus tradicional al proporcionar capacidades de detección y respuesta.'
        },
        {
            questionText: '¿Qué es el "Security Operations Center" (SOC)?',
            options: [
                'Un centro de datos.',
                'Un equipo centralizado de profesionales de seguridad que monitorean, detectan, analizan y responden a incidentes de seguridad.',
                'Un centro de soporte técnico.',
                'Un centro de desarrollo de software.'
            ],
            correctAnswer: 1,
            explanation: 'Es el cerebro de la seguridad de una organización.'
        },
        {
            questionText: '¿Qué es el "Cloud Access Security Broker" (CASB)?',
            options: [
                'Un broker de bolsa en la nube.',
                'Un punto de aplicación de políticas de seguridad entre los usuarios y los proveedores de servicios en la nube.',
                'Un tipo de firewall para la nube.',
                'Un sistema de almacenamiento en la nube.'
            ],
            correctAnswer: 1,
            explanation: 'Ayuda a extender las políticas de seguridad de la empresa a la nube.'
        },
        {
            questionText: '¿Qué es el "Distributed Ledger Technology" (DLT)?',
            options: [
                'Una base de datos centralizada.',
                'Una base de datos distribuida y descentralizada que es compartida y sincronizada entre múltiples participantes.',
                'Un tipo de sistema operativo.',
                'Un protocolo de red.'
            ],
            correctAnswer: 1,
            explanation: 'Blockchain es un tipo de DLT.'
        },
        {
            questionText: '¿Qué es el "Multi-Factor Authentication" (MFA)?',
            options: [
                'Un método de autenticación que solo requiere una contraseña.',
                'Un método de seguridad que requiere dos o más formas diferentes de identificación para verificar la identidad de un usuario.',
                'Un sistema de autenticación para múltiples usuarios.',
                'Un tipo de cifrado.'
            ],
            correctAnswer: 1,
            explanation: 'Es una evolución de 2FA, permitiendo más de dos factores.'
        },
        {
            questionText: '¿Qué es el "Threat Hunting"?',
            options: [
                'La búsqueda de amenazas conocidas.',
                'Un proceso proactivo e iterativo de búsqueda de amenazas desconocidas o no detectadas dentro de una red o sistema.',
                'Un tipo de análisis forense.',
                'Un sistema de detección de intrusiones.'
            ],
            correctAnswer: 1,
            explanation: 'Busca activamente a los atacantes que han logrado evadir las defensas existentes.'
        },
        {
            questionText: '¿Qué es el "DevSecOps"?',
            options: [
                'Un modelo de desarrollo de software sin seguridad.',
                'Una metodología que integra la seguridad en cada etapa del ciclo de vida de desarrollo de software, desde el diseño hasta la implementación y operación.',
                'Un tipo de operación de seguridad.',
                'Un equipo de desarrollo de software.'
            ],
            correctAnswer: 1,
            explanation: 'Busca automatizar y "shift-left" la seguridad.'
        },
        {
            questionText: '¿Qué es el "Software-Defined Networking" (SDN)?',
            options: [
                'Una red tradicional basada en hardware.',
                'Una arquitectura de red que desacopla el plano de control del plano de datos, permitiendo una gestión centralizada y programable de la red.',
                'Un tipo de red inalámbrica.',
                'Un protocolo de red.'
            ],
            correctAnswer: 1,
            explanation: 'Permite una mayor flexibilidad y automatización en la gestión de redes.'
        },
        {
            questionText: '¿Qué es el "Network Access Control" (NAC)?',
            options: [
                'Un sistema que controla el acceso a Internet.',
                'Una solución de seguridad que restringe el acceso a la red a dispositivos y usuarios que cumplen con ciertas políticas de seguridad.',
                'Un tipo de firewall.',
                'Un sistema de detección de intrusiones.'
            ],
            correctAnswer: 1,
            explanation: 'Asegura que solo los dispositivos autorizados y conformes puedan conectarse a la red.'
        },
        {
            questionText: '¿Qué es el "Security Orchestration, Automation and Response" (SOAR)?',
            options: [
                'Un sistema de gestión de eventos de seguridad.',
                'Una solución que permite a las organizaciones recopilar datos de seguridad, orquestar flujos de trabajo y automatizar respuestas a incidentes de seguridad.',
                'Un tipo de antivirus.',
                'Un firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Mejora la eficiencia y la velocidad de respuesta ante incidentes.'
        },
        {
            questionText: '¿Qué es el "Zero Trust Network Access" (ZTNA)?',
            options: [
                'Un modelo de red que confía en todos los usuarios.',
                'Un modelo de seguridad que asume que ningún usuario o dispositivo es de confianza por defecto, independientemente de su ubicación, y requiere verificación continua.',
                'Un tipo de VPN.',
                'Un firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Es una implementación del principio de Zero Trust para el acceso a la red.'
        },
        {
            questionText: '¿Qué es el "Containerization" (Contenedorización)?',
            options: [
                'Un método de almacenamiento de datos.',
                'Una forma de empaquetar una aplicación y todas sus dependencias en un "contenedor" aislado que puede ejecutarse de forma consistente en cualquier entorno.',
                'Un tipo de virtualización de hardware.',
                'Un sistema de gestión de versiones.'
            ],
            correctAnswer: 1,
            explanation: 'Docker es la tecnología más conocida para esto.'
        },
        {
            questionText: '¿Qué es el "Orquestación de Contenedores"?',
            options: [
                'La gestión manual de contenedores.',
                'La automatización del despliegue, escalado, gestión y redes de contenedores.',
                'Un tipo de virtualización.',
                'Un sistema de monitorización.'
            ],
            correctAnswer: 1,
            explanation: 'Kubernetes es la herramienta de orquestación de contenedores más popular.'
        },
        {
            questionText: '¿Qué es el "Serverless Computing"?',
            options: [
                'Un modelo de computación que no usa servidores.',
                'Un modelo de ejecución en la nube donde el proveedor gestiona la infraestructura del servidor, y el usuario solo paga por el tiempo de ejecución del código.',
                'Un tipo de base de datos.',
                'Un sistema operativo.'
            ],
            correctAnswer: 1,
            explanation: 'También conocido como Functions as a Service (FaaS).'
        },
        {
            questionText: '¿Qué es el "Edge Computing"?',
            options: [
                'Un tipo de computación en la nube centralizada.',
                'Un paradigma de computación que acerca el procesamiento de datos y el almacenamiento a la fuente de los datos, en el "borde" de la red.',
                'Un sistema de computación de alto rendimiento.',
                'Un tipo de red inalámbrica.'
            ],
            correctAnswer: 1,
            explanation: 'Reduce la latencia y el ancho de banda necesario para enviar datos a la nube.'
        },
        {
            questionText: '¿Qué es el "Quantum Computing"?',
            options: [
                'Un tipo de computación clásica muy rápida.',
                'Un nuevo paradigma de computación que utiliza fenómenos de la mecánica cuántica (superposición, entrelazamiento) para realizar cálculos complejos.',
                'Un tipo de computación distribuida.',
                'Un sistema de computación en la nube.'
            ],
            correctAnswer: 1,
            explanation: 'Promete resolver problemas intratables para los ordenadores clásicos.'
        },
        {
            questionText: '¿Qué es el "Blockchain"?',
            options: [
                'Una base de datos centralizada.',
                'Una cadena de bloques de datos inmutable y distribuida, protegida criptográficamente, que se utiliza para registrar transacciones.',
                'Un tipo de red social.',
                'Un sistema de almacenamiento en la nube.'
            ],
            correctAnswer: 1,
            explanation: 'Es la tecnología subyacente de las criptomonedas como Bitcoin.'
        },
        {
            questionText: '¿Qué es el "Machine Learning" (ML)?',
            options: [
                'Un tipo de programación tradicional.',
                'Una rama de la inteligencia artificial que permite a los sistemas aprender de los datos sin ser programados explícitamente.',
                'Un sistema de automatización de tareas.',
                'Un tipo de base de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Se usa en reconocimiento de voz, visión por computadora, sistemas de recomendación, etc.'
        },
        {
            questionText: '¿Qué es el "Deep Learning" (DL)?',
            options: [
                'Un tipo de aprendizaje automático superficial.',
                'Una subcategoría del Machine Learning que utiliza redes neuronales artificiales con múltiples capas (redes neuronales profundas) para aprender de grandes volúmenes de datos.',
                'Un tipo de base de datos.',
                'Un sistema de procesamiento de lenguaje natural.'
            ],
            correctAnswer: 1,
            explanation: 'Ha logrado avances significativos en áreas como el reconocimiento de imágenes y el procesamiento del lenguaje natural.'
        },
        {
            questionText: '¿Qué es el "Natural Language Processing" (NLP)?',
            options: [
                'El procesamiento de lenguajes de programación.',
                'Una rama de la inteligencia artificial que se ocupa de la interacción entre ordenadores y el lenguaje humano natural.',
                'Un sistema de reconocimiento de voz.',
                'Un tipo de base de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Se usa en asistentes virtuales, traducción automática, análisis de sentimientos, etc.'
        },
        {
            questionText: '¿Qué es el "Computer Vision"?',
            options: [
                'La visión humana.',
                'Un campo de la inteligencia artificial que permite a los ordenadores "ver" e interpretar imágenes y videos del mundo real.',
                'Un tipo de pantalla de ordenador.',
                'Un sistema de reconocimiento de voz.'
            ],
            correctAnswer: 1,
            explanation: 'Se usa en reconocimiento facial, coches autónomos, inspección industrial, etc.'
        },
        {
            questionText: '¿Qué es el "Internet of Things" (IoT)?',
            options: [
                'Una red de ordenadores.',
                'La interconexión de dispositivos físicos, vehículos, electrodomésticos y otros elementos incrustados con sensores, software y otras tecnologías que les permiten conectarse e intercambiar datos.',
                'Un tipo de red social.',
                'Un sistema de almacenamiento en la nube.'
            ],
            correctAnswer: 1,
            explanation: 'Permite la creación de entornos inteligentes y automatizados.'
        },
        {
            questionText: '¿Qué es el "Big Data"?',
            options: [
                'Una base de datos pequeña.',
                'Conjuntos de datos tan grandes y complejos que las aplicaciones de procesamiento de datos tradicionales no son suficientes para tratarlos.',
                'Un tipo de almacenamiento en la nube.',
                'Un sistema de gestión de bases de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Se caracteriza por las "3 V": Volumen, Velocidad y Variedad.'
        },
        {
            questionText: '¿Qué es el "Data Mining"?',
            options: [
                'La extracción de minerales.',
                'El proceso de descubrir patrones y conocimientos útiles en grandes conjuntos de datos utilizando técnicas de Machine Learning, estadística y sistemas de bases de datos.',
                'Un tipo de base de datos.',
                'Un sistema de almacenamiento de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Se usa para predecir tendencias, detectar fraudes, etc.'
        },
        {
            questionText: '¿Qué es el "Business Intelligence" (BI)?',
            options: [
                'La inteligencia humana en los negocios.',
                'Un conjunto de estrategias y herramientas que se utilizan para transformar datos brutos en información significativa y útil para el análisis empresarial.',
                'Un tipo de inteligencia artificial.',
                'Un sistema de gestión de proyectos.'
            ],
            correctAnswer: 1,
            explanation: 'Ayuda a las empresas a tomar decisiones más informadas.'
        },
        {
            questionText: '¿Qué es el "Data Warehouse"?',
            options: [
                'Un almacén físico de datos.',
                'Un sistema de almacenamiento de datos diseñado para el análisis y la elaboración de informes, que consolida datos de múltiples fuentes operacionales.',
                'Un tipo de base de datos transaccional.',
                'Un sistema de copia de seguridad.'
            ],
            correctAnswer: 1,
            explanation: 'Optimizado para consultas complejas y análisis históricos.'
        },
        {
            questionText: '¿Qué es el "Data Lake"?',
            options: [
                'Un tipo de base de datos relacional.',
                'Un repositorio centralizado que permite almacenar grandes cantidades de datos brutos en su formato nativo, sin necesidad de una estructura predefinida.',
                'Un tipo de Data Warehouse.',
                'Un sistema de almacenamiento en la nube.'
            ],
            correctAnswer: 1,
            explanation: 'Permite almacenar datos estructurados, semiestructurados y no estructurados.'
        },
        {
            questionText: '¿Qué es el "ETL" (Extract, Transform, Load)?',
            options: [
                'Un lenguaje de programación.',
                'Un proceso en el que se extraen datos de diversas fuentes, se transforman para cumplir con los requisitos del negocio y se cargan en un destino (como un Data Warehouse).',
                'Un tipo de base de datos.',
                'Un sistema de gestión de proyectos.'
            ],
            correctAnswer: 1,
            explanation: 'Es fundamental en los procesos de integración de datos.'
        },
        {
            questionText: '¿Qué es el "API Gateway"?',
            options: [
                'Una puerta de entrada física.',
                'Un servidor que actúa como un único punto de entrada para múltiples APIs, gestionando el enrutamiento, la autenticación, la limitación de tasas y otras funciones.',
                'Un tipo de base de datos.',
                'Un sistema de gestión de usuarios.'
            ],
            correctAnswer: 1,
            explanation: 'Simplifica la gestión de microservicios y APIs.'
        },
        {
            questionText: '¿Qué es el "Message Queue" (Cola de Mensajes)?',
            options: [
                'Un sistema de chat.',
                'Un componente de software que permite la comunicación asíncrona entre diferentes aplicaciones o microservicios, almacenando mensajes temporalmente.',
                'Un tipo de base de datos.',
                'Un sistema de almacenamiento de archivos.'
            ],
            correctAnswer: 1,
            explanation: 'Mejora la resiliencia y escalabilidad de los sistemas distribuidos.'
        },
        {
            questionText: '¿Qué es el "Load Balancer" (Balanceador de Carga)?',
            options: [
                'Un dispositivo que equilibra el peso de los servidores.',
                'Un dispositivo que distribuye el tráfico de red o de aplicaciones entre múltiples servidores para optimizar el uso de recursos, maximizar el rendimiento y garantizar la alta disponibilidad.',
                'Un tipo de firewall.',
                'Un sistema de almacenamiento.'
            ],
            correctAnswer: 1,
            explanation: 'Es esencial para aplicaciones web de alta disponibilidad y escalabilidad.'
        },
        {
            questionText: '¿Qué es el "Content Management System" (CMS)?',
            options: [
                'Un sistema de gestión de clientes.',
                'Un software que permite a los usuarios crear, gestionar y modificar contenido en un sitio web sin necesidad de conocimientos técnicos avanzados.',
                'Un tipo de base de datos.',
                'Un lenguaje de programación.'
            ],
            correctAnswer: 1,
            explanation: 'WordPress, Joomla y Drupal son ejemplos populares.'
        },
        {
            questionText: '¿Qué es el "Customer Relationship Management" (CRM)?',
            options: [
                'Un sistema de gestión de recursos humanos.',
                'Un software que ayuda a las empresas a gestionar y analizar las interacciones con los clientes y los datos a lo largo del ciclo de vida del cliente.',
                'Un sistema de gestión de proyectos.',
                'Un tipo de base de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Mejora las relaciones con los clientes y la retención.'
        },
        {
            questionText: '¿Qué es el "Enterprise Resource Planning" (ERP)?',
            options: [
                'Un sistema de gestión de clientes.',
                'Un software que integra todos los procesos de negocio de una organización (finanzas, recursos humanos, fabricación, cadena de suministro) en un único sistema.',
                'Un sistema de gestión de proyectos.',
                'Un tipo de base de datos.'
            ],
            correctAnswer: 1,
            explanation: 'SAP y Oracle E-Business Suite son ejemplos de ERPs.'
        },
        {
            questionText: '¿Qué es el "Service Level Agreement" (SLA)?',
            options: [
                'Un acuerdo de nivel de servicio.',
                'Un contrato entre un proveedor de servicios y un cliente que define el nivel de servicio que se espera del proveedor.',
                'Un tipo de licencia de software.',
                'Un acuerdo de confidencialidad.'
            ],
            correctAnswer: 1,
            explanation: 'Especifica métricas como el tiempo de actividad, el rendimiento y el soporte.'
        },
        {
            questionText: '¿Qué es el "Key Performance Indicator" (KPI)?',
            options: [
                'Un indicador de rendimiento clave.',
                'Una métrica cuantificable que se utiliza para evaluar el éxito de una organización, departamento o individuo en el logro de objetivos empresariales.',
                'Un tipo de algoritmo de cifrado.',
                'Un sistema de gestión de proyectos.'
            ],
            correctAnswer: 1,
            explanation: 'Ayuda a medir el progreso y tomar decisiones informadas.'
        },
        {
            questionText: '¿Qué es el "Return on Investment" (ROI)?',
            options: [
                'Un tipo de interés bancario.',
                'Una métrica que se utiliza para evaluar la eficiencia de una inversión, comparando el beneficio obtenido con el coste de la inversión.',
                'Un tipo de impuesto.',
                'Un indicador de riesgo.'
            ],
            correctAnswer: 1,
            explanation: 'Es fundamental para justificar proyectos y decisiones de negocio.'
        },
        {
            questionText: '¿Qué es el "Total Cost of Ownership" (TCO)?',
            options: [
                'El coste inicial de un producto.',
                'Una estimación del coste total de un activo a lo largo de su ciclo de vida, incluyendo costes directos e indirectos.',
                'El coste de mantenimiento anual.',
                'El precio de venta de un producto.'
            ],
            correctAnswer: 1,
            explanation: 'Ayuda a tomar decisiones de compra más informadas.'
        },
        {
            questionText: '¿Qué es el "Agile Software Development"?',
            options: [
                'Un modelo de desarrollo de software lineal.',
                'Una metodología de desarrollo de software que se basa en ciclos de desarrollo iterativos e incrementales, con un enfoque en la colaboración y la adaptación al cambio.',
                'Un tipo de lenguaje de programación.',
                'Un sistema de gestión de proyectos.'
            ],
            correctAnswer: 1,
            explanation: 'Scrum y Kanban son marcos de trabajo Agile populares.'
        },
        {
            questionText: '¿Qué es el "Scrum" en el desarrollo de software?',
            options: [
                'Un tipo de base de datos.',
                'Un marco de trabajo ágil para la gestión de proyectos de software, que se basa en ciclos de trabajo cortos (sprints) y roles definidos.',
                'Un lenguaje de programación.',
                'Un sistema de control de versiones.'
            ],
            correctAnswer: 1,
            explanation: 'Incluye roles como Product Owner, Scrum Master y Equipo de Desarrollo.'
        },
        {
            questionText: '¿Qué es el "Kanban" en el desarrollo de software?',
            options: [
                'Un tipo de base de datos.',
                'Un método ágil para visualizar el flujo de trabajo, limitar el trabajo en curso y maximizar la eficiencia, utilizando un tablero visual.',
                'Un lenguaje de programación.',
                'Un sistema de control de versiones.'
            ],
            correctAnswer: 1,
            explanation: 'Se enfoca en la mejora continua y la entrega de valor.'
        },
        {
            questionText: '¿Qué es el "DevOps"?',
            options: [
                'Un modelo de desarrollo de software sin operaciones.',
                'Una cultura y un conjunto de prácticas que integran el desarrollo de software (Dev) y las operaciones de TI (Ops) para acortar el ciclo de vida del desarrollo de sistemas.',
                'Un tipo de lenguaje de programación.',
                'Un sistema de gestión de proyectos.'
            ],
            correctAnswer: 1,
            explanation: 'Busca automatizar y optimizar los procesos de entrega de software.'
        },
        {
            questionText: '¿Qué es el "Continuous Integration" (CI)?',
            options: [
                'Un proceso de integración manual de código.',
                'Una práctica de desarrollo de software donde los desarrolladores integran su código en un repositorio compartido varias veces al día, y cada integración es verificada por una construcción automatizada.',
                'Un tipo de base de datos.',
                'Un sistema de control de versiones.'
            ],
            correctAnswer: 1,
            explanation: 'Ayuda a detectar errores de integración tempranamente.'
        },
        {
            questionText: '¿Qué es el "Continuous Delivery" (CD)?',
            options: [
                'Un proceso de entrega manual de software.',
                'Una práctica de desarrollo de software donde el código se construye, prueba y prepara automáticamente para su lanzamiento a producción en cualquier momento.',
                'Un tipo de base de datos.',
                'Un sistema de control de versiones.'
            ],
            correctAnswer: 1,
            explanation: 'Es una extensión de la Integración Continua.'
        },
        {
            questionText: '¿Qué es el "Continuous Deployment" (CD)?',
            options: [
                'Un proceso de despliegue manual de software.',
                'Una práctica de desarrollo de software donde cada cambio que pasa las pruebas automatizadas se despliega automáticamente a producción.',
                'Un tipo de base de datos.',
                'Un sistema de control de versiones.'
            ],
            correctAnswer: 1,
            explanation: 'Es una automatización completa del proceso de entrega de software.'
        }
    ]
};
