import React, { useEffect, useMemo, useState } from 'react';
import { ALL_QUESTIONS } from './data';
import {
  AlternativeLetter,
  ExamHistoryEntry,
  FilterState,
  Question,
  TimerMode,
} from './types/enem';
import { AppStep, Header } from './components/Header';
import { DashboardAndFilters } from './components/DashboardAndFilters';
import { ActiveExamView } from './components/ActiveExamView';
import { ExamReportView } from './components/ExamReportView';
import { StudyGuideView } from './components/StudyGuideView';
import { CornerCatPeek, SleepingCatLoader, SoftPawIcon } from './components/CatDoodles';

const HISTORY_STORAGE_KEY = 'raphaela_enem_exatas_history_v1';
const STUDIED_STORAGE_KEY = 'raphaela_enem_studied_map_v1';
const NOTES_STORAGE_KEY = 'raphaela_enem_study_notes_v1';

const DEFAULT_FILTERS: FilterState = {
  year: 'Todos',
  discipline: 'Todas',
  topic: 'Todos',
  searchQuery: '',
  difficulty: 'Todas',
  questionLimit: 10,
};

export const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('dashboard');
  const [loadingMessage, setLoadingMessage] = useState<{ title: string; subtitle: string }>({
    title: 'Preparando o caderno de prova da Raphaaa...',
    subtitle: 'Bloqueando gabarito e calibrando o cronômetro de simulação',
  });

  // Filters state
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [timerMode, setTimerMode] = useState<TimerMode>('countdown');
  const [customMinutesPerQuestion, setCustomMinutesPerQuestion] = useState<number>(3);

  // Active Exam state
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, AlternativeLetter>>({});
  const [eliminated, setEliminated] = useState<Record<string, AlternativeLetter[]>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [countdownTargetSeconds, setCountdownTargetSeconds] = useState<number>(1800);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Exam history persisted in localStorage
  const [examHistory, setExamHistory] = useState<ExamHistoryEntry[]>(() => {
    try {
      const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Studied questions map persisted in localStorage
  const [studiedMap, setStudiedMap] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STUDIED_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // Personal study notes persisted in localStorage
  const [studyNotes, setStudyNotes] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem(NOTES_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const handleToggleStudied = (questionId: string) => {
    setStudiedMap((prev) => {
      const next = { ...prev, [questionId]: !prev[questionId] };
      try {
        localStorage.setItem(STUDIED_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleMarkBatchStudied = (questionIds: string[], studied: boolean) => {
    setStudiedMap((prev) => {
      const next = { ...prev };
      questionIds.forEach((id) => {
        if (studied) {
          next[id] = true;
        } else {
          delete next[id];
        }
      });
      try {
        localStorage.setItem(STUDIED_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleUpdateStudyNote = (questionId: string, note: string) => {
    setStudyNotes((prev) => {
      const next = { ...prev, [questionId]: note };
      try {
        localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const overallStudyPercent = useMemo(() => {
    if (ALL_QUESTIONS.length === 0) return 0;
    const count = ALL_QUESTIONS.filter((q) => !!studiedMap[q.id]).length;
    return Math.round((count / ALL_QUESTIONS.length) * 100);
  }, [studiedMap]);

  // Filtered questions from database
  const filteredQuestions = useMemo(() => {
    const query = filters.searchQuery.trim().toLowerCase();

    return ALL_QUESTIONS.filter((q) => {
      if (filters.year !== 'Todos' && q.year !== filters.year) return false;
      if (filters.discipline !== 'Todas' && q.discipline !== filters.discipline) return false;
      if (filters.topic !== 'Todos' && q.topic !== filters.topic) return false;
      if (filters.difficulty !== 'Todas' && q.difficulty !== filters.difficulty) return false;

      if (query.length > 0) {
        const haystack = [
          q.contextText,
          q.commandText,
          q.supportData || '',
          q.topic,
          q.discipline,
          String(q.year),
          ...q.resolution.appliedFormulas.map((f) => `${f.formula} ${f.description}`),
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      return true;
    });
  }, [filters]);

  const handleUpdateFilters = (partial: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  // Timer interval during active exam
  useEffect(() => {
    if (currentStep !== 'active-exam' || isPaused) return;

    const interval = window.setInterval(() => {
      setElapsedSeconds((prev) => {
        const next = prev + 1;
        if (timerMode === 'countdown' && next >= countdownTargetSeconds) {
          window.clearInterval(interval);
        }
        return next;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [currentStep, isPaused, timerMode, countdownTargetSeconds]);

  // Auto-submit if countdown reaches zero
  useEffect(() => {
    if (
      currentStep === 'active-exam' &&
      timerMode === 'countdown' &&
      countdownTargetSeconds > 0 &&
      elapsedSeconds >= countdownTargetSeconds
    ) {
      handleFinishExam();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elapsedSeconds, currentStep, timerMode, countdownTargetSeconds]);

  const handleStartExam = (overrideQuestions?: Question[]) => {
    const sourceList = overrideQuestions ?? filteredQuestions;
    const count = overrideQuestions
      ? overrideQuestions.length
      : filters.questionLimit === 'Todas'
      ? sourceList.length
      : Math.min(filters.questionLimit, sourceList.length);

    const selected = sourceList.slice(0, count);
    if (selected.length === 0) return;

    setExamQuestions(selected);
    setAnswers({});
    setEliminated({});
    setFlagged({});
    setElapsedSeconds(0);
    setIsPaused(false);
    setCountdownTargetSeconds(Math.round(selected.length * customMinutesPerQuestion * 60));

    setLoadingMessage({
      title: 'Preparando o Modo Prova da Raphaaa...',
      subtitle: 'Ocultando gabarito, organizando enunciados e iniciando cronômetro',
    });
    setCurrentStep('loading-exam');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.setTimeout(() => {
      setCurrentStep('active-exam');
    }, 850);
  };

  const handleSelectAnswer = (questionId: string, letter: AlternativeLetter) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: letter,
    }));
    setEliminated((prev) => {
      const currentList = prev[questionId] || [];
      if (!currentList.includes(letter)) return prev;
      return {
        ...prev,
        [questionId]: currentList.filter((item) => item !== letter),
      };
    });
  };

  const handleToggleEliminate = (questionId: string, letter: AlternativeLetter) => {
    setEliminated((prev) => {
      const currentList = prev[questionId] || [];
      const exists = currentList.includes(letter);
      const nextList = exists
        ? currentList.filter((item) => item !== letter)
        : [...currentList, letter];
      return {
        ...prev,
        [questionId]: nextList,
      };
    });
  };

  const handleToggleFlag = (questionId: string) => {
    setFlagged((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleFinishExam = () => {
    const total = examQuestions.length;
    const correctCount = examQuestions.filter((q) => answers[q.id] === q.correctAnswer).length;
    const accuracyPercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    const uniqueDisciplines = Array.from(new Set(examQuestions.map((q) => q.discipline)));
    const uniqueYears = Array.from(new Set(examQuestions.map((q) => q.year)));

    const newEntry: ExamHistoryEntry = {
      id: `exam-${Date.now()}`,
      date: new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
      totalQuestions: total,
      correctCount,
      accuracyPercent,
      elapsedSeconds,
      disciplines: uniqueDisciplines,
      years: uniqueYears,
    };

    const updatedHistory = [newEntry, ...examHistory].slice(0, 20);
    setExamHistory(updatedHistory);
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch {
      // ignore storage errors
    }

    setCurrentStep('report');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearHistory = () => {
    setExamHistory([]);
    try {
      localStorage.removeItem(HISTORY_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF0F2] text-[#4A4045]">
      <Header
        currentStep={currentStep}
        onReturnToDashboard={() => {
          setCurrentStep('dashboard');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenStudyGuide={() => {
          setCurrentStep('study-guide');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeQuestionCount={examQuestions.length}
        answeredCount={Object.keys(answers).length}
        overallStudyPercent={overallStudyPercent}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentStep === 'dashboard' && (
          <DashboardAndFilters
            allQuestions={ALL_QUESTIONS}
            filteredQuestions={filteredQuestions}
            filters={filters}
            onUpdateFilters={handleUpdateFilters}
            onResetFilters={handleResetFilters}
            timerMode={timerMode}
            onChangeTimerMode={setTimerMode}
            customMinutesPerQuestion={customMinutesPerQuestion}
            onChangeCustomMinutesPerQuestion={setCustomMinutesPerQuestion}
            onStartExam={handleStartExam}
            examHistory={examHistory}
            onClearHistory={handleClearHistory}
            studiedMap={studiedMap}
            onOpenStudyGuide={() => {
              setCurrentStep('study-guide');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentStep === 'study-guide' && (
          <StudyGuideView
            allQuestions={ALL_QUESTIONS}
            studiedMap={studiedMap}
            studyNotes={studyNotes}
            onToggleStudied={handleToggleStudied}
            onMarkBatchStudied={handleMarkBatchStudied}
            onUpdateStudyNote={handleUpdateStudyNote}
            onStartSimuladoFromFilter={(qs) => handleStartExam(qs)}
          />
        )}

        {currentStep === 'loading-exam' && (
          <div className="rounded-3xl bg-white border border-[#F3E3E7] shadow-blush-md my-8">
            <SleepingCatLoader
              message={loadingMessage.title}
              submessage={loadingMessage.subtitle}
            />
          </div>
        )}

        {currentStep === 'active-exam' && (
          <ActiveExamView
            questions={examQuestions}
            answers={answers}
            eliminated={eliminated}
            flagged={flagged}
            timerMode={timerMode}
            elapsedSeconds={elapsedSeconds}
            countdownTargetSeconds={countdownTargetSeconds}
            isPaused={isPaused}
            onTogglePause={() => setIsPaused((prev) => !prev)}
            onSelectAnswer={handleSelectAnswer}
            onToggleEliminate={handleToggleEliminate}
            onToggleFlag={handleToggleFlag}
            onSubmitExam={handleFinishExam}
            onCancelExam={() => setCurrentStep('dashboard')}
          />
        )}

        {currentStep === 'report' && (
          <ExamReportView
            questions={examQuestions}
            answers={answers}
            elapsedSeconds={elapsedSeconds}
            studiedMap={studiedMap}
            onToggleStudied={handleToggleStudied}
            onOpenStudyGuide={() => {
              setCurrentStep('study-guide');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onStartNewExam={() => {
              setCurrentStep('dashboard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onRetryWrongQuestions={(wrongQuestions) => {
              handleStartExam(wrongQuestions);
            }}
          />
        )}
      </main>

      {/* Footer with Minimalist Line-Art Cat Doodle (Section 4.2) */}
      <footer className="relative mt-auto bg-white border-t border-[#F3E3E7] pt-8 pb-6">
        <div className="hidden sm:block absolute -top-11 right-10 text-[#7A3E53] pointer-events-none">
          <CornerCatPeek className="w-20 h-12" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C4A5F]">
          <div className="flex items-center gap-2 font-semibold text-[#7A3E53]">
            <SoftPawIcon className="w-4 h-4" />
            <span>Plataforma de Estudos e Simulado ENEM (Exatas) — Raphaaa</span>
          </div>
          <div className="text-center sm:text-right">
            Matemática, Física e Química (Edições 2021, 2022 e 2023) • Design System Blush &amp;
            Doodles Felinos
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
