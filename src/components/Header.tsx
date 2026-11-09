import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Lock,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';
import { SoftPawIcon } from './CatDoodles';

export type AppStep = 'dashboard' | 'study-guide' | 'loading-exam' | 'active-exam' | 'report';

interface HeaderProps {
  currentStep: AppStep;
  onReturnToDashboard: () => void;
  onOpenStudyGuide: () => void;
  activeQuestionCount?: number;
  answeredCount?: number;
  overallStudyPercent?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  onReturnToDashboard,
  onOpenStudyGuide,
  activeQuestionCount = 0,
  answeredCount = 0,
  overallStudyPercent = 0,
}) => {
  const isExamLocked = currentStep === 'active-exam' || currentStep === 'loading-exam';

  return (
    <header className="sticky top-0 z-30 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#F3E3E7] shadow-blush-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 gap-3">
          {/* Brand Title */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onReturnToDashboard}
              className="group flex items-center gap-3 text-left min-h-[48px] focus:outline-none"
              title="Ir para o Painel da Raphaela"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#FAF0F2] border border-[#F3E3E7] flex items-center justify-center text-[#7A3E53] group-hover:bg-[#7A3E53] group-hover:text-white transition-all duration-200 shadow-sm">
                <SoftPawIcon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF0F2] text-[#7A3E53] border border-[#F3E3E7]">
                    ENEM Exatas • 2021–2023
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1 text-xs font-medium text-[#8C4A5F]">
                    <Sparkles className="w-3.5 h-3.5" /> Espaço da Raphaela
                  </span>
                </div>
                <h1 className="text-base sm:text-lg font-extrabold text-[#7A3E53] tracking-tight leading-snug mt-0.5">
                  Plataforma de Estudos &amp; Simulado ENEM
                </h1>
              </div>
            </button>

            {currentStep === 'active-exam' && (
              <div className="flex sm:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF0F2] border border-[#F3E3E7] text-[11px] font-semibold text-[#7A3E53]">
                <Lock className="w-3 h-3" />
                <span>
                  {answeredCount}/{activeQuestionCount}
                </span>
              </div>
            )}
          </div>

          {/* Navigation & Mode Switcher */}
          <nav
            aria-label="Navegação Principal"
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0"
          >
            {/* 1. Painel & Simulado */}
            <button
              type="button"
              disabled={isExamLocked}
              onClick={onReturnToDashboard}
              className={`flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                currentStep === 'dashboard'
                  ? 'bg-[#7A3E53] text-white shadow-sm'
                  : isExamLocked
                  ? 'text-[#8C4A5F]/50 cursor-not-allowed'
                  : 'bg-[#FAF0F2] text-[#7A3E53] border border-[#F3E3E7] hover:bg-[#F3E3E7]'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
              <span>Painel &amp; Simulado</span>
            </button>

            {/* 2. Modo Estudos Ilustrado (New!) */}
            <button
              type="button"
              disabled={isExamLocked}
              onClick={onOpenStudyGuide}
              className={`flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                currentStep === 'study-guide'
                  ? 'bg-[#7A3E53] text-white shadow-sm'
                  : isExamLocked
                  ? 'text-[#8C4A5F]/50 cursor-not-allowed'
                  : 'bg-[#FAF0F2] text-[#7A3E53] border border-[#F3E3E7] hover:bg-[#F3E3E7]'
              }`}
              title={
                isExamLocked
                  ? 'Bloqueado durante a realização do simulado'
                  : 'Acessar Caderno de Estudos Ilustrado de todas as questões'
              }
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>Estudos Ilustrados</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  currentStep === 'study-guide'
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-[#7A3E53] border border-[#F3E3E7]'
                }`}
              >
                {overallStudyPercent}%
              </span>
            </button>

            {/* 3. Active Exam Status */}
            {isExamLocked && (
              <div className="flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl bg-[#7A3E53] text-white text-xs font-bold shadow-sm whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Modo Prova Ativo (Gabarito Oculto)</span>
              </div>
            )}

            {/* 4. Report Status */}
            {currentStep === 'report' && (
              <div className="flex items-center gap-1.5 px-3.5 py-2 min-h-[44px] rounded-xl bg-[#7A3E53] text-white text-xs font-bold shadow-sm whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Relatório &amp; Resolução</span>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
