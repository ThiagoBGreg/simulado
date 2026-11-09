import React, { useMemo, useState } from 'react';
import {
  Atom,
  BookMarked,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Compass,
  Filter,
  FlaskConical,
  FunctionSquare,
  Layers,
  Lightbulb,
  NotebookPen,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  AlertTriangle,
} from 'lucide-react';
import {
  Discipline,
  DISCIPLINE_GREAT_AREA,
  DISCIPLINE_TOPICS,
  EnemYear,
  Question,
  Topic,
} from '../types/enem';
import { CornerCatPeek, SoftPawIcon, StudyingCatDoodle } from './CatDoodles';
import { TOPIC_VISUALS, TopicIllustrationCard } from './TopicIllustrations';

interface StudyGuideViewProps {
  allQuestions: Question[];
  studiedMap: Record<string, boolean>;
  studyNotes: Record<string, string>;
  onToggleStudied: (questionId: string) => void;
  onMarkBatchStudied: (questionIds: string[], studied: boolean) => void;
  onUpdateStudyNote: (questionId: string, note: string) => void;
  onStartSimuladoFromFilter: (questionsToRun: Question[]) => void;
}

export const StudyGuideView: React.FC<StudyGuideViewProps> = ({
  allQuestions,
  studiedMap,
  studyNotes,
  onToggleStudied,
  onMarkBatchStudied,
  onUpdateStudyNote,
  onStartSimuladoFromFilter,
}) => {
  const [studyModeTab, setStudyModeTab] = useState<'questions' | 'chapters'>('questions');
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | 'Todas'>('Todas');
  const [selectedTopic, setSelectedTopic] = useState<Topic | 'Todos'>('Todos');
  const [selectedYear, setSelectedYear] = useState<EnemYear | 'Todos'>('Todos');
  const [studyStatusFilter, setStudyStatusFilter] = useState<'all' | 'pending' | 'studied'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openNotesMap, setOpenNotesMap] = useState<Record<string, boolean>>({});
  const [collapsedCards, setCollapsedCards] = useState<Record<string, boolean>>({});

  // Calculate study percentages per discipline and overall
  const progressStats = useMemo(() => {
    const disciplines: Discipline[] = ['Matemática', 'Física', 'Química'];
    const byDiscipline = disciplines.map((disc) => {
      const qs = allQuestions.filter((q) => q.discipline === disc);
      const studiedCount = qs.filter((q) => !!studiedMap[q.id]).length;
      const total = qs.length;
      const percent = total > 0 ? Math.round((studiedCount / total) * 100) : 0;

      const topics = DISCIPLINE_TOPICS[disc];
      const completedTopics = topics.filter((top) => {
        const topicQs = qs.filter((q) => q.topic === top);
        return topicQs.length > 0 && topicQs.every((q) => !!studiedMap[q.id]);
      }).length;

      return {
        discipline: disc,
        studiedCount,
        total,
        percent,
        completedTopics,
        totalTopics: topics.length,
        questionIds: qs.map((q) => q.id),
      };
    });

    const totalQuestions = allQuestions.length;
    const totalStudied = allQuestions.filter((q) => !!studiedMap[q.id]).length;
    const overallPercent =
      totalQuestions > 0 ? Math.round((totalStudied / totalQuestions) * 100) : 0;

    return {
      byDiscipline,
      totalQuestions,
      totalStudied,
      overallPercent,
    };
  }, [allQuestions, studiedMap]);

  const availableTopics: Topic[] =
    selectedDiscipline === 'Todas'
      ? [
          ...DISCIPLINE_TOPICS['Matemática'],
          ...DISCIPLINE_TOPICS['Física'],
          ...DISCIPLINE_TOPICS['Química'],
        ]
      : DISCIPLINE_TOPICS[selectedDiscipline];

  const filteredStudyQuestions = useMemo(() => {
    const qLower = searchQuery.trim().toLowerCase();
    return allQuestions.filter((q) => {
      if (selectedDiscipline !== 'Todas' && q.discipline !== selectedDiscipline) return false;
      if (selectedTopic !== 'Todos' && q.topic !== selectedTopic) return false;
      if (selectedYear !== 'Todos' && q.year !== selectedYear) return false;

      const isStudied = !!studiedMap[q.id];
      if (studyStatusFilter === 'studied' && !isStudied) return false;
      if (studyStatusFilter === 'pending' && isStudied) return false;

      if (qLower.length > 0) {
        const haystack = [
          q.contextText,
          q.commandText,
          q.supportData || '',
          q.topic,
          q.discipline,
          String(q.year),
          q.resolution.logicalReasoning,
          ...q.resolution.numericalDemonstration,
          ...q.resolution.appliedFormulas.map((f) => `${f.formula} ${f.description}`),
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(qLower)) return false;
      }

      return true;
    });
  }, [
    allQuestions,
    selectedDiscipline,
    selectedTopic,
    selectedYear,
    studyStatusFilter,
    searchQuery,
    studiedMap,
  ]);

  const getDisciplineIcon = (disc: Discipline) => {
    switch (disc) {
      case 'Matemática':
        return <Calculator className="w-5 h-5" />;
      case 'Física':
        return <Atom className="w-5 h-5" />;
      case 'Química':
        return <FlaskConical className="w-5 h-5" />;
    }
  };

  const findTopicDiscipline = (topic: Topic): Discipline => {
    if (DISCIPLINE_TOPICS['Matemática'].includes(topic)) return 'Matemática';
    if (DISCIPLINE_TOPICS['Física'].includes(topic)) return 'Física';
    return 'Química';
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 1. CABEÇALHO DO MODO ESTUDOS & PORCENTAGEM DE ESTUDO POR MATÉRIA */}
      <section className="relative overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-md p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-[#F3E3E7]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="text-[#7A3E53] bg-[#FAF0F2] p-3 rounded-2xl border border-[#F3E3E7] shadow-sm shrink-0">
              <StudyingCatDoodle className="w-24 h-24" />
            </div>

            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0F2] border border-[#F3E3E7] text-xs font-bold text-[#7A3E53]">
                <Sparkles className="w-3.5 h-3.5 text-[#8C4A5F]" />
                <span>Caderno de Estudos Ilustrado • Todas as Questões e Resoluções</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7A3E53] tracking-tight">
                Central de Estudos Ilustrada da Raphaaa
              </h2>

              <p className="text-sm sm:text-base text-[#4A4045] leading-relaxed">
                Explore todas as <strong className="text-[#7A3E53]">{allQuestions.length} questões</strong> de{' '}
                <strong className="text-[#7A3E53]">Matemática, Física e Química (2021–2023)</strong> com{' '}
                <strong>esquemas visuais ilustrados</strong>, apostila teórica dos 22 tópicos,
                cálculo passo a passo, fórmulas e raciocínio lógico.
              </p>

              {/* Mode Switcher: Questões Resolvidas vs Apostila por Tópico */}
              <div className="pt-1 flex flex-wrap justify-center sm:justify-start gap-2.5">
                <button
                  type="button"
                  onClick={() => setStudyModeTab('questions')}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-2xl text-xs sm:text-sm font-extrabold border transition-all ${
                    studyModeTab === 'questions'
                      ? 'bg-[#7A3E53] text-white border-[#7A3E53] shadow-sm'
                      : 'bg-[#FAF0F2] text-[#7A3E53] border-[#F3E3E7] hover:bg-[#F3E3E7]'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Todas as Questões &amp; Resoluções Ilustradas ({allQuestions.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStudyModeTab('chapters')}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-2xl text-xs sm:text-sm font-extrabold border transition-all ${
                    studyModeTab === 'chapters'
                      ? 'bg-[#7A3E53] text-white border-[#7A3E53] shadow-sm'
                      : 'bg-[#FAF0F2] text-[#7A3E53] border-[#F3E3E7] hover:bg-[#F3E3E7]'
                  }`}
                >
                  <BookMarked className="w-4 h-4" />
                  <span>Apostila Teórica &amp; Fórmulas por Tópico (22 Capítulos)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Overall Study Percentage Card */}
          <div className="bg-[#FAF0F2] border border-[#F3E3E7] rounded-2xl p-5 min-w-[250px] flex flex-col justify-between gap-3 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#8C4A5F]">
                Progresso Geral de Estudos
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-[#7A3E53] text-white text-sm font-extrabold">
                {progressStats.overallPercent}%
              </span>
            </div>

            <div className="text-2xl font-extrabold text-[#7A3E53]">
              {progressStats.totalStudied} de {progressStats.totalQuestions} estudadas
            </div>

            <div className="w-full h-3 rounded-full bg-white border border-[#F3E3E7] overflow-hidden">
              <div
                className="h-full bg-[#7A3E53] rounded-full transition-all duration-500"
                style={{ width: `${progressStats.overallPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#8C4A5F] font-semibold">
              <span>22 tópicos de Exatas</span>
              {progressStats.totalStudied > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    onMarkBatchStudied(
                      allQuestions.map((q) => q.id),
                      false
                    )
                  }
                  className="text-[#7A3E53] underline hover:text-[#8C4A5F]"
                >
                  Zerar marcações
                </button>
              )}
            </div>
          </div>
        </div>

        {/* PORCENTAGEM DE ESTUDO DE CADA MATÉRIA (Matemática, Física, Química) */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#7A3E53]">
              📊 Porcentagem de Estudo por Matéria (Clique para filtrar ou marcar)
            </h3>
            <span className="text-xs text-[#8C4A5F]">
              Progresso salvo automaticamente no navegador da Raphaaa
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {progressStats.byDiscipline.map((item) => {
              const isSelected = selectedDiscipline === item.discipline;
              const isAllDone = item.studiedCount === item.total && item.total > 0;

              return (
                <div
                  key={item.discipline}
                  className={`rounded-2xl border p-5 transition-all flex flex-col justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#FAF0F2] border-[#7A3E53] ring-2 ring-[#7A3E53]/20 shadow-sm'
                      : 'bg-white border-[#F3E3E7] hover:bg-[#FAF0F2]/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedDiscipline(isSelected ? 'Todas' : item.discipline);
                          setSelectedTopic('Todos');
                        }}
                        className="flex items-center gap-2.5 text-left focus:outline-none"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#7A3E53] text-white flex items-center justify-center shadow-sm">
                          {getDisciplineIcon(item.discipline)}
                        </div>
                        <div>
                          <div className="text-base font-extrabold text-[#7A3E53]">
                            {item.discipline}
                          </div>
                          <div className="text-xs text-[#8C4A5F] font-medium">
                            {item.completedTopics} de {item.totalTopics} tópicos 100% concluídos
                          </div>
                        </div>
                      </button>

                      <div className="text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-xl bg-[#7A3E53]/10 text-[#7A3E53] text-base font-extrabold">
                          {item.percent}%
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-[#4A4045]">
                          {item.studiedCount} de {item.total} questões estudadas
                        </span>
                        <span className="text-[#7A3E53]">
                          {item.total - item.studiedCount} restantes
                        </span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-[#F3E3E7] overflow-hidden">
                        <div
                          className="h-full bg-[#7A3E53] rounded-full transition-all duration-500"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-[#F3E3E7]">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDiscipline(isSelected ? 'Todas' : item.discipline);
                        setSelectedTopic('Todos');
                      }}
                      className={`flex-1 py-2.5 px-3 min-h-[44px] rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#7A3E53] text-white'
                          : 'bg-[#FAF0F2] text-[#7A3E53] hover:bg-[#F3E3E7]'
                      }`}
                    >
                      {isSelected ? 'Mostrando Matéria' : `Estudar ${item.discipline}`}
                    </button>

                    <button
                      type="button"
                      onClick={() => onMarkBatchStudied(item.questionIds, !isAllDone)}
                      className="py-2.5 px-3 min-h-[44px] rounded-xl bg-white border border-[#F3E3E7] text-xs font-bold text-[#8C4A5F] hover:text-[#7A3E53] hover:border-[#7A3E53] transition-all"
                      title={
                        isAllDone
                          ? `Desmarcar todas de ${item.discipline}`
                          : `Marcar todas de ${item.discipline} como estudadas`
                      }
                    >
                      {isAllDone ? 'Desmarcar' : 'Marcar 100%'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. BARRA DE FILTROS DO CADERNO DE ESTUDOS */}
      <section className="relative rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-sm p-5 sm:p-6 space-y-5">
        <div className="hidden sm:block absolute -top-10 right-8 text-[#7A3E53] pointer-events-none">
          <CornerCatPeek className="w-20 h-12" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Filter className="w-5 h-5 text-[#7A3E53]" />
            <h3 className="text-base sm:text-lg font-extrabold text-[#7A3E53]">
              {studyModeTab === 'questions'
                ? `Filtrar Questões e Resoluções (${filteredStudyQuestions.length})`
                : `Filtrar Capítulos da Apostila (${availableTopics.length} tópicos)`}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {studyModeTab === 'questions' && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    const next: Record<string, boolean> = {};
                    filteredStudyQuestions.forEach((q) => {
                      next[q.id] = false;
                    });
                    setCollapsedCards(next);
                  }}
                  className="px-3.5 py-2 min-h-[44px] rounded-xl bg-[#FAF0F2] text-[#7A3E53] text-xs font-bold hover:bg-[#F3E3E7] transition-all"
                >
                  Expandir Tudo
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const next: Record<string, boolean> = {};
                    filteredStudyQuestions.forEach((q) => {
                      next[q.id] = true;
                    });
                    setCollapsedCards(next);
                  }}
                  className="px-3.5 py-2 min-h-[44px] rounded-xl bg-[#FAF0F2] text-[#8C4A5F] text-xs font-bold hover:bg-[#F3E3E7] transition-all"
                >
                  Modo Compacto
                </button>
              </>
            )}

            {filteredStudyQuestions.length > 0 && (
              <button
                type="button"
                onClick={() => onStartSimuladoFromFilter(filteredStudyQuestions)}
                className="group inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-xl bg-[#7A3E53] text-white text-xs font-extrabold hover:bg-[#8C4A5F] transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Simular estas ({filteredStudyQuestions.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Discipline, Year, Status, Search */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-3">
            <label className="block text-[11px] font-bold uppercase text-[#8C4A5F] mb-1">
              Matéria
            </label>
            <select
              value={selectedDiscipline}
              onChange={(e) => {
                setSelectedDiscipline(e.target.value as Discipline | 'Todas');
                setSelectedTopic('Todos');
              }}
              className="w-full px-3.5 py-2.5 min-h-[48px] rounded-xl bg-[#FAF0F2]/70 border border-[#F3E3E7] text-xs sm:text-sm font-bold text-[#7A3E53] focus:outline-none focus:border-[#7A3E53]"
            >
              <option value="Todas">Todas as Matérias (Exatas)</option>
              <option value="Matemática">Matemática</option>
              <option value="Física">Física</option>
              <option value="Química">Química</option>
            </select>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-[11px] font-bold uppercase text-[#8C4A5F] mb-1">
              Edição ENEM
            </label>
            <select
              value={String(selectedYear)}
              onChange={(e) =>
                setSelectedYear(
                  e.target.value === 'Todos' ? 'Todos' : (Number(e.target.value) as EnemYear)
                )
              }
              className="w-full px-3.5 py-2.5 min-h-[48px] rounded-xl bg-[#FAF0F2]/70 border border-[#F3E3E7] text-xs sm:text-sm font-bold text-[#7A3E53] focus:outline-none focus:border-[#7A3E53]"
            >
              <option value="Todos">Todas (2021–2023)</option>
              <option value="2023">ENEM 2023</option>
              <option value="2022">ENEM 2022</option>
              <option value="2021">ENEM 2021</option>
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="block text-[11px] font-bold uppercase text-[#8C4A5F] mb-1">
              Status de Estudo
            </label>
            <select
              value={studyStatusFilter}
              onChange={(e) =>
                setStudyStatusFilter(e.target.value as 'all' | 'pending' | 'studied')
              }
              className="w-full px-3.5 py-2.5 min-h-[48px] rounded-xl bg-[#FAF0F2]/70 border border-[#F3E3E7] text-xs sm:text-sm font-bold text-[#7A3E53] focus:outline-none focus:border-[#7A3E53]"
            >
              <option value="all">Todas as Questões</option>
              <option value="pending">Pendentes de Estudo</option>
              <option value="studied">Já Estudadas ✓</option>
            </select>
          </div>

          <div className="lg:col-span-4">
            <label className="block text-[11px] font-bold uppercase text-[#8C4A5F] mb-1">
              Buscar Conceito, Fórmula ou Palavra-Chave
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#8C4A5F] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ex: Torricelli, pH, cone, Faraday, logaritmo..."
                className="w-full pl-9 pr-3.5 py-2.5 min-h-[48px] rounded-xl bg-[#FAF0F2]/70 border border-[#F3E3E7] text-xs sm:text-sm text-[#4A4045] focus:outline-none focus:bg-white focus:border-[#7A3E53]"
              />
            </div>
          </div>
        </div>

        {/* Topic Pills with Individual Topic Study Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#8C4A5F] flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#7A3E53]" />
              <span>Progresso por Tópico Específico (estudadas / total do tópico):</span>
            </span>
            {(selectedDiscipline !== 'Todas' ||
              selectedTopic !== 'Todos' ||
              selectedYear !== 'Todos' ||
              studyStatusFilter !== 'all' ||
              searchQuery !== '') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedDiscipline('Todas');
                  setSelectedTopic('Todos');
                  setSelectedYear('Todos');
                  setStudyStatusFilter('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#7A3E53] underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Resetar filtros</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1">
            <button
              type="button"
              onClick={() => setSelectedTopic('Todos')}
              className={`px-3.5 py-2 min-h-[42px] rounded-xl text-xs font-bold border transition-all ${
                selectedTopic === 'Todos'
                  ? 'bg-[#7A3E53] text-white border-[#7A3E53]'
                  : 'bg-[#FAF0F2]/60 text-[#4A4045] border-[#F3E3E7] hover:bg-[#FAF0F2]'
              }`}
            >
              Todos os Tópicos ({availableTopics.length})
            </button>

            {availableTopics.map((top) => {
              const topicQs = allQuestions.filter((q) => q.topic === top);
              const topicStudied = topicQs.filter((q) => !!studiedMap[q.id]).length;
              const isTopicComplete = topicQs.length > 0 && topicStudied === topicQs.length;
              const isSelected = selectedTopic === top;

              return (
                <button
                  key={top}
                  type="button"
                  onClick={() => setSelectedTopic(isSelected ? 'Todos' : top)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 min-h-[42px] rounded-xl text-xs font-bold border transition-all ${
                    isSelected
                      ? 'bg-[#7A3E53] text-white border-[#7A3E53] shadow-sm'
                      : isTopicComplete
                      ? 'bg-emerald-50/80 text-emerald-900 border-emerald-200 hover:bg-emerald-100/70'
                      : 'bg-white text-[#4A4045] border-[#F3E3E7] hover:bg-[#FAF0F2]'
                  }`}
                >
                  {isTopicComplete && (
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-600'}`}
                    />
                  )}
                  <span>{top}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : isTopicComplete
                        ? 'bg-emerald-200/70 text-emerald-900'
                        : 'bg-[#FAF0F2] text-[#8C4A5F]'
                    }`}
                  >
                    {topicStudied}/{topicQs.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3A. VISÃO POR CAPÍTULOS TEÓRICOS ILUSTRADOS (22 TÓPICOS) */}
      {studyModeTab === 'chapters' && (
        <div className="space-y-6">
          {(selectedTopic === 'Todos' ? availableTopics : [selectedTopic]).map((topicName, idx) => {
            const meta = TOPIC_VISUALS[topicName];
            const disc = findTopicDiscipline(topicName);
            const topicQuestions = allQuestions.filter((q) => q.topic === topicName);
            const studiedInTopic = topicQuestions.filter((q) => !!studiedMap[q.id]).length;
            const topicPct =
              topicQuestions.length > 0
                ? Math.round((studiedInTopic / topicQuestions.length) * 100)
                : 0;
            const allFormulas = topicQuestions.flatMap((q) =>
              q.resolution.appliedFormulas.map((f) => ({
                ...f,
                year: q.year,
                qNum: q.questionNumber,
              }))
            );

            return (
              <section
                key={topicName}
                className="rounded-3xl bg-white border border-[#F3E3E7] shadow-blush-md overflow-hidden"
              >
                <div className="p-5 sm:p-6 bg-[#FAF0F2]/60 border-b border-[#F3E3E7] flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-xl bg-[#7A3E53] text-white text-xs font-extrabold">
                        Capítulo {idx + 1} • {disc}
                      </span>
                      <span className="text-xs font-bold text-[#8C4A5F]">
                        {DISCIPLINE_GREAT_AREA[disc]}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#7A3E53]">
                      {topicName}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#8C4A5F]">
                        Progresso no Tópico: {studiedInTopic}/{topicQuestions.length}
                      </div>
                      <div className="w-32 h-2.5 rounded-full bg-white border border-[#F3E3E7] overflow-hidden mt-1">
                        <div
                          className="h-full bg-[#7A3E53] rounded-full transition-all"
                          style={{ width: `${topicPct}%` }}
                        />
                      </div>
                    </div>

                    <span className="px-3 py-1.5 rounded-xl bg-[#7A3E53] text-white text-xs font-extrabold">
                      {topicPct}%
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTopic(topicName);
                        setStudyModeTab('questions');
                        window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 min-h-[44px] rounded-xl bg-white border border-[#7A3E53] text-[#7A3E53] hover:bg-[#7A3E53] hover:text-white text-xs font-extrabold transition-all"
                    >
                      Ver {topicQuestions.length} Questões Resolvidas →
                    </button>
                  </div>
                </div>

                <div className="p-5 sm:p-7 space-y-6">
                  {/* Diagram + Theory Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-6 rounded-2xl bg-[#FAF0F2]/40 border border-[#F3E3E7] p-3">
                      {meta.renderSvg()}
                      <p className="text-xs text-[#8C4A5F] mt-2 text-center">{meta.caption}</p>
                    </div>

                    <div className="lg:col-span-6 space-y-4">
                      <div className="p-4 rounded-2xl bg-[#FAF0F2]/60 border border-[#F3E3E7] space-y-1.5">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#7A3E53]">
                          📚 Síntese Teórica para o ENEM
                        </h4>
                        <p className="text-xs sm:text-sm text-[#4A4045] leading-relaxed">
                          {meta.theorySummary}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#FAF0F2] border border-[#F3E3E7] text-xs text-[#4A4045] leading-relaxed">
                        <strong className="font-extrabold text-[#7A3E53]">
                          💡 Dica de Ouro para a Raphaaa:{' '}
                        </strong>
                        {meta.keyTakeaway}
                      </div>

                      <div className="p-3.5 rounded-2xl bg-amber-50/75 border border-amber-200 text-xs text-[#4A4045] leading-relaxed">
                        <strong className="font-extrabold text-amber-900">
                          ⚠️ Pegadinha Clássica do Exame:{' '}
                        </strong>
                        {meta.commonTrap}
                      </div>
                    </div>
                  </div>

                  {/* Consolidated Formulas of this Topic */}
                  <div className="space-y-3 pt-2 border-t border-[#F3E3E7]">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#7A3E53] flex items-center gap-1.5">
                      <FunctionSquare className="w-4 h-4 text-[#8C4A5F]" />
                      <span>Quadro de Fórmulas e Relações Essenciais de {topicName}</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {allFormulas.map((f, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-[#FAF0F2]/50 border border-[#F3E3E7] space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs sm:text-sm font-extrabold text-[#7A3E53] bg-white px-2.5 py-1 rounded-lg border border-[#F3E3E7]">
                              {f.formula}
                            </span>
                            <span className="text-[10px] font-bold text-[#8C4A5F]">
                              ENEM {f.year}
                            </span>
                          </div>
                          <p className="text-xs text-[#4A4045] pt-1">{f.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* 3B. LISTA COMPLETA DE ESTUDOS ILUSTRADOS E RESOLUÇÕES DETALHADAS POR QUESTÃO */}
      {studyModeTab === 'questions' && (
        <>
          {filteredStudyQuestions.length === 0 ? (
            <div className="rounded-3xl bg-white border border-[#F3E3E7] p-12 text-center space-y-3">
              <p className="text-base font-extrabold text-[#7A3E53]">
                Nenhuma questão encontrada para os filtros selecionados.
              </p>
              <p className="text-xs text-[#8C4A5F]">
                Experimente exibir "Todas as Questões" ou limpar o campo de busca.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredStudyQuestions.map((question, idx) => {
                const isStudied = !!studiedMap[question.id];
                const isCollapsed = !!collapsedCards[question.id];
                const isNoteOpen = !!openNotesMap[question.id];
                const userNote = studyNotes[question.id] || '';

                return (
                  <article
                    key={question.id}
                    className={`rounded-3xl bg-[#FFFFFF] border transition-all shadow-blush-md overflow-hidden ${
                      isStudied ? 'border-emerald-300/90' : 'border-[#F3E3E7]'
                    }`}
                  >
                    {/* Card Top Header */}
                    <div
                      className={`p-5 sm:p-6 border-b flex flex-wrap items-center justify-between gap-3 ${
                        isStudied
                          ? 'bg-emerald-50/40 border-emerald-200/70'
                          : 'bg-[#FAF0F2]/50 border-[#F3E3E7]'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-xl bg-[#7A3E53] text-white text-xs font-extrabold">
                          Estudo #{idx + 1}
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-white border border-[#F3E3E7] text-[#7A3E53] text-xs font-bold">
                          ENEM {question.year} • Q.{question.questionNumber}
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-white border border-[#F3E3E7] text-[#7A3E53] text-xs font-extrabold">
                          {question.discipline} — {question.topic}
                        </span>
                        <span className="px-2.5 py-1 rounded-xl bg-[#FAF0F2] text-[#8C4A5F] text-xs font-bold">
                          Nível: {question.difficulty}
                        </span>
                      </div>

                      {/* Interactive "Mark as Studied" Button + Collapse Toggle */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onToggleStudied(question.id)}
                          className={`group inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-2xl text-xs sm:text-sm font-extrabold border transition-all ${
                            isStudied
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                              : 'bg-white text-[#7A3E53] border-[#7A3E53] hover:bg-[#7A3E53] hover:text-white'
                          }`}
                        >
                          {isStudied ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 shrink-0" />
                              <span>Estudada ✓</span>
                            </>
                          ) : (
                            <>
                              <SoftPawIcon className="w-4 h-4 shrink-0 group-hover:rotate-12 transition-transform" />
                              <span>Marcar como Estudada</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setCollapsedCards((prev) => ({
                              ...prev,
                              [question.id]: !prev[question.id],
                            }))
                          }
                          className="p-3 min-h-[48px] rounded-2xl bg-white border border-[#F3E3E7] text-[#7A3E53] hover:bg-[#FAF0F2] transition-colors"
                          title={isCollapsed ? 'Expandir estudo completo' : 'Recolher estudo'}
                        >
                          {isCollapsed ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronUp className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Card Body */}
                    {!isCollapsed && (
                      <div className="p-5 sm:p-7 space-y-6">
                        {/* 1. Enunciado e Alternativas com Gabarito Destacado */}
                        <div className="space-y-4">
                          <p className="text-sm sm:text-base text-[#4A4045] leading-relaxed whitespace-pre-line">
                            {question.contextText}
                          </p>

                          {question.supportData && (
                            <div className="p-4 rounded-2xl bg-[#FAF0F2]/75 border border-[#F3E3E7] text-xs sm:text-sm text-[#4A4045] whitespace-pre-line">
                              {question.supportData}
                            </div>
                          )}

                          <p className="text-sm sm:text-base font-bold text-[#7A3E53]">
                            {question.commandText}
                          </p>

                          <div className="grid grid-cols-1 gap-2.5 pt-1">
                            {question.alternatives.map((alt) => {
                              const isCorrect = alt.letter === question.correctAnswer;
                              return (
                                <div
                                  key={alt.letter}
                                  className={`flex items-center gap-3.5 p-3.5 rounded-2xl border text-sm ${
                                    isCorrect
                                      ? 'bg-emerald-50/75 border-emerald-300 text-emerald-950 font-bold shadow-sm'
                                      : 'bg-white border-[#F3E3E7] text-[#4A4045]'
                                  }`}
                                >
                                  <span
                                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                                      isCorrect
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-[#FAF0F2] text-[#7A3E53]'
                                    }`}
                                  >
                                    {alt.letter}
                                  </span>
                                  <span className="flex-1">{alt.text}</span>
                                  {isCorrect && (
                                    <span className="px-3 py-1 rounded-full bg-white border border-emerald-300 text-emerald-700 text-xs font-extrabold shrink-0">
                                      ✓ Gabarito Oficial ({alt.letter})
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* 2. ILUSTRAÇÃO DIDÁTICA E ESQUEMA VISUAL DO TÓPICO + MAPA MENTAL */}
                        <TopicIllustrationCard question={question} />

                        {/* 3. RESOLUÇÃO COMPLETA EM 3 BLOCOS (Cálculo, Fórmulas e Raciocínio Lógico) */}
                        <div className="rounded-2xl bg-[#FAF0F2]/55 border border-[#F3E3E7] p-5 sm:p-6 space-y-6">
                          {/* Bloco 3.1: Demonstração Numérica / Cálculo */}
                          <div className="space-y-3">
                            <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#7A3E53] uppercase tracking-wider">
                              <Calculator className="w-4 h-4 text-[#8C4A5F]" />
                              <span>1. Demonstração Numérica / Cálculo Passo a Passo</span>
                            </h4>
                            <div className="space-y-2">
                              {question.resolution.numericalDemonstration.map((step, i) => (
                                <div
                                  key={i}
                                  className="p-3.5 rounded-xl bg-white border border-[#F3E3E7] text-xs sm:text-sm text-[#4A4045] leading-relaxed font-medium"
                                >
                                  {step}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bloco 3.2: Fórmulas Aplicadas */}
                          <div className="space-y-3">
                            <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#7A3E53] uppercase tracking-wider">
                              <FunctionSquare className="w-4 h-4 text-[#8C4A5F]" />
                              <span>2. Fórmulas Aplicadas &amp; Significado Físico/Matemático</span>
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {question.resolution.appliedFormulas.map((item, i) => (
                                <div
                                  key={i}
                                  className="p-4 rounded-2xl bg-white border-l-4 border-l-[#7A3E53] border border-[#F3E3E7] shadow-sm space-y-1.5"
                                >
                                  <div className="font-mono text-sm sm:text-base font-bold text-[#7A3E53] bg-[#FAF0F2] px-3 py-1.5 rounded-xl inline-block">
                                    {item.formula}
                                  </div>
                                  <p className="text-xs text-[#8C4A5F] leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Bloco 3.3: Raciocínio Lógico */}
                          <div className="space-y-2.5">
                            <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#7A3E53] uppercase tracking-wider">
                              <Lightbulb className="w-4 h-4 text-[#8C4A5F]" />
                              <span>3. Raciocínio Lógico &amp; Análise de Distratores</span>
                            </h4>
                            <div className="p-4 rounded-2xl bg-white border border-[#F3E3E7] text-xs sm:text-sm text-[#4A4045] leading-relaxed">
                              {question.resolution.logicalReasoning}
                            </div>
                          </div>
                        </div>

                        {/* 4. BLOCO DE ANOTAÇÕES DE ESTUDO DA RAPHAAA + BOTÃO DE CONCLUIR */}
                        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#F3E3E7]">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenNotesMap((prev) => ({
                                ...prev,
                                [question.id]: !prev[question.id],
                              }))
                            }
                            className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-xl bg-[#FAF0F2] text-[#7A3E53] text-xs font-bold hover:bg-[#F3E3E7] transition-all self-start"
                          >
                            <NotebookPen className="w-4 h-4 text-[#8C4A5F]" />
                            <span>
                              {userNote
                                ? 'Ver/Editar Resumo Pessoal da Raphaaa'
                                : 'Adicionar Anotação Pessoal nesta Questão'}
                            </span>
                          </button>

                          <button
                            type="button"
                            onClick={() => onToggleStudied(question.id)}
                            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[48px] rounded-xl text-xs font-extrabold transition-all ${
                              isStudied
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                                : 'bg-[#7A3E53] text-white hover:bg-[#8C4A5F]'
                            }`}
                          >
                            {isStudied ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                <span>
                                  Questão Registrada no Progresso de {question.discipline}
                                </span>
                              </>
                            ) : (
                              <>
                                <Circle className="w-4 h-4" />
                                <span>
                                  Concluir Estudo desta Questão (+1 em {question.discipline})
                                </span>
                              </>
                            )}
                          </button>
                        </div>

                        {(isNoteOpen || userNote.length > 0) && (
                          <div className="p-4 rounded-2xl bg-[#FAF0F2]/60 border border-[#F3E3E7] space-y-2">
                            <label className="block text-xs font-extrabold text-[#7A3E53]">
                              📝 Anotações e Lembretes da Raphaaa para esta questão:
                            </label>
                            <textarea
                              rows={2}
                              value={userNote}
                              onChange={(e) => onUpdateStudyNote(question.id, e.target.value)}
                              placeholder="Escreva aqui seu lembrete de fórmula, pegadinha ou dúvida para revisar depois..."
                              className="w-full p-3 rounded-xl bg-white border border-[#F3E3E7] text-xs sm:text-sm text-[#4A4045] focus:outline-none focus:border-[#7A3E53]"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};
