
import type { Test } from '../../types';

export const TEST_18: Test = {
  id: 'test-18',
  title: 'Test 18: Inteligencia Artificial y Tecnologías Emergentes',
  questions: [
    // Tema: Big Data
    {
      questionText: '¿Cuál de las siguientes NO es una de las "V" del Big Data?',
      options: ['Volumen', 'Velocidad', 'Variedad', 'Virtualización'],
      correctAnswer: 3,
      explanation: 'Las V tradicionales son Volumen, Velocidad, Variedad (y a veces Veracidad y Valor). Virtualización no es una de ellas.'
    },
    {
      questionText: '¿Qué es Hadoop?',
      options: ['Un marco de software para el almacenamiento y procesamiento distribuido de grandes conjuntos de datos', 'Un virus', 'Un lenguaje de programación', 'Un sistema operativo'],
      correctAnswer: 0,
      explanation: 'Apache Hadoop permite procesar grandes volúmenes de datos en clústeres de ordenadores.'
    },

    // Tema: Inteligencia Artificial
    {
      questionText: '¿Qué es el Aprendizaje Supervisado?',
      options: ['El algoritmo aprende de datos etiquetados', 'El algoritmo aprende sin datos', 'El algoritmo aprende solo', 'El algoritmo no aprende'],
      correctAnswer: 0,
      explanation: 'En el aprendizaje supervisado, el modelo se entrena con un conjunto de datos que incluye las entradas y las salidas correctas (etiquetas).'
    },
    {
      questionText: '¿Qué es una Red Neuronal Convolucional (CNN)?',
      options: ['Un tipo de red neuronal especializada en procesar datos con estructura de rejilla, como imágenes', 'Una red de ordenadores', 'Un protocolo de red', 'Un tipo de base de datos'],
      correctAnswer: 0,
      explanation: 'Las CNN son muy eficaces para el reconocimiento y clasificación de imágenes.'
    },

    // Tema: Blockchain
    {
      questionText: '¿Qué característica define a la Blockchain?',
      options: ['Centralización', 'Inmutabilidad y descentralización', 'Opacidad', 'Lentitud'],
      correctAnswer: 1,
      explanation: 'La Blockchain es un registro distribuido, descentralizado e inmutable.'
    },
    {
      questionText: '¿Qué es un Smart Contract?',
      options: ['Un contrato en papel', 'Un programa informático que ejecuta acuerdos automáticamente', 'Un abogado digital', 'Un virus'],
      correctAnswer: 1,
      explanation: 'Son contratos autoejecutables con los términos del acuerdo escritos directamente en código.'
    },

    // Tema: IoT
    {
      questionText: '¿Qué significa IoT?',
      options: ['Internet of Things', 'Input of Text', 'Internal office Technology', 'International open Trade'],
      correctAnswer: 0,
      explanation: 'Internet de las Cosas se refiere a la interconexión digital de objetos cotidianos con internet.'
    },
    {
      questionText: '¿Qué protocolo es común en IoT por su ligereza?',
      options: ['HTTP', 'MQTT', 'FTP', 'SMTP'],
      correctAnswer: 1,
      explanation: 'MQTT (Message Queuing Telemetry Transport) es un protocolo de mensajería ligero ideal para IoT.'
    },

    // Tema: 5G
    {
      questionText: 'Una ventaja clave del 5G frente al 4G es:',
      options: ['Mayor latencia', 'Menor latencia y mayor velocidad', 'Menor velocidad', 'Menor capacidad'],
      correctAnswer: 1,
      explanation: 'El 5G ofrece velocidades mucho más altas y una latencia significativamente menor.'
    },
    {
      questionText: '¿Qué es el Edge Computing?',
      options: ['Procesamiento de datos cerca de la fuente de datos', 'Computación en la nube central', 'Computación cuántica', 'Computación antigua'],
      correctAnswer: 0,
      explanation: 'Edge Computing acerca el procesamiento y almacenamiento de datos al lugar donde se necesitan, mejorando los tiempos de respuesta.'
    },
  ]
};
