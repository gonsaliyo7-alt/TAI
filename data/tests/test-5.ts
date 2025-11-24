
import type { Test } from '../../types';

export const TEST_5: Test = {
  id: 'test-5',
  title: 'Test 5: Dº Penal II (Temas 21-25)',
  questions: [
    // Tema 21: Formas de aparición del delito
    { questionText: 'La tentativa existe cuando el sujeto:', options: ['Piensa en cometer el delito', 'Da principio a la ejecución del delito pero no lo consuma por causas independientes de su voluntad', 'Realiza todos los actos y consigue el resultado', 'Provoca a otros a delinquir'], correctAnswer: 1 },
    { questionText: '¿Quiénes son responsables criminalmente de los delitos?', options: ['Solo los autores', 'Los autores y los cómplices', 'Los encubridores únicamente', 'Los testigos'], correctAnswer: 1 },
    
    // Tema 22: Causas de extinción
    { questionText: '¿Cuál de las siguientes es una causa de extinción de la responsabilidad penal?', options: ['La embriaguez', 'La prescripción del delito', 'La legítima defensa', 'El estado de necesidad'], correctAnswer: 1 },
    { questionText: 'La prescripción de la pena comienza a computarse desde:', options: ['El día de comisión del delito', 'El día de la sentencia firme', 'El día que se detiene al autor', 'El día que ingresa en prisión'], correctAnswer: 1 },
    
    // Tema 23: La pena
    { questionText: 'La pena de prisión permanente revisable es una pena:', options: ['Privativa de derechos', 'Privativa de libertad grave', 'Leve', 'De multa'], correctAnswer: 1 },
    { questionText: 'Las medidas de seguridad se aplican a:', options: ['Sujetos imputables y culpables', 'Sujetos inimputables o semiimputables en función de su peligrosidad', 'Víctimas del delito', 'Testigos protegidos'], correctAnswer: 1 },
    
    // Tema 24: Suspensión y Libertad Condicional
    { questionText: 'Para la suspensión de la pena de prisión, ¿es necesario haber satisfecho las responsabilidades civiles (o comprometerse a ello)?', options: ['No, nunca', 'Sí, es un requisito necesario', 'Solo si la víctima lo pide', 'Depende del delito'], correctAnswer: 1 },
    { questionText: 'La libertad condicional supone:', options: ['La suspensión de la ejecución del resto de la pena', 'El indulto total', 'La eliminación de los antecedentes', 'Un permiso de fin de semana'], correctAnswer: 0 },
    
    // Tema 25: Delitos Admin y Seguridad
    { questionText: 'El delito de prevaricación lo comete:', options: ['El particular que soborna', 'La autoridad o funcionario que dicta resolución arbitraria a sabiendas de su injusticia', 'Quien malversa fondos', 'Quien desobedece a la autoridad'], correctAnswer: 1 },
    { questionText: 'Conducir un vehículo de motor con exceso de velocidad punible es un delito contra:', options: ['El patrimonio', 'La seguridad colectiva (seguridad vial)', 'La Administración Pública', 'El honor'], correctAnswer: 1 }
  ]
};
