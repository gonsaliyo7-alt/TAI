import type { Test } from '../../types';

export const TEST_16: Test = {
  id: 'test-16',
  title: 'Test 16: Desarrollo Web y Accesibilidad',
  questions: [
    {
      questionText: '¿Qué etiqueta HTML5 se utiliza para definir el contenido principal del documento?',
      options: [
        '<main>',
        '<content>',
        '<body>',
        '<section>'
      ],
      correctAnswer: 0,
      explanation: 'La etiqueta <main> especifica el contenido principal del documento y debe ser única en el documento.'
    },
    {
      questionText: '¿Qué propiedad CSS se utiliza para cambiar el color de fondo?',
      options: [
        'color',
        'background-color',
        'bgcolor',
        'background-image'
      ],
      correctAnswer: 1,
      explanation: 'La propiedad background-color establece el color de fondo de un elemento.'
    },
    {
      questionText: '¿Qué significa WCAG?',
      options: [
        'Web Content Accessibility Guidelines',
        'World Computer Accessibility Group',
        'Web Coding And Graphics',
        'Wide Content Access Guide'
      ],
      correctAnswer: 0,
      explanation: 'WCAG (Pautas de Accesibilidad para el Contenido Web) son documentos que explican cómo hacer que el contenido web sea más accesible.'
    },
    {
      questionText: 'En JavaScript, ¿cómo se declara una variable cuyo valor no cambiará?',
      options: [
        'var',
        'let',
        'const',
        'static'
      ],
      correctAnswer: 2,
      explanation: 'La declaración const crea una referencia de solo lectura a un valor.'
    },
    {
      questionText: '¿Qué es el DOM?',
      options: [
        'Document Object Model',
        'Data Object Mode',
        'Digital Ordinance Model',
        'Disk Operating Method'
      ],
      correctAnswer: 0,
      explanation: 'El DOM es una interfaz de programación para documentos HTML y XML que representa la página para que los programas puedan cambiar su estructura, estilo y contenido.'
    },
    {
      questionText: '¿Qué atributo HTML se usa para proporcionar texto alternativo a una imagen?',
      options: [
        'title',
        'src',
        'alt',
        'desc'
      ],
      correctAnswer: 2,
      explanation: 'El atributo alt proporciona información alternativa para una imagen si el usuario no puede verla.'
    },
    {
      questionText: '¿Cuál es la versión actual del estándar HTML?',
      options: [
        'HTML4',
        'HTML5',
        'XHTML',
        'HTML 2023'
      ],
      correctAnswer: 1,
      explanation: 'HTML5 es la quinta y actual versión principal del estándar HTML.'
    },
    {
      questionText: '¿Qué es AJAX?',
      options: [
        'Un lenguaje de programación',
        'Asynchronous JavaScript and XML',
        'Un limpiador',
        'Un servidor web'
      ],
      correctAnswer: 1,
      explanation: 'AJAX es un conjunto de técnicas de desarrollo web que permiten que las aplicaciones web funcionen de forma asíncrona.'
    },
    {
      questionText: 'En CSS, ¿cómo se selecciona un elemento con id "header"?',
      options: [
        '.header',
        '#header',
        'header',
        '*header'
      ],
      correctAnswer: 1,
      explanation: 'En CSS, el selector de ID se denota con el símbolo almohadilla (#).'
    },
    {
      questionText: '¿Qué es Bootstrap?',
      options: [
        'Un sistema operativo',
        'Un framework de CSS (y JS) para diseño web responsive',
        'Un virus',
        'Un tipo de calzado'
      ],
      correctAnswer: 1,
      explanation: 'Bootstrap es un framework front-end popular para desarrollar sitios web responsivos y móviles.'
    },
    {
      questionText: '¿Qué es JSONP?',
      options: [
        'JSON with Padding',
        'JSON Parser',
        'Java Standard Object Notation',
        'JavaScript Object Notation Protocol'
      ],
      correctAnswer: 0,
      explanation: 'JSONP es una técnica de comunicación utilizada en los programas JavaScript para realizar llamadas asíncronas a dominios diferentes.'
    },
    {
      questionText: '¿Qué etiqueta se usa para crear un hipervínculo?',
      options: [
        '<link>',
        '<a>',
        '<href>',
        '<url>'
      ],
      correctAnswer: 1,
      explanation: 'La etiqueta <a> (anchor) define un hipervínculo.'
    },
    {
      questionText: '¿Qué es el Responsive Web Design?',
      options: [
        'Diseño web que responde a las preguntas del usuario',
        'Diseño web que se adapta al tamaño de la pantalla del dispositivo',
        'Diseño web rápido',
        'Diseño web responsable'
      ],
      correctAnswer: 1,
      explanation: 'El diseño web responsivo hace que las páginas web se rendericen bien en una variedad de dispositivos y tamaños de ventana o pantalla.'
    },
    {
      questionText: '¿Qué es un CMS?',
      options: [
        'Content Management System',
        'Computer Management Service',
        'Code Making System',
        'Central Memory Storage'
      ],
      correctAnswer: 0,
      explanation: 'Un CMS (Sistema de Gestión de Contenidos) es una aplicación software que permite crear y gestionar contenidos digitales (ej. WordPress).'
    },
    {
      questionText: '¿Qué es el SEO?',
      options: [
        'Search Engine Optimization',
        'System Engine Operation',
        'Software Engineering Organization',
        'Secure Email Output'
      ],
      correctAnswer: 0,
      explanation: 'SEO es el proceso de mejorar la visibilidad de un sitio web en los resultados orgánicos de los buscadores.'
    }
  ]
};