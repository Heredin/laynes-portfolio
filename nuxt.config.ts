// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  target: "static",
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    // "~/plugins/back-to-top.js"
    "@/plugins/vue-country-code.js",
  ],
  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  modules: ['@nuxtjs/color-mode',"@nuxtjs/i18n",

  ['nuxt-mail', {
    message: [
      { to: ['herevel77@gmail.com'] },
    ],
    smtp: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'herevel77@gmail.com',
        pass: 'foad mycm chou kbjb',
      },
    },
  }],
  ],
  i18n: {
    // Options
          //to make it seo friendly remove below line and add baseUrl option to production domain
          detectBrowserLanguage: false,
          baseUrl: "http://localhost:3000/",
          lazy: false,
          strategy: "prefix_except_default",
          locales: [
            {
              code: "es",
              iso: "es-MX",
              name: "Español",
              file: "es-MX.json",
              dir: "ltr",
            },
            {
              code: "en",
              iso: "en-US",
              name: "English",
              file: "en-US.json",
              dir: "ltr",
            },
          ],
          defaultLocale: "es",
          langDir: "static/lang", 
          
    },
  // Modules: https://go.nuxtjs.dev/config-modules
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
