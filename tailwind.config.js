/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bark': {
          100: '#E5D4C3',
          200: '#D4B69B',
          300: '#C39874',
          400: '#B27B4D',
          500: '#8C5E3C',
          600: '#664631',
          700: '#402D26',
          800: '#261A1B',
          900: '#130D0F',
        },
        'leaf': {
          100: '#E3F1E3',
          200: '#C7E3C7',
          300: '#AAD5AA',
          400: '#8EC78E',
          500: '#72B972',
          600: '#569B56',
          700: '#3B7D3B',
          800: '#205F20',
          900: '#054105',
        },
        'sky': {
          100: '#E6F3FF',
          200: '#CCE7FF',
          300: '#B3DBFF',
          400: '#99CFFF',
          500: '#80C3FF',
          600: '#66B7FF',
          700: '#4DABFF',
          800: '#339FFF',
          900: '#1A93FF',
        },
      },
      fontFamily: {
        'nature': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
