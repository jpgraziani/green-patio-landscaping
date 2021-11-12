module.exports = {
  purge: [
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        },
        bkgtan: '#F9D5B2' ,
        red: '#FD5523'
      },
      screens: {
        'xs': '700px'
      },
      backgroundImage: {
        'agave': "url(./public/img/Agave_bkg.svg)"
      }
    },
    fontFamily: {
      body: ['Nunito']
    },
    // backgroundImage: {
    //   'agave': "url(./public/img/Agave_bkg.svg)"
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
