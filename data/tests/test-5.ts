
import type { Test } from '../../types';

export const TEST_5: Test = {
  id: 'test-5',
  title: 'Test 5: Bloque III - Desarrollo de Software',
  questions: [
    // Tema: Java
    {
      questionText: 'En Java, ¿qué palabra clave se usa para heredar de una clase?',
      options: ['implements', 'extends', 'inherits', 'super'],
      correctAnswer: 1,
      explanation: 'La palabra clave "extends" se utiliza en Java para indicar que una clase hereda de otra (herencia).'
    },
    {
      questionText: '¿Cuál de las siguientes NO es una interfaz de la colección de Java?',
      options: ['List', 'Set', 'Map', 'String'],
      correctAnswer: 3,
      explanation: 'String es una clase en Java, no una interfaz de Collections Framework (como List, Set o Map).'
    },

    // Tema: Patrones de Diseño
    {
      questionText: '¿Qué patrón de diseño proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas?',
      options: ['Factory Method', 'Abstract Factory', 'Builder', 'Prototype'],
      correctAnswer: 1,
      explanation: 'El patrón Abstract Factory permite crear familias de objetos relacionados sin especificar sus clases concretas.'
    },
    {
      questionText: 'El patrón MVC corresponde a las siglas:',
      options: ['Model View Controller', 'Module View Class', 'Main View Code', 'Model Visual Component'],
      correctAnswer: 0,
      explanation: 'MVC significa Modelo-Vista-Controlador, un patrón de arquitectura de software.'
    },

    // Tema: Servicios Web
    {
      questionText: '¿Qué lenguaje se utiliza habitualmente para describir servicios web SOAP?',
      options: ['JSON', 'WSDL', 'HTML', 'CSS'],
      correctAnswer: 1,
      explanation: 'WSDL (Web Services Description Language) es un formato XML para describir servicios de red.'
    },
    {
      questionText: 'En una arquitectura REST, ¿qué método HTTP se usa típicamente para actualizar un recurso existente?',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      correctAnswer: 2,
      explanation: 'PUT (o PATCH) se utiliza para actualizar recursos en una API REST.'
    },

    // Tema: .NET
    {
      questionText: '¿Cuál es el lenguaje principal del framework .NET?',
      options: ['Java', 'C#', 'Python', 'Ruby'],
      correctAnswer: 1,
      explanation: 'C# (C Sharp) es el lenguaje de programación principal desarrollado por Microsoft para la plataforma .NET.'
    },
    {
      questionText: '¿Qué es el CLR en .NET?',
      options: ['Common Language Runtime', 'Common Library Runtime', 'Code Language Runner', 'Core Library Resource'],
      correctAnswer: 0,
      explanation: 'CLR (Common Language Runtime) es el entorno de ejecución de la plataforma .NET.'
    },

    // Tema: Calidad del Software
    {
      questionText: '¿Qué norma ISO se refiere a la calidad del producto software?',
      options: ['ISO 9001', 'ISO 25000 (SQuaRE)', 'ISO 27001', 'ISO 14001'],
      correctAnswer: 1,
      explanation: 'La familia de normas ISO/IEC 25000 (SQuaRE) tiene por objetivo la creación de un marco de trabajo común para evaluar la calidad del producto software.'
    },
    {
      questionText: '¿Qué es la refactorización?',
      options: ['Escribir código nuevo', 'Cambiar la estructura interna del código sin cambiar su comportamiento externo', 'Corregir bugs', 'Añadir funcionalidades'],
      correctAnswer: 1,
      explanation: 'La refactorización es el proceso de reestructurar el código fuente existente, alterando su estructura interna sin cambiar su comportamiento externo.'
    },
  ]
};
