/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0E14',
          soft: '#0D1220',
        },
        surface: {
          DEFAULT: '#12161F',
          elevated: '#161B26',
          border: '#1E2733',
        },
        accent: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
          glow: '#3B82F633',
        },
        ink: {
          DEFAULT: '#E7EAF0',
          muted: '#8B95A7',
          faint: '#5B6577',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgba(0,0,0,0.4), 0 8px 24px -8px rgba(0,0,0,0.5)',
        glow: '0 0 0 1px rgba(59,130,246,0.25), 0 8px 32px -8px rgba(59,130,246,0.35)',
        card: '0 4px 16px -4px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
