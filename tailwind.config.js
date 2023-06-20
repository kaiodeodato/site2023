/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        "mortar-white": "#FCFCFC",
      },
      width: {
        '97': '35rem',
      },
      margin: {
        'coin': '46rem',
      },
      transitionDuration: {
        '10000': '10000ms',
      }
    },
  },
  plugins: [],
}

