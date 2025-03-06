// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  site: {
    url: "https://chefhub.it",
    name: "ChefHub",
    description: "Chef a Domicilio ovunque tu sia",
    defaultLocale: "it",
  },
  app: {
    head: {
      htmlAttrs: { lang: "it" },
      titleTemplate: "%siteName %separator %s",
      templateParams: {
        separator: "—",
        siteName: "ChefHub",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "ChefHub",
          name: "ChefHub",
          content: "Chef a Domicilio ovunque tu sia",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "it_IT" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://chefhub.it" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ChefHub",
            url: "https://chefhub.it",
            logo: "https://chefhub.it/logo.png",
          }),
        },
      ],
    },
  },
  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 1,
      changefreq: "weekly",
    },
    urls: [
      {
        loc: "/",
        images: [
          {
            loc: "https://chefhub.it/pexels-cristian-rojas-8478178.jpg",
            caption: "Cuoco Privato a Domicilio",
            geoLocation: "Milano, Italia",
            title: "Chef a Domicilio Milano di ChefHub",
            license: "MIT",
          },
          {
            loc: "https://chefhub.it/saverio_palmieri.jpg",
            caption: "Cuoco Saverio Palmieri Privato a Domicilio",
            geoLocation: "Milano, Italia",
            title: "Chef Saverio Palmieri a Domicilio Milano di ChefHub",
            license: "MIT",
          },
          {
            loc: "https://chefhub.it/alberto_calissano.jpg",
            caption: "Cuoco Alberto Calissano Privato a Domicilio",
            geoLocation: "Milano, Italia",
            title: "Chef Alberto Calissano a Domicilio Milano di ChefHub",
            license: "MIT",
          },
          {
            loc: "https://chefhub.it/michela_mazzoni.jpg",
            caption: "Utente Michela Mazzoni soddisfatta di ChefHub",
            geoLocation: "Milano, Italia",
            title: "Utente Michela Mazzoni soddisfatta di ChefHub",
            license: "MIT",
          },
          {
            loc: "https://chefhub.it/george_taschina.jpeg",
            caption: "Utente George Taschina soddisfatta di ChefHub",
            geoLocation: "Milano, Italia",
            title: "Utente George Taschina soddisfatta di ChefHub",
            license: "MIT",
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
