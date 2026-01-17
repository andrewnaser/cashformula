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
        // Premium dark palette
        navy: {
          950: '#050510',
          900: '#0a0a1f',
          800: '#0f0f2e',
          700: '#1a1a3e',
          600: '#252550',
          500: '#353565',
          400: '#4a4a7a',
          300: '#6b6b9d',
        },
        // Vibrant neon purple - primary
        purple: {
          neon: '#a855f7',
          bright: '#c084fc',
          dark: '#9333ea',
          light: '#e9d5ff',
        },
        // Neon pink - accent
        pink: {
          neon: '#ec4899',
          bright: '#f472b6',
          dark: '#db2777',
        },
        // Neon blue
        blue: {
          neon: '#3b82f6',
          bright: '#60a5fa',
        },
        // Neon cyan/teal
        teal: {
          neon: '#06b6d4',
          bright: '#22d3ee',
        },
        // Success green
        cash: {
          green: '#10b981',
          emerald: '#34d399',
          lime: '#a3e635',
        },
        // Legacy support - map to new vibrant colors
        violet: {
          DEFAULT: '#a855f7',
          light: '#c084fc',
          dark: '#9333ea',
        },
        indigo: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        rose: {
          DEFAULT: '#ec4899',
          light: '#f472b6',
          dark: '#db2777',
        },
        gold: {
          400: '#a855f7',
          500: '#9333ea',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 
          'radial-gradient(at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(at 80% 70%, rgba(236, 72, 153, 0.12) 0%, transparent 50%)',
        'card-shine': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.05) 100%)',
        'neon-glow': 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
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
          '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(168, 85, 247, 0.5), 0 0 80px rgba(168, 85, 247, 0.3)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(168, 85, 247, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(168, 85, 247, 0.5), 0 8px 32px rgba(0, 0, 0, 0.4)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(168, 85, 247, 0.1)',
        // Legacy
        'neon': '0 0 20px rgba(168, 85, 247, 0.4)',
        'neon-lg': '0 0 40px rgba(168, 85, 247, 0.5)',
        'gold': '0 0 20px rgba(168, 85, 247, 0.4)',
        'gold-lg': '0 0 40px rgba(168, 85, 247, 0.5)',
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
