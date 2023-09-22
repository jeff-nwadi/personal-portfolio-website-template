/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#000f1d',
        'secondary': '#0c1d2e',
        'tertiary': '#38ef7d',
      }
    },

    container:{
      center: true,
      padding: {
        default: '20px',
        md: "80px"
      }
    }
  },

  plugins: [],
}

