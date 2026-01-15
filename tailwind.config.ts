import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New unique color palette - Deep navy with gold accents
        navy: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        cash: {
          green: '#22c55e',
          lime: '#84cc16',
          emerald: '#10b981',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 
          'radial-gradient(at 0% 0%, rgba(251, 191, 36, 0.08) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(34, 197, 94, 0.06) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(251, 191, 36, 0.04) 0px, transparent 50%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'ticker': 'ticker 25s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)' },
        },
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(251, 191, 36, 0.15)',
        'gold-lg': '0 8px 40px rgba(251, 191, 36, 0.25)',
        'inner-gold': 'inset 0 1px 0 rgba(251, 191, 36, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
