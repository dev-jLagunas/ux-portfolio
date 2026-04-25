<script setup>
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
  visualRoute: {
    type: String,
    required: false, // Optional link to the visual-style case study
    default: '',
  },
  url: {
    type: String,
    required: false,
    default: '',
  },
  marker: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<template>
  <div class="project-card-container relative md:h-full md:w-full shadow-sm">
    <div
      v-if="marker"
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark text-light px-4 py-1 rounded text-sm tracking-widest shadow-sm"
    >
      {{ marker }}
    </div>

    <a
      v-else-if="url"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-blue bg-light px-4 py-1 rounded text-sm tracking-widest shadow-sm hover:scale-105 hover:underline transition-all duration-300"
    >
      Live Site
    </a>

    <router-link :to="route">
      <figure
        class="w-full mb-4 rounded-md bg-blue/30 hover:rotate-1 duration-300 transition-transform"
      >
        <img
          :src="image"
          alt="project preview"
          class="w-full h-full object-cover max-w-100 mx-auto"
          loading="lazy"
        />
      </figure>
    </router-link>

    <p class="project-type">{{ uxType }}</p>
    <h3 class="project-title leading-6 my-2">{{ title }}</h3>
    <p class="mb-4 md:text-lg leading-5">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-3 items-center justify-between">
      <router-link :to="route">
        <button
          class="px-4 py-2 text-sm rounded hover:cursor-pointer bg-pink uppercase font-bold border duration-300 transition-all hover:bg-pink/75 hover:rounded-lg"
        >
          Full Case Study
        </button>
      </router-link>

      <router-link v-if="visualRoute" :to="visualRoute">
        <button
          class="px-4 py-2 text-sm rounded hover:cursor-pointer border border-dark/20 uppercase font-bold hover:rounded-lg duration-300 transition-all"
        >
          Visual Case Study
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.project-card-container {
  position: relative;
}
</style>
