<script setup>
import { useThemeStore } from '@/stores/theme'

// Store
const theme = useThemeStore()

// Props
defineProps({
  uxType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="relative px-4 py-10 border border-gray-300 rounded-md w-[90vw] font-main flex flex-col items-center justify-center md:w-full md:h-full"
  >
    <div class="absolute top-0 left-0 w-24 h-24 bg-pink triangle-top-left"></div>
    <div class="absolute bottom-0 right-0 w-24 h-24 bg-blue triangle-bottom-right"></div>

    <p class="text-center text-pink font-bold mb-2">{{ uxType }}</p>
    <h3 class="text-xl font-bold mb-2 text-center md:text-2xl">{{ title }}</h3>
    <p class="mb-4 md:text-lg">
      {{ description }}
    </p>
    <figure class="w-full mb-4">
      <img
        :src="image"
        alt="trio image of project screenshots"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </figure>

    <router-link :to="route">
      <button
        :class="[
          theme.isDarkMode ? 'bg-white text-black' : 'bg-dark text-white ',
          'px-4 py-2 text-sm rounded hover:cursor-pointer duration-300 hover:bg-pink',
        ]"
      >
        View Case Study
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.triangle-top-left {
  clip-path: polygon(0 0, 100% 0, 0 100%);
  border-top-left-radius: 6px;
}

.triangle-bottom-right {
  clip-path: polygon(100% 100%, 0 100%, 100% 0);
  border-bottom-right-radius: 6px;
}
</style>
