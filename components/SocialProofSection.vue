<template>
  <div class="container md:mx-auto px-5 md:px-0 py-10">
    <div>
      <Icon
        name="mingcute:quote-left-fill"
        class="text-pomodoro"
        size="108"
      ></Icon>
    </div>
    <div class="flex md:flex-row flex-col gap-5 md:gap-10">
      <div class="flex-1 text-center md:text-left">
        <div>
          <h3 class="text-4xl md:text-7xl font-bold text-oliva-nera">
            Cosa dicono di
            <span class="font-amatic text-6xl md:text-8xl text-pomodoro"
              >NOI</span
            ><br />
            i nostri utenti
          </h3>
          <h4 class="text-xl md:text-2xl text-oliva-nera mt-3 md:mt-8">
            Servizio di chef privati a domicilio <br />
            veloce e economico.
          </h4>
        </div>
      </div>
      <div class="flex-1 mt-8 md:mt-0">
        <div class="bg-cacao grid md:grid-cols-2 gap-10 rounded-xl p-6">
          <SocialProofCard
            testimonial="Una piattaforma ben organizzata e facile da usare. Mi permette di trovare nuovi clienti e di mostrare la mia creatività in cucina. I feedback positivi degli utenti mi motivano a fare sempre meglio!"
            imageSrc="/saverio_palmieri.jpg"
            altText="cuoco privato"
            name="Saverio Palmieri"
            profession="Chef"
          /><SocialProofCard
            testimonial="Fantastica! Ho prenotato uno chef a domicilio per una cena romantica e tutto è stato perfetto. Il menu su misura, la professionalità e la qualità dei piatti hanno superato ogni aspettativa. Consigliatissimo!"
            imageSrc="/george_taschina.jpeg"
            altText="cuoco privato"
            name="George Taschina"
            profession="Utente"
          /><SocialProofCard
            testimonial="Finalmente un'app che valorizza il nostro lavoro! Ho avuto l'opportunità di lavorare con clienti fantastici e di proporre menu personalizzati. Consiglio a tutti i colleghi di provarla!"
            imageSrc="/alberto_calissano.jpg"
            altText="cuoco privato"
            name="Alberto Calissano"
            profession="Chef"
          /><SocialProofCard
            testimonial="Esperienza top! Volevo stupire i miei amici per il mio compleanno e questa app mi ha salvato. Lo chef è stato gentilissimo e il cibo era da ristorante stellato. Non tornerò più ai soliti catering!"
            imageSrc="/michela_mazzoni.jpg"
            altText="cuoco privato"
            name="Michela Mazzoni"
            profession="Utente"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
