<script setup>
//Props
const props = defineProps({
  title: String,
  tags: Array,
  imgSrc: String,
  paragraphs: Array,
  role: String,
  date: String,
  toolkit: String,
})
</script>

<template>
  <header id="project-overview">
    <h3 class="font-bold text-2xl text-center">{{ title }}</h3>

    <ul
      class="text-pink font-semibold flex items-start justify-center text-center text-sm gap-2 mb-4 divide-x divide-gray-300"
    >
      <li v-for="(tag, index) in tags" :key="index" class="pr-2">{{ tag }}</li>
    </ul>

    <div class="md:flex md:items-center md:gap-4">
      <img :src="imgSrc" alt="" class="w-92 mx-auto mb-4 md:mb-0" />
      <div>
        <p v-for="(para, index) in paragraphs" :key="index" :class="{ 'mt-2': index > 0 }">
          {{ para }}
        </p>

        <ul class="my-4 flex flex-col gap-2 text-sm">
          <li><span class="underline">My Role:</span> {{ role }}</li>
          <li><span class="underline">Date:</span> {{ date }}</li>
          <li><span class="underline">Toolkit:</span> {{ toolkit }}</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
