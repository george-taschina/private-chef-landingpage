// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/fonts", "@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxt/icon"],
  fonts: {
    families: [
      { name: "Saira Condensed", provider: "google" },
      {
        name: "Pacifico",
        provider: "google",
      },
      {
        name: "Amatic SC",
        provider: "google",
      },
    ],
  },
});