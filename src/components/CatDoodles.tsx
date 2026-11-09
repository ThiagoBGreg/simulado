import React from 'react';

interface DoodleProps {
  className?: string;
}

/**
 * Minimalist line-art paw print for button hover/active micro-interactions
 */
export const SoftPawIcon: React.FC<DoodleProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <ellipse cx="12" cy="15.5" rx="4.2" ry="3.4" />
    <ellipse cx="6.8" cy="10.2" rx="1.6" ry="2.1" transform="rotate(-18 6.8 10.2)" />
    <ellipse cx="10.2" cy="8.2" rx="1.6" ry="2.2" transform="rotate(-6 10.2 8.2)" />
    <ellipse cx="13.8" cy="8.2" rx="1.6" ry="2.2" transform="rotate(6 13.8 8.2)" />
    <ellipse cx="17.2" cy="10.2" rx="1.6" ry="2.1" transform="rotate(18 17.2 10.2)" />
  </svg>
);

/**
 * Minimalist line-art cat peeking from the corner of cards or footer
 */
export const CornerCatPeek: React.FC<DoodleProps> = ({ className = 'w-20 h-14' }) => (
  <svg
    viewBox="0 0 120 72"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Ears & head outline */}
    <path d="M28 60 C28 38, 36 28, 36 14 L50 28 C56 26, 64 26, 70 28 L84 14 C84 28, 92 38, 92 60" />
    {/* Inner ear details */}
    <path d="M39 21 L45 28" strokeOpacity="0.55" />
    <path d="M81 21 L75 28" strokeOpacity="0.55" />
    {/* Happy closed eyes */}
    <path d="M44 43 C46 39, 51 39, 53 43" />
    <path d="M67 43 C69 39, 74 39, 76 43" />
    {/* Little nose & mouth (w) */}
    <path d="M58.5 47 L61.5 47 L60 49 Z" fill="currentColor" />
    <path d="M55 51 C57 53, 60 51, 60 49 C60 51, 63 53, 65 51" />
    {/* Whiskers */}
    <path d="M20 44 L34 46" strokeOpacity="0.6" />
    <path d="M18 50 L33 50" strokeOpacity="0.6" />
    <path d="M100 44 L86 46" strokeOpacity="0.6" />
    <path d="M102 50 L87 50" strokeOpacity="0.6" />
    {/* Little paws resting on the ledge */}
    <path d="M33 60 C33 55, 43 55, 43 60 C43 64, 33 64, 33 60 Z" fill="#FAF0F2" />
    <path d="M77 60 C77 55, 87 55, 87 60 C87 64, 77 64, 77 60 Z" fill="#FAF0F2" />
    <path d="M36 59 L36 62 M39.5 59 L39.5 62" strokeWidth="1.3" />
    <path d="M80.5 59 L80.5 62 M84 59 L84 62" strokeWidth="1.3" />
  </svg>
);

/**
 * Studying cat doodle with round glasses for Raphaela's header / dashboard
 */
export const StudyingCatDoodle: React.FC<DoodleProps> = ({ className = 'w-24 h-24' }) => (
  <svg
    viewBox="0 0 120 110"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Cat head & ears */}
    <path d="M30 62 C27 42, 34 28, 35 16 L49 29 C56 27, 64 27, 71 29 L85 16 C86 28, 93 42, 90 62 C88 76, 76 84, 60 84 C44 84, 32 76, 30 62 Z" />
    {/* Glasses */}
    <circle cx="48" cy="50" r="9.5" strokeWidth="1.8" />
    <circle cx="72" cy="50" r="9.5" strokeWidth="1.8" />
    <path d="M57.5 50 L62.5 50" />
    <path d="M38.5 49 L31 46" strokeOpacity="0.65" />
    <path d="M81.5 49 L89 46" strokeOpacity="0.65" />
    {/* Eyes inside glasses */}
    <circle cx="48" cy="50" r="1.8" fill="currentColor" />
    <circle cx="72" cy="50" r="1.8" fill="currentColor" />
    {/* Nose & mouth */}
    <path d="M58.5 58 L61.5 58 L60 60 Z" fill="currentColor" />
    <path d="M55 62.5 C57 64.5, 60 62.5, 60 60.5 C60 62.5, 63 64.5, 65 62.5" />
    {/* Whiskers */}
    <path d="M20 55 L31 57" strokeOpacity="0.55" />
    <path d="M19 62 L31 62" strokeOpacity="0.55" />
    <path d="M100 55 L89 57" strokeOpacity="0.55" />
    <path d="M101 62 L89 62" strokeOpacity="0.55" />
    {/* Open study book at the bottom */}
    <path d="M26 94 C38 89, 52 91, 60 96 C68 91, 82 89, 94 94 L94 78 C82 73, 68 75, 60 80 C52 75, 38 73, 26 78 Z" fill="#FAF0F2" />
    <path d="M60 80 L60 96" />
    {/* Paws holding the book */}
    <ellipse cx="38" cy="83" rx="5.5" ry="3.8" fill="#FFFFFF" />
    <ellipse cx="82" cy="83" rx="5.5" ry="3.8" fill="#FFFFFF" />
    {/* Floating math/science symbols */}
    <text x="14" y="28" fontSize="11" fill="currentColor" opacity="0.65" fontFamily="Plus Jakarta Sans" fontWeight="700">π</text>
    <text x="96" y="26" fontSize="10" fill="currentColor" opacity="0.65" fontFamily="Plus Jakarta Sans" fontWeight="700">ΔH</text>
    <text x="100" y="44" fontSize="10" fill="currentColor" opacity="0.55" fontFamily="Plus Jakarta Sans" fontWeight="700">∑x</text>
  </svg>
);

/**
 * Section 4.2 Feedback de Estado:
 * Tela de Espera/Carregamento: Animação discreta de um gatinho descansando.
 */
export const SleepingCatLoader: React.FC<{ message?: string; submessage?: string }> = ({
  message = 'Preparando o ambiente de estudos da Raphaela...',
  submessage = 'Organizando questões, fórmulas e cronômetro sem distrações',
}) => (
  <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
    <div className="relative w-44 h-32 flex items-center justify-center text-[#7A3E53]">
      {/* Floating Zzz animations */}
      <span className="absolute top-2 right-10 text-xs font-bold text-[#8C4A5F] animate-float-zzz-1 select-none">
        z
      </span>
      <span className="absolute -top-1 right-6 text-sm font-bold text-[#7A3E53] animate-float-zzz-2 select-none">
        Z
      </span>
      <span className="absolute -top-4 right-2 text-base font-extrabold text-[#7A3E53] animate-float-zzz-3 select-none">
        Z
      </span>

      <svg
        viewBox="0 0 180 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-44 h-28 animate-cat-breathe"
        aria-label="Gatinho descansando enquanto carrega"
      >
        {/* Soft cushion line */}
        <path d="M18 90 C50 96, 130 96, 162 90" stroke="#F3E3E7" strokeWidth="3" />
        {/* Curled sleeping body */}
        <path
          d="M42 86 C30 86, 26 70, 36 58 C46 46, 70 40, 98 44 C124 48, 140 62, 138 78 C137 85, 128 88, 114 88 L42 86 Z"
          fill="#FFFFFF"
        />
        {/* Head resting on front paws */}
        <path
          d="M94 62 C92 48, 100 38, 103 28 L113 38 C118 37, 124 37, 129 38 L138 28 C141 38, 147 48, 144 64 C142 75, 131 82, 119 82 C106 82, 96 74, 94 62 Z"
          fill="#FAF0F2"
        />
        {/* Closed peaceful eyes */}
        <path d="M107 58 C110 62, 115 62, 117 58" />
        <path d="M124 58 C127 62, 132 62, 134 58" />
        {/* Cute nose & sleeping smile */}
        <path d="M119.5 64 L122.5 64 L121 66 Z" fill="currentColor" />
        <path d="M117 68 C119 70, 123 70, 125 68" />
        {/* Rosy cheeks */}
        <ellipse cx="104" cy="64" rx="3.2" ry="1.8" fill="#8C4A5F" fillOpacity="0.28" stroke="none" />
        <ellipse cx="137" cy="64" rx="3.2" ry="1.8" fill="#8C4A5F" fillOpacity="0.28" stroke="none" />
        {/* Curled tail with gentle wag */}
        <path
          d="M36 78 C20 76, 16 62, 26 56 C32 52, 38 58, 35 64"
          className="origin-[36px_78px] animate-tail-wag"
        />
        {/* Back stripes */}
        <path d="M68 44 C67 51, 69 55, 71 58" strokeOpacity="0.45" />
        <path d="M81 43 C80 51, 82 55, 84 58" strokeOpacity="0.45" />
      </svg>
    </div>
    <p className="mt-2 text-base font-bold text-[#7A3E53]">{message}</p>
    <p className="mt-1 text-xs text-[#8C4A5F] max-w-sm">{submessage}</p>
  </div>
);

/**
 * Section 4.2 Feedback de Estado:
 * Conclusão de Simulado: Ilustração comemorativa estilizada ("Parabéns, Raphaela!").
 */
export const CelebrationCatIllustration: React.FC<DoodleProps> = ({ className = 'w-40 h-36' }) => (
  <svg
    viewBox="0 0 160 140"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label="Ilustração comemorativa Parabéns, Raphaela!"
  >
    {/* Sparkles & stars around */}
    <path d="M26 34 L29 26 L32 34 L40 37 L32 40 L29 48 L26 40 L18 37 Z" fill="#FAF0F2" stroke="#7A3E53" strokeWidth="1.5" />
    <path d="M132 28 L134 22 L136 28 L142 30 L136 32 L134 38 L132 32 L126 30 Z" fill="#FAF0F2" stroke="#7A3E53" strokeWidth="1.5" />
    <circle cx="22" cy="76" r="2.5" fill="#8C4A5F" stroke="none" />
    <circle cx="140" cy="70" r="2.5" fill="#8C4A5F" stroke="none" />
    <path d="M18 102 L24 98 M136 98 L142 102" strokeOpacity="0.5" />

    {/* Little academic cap (capelo) */}
    <polygon points="80,12 108,23 80,33 52,23" fill="#7A3E53" stroke="#7A3E53" />
    <path d="M64 28 L64 38 C72 42, 88 42, 96 38 L96 28" fill="#8C4A5F" />
    <path d="M104 24 L110 38" stroke="#7A3E53" strokeWidth="1.8" />
    <circle cx="110" cy="40" r="2.2" fill="#7A3E53" />

    {/* Happy cat head & body */}
    <path
      d="M46 68 C43 52, 48 40, 50 30 L62 41 C72 39, 88 39, 98 41 L110 30 C112 40, 117 52, 114 68 C112 80, 102 88, 80 88 C58 88, 48 80, 46 68 Z"
      fill="#FFFFFF"
    />
    {/* Body sitting */}
    <path d="M54 84 C48 98, 48 114, 54 124 L106 124 C112 114, 112 98, 106 84" fill="#FAF0F2" />

    {/* Joyful arched eyes */}
    <path d="M60 59 C63 54, 69 54, 72 59" strokeWidth="2.2" />
    <path d="M88 59 C91 54, 97 54, 100 59" strokeWidth="2.2" />

    {/* Rosy cheeks */}
    <ellipse cx="56" cy="66" rx="4" ry="2.2" fill="#8C4A5F" fillOpacity="0.3" stroke="none" />
    <ellipse cx="104" cy="66" rx="4" ry="2.2" fill="#8C4A5F" fillOpacity="0.3" stroke="none" />

    {/* Nose and happy open smile */}
    <path d="M78.5 64 L81.5 64 L80 66.5 Z" fill="currentColor" />
    <path d="M73 69 C76 74, 84 74, 87 69" />
    <path d="M76 71 C78 76, 82 76, 84 71" fill="#8C4A5F" fillOpacity="0.35" />

    {/* Whiskers */}
    <path d="M35 61 L47 63" strokeOpacity="0.6" />
    <path d="M34 68 L47 68" strokeOpacity="0.6" />
    <path d="M125 61 L113 63" strokeOpacity="0.6" />
    <path d="M126 68 L113 68" strokeOpacity="0.6" />

    {/* Paws holding a heart/star badge */}
    <polygon
      points="80,91 84,99 93,100 86.5,106 88,115 80,110.5 72,115 73.5,106 67,100 76,99"
      fill="#7A3E53"
      stroke="#7A3E53"
      strokeWidth="1.5"
    />
    <ellipse cx="64" cy="102" rx="6" ry="4.2" transform="rotate(20 64 102)" fill="#FFFFFF" />
    <ellipse cx="96" cy="102" rx="6" ry="4.2" transform="rotate(-20 96 102)" fill="#FFFFFF" />

    {/* Tail curving happily */}
    <path d="M108 118 C124 116, 130 100, 122 92 C117 87, 112 92, 116 97" className="origin-[108px_118px] animate-tail-wag" />
  </svg>
);

