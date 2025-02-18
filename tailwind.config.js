/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(88px)'
          },
          'to': { 
            opacity: '1', 
            transform: 'translateY(0px)'
          }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        fadeInLeft: {
          'from': { 
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-out',
        'blink': 'blink 1s steps(1) infinite',
        'fadeInLeft': 'fadeInLeft 0.2s ease-out'
      }
    }
  },
  plugins: [],
}