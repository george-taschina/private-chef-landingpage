<template>
  <div
    id="early"
    class="md:container md:mx-auto md:rounded-xl p-10 md:px-28 text-left min-h-screen flex justify-start items-center"
  >
    <div>
      <h2 class="text-4xl md:text-7xl text-pomodoro font-pacifico">
        L’app e’ in fase di early access
      </h2>
      <p class="text-oliva-nera text-xl md:text-3xl mt-8">
        Che tu sia un Cuoco o non vedi l’ora di assaporare un ottimo piatto a
        <br />
        casa tua, lasciaci la tua mail.
      </p>

      <div
        v-if="success"
        class="text-pomodoro font-amatic text-xl md:text-7xl mt-12"
      >
        Grazie per esserti iscritto!
      </div>

      <div v-if="!success">
        <div class="flex flex-col md:flex-row gap-5 mt-12">
          <input
            type="email"
            class="rounded-3xl px-10 w-80 md:w-96 h-20"
            placeholder="Inserisci la tua mail"
            v-model="email"
          />
          <button
            @click="sendEmail"
            class="bg-oliva text-ceramica font-bold py-4 px-4 rounded-3xl text-xl"
          >
            Iscriviti
          </button>
        </div>
        <p class="text-cacao font-extralight text-sm mt-4">
          Per ricevere notizie quando l’app verra’ rilasciata o adirittura
          essere selezionato per un accesso esclusivo.<br />
          Non useremo mail la tua mail per altri scopi.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const success = ref(false);
const email = ref("");

const sendEmail = () => {
  fetch("/api/saveEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      success.value = true;
      email.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>

<style></style>
