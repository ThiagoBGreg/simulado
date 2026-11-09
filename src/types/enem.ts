export type EnemYear = 2021 | 2022 | 2023;

export type GreatArea =
  | 'Matemática e suas Tecnologias'
  | 'Ciências da Natureza e suas Tecnologias';

export type Discipline = 'Matemática' | 'Física' | 'Química';

export type MathTopic =
  | 'Álgebra'
  | 'Funções'
  | 'Geometria Plana'
  | 'Geometria Espacial'
  | 'Geometria Analítica'
  | 'Trigonometria'
  | 'Estatística'
  | 'Probabilidade'
  | 'Matemática Financeira';

export type PhysicsTopic =
  | 'Mecânica'
  | 'Termologia'
  | 'Óptica'
  | 'Ondulatória'
  | 'Eletrodinâmica'
  | 'Eletromagnetismo';

export type ChemistryTopic =
  | 'Físico-Química'
  | 'Termoquímica'
  | 'Eletroquímica'
  | 'Estequiometria'
  | 'Soluções'
  | 'Equilíbrio Químico'
  | 'Química Orgânica';

export type Topic = MathTopic | PhysicsTopic | ChemistryTopic;

export type AlternativeLetter = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Alternative {
  letter: AlternativeLetter;
  text: string;
}

export interface AppliedFormula {
  formula: string;
  description: string;
}

export interface QuestionResolution {
  numericalDemonstration: string[];
  appliedFormulas: AppliedFormula[];
  logicalReasoning: string;
}

export interface Question {
  id: string;
  year: EnemYear;
  questionNumber: number;
  greatArea: GreatArea;
  discipline: Discipline;
  topic: Topic;
  difficulty: 'Fácil' | 'Média' | 'Difícil';
  contextText: string;
  supportData?: string;
  commandText: string;
  alternatives: Alternative[];
  correctAnswer: AlternativeLetter;
  resolution: QuestionResolution;
}

export interface FilterState {
  year: EnemYear | 'Todos';
  discipline: Discipline | 'Todas';
  topic: Topic | 'Todos';
  searchQuery: string;
  difficulty: 'Todas' | 'Fácil' | 'Média' | 'Difícil';
  questionLimit: number | 'Todas';
}

export type TimerMode = 'countdown' | 'stopwatch' | 'none';

export interface ExamSession {
  id: string;
  startedAt: number;
  submittedAt?: number;
  elapsedSeconds: number;
  timerMode: TimerMode;
  countdownTargetSeconds: number;
  questions: Question[];
  answers: Record<string, AlternativeLetter>;
  eliminatedAlternatives: Record<string, AlternativeLetter[]>;
  flaggedQuestions: Record<string, boolean>;
}

export interface ExamHistoryEntry {
  id: string;
  date: string;
  totalQuestions: number;
  correctCount: number;
  accuracyPercent: number;
  elapsedSeconds: number;
  disciplines: Discipline[];
  years: EnemYear[];
}

export const DISCIPLINE_TOPICS: Record<Discipline, Topic[]> = {
  Matemática: [
    'Álgebra',
    'Funções',
    'Geometria Plana',
    'Geometria Espacial',
    'Geometria Analítica',
    'Trigonometria',
    'Estatística',
    'Probabilidade',
    'Matemática Financeira',
  ],
  Física: [
    'Mecânica',
    'Termologia',
    'Óptica',
    'Ondulatória',
    'Eletrodinâmica',
    'Eletromagnetismo',
  ],
  Química: [
    'Físico-Química',
    'Termoquímica',
    'Eletroquímica',
    'Estequiometria',
    'Soluções',
    'Equilíbrio Químico',
    'Química Orgânica',
  ],
};

export const DISCIPLINE_GREAT_AREA: Record<Discipline, GreatArea> = {
  Matemática: 'Matemática e suas Tecnologias',
  Física: 'Ciências da Natureza e suas Tecnologias',
  Química: 'Ciências da Natureza e suas Tecnologias',
};

