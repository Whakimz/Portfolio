/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'portfolio-primary': '#242424',
        'portfolio-secondary': '#2F2F2F',
      },
    },
  },
  daisyui: {
    themes: ['cupcake', 'forest'],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}
