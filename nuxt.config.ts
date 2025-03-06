// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  site: {
    url: "https://chefhub.it",
    name: "ChefHub",
  },
  sitemap: {
    urls: [
      {
        loc: "/",
        images: [
          {
            loc: "https://example.com/image.jpg",
            caption: "My image caption",
            geoLocation: "My image geo location",
            title: "My image title",
            license: "My image license",
          },
        ],
      },
    ],
  },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxt/icon",
  ],
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
