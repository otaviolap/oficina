/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFDD00', // Main yellow
          600: '#FDD835',
          700: '#FBC02D',
          800: '#F9A825',
          900: '#F57F17',
        },
        secondary: {
          50: '#E0E0E0',
          100: '#BDBDBD',
          200: '#9E9E9E',
          300: '#757575',
          400: '#616161',
          500: '#424242',
          600: '#303030',
          700: '#212121',
          800: '#1A1A1A', // Main black
          900: '#000000',
        },
        accent: '#FF5722', // Orange accent for CTAs
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
    },
  },
  plugins: [],
};