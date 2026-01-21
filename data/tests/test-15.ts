
import type { Test } from '../../types';

export const TEST_15: Test = {
  id: 'test-15',
  title: 'Test 15: Bases de Datos y SQL',
  questions: [
    {
      questionText: '¿Qué es la normalización en bases de datos?',
      options: ['El proceso de organizar los datos para reducir la redundancia', 'Hacer copias de seguridad', 'Crear usuarios', 'Instalar el software'],
      correctAnswer: 1,
      explanation: 'La normalización es el proceso de diseño de la base de datos que busca minimizar la redundancia y la dependencia de datos.'
    },
    {
      questionText: '¿Qué es una relación 1:N (Uno a Muchos)?',
      options: ['Un registro de una tabla se asocia a uno de otra', 'Un registro de una tabla se asocia a varios de otra', 'Varios registros se asocian a varios', 'Ninguna de las anteriores'],
      correctAnswer: 1,
      explanation: 'En una relación 1:N, un registro de la tabla A puede tener muchos registros coincidentes en la tabla B, pero un registro de B solo tiene uno en A.'
    },

    {
      questionText: '¿Qué comando SQL se usa para recuperar datos?',
      options: ['GET', 'SELECT', 'FETCH', 'RETRIEVE'],
      correctAnswer: 1,
      explanation: 'SELECT es el comando estándar para consultar datos en una base de datos relacional.'
    },
    {
      questionText: '¿Qué cláusula se usa para ordenar los resultados?',
      options: ['SORT BY', 'ORDER BY', 'ARRANGE BY', 'GROUP BY'],
      correctAnswer: 1,
      explanation: 'ORDER BY se utiliza para ordenar el conjunto de resultados de una consulta.'
    },

    {
      questionText: '¿Qué es una clave foránea (Foreign Key)?',
      options: ['Una clave de otro país', 'Un campo que enlaza con la clave primaria de otra tabla', 'Una clave secreta', 'Un índice'],
      correctAnswer: 1,
      explanation: 'Una clave foránea es una columna o grupo de columnas que proporciona un enlace entre datos de dos tablas.'
    },
    {
      questionText: '¿Qué significa ACID en bases de datos?',
      options: ['Atomicidad, Consistencia, Aislamiento, Durabilidad', 'Acceso, Control, Integridad, Datos', 'Algoritmo, Código, Interfaz, Diseño', 'Ninguna'],
      correctAnswer: 0,
      explanation: 'ACID son las propiedades que garantizan que las transacciones de la base de datos se procesen de manera fiable.'
    },

    {
      questionText: '¿Qué es un procedimiento almacenado (Stored Procedure)?',
      options: ['Un archivo guardado', 'Un conjunto de instrucciones SQL guardadas en la base de datos', 'Una copia de seguridad', 'Una tabla'],
      correctAnswer: 1,
      explanation: 'Un procedimiento almacenado es un código SQL preparado que se puede guardar para que el código pueda reutilizarse una y otra vez.'
    },
    {
      questionText: '¿Qué es NoSQL?',
      options: ['No SQL', 'Bases de datos no relacionales', 'Nueva SQL', 'Nunca SQL'],
      correctAnswer: 1,
      explanation: 'NoSQL se refiere a una amplia clase de sistemas de gestión de bases de datos que difieren del modelo clásico relacional (ej. MongoDB).'
    },

    {
      questionText: '¿Qué comando SQL se usa para crear una nueva tabla?',
      options: ['MAKE TABLE', 'NEW TABLE', 'CREATE TABLE', 'ADD TABLE'],
      correctAnswer: 2,
      explanation: 'CREATE TABLE es el comando para definir una nueva tabla en la base de datos.'
    },
    {
      questionText: '¿Qué es un Trigger (Disparador)?',
      options: ['Un botón', 'Un procedimiento que se ejecuta automáticamente en respuesta a ciertos eventos en una tabla', 'Un error', 'Un índice'],
      correctAnswer: 1,
      explanation: 'Un trigger es un código SQL que se ejecuta automáticamente antes o después de un INSERT, UPDATE o DELETE.'
    },
  ]
};
