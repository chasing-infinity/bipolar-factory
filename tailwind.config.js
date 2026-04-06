/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        acid: '#C8FF00',
        void: '#0A0A0A',
        slate: '#1A1A2E',
        ember: '#FF4500',
        neon: '#00FFD1',
        paper: '#F5F0E8',
      },
      animation: {
        'flip': 'flip 0.6s ease-in-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.4s ease-out',
        'card-reveal': 'cardReveal 0.5s ease-out',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #C8FF00, 0 0 10px #C8FF00' },
          '50%': { boxShadow: '0 0 20px #C8FF00, 0 0 40px #C8FF00' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        cardReveal: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
