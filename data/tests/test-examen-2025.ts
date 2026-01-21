
import type { Test } from '../../types';

export const TEST_EXAMEN_2025: Test = {
    id: 'test-examen-2025',
    title: 'Examen Oficial TAI 2025 (Simulacro Nivel Máximo)',
    questions: [
        // BLOQUE I: ADMINISTRACIÓN PÚBLICA (NIVEL EXPERTO)
        {
            questionText: 'En una licitación pública bajo la LCSP 9/2017, ¿cuál es el plazo mínimo de presentación de proposiciones en un procedimiento abierto simplificado "abreviado" (art. 159.6) para contratos de suministros?',
            options: ['10 días hábiles', '15 días hábiles', '20 días hábiles', '30 días naturales'],
            correctAnswer: 0,
            explanation: 'Para suministros y servicios en el abierto simplificado abreviado (SARA no sujeto), el plazo es de 10 días hábiles.'
        },
        {
            questionText: 'Según la Ley 39/2015, si una notificación por medios electrónicos es rechazada por el interesado, ¿qué efecto tiene?',
            options: [
                'Se tiene por efectuada a todos los efectos legales, dándose por concluido el trámite.',
                'Se debe intentar una notificación en papel obligatoriamente.',
                'El plazo de resolución se suspende.',
                'No tiene ningún efecto legal.'
            ],
            correctAnswer: 0,
            explanation: 'El rechazo de la notificación electrónica no impide que se considere realizada (Art. 41 Ley 39/2015).'
        },
        {
            questionText: 'En el marco de la Ley 40/2015, los Consorcios son entidades de derecho público que se crean mediante:',
            options: ['Ley de las Cortes', 'Convenio entre las Administraciones participantes', 'Real Decreto', 'Orden Ministerial'],
            correctAnswer: 1,
            explanation: 'Artículo 118 de la Ley 40/2015.'
        },
        {
            questionText: '¿Cuál es el límite máximo de duración de un contrato menor de obras según la normativa vigente?',
            options: ['6 meses', '1 año', '2 años', '4 años'],
            correctAnswer: 1,
            explanation: 'Los contratos menores no pueden tener una duración superior a un año ni ser objeto de prórroga.'
        },
        {
            questionText: 'Según el TREBEP, ¿qué sanción corresponde legalmente a una falta LEVE?',
            options: ['Amonestación por escrito', 'Traslado forzoso', 'Suspensión de funciones hasta 3 años', 'Demérito'],
            correctAnswer: 0,
            explanation: 'La amonestación es la sanción típica para faltas leves.'
        },

        // BLOQUE II: TECNOLOGÍA PUNTERA
        {
            questionText: '¿Cuál es la principal mejora técnica introducida por Wi-Fi 7 (802.11be) respecto a Wi-Fi 6E?',
            options: [
                'Uso por primera vez de la banda de 6GHz.',
                'Multi-Link Operation (MLO) y canales de hasta 320 MHz.',
                'Eliminación de las colisiones CSMA/CA.',
                'Solo funciona con fibra óptica.'
            ],
            correctAnswer: 1,
            explanation: 'Wi-Fi 7 permite usar múltiples bandas simultáneamente (MLO) para mayor rendimiento y menor latencia.'
        },
        {
            questionText: 'En una arquitectura de CPU moderna, ¿qué es el "Speculative Execution Side-Channel"?',
            options: [
                'Un acelerador de tareas gráficas.',
                'Una vulnerabilidad que aprovecha la ejecución predictiva de instrucciones para leer memoria protegida (ej: Spectre).',
                'Un modo de depuración remota.',
                'Un tipo de memoria caché de alta velocidad.'
            ],
            correctAnswer: 1,
            explanation: 'Aprovecha que los procesadores ejecutan instrucciones antes de saber si son necesarias.'
        },
        {
            questionText: '¿Qué tecnología de almacenamiento utiliza el estándar PCIe 5.0 y versiones superiores para alcanzar velocidades de transferencia de más de 10 GB/s?',
            options: ['SATA Express', 'NVMe sobre líneas PCIe directas', 'SAS 12G', 'Thunderbolt 3'],
            correctAnswer: 1,
            explanation: 'NVMe es el protocolo diseñado para maximizar el paralelismo del almacenamiento sólido.'
        },
        {
            questionText: 'En el contexto de la Computación Cuántica, ¿qué es la "Superposición"?',
            options: [
                'Poner un chip encima de otro.',
                'La capacidad de un qubit de estar en un estado de 0, 1 o ambos simultáneamente hasta que se mide.',
                'Un error de cálculo.',
                'El enfriamiento del sistema.'
            ],
            correctAnswer: 1,
            explanation: 'Es uno de los principios fundamentales que permite la potencia de cálculo exponencial de los ordenadores cuánticos.'
        },
        {
            questionText: '¿Qué es el "Cifrado Post-Cuántico" (PQC)?',
            options: [
                'Cifrar datos del futuro.',
                'Algoritmos criptográficos diseñados para ser seguros frente a un ataque realizado por un ordenador cuántico a gran escala.',
                'Un tipo de VPN muy rápida.',
                'Cifrado que usa láseres.'
            ],
            correctAnswer: 1,
            explanation: 'Se basa en problemas matemáticos que los ordenadores cuánticos no resuelven eficientemente (ej: reticulados).'
        },

        // BLOQUE III: DESARROLLO Y ARQUITECTURAS MODERNAS
        {
            questionText: '¿Qué es una arquitectura de "Micro-frontends"?',
            options: [
                'Páginas web muy pequeñas.',
                'Extensión del concepto de microservicios al frontend, permitiendo que diferentes equipos desarrollen partes de la UI de forma independiente.',
                'Usar solo JavaScript nativo.',
                'Un framework de CSS.'
            ],
            correctAnswer: 1,
            explanation: 'Permite desacoplar el desarrollo de grandes interfaces web complejas.'
        },
        {
            questionText: 'En Kubernetes, ¿qué es un "Custom Resource Definition" (CRD)?',
            options: [
                'Un error de configuración.',
                'Una extensión de la API de Kubernetes que permite crear tipos de recursos personalizados y gestionar su ciclo de vida con controladores propios.',
                'El manual de uso del clúster.',
                'Un tipo de red virtual.'
            ],
            correctAnswer: 1,
            explanation: 'Permite que Kubernetes actúe como una plataforma extensible (Operadores).'
        },
        {
            questionText: '¿Qué es el "Prompt Engineering" en el desarrollo de aplicaciones con IA Generativa?',
            options: [
                'Arreglar el hardware de la IA.',
                'El diseño creativo y optimización de las instrucciones de entrada para modelos de lenguaje (LLM) para obtener resultados precisos.',
                'Un lenguaje de programación de bajo nivel.',
                'La velocidad de respuesta de la IA.'
            ],
            correctAnswer: 1,
            explanation: 'Es clave para integrar modelos como GPT-4 o Claude en aplicaciones profesionales.'
        },
        {
            questionText: '¿Qué diferencia a WebAssembly (Wasm) de JavaScript?',
            options: [
                'Wasm es un formato de instrucciones binario de bajo nivel que permite ejecutar código compilado (C++, Rust) en el navegador a velocidad cercana a la nativa.',
                'Wasm es solo para imágenes.',
                'JS es más rápido que Wasm.',
                'Wasm sustituye al HTML.'
            ],
            correctAnswer: 0,
            explanation: 'Wasm complementa a JS para tareas de cálculo intensivo (videojuegos, edición de video en la web).'
        },
        {
            questionText: '¿Qué es el "Hydration" en frameworks modernos como Next.js o Remix?',
            options: [
                'Limpiar el código.',
                'El proceso por el cual el cliente (navegador) añade interactividad de JavaScript a un HTML que ya ha sido renderizado estáticamente en el servidor.',
                'Un error de memoria.',
                'Cargar imágenes progresivamente.'
            ],
            correctAnswer: 1,
            explanation: 'Permite una carga inicial rápida (SEO) con la potencia de una Single Page App.'
        },

        // BLOQUE IV: SEGURIDAD Y CLOUD NATIVE
        {
            questionText: '¿Qué es el modelo de seguridad "Shift-Left"?',
            options: [
                'Mover los servidores a la izquierda del Rack.',
                'Integrar las pruebas y controles de seguridad en las etapas más tempranas del desarrollo (diseño, codificación) en lugar de al final.',
                'Usar solo software libre.',
                'Un tipo de firewall.'
            ],
            correctAnswer: 1,
            explanation: 'Reduce costes y riesgos al detectar fallos de seguridad cuanto antes.'
        },
        {
            questionText: 'En seguridad en la nube (Cloud Security), ¿qué es el CSMA (Cloud Security Management Architecture)?',
            options: [
                'Un sistema de cables.',
                'Una arquitectura que unifica la gestión de seguridad en múltiples nubes y entornos on-premise.',
                'Un tipo de cifrado de disco.',
                'El nombre del firewall de Amazon.'
            ],
            correctAnswer: 1,
            explanation: 'Busca centralizar la visibilidad y cumplimiento en infraestructuras híbridas.'
        },
        {
            questionText: '¿Qué es una vulnerabilidad de "Supply Chain Attack" (Ataque a la cadena de suministro)?',
            options: [
                'Robar los camiones del proveedor.',
                'Un ataque que compromete a un proveedor de software o una librería de terceros para infectar a todos sus clientes (ej: SolarWinds, Log4j).',
                'Un error en el transporte de datos.',
                'Hackear una tienda online.'
            ],
            correctAnswer: 1,
            explanation: 'Es extremadamente peligroso por la confianza implícita en las actualizaciones de software.'
        },
        {
            questionText: '¿Cuál es la función del protocolo TLS 1.3 respecto a versiones anteriores?',
            options: [
                'Elimina algoritmos criptográficos débiles y reduce el número de mensajes en el handshake (0-RTT).',
                'Sustituir a Internet.',
                'No requiere certificados.',
                'Es más lento pero más seguro.'
            ],
            correctAnswer: 0,
            explanation: 'Mejora tanto la velocidad como la seguridad al eliminar legacy protocols.'
        },
        {
            questionText: '¿Qué es el "Chaos Engineering"?',
            options: [
                'No seguir ninguna norma al programar.',
                'La disciplina de experimentar en un sistema distribuido para generar confianza en su capacidad de resistir condiciones turbulentas introduciendo fallos controlados.',
                'Un tipo de virus destructivo.',
                'Un error aleatorio en el servidor.'
            ],
            correctAnswer: 1,
            explanation: 'Popularizado por Netflix (Simian Army).'
        },
        // Añadiendo el resto hasta 80 de forma masiva...
        {
            questionText: 'En el desarrollo de software, ¿qué es la "Programación Reactiva"?',
            options: ['Programar reaccionando a errores', 'Un paradigma orientado al flujo de datos y la propagación del cambio', 'Usar React.js', 'Programar solo para móviles'],
            correctAnswer: 1,
            explanation: 'Basado en el patrón Observer e Iterable.'
        },
        {
            questionText: '¿Qué puerto TCP utiliza por defecto el protocolo PostgreSQL?',
            options: ['3306', '5432', '1433', '1521'],
            correctAnswer: 1,
            explanation: 'Estándar para bases de datos relacionales abiertas.'
        },
        {
            questionText: '¿Cuál es el valor máximo de MTU estándar para tramas Ethernet?',
            options: ['1500 bytes', '9000 bytes', '512 bytes', '64 KB'],
            correctAnswer: 0,
            explanation: '1500 bytes es el valor por defecto (trama estándar).'
        },
        {
            questionText: '¿Qué es un "Inodo" en sistemas de archivos Linux?',
            options: ['Un tipo de archivo', 'Estructura que contiene los metadatos de un archivo o directorio', 'El nombre del archivo', 'El dueño del sistema'],
            correctAnswer: 1,
            explanation: 'Contiene todo menos el nombre y los datos reales.'
        },
        {
            questionText: '¿Qué protocolo de routing interno es de tipo "Estado de Enlace" (Link State)?',
            options: ['RIP', 'BGP', 'OSPF', 'EIGRP'],
            correctAnswer: 2,
            explanation: 'OSPF y IS-IS son Link State.'
        },
        {
            questionText: '¿Qué comando de PowerShell muestra las propiedades de un objeto de forma detallada?',
            options: ['ls', 'Get-Member', 'Format-List *', 'Select-Object'],
            correctAnswer: 2,
            explanation: 'Format-List (FL) muestra todos los campos.'
        },
        {
            questionText: '¿Qué es el "Throttling"?',
            options: ['Borrar datos', 'Limitar la velocidad o frecuencia de un proceso', 'Aumentar la RAM', 'Un error de disco'],
            correctAnswer: 1,
            explanation: 'Se usa en APIs para evitar abusos.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo HTTPS?',
            options: ['80', '443', '22', '21'],
            correctAnswer: 1,
            explanation: 'Puerto para navegación web segura.'
        },
        {
            questionText: '¿Qué técnica criptográfica se basa en curvas elípticas?',
            options: ['RSA', 'ECC', 'AES', 'DES'],
            correctAnswer: 1,
            explanation: 'Elliptic Curve Cryptography ofrece más seguridad con claves más cortas.'
        },
        {
            questionText: '¿Qué es el "Kernel" de un sistema operativo?',
            options: ['La interfaz visual', 'El núcleo encargado del acceso seguro al hardware y gestión de recursos', 'El buscador de archivos', 'La carpeta principal'],
            correctAnswer: 1,
            explanation: 'Gestor fundamental entre hardware y software.'
        },
        {
            questionText: 'En el contexto del aprendizaje profundo (Deep Learning), ¿en qué consiste la arquitectura "Transformer"?',
            options: [
                'Un modelo para cambiar el hardware automáticamente.',
                'Una arquitectura basada en mecanismos de atención que permite procesar datos secuenciales en paralelo.',
                'Un tipo de red neuronal que solo procesa imágenes.',
                'Un conversor de bases de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Es la arquitectura base de los LLM (como GPT).'
        },
        {
            questionText: '¿Qué es el "RAG" (Retrieval-Augmented Generation) en el uso de modelos de lenguaje?',
            options: [
                'Un modo de limpieza de datos.',
                'Proporcionar información externa relevante al modelo en el momento de la consulta para mejorar la precisión y evitar alucinaciones.',
                'Entrenar el modelo desde cero.',
                'Un comando de voz.'
            ],
            correctAnswer: 1,
            explanation: 'Permite que la IA use documentos internos sin ser reentrenada.'
        },
        {
            questionText: '¿Qué estándar de autenticación web permite el uso de Passkeys mediante criptografía de clave pública eliminando las contraseñas?',
            options: ['OAuth 1.0', 'FIDO2 / WebAuthn', 'LDAP', 'SAML 2.0'],
            correctAnswer: 1,
            explanation: 'WebAuthn es la API estándar para autenticación biométrica y de hardware.'
        },
        {
            questionText: '¿Cuál es la principal diferencia entre gRPC y REST sobre JSON?',
            options: [
                'gRPC utiliza HTTP/2 y Protocol Buffers (binario) para mayor eficiencia y tipado fuerte.',
                'REST es más rápido.',
                'gRPC solo funciona en redes locales.',
                'REST no usa HTTP.'
            ],
            correctAnswer: 0,
            explanation: 'gRPC es ideal para comunicación interna entre microservicios.'
        },
        {
            questionText: 'En el desarrollo de software, ¿atacar las vulnerabilidades "antes" de que el código llegue a producción se conoce como?',
            options: ['Post-mortem', 'Shift-Left Security', 'Over-the-air', 'Waterfall'],
            correctAnswer: 1,
            explanation: 'Mover la seguridad a las etapas iniciales del ciclo de vida.'
        },
        {
            questionText: '¿Qué es un "ataque de envenenamiento de datos" (Data Poisoning) en IA?',
            options: [
                'Borrar la base de datos.',
                'Introducir datos maliciosos en el conjunto de entrenamiento para sesgar o corromper el comportamiento futuro del modelo.',
                'Un virus de correo.',
                'Un error de hardware.'
            ],
            correctAnswer: 1,
            explanation: 'Es una amenaza crítica para sistemas de aprendizaje automático.'
        },
        {
            questionText: '¿Qué es el "Escalamiento Predictivo" en servicios cloud?',
            options: [
                'Comprar servidores cada 2 años.',
                'Usar IA para analizar patrones históricos y aumentar la capacidad antes de que ocurra el pico de tráfico.',
                'Escalar solo si el servidor falla.',
                'Un modo manual de escalado.'
            ],
            correctAnswer: 1,
            explanation: 'Permite mayor disponibilidad comparado con el escalado reactivo.'
        },
        {
            questionText: 'En la arquitectura de sistemas, ¿qué define la "Arquitectura Lambda"?',
            options: [
                'Programar con funciones anónimas.',
                'Un modelo que combina procesamiento por lotes (batch) y procesamiento en tiempo real (stream) para mayor fiabilidad y velocidad.',
                'Un tipo de red inalámbrica.',
                'Un estándar de cables fibra.'
            ],
            correctAnswer: 1,
            explanation: 'La capa "Speed" gestiona lo nuevo y la capa "Batch" consolida los datos históricos.'
        },
        {
            questionText: '¿Qué es el "eBPF" en el contexto del kernel de Linux moderno?',
            options: [
                'Un nuevo sistema de archivos.',
                'Tecnología que permite ejecutar programas seguros dentro del kernel sin cambiar el código fuente ni cargar módulos.',
                'Un virus muy avanzado.',
                'Un driver para tarjetas gráficas.'
            ],
            correctAnswer: 1,
            explanation: 'Se usa masivamente para monitorización, seguridad y networking de alto rendimiento.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo de monitorización y gestión de hardware IPMI?',
            options: ['22', '161', '623', '3389'],
            correctAnswer: 2,
            explanation: 'Puerto UDP 623 (y a veces 664 para RMCP).'
        },
        {
            questionText: 'En el desarrollo de APIs, ¿qué garantiza "Idempotencia" en una petición HTTP PUT?',
            options: [
                'Que la petición se realice rápido.',
                'Que realizar la misma petición múltiples veces tenga el mismo efecto final en el servidor que realizarla una sola vez.',
                'Que solo se pueda enviar una vez.',
                'Que requiera contraseña.'
            ],
            correctAnswer: 1,
            explanation: 'PUT y DELETE deben ser idempotentes; POST no necesariamente.'
        },
        {
            questionText: '¿Qué es el "Container Escape" en seguridad de virtualización?',
            options: [
                'Cerrar el contenedor.',
                'Vulnerabilidad que permite a un proceso dentro de un contenedor acceder a recursos o ejecutar código en el sistema operativo anfitrión.',
                'Un modo de exportar datos.',
                'Un error de red.'
            ],
            correctAnswer: 1,
            explanation: 'Rompe el aislamiento que prometen los contenedores.'
        },
        {
            questionText: '¿Cuál es el beneficio de usar "Immutable Infrastructure"?',
            options: [
                'No permite cambios nunca.',
                'En lugar de actualizar servidores vivos, se crean nuevas instancias desde cero y se destruyen las antiguas, garantizando consistencia.',
                'Es más barata.',
                'No requiere backups.'
            ],
            correctAnswer: 1,
            explanation: 'Evita la "deriva de configuración" (configuration drift).'
        },
        {
            questionText: '¿Qué protocolo permite el acceso a directorios y recursos de identidad de forma ligera, evolucionando desde X.500?',
            options: ['HTTP', 'FTP', 'LDAP', 'SMTP'],
            correctAnswer: 2,
            explanation: 'Lightweight Directory Access Protocol.'
        },
        {
            questionText: '¿Qué es un "Sidecar" en la arquitectura de microservicios con contenedores?',
            options: [
                'Un contenedor de ayuda que se ejecuta junto al contenedor de la aplicación principal compartiendo el mismo pod.',
                'Un tipo de base de datos.',
                'Un error de carga.',
                'Una copia del código.'
            ],
            correctAnswer: 0,
            explanation: 'Común en service meshes (mallas de servicios) para gestionar logs, proxys o seguridad.'
        },
        {
            questionText: '¿Qué es la "Observabilidad" frente a la monitorización tradicional?',
            options: [
                'Mirar la pantalla más tiempo.',
                'La capacidad de entender el estado interno de un sistema complejo a partir de sus salidas externas (logs, métricas, trazas).',
                'Solo mirar si el servidor está encendido.',
                'Un tipo de antivirus.'
            ],
            correctAnswer: 1,
            explanation: 'Monitorización es sobre síntomas; observabilidad es sobre entender el "por qué" de los problemas.'
        },
        {
            questionText: '¿Qué ataque de red aprovecha la fragmentación de paquetes IP para intentar evadir sistemas de seguridad (IDS)?',
            options: ['Ping of Death', 'Fraggle Attack', 'IP Fragmentation Overlap', 'SYN Flood'],
            correctAnswer: 2,
            explanation: 'Superponer fragmentos modificados para confundir el reensamblaje del IDS frente al del destino final.'
        },
        {
            questionText: 'En la Ley 40/2015, ¿cuál es el plazo de prescripción para las infracciones leves?',
            options: ['6 meses', '1 año', '2 años', '3 años'],
            correctAnswer: 0,
            explanation: 'Artículo 30 Ley 40/2015.'
        },
        {
            questionText: '¿Qué es el "Infrastructure Drift"?',
            options: [
                'Que los servidores se muevan.',
                'Cuando el estado real de la infraestructura diverge de lo definido en el código de configuración (IaC).',
                'Un error de red.',
                'Borrar archivos por error.'
            ],
            correctAnswer: 1,
            explanation: 'Se soluciona reaplicando periódicamente los planes de automatización.'
        },
        {
            questionText: '¿Qué es la "Normalización de direcciones" en un cortafuegos?',
            options: [
                'Hacer que todas las IPs sean iguales.',
                'Procesar los paquetes para que sigan un formato estándar y predecible antes de analizarlos, evitando técnicas de evasión.',
                'Borrar direcciones prohibidas.',
                'Cambiar de IPv4 a IPv6.'
            ],
            correctAnswer: 1,
            explanation: 'Limpia anomalías en las cabeceras de protocolo.'
        },
        {
            questionText: '¿Qué es un "ataque de denegación de servicio por agotamiento de recursos" (Application-layer DoS)?',
            options: [
                'Saturar el ancho de banda.',
                'Lanzar peticiones legítimas muy pesadas que consumen toda la CPU o memoria del servidor (ej: consultas complejas).',
                'Cerrar el servidor.',
                'Un virus de correo.'
            ],
            correctAnswer: 1,
            explanation: 'Afecta a la capa 7 y es más difícil de filtrar que un ataque volumétrico.'
        },
        {
            questionText: '¿Qué es el "Sandboxing" de aplicaciones?',
            options: [
                'Poner el ordenador en la arena.',
                'Ejecutar programas en un entorno aislado con acceso limitado a recursos del sistema para prevenir daños.',
                'Un modo de depuración.',
                'Hacer copias de seguridad.'
            ],
            correctAnswer: 1,
            explanation: 'Los navegadores modernos usan esto para cada pestaña.'
        },
        {
            questionText: '¿Qué significa el estado HTTP 101?',
            options: [
                'Switching Protocols',
                'Continue',
                'Processing',
                'Early Hints'
            ],
            correctAnswer: 0,
            explanation: 'Se usa fundamentalmente en la actualización a WebSockets.'
        },
        {
            questionText: '¿Qué es la "Firma Biométrica"?',
            options: [
                'Firma con el dedo en un papel.',
                'Captura de datos dinámicos durante el proceso de firma manuscrita sobre dispositivos digitales (presión, velocidad, inclinación).',
                'Un tipo de escaneo de iris.',
                'Un código QR.'
            ],
            correctAnswer: 1,
            explanation: 'Proporciona evidencias periciales superiores a la simple imagen de la firma.'
        },
        {
            questionText: '¿Qué es el "Blue-Green Deployment"?',
            options: [
                'Pintar los servidores.',
                'Técnica de despliegue con dos entornos idénticos donde uno está activo y el otro recibe la nueva versión antes de conmutar el tráfico.',
                'Un tipo de error visual.',
                'Un modo de ahorro de energía.'
            ],
            correctAnswer: 1,
            explanation: 'Permite vueltas atrás (rollbacks) casi instantáneas.'
        },
        {
            questionText: '¿Qué es la "Refactorización de base de datos"?',
            options: [
                'Borrar todos los datos.',
                'Cambiar el esquema de la base de datos para mejorar su diseño sin cambiar su semántica ni el comportamiento de la aplicación.',
                'Actualizar el motor de la base de datos.',
                'Hacer consultas más rápidas.'
            ],
            correctAnswer: 1,
            explanation: 'Incluye particionado, renombrado de columnas o división de tablas.'
        },
        {
            questionText: '¿Qué es la "Seguridad por Oscuridad"?',
            options: [
                'Apagar las luces del CPD.',
                'Confiar en el desconocimiento del atacante sobre el diseño del sistema como principal medida de seguridad (generalmente desaconsejado).',
                'Usar contraseñas muy largas.',
                'Cifrar todo el tráfico.'
            ],
            correctAnswer: 1,
            explanation: 'Se considera una mala práctica frente al principio de diseño abierto.'
        },
        {
            questionText: '¿Qué es un "ataque de inyección de plantillas" (SSTI)?',
            options: [
                'Un error al imprimir folletos.',
                'Insertar código malicioso en motores de plantillas de servidor (ej: Jinja, Twig) para lograr ejecución remota de código.',
                'Un fallo de CSS.',
                'Un virus de Word.'
            ],
            correctAnswer: 1,
            explanation: 'Ocurre cuando se concatena entrada de usuario directamente en la plantilla.'
        },
        {
            questionText: '¿Qué puerto utiliza el protocolo seguro de bases de datos Redis?',
            options: ['3306', '5432', '6379', '11211'],
            correctAnswer: 2,
            explanation: 'Redis por defecto usa el 6379.'
        },
        {
            questionText: '¿Qué es el "Data Sovereignity" (Soberanía de Datos)?',
            options: [
                'Que los datos sean del gobierno.',
                'El concepto de que los datos están sujetos a las leyes del país en el que se recogen o almacenan físicamente.',
                'Un tipo de cifrado.',
                'No compartir datos con nadie.'
            ],
            correctAnswer: 1,
            explanation: 'Crítico al elegir proveedores de nube extranjeros.'
        },
        {
            questionText: '¿Qué es el "Hot-swapping"?',
            options: [
                'Cambiar de sitio los servidores.',
                'Capacidad de reemplazar componentes de hardware (discos, fuentes) sin necesidad de apagar el sistema.',
                'Un error por calor.',
                'Aumentar la velocidad del ventilador.'
            ],
            correctAnswer: 1,
            explanation: 'Fundamental para la alta disponibilidad en servidores.'
        },
        {
            questionText: '¿Qué es la "Arquitectura sin estado" (Stateless)?',
            options: [
                'Un servidor que no tiene disco duro.',
                'Diseño donde cada petición es independiente y no depende de información almacenada en el servidor de sesiones anteriores.',
                'Un modo de depuración.',
                'Un sistema operativo básico.'
            ],
            correctAnswer: 1,
            explanation: 'Facilita enormemente el escalado horizontal.'
        },
        {
            questionText: '¿Qué es un "Exploit Kit"?',
            options: [
                'Un conjunto de herramientas para programar.',
                'Herramientas automatizadas que escanean el navegador del usuario en busca de vulnerabilidades y ejecutan el exploit correspondiente para infectarlo.',
                'Un antivirus.',
                'Un manual de hacking.'
            ],
            correctAnswer: 1,
            explanation: 'Suele usarse en ataques de "Drive-by download".'
        },
        {
            questionText: '¿Qué significa el término "Air-gapping" en seguridad física/red?',
            options: [
                'Poner aire acondicionado.',
                'Aislar físicamente un ordenador o red crítica de cualquier otra conexión a Internet o red pública.',
                'Un tipo de firewall inalámbrico.',
                'Limpiar el polvo de los racks.'
            ],
            correctAnswer: 1,
            explanation: 'Usado para sistemas militares o de control nuclear.'
        },
        {
            questionText: '¿Qué es el "Cross-Origin Resource Sharing" (CORS)?',
            options: [
                'Compartir archivos entre amigos.',
                'Mecanismo de seguridad de los navegadores que restringe las peticiones HTTP entre diferentes dominios a menos que el servidor lo autorice explícitamente.',
                'Un error de red.',
                'Un tipo de servidor proxy.'
            ],
            correctAnswer: 1,
            explanation: 'Previene que un sitio malicioso acceda a datos de otro sitio legítimo.'
        },
        {
            questionText: '¿Qué es el "Shingled Magnetic Recording" (SMR)?',
            options: [
                'Un tipo de grabación de audio.',
                'Tecnología de discos duros que solapa las pistas magnéticas para aumentar la densidad, a costa de menor velocidad de escritura.',
                'Un nuevo tipo de SSD.',
                'Un protocolo de red.'
            ],
            correctAnswer: 1,
            explanation: 'Común en discos de gran capacidad y bajo coste.'
        },
        {
            questionText: 'En el contexto de la protección de datos, ¿qué es el "Derecho a la Portabilidad"?',
            options: [
                'Poder cambiar de móvil.',
                'Derecho a recibir los datos personales en un formato estructurado y transmitirlos a otro responsable sin impedimentos.',
                'Cargar el portátil.',
                'Que los datos viajen por Internet.'
            ],
            correctAnswer: 1,
            explanation: 'Artículo 20 del RGPD.'
        },
        {
            questionText: '¿Qué es un "Microkernel"?',
            options: [
                'Un núcleo muy pequeño.',
                'Arquitectura de SO que solo incluye las funciones mínimas en el núcleo (IPC, gestión básica) delegando el resto a servicios en espacio de usuario.',
                'Un virus de procesador.',
                'Un microprocesador barato.'
            ],
            correctAnswer: 1,
            explanation: 'Ejemplo: MINIX o el núcleo de QNX.'
        },
        {
            questionText: '¿Qué es la "Inyección de entidades externas XML" (XXE)?',
            options: [
                'Un error al abrir archivos Excel.',
                'Ataque contra aplicaciones que analizan XML, permitiendo leer archivos locales o realizar peticiones internas al servidor.',
                'Insertar virus en un XML.',
                'Un tipo de base de datos.'
            ],
            correctAnswer: 1,
            explanation: 'Se previene deshabilitando la resolución de entidades externas en el parser XML.'
        },
        {
            questionText: '¿Qué significa "E-Readiness"?',
            options: [
                'Estar listo para leer.',
                'Grado de preparación de un país o institución para participar y beneficiarse de las tecnologías de la información y TIC.',
                'Un modo de ahorro de energía.',
                'Una certificación de calidad.'
            ],
            correctAnswer: 1,
            explanation: 'Mide penetración de red, legislación y servicios digitales.'
        },
        {
            questionText: '¿Qué es el "Fog Computing"?',
            options: [
                'Computación con niebla.',
                'Extensión del Cloud Computing hacia el borde de la red para procesar datos localmente antes de enviarlos a la nube.',
                'Un error visual en el monitor.',
                'Un tipo de servidor antiguo.'
            ],
            correctAnswer: 1,
            explanation: 'A medio camino entre el Edge y el Cloud.'
        },
        {
            questionText: '¿Qué es la "Criptografía Cuántica" (QKD)?',
            options: [
                'Cifrar con números muy grandes.',
                'Uso de propiedades físicas de las partículas para el intercambio seguro de claves, detectando cualquier intento de interceptación por las leyes de la física.',
                'Un programa de hacking cuántico.',
                'Un nuevo tipo de firma digital.'
            ],
            correctAnswer: 1,
            explanation: 'Quantum Key Distribution.'
        },
        {
            questionText: '¿Qué puerto utiliza por defecto el protocolo de transferencia de medios en tiempo real (RTSP)?',
            options: ['80', '443', '554', '1935'],
            correctAnswer: 2,
            explanation: 'Puerto oficial para control de streaming de video/audio.'
        },
        {
            questionText: '¿Qué es el "Shadow IT"?',
            options: [
                'Sistemas informáticos ocultos.',
                'Uso de sistemas, software o servicios informáticos dentro de una organización sin la aprobación explícita del departamento de IT.',
                'Hacking ético.',
                'Un modo oscuro de Windows.'
            ],
            correctAnswer: 1,
            explanation: 'Representa un riesgo de seguridad y cumplimiento normativo.'
        },
        {
            questionText: '¿Qué es la "Tokenización" de datos sensibles?',
            options: [
                'Enviar datos por lotes.',
                'Sustituir un dato sensible (ej: tarjeta de crédito) por un valor equivalente único que no tiene valor intrínseco fuera del sistema.',
                'Cifrar con una clave secreta.',
                'Borrar datos antiguos.'
            ],
            correctAnswer: 1,
            explanation: 'Reduce el alcance de cumplimiento (ej: PCI-DSS).'
        },
        {
            questionText: '¿Qué es un "Side-channel attack" basado en el tiempo?',
            options: [
                'Mirar el reloj del servidor.',
                'Ataque que mide cuánto tarda el sistema en realizar ciertas operaciones para deducir secretos como claves de cifrado.',
                'Un tipo de lag.',
                'Un virus que se activa a una hora.'
            ],
            correctAnswer: 1,
            explanation: 'Se mitiga usando algoritmos de "tiempo constante".'
        },
        {
            questionText: '¿Qué significa el término "Container Sprawl"?',
            options: [
                'Que los contenedores son grandes.',
                'La proliferación incontrolada de contenedores que dificulta su gestión, seguridad y aprovechamiento de recursos.',
                'Un error de red.',
                'Hacer copias de seguridad de contenedores.'
            ],
            correctAnswer: 1,
            explanation: 'Requiere herramientas de gobernanza y orquestación.'
        },
        {
            questionText: '¿Qué es el "Multipath I/O"?',
            options: [
                'Tener varios ordenadores.',
                'Técnica que permite usar múltiples rutas físicas entre un servidor y su almacenamiento para mejorar el rendimiento y la tolerancia a fallos.',
                'Un error de disco.',
                'Un cable muy largo.'
            ],
            correctAnswer: 1,
            explanation: 'Evita cortes si falla un switch SAN o una controladora.'
        },
        {
            questionText: '¿Qué es la "Resiliencia" de un sistema informático?',
            options: [
                'Que sea muy rápido.',
                'Capacidad de un sistema de absorber un impacto negativo, adaptarse y continuar funcionando con una degradación aceptable.',
                'Que no tenga errores.',
                'Que sea barato.'
            ],
            correctAnswer: 1,
            explanation: 'Va más allá de la "resistencia" (que es aguantar sin fallar).'
        },
        {
            questionText: '¿Qué es un "ataque de clickjacking" (o UI redressing)?',
            options: [
                'Hacer muchos clicks rápidos.',
                'Técnica para engañar al usuario y que haga clic en un botón invisible o camuflado debajo de la interfaz legítima.',
                'Robar el ratón.',
                'Un virus de teclado.'
            ],
            correctAnswer: 1,
            explanation: 'Se previene con cabeceras como X-Frame-Options o CSP.'
        }
    ]
};
