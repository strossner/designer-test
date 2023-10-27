// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-lodash',
  ],
  devtools: { enabled: true },
  eslint: {
    lintOnStart: false,
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
});
