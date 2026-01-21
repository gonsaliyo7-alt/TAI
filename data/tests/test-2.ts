
import type { Test } from '../../types';

export const TEST_2: Test = {
  id: 'test-2',
  title: 'Test 2: Tecnología Básica',
  questions: [
    // Tema: Representación de la información
    { 
      questionText: '¿Cuántos bits forman un Byte?', 
      options: ['4', '8', '16', '32'], 
      correctAnswer: 1,
      explanation: 'Un Byte está compuesto por 8 bits.'
    },
    { 
      questionText: '¿Qué sistema de numeración utiliza base 16?', 
      options: ['Binario', 'Octal', 'Decimal', 'Hexadecimal'], 
      correctAnswer: 3,
      explanation: 'El sistema hexadecimal utiliza base 16 y emplea los dígitos 0-9 y las letras A-F.'
    },
    
    // Tema: Arquitectura de ordenadores
    { 
      questionText: '¿Qué componente de la CPU realiza las operaciones aritméticas y lógicas?', 
      options: ['UC (Unidad de Control)', 'ALU (Unidad Aritmético-Lógica)', 'Registros', 'Bus de datos'], 
      correctAnswer: 1,
      explanation: 'La ALU (Arithmetic Logic Unit) es la encargada de realizar operaciones matemáticas y lógicas.'
    },
    { 
      questionText: '¿Qué tipo de memoria es volátil y pierde su contenido al apagar el ordenador?', 
      options: ['ROM', 'RAM', 'Disco Duro', 'Flash'], 
      correctAnswer: 1,
      explanation: 'La memoria RAM (Random Access Memory) es volátil, lo que significa que necesita energía para mantener la información.'
    },
    
    // Tema: Periféricos
    { 
      questionText: '¿Cuál de los siguientes es un periférico de entrada?', 
      options: ['Monitor', 'Impresora', 'Escáner', 'Altavoces'], 
      correctAnswer: 2,
      explanation: 'El escáner permite introducir información (imágenes/texto) en el ordenador.'
    },
    { 
      questionText: '¿Qué interfaz se utiliza comúnmente para conectar discos duros internos?', 
      options: ['USB', 'SATA', 'VGA', 'HDMI'], 
      correctAnswer: 1,
      explanation: 'SATA (Serial ATA) es la interfaz estándar para conectar dispositivos de almacenamiento masivo internos.'
    },
    
    // Tema: Software
    { 
      questionText: '¿Qué tipo de software es el sistema operativo?', 
      options: ['Software de aplicación', 'Software de sistema', 'Software de programación', 'Software malicioso'], 
      correctAnswer: 1,
      explanation: 'El sistema operativo es el software de sistema fundamental que gestiona el hardware y provee servicios a los programas de aplicación.'
    },
    { 
      questionText: '¿Qué licencia de software permite a los usuarios usar, estudiar, compartir y modificar el software?', 
      options: ['Copyright', 'Software Libre', 'Shareware', 'Freeware'], 
      correctAnswer: 1,
      explanation: 'El Software Libre (Free Software) garantiza las cuatro libertades esenciales a los usuarios.'
    },
    
    // Tema: Estructuras de datos
    { 
      questionText: '¿Qué estructura de datos sigue el principio LIFO (Last In, First Out)?', 
      options: ['Cola (Queue)', 'Pila (Stack)', 'Lista enlazada', 'Árbol'], 
      correctAnswer: 1,
      explanation: 'Una pila (Stack) es una estructura LIFO, donde el último elemento en entrar es el primero en salir.'
    },
    { 
      questionText: '¿Qué es un algoritmo?', 
      options: ['Un lenguaje de programación', 'Un conjunto ordenado y finito de operaciones para resolver un problema', 'Un componente hardware', 'Un error de software'], 
      correctAnswer: 1,
      explanation: 'Un algoritmo es una secuencia de pasos lógicos y ordenados que permiten solucionar un problema o realizar una tarea.'
    }
  ]
};
