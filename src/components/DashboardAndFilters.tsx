import React from 'react';
import {
  Atom,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  Filter,
  FlaskConical,
  Layers,
  Play,
  RotateCcw,
  Search,
  Sliders,
  Sparkles,
  Timer,
  Trash2,
  Trophy,
} from 'lucide-react';
import {
  Discipline,
  DISCIPLINE_TOPICS,
  ExamHistoryEntry,
  FilterState,
  Question,
  TimerMode,
  Topic,
} from '../types/enem';
import { CURRICULUM_SCOPE } from '../data';
import { CornerCatPeek, SoftPawIcon, StudyingCatDoodle } from './CatDoodles';

interface DashboardAndFiltersProps {
  allQuestions: Question[];
  filteredQuestions: Question[];
  filters: FilterState;
  onUpdateFilters: (partial: Partial<FilterState>) => void;
  onResetFilters: () => void;
  timerMode: TimerMode;
  onChangeTimerMode: (mode: TimerMode) => void;
  customMinutesPerQuestion: number;
  onChangeCustomMinutesPerQuestion: (mins: number) => void;
  onStartExam: (questionsToRun?: Question[]) => void;
  examHistory: ExamHistoryEntry[];
  onClearHistory: () => void;
  studiedMap: Record<string, boolean>;
  onOpenStudyGuide: () => void;
}

export const DashboardAndFilters: React.FC<DashboardAndFiltersProps> = ({
  allQuestions,
  filteredQuestions,
  filters,
  onUpdateFilters,
  onResetFilters,
  timerMode,
  onChangeTimerMode,
  customMinutesPerQuestion,
  onChangeCustomMinutesPerQuestion,
  onStartExam,
  examHistory,
  onClearHistory,
  studiedMap,
  onOpenStudyGuide,
}) => {
  const availableTopics: Topic[] =
    filters.discipline === 'Todas'
      ? [
          ...DISCIPLINE_TOPICS['Matemática'],
          ...DISCIPLINE_TOPICS['Física'],
          ...DISCIPLINE_TOPICS['Química'],
        ]
      : DISCIPLINE_TOPICS[filters.discipline];

  const questionsToLaunchCount =
    filters.questionLimit === 'Todas'
      ? filteredQuestions.length
      : Math.min(filters.questionLimit, filteredQuestions.length);

  const totalCountdownMinutes = questionsToLaunchCount * customMinutesPerQuestion;

  // Quick stats from history
  const totalCompletedExams = examHistory.length;
  const totalAnsweredHistorical = examHistory.reduce((acc, item) => acc + item.totalQuestions, 0);
  const averageAccuracy =
    totalCompletedExams > 0
      ? Math.round(
          examHistory.reduce((acc, item) => acc + item.accuracyPercent, 0) / totalCompletedExams
        )
      : null;

  const getDisciplineIcon = (disc: Discipline) => {
    switch (disc) {
      case 'Matemática':
        return <Calculator className="w-4 h-4" />;
      case 'Física':
        return <Atom className="w-4 h-4" />;
      case 'Química':
        return <FlaskConical className="w-4 h-4" />;
    }
  };

  const handleTopicQuickSelect = (discipline: Discipline, topic: Topic) => {
    onUpdateFilters({
      discipline,
      topic,
      year: 'Todos',
    });
    const el = document.getElementById('painel-filtros');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleQuickPreset = (preset: 'full-exatas' | 'mat-focus' | 'natureza-focus' | 'pocket') => {
    if (preset === 'full-exatas') {
      onUpdateFilters({
        year: 'Todos',
        discipline: 'Todas',
        topic: 'Todos',
        difficulty: 'Todas',
        searchQuery: '',
        questionLimit: 15,
      });
    } else if (preset === 'mat-focus') {
      onUpdateFilters({
        year: 'Todos',
        discipline: 'Matemática',
        topic: 'Todos',
        difficulty: 'Todas',
        searchQuery: '',
        questionLimit: 10,
      });
    } else if (preset === 'natureza-focus') {
      const naturezaQuestions = allQuestions
        .filter((q) => q.discipline === 'Física' || q.discipline === 'Química')
        .slice(0, 12);
      onStartExam(naturezaQuestions);
      return;
    } else if (preset === 'pocket') {
      onUpdateFilters({
        year: 2023,
        discipline: 'Todas',
        topic: 'Todos',
        difficulty: 'Todas',
        searchQuery: '',
        questionLimit: 6,
      });
    }
    const el = document.getElementById('painel-filtros');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* 1. HERO CARD — PAINEL DA RAPHAAA + PORCENTAGEM DE ESTUDO POR MATÉRIA */}
      <section className="relative overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-md p-6 sm:p-8">
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, #F3E3E7 0%, transparent 70%)' }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0F2] border border-[#F3E3E7] text-xs font-bold text-[#7A3E53]">
              <Sparkles className="w-3.5 h-3.5 text-[#8C4A5F]" />
              <span>Painel da Raphaaa • Preparação Intensiva ENEM (Exatas)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7A3E53] tracking-tight leading-tight">
              Bem-vinda de volta aos estudos, Raphaaa!
            </h2>

            <p className="text-sm sm:text-base text-[#4A4045] leading-relaxed">
              Ambiente de simulação realista e caderno de estudos ilustrado focados em{' '}
              <strong className="font-bold text-[#7A3E53]">Matemática, Física e Química</strong> das
              edições de <strong className="font-bold text-[#7A3E53]">2021, 2022 e 2023</strong>.
              Você pode tanto realizar simulados cronometrados sem gabarito quanto estudar todas as
              questões e resoluções comentadas e ilustradas!
            </p>

            {/* Quick Preset Action Buttons (Touch-First >= 48px + Paw Hover) */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={onOpenStudyGuide}
                className="group inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-2xl bg-[#7A3E53] text-white text-xs sm:text-sm font-extrabold shadow-sm hover:bg-[#8C4A5F] active:scale-[0.98] transition-all"
              >
                <BookOpen className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                <span>Estudos Ilustrados &amp; Resoluções (Todas as Questões)</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickPreset('full-exatas')}
                className="group inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-2xl bg-[#FAF0F2] text-[#7A3E53] border border-[#7A3E53]/30 text-xs sm:text-sm font-bold shadow-sm hover:bg-[#F3E3E7]/80 active:scale-[0.98] transition-all"
              >
                <SoftPawIcon className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
                <span>Simulado Misto Exatas (15 questões)</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickPreset('mat-focus')}
                className="group inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-2xl bg-[#FAF0F2] text-[#7A3E53] border border-[#F3E3E7] text-xs sm:text-sm font-bold hover:bg-[#F3E3E7]/70 active:scale-[0.98] transition-all"
              >
                <Calculator className="w-4 h-4 text-[#8C4A5F] group-hover:scale-110 transition-transform" />
                <span>Foco Matemática (10 questões)</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickPreset('natureza-focus')}
                className="group inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-2xl bg-[#FAF0F2] text-[#7A3E53] border border-[#F3E3E7] text-xs sm:text-sm font-bold hover:bg-[#F3E3E7]/70 active:scale-[0.98] transition-all"
              >
                <Atom className="w-4 h-4 text-[#8C4A5F] group-hover:scale-110 transition-transform" />
                <span>Iniciar Natureza (Física + Química)</span>
              </button>
            </div>
          </div>

          {/* Right side: Studying Cat Doodle & Metrics */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 bg-[#FAF0F2]/80 border border-[#F3E3E7] rounded-2xl p-4 sm:p-5 shrink-0">
            <div className="flex items-center gap-4">
              <div className="text-[#7A3E53] bg-white p-2.5 rounded-2xl border border-[#F3E3E7] shadow-sm">
                <StudyingCatDoodle className="w-20 h-20" />
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#8C4A5F] uppercase tracking-wider">
                  Resumo do Acervo
                </div>
                <div className="text-2xl font-extrabold text-[#7A3E53]">
                  {allQuestions.length} Questões
                </div>
                <div className="text-xs text-[#4A4045]">
                  <strong>22 tópicos</strong> mapeados (2021–2023)
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#F3E3E7]" />

            <div className="grid grid-cols-3 gap-2 w-full text-center">
              <div className="bg-white rounded-xl p-2 border border-[#F3E3E7]">
                <div className="text-xs text-[#8C4A5F] font-medium">Simulados</div>
                <div className="text-sm font-extrabold text-[#7A3E53]">{totalCompletedExams}</div>
              </div>
              <div className="bg-white rounded-xl p-2 border border-[#F3E3E7]">
                <div className="text-xs text-[#8C4A5F] font-medium">Resolvidas</div>
                <div className="text-sm font-extrabold text-[#7A3E53]">
                  {totalAnsweredHistorical}
                </div>
              </div>
              <div className="bg-white rounded-xl p-2 border border-[#F3E3E7]">
                <div className="text-xs text-[#8C4A5F] font-medium">Aproveit.</div>
                <div className="text-sm font-extrabold text-[#7A3E53]">
                  {averageAccuracy !== null ? `${averageAccuracy}%` : '—'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA DE PORCENTAGEM DE ESTUDO DE CADA MATÉRIA NO PAINEL */}
        <div className="relative z-10 mt-6 pt-6 border-t border-[#F3E3E7]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#7A3E53]" />
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#7A3E53]">
                Porcentagem de Estudo Concluído por Matéria
              </h3>
            </div>
            <button
              type="button"
              onClick={onOpenStudyGuide}
              className="text-xs font-extrabold text-[#7A3E53] hover:text-[#8C4A5F] underline self-start sm:self-auto"
            >
              Acessar Estudos Detalhados &amp; Ilustrados de todas as questões →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {(['Matemática', 'Física', 'Química'] as const).map((disc) => {
              const discQs = allQuestions.filter((q) => q.discipline === disc);
              const studiedCount = discQs.filter((q) => !!studiedMap[q.id]).length;
              const pct = discQs.length > 0 ? Math.round((studiedCount / discQs.length) * 100) : 0;

              return (
                <button
                  key={disc}
                  type="button"
                  onClick={onOpenStudyGuide}
                  className="text-left p-4 rounded-2xl bg-[#FAF0F2]/60 hover:bg-[#FAF0F2] border border-[#F3E3E7] transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#7A3E53]">
                      {getDisciplineIcon(disc)}
                      <span>{disc}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7A3E53] text-white text-xs font-extrabold">
                      {pct}% estudado
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white border border-[#F3E3E7] overflow-hidden">
                    <div
                      className="h-full bg-[#7A3E53] rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-[#8C4A5F] font-semibold">
                    <span>
                      {studiedCount} de {discQs.length} questões estudadas
                    </span>
                    <span>Ver estudo ilustrado →</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. FILTROS E BUSCA NO BANCO DE DADOS (Section 3.3) + CONFIGURAÇÃO DE PROVA (Section 3.1) */}
      <section
        id="painel-filtros"
        className="relative rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-md p-6 sm:p-8 scroll-mt-24"
      >
        {/* Corner decorative doodle */}
        <div className="hidden sm:block absolute -top-10 right-8 text-[#7A3E53] pointer-events-none">
          <CornerCatPeek className="w-20 h-12" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#F3E3E7]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF0F2] border border-[#F3E3E7] flex items-center justify-center text-[#7A3E53]">
              <Filter className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#7A3E53]">
                Filtros de Questões &amp; Configuração do Simulado
              </h3>
              <p className="text-xs sm:text-sm text-[#8C4A5F]">
                Selecione a edição (2021–2023), disciplina, tópico específico e o modo do cronômetro
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onResetFilters}
            className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[48px] rounded-xl bg-[#FAF0F2] hover:bg-[#F3E3E7] text-[#8C4A5F] hover:text-[#7A3E53] text-xs font-bold transition-all self-start sm:self-auto"
          >
            <RotateCcw className="w-4 h-4 transition-transform group-hover:-rotate-45" />
            <span>Limpar Filtros</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
          {/* Left Column: Edition, Discipline, Topic, Search */}
          <div className="lg:col-span-8 space-y-6">
            {/* 2.1 Por Edição (2021, 2022, 2023) */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C4A5F] mb-2.5">
                <Calendar className="w-4 h-4 text-[#7A3E53]" />
                <span>1. Filtrar por Edição do ENEM (Últimos 3 Anos)</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['Todos', 2023, 2022, 2021] as const).map((yr) => {
                  const isSelected = filters.year === yr;
                  const count =
                    yr === 'Todos'
                      ? allQuestions.length
                      : allQuestions.filter((q) => q.year === yr).length;
                  return (
                    <button
                      key={String(yr)}
                      type="button"
                      onClick={() => onUpdateFilters({ year: yr })}
                      className={`group flex items-center justify-between px-4 py-3 min-h-[48px] rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                        isSelected
                          ? 'bg-[#7A3E53] text-white border-[#7A3E53] shadow-sm'
                          : 'bg-[#FAF0F2]/60 text-[#4A4045] border-[#F3E3E7] hover:bg-[#FAF0F2] hover:border-[#8C4A5F]/40'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isSelected && <SoftPawIcon className="w-3.5 h-3.5 animate-paw-pop" />}
                        <span>{yr === 'Todos' ? 'Todas Edições' : `ENEM ${yr}`}</span>
                      </span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-white text-[#8C4A5F] border border-[#F3E3E7]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2.2 Por Disciplina (Matemática, Física, Química) */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C4A5F] mb-2.5">
                <Layers className="w-4 h-4 text-[#7A3E53]" />
                <span>2. Filtrar por Disciplina de Exatas</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['Todas', 'Matemática', 'Física', 'Química'] as const).map((disc) => {
                  const isSelected = filters.discipline === disc;
                  const count =
                    disc === 'Todas'
                      ? allQuestions.length
                      : allQuestions.filter((q) => q.discipline === disc).length;
                  return (
                    <button
                      key={disc}
                      type="button"
                      onClick={() =>
                        onUpdateFilters({
                          discipline: disc,
                          topic: 'Todos',
                        })
                      }
                      className={`group flex items-center justify-between px-3.5 py-3 min-h-[48px] rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                        isSelected
                          ? 'bg-[#7A3E53] text-white border-[#7A3E53] shadow-sm'
                          : 'bg-[#FAF0F2]/60 text-[#4A4045] border-[#F3E3E7] hover:bg-[#FAF0F2] hover:border-[#8C4A5F]/40'
                      }`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        {disc !== 'Todas' ? (
                          getDisciplineIcon(disc)
                        ) : (
                          <SoftPawIcon className="w-4 h-4" />
                        )}
                        <span className="truncate">{disc === 'Todas' ? 'Todas' : disc}</span>
                      </span>
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-white text-[#8C4A5F] border border-[#F3E3E7]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2.3 Por Tópico Específico (Pills Interativos) */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C4A5F]">
                  <Compass className="w-4 h-4 text-[#7A3E53]" />
                  <span>
                    3. Filtrar por Tópico Específico{' '}
                    {filters.discipline !== 'Todas' ? `(${filters.discipline})` : '(22 Tópicos)'}
                  </span>
                </label>
                {filters.topic !== 'Todos' && (
                  <button
                    type="button"
                    onClick={() => onUpdateFilters({ topic: 'Todos' })}
                    className="text-xs font-bold text-[#7A3E53] underline hover:text-[#8C4A5F]"
                  >
                    Mostrar todos os tópicos
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto p-1">
                <button
                  type="button"
                  onClick={() => onUpdateFilters({ topic: 'Todos' })}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[48px] rounded-xl text-xs font-bold border transition-all ${
                    filters.topic === 'Todos'
                      ? 'bg-[#7A3E53] text-white border-[#7A3E53] shadow-sm'
                      : 'bg-[#FAF0F2]/70 text-[#4A4045] border-[#F3E3E7] hover:bg-[#FAF0F2]'
                  }`}
                >
                  {filters.topic === 'Todos' && <SoftPawIcon className="w-3.5 h-3.5" />}
                  <span>Todos os Tópicos</span>
                </button>

                {availableTopics.map((top) => {
                  const isSelected = filters.topic === top;
                  const topicCount = allQuestions.filter(
                    (q) =>
                      q.topic === top &&
                      (filters.year === 'Todos' || q.year === filters.year) &&
                      (filters.discipline === 'Todas' || q.discipline === filters.discipline)
                  ).length;

                  return (
                    <button
                      key={top}
                      type="button"
                      onClick={() => onUpdateFilters({ topic: top })}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[48px] rounded-xl text-xs font-semibold border transition-all ${
                        isSelected
                          ? 'bg-[#7A3E53] text-white border-[#7A3E53] shadow-sm'
                          : 'bg-[#FFFFFF] text-[#4A4045] border-[#F3E3E7] hover:bg-[#FAF0F2] hover:border-[#8C4A5F]/40'
                      }`}
                    >
                      {isSelected && <SoftPawIcon className="w-3.5 h-3.5 animate-paw-pop" />}
                      <span>{top}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-[#FAF0F2] text-[#8C4A5F]'
                        }`}
                      >
                        {topicCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2.4 Busca Textual e Nível de Dificuldade */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-7">
                <label
                  htmlFor="search-input"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C4A5F] mb-2"
                >
                  <Search className="w-4 h-4 text-[#7A3E53]" />
                  <span>Busca no Banco de Questões</span>
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 text-[#8C4A5F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="search-input"
                    type="text"
                    value={filters.searchQuery}
                    onChange={(e) => onUpdateFilters({ searchQuery: e.target.value })}
                    placeholder="Ex: Eletrodinâmica, Estequiometria, Lei de Hess, parábola..."
                    className="w-full pl-10 pr-4 py-3 min-h-[48px] rounded-2xl bg-[#FAF0F2]/60 border border-[#F3E3E7] text-sm text-[#4A4045] placeholder:text-[#8C4A5F]/60 focus:outline-none focus:bg-white focus:border-[#7A3E53] transition-all"
                  />
                </div>
              </div>

              <div className="sm:col-span-5">
                <label
                  htmlFor="difficulty-select"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C4A5F] mb-2"
                >
                  <Sliders className="w-4 h-4 text-[#7A3E53]" />
                  <span>Complexidade</span>
                </label>
                <select
                  id="difficulty-select"
                  value={filters.difficulty}
                  onChange={(e) =>
                    onUpdateFilters({
                      difficulty: e.target.value as FilterState['difficulty'],
                    })
                  }
                  className="w-full px-4 py-3 min-h-[48px] rounded-2xl bg-[#FAF0F2]/60 border border-[#F3E3E7] text-sm font-semibold text-[#4A4045] focus:outline-none focus:bg-white focus:border-[#7A3E53]"
                >
                  <option value="Todas">Todas as dificuldades</option>
                  <option value="Fácil">Fácil (Fixação Base)</option>
                  <option value="Média">Média (Padrão ENEM)</option>
                  <option value="Difícil">Difícil (Alta Performance)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column: Timer Configuration & Launch Card */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl bg-[#FAF0F2] border border-[#F3E3E7] p-5 space-y-5">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#F3E3E7] flex items-center justify-center text-[#7A3E53]">
                  <Timer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#7A3E53]">
                    Ajustes do Modo Prova
                  </h4>
                  <p className="text-xs text-[#8C4A5F]">
                    Temporizador &amp; número de questões
                  </p>
                </div>
              </div>

              {/* Quantidade de questões do simulado */}
              <div>
                <label className="block text-xs font-bold text-[#4A4045] mb-1.5">
                  Quantidade de Questões no Caderno:
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {([5, 10, 15, 20, 'Todas'] as const).map((limit) => {
                    const active = filters.questionLimit === limit;
                    return (
                      <button
                        key={String(limit)}
                        type="button"
                        onClick={() => onUpdateFilters({ questionLimit: limit })}
                        className={`py-2.5 min-h-[48px] rounded-xl text-xs font-bold border transition-all ${
                          active
                            ? 'bg-[#7A3E53] text-white border-[#7A3E53]'
                            : 'bg-white text-[#4A4045] border-[#F3E3E7] hover:border-[#8C4A5F]'
                        }`}
                      >
                        {limit}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Modo do Temporizador (Section 3.1) */}
              <div>
                <label className="block text-xs font-bold text-[#4A4045] mb-1.5">
                  Modo do Temporizador:
                </label>
                <div className="space-y-2">
                  {[
                    {
                      id: 'countdown' as const,
                      title: 'Regressivo (Pressão Oficial ENEM)',
                      desc: `${customMinutesPerQuestion} min/questão (${totalCountdownMinutes} min no total)`,
                    },
                    {
                      id: 'stopwatch' as const,
                      title: 'Progressivo (Cronômetro Livre)',
                      desc: 'Mede o tempo crescente sem encerrar',
                    },
                    {
                      id: 'none' as const,
                      title: 'Sem Cronômetro',
                      desc: 'Modo focado apenas na resolução',
                    },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onChangeTimerMode(opt.id)}
                      className={`w-full text-left px-3.5 py-2.5 min-h-[48px] rounded-xl border transition-all flex items-center justify-between ${
                        timerMode === opt.id
                          ? 'bg-white border-[#7A3E53] ring-1 ring-[#7A3E53]'
                          : 'bg-white/60 border-[#F3E3E7] hover:bg-white'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#7A3E53]">{opt.title}</div>
                        <div className="text-[11px] text-[#8C4A5F]">{opt.desc}</div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          timerMode === opt.id
                            ? 'border-[#7A3E53] bg-[#7A3E53]'
                            : 'border-[#8C4A5F]'
                        }`}
                      >
                        {timerMode === opt.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {timerMode === 'countdown' && (
                <div className="bg-white p-3 rounded-xl border border-[#F3E3E7]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#4A4045] mb-1">
                    <span>Tempo por questão:</span>
                    <span className="text-[#7A3E53]">{customMinutesPerQuestion} min/questão</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={6}
                    step={0.5}
                    value={customMinutesPerQuestion}
                    onChange={(e) => onChangeCustomMinutesPerQuestion(Number(e.target.value))}
                    className="w-full accent-[#7A3E53] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#8C4A5F]">
                    <span>1 min (Rápido)</span>
                    <span>3 min (Padrão ENEM)</span>
                    <span>6 min (Calmo)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Summary & Launch CTA */}
            <div className="pt-3 border-t border-[#F3E3E7] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8C4A5F] font-medium">Questões selecionadas:</span>
                <span className="font-extrabold text-[#7A3E53] text-sm">
                  {questionsToLaunchCount} de {filteredQuestions.length} disponíveis
                </span>
              </div>

              <button
                type="button"
                disabled={questionsToLaunchCount === 0}
                onClick={() => onStartExam()}
                className="group w-full flex items-center justify-center gap-2.5 px-5 py-3.5 min-h-[52px] rounded-2xl bg-[#7A3E53] hover:bg-[#8C4A5F] disabled:opacity-50 disabled:pointer-events-none text-white font-extrabold text-sm shadow-blush-md active:scale-[0.99] transition-all"
              >
                <SoftPawIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-12" />
                <span>Iniciar Modo Prova ({questionsToLaunchCount} Questões)</span>
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Preview of matching questions (Strictly without answers!) */}
        <div className="mt-8 pt-6 border-t border-[#F3E3E7]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-extrabold text-[#7A3E53] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8C4A5F]" />
              <span>
                Prévia do Caderno Selecionado ({questionsToLaunchCount}{' '}
                {questionsToLaunchCount === 1 ? 'questão' : 'questões'})
              </span>
            </h4>
            <span className="text-xs text-[#8C4A5F] font-medium">
              Gabarito oculto até a conclusão do simulado
            </span>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="text-center py-8 px-4 rounded-2xl bg-[#FAF0F2]/50 border border-[#F3E3E7]">
              <p className="text-sm font-bold text-[#7A3E53]">
                Nenhuma questão encontrada para essa combinação de filtros.
              </p>
              <p className="text-xs text-[#8C4A5F] mt-1">
                Experimente selecionar "Todas Edições" ou limpar a busca textual.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredQuestions.slice(0, questionsToLaunchCount).map((q, index) => (
                <div
                  key={q.id}
                  className="flex flex-col justify-between p-4 rounded-2xl bg-[#FAF0F2]/40 hover:bg-[#FAF0F2] border border-[#F3E3E7] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#7A3E53] bg-white px-2.5 py-0.5 rounded-full border border-[#F3E3E7]">
                        #{index + 1} • ENEM {q.year} (Q.{q.questionNumber})
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#7A3E53]/10 text-[#7A3E53]">
                        {q.discipline}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-[#8C4A5F] mb-1">
                      Tópico: {q.topic} • {q.difficulty}
                    </div>
                    <p className="text-xs text-[#4A4045] line-clamp-2 leading-relaxed">
                      {q.contextText}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. ESCOPO MAPEADO DAS DISCIPLINAS (Section 2 of Specification) */}
      <section className="rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-md p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C4A5F]">
              Seção 2 • Mapeamento Curricular Exatas (2021–2023)
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#7A3E53] mt-0.5">
              Escopo Mapeado das Disciplinas &amp; Tópicos Cobertos
            </h3>
          </div>
          <p className="text-xs text-[#8C4A5F]">
            Clique em qualquer tópico abaixo para filtrar o simulado imediatamente
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#F3E3E7]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAF0F2] border-b border-[#F3E3E7] text-xs font-extrabold uppercase tracking-wider text-[#7A3E53]">
                <th className="py-3.5 px-4 sm:px-6 w-1/4">Grande Área</th>
                <th className="py-3.5 px-4 sm:px-6 w-1/6">Disciplina</th>
                <th className="py-3.5 px-4 sm:px-6">Tópicos Cobertos (Clique para praticar)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3E3E7] text-sm">
              {CURRICULUM_SCOPE.map((row) => (
                <tr key={row.discipline} className="hover:bg-[#FAF0F2]/30 transition-colors">
                  <td className="py-4 px-4 sm:px-6 align-top font-semibold text-[#4A4045]">
                    {row.greatArea}
                  </td>
                  <td className="py-4 px-4 sm:px-6 align-top">
                    <span className="inline-flex items-center gap-1.5 font-extrabold text-[#7A3E53]">
                      {getDisciplineIcon(row.discipline)}
                      <span>{row.discipline}</span>
                    </span>
                    <p className="text-xs text-[#8C4A5F] mt-1 leading-relaxed">
                      {row.description}
                    </p>
                  </td>
                  <td className="py-4 px-4 sm:px-6 align-top">
                    <div className="flex flex-wrap gap-2">
                      {row.topics.map((topic) => {
                        const isCurrentlySelected = filters.topic === topic;
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => handleTopicQuickSelect(row.discipline, topic)}
                            className={`group inline-flex items-center gap-1.5 px-3 py-2 min-h-[42px] rounded-xl text-xs font-bold border transition-all ${
                              isCurrentlySelected
                                ? 'bg-[#7A3E53] text-white border-[#7A3E53]'
                                : 'bg-[#FAF0F2]/70 text-[#7A3E53] border-[#F3E3E7] hover:bg-[#7A3E53] hover:text-white'
                            }`}
                          >
                            <SoftPawIcon className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                            <span>{topic}</span>
                          </button>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. HISTÓRICO DE SIMULADOS DA RAPHAAA (se houver) */}
      {examHistory.length > 0 && (
        <section className="rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-sm p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-[#7A3E53]" />
              <h3 className="text-base sm:text-lg font-extrabold text-[#7A3E53]">
                Histórico de Simulados Concluídos da Raphaaa
              </h3>
            </div>
            <button
              type="button"
              onClick={onClearHistory}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[48px] rounded-xl text-xs font-bold text-[#8C4A5F] hover:text-[#7A3E53] hover:bg-[#FAF0F2] transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar Histórico</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {examHistory.slice(0, 6).map((entry) => (
              <div
                key={entry.id}
                className="p-4 rounded-2xl bg-[#FAF0F2]/50 border border-[#F3E3E7] flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#8C4A5F]">{entry.date}</div>
                  <div className="text-sm font-extrabold text-[#7A3E53] mt-0.5">
                    {entry.correctCount} de {entry.totalQuestions} acertos ({entry.accuracyPercent}%)
                  </div>
                  <div className="text-[11px] text-[#4A4045] mt-0.5">
                    {entry.disciplines.join(', ')} • {Math.floor(entry.elapsedSeconds / 60)}m
                    {entry.elapsedSeconds % 60}s
                  </div>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#F3E3E7] flex items-center justify-center font-extrabold text-xs text-[#7A3E53]">
                  {entry.accuracyPercent}%
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
