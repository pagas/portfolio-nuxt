// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/apollo',
    '@sidebase/nuxt-auth'
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    gitHubClientId: process.env.GITHUB_CLIENT_ID,
    gitHubClientSecret: process.env.GITHUB_CLIENT_SECRET
  },
  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css', 'json', 'bash', 'vue']
    }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql'
      }
    },
  },
})
