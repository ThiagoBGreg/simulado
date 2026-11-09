import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Award,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  FunctionSquare,
  Lightbulb,
  RefreshCw,
  RotateCcw,
  Sparkles,
  XCircle,
  AlertTriangle,
} from 'lucide-react';
import { AlternativeLetter, Discipline, Question } from '../types/enem';
import { CelebrationCatIllustration, CornerCatPeek, SoftPawIcon } from './CatDoodles';
import { TopicIllustrationCard } from './TopicIllustrations';

interface ExamReportViewProps {
  questions: Question[];
  answers: Record<string, AlternativeLetter>;
  elapsedSeconds: number;
  studiedMap: Record<string, boolean>;
  onToggleStudied: (questionId: string) => void;
  onOpenStudyGuide: () => void;
  onStartNewExam: () => void;
  onRetryWrongQuestions: (wrongQuestions: Question[]) => void;
}

export const ExamReportView: React.FC<ExamReportViewProps> = ({
  questions,
  answers,
  elapsedSeconds,
  studiedMap,
  onToggleStudied,
  onOpenStudyGuide,
  onStartNewExam,
  onRetryWrongQuestions,
}) => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'correct' | 'wrong'>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    questions.forEach((q) => {
      // Open all resolutions by default so Raphaaa can immediately inspect or collapse them
      initial[q.id] = true;
    });
    return initial;
  });

  useEffect(() => {
    try {
      confetti({
        particleCount: 55,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7A3E53', '#8C4A5F', '#F3E3E7', '#D48C9E'],
      });
    } catch {
      // Ignore if canvas-confetti is blocked in headless environments
    }
  }, []);

  const totalQuestions = questions.length;
  const correctQuestions = questions.filter((q) => answers[q.id] === q.correctAnswer);
  const wrongOrBlankQuestions = questions.filter((q) => answers[q.id] !== q.correctAnswer);
  const correctCount = correctQuestions.length;
  const accuracyPercent =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const avgSecondsPerQuestion =
    totalQuestions > 0 ? Math.round(elapsedSeconds / totalQuestions) : 0;

  const formatDuration = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remSec = sec % 60;
    return `${mins}m ${String(remSec).padStart(2, '0')}s`;
  };

  // Breakdown by Discipline
  const disciplines: Discipline[] = ['Matemática', 'Física', 'Química'];
  const disciplineStats = disciplines
    .map((disc) => {
      const qs = questions.filter((q) => q.discipline === disc);
      const hits = qs.filter((q) => answers[q.id] === q.correctAnswer).length;
      return {
        discipline: disc,
        total: qs.length,
        hits,
        percent: qs.length > 0 ? Math.round((hits / qs.length) * 100) : 0,
      };
    })
    .filter((st) => st.total > 0);

  const visibleQuestions = questions.filter((q) => {
    const isHit = answers[q.id] === q.correctAnswer;
    if (statusFilter === 'correct') return isHit;
    if (statusFilter === 'wrong') return !isHit;
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const setAllExpanded = (open: boolean) => {
    const next: Record<string, boolean> = {};
    questions.forEach((q) => {
      next[q.id] = open;
    });
    setExpandedIds(next);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 1. CELEBRATION HEADER CARD — "Parabéns, Raphaaa!" (Section 4.2) */}
      <section className="relative overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-md p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Commemorative Cat Illustration */}
            <div className="text-[#7A3E53] bg-[#FAF0F2] p-4 rounded-3xl border border-[#F3E3E7] shadow-sm shrink-0">
              <CelebrationCatIllustration className="w-32 h-28 sm:w-36 sm:h-32" />
            </div>

            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0F2] border border-[#F3E3E7] text-xs font-bold text-[#7A3E53]">
                <Sparkles className="w-3.5 h-3.5 text-[#8C4A5F]" />
                <span>Simulado Concluído • Gabarito e Resoluções Liberados</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7A3E53] tracking-tight">
                Parabéns, Raphaaa!
              </h2>

              <p className="text-sm sm:text-base text-[#4A4045] leading-relaxed">
                Você concluiu seu simulado de Exatas! Confira abaixo seu diagnóstico por disciplina e
                explore a{' '}
                <strong className="font-bold text-[#7A3E53]">
                  demonstração numérica, as fórmulas aplicadas e o raciocínio lógico
                </strong>{' '}
                de cada questão.
              </p>

              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-3">
                {wrongOrBlankQuestions.length > 0 && (
                  <button
                    type="button"
                    onClick={() => onRetryWrongQuestions(wrongOrBlankQuestions)}
                    className="group inline-flex items-center gap-2 px-5 py-3 min-h-[48px] rounded-2xl bg-[#7A3E53] hover:bg-[#8C4A5F] text-white text-xs sm:text-sm font-extrabold shadow-sm transition-all"
                  >
                    <SoftPawIcon className="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                    <span>
                      Repraticar Questões para Revisão ({wrongOrBlankQuestions.length})
                    </span>
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={onStartNewExam}
                  className="group inline-flex items-center gap-2 px-5 py-3 min-h-[48px] rounded-2xl bg-[#FAF0F2] hover:bg-[#F3E3E7] text-[#7A3E53] border border-[#F3E3E7] text-xs sm:text-sm font-bold transition-all"
                >
                  <RotateCcw className="w-4 h-4 text-[#8C4A5F]" />
                  <span>Voltar ao Painel e Novo Simulado</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scoreboard Metrics */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 shrink-0 min-w-[240px]">
            <div className="p-4 rounded-2xl bg-[#FAF0F2] border border-[#F3E3E7] flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#8C4A5F] uppercase">Aproveitamento</div>
                <div className="text-2xl font-extrabold text-[#7A3E53] mt-0.5">
                  {correctCount} / {totalQuestions}
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-[#7A3E53] text-white font-extrabold text-sm">
                {accuracyPercent}%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF0F2]/70 border border-[#F3E3E7] flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#8C4A5F] uppercase">Tempo Total</div>
                <div className="text-lg font-extrabold text-[#7A3E53] mt-0.5">
                  {formatDuration(elapsedSeconds)}
                </div>
              </div>
              <Clock className="w-5 h-5 text-[#8C4A5F]" />
            </div>

            <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-[#FAF0F2]/70 border border-[#F3E3E7] flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#8C4A5F] uppercase">Ritmo Médio</div>
                <div className="text-lg font-extrabold text-[#7A3E53] mt-0.5">
                  {formatDuration(avgSecondsPerQuestion)} / questão
                </div>
              </div>
              <Award className="w-5 h-5 text-[#8C4A5F]" />
            </div>
          </div>
        </div>

        {/* Performance Breakdown by Discipline */}
        <div className="mt-6 pt-6 border-t border-[#F3E3E7] grid grid-cols-1 sm:grid-cols-3 gap-4">
          {disciplineStats.map((st) => (
            <div
              key={st.discipline}
              className="p-4 rounded-2xl bg-[#FAF0F2]/40 border border-[#F3E3E7] space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-[#7A3E53] text-sm font-extrabold">{st.discipline}</span>
                <span className="text-[#8C4A5F]">
                  {st.hits} de {st.total} acertos ({st.percent}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#F3E3E7] overflow-hidden">
                <div
                  className="h-full bg-[#7A3E53] rounded-full transition-all duration-500"
                  style={{ width: `${st.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FILTER & EXPAND CONTROLS FOR DETAILED FEEDBACK */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white p-4 sm:p-5 rounded-3xl border border-[#F3E3E7] shadow-blush-sm">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all' as const, label: `Todas (${totalQuestions})` },
            { id: 'correct' as const, label: `Acertos (${correctCount})` },
            {
              id: 'wrong' as const,
              label: `Para Revisar (${wrongOrBlankQuestions.length})`,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStatusFilter(tab.id)}
              className={`px-4 py-2.5 min-h-[48px] rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
                statusFilter === tab.id
                  ? 'bg-[#7A3E53] text-white border-[#7A3E53]'
                  : 'bg-[#FAF0F2]/60 text-[#4A4045] border-[#F3E3E7] hover:bg-[#FAF0F2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setAllExpanded(true)}
            className="px-3.5 py-2.5 min-h-[48px] rounded-xl bg-[#FAF0F2] text-[#7A3E53] text-xs font-bold hover:bg-[#F3E3E7] transition-all"
          >
            Expandir Resoluções
          </button>
          <button
            type="button"
            onClick={() => setAllExpanded(false)}
            className="px-3.5 py-2.5 min-h-[48px] rounded-xl bg-[#FAF0F2] text-[#8C4A5F] text-xs font-bold hover:bg-[#F3E3E7] transition-all"
          >
            Recolher Todas
          </button>
        </div>
      </div>

      {/* 3. QUESTION BY QUESTION CORRECTION & 3-PART RESOLUTION (Section 3.2) */}
      <div className="space-y-6">
        {visibleQuestions.map((question) => {
          const originalIdx = questions.findIndex((q) => q.id === question.id);
          const userAnswer = answers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;
          const isBlank = !userAnswer;
          const isExpanded = !!expandedIds[question.id];

          return (
            <article
              key={question.id}
              className="relative rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-md overflow-hidden"
            >
              {/* Question Top Status Bar */}
              <div className="p-5 sm:p-7 border-b border-[#F3E3E7] flex flex-wrap items-center justify-between gap-3 bg-[#FAF0F2]/40">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-[#7A3E53] text-white text-xs font-extrabold">
                    Questão {originalIdx + 1}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-white border border-[#F3E3E7] text-[#7A3E53] text-xs font-bold">
                    ENEM {question.year} • Q.{question.questionNumber}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-white border border-[#F3E3E7] text-[#8C4A5F] text-xs font-bold">
                    {question.discipline} • {question.topic}
                  </span>
                </div>

                {/* Result Badge */}
                <div>
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Resposta Correta ({question.correctAnswer})</span>
                    </span>
                  ) : isBlank ? (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-extrabold">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Não Respondida • Gabarito: {question.correctAnswer}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-extrabold">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>
                        Sua resposta: {userAnswer} • Gabarito Oficial: {question.correctAnswer}
                      </span>
                    </span>
                  )}
                </div>
              </div>

              {/* Question Body & Alternatives with Answer Key */}
              <div className="p-5 sm:p-7 space-y-5">
                <p className="text-sm sm:text-base text-[#4A4045] leading-relaxed whitespace-pre-line">
                  {question.contextText}
                </p>

                {question.supportData && (
                  <div className="p-4 rounded-2xl bg-[#FAF0F2]/70 border border-[#F3E3E7] text-xs sm:text-sm text-[#4A4045] whitespace-pre-line">
                    {question.supportData}
                  </div>
                )}

                <p className="text-sm sm:text-base font-bold text-[#7A3E53]">
                  {question.commandText}
                </p>

                <div className="space-y-2.5 pt-1">
                  {question.alternatives.map((alt) => {
                    const isOfficialCorrect = alt.letter === question.correctAnswer;
                    const isUserPick = alt.letter === userAnswer;

                    return (
                      <div
                        key={alt.letter}
                        className={`flex items-center gap-3.5 p-3.5 rounded-2xl border text-sm transition-all ${
                          isOfficialCorrect
                            ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 font-bold'
                            : isUserPick && !isOfficialCorrect
                            ? 'bg-rose-50/70 border-rose-300 text-rose-950 font-semibold'
                            : 'bg-white border-[#F3E3E7] text-[#4A4045]'
                        }`}
                      >
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                            isOfficialCorrect
                              ? 'bg-emerald-600 text-white'
                              : isUserPick
                              ? 'bg-rose-600 text-white'
                              : 'bg-[#FAF0F2] text-[#7A3E53]'
                          }`}
                        >
                          {alt.letter}
                        </span>

                        <span className="flex-1">{alt.text}</span>

                        {isOfficialCorrect && (
                          <span className="text-xs font-extrabold text-emerald-700 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                            ✓ Gabarito
                          </span>
                        )}
                        {isUserPick && !isOfficialCorrect && (
                          <span className="text-xs font-bold text-rose-700 bg-white px-2.5 py-1 rounded-full border border-rose-200 shrink-0">
                            Sua escolha
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* EXPANDABLE DETAILED RESOLUTION BUTTON (Touch-First >= 48px) */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => toggleExpand(question.id)}
                    aria-expanded={isExpanded}
                    className="group w-full flex items-center justify-between px-5 py-3.5 min-h-[50px] rounded-2xl bg-[#FAF0F2] hover:bg-[#F3E3E7]/80 border border-[#F3E3E7] text-[#7A3E53] font-extrabold text-xs sm:text-sm transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <SoftPawIcon className="w-4 h-4 text-[#7A3E53] group-hover:rotate-12 transition-transform" />
                      <span>
                        Resolução Comentada Passo a Passo (Cálculo + Fórmulas + Raciocínio Lógico)
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#8C4A5F]">
                      <span>{isExpanded ? 'Ocultar' : 'Expandir'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* EXPANDED RESOLUTION PANEL (Section 3.2: Ilustração + 1. Demonstração Numérica, 2. Fórmulas, 3. Raciocínio Lógico) */}
                  {isExpanded && (
                    <div className="mt-4 rounded-2xl bg-[#FAF0F2]/50 border border-[#F3E3E7] p-5 sm:p-6 space-y-6">
                      {/* Ilustração Didática do Tópico */}
                      <TopicIllustrationCard question={question} />

                      {/* 1. Demonstração Numérica / Cálculo */}
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

                      {/* 2. Fórmulas Aplicadas */}
                      <div className="space-y-3">
                        <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#7A3E53] uppercase tracking-wider">
                          <FunctionSquare className="w-4 h-4 text-[#8C4A5F]" />
                          <span>2. Fórmulas e Equações Primárias Aplicadas</span>
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

                      {/* 3. Raciocínio Lógico */}
                      <div className="space-y-2.5">
                        <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#7A3E53] uppercase tracking-wider">
                          <Lightbulb className="w-4 h-4 text-[#8C4A5F]" />
                          <span>3. Raciocínio Lógico &amp; Fundamentação Científica</span>
                        </h4>
                        <div className="p-4 rounded-2xl bg-white border border-[#F3E3E7] text-xs sm:text-sm text-[#4A4045] leading-relaxed">
                          {question.resolution.logicalReasoning}
                        </div>
                      </div>

                      {/* Marcar como estudada diretamente do relatório */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#F3E3E7]">
                        <button
                          type="button"
                          onClick={onOpenStudyGuide}
                          className="text-xs font-bold text-[#7A3E53] underline hover:text-[#8C4A5F]"
                        >
                          Abrir Central de Estudos Ilustrada Completa →
                        </button>
                        <button
                          type="button"
                          onClick={() => onToggleStudied(question.id)}
                          className={`inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-extrabold transition-all ${
                            studiedMap[question.id]
                              ? 'bg-emerald-600 text-white'
                              : 'bg-white border border-[#7A3E53] text-[#7A3E53] hover:bg-[#7A3E53] hover:text-white'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>
                            {studiedMap[question.id]
                              ? `Questão Estudada em ${question.discipline} ✓`
                              : `Marcar como Estudada em ${question.discipline}`}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

