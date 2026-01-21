
import type { Test } from '../../types';

export const TEST_8: Test = {
  id: 'test-8',
  title: 'Test 8: Bases de Datos',
  questions: [
    // Tema: Modelo Relacional
    {
      questionText: 'En el modelo relacional, ¿qué es una tupla?',
      options: ['Una columna', 'Una fila', 'Una tabla', 'Una base de datos'],
      correctAnswer: 1,
      explanation: 'En el modelo relacional, una tupla corresponde a una fila de una tabla.'
    },
    {
      questionText: '¿Qué forma normal elimina las dependencias transitivas?',
      options: ['Primera Forma Normal (1FN)', 'Segunda Forma Normal (2FN)', 'Tercera Forma Normal (3FN)', 'Cuarta Forma Normal (4FN)'],
      correctAnswer: 2,
      explanation: 'La Tercera Forma Normal (3FN) requiere que la tabla esté en 2FN y que no existan dependencias transitivas (los atributos no clave deben depender solo de la clave primaria).'
    },

    // Tema: SQL
    {
      questionText: '¿Qué comando SQL se utiliza para eliminar registros de una tabla?',
      options: ['DROP', 'DELETE', 'REMOVE', 'TRUNCATE'],
      correctAnswer: 1,
      explanation: 'DELETE se usa para eliminar filas específicas (o todas) de una tabla. DROP elimina la tabla entera. TRUNCATE vacía la tabla rápidamente.'
    },
    {
      questionText: '¿Qué cláusula SQL se usa para filtrar los resultados de una función de agregación (como COUNT o SUM)?',
      options: ['WHERE', 'HAVING', 'ORDER BY', 'GROUP BY'],
      correctAnswer: 1,
      explanation: 'HAVING se utiliza para filtrar grupos de filas creados por GROUP BY, a diferencia de WHERE que filtra filas antes de agrupar.'
    },

    // Tema: Diseño
    {
      questionText: 'En un diagrama Entidad-Relación, ¿qué representa un rombo?',
      options: ['Una entidad', 'Un atributo', 'Una relación', 'Una clave'],
      correctAnswer: 2,
      explanation: 'En la notación estándar de Chen, los rombos representan las relaciones entre entidades.'
    },
    {
      questionText: '¿Qué es una clave candidata?',
      options: ['Cualquier columna de la tabla', 'Un conjunto de atributos que identifica unívocamente a una tupla y del cual se puede elegir la clave primaria', 'Una clave foránea', 'Un índice'],
      correctAnswer: 1,
      explanation: 'Una clave candidata es un atributo o conjunto de atributos que identifica de forma única cada fila y podría ser elegida como clave primaria.'
    },

    // Tema: Administración de BD
    {
      questionText: '¿Qué propiedad ACID asegura que una transacción se completa totalmente o no se realiza en absoluto?',
      options: ['Atomicidad', 'Consistencia', 'Aislamiento', 'Durabilidad'],
      correctAnswer: 0,
      explanation: 'La Atomicidad garantiza que la transacción es indivisible.'
    },
    {
      questionText: '¿Qué es un índice en una base de datos?',
      options: ['Una tabla de datos', 'Una estructura de datos que mejora la velocidad de recuperación de datos', 'Una copia de seguridad', 'Un usuario'],
      correctAnswer: 1,
      explanation: 'Los índices se utilizan para encontrar filas con valores específicos de una columna rápidamente.'
    },

    // Tema: SGBD
    {
      questionText: '¿Cuál de los siguientes es un SGBD de código abierto?',
      options: ['Oracle Database', 'Microsoft SQL Server', 'PostgreSQL', 'IBM DB2'],
      correctAnswer: 2,
      explanation: 'PostgreSQL es un sistema de gestión de bases de datos relacional de código abierto.'
    },
    {
      questionText: '¿Qué lenguaje se utiliza para definir la estructura de la base de datos (crear tablas, etc.)?',
      options: ['DML (Data Manipulation Language)', 'DDL (Data Definition Language)', 'DCL (Data Control Language)', 'TCL (Transaction Control Language)'],
      correctAnswer: 1,
      explanation: 'DDL (Data Definition Language) incluye comandos como CREATE, ALTER y DROP.'
    },
  ]
};
