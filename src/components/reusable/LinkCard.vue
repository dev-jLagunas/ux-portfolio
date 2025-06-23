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
  <article
    class="rounded-md p-4 font-headings flex flex-col justify-center items-center w-full mt-8 border border-gray-200 h-60"
  >
    <h2 class="font-bold text-center">{{ title }}</h2>
    <img :src="icon" alt="" class="h-20 pb-2" />
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <button
        class="text-sm border-2 border-pink p-2 rounded-sm tracking-widest hover:bg-pink hover:text-white hover:cursor-pointer"
      >
        See Now
      </button></a
    >
  </article>
</template>

<style scoped></style>
