export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/fontawesome.plugin.js",
    "~/plugins/toastr.plugin.js",
    "~/plugins/perfect-scrollbar.plugin.js",
    "~/plugins/swal.plugin.js",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://www.npmjs.com/package/@nuxtjs/stylelint-module
    "@nuxtjs/stylelint-module",

    // https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "vue-sweetalert2/nuxt",
  ],

  sweetalert: {
    confirmButtonColor: "#1560f6",
    cancelButtonColor: "#d8dbe2",
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules(?!(\/|\\)pdfjs-dist)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-optional-chaining"],
        },
      });
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "Dothis.To",
      short_name: "Dothis.To",
    },
    meta: {
      name: "Dothis.To",
      author: "dev@go.team",
      description: "Manage your Global Office Team.",
    },
  },

  publicRuntimeConfig: {
    environment: process.env.APP_ENV,
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
    version: process.env.VERSION,
  },
};
