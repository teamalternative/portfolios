import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  mode: 'spa',
  head: {
    title: 'Tride',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [
    {
      src: '~plugins/buefy.ts',
      ssr: false,
    }
  ],
  modules: [
    'nuxt-buefy', '@nuxtjs/pwa', '@nuxtjs/google-gtag',
  ],

  'google-gtag': {
    id: 'UA-138501746-1',
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(cfg, ctx) {
      if (ctx.isDev && ctx.isClient) {
        cfg.module!.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
