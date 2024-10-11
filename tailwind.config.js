/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#2E3D64',
      'orange': '#FF5757',
      'black': '#242424',
      'white': '#f2f2f2',
      'gray': '#e4e0e0',
    },
    fontFamily: {
      "text": ['Afacad Flux', 'sans-serif']},
  },
  plugins: [],
}
