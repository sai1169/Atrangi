/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        festival: {
          pink: '#FF6B9D',
          purple: '#9B59B6',
          orange: '#FF8C42',
          yellow: '#FFD93D',
          teal: '#4ECDC4',
          magenta: '#E91E63',
          lime: '#CDDC39'
        }
      },
      fontFamily: {
        'festival': ['Fredoka One', 'cursive'],
        'body': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'confetti': 'confetti 3s ease-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        confetti: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}