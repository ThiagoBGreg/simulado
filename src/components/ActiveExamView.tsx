import React, { useState } from 'react';
import {
  AlertCircle,
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  EyeOff,
  Flag,
  LayoutList,
  Lock,
  Pause,
  Play,
  Scissors,
  Send,
  SquareStack,
} from 'lucide-react';
import { AlternativeLetter, Question, TimerMode } from '../types/enem';
import { CornerCatPeek, SoftPawIcon } from './CatDoodles';

interface ActiveExamViewProps {
  questions: Question[];
  answers: Record<string, AlternativeLetter>;
  eliminated: Record<string, AlternativeLetter[]>;
  flagged: Record<string, boolean>;
  timerMode: TimerMode;
  elapsedSeconds: number;
  countdownTargetSeconds: number;
  isPaused: boolean;
  onTogglePause: () => void;
  onSelectAnswer: (questionId: string, letter: AlternativeLetter) => void;
  onToggleEliminate: (questionId: string, letter: AlternativeLetter) => void;
  onToggleFlag: (questionId: string) => void;
  onSubmitExam: () => void;
  onCancelExam: () => void;
}

export const ActiveExamView: React.FC<ActiveExamViewProps> = ({
  questions,
  answers,
  eliminated,
  flagged,
  timerMode,
  elapsedSeconds,
  countdownTargetSeconds,
  isPaused,
  onTogglePause,
  onSelectAnswer,
  onToggleEliminate,
  onToggleFlag,
  onSubmitExam,
  onCancelExam,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [hideTimerDigits, setHideTimerDigits] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = totalQuestions - answeredCount;
  const progressPercent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  const formatTime = (totalSec: number) => {
    const safeSec = Math.max(0, totalSec);
    const hrs = Math.floor(safeSec / 3600);
    const mins = Math.floor((safeSec % 3600) / 60);
    const secs = safeSec % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const remainingSeconds = Math.max(0, countdownTargetSeconds - elapsedSeconds);
  const isLowTime = timerMode === 'countdown' && remainingSeconds <= 180 && remainingSeconds > 0;

  const handleRequestSubmit = () => {
    if (unansweredCount > 0) {
      setShowConfirmModal(true);
    } else {
      onSubmitExam();
    }
  };

  const renderQuestionCard = (question: Question, index: number) => {
    const selectedLetter = answers[question.id];
    const eliminatedList = eliminated[question.id] || [];
    const isFlagged = !!flagged[question.id];

    return (
      <article
        key={question.id}
        id={`exam-question-${index}`}
        className="relative rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-md p-5 sm:p-8 transition-all"
      >
        {/* Question Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F3E3E7]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl bg-[#7A3E53] text-white text-xs font-extrabold">
              Questão {index + 1} de {totalQuestions}
            </span>
            <span className="px-3 py-1 rounded-xl bg-[#FAF0F2] text-[#7A3E53] border border-[#F3E3E7] text-xs font-bold">
              ENEM {question.year} • Q.{question.questionNumber}
            </span>
            <span className="px-3 py-1 rounded-xl bg-[#FAF0F2] text-[#8C4A5F] border border-[#F3E3E7] text-xs font-bold">
              {question.discipline} ({question.topic})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleFlag(question.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[48px] rounded-xl text-xs font-bold border transition-all ${
                isFlagged
                  ? 'bg-[#7A3E53]/15 text-[#7A3E53] border-[#7A3E53]'
                  : 'bg-[#FAF0F2]/60 text-[#8C4A5F] border-[#F3E3E7] hover:bg-[#FAF0F2]'
              }`}
              title="Marcar questão para revisar antes de entregar"
            >
              <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
              <span>{isFlagged ? 'Marcada p/ Revisão' : 'Revisar Depois'}</span>
            </button>
          </div>
        </div>

        {/* Context Text & Support Data */}
        <div className="py-5 space-y-4">
          <div className="text-sm sm:text-base text-[#4A4045] leading-relaxed whitespace-pre-line font-normal">
            {question.contextText}
          </div>

          {question.supportData && (
            <div className="p-4 rounded-2xl bg-[#FAF0F2]/75 border border-[#F3E3E7] text-xs sm:text-sm text-[#4A4045] font-medium leading-relaxed whitespace-pre-line">
              {question.supportData}
            </div>
          )}

          <p className="text-sm sm:text-base font-bold text-[#7A3E53] pt-1 leading-snug">
            {question.commandText}
          </p>
        </div>

        {/* Alternatives List (Touch-First >= 48px) */}
        <div className="space-y-3 pt-2" role="radiogroup" aria-label={`Alternativas da questão ${index + 1}`}>
          {question.alternatives.map((alt) => {
            const isSelected = selectedLetter === alt.letter;
            const isEliminated = eliminatedList.includes(alt.letter);

            return (
              <div key={alt.letter} className="flex items-stretch gap-2">
                <button
                  type="button"
                  onClick={() => onSelectAnswer(question.id, alt.letter)}
                  aria-checked={isSelected}
                  role="radio"
                  className={`group flex-1 flex items-center gap-3.5 p-3.5 sm:p-4 min-h-[54px] rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#FAF0F2] border-[#7A3E53] ring-2 ring-[#7A3E53]/25 shadow-sm'
                      : isEliminated
                      ? 'bg-[#FAF0F2]/30 border-[#F3E3E7] opacity-50'
                      : 'bg-white border-[#F3E3E7] hover:bg-[#FAF0F2]/60 hover:border-[#8C4A5F]/50'
                  }`}
                >
                  {/* Letter Circle */}
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs sm:text-sm font-extrabold shrink-0 transition-all ${
                      isSelected
                        ? 'bg-[#7A3E53] text-white shadow-sm scale-105'
                        : 'bg-[#FAF0F2] text-[#7A3E53] border border-[#F3E3E7] group-hover:bg-[#7A3E53]/15'
                    }`}
                  >
                    {alt.letter}
                  </span>

                  {/* Alternative Text */}
                  <span
                    className={`flex-1 text-sm sm:text-base leading-relaxed ${
                      isEliminated ? 'line-through text-[#8C4A5F]' : 'text-[#4A4045]'
                    } ${isSelected ? 'font-bold text-[#7A3E53]' : 'font-medium'}`}
                  >
                    {alt.text}
                  </span>

                  {/* Selected Paw Badge */}
                  {isSelected && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#7A3E53] text-white text-xs font-bold shrink-0 animate-paw-pop">
                      <SoftPawIcon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Selecionada</span>
                    </span>
                  )}
                </button>

                {/* Eliminate Distractor Button (Touch-First >= 48px) */}
                <button
                  type="button"
                  onClick={() => onToggleEliminate(question.id, alt.letter)}
                  className={`px-3 min-h-[54px] rounded-2xl border flex items-center justify-center transition-all shrink-0 ${
                    isEliminated
                      ? 'bg-[#7A3E53]/10 border-[#7A3E53] text-[#7A3E53]'
                      : 'bg-white border-[#F3E3E7] text-[#8C4A5F] hover:bg-[#FAF0F2] hover:text-[#7A3E53]'
                  }`}
                  title={
                    isEliminated
                      ? 'Restaurar alternativa descartada'
                      : 'Riscar/descartar alternativa (rascunho de prova)'
                  }
                >
                  <Scissors className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Locked Answer Notice Footer */}
        <div className="mt-6 pt-4 border-t border-[#F3E3E7] flex items-center justify-between text-xs text-[#8C4A5F]">
          <span className="inline-flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#7A3E53]" />
            <span>Modo Simulado Ativo: gabarito e resolução passo a passo bloqueados até a entrega.</span>
          </span>
          <span className="hidden sm:inline font-semibold">
            Dica: use a tesoura para riscar alternativas improváveis
          </span>
        </div>
      </article>
    );
  };

  return (
    <div className="space-y-6 pb-16">
      {/* TOP STICKY EXAM CONTROL BAR (Timer + Progress + Submit) */}
      <div className="sticky top-[73px] z-20 rounded-3xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#F3E3E7] shadow-blush-md p-4 sm:p-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Timer Control */}
          <div className="flex flex-wrap items-center gap-3">
            {timerMode !== 'none' ? (
              <div
                className={`flex items-center gap-2.5 px-4 py-2.5 min-h-[48px] rounded-2xl border ${
                  isLowTime
                    ? 'bg-red-50 border-red-200 text-red-800'
                    : 'bg-[#FAF0F2] border-[#F3E3E7] text-[#7A3E53]'
                }`}
              >
                <Clock className="w-4 h-4 shrink-0" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#8C4A5F]">
                    {timerMode === 'countdown' ? 'Tempo Restante' : 'Tempo Decorrido'}
                  </div>
                  <div className="font-mono text-base sm:text-lg font-extrabold leading-none">
                    {hideTimerDigits
                      ? '••:••'
                      : timerMode === 'countdown'
                      ? formatTime(remainingSeconds)
                      : formatTime(elapsedSeconds)}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onTogglePause}
                  className="ml-1 p-2 rounded-xl bg-white border border-[#F3E3E7] text-[#7A3E53] hover:bg-[#7A3E53] hover:text-white transition-colors"
                  title={isPaused ? 'Retomar cronômetro' : 'Pausar cronômetro'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={() => setHideTimerDigits((prev) => !prev)}
                  className="p-2 rounded-xl bg-white border border-[#F3E3E7] text-[#8C4A5F] hover:text-[#7A3E53] transition-colors"
                  title={hideTimerDigits ? 'Mostrar dígitos do relógio' : 'Ocultar dígitos para reduzir ansiedade'}
                >
                  {hideTimerDigits ? (
                    <Eye className="w-3.5 h-3.5" />
                  ) : (
                    <EyeOff className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-2xl bg-[#FAF0F2] border border-[#F3E3E7] text-xs font-bold text-[#7A3E53]">
                <Clock className="w-4 h-4 text-[#8C4A5F]" />
                <span>Modo Livre (Sem limite de tempo)</span>
              </div>
            )}

            {/* Progress Indicator */}
            <div className="flex-1 min-w-[180px] sm:min-w-[220px] bg-[#FAF0F2]/60 border border-[#F3E3E7] rounded-2xl px-4 py-2.5">
              <div className="flex items-center justify-between text-xs font-bold text-[#7A3E53] mb-1.5">
                <span>Progresso do Cartão-Resposta</span>
                <span>
                  {answeredCount} / {totalQuestions} ({progressPercent}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#F3E3E7] overflow-hidden">
                <div
                  className="h-full bg-[#7A3E53] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* View Mode & Submit Button */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2.5">
            <div className="inline-flex rounded-2xl bg-[#FAF0F2] p-1 border border-[#F3E3E7]">
              <button
                type="button"
                onClick={() => setViewMode('single')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 min-h-[42px] rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'single'
                    ? 'bg-white text-[#7A3E53] shadow-sm'
                    : 'text-[#8C4A5F] hover:text-[#7A3E53]'
                }`}
              >
                <SquareStack className="w-3.5 h-3.5" />
                <span>1 por vez</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`inline-flex items-center gap-1.5 px-3 py-2 min-h-[42px] rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-[#7A3E53] shadow-sm'
                    : 'text-[#8C4A5F] hover:text-[#7A3E53]'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span>Caderno Inteiro</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleRequestSubmit}
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[48px] rounded-2xl bg-[#7A3E53] hover:bg-[#8C4A5F] text-white text-xs sm:text-sm font-extrabold shadow-sm active:scale-[0.98] transition-all"
            >
              <SoftPawIcon className="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
              <span>Submeter Prova</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Question Number Pills (Quick Jump) */}
        <div className="mt-4 pt-3 border-t border-[#F3E3E7] flex items-center gap-1.5 overflow-x-auto pb-1">
          {questions.map((q, idx) => {
            const isAnswered = !!answers[q.id];
            const isCurrent = viewMode === 'single' && currentIndex === idx;
            const isFlagged = !!flagged[q.id];

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  if (viewMode === 'list') {
                    const el = document.getElementById(`exam-question-${idx}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`relative min-w-[42px] h-[42px] px-2.5 rounded-xl text-xs font-extrabold border flex items-center justify-center transition-all shrink-0 ${
                  isCurrent
                    ? 'bg-[#7A3E53] text-white border-[#7A3E53] ring-2 ring-[#7A3E53]/30'
                    : isAnswered
                    ? 'bg-[#FAF0F2] text-[#7A3E53] border-[#7A3E53]/50'
                    : 'bg-white text-[#8C4A5F] border-[#F3E3E7] hover:bg-[#FAF0F2]'
                }`}
                title={`Ir para Questão ${idx + 1}${isAnswered ? ` (Marcada: ${answers[q.id]})` : ''}`}
              >
                <span>{idx + 1}</span>
                {isAnswered && (
                  <span className="ml-1 text-[10px] opacity-85">({answers[q.id]})</span>
                )}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#8C4A5F] ring-2 ring-white" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* PAUSED OVERLAY */}
      {isPaused && (
        <div className="rounded-3xl bg-[#FFFFFF] border border-[#F3E3E7] shadow-blush-md p-10 text-center space-y-4">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-[#FAF0F2] border border-[#F3E3E7] flex items-center justify-center text-[#7A3E53]">
            <Pause className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-[#7A3E53]">
            Simulado Pausado Temporariamente
          </h3>
          <p className="text-sm text-[#8C4A5F] max-w-md mx-auto">
            O enunciado das questões está oculto enquanto o cronômetro está pausado para manter a
            fidelidade da simulação da Raphaela.
          </p>
          <button
            type="button"
            onClick={onTogglePause}
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-2xl bg-[#7A3E53] text-white text-sm font-extrabold hover:bg-[#8C4A5F] transition-all"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Retomar Simulado Agora</span>
          </button>
        </div>
      )}

      {/* ACTIVE QUESTIONS DISPLAY */}
      {!isPaused && (
        <>
          {viewMode === 'single' ? (
            <div className="space-y-5">
              {renderQuestionCard(questions[currentIndex], currentIndex)}

              {/* Bottom Navigation Bar (Previous / Next / Submit) */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-3xl border border-[#F3E3E7] shadow-blush-sm">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  className="inline-flex items-center gap-2 px-5 py-3 min-h-[48px] rounded-2xl bg-[#FAF0F2] text-[#7A3E53] font-bold text-sm disabled:opacity-40 disabled:pointer-events-none hover:bg-[#F3E3E7] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Questão Anterior</span>
                </button>

                <button
                  type="button"
                  onClick={onCancelExam}
                  className="text-xs font-bold text-[#8C4A5F] hover:text-[#7A3E53] underline px-3 py-2 min-h-[48px]"
                >
                  Sair e voltar aos filtros
                </button>

                {currentIndex < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))
                    }
                    className="group inline-flex items-center gap-2 px-5 py-3 min-h-[48px] rounded-2xl bg-[#7A3E53] text-white font-bold text-sm hover:bg-[#8C4A5F] transition-all"
                  >
                    <span>Próxima Questão</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleRequestSubmit}
                    className="group inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-2xl bg-[#7A3E53] text-white font-extrabold text-sm hover:bg-[#8C4A5F] shadow-blush-md transition-all"
                  >
                    <SoftPawIcon className="w-4 h-4" />
                    <span>Finalizar e Ver Gabarito</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {questions.map((q, idx) => renderQuestionCard(q, idx))}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#F3E3E7] shadow-blush-md">
                <div>
                  <h4 className="text-base font-extrabold text-[#7A3E53]">
                    Fim do Caderno de Questões
                  </h4>
                  <p className="text-xs text-[#8C4A5F]">
                    Você respondeu {answeredCount} de {totalQuestions} questões.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleRequestSubmit}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[52px] rounded-2xl bg-[#7A3E53] hover:bg-[#8C4A5F] text-white font-extrabold text-sm shadow-blush-md transition-all"
                >
                  <SoftPawIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Submeter Prova e Liberar Resolução Completa</span>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* CONFIRMATION MODAL FOR UNANSWERED QUESTIONS */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4A4045]/50 backdrop-blur-sm p-4">
          <div className="relative max-w-md w-full rounded-3xl bg-white border border-[#F3E3E7] shadow-blush-lg p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3 text-[#7A3E53]">
              <div className="w-11 h-11 rounded-2xl bg-[#FAF0F2] border border-[#F3E3E7] flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold">Confirmar Entrega da Prova?</h3>
                <p className="text-xs text-[#8C4A5F]">
                  Ainda há {unansweredCount}{' '}
                  {unansweredCount === 1 ? 'questão em branco' : 'questões em branco'}.
                </p>
              </div>
            </div>

            <p className="text-sm text-[#4A4045] leading-relaxed">
              Raphaela, você respondeu <strong>{answeredCount}</strong> de{' '}
              <strong>{totalQuestions}</strong> questões. Deseja submeter o simulado mesmo assim e
              desbloquear o gabarito comentado agora?
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 px-4 py-3 min-h-[48px] rounded-2xl bg-[#FAF0F2] text-[#7A3E53] font-bold text-xs sm:text-sm hover:bg-[#F3E3E7] transition-all"
              >
                Voltar e Responder
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmModal(false);
                  onSubmitExam();
                }}
                className="group flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] rounded-2xl bg-[#7A3E53] text-white font-extrabold text-xs sm:text-sm hover:bg-[#8C4A5F] transition-all"
              >
                <SoftPawIcon className="w-4 h-4" />
                <span>Submeter Agora</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

