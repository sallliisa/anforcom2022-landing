/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        afblue: '#286DF1',
        'afblue-dark': '#2462D9',
        'afblue-darker': '#2057C1',
        'afblue-light': '#3E7CF3',
        'afblue-lighter': '#538AF4',
        'main-dark-grey': '#111111',
        'main-dark-grey-active': '#1C1C1C'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      animation: {
        blob0: 'blob0 17s infinite cubic-bezier(.52,.13,.58,1.05)',
        blob1: 'blob1 17s infinite cubic-bezier(.52,.13,.58,1.05)',
        blob2: 'blob2 17s infinite cubic-bezier(.52,.13,.58,1.05)'
      },
      keyframes: {
        blob0: {
          '0%': {
            transform: 'translate(-50%, -50%) translate(-15%, 10%) scale(1)'
          },
          '20%': {
            transform: 'translate(-50%, -50%) translate(20%, -30%) scale(1.1)'
          },
          '40%': {
            transform: 'translate(-50%, -50%) translate(-25%, -15%) scale(1.2)'
          },
          '60%': {
            transform: 'translate(-50%, -50%) translate(30%, 20%) scale(0.9)'
          },
          '80%': {
            transform: 'translate(-50%, -50%) translate(5%, 15%) scale(1)'
          },
          '100%': {
            transform: 'translate(-50%, -50%) translate(-15%, 10%)'
          }
        },
        blob1: {
          '0%': {
            transform: 'translate(-50%, -50%) translate(20%, 0%) scale(1)'
          },
          '25%': {
            transform: 'translate(-50%, -50%) skew(-15deg, -15deg) translate(30%, 0%) scale(0.8)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) translate(25%, 0%) scale(1.2)'
          },
          '75%': {
            transform: 'translate(-50%, -50%) skew(15deg, 15deg) translate(15%, 0%) scale(0.9)'
          },
          '100%': {
            transform: 'translate(-50%, -50%) translate(20%, 0%) scale(1)'
          }
        },
        blob2: {
          '0%': {
            transform: 'translate(-50%, -50%) translate(-20%, 0%) scale(1)'
          },
          '25%': {
            transform: 'translate(-50%, -50%) skew(15deg, 15deg) translate(-5%, -10%) scale(0.9)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) translate(-10%, -15%) scale(0.8)'
          },
          '75%': {
            transform: 'translate(-50%, -50%) skew(-15deg, -15deg) translate(-5%, -10%) scale(0.9)'
          },
          '100%': {
            transform: 'translate(-50%, -50%) translate(-20%, 0%) scale(1)'
          }
        }
      }
    }
  },
  plugins: []
}
