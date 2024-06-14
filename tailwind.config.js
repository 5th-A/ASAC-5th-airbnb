/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        card_lg: '1280px',
        card_md: '960px',
        card_sm: '480px',
      },
      truncate: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      colors: {
        customRed: 'rgb(255,56,92)',
        customGray: 'rgb(221,221,221)',
      },
      flex: {
        6: '6 6 0%',
        4: '4 4 0%',
      },
    },
  },
  plugins: [],
}
