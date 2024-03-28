/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '01': "url('./src/assets/fusca.jpg')"
      },
      fontSize:{
        'bigger': "200px"
      },
      minWidth:{
        '100': "450px"
      }
    },
  },
  plugins: [],
}

