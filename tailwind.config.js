module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
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
    letterSpacing:{
      'tight': '-.02em',
      'widest': '.12em',
    },
    colors: {
      'primary': '#18224680',
      'gray-400': '#646160',
      'black': '#000',
      'white': '#fff'
    },
  },
  plugins: [],
}