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
        bkgtan: '#FFE9BE' ,
        red: '#FD5523',
        basilGreen: '#356859',
        green500: '#37966F',
        green100: '#B9E4C9',
        basilOrange: '#FD5523',
        forestGreen: '#163217',
        forest: '#448546',
        yellow: '#F2F602'
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
