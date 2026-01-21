
import type { Test } from '../../types';

export const TEST_3: Test = {
  id: 'test-3',
  title: 'Test 3: Desarrollo de Sistemas',
  questions: [
    // Tema: Ciclo de Vida del Software
    {
      questionText: 'En el modelo en cascada, ¿qué fase sigue al análisis de requisitos?',
      options: ['Pruebas', 'Diseño', 'Codificación', 'Mantenimiento'],
      correctAnswer: 1,
      explanation: 'En el modelo clásico en cascada, la fase de diseño sigue a la de análisis de requisitos y precede a la codificación.'
    },
    {
      questionText: '¿Qué metodología de desarrollo se caracteriza por ser iterativa e incremental?',
      options: ['Cascada', 'Agile (Ágil)', 'V-Model', 'Big Bang'],
      correctAnswer: 1,
      explanation: 'Las metodologías ágiles (como Scrum) se basan en el desarrollo iterativo e incremental, con entregas frecuentes.'
    },

    // Tema: Análisis y Diseño
    {
      questionText: '¿Qué diagrama UML se utiliza para representar la estructura estática del sistema?',
      options: ['Diagrama de Casos de Uso', 'Diagrama de Secuencia', 'Diagrama de Clases', 'Diagrama de Estado'],
      correctAnswer: 2,
      explanation: 'El diagrama de clases muestra las clases del sistema, sus atributos, métodos y las relaciones entre ellas.'
    },
    {
      questionText: 'En el diseño de bases de datos, ¿qué es una entidad?',
      options: ['Una relación entre tablas', 'Un objeto del mundo real sobre el que queremos almacenar información', 'Una consulta', 'Un índice'],
      correctAnswer: 1,
      explanation: 'En el modelo Entidad-Relación, una entidad representa un objeto o concepto del mundo real (ej. Cliente, Producto).'
    },

    // Tema: Programación
    {
      questionText: '¿Qué paradigma de programación se basa en el concepto de "objetos"?',
      options: ['Programación Estructurada', 'Programación Orientada a Objetos (POO)', 'Programación Funcional', 'Programación Lógica'],
      correctAnswer: 1,
      explanation: 'La POO organiza el diseño de software alrededor de datos u objetos, en lugar de funciones y lógica.'
    },
    {
      questionText: 'En Java, ¿qué palabra clave se usa para heredar de una clase?',
      options: ['implements', 'extends', 'inherits', 'super'],
      correctAnswer: 1,
      explanation: 'La palabra clave "extends" se utiliza en Java para indicar que una clase hereda de otra.'
    },

    // Tema: Bases de Datos
    {
      questionText: '¿Qué lenguaje se utiliza para consultar y manipular bases de datos relacionales?',
      options: ['HTML', 'XML', 'SQL', 'Java'],
      correctAnswer: 2,
      explanation: 'SQL (Structured Query Language) es el lenguaje estándar para gestionar bases de datos relacionales.'
    },
    {
      questionText: '¿Qué es una clave primaria (Primary Key)?',
      options: ['Una clave para abrir la base de datos', 'Un campo que identifica de forma única cada registro en una tabla', 'Una clave foránea', 'Un índice secundario'],
      correctAnswer: 1,
      explanation: 'La clave primaria es un identificador único para cada fila de una tabla, asegurando que no haya duplicados.'
    },

    // Tema: Accesibilidad
    {
      questionText: '¿Qué significan las siglas WCAG?',
      options: ['Web Content Accessibility Guidelines', 'World Computer Accessibility Group', 'Web Coding And Graphics', 'Wide Content Access Guide'],
      correctAnswer: 0,
      explanation: 'WCAG (Pautas de Accesibilidad para el Contenido Web) son los estándares internacionales para la accesibilidad web.'
    },
    {
      questionText: '¿Cuál es el nivel de conformidad intermedio en las WCAG 2.1?',
      options: ['A', 'AA', 'AAA', 'B'],
      correctAnswer: 1,
      explanation: 'Los niveles de conformidad son A (básico), AA (intermedio, el estándar habitual) y AAA (avanzado).'
    },
  ]
};
