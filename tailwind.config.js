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
        'main-dark-grey': '#17181B',
        'main-dark-grey-active': '#121316'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
