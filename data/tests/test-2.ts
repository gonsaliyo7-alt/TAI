
import type { Test } from '../../types';

export const TEST_2: Test = {
  id: 'test-2',
  title: 'Test 2: Org. Territorial y Dº Admin (Temas 6-10)',
  questions: [
    // Tema 6: Organización territorial
    { questionText: 'Según el artículo 137 de la Constitución, el Estado se organiza territorialmente en:', options: ['Municipios, Provincias y Comunidades Autónomas', 'Regiones y Nacionalidades', 'Distritos y Comarcas', 'Estados federados'], correctAnswer: 0 },
    { questionText: 'La provincia es una entidad local con personalidad jurídica propia, determinada por la agrupación de:', options: ['Comarcas', 'Municipios', 'Barrios', 'Distritos'], correctAnswer: 1 },
    
    // Tema 7: La Unión Europea
    { questionText: '¿Qué institución de la UE ejerce la función legislativa junto con el Parlamento Europeo?', options: ['La Comisión Europea', 'El Consejo de la Unión Europea', 'El Tribunal de Cuentas', 'El Banco Central Europeo'], correctAnswer: 1 },
    { questionText: 'En el Derecho Comunitario derivado, la Directiva se diferencia del Reglamento en que:', options: ['Es de alcance general', 'Obliga al Estado miembro en cuanto al resultado, dejando libertad de medios', 'Es directamente aplicable', 'No es vinculante'], correctAnswer: 1 },
    
    // Tema 8: Fuentes del Derecho Administrativo
    { questionText: 'En la jerarquía normativa, ¿qué rango tienen los Reglamentos respecto a la Ley?', options: ['Superior', 'Igual', 'Inferior', 'Independiente'], correctAnswer: 2 },
    { questionText: 'La potestad reglamentaria originaria corresponde, según la Constitución, a:', options: ['Los Ministros', 'El Gobierno', 'Las Cortes Generales', 'Los Directores Generales'], correctAnswer: 1 },
    
    // Tema 9: El acto administrativo
    { questionText: 'Un elemento esencial del acto administrativo es la "motivación". ¿Es obligatoria para todos los actos?', options: ['Sí, siempre', 'No, solo para los actos que limiten derechos subjetivos o intereses legítimos, entre otros', 'Nunca es obligatoria', 'Solo para los actos verbales'], correctAnswer: 1 },
    { questionText: '¿Cuándo se produce la eficacia del acto administrativo como regla general?', options: ['Desde que se dicta, salvo que se disponga otra cosa', 'Desde que se notifica', 'A los 20 días de su publicación', 'Cuando es firme'], correctAnswer: 0 },
    
    // Tema 10: Procedimiento administrativo común
    { questionText: 'La fase de instrucción del procedimiento administrativo tiene por objeto:', options: ['Dictar la resolución final', 'La determinación, conocimiento y comprobación de los datos para resolver', 'Notificar al interesado', 'Archivar el expediente'], correctAnswer: 1 },
    { questionText: 'Como regla general, el plazo máximo para resolver y notificar en un procedimiento administrativo (si la norma no fija otro) es de:', options: ['6 meses', '3 meses', '1 mes', '1 año'], correctAnswer: 1 }
  ]
};
