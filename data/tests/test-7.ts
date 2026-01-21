
import type { Test } from '../../types';

export const TEST_7: Test = {
  id: 'test-7',
  title: 'Test 7: Administración de Sistemas',
  questions: [
    // Tema: Windows Server
    {
      questionText: '¿Qué rol de servidor en Windows Server gestiona las identidades y accesos?',
      options: ['DHCP', 'DNS', 'Active Directory Domain Services (AD DS)', 'IIS'],
      correctAnswer: 2,
      explanation: 'AD DS (Active Directory Domain Services) almacena información sobre usuarios, equipos y otros dispositivos de la red.'
    },
    {
      questionText: '¿Qué sistema de archivos es nativo y recomendado para Windows Server?',
      options: ['FAT32', 'NTFS', 'EXT4', 'HFS'],
      correctAnswer: 1,
      explanation: 'NTFS es el sistema de archivos principal de las versiones recientes de Windows y Windows Server.'
    },

    // Tema: Linux
    {
      questionText: '¿Qué comando se utiliza para ver el espacio en disco en Linux?',
      options: ['free', 'df', 'top', 'ls'],
      correctAnswer: 1,
      explanation: 'El comando "df" (disk free) muestra la cantidad de espacio de disco disponible en el sistema de archivos.'
    },
    {
      questionText: '¿Qué archivo contiene la configuración de las interfaces de red en sistemas basados en Debian/Ubuntu antiguos?',
      options: ['/etc/network/interfaces', '/etc/sysconfig/network-scripts', '/etc/hosts', '/etc/resolv.conf'],
      correctAnswer: 0,
      explanation: 'En sistemas Debian/Ubuntu tradicionales, la configuración de red se encuentra en /etc/network/interfaces.'
    },

    // Tema: Virtualización
    {
      questionText: '¿Qué es VMware ESXi?',
      options: ['Un sistema operativo de escritorio', 'Un hipervisor de tipo 1 (bare-metal)', 'Un antivirus', 'Un navegador'],
      correctAnswer: 1,
      explanation: 'VMware ESXi es un hipervisor de tipo 1 que se instala directamente en el hardware del servidor.'
    },
    {
      questionText: '¿Qué tecnología permite ejecutar contenedores de aplicaciones?',
      options: ['Docker', 'Excel', 'Word', 'Paint'],
      correctAnswer: 0,
      explanation: 'Docker es una plataforma de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software.'
    },

    // Tema: Copias de Seguridad
    {
      questionText: '¿Qué tipo de copia de seguridad guarda solo los datos que han cambiado desde la última copia completa?',
      options: ['Completa', 'Diferencial', 'Incremental', 'Espejo'],
      correctAnswer: 1,
      explanation: 'La copia diferencial guarda los datos modificados desde la última copia completa. (La incremental guarda desde la última copia de cualquier tipo).'
    },
    {
      questionText: 'El RPO (Recovery Point Objective) define:',
      options: ['El tiempo máximo tolerable de caída del servicio', 'La cantidad máxima de datos que se pueden perder (medido en tiempo)', 'El coste de la copia', 'La velocidad del disco'],
      correctAnswer: 1,
      explanation: 'El RPO define el punto en el tiempo al que se deben recuperar los datos, determinando la pérdida máxima de datos tolerable.'
    },

    // Tema: Monitorización
    {
      questionText: '¿Qué protocolo se utiliza comúnmente para la monitorización de dispositivos de red?',
      options: ['SMTP', 'SNMP', 'FTP', 'HTTP'],
      correctAnswer: 1,
      explanation: 'SNMP (Simple Network Management Protocol) es el protocolo estándar para gestionar y monitorizar dispositivos de red.'
    },
    {
      questionText: '¿Qué herramienta se usa para analizar el tráfico de red (sniffer)?',
      options: ['Wireshark', 'Notepad', 'Calculator', 'Paint'],
      correctAnswer: 0,
      explanation: 'Wireshark es un analizador de protocolos de red muy utilizado.'
    },
  ]
};
