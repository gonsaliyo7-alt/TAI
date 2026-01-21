
import type { Test } from '../../types';

export const TEST_9: Test = {
  id: 'test-9',
  title: 'Test 9: Sistemas Operativos y Administración',
  questions: [
    // Tema: Conceptos básicos SO
    {
      questionText: '¿Cuál es el núcleo del sistema operativo Linux?',
      options: ['Shell', 'Kernel', 'GUI', 'Terminal'],
      correctAnswer: 1,
      explanation: 'El Kernel es el núcleo del sistema operativo que gestiona los recursos del hardware y permite la comunicación entre software y hardware.'
    },
    {
      questionText: 'En Windows, ¿qué sistema de archivos soporta permisos de seguridad a nivel de archivo?',
      options: ['FAT', 'FAT32', 'NTFS', 'ExFAT'],
      correctAnswer: 2,
      explanation: 'NTFS (New Technology File System) soporta listas de control de acceso (ACL) y permisos de seguridad, a diferencia de FAT32.'
    },

    // Tema: Gestión de Procesos
    {
      questionText: '¿Qué comando en Linux muestra los procesos en ejecución?',
      options: ['ls', 'ps', 'cd', 'mkdir'],
      correctAnswer: 1,
      explanation: 'El comando "ps" (process status) muestra información sobre los procesos activos.'
    },
    {
      questionText: 'En Windows, ¿qué herramienta permite ver el uso de CPU y memoria en tiempo real?',
      options: ['Explorador de archivos', 'Administrador de tareas', 'Panel de control', 'Bloc de notas'],
      correctAnswer: 1,
      explanation: 'El Administrador de tareas proporciona información sobre el rendimiento del ordenador y los programas en ejecución.'
    },

    // Tema: Gestión de Memoria
    {
      questionText: '¿Qué es la paginación en la gestión de memoria?',
      options: ['Escribir en papel', 'Técnica de gestión de memoria que divide la memoria en bloques de tamaño fijo', 'Borrar memoria', 'Aumentar la RAM'],
      correctAnswer: 1,
      explanation: 'La paginación permite al sistema operativo utilizar datos que no caben en la memoria física principal moviéndolos al almacenamiento secundario.'
    },
    {
      questionText: '¿Qué es el Swapping?',
      options: ['Intercambio de procesos completos entre memoria principal y secundaria', 'Cambiar de usuario', 'Cambiar de disco duro', 'Cambiar de monitor'],
      correctAnswer: 0,
      explanation: 'El swapping (intercambio) mueve procesos enteros de la memoria RAM al disco duro para liberar espacio.'
    },

    // Tema: Entrada/Salida
    {
      questionText: '¿Qué es un Driver?',
      options: ['Un conductor', 'Un programa que permite al sistema operativo comunicarse con el hardware', 'Un virus', 'Un juego'],
      correctAnswer: 1,
      explanation: 'Un driver o controlador es software que actúa como intermediario entre el sistema operativo y un dispositivo de hardware.'
    },
    {
      questionText: '¿Qué es el Spooling?',
      options: ['Simultaneous Peripheral Operations On-Line', 'System Power On Line', 'Super Pool', 'Simple Print'],
      correctAnswer: 0,
      explanation: 'El spooling es un proceso de gestión de datos en el que los datos se colocan en un búfer temporal para ser procesados por un dispositivo (ej. impresora).'
    },

    // Tema: Seguridad y Usuarios
    {
      questionText: 'En Linux, ¿quién es el superusuario?',
      options: ['Admin', 'Root', 'System', 'User1'],
      correctAnswer: 1,
      explanation: 'Root es el nombre convencional del usuario que tiene todos los derechos o permisos en sistemas tipo Unix.'
    },
    {
      questionText: '¿Qué comando permite cambiar la contraseña de un usuario en Linux?',
      options: ['pwd', 'passwd', 'pass', 'changepass'],
      correctAnswer: 1,
      explanation: 'El comando "passwd" se utiliza para cambiar la contraseña de una cuenta de usuario.'
    },
  ]
};
