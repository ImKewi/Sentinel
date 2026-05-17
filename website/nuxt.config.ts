// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['nuxt-monaco-editor', '@nuxtjs/tailwindcss'],
        runtimeConfig: {
            public: {
                authUrl: process.env.AUTH_URL
            }
    }
})