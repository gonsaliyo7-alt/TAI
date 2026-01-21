
import type { Test } from '../../types';

export const TEST_17: Test = {
  id: 'test-17',
  title: 'Test 17: Servidores de Aplicaciones y Web',
  questions: [
    // Tema: Servidores Web
    {
      questionText: '¿Cuál es el archivo de configuración principal de Apache?',
      options: ['apache.conf', 'httpd.conf', 'web.xml', 'server.xml'],
      correctAnswer: 1,
      explanation: 'httpd.conf es el archivo principal de configuración del servidor HTTP Apache.'
    },
    {
      questionText: '¿Qué servidor web es conocido por su arquitectura orientada a eventos y alto rendimiento?',
      options: ['Apache', 'Nginx', 'IIS', 'Tomcat'],
      correctAnswer: 1,
      explanation: 'Nginx es conocido por su alto rendimiento, estabilidad y bajo consumo de recursos, usando una arquitectura asíncrona.'
    },

    // Tema: Servidores de Aplicaciones
    {
      questionText: 'Apache Tomcat es un contenedor de:',
      options: ['EJB', 'Servlets y JSP', 'ActiveX', '.NET'],
      correctAnswer: 1,
      explanation: 'Tomcat implementa las especificaciones de Jakarta Servlet, Jakarta Server Pages (JSP) y otras.'
    },
    {
      questionText: '¿Qué servidor de aplicaciones es de código abierto y desarrollado por Red Hat (ahora IBM)?',
      options: ['WebLogic', 'WebSphere', 'WildFly (JBoss)', 'GlassFish'],
      correctAnswer: 2,
      explanation: 'WildFly (anteriormente JBoss AS) es un servidor de aplicaciones Java EE de código abierto.'
    },

    // Tema: Protocolo HTTP
    {
      questionText: '¿Qué método HTTP es idempotente y se usa para solicitar un recurso?',
      options: ['POST', 'GET', 'DELETE', 'PATCH'],
      correctAnswer: 1,
      explanation: 'GET es idempotente (múltiples llamadas tienen el mismo efecto que una) y se usa para recuperar datos.'
    },
    {
      questionText: 'El código de estado 500 indica:',
      options: ['Not Found', 'Internal Server Error', 'Bad Request', 'Unauthorized'],
      correctAnswer: 1,
      explanation: '500 Internal Server Error es un error genérico del servidor.'
    },

    // Tema: Arquitectura
    {
      questionText: 'En una arquitectura de 3 capas, la capa de presentación suele ejecutarse en:',
      options: ['El servidor de base de datos', 'El navegador web (cliente)', 'El servidor de aplicaciones', 'El firewall'],
      correctAnswer: 1,
      explanation: 'La capa de presentación (frontend) se ejecuta típicamente en el cliente (navegador).'
    },
    {
      questionText: '¿Qué es el MVC?',
      options: ['Modelo Vista Controlador', 'Máquina Virtual Central', 'Método de Validación Completa', 'Modelo de Verificación de Código'],
      correctAnswer: 0,
      explanation: 'MVC es un patrón de arquitectura de software que separa los datos, la interfaz de usuario y la lógica de control.'
    },

    // Tema: Seguridad Web
    {
      questionText: '¿Qué es SSL/TLS?',
      options: ['Un lenguaje de programación', 'Protocolos criptográficos para comunicaciones seguras por red', 'Un servidor web', 'Una base de datos'],
      correctAnswer: 1,
      explanation: 'SSL (Secure Sockets Layer) y su sucesor TLS (Transport Layer Security) proporcionan seguridad en las comunicaciones.'
    },
    {
      questionText: '¿Qué es OWASP?',
      options: ['Open Web Application Security Project', 'Online Web Access Service Provider', 'Open World Application Standard Protocol', 'Only Web App Security Policy'],
      correctAnswer: 0,
      explanation: 'OWASP es una fundación sin fines de lucro que trabaja para mejorar la seguridad del software.'
    },
  ]
};
