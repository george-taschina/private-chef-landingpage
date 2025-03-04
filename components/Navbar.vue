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

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-ceramica focus:outline-none focus:ring-2 focus:ring-inset"
            aria-label="Main menu"
            :aria-expanded="isOpen"
          >
            <svg
              class="h-6 w-6"
              :class="{ hidden: isOpen, block: !isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ hidden: !isOpen, block: isOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
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
      navigation: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
};
</script>
