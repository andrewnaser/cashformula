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
        // Deep space dark colors
        navy: {
          950: '#030014',
          900: '#0a0a1e',
          800: '#141428',
          700: '#1e1e3c',
          600: '#2d2d5a',
          500: '#4a4a7a',
          400: '#6b6b9d',
          300: '#9696c0',
        },
        // Neon cyan - primary accent
        neon: {
          cyan: '#00f5ff',
          'cyan-dark': '#00c4cc',
          'cyan-light': '#66ffff',
        },
        // Neon pink/magenta
        pink: {
          neon: '#ff00e5',
          hot: '#ff1493',
          light: '#ff66f2',
        },
        // Neon purple
        purple: {
          neon: '#bf00ff',
          electric: '#9933ff',
          light: '#cc66ff',
        },
        // Neon green for success states
        cash: {
          green: '#00ff88',
          lime: '#66ff00',
          emerald: '#00ffaa',
        },
        // Legacy gold mapping to neon cyan for backwards compatibility
        gold: {
          50: '#e6ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#00f5ff',
          500: '#00c4cc',
          600: '#009999',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-gradient': 
          'radial-gradient(at 0% 0%, rgba(0, 245, 255, 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(191, 0, 255, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 0, 229, 0.06) 0px, transparent 50%)',
        'card-shine': 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, transparent 50%, rgba(191, 0, 255, 0.05) 100%)',
        'neon-glow': 'radial-gradient(ellipse at center, rgba(0, 245, 255, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'ticker': 'ticker 25s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neon-flicker': 'neon-flicker 3s ease-in-out infinite',
        'border-flow': 'border-flow 4s ease infinite',
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
          '0%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.2), 0 0 40px rgba(0, 245, 255, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(0, 245, 255, 0.2)' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '52%': { opacity: '1' },
          '54%': { opacity: '0.9' },
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 245, 255, 0.3), 0 0 40px rgba(0, 245, 255, 0.1)',
        'neon-lg': '0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(0, 245, 255, 0.2)',
        'neon-pink': '0 0 20px rgba(255, 0, 229, 0.3), 0 0 40px rgba(255, 0, 229, 0.1)',
        'neon-purple': '0 0 20px rgba(191, 0, 255, 0.3), 0 0 40px rgba(191, 0, 255, 0.1)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.3), 0 0 40px rgba(0, 255, 136, 0.1)',
        'inner-neon': 'inset 0 0 20px rgba(0, 245, 255, 0.1)',
        // Legacy support
        'gold': '0 0 20px rgba(0, 245, 255, 0.3), 0 0 40px rgba(0, 245, 255, 0.1)',
        'gold-lg': '0 0 40px rgba(0, 245, 255, 0.4), 0 0 80px rgba(0, 245, 255, 0.2)',
        'inner-gold': 'inset 0 0 20px rgba(0, 245, 255, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
