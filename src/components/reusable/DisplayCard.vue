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
  <article class="border border-gray-300 p-4 rounded-md mb-8 font-headings">
    <figure>
      <img :src="content" alt="" class="h-64 w-full object-contain" />
      <figcaption :class="`${bgColor} text-black text-center rounded-sm py-2 mt-4`">
        {{ title }}
      </figcaption>
    </figure>
  </article>
</template>
