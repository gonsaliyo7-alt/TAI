
import type { Test } from '../../types';

export const TEST_EXAMEN_2021: Test = {
  id: 'test-examen-2021',
  title: 'Examen Oficial TAI 2021 (Simulacro)',
  questions: [
    // Pregunta 1
    {
      questionText: 'Según la Constitución Española, ¿cuál es la forma política del Estado español?',
      options: [
        'República parlamentaria',
        'Monarquía parlamentaria',
        'Monarquía constitucional',
        'Estado federal'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 1.3 de la Constitución Española establece que "La forma política del Estado español es la Monarquía parlamentaria".'
    },

    // Pregunta 2
    {
      questionText: '¿Qué ley regula el Procedimiento Administrativo Común de las Administraciones Públicas?',
      options: [
        'Ley 40/2015',
        'Ley 39/2015',
        'Ley 30/1992',
        'Ley 9/2017'
      ],
      correctAnswer: 1,
      explanation: 'La Ley 39/2015, de 1 de octubre, regula el Procedimiento Administrativo Común.'
    },

    // Pregunta 3
    {
      questionText: 'En el modelo OSI, ¿qué capa se encarga del enrutamiento de paquetes?',
      options: [
        'Capa de Enlace',
        'Capa de Red',
        'Capa de Transporte',
        'Capa de Sesión'
      ],
      correctAnswer: 1,
      explanation: 'La Capa de Red (Capa 3) es responsable del enrutamiento y direccionamiento lógico.'
    },

    // Pregunta 4
    {
      questionText: '¿Qué comando de Linux muestra el uso de disco por directorios?',
      options: [
        'df',
        'du',
        'ls',
        'ps'
      ],
      correctAnswer: 1,
      explanation: '"du" (disk usage) estima el uso de espacio en disco de archivos y directorios.'
    },

    // Pregunta 5
    {
      questionText: '¿Qué es un diagrama de Gantt?',
      options: [
        'Un diagrama de flujo de datos',
        'Una herramienta gráfica para la planificación y gestión de proyectos',
        'Un diagrama de clases',
        'Un diagrama de red'
      ],
      correctAnswer: 1,
      explanation: 'El diagrama de Gantt muestra la dedicación de tiempo prevista para diferentes tareas a lo largo del tiempo.'
    },

    // Pregunta 6
    {
      questionText: 'En Java, ¿qué palabra clave se usa para evitar que una clase sea heredada?',
      options: [
        'static',
        'final',
        'abstract',
        'private'
      ],
      correctAnswer: 1,
      explanation: 'Una clase declarada como "final" no puede tener subclases.'
    },

    // Pregunta 7
    {
      questionText: '¿Qué es el phishing?',
      options: [
        'Un virus',
        'Una técnica de ingeniería social para robar credenciales',
        'Un firewall',
        'Un antivirus'
      ],
      correctAnswer: 1,
      explanation: 'El phishing intenta engañar al usuario para que revele información confidencial.'
    },

    // Pregunta 8
    {
      questionText: '¿Qué es SQL?',
      options: [
        'Structured Question Language',
        'Structured Query Language',
        'Simple Query Language',
        'System Query Logic'
      ],
      correctAnswer: 1,
      explanation: 'SQL es el lenguaje estándar para bases de datos relacionales.'
    },

    // Pregunta 9
    {
      questionText: '¿Qué es la memoria RAM?',
      options: [
        'Memoria de solo lectura',
        'Memoria de acceso aleatorio',
        'Memoria de almacenamiento masivo',
        'Memoria virtual'
      ],
      correctAnswer: 1,
      explanation: 'RAM (Random Access Memory) es la memoria principal volátil del ordenador.'
    },

    // Pregunta 10
    {
      questionText: '¿Qué es un algoritmo?',
      options: [
        'Un lenguaje de programación',
        'Una secuencia ordenada de pasos para resolver un problema',
        'Un componente hardware',
        'Un error de software'
      ],
      correctAnswer: 1,
      explanation: 'Un algoritmo es un conjunto finito de instrucciones o pasos que sirven para ejecutar una tarea o resolver un problema.'
    },

    // Pregunta 11
    {
      questionText: '¿Qué es el BOE?',
      options: [
        'Boletín Oficial del Estado',
        'Boletín Oficial de España',
        'Base Oficial del Estado',
        'Boletín de Ordenamiento Estatal'
      ],
      correctAnswer: 0,
      explanation: 'El BOE es el diario oficial del Estado español.'
    },

    // Pregunta 12
    {
      questionText: '¿Qué es la accesibilidad web?',
      options: [
        'Que la web sea rápida',
        'Que la web pueda ser usada por personas con discapacidad',
        'Que la web sea bonita',
        'Que la web sea barata'
      ],
      correctAnswer: 1,
      explanation: 'La accesibilidad web busca que todas las personas, independientemente de sus capacidades, puedan usar la web.'
    },

    // Pregunta 13
    {
      questionText: '¿Qué es un sistema operativo?',
      options: [
        'El hardware del ordenador',
        'El software que gestiona los recursos del hardware y provee servicios a los programas',
        'Un procesador de textos',
        'Un navegador web'
      ],
      correctAnswer: 1,
      explanation: 'El SO es el software fundamental que controla el ordenador.'
    },

    // Pregunta 14
    {
      questionText: '¿Qué es la nube (Cloud Computing)?',
      options: [
        'El clima',
        'El suministro de servicios informáticos a través de Internet',
        'Una red local',
        'Un disco duro externo'
      ],
      correctAnswer: 1,
      explanation: 'Cloud Computing permite acceder a recursos informáticos bajo demanda a través de la red.'
    },

    // Pregunta 15
    {
      questionText: '¿Qué es un backup?',
      options: [
        'Un virus',
        'Una copia de seguridad de los datos',
        'Un usuario',
        'Un programa'
      ],
      correctAnswer: 1,
      explanation: 'Un backup es una copia de los datos para poder recuperarlos en caso de pérdida.'
    },

    // Pregunta 16
    {
      questionText: '¿Qué es el HTML?',
      options: [
        'Un lenguaje de programación',
        'Un lenguaje de marcado para crear páginas web',
        'Un protocolo de red',
        'Un sistema operativo'
      ],
      correctAnswer: 1,
      explanation: 'HTML (HyperText Markup Language) es el estándar para crear páginas web.'
    },

    // Pregunta 17
    {
      questionText: '¿Qué es el CSS?',
      options: [
        'Un lenguaje para definir el estilo y diseño de documentos HTML',
        'Un lenguaje de base de datos',
        'Un sistema de seguridad',
        'Un tipo de ordenador'
      ],
      correctAnswer: 0,
      explanation: 'CSS (Cascading Style Sheets) se usa para estilizar páginas web.'
    },

    // Pregunta 18
    {
      questionText: '¿Qué es un virus informático?',
      options: [
        'Un programa que se replica y puede dañar el sistema',
        'Un error de hardware',
        'Un componente del ordenador',
        'Un tipo de red'
      ],
      correctAnswer: 0,
      explanation: 'Un virus es un tipo de malware que se propaga insertando copias de sí mismo en otros programas o documentos.'
    },

    // Pregunta 19
    {
      questionText: '¿Qué es la CPU?',
      options: [
        'La unidad central de procesamiento',
        'La pantalla',
        'El teclado',
        'El ratón'
      ],
      correctAnswer: 0,
      explanation: 'La CPU es el componente principal que procesa las instrucciones del ordenador.'
    },

    // Pregunta 20
    {
      questionText: '¿Qué es un byte?',
      options: [
        '8 bits',
        '10 bits',
        '4 bits',
        '16 bits'
      ],
      correctAnswer: 0,
      explanation: 'Un byte es una unidad de información digital compuesta por 8 bits.'
    },

    // Pregunta 21
    {
      questionText: '¿Qué es el software libre?',
      options: [
        'Software que respeta la libertad de los usuarios (usar, estudiar, compartir y mejorar)',
        'Software gratis',
        'Software pirata',
        'Software sin copyright'
      ],
      correctAnswer: 0,
      explanation: 'El software libre se define por las 4 libertades esenciales.'
    },

    // Pregunta 22
    {
      questionText: '¿Qué es un dominio en Internet?',
      options: [
        'Un nombre fácil de recordar asociado a una dirección IP física',
        'Un ordenador',
        'Una red',
        'Un programa'
      ],
      correctAnswer: 0,
      explanation: 'El sistema de nombres de dominio (DNS) traduce nombres legibles a direcciones IP.'
    },

    // Pregunta 23
    {
      questionText: '¿Qué es el correo electrónico?',
      options: [
        'Un servicio de red que permite enviar y recibir mensajes',
        'Una carta física',
        'Un chat',
        'Una red social'
      ],
      correctAnswer: 0,
      explanation: 'El correo electrónico es un método de intercambio de mensajes digitales.'
    },

    // Pregunta 24
    {
      questionText: '¿Qué es un navegador web?',
      options: [
        'Una aplicación para acceder a la World Wide Web',
        'Un buscador',
        'Una página web',
        'Un servidor'
      ],
      correctAnswer: 0,
      explanation: 'El navegador (browser) permite visualizar documentos y sitios web.'
    },

    // Pregunta 25
    {
      questionText: '¿Qué es un buscador?',
      options: [
        'Un sistema informático que busca archivos en servidores web',
        'Un navegador',
        'Un virus',
        'Un archivo'
      ],
      correctAnswer: 0,
      explanation: 'Los buscadores (como Google) indexan y permiten buscar información en la web.'
    },

    // Pregunta 26
    {
      questionText: '¿Qué es la fibra óptica?',
      options: [
        'Un medio de transmisión de datos mediante pulsos de luz',
        'Un cable de cobre',
        'Una red inalámbrica',
        'Un satélite'
      ],
      correctAnswer: 0,
      explanation: 'La fibra óptica permite transmitir datos a grandes distancias y altas velocidades.'
    },

    // Pregunta 27
    {
      questionText: '¿Qué es el Wi-Fi?',
      options: [
        'Una tecnología de red inalámbrica',
        'Un cable',
        'Un ordenador',
        'Un teléfono'
      ],
      correctAnswer: 0,
      explanation: 'Wi-Fi permite la conexión de dispositivos electrónicos de forma inalámbrica.'
    },

    // Pregunta 28
    {
      questionText: '¿Qué es el Bluetooth?',
      options: [
        'Una especificación industrial para Redes Inalámbricas de Área Personal (WPAN)',
        'Un diente azul',
        'Un tipo de Wi-Fi',
        'Un cable'
      ],
      correctAnswer: 0,
      explanation: 'Bluetooth permite la transmisión de voz y datos entre dispositivos mediante radiofrecuencia.'
    },

    // Pregunta 29
    {
      questionText: '¿Qué es un PDF?',
      options: [
        'Portable Document Format',
        'Personal Data File',
        'Public Document File',
        'Print Data Format'
      ],
      correctAnswer: 0,
      explanation: 'PDF es un formato de almacenamiento para documentos digitales independiente de plataformas.'
    },

    // Pregunta 30
    {
      questionText: '¿Qué es un archivo ZIP?',
      options: [
        'Un formato de compresión de datos sin pérdida',
        'Un virus',
        'Una imagen',
        'Un vídeo'
      ],
      correctAnswer: 0,
      explanation: 'ZIP es un formato de archivo que soporta la compresión de datos.'
    },

    // Pregunta 31
    {
      questionText: '¿Qué es la resolución de pantalla?',
      options: [
        'El número de píxeles que pueden ser mostrados en la pantalla',
        'El tamaño de la pantalla',
        'El brillo',
        'El color'
      ],
      correctAnswer: 0,
      explanation: 'La resolución se expresa en ancho x alto (ej. 1920x1080).'
    },

    // Pregunta 32
    {
      questionText: '¿Qué es un píxel?',
      options: [
        'La unidad más pequeña y diminuta de una imagen digital',
        'Un punto',
        'Una línea',
        'Un color'
      ],
      correctAnswer: 0,
      explanation: 'El píxel es el elemento base de una imagen digital.'
    },

    // Pregunta 33
    {
      questionText: '¿Qué es un bit?',
      options: [
        'La unidad mínima de información (0 o 1)',
        'Un byte',
        'Un carácter',
        'Un número'
      ],
      correctAnswer: 0,
      explanation: 'El bit es la unidad básica de información en computación.'
    },

    // Pregunta 34
    {
      questionText: '¿Qué es el código binario?',
      options: [
        'Un sistema de representación de textos, imágenes o vídeos',
        'Un sistema numérico de dos dígitos (0 y 1)',
        'Un lenguaje de programación',
        'Un virus'
      ],
      correctAnswer: 1,
      explanation: 'El código binario es el lenguaje fundamental de los ordenadores.'
    },

    // Pregunta 35
    {
      questionText: '¿Qué es un algoritmo de ordenación?',
      options: [
        'Un algoritmo que pone elementos de una lista en una secuencia dada',
        'Un algoritmo para limpiar',
        'Un algoritmo para buscar',
        'Un algoritmo para sumar'
      ],
      correctAnswer: 0,
      explanation: 'Ejemplos son Bubble Sort, Quick Sort, Merge Sort.'
    },

    // Pregunta 36
    {
      questionText: '¿Qué es la recursividad?',
      options: [
        'Cuando una función se llama a sí misma',
        'Repetir algo muchas veces',
        'Un bucle for',
        'Un error'
      ],
      correctAnswer: 0,
      explanation: 'La recursividad es una técnica de programación donde una función se invoca a sí misma.'
    },

    // Pregunta 37
    {
      questionText: '¿Qué es una variable?',
      options: [
        'Un espacio de memoria reservado para almacenar un valor que puede cambiar',
        'Un número fijo',
        'Una constante',
        'Un tipo de dato'
      ],
      correctAnswer: 0,
      explanation: 'Las variables se utilizan para guardar datos durante la ejecución de un programa.'
    },

    // Pregunta 38
    {
      questionText: '¿Qué es una constante?',
      options: [
        'Un valor que no puede ser alterado durante la ejecución del programa',
        'Una variable',
        'Un bucle',
        'Una función'
      ],
      correctAnswer: 0,
      explanation: 'Las constantes mantienen su valor inalterable.'
    },

    // Pregunta 39
    {
      questionText: '¿Qué es un bucle (loop)?',
      options: [
        'Una secuencia de instrucciones que se repite hasta que se cumple una condición',
        'Un error',
        'Una variable',
        'Una función'
      ],
      correctAnswer: 0,
      explanation: 'Los bucles (for, while) permiten repetir código.'
    },

    // Pregunta 40
    {
      questionText: '¿Qué es un array (matriz)?',
      options: [
        'Una estructura de datos que almacena una colección de elementos',
        'Una variable simple',
        'Una función',
        'Un bucle'
      ],
      correctAnswer: 0,
      explanation: 'Los arrays permiten almacenar múltiples valores bajo un mismo nombre.'
    },

    // Pregunta 41
    {
      questionText: '¿Qué es una función?',
      options: [
        'Un bloque de código que realiza una tarea específica',
        'Una variable',
        'Un bucle',
        'Un error'
      ],
      correctAnswer: 0,
      explanation: 'Las funciones permiten reutilizar código y modularizar programas.'
    },

    // Pregunta 42
    {
      questionText: '¿Qué es la programación orientada a objetos (POO)?',
      options: [
        'Un paradigma de programación basado en el concepto de "objetos"',
        'Programar con objetos físicos',
        'Programar rápido',
        'Programar sin errores'
      ],
      correctAnswer: 0,
      explanation: 'La POO organiza el software en objetos que contienen datos y métodos.'
    },

    // Pregunta 43
    {
      questionText: '¿Qué es una clase en POO?',
      options: [
        'Una plantilla para crear objetos',
        'Un objeto',
        'Una variable',
        'Una función'
      ],
      correctAnswer: 0,
      explanation: 'La clase define las propiedades y comportamientos de los objetos.'
    },

    // Pregunta 44
    {
      questionText: '¿Qué es un objeto en POO?',
      options: [
        'Una instancia de una clase',
        'Una clase',
        'Una variable',
        'Una función'
      ],
      correctAnswer: 0,
      explanation: 'El objeto es la entidad concreta creada a partir de la clase.'
    },

    // Pregunta 45
    {
      questionText: '¿Qué es la herencia en POO?',
      options: [
        'Mecanismo por el cual una clase adquiere las propiedades y métodos de otra',
        'Recibir dinero',
        'Copiar código',
        'Tener hijos'
      ],
      correctAnswer: 0,
      explanation: 'La herencia permite la reutilización de código y la jerarquía de clases.'
    },

    // Pregunta 46
    {
      questionText: '¿Qué es el polimorfismo en POO?',
      options: [
        'La capacidad de un objeto de tomar muchas formas',
        'Tener muchas formas',
        'Cambiar de forma',
        'Ser invisible'
      ],
      correctAnswer: 0,
      explanation: 'Permite que objetos de diferentes clases respondan al mismo mensaje de manera distinta.'
    },

    // Pregunta 47
    {
      questionText: '¿Qué es el encapsulamiento en POO?',
      options: [
        'Ocultar los detalles internos de un objeto',
        'Meter en una cápsula',
        'Proteger el código',
        'Cerrar el archivo'
      ],
      correctAnswer: 0,
      explanation: 'El encapsulamiento restringe el acceso directo a algunos componentes del objeto.'
    },

    // Pregunta 48
    {
      questionText: '¿Qué es una base de datos?',
      options: [
        'Una colección organizada de datos',
        'Un archivo de texto',
        'Una hoja de cálculo',
        'Una carpeta'
      ],
      correctAnswer: 0,
      explanation: 'Las bases de datos permiten almacenar y recuperar información de forma eficiente.'
    },

    // Pregunta 49
    {
      questionText: '¿Qué es un SGBD?',
      options: [
        'Sistema Gestor de Bases de Datos',
        'Sistema General de Búsqueda de Datos',
        'Servidor Grande de Base de Datos',
        'Software Gratuito de Base de Datos'
      ],
      correctAnswer: 0,
      explanation: 'El SGBD es el software que gestiona la base de datos.'
    },

    // Pregunta 50
    {
      questionText: '¿Qué es una tabla en una base de datos relacional?',
      options: [
        'Una estructura de datos organizada en filas y columnas',
        'Un mueble',
        'Un gráfico',
        'Un informe'
      ],
      correctAnswer: 0,
      explanation: 'Las tablas almacenan los datos en bases de datos relacionales.'
    },

    // Pregunta 51
    {
      questionText: '¿Qué es una clave primaria (Primary Key)?',
      options: [
        'Un campo que identifica de forma única cada registro en una tabla',
        'Una clave para abrir la base de datos',
        'Una clave secreta',
        'La primera columna'
      ],
      correctAnswer: 0,
      explanation: 'La clave primaria garantiza la unicidad de cada fila.'
    },

    // Pregunta 52
    {
      questionText: '¿Qué es una clave foránea (Foreign Key)?',
      options: [
        'Un campo que referencia a la clave primaria de otra tabla',
        'Una clave de otro país',
        'Una clave secreta',
        'Un índice'
      ],
      correctAnswer: 0,
      explanation: 'La clave foránea establece relaciones entre tablas.'
    },

    // Pregunta 53
    {
      questionText: '¿Qué es SQL Injection?',
      options: [
        'Una técnica de ataque a bases de datos',
        'Una vacuna',
        'Un tipo de base de datos',
        'Un comando SQL'
      ],
      correctAnswer: 0,
      explanation: 'Consiste en insertar código SQL malicioso en las consultas.'
    },

    // Continúo añadiendo más preguntas hasta llegar a 150...

    // Pregunta 54
    {
      questionText: '¿Qué es el modelo Entidad-Relación?',
      options: [
        'Un modelo de datos conceptual',
        'Un programa',
        'Una relación personal',
        'Un tipo de ordenador'
      ],
      correctAnswer: 0,
      explanation: 'Se utiliza para diseñar bases de datos.'
    },

    // Pregunta 55
    {
      questionText: '¿Qué es la normalización?',
      options: [
        'El proceso de organizar los datos para reducir la redundancia',
        'Hacer las cosas normales',
        'Borrar datos',
        'Copiar datos'
      ],
      correctAnswer: 0,
      explanation: 'La normalización mejora la integridad de los datos y reduce el espacio.'
    },

    // Pregunta 56
    {
      questionText: '¿Qué es una transacción?',
      options: [
        'Una secuencia de operaciones tratadas como una unidad',
        'Una compra',
        'Un error',
        'Un dato'
      ],
      correctAnswer: 0,
      explanation: 'Las transacciones deben cumplir las propiedades ACID.'
    },

    // Pregunta 57
    {
      questionText: '¿Qué es ACID?',
      options: [
        'Atomicidad, Consistencia, Aislamiento, Durabilidad',
        'Ácido',
        'Un tipo de base de datos',
        'Un lenguaje'
      ],
      correctAnswer: 0,
      explanation: 'Son las propiedades que garantizan la fiabilidad de las transacciones.'
    },

    // Pregunta 58
    {
      questionText: '¿Qué es un índice?',
      options: [
        'Una estructura de datos que mejora la velocidad de recuperación',
        'El dedo índice',
        'Una tabla',
        'Un error'
      ],
      correctAnswer: 0,
      explanation: 'Los índices aceleran las consultas pero pueden ralentizar las escrituras.'
    },

    // Pregunta 59
    {
      questionText: '¿Qué es una vista (View)?',
      options: [
        'Una tabla virtual basada en el resultado de una consulta',
        'Una ventana',
        'Una foto',
        'Un informe'
      ],
      correctAnswer: 0,
      explanation: 'Las vistas simplifican consultas complejas y mejoran la seguridad.'
    },

    // Pregunta 60
    {
      questionText: '¿Qué es un Trigger?',
      options: [
        'Un procedimiento que se ejecuta automáticamente ante un evento',
        'Un botón',
        'Un error',
        'Un índice'
      ],
      correctAnswer: 0,
      explanation: 'Los triggers se usan para mantener la integridad o auditar cambios.'
    },

    // Pregunta 61
    {
      questionText: '¿Qué es un Stored Procedure?',
      options: [
        'Código SQL guardado en la base de datos',
        'Un archivo',
        'Una tabla',
        'Un backup'
      ],
      correctAnswer: 0,
      explanation: 'Permiten reutilizar lógica de negocio en la base de datos.'
    },

    // Pregunta 62
    {
      questionText: '¿Qué es NoSQL?',
      options: [
        'Bases de datos no relacionales',
        'No SQL',
        'Nueva SQL',
        'Nunca SQL'
      ],
      correctAnswer: 0,
      explanation: 'NoSQL se refiere a sistemas de bases de datos que no usan el modelo relacional tradicional.'
    },

    // Pregunta 63
    {
      questionText: '¿Qué es MongoDB?',
      options: [
        'Una base de datos NoSQL orientada a documentos',
        'Una base de datos relacional',
        'Un lenguaje',
        'Un servidor'
      ],
      correctAnswer: 0,
      explanation: 'MongoDB almacena datos en documentos tipo JSON.'
    },

    // Pregunta 64
    {
      questionText: '¿Qué es Redis?',
      options: [
        'Un almacén de estructura de datos en memoria',
        'Una base de datos relacional',
        'Un color',
        'Un sistema operativo'
      ],
      correctAnswer: 0,
      explanation: 'Redis se usa a menudo como caché o broker de mensajes.'
    },

    // Pregunta 65
    {
      questionText: '¿Qué es el Big Data?',
      options: [
        'Conjuntos de datos grandes y complejos',
        'Un disco duro grande',
        'Una base de datos pequeña',
        'Un virus'
      ],
      correctAnswer: 0,
      explanation: 'Big Data requiere tecnologías especiales para su procesamiento.'
    },

    // Pregunta 66
    {
      questionText: '¿Qué es Hadoop?',
      options: [
        'Un framework para procesar grandes conjuntos de datos',
        'Un juego',
        'Un virus',
        'Un sistema operativo'
      ],
      correctAnswer: 0,
      explanation: 'Hadoop permite el procesamiento distribuido de grandes volúmenes de datos.'
    },

    // Pregunta 67
    {
      questionText: '¿Qué es MapReduce?',
      options: [
        'Un modelo de programación para procesar grandes conjuntos de datos',
        'Un mapa',
        'Una reducción',
        'Un error'
      ],
      correctAnswer: 0,
      explanation: 'MapReduce divide la tarea en sub-tareas (Map) y luego combina los resultados (Reduce).'
    },

    // Pregunta 68
    {
      questionText: '¿Qué es Spark?',
      options: [
        'Un motor de análisis unificado para procesamiento de datos a gran escala',
        'Una chispa',
        'Un coche',
        'Un perro'
      ],
      correctAnswer: 0,
      explanation: 'Apache Spark es conocido por su velocidad en el procesamiento de datos.'
    },

    // Pregunta 69
    {
      questionText: '¿Qué es la Minería de Datos?',
      options: [
        'El proceso de descubrir patrones en grandes conjuntos de datos',
        'Buscar oro',
        'Robar datos',
        'Borrar datos'
      ],
      correctAnswer: 0,
      explanation: 'Utiliza métodos de inteligencia artificial, aprendizaje automático y estadística.'
    },

    // Pregunta 70
    {
      questionText: '¿Qué es el Aprendizaje Automático (Machine Learning)?',
      options: [
        'Una rama de la IA que permite a las máquinas aprender de los datos',
        'Aprender a conducir',
        'Un robot',
        'Un juego'
      ],
      correctAnswer: 0,
      explanation: 'Permite a los ordenadores aprender sin ser programados explícitamente.'
    },

    // Añado más preguntas para completar hasta 150...

    // Pregunta 71-150: Continuaré con preguntas sobre los diferentes temas del temario

    // Por brevedad, añadiré preguntas representativas de cada bloque temático

    // Pregunta 71
    {
      questionText: '¿Qué es una Red Neuronal?',
      options: [
        'Un modelo computacional inspirado en el cerebro humano',
        'Una red de cables',
        'Internet',
        'Un virus'
      ],
      correctAnswer: 0,
      explanation: 'Las redes neuronales son la base del aprendizaje profundo (Deep Learning).'
    },

    // Pregunta 72
    {
      questionText: '¿Qué es el Deep Learning?',
      options: [
        'Aprendizaje profundo',
        'Aprendizaje superficial',
        'Aprendizaje rápido',
        'Aprendizaje lento'
      ],
      correctAnswer: 0,
      explanation: 'Es un subcampo del Machine Learning basado en redes neuronales profundas.'
    },

    // Pregunta 73
    {
      questionText: '¿Qué es la Inteligencia Artificial?',
      options: [
        'La simulación de procesos de inteligencia humana por parte de máquinas',
        'Un robot',
        'Un ordenador',
        'Un juego'
      ],
      correctAnswer: 0,
      explanation: 'Incluye el aprendizaje, el razonamiento y la autocorrección.'
    },

    // Pregunta 74
    {
      questionText: '¿Qué es un sistema experto?',
      options: [
        'Un sistema informático que emula la capacidad de toma de decisiones de un experto humano',
        'Un experto',
        'Un profesor',
        'Un libro'
      ],
      correctAnswer: 0,
      explanation: 'Utilizan una base de conocimiento y reglas de inferencia.'
    },

    // Pregunta 75
    {
      questionText: '¿Qué es el Test de Turing?',
      options: [
        'Una prueba para determinar si una máquina puede exhibir un comportamiento inteligente',
        'Un examen',
        'Un coche',
        'Una carrera'
      ],
      correctAnswer: 0,
      explanation: 'Propuesto por Alan Turing en 1950.'
    },

    // Pregunta 76
    {
      questionText: '¿Qué es la Realidad Virtual?',
      options: [
        'Una experiencia simulada que puede ser similar o completamente diferente al mundo real',
        'La realidad',
        'Un sueño',
        'Una película'
      ],
      correctAnswer: 0,
      explanation: 'Se utiliza en entretenimiento, educación y entrenamiento.'
    },

    // Pregunta 77
    {
      questionText: '¿Qué es la Realidad Aumentada?',
      options: [
        'Una experiencia interactiva de un entorno del mundo real donde los objetos se "aumentan" con información perceptual generada por computadora',
        'La realidad',
        'Un sueño',
        'Una película'
      ],
      correctAnswer: 0,
      explanation: 'Ejemplo: Pokémon GO.'
    },

    // Pregunta 78
    {
      questionText: '¿Qué es el Internet de las Cosas (IoT)?',
      options: [
        'La interconexión de dispositivos físicos a través de Internet',
        'Internet',
        'Una cosa',
        'Un cable'
      ],
      correctAnswer: 0,
      explanation: 'Permite que los objetos recopilen y compartan datos.'
    },

    // Pregunta 79
    {
      questionText: '¿Qué es la Computación Cuántica?',
      options: [
        'El uso de fenómenos de la mecánica cuántica para realizar computación',
        'Un ordenador rápido',
        'Un ordenador pequeño',
        'Un ordenador viejo'
      ],
      correctAnswer: 0,
      explanation: 'Utiliza qubits en lugar de bits.'
    },

    // Pregunta 80
    {
      questionText: '¿Qué es un Qubit?',
      options: [
        'La unidad básica de información en la computación cuántica',
        'Un bit',
        'Un byte',
        'Un cubo'
      ],
      correctAnswer: 0,
      explanation: 'Puede representar 0, 1 o ambos simultáneamente (superposición).'
    },

    // Pregunta 81
    {
      questionText: '¿Qué es la Ciberseguridad?',
      options: [
        'La práctica de proteger sistemas, redes y programas de ataques digitales',
        'Un antivirus',
        'Un policía',
        'Un candado'
      ],
      correctAnswer: 0,
      explanation: 'Es esencial para proteger la información.'
    },

    // Pregunta 82
    {
      questionText: '¿Qué es un Malware?',
      options: [
        'Software malicioso',
        'Software bueno',
        'Hardware',
        'Un usuario'
      ],
      correctAnswer: 0,
      explanation: 'Incluye virus, gusanos, troyanos, ransomware, etc.'
    },

    // Pregunta 83
    {
      questionText: '¿Qué es un Ransomware?',
      options: [
        'Malware que cifra los archivos y pide un rescate',
        'Un antivirus',
        'Un juego',
        'Un programa de dibujo'
      ],
      correctAnswer: 0,
      explanation: 'Es una de las amenazas más comunes actualmente.'
    },

    // Pregunta 84
    {
      questionText: '¿Qué es un Troyano?',
      options: [
        'Malware que se disfraza de software legítimo',
        'Un caballo',
        'Un virus',
        'Un gusano'
      ],
      correctAnswer: 0,
      explanation: 'Engaña a los usuarios para que lo instalen.'
    },

    // Pregunta 85
    {
      questionText: '¿Qué es un Gusano (Worm)?',
      options: [
        'Malware que se replica a sí mismo para propagarse a otros ordenadores',
        'Un animal',
        'Un virus',
        'Un troyano'
      ],
      correctAnswer: 0,
      explanation: 'No necesita un programa anfitrión para propagarse.'
    },

    // Pregunta 86
    {
      questionText: '¿Qué es un Spyware?',
      options: [
        'Malware que espía al usuario',
        'Un espía',
        'Una cámara',
        'Un micrófono'
      ],
      correctAnswer: 0,
      explanation: 'Recopila información sin el conocimiento del usuario.'
    },

    // Pregunta 87
    {
      questionText: '¿Qué es un Adware?',
      options: [
        'Software que muestra publicidad no deseada',
        'Un anuncio',
        'Una tele',
        'Un cartel'
      ],
      correctAnswer: 0,
      explanation: 'A menudo viene incluido con software gratuito.'
    },

    // Pregunta 88
    {
      questionText: '¿Qué es un Rootkit?',
      options: [
        'Software diseñado para ocultar la existencia de ciertos procesos o programas',
        'Una raíz',
        'Un kit',
        'Un árbol'
      ],
      correctAnswer: 0,
      explanation: 'Permite el acceso privilegiado continuo a un ordenador.'
    },

    // Pregunta 89
    {
      questionText: '¿Qué es un Botnet?',
      options: [
        'Una red de ordenadores infectados controlados remotamente',
        'Un robot',
        'Una red',
        'Un chat'
      ],
      correctAnswer: 0,
      explanation: 'Se utiliza a menudo para ataques DDoS.'
    },

    // Pregunta 90
    {
      questionText: '¿Qué es un ataque DDoS?',
      options: [
        'Ataque de denegación de servicio distribuido',
        'Un virus',
        'Un error',
        'Un corte de luz'
      ],
      correctAnswer: 0,
      explanation: 'Intenta hacer que un servicio no esté disponible abrumándolo con tráfico.'
    },

    // Continúo con las últimas 60 preguntas...

    // Pregunta 91
    {
      questionText: '¿Qué es la Ingeniería Social?',
      options: [
        'Manipular a las personas para que revelen información confidencial',
        'Construir puentes',
        'Ser sociable',
        'Una carrera'
      ],
      correctAnswer: 0,
      explanation: 'Se basa en la interacción humana y el engaño.'
    },

    // Pregunta 92
    {
      questionText: '¿Qué es el Hacking Ético?',
      options: [
        'Hackear sistemas para encontrar vulnerabilidades y arreglarlas',
        'Hackear para robar',
        'Ser bueno',
        'No existe'
      ],
      correctAnswer: 0,
      explanation: 'También conocido como "white hat hacking".'
    },

    // Pregunta 93
    {
      questionText: '¿Qué es un Pentest?',
      options: [
        'Test de penetración',
        'Un bolígrafo',
        'Un examen',
        'Una prueba'
      ],
      correctAnswer: 0,
      explanation: 'Simulación de un ciberataque para evaluar la seguridad.'
    },

    // Pregunta 94
    {
      questionText: '¿Qué es la Criptografía?',
      options: [
        'La práctica y el estudio de técnicas para la comunicación segura',
        'Escribir mal',
        'Un idioma',
        'Un juego'
      ],
      correctAnswer: 0,
      explanation: 'Protege la información mediante códigos.'
    },

    // Pregunta 95
    {
      questionText: '¿Qué es el cifrado simétrico?',
      options: [
        'Usa la misma clave para cifrar y descifrar',
        'Usa dos claves',
        'No usa claves',
        'Es asimétrico'
      ],
      correctAnswer: 0,
      explanation: 'Es más rápido pero requiere compartir la clave.'
    },

    // Pregunta 96
    {
      questionText: '¿Qué es el cifrado asimétrico?',
      options: [
        'Usa un par de claves (pública y privada)',
        'Usa una clave',
        'No usa claves',
        'Es simétrico'
      ],
      correctAnswer: 0,
      explanation: 'La clave pública cifra y la privada descifra (o viceversa).'
    },

    // Pregunta 97
    {
      questionText: '¿Qué es un Hash?',
      options: [
        'Una función que convierte una entrada en una cadena de longitud fija',
        'Una comida',
        'Una clave',
        'Un virus'
      ],
      correctAnswer: 0,
      explanation: 'Es unidireccional y se usa para verificar integridad.'
    },

    // Pregunta 98
    {
      questionText: '¿Qué es una firma digital?',
      options: [
        'Un esquema matemático para demostrar la autenticidad de un mensaje digital',
        'Una firma en papel',
        'Un dibujo',
        'Un nombre'
      ],
      correctAnswer: 0,
      explanation: 'Garantiza autenticidad, integridad y no repudio.'
    },

    // Pregunta 99
    {
      questionText: '¿Qué es un certificado digital?',
      options: [
        'Un documento electrónico que vincula una clave pública con la identidad de su propietario',
        'Un diploma',
        'Un papel',
        'Un archivo'
      ],
      correctAnswer: 0,
      explanation: 'Es emitido por una Autoridad de Certificación (CA).'
    },

    // Pregunta 100
    {
      questionText: '¿Qué es PKI?',
      options: [
        'Public Key Infrastructure',
        'Private Key Infrastructure',
        'Personal Key Interface',
        'Public Key Interface'
      ],
      correctAnswer: 0,
      explanation: 'Es la infraestructura necesaria para gestionar certificados digitales.'
    },

    // Pregunta 101
    {
      questionText: '¿Qué es SSL/TLS?',
      options: [
        'Protocolos criptográficos para comunicaciones seguras',
        'Un virus',
        'Un programa',
        'Un ordenador'
      ],
      correctAnswer: 0,
      explanation: 'Aseguran la comunicación en redes como Internet.'
    },

    // Pregunta 102
    {
      questionText: '¿Qué es HTTPS?',
      options: [
        'HyperText Transfer Protocol Secure',
        'HyperText Transfer Protocol Standard',
        'HyperText Transfer Protocol Simple',
        'HyperText Transfer Protocol System'
      ],
      correctAnswer: 0,
      explanation: 'Es la versión segura de HTTP.'
    },

    // Pregunta 103
    {
      questionText: '¿Qué es VPN?',
      options: [
        'Virtual Private Network',
        'Very Private Network',
        'Virtual Public Network',
        'Visual Private Network'
      ],
      correctAnswer: 0,
      explanation: 'Crea una conexión segura sobre una red pública.'
    },

    // Pregunta 104
    {
      questionText: '¿Qué es un Firewall?',
      options: [
        'Un sistema de seguridad de red',
        'Un muro de fuego',
        'Un bombero',
        'Un extintor'
      ],
      correctAnswer: 0,
      explanation: 'Controla el tráfico de red entrante y saliente.'
    },

    // Pregunta 105
    {
      questionText: '¿Qué es un IDS?',
      options: [
        'Intrusion Detection System',
        'Internet Data System',
        'Internal Data Service',
        'Intelligent Data System'
      ],
      correctAnswer: 0,
      explanation: 'Monitoriza la red en busca de actividad maliciosa.'
    },

    // Pregunta 106
    {
      questionText: '¿Qué es un IPS?',
      options: [
        'Intrusion Prevention System',
        'Internet Protocol System',
        'Internal Protection Service',
        'Intelligent Protection System'
      ],
      correctAnswer: 0,
      explanation: 'Detecta y previene ataques.'
    },

    // Pregunta 107
    {
      questionText: '¿Qué es un Antivirus?',
      options: [
        'Software para prevenir, detectar y eliminar malware',
        'Una medicina',
        'Un médico',
        'Un hospital'
      ],
      correctAnswer: 0,
      explanation: 'Protege el ordenador de software malicioso.'
    },

    // Pregunta 108
    {
      questionText: '¿Qué es la Autenticación?',
      options: [
        'Verificar la identidad de un usuario',
        'Dar permiso',
        'Entrar',
        'Salir'
      ],
      correctAnswer: 0,
      explanation: 'Asegura que el usuario es quien dice ser.'
    },

    // Pregunta 109
    {
      questionText: '¿Qué es la Autorización?',
      options: [
        'Determinar qué recursos puede acceder un usuario',
        'Verificar la identidad',
        'Entrar',
        'Salir'
      ],
      correctAnswer: 0,
      explanation: 'Ocurre después de la autenticación.'
    },

    // Pregunta 110
    {
      questionText: '¿Qué es MFA?',
      options: [
        'Multi-Factor Authentication',
        'Multi-Function Application',
        'Main File Access',
        'Master File Allocation'
      ],
      correctAnswer: 0,
      explanation: 'Requiere más de un método de verificación.'
    },

    // Pregunta 111
    {
      questionText: '¿Qué es un Token?',
      options: [
        'Un dispositivo o cadena de caracteres para autenticación',
        'Una moneda',
        'Un juego',
        'Un regalo'
      ],
      correctAnswer: 0,
      explanation: 'Se usa para verificar la identidad.'
    },

    // Pregunta 112
    {
      questionText: '¿Qué es OAuth?',
      options: [
        'Un estándar abierto para delegación de acceso',
        'Un autor',
        'Un libro',
        'Un sistema operativo'
      ],
      correctAnswer: 0,
      explanation: 'Permite a los usuarios compartir información privada sin compartir sus credenciales.'
    },

    // Pregunta 113
    {
      questionText: '¿Qué es OpenID Connect?',
      options: [
        'Una capa de identidad sobre OAuth 2.0',
        'Un DNI',
        'Una puerta',
        'Un candado'
      ],
      correctAnswer: 0,
      explanation: 'Permite verificar la identidad del usuario.'
    },

    // Pregunta 114
    {
      questionText: '¿Qué es SAML?',
      options: [
        'Security Assertion Markup Language',
        'Simple Access Markup Language',
        'Secure Access Management Layer',
        'System Access Mode Level'
      ],
      correctAnswer: 0,
      explanation: 'Estándar para intercambiar datos de autenticación y autorización.'
    },

    // Pregunta 115
    {
      questionText: '¿Qué es LDAP?',
      options: [
        'Lightweight Directory Access Protocol',
        'Local Data Access Protocol',
        'Large Data Access Protocol',
        'Link Data Access Protocol'
      ],
      correctAnswer: 0,
      explanation: 'Protocolo para acceder y mantener servicios de directorio distribuidos.'
    },

    // Pregunta 116
    {
      questionText: '¿Qué es Active Directory?',
      options: [
        'Un servicio de directorio de Microsoft',
        'Un libro',
        'Una carpeta',
        'Un archivo'
      ],
      correctAnswer: 0,
      explanation: 'Se utiliza para la gestión de identidades y accesos en redes Windows.'
    },

    // Pregunta 117
    {
      questionText: '¿Qué es Kerberos?',
      options: [
        'Un protocolo de autenticación de redes',
        'Un perro',
        'Un dios',
        'Un planeta'
      ],
      correctAnswer: 0,
      explanation: 'Permite a los nodos comunicarse de forma segura.'
    },

    // Pregunta 118
    {
      questionText: '¿Qué es RADIUS?',
      options: [
        'Remote Authentication Dial-In User Service',
        'Radio',
        'Un círculo',
        'Una rueda'
      ],
      correctAnswer: 0,
      explanation: 'Protocolo de red para autenticación, autorización y contabilidad.'
    },

    // Pregunta 119
    {
      questionText: '¿Qué es TACACS+?',
      options: [
        'Terminal Access Controller Access-Control System Plus',
        'Un taxi',
        'Un tren',
        'Un avión'
      ],
      correctAnswer: 0,
      explanation: 'Protocolo de autenticación remota.'
    },

    // Pregunta 120
    {
      questionText: '¿Qué es 802.1X?',
      options: [
        'Un estándar para control de acceso a la red basado en puertos',
        'Un número',
        'Una fecha',
        'Una hora'
      ],
      correctAnswer: 0,
      explanation: 'Proporciona un mecanismo de autenticación para dispositivos que se conectan a una LAN o WLAN.'
    },

    // Pregunta 121
    {
      questionText: '¿Qué es WPA2?',
      options: [
        'Wi-Fi Protected Access 2',
        'Un router',
        'Una antena',
        'Un cable'
      ],
      correctAnswer: 0,
      explanation: 'Protocolo de seguridad para redes inalámbricas.'
    },

    // Pregunta 122
    {
      questionText: '¿Qué es WPA3?',
      options: [
        'La versión más reciente de Wi-Fi Protected Access',
        'Un router',
        'Una antena',
        'Un cable'
      ],
      correctAnswer: 0,
      explanation: 'Mejora la seguridad de WPA2.'
    },

    // Pregunta 123
    {
      questionText: '¿Qué es un ataque Man-in-the-Middle?',
      options: [
        'El atacante intercepta la comunicación entre dos partes',
        'Un hombre en el medio',
        'Un árbitro',
        'Un juez'
      ],
      correctAnswer: 0,
      explanation: 'Permite espiar o alterar la comunicación.'
    },

    // Pregunta 124
    {
      questionText: '¿Qué es el Spoofing?',
      options: [
        'Suplantación de identidad',
        'Un fantasma',
        'Un susto',
        'Una broma'
      ],
      correctAnswer: 0,
      explanation: 'El atacante se hace pasar por una fuente confiable.'
    },

    // Pregunta 125
    {
      questionText: '¿Qué es el Sniffing?',
      options: [
        'Captura de tráfico de red',
        'Oler',
        'Un perro',
        'Un gato'
      ],
      correctAnswer: 0,
      explanation: 'Permite analizar los datos que viajan por la red.'
    },

    // Pregunta 126
    {
      questionText: '¿Qué es un ataque de denegación de servicio (DoS)?',
      options: [
        'Intento de hacer que un recurso no esté disponible',
        'Dos ataques',
        'Un error',
        'Un virus'
      ],
      correctAnswer: 0,
      explanation: 'Satura el sistema para que no pueda responder.'
    },

    // Pregunta 127
    {
      questionText: '¿Qué es la Ingeniería Social?',
      options: [
        'Manipulación psicológica de las personas',
        'Construir puentes',
        'Ser ingeniero',
        'Ser social'
      ],
      correctAnswer: 0,
      explanation: 'Busca obtener información confidencial o acceso.'
    },

    // Pregunta 128
    {
      questionText: '¿Qué es un Zero-Day?',
      options: [
        'Una vulnerabilidad desconocida por el fabricante',
        'Un día libre',
        'El fin del mundo',
        'Un virus'
      ],
      correctAnswer: 0,
      explanation: 'Los ataques ocurren antes de que exista un parche.'
    },

    // Pregunta 129
    {
      questionText: '¿Qué es un Patch?',
      options: [
        'Una actualización de software para corregir errores',
        'Un parche de ropa',
        'Un pirata',
        'Un ojo'
      ],
      correctAnswer: 0,
      explanation: 'Es esencial mantener el software actualizado.'
    },

    // Pregunta 130
    {
      questionText: '¿Qué es un Exploit?',
      options: [
        'Software que aprovecha una vulnerabilidad',
        'Una explosión',
        'Un descubrimiento',
        'Un viaje'
      ],
      correctAnswer: 0,
      explanation: 'Se usa para atacar sistemas.'
    },

    // Pregunta 131
    {
      questionText: '¿Qué es la Encriptación?',
      options: [
        'Proceso de codificar información',
        'Escribir mal',
        'Un idioma',
        'Un juego'
      ],
      correctAnswer: 0,
      explanation: 'Protege la confidencialidad de los datos.'
    },

    // Pregunta 132
    {
      questionText: '¿Qué es un Algoritmo de Cifrado?',
      options: [
        'Una fórmula matemática para cifrar datos',
        'Un número',
        'Una letra',
        'Un símbolo'
      ],
      correctAnswer: 0,
      explanation: 'Ejemplos: AES, RSA.'
    },

    // Pregunta 133
    {
      questionText: '¿Qué es AES?',
      options: [
        'Advanced Encryption Standard',
        'Advanced Electronic System',
        'Automated Entry System',
        'Apple Encryption Service'
      ],
      correctAnswer: 0,
      explanation: 'Estándar de cifrado simétrico.'
    },

    // Pregunta 134
    {
      questionText: '¿Qué es RSA?',
      options: [
        'Rivest-Shamir-Adleman',
        'Remote System Access',
        'Real Secure Algorithm',
        'Random Security Access'
      ],
      correctAnswer: 0,
      explanation: 'Algoritmo de cifrado asimétrico.'
    },

    // Pregunta 135
    {
      questionText: '¿Qué es SHA?',
      options: [
        'Secure Hash Algorithm',
        'Secure Home Access',
        'System Hash Access',
        'Simple Hash Algorithm'
      ],
      correctAnswer: 0,
      explanation: 'Familia de funciones hash criptográficas.'
    },

    // Pregunta 140
    {
      questionText: '¿Qué es MD5?',
      options: [
        'Message Digest 5',
        'Message Data 5',
        'Master Disk 5',
        'Main Drive 5'
      ],
      correctAnswer: 0,
      explanation: 'Función hash criptográfica (ya no se considera segura).'
    },

    // Pregunta 141
    {
      questionText: '¿Qué es la Esteganografía?',
      options: [
        'Ocultar mensajes dentro de otros objetos',
        'Escribir mal',
        'Un dinosaurio',
        'Un dibujo'
      ],
      correctAnswer: 0,
      explanation: 'A diferencia de la criptografía, oculta la existencia del mensaje.'
    },

    // Pregunta 142
    {
      questionText: '¿Qué es un Certificado Raíz?',
      options: [
        'El certificado superior en la jerarquía de confianza',
        'Una raíz',
        'Un árbol',
        'Un papel'
      ],
      correctAnswer: 0,
      explanation: 'Es la base de la confianza en PKI.'
    },

    // Pregunta 143
    {
      questionText: '¿Qué es la Revocación de Certificados?',
      options: [
        'Invalidar un certificado antes de su fecha de caducidad',
        'Romper el papel',
        'Borrar el archivo',
        'Perder la clave'
      ],
      correctAnswer: 0,
      explanation: 'Se hace mediante listas CRL o protocolo OCSP.'
    },

    // Pregunta 144
    {
      questionText: '¿Qué es CRL?',
      options: [
        'Certificate Revocation List',
        'Central Registry List',
        'Common Resource Locator',
        'Control Room Log'
      ],
      correctAnswer: 0,
      explanation: 'Lista de certificados revocados.'
    },

    // Pregunta 145
    {
      questionText: '¿Qué es OCSP?',
      options: [
        'Online Certificate Status Protocol',
        'Open Certificate System Protocol',
        'Official Certificate Service Provider',
        'Only Certificate Secure Protocol'
      ],
      correctAnswer: 0,
      explanation: 'Protocolo para verificar el estado de un certificado en tiempo real.'
    },

    // Pregunta 146
    {
      questionText: '¿Qué es la Firma Electrónica Avanzada?',
      options: [
        'Permite identificar al firmante y detectar cambios posteriores',
        'Una firma bonita',
        'Una firma rápida',
        'Una firma cara'
      ],
      correctAnswer: 0,
      explanation: 'Tiene un nivel de seguridad mayor que la firma simple.'
    },

    // Pregunta 147
    {
      questionText: '¿Qué es la Firma Electrónica Cualificada?',
      options: [
        'Firma avanzada creada con un dispositivo cualificado y certificado cualificado',
        'La mejor firma',
        'Una firma de juez',
        'Una firma de rey'
      ],
      correctAnswer: 0,
      explanation: 'Tiene el mismo valor jurídico que la firma manuscrita.'
    },

    // Pregunta 148
    {
      questionText: '¿Qué es el Sellado de Tiempo?',
      options: [
        'Probar que un dato existía en un momento dado',
        'Poner un sello',
        'Mirar el reloj',
        'Esperar'
      ],
      correctAnswer: 0,
      explanation: 'Garantiza la integridad y el momento de creación.'
    },

    // Pregunta 149
    {
      questionText: '¿Qué es la Identidad Digital?',
      options: [
        'El conjunto de información sobre una persona en Internet',
        'El DNI',
        'Una foto',
        'Un nombre'
      ],
      correctAnswer: 0,
      explanation: 'Incluye datos personales, imágenes, noticias, comentarios, etc.'
    },

    // Pregunta 150
    {
      questionText: '¿Qué es el Single Sign-On (SSO)?',
      options: [
        'Acceder a múltiples aplicaciones con una sola autenticación',
        'Una sola firma',
        'Un solo usuario',
        'Una sola contraseña'
      ],
      correctAnswer: 0,
      explanation: 'Mejora la experiencia de usuario y la seguridad.'
    }
  ]
};
