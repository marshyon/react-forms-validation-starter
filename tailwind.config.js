/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '550px',
      md: '800px',
      lg: '1200px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Nunito'],
      serif: ['Nunito'],
    },
    extend: {
      colors: {
        primary: '#0089C6',
        secondary: '#00A8A1',
      },
      spacing: {
        6: '2.5rem',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  plugins: [],
}
