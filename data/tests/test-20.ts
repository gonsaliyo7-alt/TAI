
import type { Test } from '../../types';

export const TEST_20: Test = {
  id: 'test-20',
  title: 'Test 20: Seguridad y Protección de Datos',
  questions: [
    {
      questionText: '¿Qué ley regula la protección de datos personales en España?',
      options: ['LOPDGDD', 'LSSI', 'LPI', 'LGT'],
      correctAnswer: 1,
      explanation: 'La Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).'
    },
    {
      questionText: '¿Qué es el RGPD?',
      options: ['Reglamento General de Protección de Datos', 'Registro General de Protección de Datos', 'Regla General de Privacidad de Datos', 'Red Global de Protección de Datos'],
      correctAnswer: 0,
      explanation: 'El Reglamento General de Protección de Datos es la normativa europea de privacidad.'
    },

    {
      questionText: '¿Qué es un ataque de Phishing?',
      options: ['Pescar peces', 'Suplantación de identidad por correo electrónico para robar credenciales', 'Un virus', 'Un error de software'],
      correctAnswer: 1,
      explanation: 'El phishing es una técnica de ingeniería social para engañar a los usuarios y obtener información confidencial.'
    },
    {
      questionText: '¿Qué es la criptografía simétrica?',
      options: ['Usa la misma clave para cifrar y descifrar', 'Usa dos claves diferentes', 'No usa claves', 'Es insegura'],
      correctAnswer: 0,
      explanation: 'En la criptografía simétrica, el emisor y el receptor comparten una única clave secreta.'
    },

    {
      questionText: '¿Qué es un Hash?',
      options: ['Una función unidireccional que convierte datos en una cadena de longitud fija', 'Una clave', 'Un virus', 'Un archivo'],
      correctAnswer: 1,
      explanation: 'Un hash es una huella digital de los datos; si los datos cambian, el hash cambia. Es irreversible.'
    },
    {
      questionText: '¿Qué es la autenticación multifactor (MFA)?',
      options: ['Usar solo contraseña', 'Usar dos o más métodos de verificación (algo que sabes, tienes o eres)', 'Usar dos contraseñas', 'No autenticar'],
      correctAnswer: 1,
      explanation: 'MFA aumenta la seguridad requiriendo múltiples formas de identificación.'
    },

    {
      questionText: '¿Qué es un Troyano?',
      options: ['Un virus que se replica', 'Un malware que se disfraza de software legítimo', 'Un antivirus', 'Un firewall'],
      correctAnswer: 1,
      explanation: 'Un troyano parece útil o inofensivo pero contiene código malicioso oculto.'
    },
    {
      questionText: '¿Qué es la ISO 27001?',
      options: ['Un estándar internacional para la gestión de la seguridad de la información', 'Un estándar de calidad', 'Un estándar ambiental', 'Un software'],
      correctAnswer: 0,
      explanation: 'ISO/IEC 27001 es la norma internacional para los Sistemas de Gestión de Seguridad de la Información (SGSI).'
    },

    {
      questionText: '¿Qué es un ataque XSS (Cross-Site Scripting)?',
      options: ['Inyección de scripts maliciosos en sitios web confiables', 'Ataque al servidor', 'Robo de hardware', 'Ataque de fuerza bruta'],
      correctAnswer: 0,
      explanation: 'XSS permite a los atacantes inyectar scripts en páginas web vistas por otros usuarios.'
    },
    {
      questionText: '¿Qué es la confidencialidad?',
      options: ['Garantizar que la información solo sea accesible por personas autorizadas', 'Que los datos sean correctos', 'Que el sistema funcione', 'Que sea rápido'],
      correctAnswer: 0,
      explanation: 'La confidencialidad es uno de los pilares de la seguridad (junto con integridad y disponibilidad).'
    },
  ]
};
