<script setup>
// Props
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
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
  <article class="link-card-container">
    <h2 class="font-bold text-center">{{ title }}</h2>
    <img :src="icon" :alt="title" class="h-20 pb-2" loading="lazy" />
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <button class="link-card-btn">See Now</button></a
    >
  </article>
</template>

<style scoped></style>
