<template>
  <div class="md:container md:mx-auto px-10 md:px-28 py-10">
    <div class="flex">
      <div class="flex-1 text-left content-center">
        <div>
          <h1 class="font-pacifico text-4xl md:text-7xl text-pomodoro">
            Rendi i tuoi pasti <br />
            indimenticabili
          </h1>
          <h2 class="text-xl md:text-3xl text-oliva-nera mt-3">
            Scegli lo
            <span class="font-amatic text-cacao text-2xl md:text-5xl"
              >Chef Privato</span
            >
            in zona che fa per te e organizza il tuo prossimo momento speciale
          </h2>
          <div class="flex flex-col md:flex-row gap-3 mt-8">
            <div class="flex-none">
              <button
                class="bg-oliva text-ceramica font-bold py-4 px-4 rounded text-xl"
              >
                Portami a TAVOLA
              </button>
            </div>
            <div class="flex-none">
              <h3 class="md:text-xl leading-3">
                Piu di
                <span class="font-amatic text-pomodoro text-xl md:text-2xl"
                  >3000</span
                >
                Chef Privati disponibili <br />
                in tutta Italia
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 hidden md:block">
        <NuxtImg
          class="rounded-2xl mx-auto"
          alt="cuoco privato"
          width="500"
          height="700"
          format="webp"
          fit="cover"
          src="/pexels-cristian-rojas-8478178.jpg"
          preload
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
