<script setup>
// Props
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="border border-gray-300 p-4 rounded-md mb-8 font-headings shadow-sm">
    <figure>
      <img
        :src="content"
        alt="photo taken by Juan Lagunas"
        class="h-64 w-full object-contain"
        loading="lazy"
      />
      <figcaption :class="`${bgColor} text-dark text-center rounded-sm py-2 mt-4`">
        {{ title }}
      </figcaption>
    </figure>
  </article>
</template>
