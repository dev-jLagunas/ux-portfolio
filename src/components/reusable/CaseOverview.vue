<script setup>
//Props
defineProps({
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
    <h3 class="overview-title font-special">{{ title }}</h3>

    <ul class="overview-content-wrapper">
      <li v-for="(tag, index) in tags" :key="index" class="pr-2">{{ tag }}</li>
    </ul>

    <div class="overview-info">
      <img :src="imgSrc" alt="overview image of project" class="overview-img" loading="lazy" />
      <div>
        <div class="flex flex-col mt-4 mb-2 md:flex-row md:justify-between md:items-center">
          <a
            :href="`/` + pdfFile"
            download
            class="case-study-btn w-fit"
            aria-label="Download full case study as PDF"
          >
            Download Full Case Study PDF
          </a>
          <p v-if="url">
            <a :href="url" target="_blank" class="underline text-blue md:pr-4">View live site</a>
          </p>
        </div>
        <h5 class="font-bold tracking-widest text-xl leading-5 mb-2">{{ workTitle }}</h5>
        <p v-for="(para, index) in paragraphs" :key="index" :class="{ 'mt-2': index > 0 }">
          {{ para }}
        </p>

        <ul class="my-4 flex flex-col gap-1 text-base">
          <li><span class="font-bold">My Role:</span> {{ role }}</li>
          <li><span class="font-bold">Date:</span> {{ date }}</li>
          <li><span class="font-bold">Toolkit:</span> {{ toolkit }}</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
