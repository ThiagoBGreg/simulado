/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        blush: {
          primary: '#7A3E53',
          secondary: '#8C4A5F',
          bg: '#FAF0F2',
          surface: '#FFFFFF',
          text: '#4A4045',
          border: '#F3E3E7',
          soft: '#F7E7EC',
          accent: '#A85C74',
        }
      },
      boxShadow: {
        'blush-sm': '0 2px 10px -2px rgba(122, 62, 83, 0.06)',
        'blush-md': '0 8px 24px -4px rgba(122, 62, 83, 0.09)',
        'blush-lg': '0 16px 36px -6px rgba(122, 62, 83, 0.14)',
      },
      keyframes: {
        'paw-pop': {
          '0%': { transform: 'scale(0.85) rotate(-6deg)', opacity: '0.7' },
          '50%': { transform: 'scale(1.12) rotate(4deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'cat-breathe': {
          '0%, 100%': { transform: 'translateY(0px) scaleY(1)' },
          '50%': { transform: 'translateY(-2px) scaleY(1.03)' },
        },
        'tail-wag': {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(7deg)' },
        },
        'float-zzz': {
          '0%': { transform: 'translateY(0) translateX(0) scale(0.8)', opacity: '0' },
          '50%': { opacity: '0.85' },
          '100%': { transform: 'translateY(-14px) translateX(6px) scale(1.1)', opacity: '0' },
        }
      },
      animation: {
        'paw-pop': 'paw-pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'cat-breathe': 'cat-breathe 3.2s ease-in-out infinite',
        'tail-wag': 'tail-wag 2.8s ease-in-out infinite',
        'float-zzz-1': 'float-zzz 2.6s ease-in-out infinite',
        'float-zzz-2': 'float-zzz 2.6s ease-in-out 0.9s infinite',
        'float-zzz-3': 'float-zzz 2.6s ease-in-out 1.8s infinite',
      }
    },
  },
  plugins: [],
}

