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
})
</script>

<template>
  <article class="border border-gray-300 p-4 rounded-md mb-8 font-main shadow-sm">
    <figure>
      <img
        :src="content"
        alt="photo taken by Juan Lagunas"
        class="h-64 w-full object-contain"
        loading="lazy"
      />
      <figcaption
        :class="`border border-dotted text-center rounded-sm py-2 mt-4 font-bold tracking-widest`"
      >
        {{ title }}
      </figcaption>
    </figure>
  </article>
</template>
