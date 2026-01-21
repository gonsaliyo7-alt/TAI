
import type { Test, Question } from '../types';

// ==========================================
// SUPUESTO 1: DISEÑO DE BASES DE DATOS (MODELO E-R)
// ==========================================
const SCENARIO_1 = 'Se desea diseñar una base de datos para la gestión de proyectos de un departamento ministerial. \n\n1. Un "Proyecto" tiene un código único, nombre, presupuesto y fecha de inicio. \n2. En cada proyecto trabajan varios "Empleados". Un empleado puede trabajar en varios proyectos. \n3. De cada empleado interesa su DNI, nombre y categoría. \n4. Se necesita registrar el número de horas que cada empleado dedica a cada proyecto. \n5. Cada proyecto es dirigido por un único empleado (Director), y un empleado puede dirigir varios proyectos.';

const QUESTIONS_1: Question[] = [
  { questionText: 'La relación entre "Proyecto" y "Empleado" (trabajar) es de tipo:', options: ['1:1', '1:N', 'N:M', 'Reflexiva'], correctAnswer: 2 },
  { questionText: 'Para implementar la relación N:M entre Proyecto y Empleado en el modelo relacional:', options: ['Se añade el DNI del empleado a la tabla Proyecto', 'Se añade el código de proyecto a la tabla Empleado', 'Se crea una nueva tabla (tabla intermedia) con las claves primarias de ambas', 'No se puede implementar'], correctAnswer: 2 },
  { questionText: 'El atributo "número de horas" se ubicaría en:', options: ['La tabla Proyecto', 'La tabla Empleado', 'La tabla intermedia resultante de la relación "trabajar"', 'En ninguna'], correctAnswer: 2 },
  { questionText: 'La relación "dirigir" entre Empleado y Proyecto es de tipo:', options: ['1:1', '1:N (Un empleado dirige N proyectos, un proyecto es dirigido por 1 empleado)', 'N:M', 'Recursiva'], correctAnswer: 1 },
  { questionText: 'En la tabla "Proyecto", la clave foránea que referencia al Director:', options: ['No puede aceptar valores nulos (NOT NULL) si todo proyecto debe tener director', 'Debe ser clave primaria', 'Debe ser única (UNIQUE)', 'No es necesaria'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 2: ADMINISTRACIÓN DE SISTEMAS (LINUX)
// ==========================================
const SCENARIO_2 = 'Como administrador de un servidor Linux (Ubuntu Server), necesitas gestionar el espacio en disco, los permisos de usuarios y la configuración de red. El sistema tiene un disco principal /dev/sda y se ha añadido uno nuevo /dev/sdb.';

const QUESTIONS_2: Question[] = [
  { questionText: '¿Qué comando utilizarías para ver el espacio disponible en los sistemas de ficheros montados?', options: ['du', 'df -h', 'ls -l', 'fdisk'], correctAnswer: 1 },
  { questionText: 'Deseas dar permisos de lectura, escritura y ejecución al propietario, y solo lectura al grupo y otros al archivo "script.sh". ¿Qué comando es correcto?', options: ['chmod 777 script.sh', 'chmod 744 script.sh', 'chmod 755 script.sh', 'chmod 644 script.sh'], correctAnswer: 1 },
  { questionText: 'Para montar el nuevo disco /dev/sdb1 en el directorio /mnt/datos, usas:', options: ['mount /dev/sdb1 /mnt/datos', 'attach /dev/sdb1 /mnt/datos', 'ln -s /dev/sdb1 /mnt/datos', 'format /dev/sdb1'], correctAnswer: 0 },
  { questionText: '¿En qué archivo se configura la información de las interfaces de red en versiones modernas de Ubuntu con Netplan?', options: ['/etc/network/interfaces', '/etc/netplan/*.yaml', '/etc/sysconfig/network', '/etc/hosts'], correctAnswer: 1 },
  { questionText: '¿Qué comando muestra los procesos que más CPU están consumiendo en tiempo real?', options: ['ps', 'top (o htop)', 'free', 'vmstat'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 3: REDES Y COMUNICACIONES (DIRECCIONAMIENTO IP)
// ==========================================
const SCENARIO_3 = 'Una organización tiene asignada la red 192.168.10.0/24. Se necesita dividir esta red en subredes para diferentes departamentos. Se requieren al menos 4 subredes utilizables.';

const QUESTIONS_3: Question[] = [
  { questionText: 'Para obtener al menos 4 subredes, ¿cuántos bits debemos tomar prestados de la parte de host?', options: ['1 bit', '2 bits (2^2 = 4)', '3 bits', '4 bits'], correctAnswer: 1 },
  { questionText: 'Si tomamos 2 bits prestados, ¿cuál será la nueva máscara de subred?', options: ['255.255.255.0', '255.255.255.128', '255.255.255.192', '255.255.255.224'], correctAnswer: 2 },
  { questionText: 'Con la máscara /26 (255.255.255.192), ¿cuántos hosts utilizables hay por subred?', options: ['64', '62 (64 - red - broadcast)', '32', '30'], correctAnswer: 1 },
  { questionText: '¿Cuál es la dirección de red de la primera subred?', options: ['192.168.10.0', '192.168.10.1', '192.168.10.64', '192.168.10.32'], correctAnswer: 0 },
  { questionText: '¿Cuál es la dirección de broadcast de la primera subred (192.168.10.0/26)?', options: ['192.168.10.63', '192.168.10.64', '192.168.10.127', '192.168.10.255'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 4: DESARROLLO WEB (ACCESIBILIDAD Y HTML)
// ==========================================
const SCENARIO_4 = 'Estás auditando la accesibilidad de un portal web de la Administración. Debes asegurar el cumplimiento de las pautas WCAG 2.1 nivel AA. Encuentras un formulario con campos sin etiquetas y varias imágenes sin texto alternativo.';

const QUESTIONS_4: Question[] = [
  { questionText: 'Para asociar explícitamente una etiqueta (<label>) con su campo de entrada (<input>), ¿qué atributos se deben corresponder?', options: ['El atributo "name" del input y el "for" del label', 'El atributo "id" del input y el "for" del label', 'El atributo "class" del input y el "id" del label', 'No hace falta asociarlos'], correctAnswer: 1 },
  { questionText: 'Si una imagen es puramente decorativa, ¿cómo debe ser su atributo alt?', options: ['No debe tener atributo alt', 'alt="decorativa"', 'alt="" (vacío)', 'alt="imagen"'], correctAnswer: 2 },
  { questionText: 'Para facilitar la navegación por teclado, ¿qué atributo HTML permite especificar el orden de tabulación?', options: ['tabindex', 'navindex', 'order', 'focus'], correctAnswer: 0 },
  { questionText: 'El contraste mínimo de color para texto normal en nivel AA debe ser:', options: ['3:1', '4.5:1', '7:1', '10:1'], correctAnswer: 1 },
  { questionText: '¿Qué atributo ARIA usarías para indicar que un elemento ha cambiado dinámicamente (ej. un mensaje de error)?', options: ['aria-live', 'aria-hidden', 'aria-label', 'aria-controls'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 5: PROGRAMACIÓN (JAVA)
// ==========================================
const SCENARIO_5 = 'Analiza el siguiente fragmento de código Java:\n\nList<String> lista = new ArrayList<>();\nlista.add("A");\nlista.add("B");\nIterator<String> it = lista.iterator();\nwhile(it.hasNext()) {\n  String s = it.next();\n  if(s.equals("A")) {\n    lista.remove(s);\n  }\n}';

const QUESTIONS_5: Question[] = [
  { questionText: '¿Qué ocurrirá al ejecutar este código?', options: ['Eliminará "A" correctamente', 'Lanzará ConcurrentModificationException', 'No compilará', 'Eliminará "B"'], correctAnswer: 1 },
  { questionText: '¿Cuál es la forma correcta de eliminar el elemento durante la iteración?', options: ['Usar it.remove()', 'Usar lista.delete(s)', 'Usar un bucle for normal', 'Crear una nueva lista'], correctAnswer: 0 },
  { questionText: 'ArrayList implementa la interfaz:', options: ['Set', 'List', 'Map', 'Queue'], correctAnswer: 1 },
  { questionText: 'Si quisiéramos una lista que no permita duplicados, usaríamos:', options: ['ArrayList', 'LinkedList', 'HashSet', 'Vector'], correctAnswer: 2 },
  { questionText: '¿Qué complejidad temporal tiene el método get(i) en un ArrayList?', options: ['O(1) - Constante', 'O(n) - Lineal', 'O(log n)', 'O(n^2)'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 6: SEGURIDAD (CRIPTOGRAFÍA)
// ==========================================
const SCENARIO_6 = 'Una empresa necesita asegurar la confidencialidad e integridad de sus comunicaciones. Se decide implementar una infraestructura de clave pública (PKI) y uso de firma electrónica.';

const QUESTIONS_6: Question[] = [
  { questionText: 'En un sistema de cifrado asimétrico, si A quiere enviar un mensaje cifrado a B, ¿qué clave utiliza A para cifrar?', options: ['La clave privada de A', 'La clave pública de A', 'La clave pública de B', 'La clave privada de B'], correctAnswer: 2 },
  { questionText: 'Para firmar digitalmente un documento y garantizar el no repudio, A utiliza:', options: ['Su clave privada', 'Su clave pública', 'La clave pública del receptor', 'Una clave simétrica'], correctAnswer: 0 },
  { questionText: '¿Qué función cumple el HASH en la firma electrónica?', options: ['Cifrar el mensaje completo', 'Generar un resumen único del mensaje para verificar su integridad', 'Comprimir el mensaje', 'Ocultar el remitente'], correctAnswer: 1 },
  { questionText: '¿Qué es una Autoridad de Certificación (CA)?', options: ['Un servidor de correo', 'Una entidad de confianza que emite y revoca certificados digitales', 'Un algoritmo', 'Un firewall'], correctAnswer: 1 },
  { questionText: '¿Qué protocolo se utiliza para consultar el estado de revocación de un certificado en tiempo real?', options: ['CRL', 'OCSP', 'LDAP', 'HTTP'], correctAnswer: 1 }
];

// ==========================================
// SUPUESTO 7: CONTRATACIÓN PÚBLICA (LCSP)
// ==========================================
const SCENARIO_7 = 'Un Ministerio necesita adquirir 500 ordenadores portátiles. El valor estimado del contrato es de 400.000 euros. Se debe tramitar el expediente de contratación conforme a la Ley 9/2017 (LCSP).';

const QUESTIONS_7: Question[] = [
  { questionText: 'Al tratarse de un contrato de suministro de valor estimado superior a 140.000 euros (AGE), es un contrato:', options: ['Menor', 'SARA (Sujeto a Regulación Armonizada)', 'Privado', 'Administrativo especial'], correctAnswer: 1 },
  { questionText: '¿Qué procedimiento de adjudicación sería el ordinario si se busca la mayor concurrencia?', options: ['Abierto', 'Negociado sin publicidad', 'Restringido', 'Diálogo competitivo'], correctAnswer: 0 },
  { questionText: '¿Es obligatorio dividir el contrato en lotes?', options: ['No, nunca', 'Sí, como regla general para facilitar el acceso a PYMES, salvo justificación en contrario', 'Solo si lo pide el contratista', 'Depende del Ministro'], correctAnswer: 1 },
  { questionText: '¿Dónde debe publicarse obligatoriamente la licitación?', options: ['Solo en el BOE', 'En el Perfil de Contratante y en el DOUE (al ser SARA)', 'En un diario nacional', 'En el tablón de anuncios'], correctAnswer: 1 },
  { questionText: 'El plazo de garantía en los contratos de suministro no podrá ser inferior a:', options: ['1 año', '2 años (salvo casos especiales)', '6 meses', '5 años'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 8: SQL (CONSULTAS)
// ==========================================
const SCENARIO_8 = 'Dada la tabla "EMPLEADOS" con campos (ID, NOMBRE, SALARIO, DEPARTAMENTO_ID). Queremos obtener información específica mediante consultas SQL.';

const QUESTIONS_8: Question[] = [
  { questionText: 'Para obtener el nombre de los empleados que ganan más de 30.000:', options: ['SELECT NOMBRE FROM EMPLEADOS WHERE SALARIO > 30000', 'GET NOMBRE FROM EMPLEADOS IF SALARIO > 30000', 'SELECT * FROM EMPLEADOS', 'SELECT NOMBRE WHERE SALARIO > 30000'], correctAnswer: 0 },
  { questionText: 'Para contar cuántos empleados hay en cada departamento:', options: ['SELECT DEPARTAMENTO_ID, COUNT(*) FROM EMPLEADOS GROUP BY DEPARTAMENTO_ID', 'SELECT COUNT(*) FROM EMPLEADOS', 'SELECT DEPARTAMENTO_ID, SUM(*) FROM EMPLEADOS', 'SELECT * FROM EMPLEADOS ORDER BY DEPARTAMENTO_ID'], correctAnswer: 0 },
  { questionText: 'Para obtener los empleados cuyo nombre empieza por "A":', options: ['SELECT * FROM EMPLEADOS WHERE NOMBRE LIKE "A%"', 'SELECT * FROM EMPLEADOS WHERE NOMBRE = "A*"', 'SELECT * FROM EMPLEADOS WHERE NOMBRE STARTS "A"', 'SELECT * FROM EMPLEADOS WHERE NOMBRE IS "A"'], correctAnswer: 0 },
  { questionText: 'Para eliminar a los empleados del departamento 5:', options: ['DELETE FROM EMPLEADOS WHERE DEPARTAMENTO_ID = 5', 'DROP EMPLEADOS WHERE DEPARTAMENTO_ID = 5', 'REMOVE FROM EMPLEADOS WHERE DEPARTAMENTO_ID = 5', 'ERASE EMPLEADOS'], correctAnswer: 0 },
  { questionText: 'Para subir el salario un 10% a todos:', options: ['UPDATE EMPLEADOS SET SALARIO = SALARIO * 1.10', 'ALTER EMPLEADOS SET SALARIO = SALARIO * 1.10', 'MODIFY EMPLEADOS SALARIO * 1.10', 'CHANGE SALARIO'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 9: PROTECCIÓN DE DATOS (RGPD)
// ==========================================
const SCENARIO_9 = 'Un ciudadano solicita ejercer su derecho de acceso a sus datos personales almacenados por un organismo público. El organismo debe responder a la solicitud.';

const QUESTIONS_9: Question[] = [
  { questionText: '¿Cuál es el plazo máximo para responder a la solicitud de ejercicio de derechos?', options: ['1 mes (prorrogable otros 2)', '10 días', '3 meses', '1 año'], correctAnswer: 0 },
  { questionText: 'Si el organismo no tiene datos del solicitante, ¿debe responder?', options: ['Sí, informando de que no trata sus datos', 'No, puede ignorar la solicitud', 'Solo si insiste', 'No, porque no hay datos'], correctAnswer: 0 },
  { questionText: 'El ejercicio de los derechos ARCO-POL es:', options: ['Gratuito', 'De pago', 'Gratuito solo la primera vez', 'Depende del volumen'], correctAnswer: 0 },
  { questionText: 'Si el ciudadano no está satisfecho con la respuesta, puede reclamar ante:', options: ['La Agencia Española de Protección de Datos (AEPD)', 'La Policía', 'El Ministerio del Interior', 'El Defensor del Pueblo'], correctAnswer: 0 },
  { questionText: '¿Qué figura es la encargada de supervisar el cumplimiento del RGPD en el organismo?', options: ['El Delegado de Protección de Datos (DPD/DPO)', 'El Director de TI', 'El Ministro', 'El usuario'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 10: CLOUD COMPUTING (AWS/AZURE)
// ==========================================
const SCENARIO_10 = 'Se decide migrar una aplicación web monolítica on-premise a la nube pública (AWS o Azure) para mejorar su escalabilidad y disponibilidad.';

const QUESTIONS_10: Question[] = [
  { questionText: 'Si migramos la aplicación tal cual a máquinas virtuales en la nube, estamos usando el modelo:', options: ['IaaS (Infrastructure as a Service)', 'PaaS (Platform as a Service)', 'SaaS (Software as a Service)', 'FaaS (Function as a Service)'], correctAnswer: 0 },
  { questionText: 'Para escalar automáticamente el número de servidores según la carga, utilizamos:', options: ['Auto Scaling', 'Load Balancing', 'CDN', 'DNS'], correctAnswer: 0 },
  { questionText: 'Si decidimos usar un servicio de base de datos gestionado (como RDS o Azure SQL), estamos usando:', options: ['PaaS', 'IaaS', 'SaaS', 'On-premise'], correctAnswer: 0 },
  { questionText: 'Para distribuir el tráfico entrante entre varios servidores web, necesitamos:', options: ['Un Balanceador de Carga (Load Balancer)', 'Un Firewall', 'Un Router', 'Un Switch'], correctAnswer: 0 },
  { questionText: 'El modelo de pago en la nube pública suele ser:', options: ['Pago por uso (Pay-as-you-go)', 'Tarifa plana fija', 'Gratis', 'Pago único inicial'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 11: METODOLOGÍAS ÁGILES (SCRUM)
// ==========================================
const SCENARIO_11 = 'Un equipo de desarrollo adopta Scrum para un nuevo proyecto. El equipo está formado por 1 Product Owner, 1 Scrum Master y 5 Desarrolladores. Trabajan en Sprints de 2 semanas.';

const QUESTIONS_11: Question[] = [
  { questionText: '¿Quién es el responsable de priorizar el Product Backlog?', options: ['El Product Owner', 'El Scrum Master', 'El Equipo de Desarrollo', 'El Cliente'], correctAnswer: 0 },
  { questionText: 'La reunión diaria de 15 minutos se llama:', options: ['Daily Scrum', 'Sprint Planning', 'Sprint Review', 'Retrospective'], correctAnswer: 0 },
  { questionText: 'Al final del Sprint, el equipo muestra el incremento de producto en la:', options: ['Sprint Review', 'Sprint Retrospective', 'Daily Scrum', 'Refinement'], correctAnswer: 0 },
  { questionText: '¿Quién se encarga de eliminar impedimentos y facilitar el proceso?', options: ['El Scrum Master', 'El Product Owner', 'El Jefe de Proyecto', 'Los Desarrolladores'], correctAnswer: 0 },
  { questionText: 'El artefacto que contiene todo el trabajo pendiente del proyecto es:', options: ['Product Backlog', 'Sprint Backlog', 'Incremento', 'Burndown Chart'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 12: REDES (MODELO OSI Y TCP/IP)
// ==========================================
const SCENARIO_12 = 'Un usuario informa que no puede acceder a una página web. Al hacer ping a la dirección IP del servidor (8.8.8.8) responde, pero al hacer ping a "google.com" no resuelve.';

const QUESTIONS_12: Question[] = [
  { questionText: 'El problema más probable está en:', options: ['El servidor DNS', 'El cable de red', 'La tarjeta de red', 'El servidor web'], correctAnswer: 0 },
  { questionText: 'El protocolo DNS trabaja en la capa OSI:', options: ['Aplicación (7)', 'Transporte (4)', 'Red (3)', 'Enlace (2)'], correctAnswer: 0 },
  { questionText: 'El comando ping utiliza el protocolo:', options: ['ICMP', 'TCP', 'UDP', 'HTTP'], correctAnswer: 0 },
  { questionText: 'Si la dirección IP fuera 192.168.1.10, sería una dirección:', options: ['Privada de clase C', 'Pública', 'De loopback', 'De multicast'], correctAnswer: 0 },
  { questionText: 'El protocolo TCP se diferencia de UDP en que:', options: ['TCP es orientado a conexión y fiable', 'UDP es más lento', 'TCP no verifica errores', 'Son iguales'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 13: SCRIPTING (SHELL/BASH)
// ==========================================
const SCENARIO_13 = 'Necesitas crear un script en Bash para automatizar una copia de seguridad diaria de un directorio /var/www/html a /backup.';

const QUESTIONS_13: Question[] = [
  { questionText: 'La primera línea del script (shebang) debe ser:', options: ['#!/bin/bash', '//bin/bash', 'REM /bin/bash', 'Start /bin/bash'], correctAnswer: 0 },
  { questionText: 'Para copiar el directorio recursivamente, el comando es:', options: ['cp -r /var/www/html /backup', 'cp /var/www/html /backup', 'copy /var/www/html /backup', 'mv /var/www/html /backup'], correctAnswer: 0 },
  { questionText: 'Para programar la ejecución diaria a las 3:00 AM, usarías:', options: ['cron (crontab)', 'at', 'sleep', 'wait'], correctAnswer: 0 },
  { questionText: 'La entrada en crontab para las 3:00 AM sería:', options: ['0 3 * * * /ruta/script.sh', '3 0 * * * /ruta/script.sh', '* 3 * * * /ruta/script.sh', '0 0 3 * * /ruta/script.sh'], correctAnswer: 0 },
  { questionText: 'Para dar permisos de ejecución al script:', options: ['chmod +x script.sh', 'chmod +w script.sh', 'chown script.sh', 'run script.sh'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 14: JAVA (EXCEPCIONES)
// ==========================================
const SCENARIO_14 = 'Estás depurando un programa Java que lee un archivo. El código está dentro de un bloque try-catch.';

const QUESTIONS_14: Question[] = [
  { questionText: 'Si el archivo no existe, se lanzará una excepción de tipo:', options: ['FileNotFoundException', 'NullPointerException', 'ArrayIndexOutOfBoundsException', 'ClassCastException'], correctAnswer: 0 },
  { questionText: 'FileNotFoundException es una subclase de:', options: ['IOException', 'RuntimeException', 'Error', 'Throwable'], correctAnswer: 0 },
  { questionText: 'El bloque "finally":', options: ['Se ejecuta siempre, haya o no excepción', 'Solo si hay excepción', 'Solo si no hay excepción', 'Nunca se ejecuta'], correctAnswer: 0 },
  { questionText: 'Las excepciones "Checked" (comprobadas) obligan al programador a:', options: ['Capturarlas (try-catch) o declararlas (throws)', 'Ignorarlas', 'Corregirlas', 'Nada'], correctAnswer: 0 },
  { questionText: 'Para lanzar manualmente una excepción se usa la palabra clave:', options: ['throw', 'throws', 'try', 'catch'], correctAnswer: 0 }
];

// ==========================================
// SUPUESTO 15: GESTIÓN DE PROYECTOS (MÉTRICA V3)
// ==========================================
const SCENARIO_15 = 'En un proyecto de desarrollo siguiendo Métrica v3, se está en la fase de Análisis del Sistema de Información (ASI).';

const QUESTIONS_15: Question[] = [
  { questionText: 'El objetivo principal del ASI es:', options: ['Obtener un catálogo de requisitos detallado', 'Escribir el código', 'Instalar el sistema', 'Formar a usuarios'], correctAnswer: 0 },
  { questionText: 'El Modelo de Datos se elabora en:', options: ['Análisis y Diseño', 'Solo en Construcción', 'En Planificación', 'En Mantenimiento'], correctAnswer: 0 },
  { questionText: 'El Plan de Pruebas se define inicialmente en:', options: ['Análisis', 'Diseño', 'Construcción', 'Implantación'], correctAnswer: 0 },
  { questionText: '¿Qué participante es responsable de la validación de los requisitos?', options: ['El Usuario', 'El Programador', 'El Técnico de Sistemas', 'El Becario'], correctAnswer: 0 },
  { questionText: 'El resultado final del ASI es:', options: ['El Catálogo de Requisitos y la Especificación de Requisitos Software (ERS)', 'El código fuente', 'El manual de usuario', 'El ejecutable'], correctAnswer: 0 }
];

export const PRACTICAL_CASES: Test[] = [
  { id: 'case-1', title: 'Caso Práctico 1: Bases de Datos (Diseño)', scenario: SCENARIO_1, questions: QUESTIONS_1 },
  { id: 'case-2', title: 'Caso Práctico 2: Sistemas (Linux)', scenario: SCENARIO_2, questions: QUESTIONS_2 },
  { id: 'case-3', title: 'Caso Práctico 3: Redes (IP)', scenario: SCENARIO_3, questions: QUESTIONS_3 },
  { id: 'case-4', title: 'Caso Práctico 4: Web (Accesibilidad)', scenario: SCENARIO_4, questions: QUESTIONS_4 },
  { id: 'case-5', title: 'Caso Práctico 5: Programación (Java)', scenario: SCENARIO_5, questions: QUESTIONS_5 },
  { id: 'case-6', title: 'Caso Práctico 6: Seguridad (Criptografía)', scenario: SCENARIO_6, questions: QUESTIONS_6 },
  { id: 'case-7', title: 'Caso Práctico 7: Contratos (LCSP)', scenario: SCENARIO_7, questions: QUESTIONS_7 },
  { id: 'case-8', title: 'Caso Práctico 8: SQL (Consultas)', scenario: SCENARIO_8, questions: QUESTIONS_8 },
  { id: 'case-9', title: 'Caso Práctico 9: Protección Datos (RGPD)', scenario: SCENARIO_9, questions: QUESTIONS_9 },
  { id: 'case-10', title: 'Caso Práctico 10: Cloud (AWS/Azure)', scenario: SCENARIO_10, questions: QUESTIONS_10 },
  { id: 'case-11', title: 'Caso Práctico 11: Metodologías (Scrum)', scenario: SCENARIO_11, questions: QUESTIONS_11 },
  { id: 'case-12', title: 'Caso Práctico 12: Redes (Diagnóstico)', scenario: SCENARIO_12, questions: QUESTIONS_12 },
  { id: 'case-13', title: 'Caso Práctico 13: Scripting (Bash)', scenario: SCENARIO_13, questions: QUESTIONS_13 },
  { id: 'case-14', title: 'Caso Práctico 14: Java (Excepciones)', scenario: SCENARIO_14, questions: QUESTIONS_14 },
  { id: 'case-15', title: 'Caso Práctico 15: Proyectos (Métrica v3)', scenario: SCENARIO_15, questions: QUESTIONS_15 },
];
