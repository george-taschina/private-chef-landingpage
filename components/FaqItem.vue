<template>
  <div class="bg-tiramisu shadow-lg rounded-lg p-5 text-oliva-nera max-w-96">
    <div
      class="cursor-pointer flex justify-between items-center"
      @click="toggleCollapse"
    >
      <h5 class="font-bold text-2xl text-left">{{ question }}</h5>
      <Icon
        name="ion:ios-arrow-dropdown-circle"
        class="transition-transform duration-300 text-cacao"
        :class="{ 'rotate-180': !isCollapsed }"
        size="64"
      />
    </div>
    <div v-if="!isCollapsed" class="mt-3 text-left">
      <p class="text-xl">{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCollapsed: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>
