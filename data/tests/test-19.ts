
import type { Test } from '../../types';

export const TEST_19: Test = {
  id: 'test-19',
  title: 'Test 19: Redes y Comunicaciones',
  questions: [
    {
      questionText: '¿Qué capa del modelo OSI se encarga del direccionamiento lógico (IP)?',
      options: ['Capa de Enlace', 'Capa de Red', 'Capa de Transporte', 'Capa de Sesión'],
      correctAnswer: 1,
      explanation: 'La Capa de Red (Capa 3) es responsable del direccionamiento lógico y el enrutamiento.'
    },
    {
      questionText: '¿Cuál es la dirección de broadcast de la red 192.168.1.0/24?',
      options: ['192.168.1.0', '192.168.1.1', '192.168.1.254', '192.168.1.255'],
      correctAnswer: 3,
      explanation: 'En una red /24, la última dirección (255) es la de broadcast.'
    },

    {
      questionText: '¿Qué protocolo se utiliza para transferir páginas web?',
      options: ['FTP', 'SMTP', 'HTTP', 'SNMP'],
      correctAnswer: 2,
      explanation: 'HTTP (Hypertext Transfer Protocol) es el protocolo base de la World Wide Web.'
    },
    {
      questionText: '¿Qué es TCP?',
      options: ['Transmission Control Protocol', 'Total Control Protocol', 'Transfer Center Protocol', 'Time Control Protocol'],
      correctAnswer: 0,
      explanation: 'TCP es un protocolo de transporte orientado a conexión que garantiza la entrega de datos.'
    },

    {
      questionText: '¿Qué es UDP?',
      options: ['User Datagram Protocol', 'Universal Data Protocol', 'User Data Point', 'Unified Data Path'],
      correctAnswer: 0,
      explanation: 'UDP es un protocolo de transporte no orientado a conexión, más rápido pero menos fiable que TCP.'
    },
    {
      questionText: '¿Qué puerto utiliza el servicio DNS?',
      options: ['21', '25', '53', '80'],
      correctAnswer: 2,
      explanation: 'DNS utiliza el puerto 53 (UDP y TCP).'
    },

    {
      questionText: '¿Qué es una dirección IPv6?',
      options: ['32 bits', '64 bits', '128 bits', '256 bits'],
      correctAnswer: 2,
      explanation: 'IPv6 utiliza direcciones de 128 bits, permitiendo un espacio de direcciones mucho mayor que IPv4.'
    },
    {
      questionText: '¿Qué dispositivo conecta diferentes redes y dirige el tráfico entre ellas?',
      options: ['Hub', 'Switch', 'Router', 'Repeater'],
      correctAnswer: 2,
      explanation: 'El router es el dispositivo de red que reenvía paquetes de datos entre redes informáticas.'
    },

    {
      questionText: '¿Qué es el ancho de banda?',
      options: ['La velocidad de la luz', 'La cantidad máxima de datos que se pueden transmitir en un tiempo dado', 'El ancho del cable', 'La distancia de la red'],
      correctAnswer: 1,
      explanation: 'El ancho de banda se refiere a la capacidad de transmisión de una conexión de red.'
    },
    {
      questionText: '¿Qué estándar define las redes Wi-Fi?',
      options: ['802.3', '802.11', '802.15', '802.1Q'],
      correctAnswer: 1,
      explanation: 'IEEE 802.11 es el conjunto de estándares para redes inalámbricas (WLAN).'
    },
  ]
};
