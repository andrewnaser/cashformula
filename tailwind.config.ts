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
        // Dark palette
        navy: {
          950: '#050508',
          900: '#0a0a0f',
          800: '#0f1014',
          700: '#151619',
          600: '#1a1b1f',
          500: '#252629',
          400: '#6b7280',
          300: '#9ca3af',
        },
        // Primary - Teal/Cyan highlight
        teal: {
          DEFAULT: '#10b981',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          neon: '#00d4aa',
          bright: '#34d399',
          dark: '#059669',
          light: '#6ee7b7',
        },
        // Accent - Yellow/Gold for CTAs
        gold: {
          DEFAULT: '#eab308',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          bright: '#facc15',
          dark: '#ca8a04',
          light: '#fde047',
        },
        // Support colors
        cyan: {
          DEFAULT: '#06b6d4',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          bright: '#22d3ee',
          dark: '#0891b2',
        },
        emerald: {
          DEFAULT: '#10b981',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          light: '#34d399',
          dark: '#059669',
        },
        // Backwards compatibility - map purple/pink to teal
        purple: {
          DEFAULT: '#10b981',
          neon: '#10b981',
          bright: '#34d399',
          dark: '#059669',
          light: '#6ee7b7',
          primary: '#10b981',
        },
        pink: {
          DEFAULT: '#10b981',
          neon: '#10b981',
          bright: '#34d399',
          dark: '#059669',
          primary: '#10b981',
        },
        violet: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        indigo: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        rose: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
        },
        // Cash colors
        cash: {
          green: '#10b981',
          emerald: '#34d399',
          lime: '#a3e635',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 
          'radial-gradient(at 20% 30%, rgba(16, 185, 129, 0.12) 0%, transparent 50%), radial-gradient(at 80% 70%, rgba(6, 182, 212, 0.10) 0%, transparent 50%)',
        'card-shine': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(16, 185, 129, 0.05) 100%)',
        'neon-glow': 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'ticker': 'ticker 25s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
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
          '0%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.5), 0 0 80px rgba(16, 185, 129, 0.3)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(16, 185, 129, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(16, 185, 129, 0.5), 0 8px 32px rgba(0, 0, 0, 0.4)',
        'glow-teal': '0 0 20px rgba(16, 185, 129, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow-gold': '0 0 20px rgba(234, 179, 8, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow-purple': '0 0 20px rgba(16, 185, 129, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(16, 185, 129, 0.1)',
        'neon': '0 0 20px rgba(16, 185, 129, 0.4)',
        'neon-lg': '0 0 40px rgba(16, 185, 129, 0.5)',
        'gold': '0 0 20px rgba(234, 179, 8, 0.4)',
        'gold-lg': '0 0 40px rgba(234, 179, 8, 0.5)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};

export default config;
