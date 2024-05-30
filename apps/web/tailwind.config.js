/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': 'linear-gradient(rgba(16, 16, 16, .6), rgba(16, 16, 16, .6)), url("https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601abb0b487fc1bfc56a1c3b_menu__background-30blur.jpg")'
      },
      backgroundSize: {
        'size-main': 'auto, 510vh'
      },
      backgroundPosition: {
        'position-main': '0 0, -167vh -70vh'
      },
      colors: {
        'main-border-color': '#ffffff26',
        'light-orange': '#ee930e',
        'menu-pop-up-color': '#101010'
      },
      gridTemplateColumns: {
        'main': '60px 1fr'
      }
    },
  },
  plugins: [],
}

