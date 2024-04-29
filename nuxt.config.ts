export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/test-utils/module', "@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
        semi: true,
        // ...
      }
    }
  }
})