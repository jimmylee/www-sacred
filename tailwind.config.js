module.exports = {
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
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-out',
        'blink': 'blink 1s steps(1) infinite'
      }
    }
  }
}