
import type { Test } from '../../types';

export const TEST_6: Test = {
  id: 'test-6',
  title: 'Test 6: Tecnología Básica y Sistemas (Bloque II)',
  questions: [
    // Tema: Arquitectura de ordenadores
    {
      questionText: 'En la arquitectura de Von Neumann, ¿qué registro contiene la dirección de la siguiente instrucción a ejecutar?',
      options: ['Registro de Instrucción (IR)', 'Contador de Programa (PC)', 'Registro de Direcciones de Memoria (MAR)', 'Acumulador'],
      correctAnswer: 1,
      explanation: 'El Contador de Programa (PC) es el registro que almacena la dirección de memoria de la próxima instrucción que debe ser ejecutada por la CPU.'
    },
    {
      questionText: '¿Cuál de las siguientes NO es una de las libertades del Software Libre según la FSF?',
      options: ['Libertad de usar el programa con cualquier propósito', 'Libertad de estudiar cómo funciona el programa y modificarlo', 'Libertad de distribuir copias del programa', 'Libertad de vender el software a un precio superior al de mercado'],
      correctAnswer: 3,
      explanation: 'Las 4 libertades son: 0 (usar), 1 (estudiar/modificar), 2 (distribuir copias) y 3 (mejorar y hacer públicas las mejoras). La libertad de precio no es una de las definiciones fundamentales, aunque el software libre puede ser comercial.'
    },

    // Tema: Sistemas Operativos
    {
      questionText: 'En el sistema operativo UNIX/Linux, ¿qué comando se utiliza para cambiar los permisos de un archivo?',
      options: ['chown', 'chmod', 'chgrp', 'umask'],
      correctAnswer: 1,
      explanation: 'El comando "chmod" (change mode) se utiliza para cambiar los permisos de acceso (lectura, escritura, ejecución) de archivos y directorios.'
    },
    {
      questionText: '¿Qué es la memoria virtual?',
      options: ['Una memoria RAM muy rápida', 'Una técnica que permite al software usar más memoria principal de la que realmente posee el ordenador', 'La memoria caché del procesador', 'Un tipo de memoria ROM'],
      correctAnswer: 1,
      explanation: 'La memoria virtual es una técnica de gestión de la memoria que permite al sistema operativo disponer de mayor cantidad de memoria que la físicamente disponible, utilizando espacio en disco (paginación/intercambio).'
    },

    // Tema: Redes
    {
      questionText: '¿En qué capa del modelo OSI trabaja el protocolo IP?',
      options: ['Capa de Enlace', 'Capa de Red', 'Capa de Transporte', 'Capa de Sesión'],
      correctAnswer: 1,
      explanation: 'El protocolo IP (Internet Protocol) opera en la Capa 3 (Red) del modelo OSI, encargándose del direccionamiento y encaminamiento de paquetes.'
    },
    {
      questionText: '¿Cuál es la dirección de loopback (bucle local) en IPv4?',
      options: ['192.168.1.1', '10.0.0.1', '127.0.0.1', '255.255.255.0'],
      correctAnswer: 2,
      explanation: 'La dirección 127.0.0.1 está reservada para el loopback, permitiendo que el equipo se envíe paquetes a sí mismo para pruebas y diagnósticos.'
    },

    // Tema: Bases de Datos
    {
      questionText: 'En el modelo relacional, ¿qué es una clave foránea (Foreign Key)?',
      options: ['Un campo que identifica de forma única cada registro', 'Un campo que referencia a la clave primaria de otra tabla', 'Un índice secundario', 'Un procedimiento almacenado'],
      correctAnswer: 1,
      explanation: 'Una clave foránea es un campo (o conjunto de campos) en una tabla que hace referencia a la clave primaria de otra tabla, estableciendo una relación entre ambas.'
    },
    {
      questionText: '¿Qué propiedad de las transacciones ACID garantiza que, si una parte de la transacción falla, toda la transacción falla?',
      options: ['Atomicidad', 'Consistencia', 'Aislamiento', 'Durabilidad'],
      correctAnswer: 0,
      explanation: 'La Atomicidad garantiza que una transacción se trata como una unidad indivisible: o se ejecutan todas sus operaciones o no se ejecuta ninguna.'
    },

    // Tema: Seguridad
    {
      questionText: '¿Qué tipo de malware se caracteriza por cifrar los archivos del usuario y pedir un rescate?',
      options: ['Spyware', 'Ransomware', 'Adware', 'Worm'],
      correctAnswer: 1,
      explanation: 'El Ransomware es un tipo de software malicioso que restringe el acceso a determinadas partes o archivos del sistema infectado (generalmente mediante cifrado) y pide un rescate a cambio de quitar esta restricción.'
    },
    {
      questionText: 'En el Esquema Nacional de Seguridad (ENS), ¿qué dimensión de seguridad se refiere a que la información no sea conocida por personas no autorizadas?',
      options: ['Integridad', 'Disponibilidad', 'Confidencialidad', 'Trazabilidad'],
      correctAnswer: 2,
      explanation: 'La Confidencialidad es la propiedad por la que la información no se pone a disposición ni se revela a individuos, entidades o procesos no autorizados.'
    },
  ]
};
