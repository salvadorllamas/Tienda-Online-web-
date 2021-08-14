import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    //titleTemplate: '%s - ' + process.env.npm_package_name,
    title: '▷ Tienda Online y sus Clases de Teclados | Comparativa de Marcas de Teclados',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      //verificacion del serch console
      {
        name: "google-site-verification",
        content: "jG9p0JCaDhCI8e6LJMQP1a__5n54vJslAw8MmaOsmzo"

      },
      {
        hid: 'description',
        name: 'description',
        content: `Disfruta al Máximo de tus Juegos con los Mejore Teclados Profesionales 
            (Logitech,Casio,HyperX).en OFERTA.✅ ¡Entra Ahora!
       `
      }
    ],

    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Sacramento&display=swap'
      },
      {
        rel:'canonical',
        href:'https://digitalgate.website/'
      }

    ],
    /*
      script: [{
        src: 'https://www.googletagmanager.com/gtag/js?id=G-T6M54MCBLL',
        async: true
      }],
    script: [{
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      'data-ad-client': "ca-pub-1695557641311767",
      async: true
  }]
  */
  },

  router: {
    middleware: ['fecha']
  },
  pwa: {
    manifest: {
      name: 'Digitalgare',
      short_name: 'Digitalgare',
      background_color: '#212121',
      orientation: "portrait",
      lang: 'es'
    },
    workbox: {

    },

  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#E91E63'
  },
  /*
   ** Global CSS
   */
  css: [
    '@assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: [
    /*
      {
        src: '~plugins/ga.js',
        mode: 'client'
      }
        {
          src: '~/plugins/app.js',
          ssr: false,
        }
    */
  ],
  /*
  
     ** Nuxt.js dev-modules
     */

  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-170829433-1'
    }]
    //'@nuxtjs/google-analytics'
  ],
  /*
  googleAnalytics: {
    id: 'UA-T6M54MCBLL',
    debug: {
      enabled: true,
      sendHitTask: true
    }
  },
  */
  /*
   */
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    /*
    ['@nuxtjs/pwa', {
      workbox: false
    }],
    ['@nuxtjs/pwa', {
      meta: false
    }]
    */
    '@nuxtjs/pwa',

    /*
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-1695557641311767'
    }],
    */
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
