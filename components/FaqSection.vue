<template>
  <div
    class="md:container md:mx-auto md:rounded-xl p-10 md:px-28 bg-cacao text-ceramica text-center"
  >
    <h3 class="font-amatic text-5xl">Domande poste di frequente</h3>
    <h4 class="text-md font-light mt-3">
      Hai qualche domanda? Siamo qui per aiutarti! Se non vedi la tua domanda
      qua mandaci una mail a
      <a class="underline font-extrabold" href="mailto:info@chefhub.it"
        >info@chefhub.it</a
      >
    </h4>

    <div class="flex flex-col md:flex-row justify-center gap-8 mt-10">
      <div class="flex flex-col gap-8">
        <FaqItem
          question="Come funziona la prenotazione di uno chef a domicilio?"
          answer="È semplicissimo! Scarica l’app, cerca gli chef disponibili nella tua zona, scegli il menu o richiedi un menu personalizzato, seleziona data e ora, e conferma la prenotazione. Lo chef si occuperà di tutto, dalla spesa alla preparazione dei piatti direttamente a casa tua."
        />
        <FaqItem
          question="Posso personalizzare il menu in base alle mie esigenze?"
          answer="Assolutamente sì! Puoi discutere direttamente con lo chef le tue preferenze, intolleranze alimentari o richieste specifiche. Ogni chef è flessibile e pronto a creare un’esperienza culinaria su misura per te."
        />
        <FaqItem
          question="Quali sono i costi del servizio? Ci sono costi nascosti?"
          answer="I costi variano in base allo chef, al menu scelto e al numero di ospiti. Nell’app troverai tutte le informazioni sui prezzi, che includono generalmente il servizio di chef, gli ingredienti e la preparazione. Non ci sono costi nascosti!"
        />
      </div>
      <div class="flex flex-col gap-8">
        <FaqItem
          question="Gli chef portano gli ingredienti o devo provvedere io?"
          answer="Non devi preoccuparti di nulla! Gli chef si occupano di acquistare tutti gli ingredienti freschi e di alta qualità necessari per la preparazione del menu. Tu dovrai solo goderti l’esperienza."
        />
        <FaqItem
          question="Cosa succede se devo annullare o modificare una prenotazione?"
          answer="Puoi annullare o modificare la prenotazione direttamente dall’app, entro i termini indicati al momento della conferma. Ti consigliamo di controllare le condizioni di cancellazione specifiche per ogni chef, in modo da evitare eventuali costi."
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
