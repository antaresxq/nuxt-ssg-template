import { getSvgoConfig } from './webpack/svgo.config'
import { ru } from './src/translations/ru'
import { en } from './src/translations/en'

const FOLDER_SOURCE_NAME = 'src'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-ssg-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['normalize.css', '@/assets/style/app.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue-lazyload'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
  },

  srcDir: FOLDER_SOURCE_NAME,

  svgSprite: {
    svgoConfig() {
      return {
        plugins: [getSvgoConfig()],
      }
    },
  },

  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        ru,
      },
    },
  },
}
