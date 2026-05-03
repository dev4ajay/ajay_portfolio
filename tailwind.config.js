module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      animation: {
          'shimmer':  'shimmer 4s ease infinite',
  'fade-up':  'fadeUp 0.5s ease both',
        'orb1':        'orbDrift 8s ease-in-out infinite',
        'orb2':        'orbDrift 10s ease-in-out infinite reverse',
        'orb3':        'orbDrift 7s ease-in-out infinite 2s',
        'shimmer':     'shimmer 4s ease infinite',
        'scroll-line': 'scrollLine 2s ease infinite',
        'fade-up':     'fadeUp 0.6s ease both',
        'blink':       'blink 0.9s ease infinite',
      },
      keyframes: {
          shimmer: {
    '0%,100%': { backgroundPosition: '0% 50%' },
    '50%':     { backgroundPosition: '100% 50%' },
  },
  fadeUp: {
    from: { opacity: '0', transform: 'translateY(20px)' },
    to:   { opacity: '1', transform: 'translateY(0)' },
  },
        orbDrift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(20px,-15px) scale(1.05)' },
          '66%':     { transform: 'translate(-10px,20px) scale(0.97)' },
        },
        shimmer: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        scrollLine: {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};