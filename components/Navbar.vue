<template>
  <nav class="bg-cacao shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <!-- Left side (Logo) -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink
            to="/"
            class="text-2xl font-bold text-ceramica font-pacifico"
          >
            ChefHub
          </NuxtLink>
        </div>

        <!-- Desktop Menu (center) -->
        <div class="hidden md:flex md:items-center md:space-x-8">
          <NuxtLink
            v-for="(item, index) in navigation"
            :key="index"
            :to="item.path"
            class="text-ceramica hover:text-oliva px-3 py-2 rounded-md text-sm font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden" :class="{ block: isOpen, hidden: !isOpen }">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="(item, index) in navigation"
          :key="index"
          :to="item.path"
          class="text-ceramica hover:text-oliva block px-3 py-2 rounded-md text-base font-medium"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      navigation: [],
    };
  },
};
</script>
