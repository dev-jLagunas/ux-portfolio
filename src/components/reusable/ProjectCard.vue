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
})
</script>

<template>
  <div
    class="relative px-4 py-12 border border-gray-300 rounded-md w-auto font-headings flex flex-col items-center justify-center"
  >
    <div class="absolute top-0 left-0 w-24 h-24 bg-pink triangle-top-left"></div>
    <div class="absolute bottom-0 right-0 w-24 h-24 bg-blue triangle-bottom-right"></div>

    <p class="text-center text-pink-400 font-bold mb-2">{{ uxType }}</p>
    <h3 class="text-xl font-bold mb-2 text-center">{{ title }}</h3>
    <p class="text-sm text-center text-gray-500 mb-4">
      {{ description }}
    </p>
    <img :src="image" alt="" class="h-1/2 max-h-72" />

    <router-link :to="route">
      <button
        class="bg-black text-white px-4 py-2 text-sm rounded hover:cursor-pointer hover:bg-pink duration-300"
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
