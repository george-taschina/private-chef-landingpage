<template>
  <HeroSection />
  <FeaturesSection />
  <SocialProofSection />
  <FaqSection />
  <ContactSection />
</template>

<script lang="ts" setup>
useSchemaOrg([
  defineWebPage(),
  defineWebSite({
    name: "ChefHub - Trova il tuo Chef Privato",
    url: "https://chefhub.it",
    description:
      "Trova il tuo Chef Privato in zona e organizza il tuo prossimo momento speciale",
  }),
  defineOrganization({
    name: "ChefHub",
  }),
]);

useSeoMeta({
  ogTitle: "%s",
  title: "Trova il tuo Chef Privato",
  description:
    "ChefHub ti permette di trovare il tuo Chef Privato in zona e organizzare il tuo prossimo momento speciale, scegli tra più di 3000 Chef Privati disponibili in tutta Italia, tramite la nostr app ",
  ogDescription:
    "Trova il tuo Chef Privato in zona e organizza il tuo prossimo momento speciale",
});
</script>

<style></style>
