/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/dist/**/*.{js,mjs,cjs}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "mortar-white": "#FCFCFC",
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#c2410c',
          600: '#c2410c',
          700: '#9a3412',
          800: '#7c2d12',
          900: '#1e1b4b',
        },
      },
      width: {
        '97': '35rem',
      },
      margin: {
        'coin': '46rem',
        'code': '19rem',
      },
      transitionDuration: {
        '10000': '10000ms',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
