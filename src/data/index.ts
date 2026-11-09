import { Question } from '../types/enem';
import { MATEMATICA_QUESTIONS } from './questions-matematica';
import { FISICA_QUESTIONS } from './questions-fisica';
import { QUIMICA_QUESTIONS } from './questions-quimica';

export const ALL_QUESTIONS: Question[] = [
  ...MATEMATICA_QUESTIONS,
  ...FISICA_QUESTIONS,
  ...QUIMICA_QUESTIONS,
];

export const CURRICULUM_SCOPE = [
  {
    greatArea: 'Matemática e suas Tecnologias' as const,
    discipline: 'Matemática' as const,
    description:
      'Modelagem algébrica, análise de gráficos, relações métricas e probabilísticas aplicadas a problemas cotidianos.',
    topics: [
      'Álgebra',
      'Funções',
      'Geometria Plana',
      'Geometria Espacial',
      'Geometria Analítica',
      'Trigonometria',
      'Estatística',
      'Probabilidade',
      'Matemática Financeira',
    ] as const,
  },
  {
    greatArea: 'Ciências da Natureza e suas Tecnologias' as const,
    discipline: 'Física' as const,
    description:
      'Conservação de energia, fenômenos térmicos, sistemas ópticos, propagação ondulatória e circuitos eletromagnéticos.',
    topics: [
      'Mecânica',
      'Termologia',
      'Óptica',
      'Ondulatória',
      'Eletrodinâmica',
      'Eletromagnetismo',
    ] as const,
  },
  {
    greatArea: 'Ciências da Natureza e suas Tecnologias' as const,
    discipline: 'Química' as const,
    description:
      'Relações estequiométricas, balanço energético de reações, pilhas/eletrólise, equilíbrio em soluções e compostos orgânicos.',
    topics: [
      'Físico-Química',
      'Termoquímica',
      'Eletroquímica',
      'Estequiometria',
      'Soluções',
      'Equilíbrio Químico',
      'Química Orgânica',
    ] as const,
  },
];

