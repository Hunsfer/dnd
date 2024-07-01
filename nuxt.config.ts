// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt-alt/http',
    '@nuxt-alt/proxy',
    '@nuxt-alt/auth',
    '@pinia/nuxt'
  ],

  proxy: {
    debug: false,
    proxies: {
      '/dnd-api': {
        target: process.env.DND_API_BASE,
        rewrite: (path) => path.replace(/^\/dnd-api/, '')
      }
    }
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})
