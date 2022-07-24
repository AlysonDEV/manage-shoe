module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'home-background': "url('src/assets/bg-home.png')"
      }
    },
    fontFamily: {
      'body': ['Plus Jakarta Sans', 'sans-serif']
    },
    colors: {
      'primary': '#18224680'
    },
  },
  plugins: [],
}