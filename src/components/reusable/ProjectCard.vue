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
  url: {
    type: String,
    required: false,
    default: '',
  },
  marker: {
    type: String,
    required: false, // Optional marker text (e.g., "Bonus" or "Featured")
    default: '',
  },
})
</script>

<template>
  <div class="project-card-container relative md:h-full md:w-full shadow-sm">
    <div
      v-if="marker"
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark text-light px-4 py-1 rounded text-sm font-black uppercase tracking-widest shadow-sm"
    >
      {{ marker }}
    </div>

    <router-link :to="route">
      <figure class="w-full mb-4 rounded-md bg-blue/30 hover:rotate-1">
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

    <div class="flex justify-between items-center">
      <router-link :to="route">
        <button
          class="px-4 py-2 text-sm rounded hover:cursor-pointer duration-300 bg-pink uppercase font-bold border"
        >
          View Case Study
        </button>
      </router-link>

      <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" class="text-blue xs:pr-4">
        Live Site
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the container is relative so the marker pins correctly */
.project-card-container {
  position: relative;
}
</style>
