require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'auditfix',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // Dotenv module configuration: https://go.nuxtjs.dev/config-axios
  dotenv: {},
  // Google Analytics module configuration: https://go.nuxtjs.dev/config-axios
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },

  // Public runtime configuration
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
      checkDuplicatedScript: true,
      autoTracking: {
        screenview: true,
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
