<template>
  <div class="bg-tiramisu rounded-xl p-4 flex flex-col justify-between">
    <div>
      <Icon
        name="mingcute:quote-left-fill"
        class="text-pomodoro"
        size="30"
      ></Icon>
      <p class="text-oliva-nera text-md italic">"{{ testimonial }}"</p>
    </div>

    <div class="flex gap-4 mt-4">
      <NuxtImg
        class="rounded-full my-auto"
        :alt="altText"
        width="40"
        height="40"
        :src="imageSrc"
        preload
      />
      <div>
        <p class="text-cacao font-bold text-md">{{ name }}</p>
        <p class="text-oliva font-bold text-sm">{{ profession }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: String,
      required: true,
      default: "Questo servizio mi piace un sacco bla bla bla",
    },
    imageSrc: {
      type: String,
      required: true,
      default: "/pexels-cristian-rojas-8478178.jpg",
    },
    altText: {
      type: String,
      required: true,
      default: "cuoco privato",
    },
    name: {
      type: String,
      required: true,
      default: "Saverio Palmieri",
    },
    profession: {
      type: String,
      required: true,
      default: "Chef",
    },
  },
};
</script>
