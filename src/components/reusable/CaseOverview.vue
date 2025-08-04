<script setup>
//Props
const props = defineProps({
  title: String,
  tags: Array,
  imgSrc: String,
  workTitle: String,
  paragraphs: Array,
  role: String,
  date: String,
  toolkit: String,
  pdfFile: String,
  url: String,
})
</script>

<template>
  <header id="project-overview">
    <h3 class="text-2xl text-center md:text-3xl">{{ title }}</h3>

    <ul
      class="text-pink font-semibold flex items-start justify-center flex-wrap text-center text-sm gap-2 mt-2 mb-4 divide-x divide-gray-300"
    >
      <li v-for="(tag, index) in tags" :key="index" class="pr-2">{{ tag }}</li>
    </ul>

    <div class="md:mt-8 lg:grid lg:grid-cols-2 lg:place-items-center">
      <img
        :src="imgSrc"
        alt="trio image of case study screenshots"
        class="w-full max-w-[500px] mx-auto mb-4 md:mb-0"
        loading="lazy"
      />
      <div>
        <div class="flex justify-between items-center">
          <a
            :href="`/` + pdfFile"
            download
            class="bg-pink text-white pr-4 pl-2 py-1 rounded-sm mb-2 text-sm inline-block hover:shadow-lg transition"
            aria-label="Download full case study as PDF"
          >
            Full Case Study PDF
          </a>
          <p v-if="url">
            <a :href="url" target="_blank" class="underline text-blue pr-8">View live site</a>
          </p>
        </div>
        <h5 class="font-bold tracking-widest text-xl">{{ workTitle }}</h5>
        <p v-for="(para, index) in paragraphs" :key="index" :class="{ 'mt-2': index > 0 }">
          {{ para }}
        </p>

        <ul class="my-4 flex flex-col gap-2 text-sm">
          <li><span class="border-b border-b-pink">My Role:</span> {{ role }}</li>
          <li><span class="border-b border-b-pink">Date:</span> {{ date }}</li>
          <li><span class="border-b border-b-pink">Toolkit:</span> {{ toolkit }}</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
