/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customRed: 'rgb(255,56,92)',
      },
      flex: {
        6: '6 6 0%',
        4: '4 4 0%',
      },
    },
  },
  plugins: [],
}
