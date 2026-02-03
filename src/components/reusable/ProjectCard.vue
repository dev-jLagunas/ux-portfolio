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
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="project-card-container md:h-full md:w-full shadow-sm">
    <router-link :to="route">
      <figure class="w-full mb-4 rounded-md bg-blue/30 hover:rotate-1">
        <img
          :src="image"
          alt="trio image of project screenshots"
          class="w-full h-full object-cover max-w-100 mx-auto"
          loading="lazy"
        /></figure
    ></router-link>

    <p class="project-type">{{ uxType }}</p>
    <h3 class="project-title leading-6 my-2">{{ title }}</h3>
    <p class="mb-4 md:text-lg leading-5">
      {{ description }}
    </p>

    <div class="flex justify-between items-center">
      <router-link :to="route">
        <button
          :class="[
            theme.isDarkMode ? 'bg-white text-dark' : 'bg-dark text-light ',
            'px-4 py-2 text-sm rounded hover:cursor-pointer duration-300 hover:bg-pink',
          ]"
        >
          View Case Study
        </button>
      </router-link>
      <a :href="url" target="_blank" rel="noopener noreferrer" class="text-blue xs:pr-4"
        >Live Site</a
      >
    </div>
  </div>
</template>

<style scoped></style>
