<script setup>
//Props
const props = defineProps({
  intro: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  outcomes: {
    type: Array,
    required: true,
    validator: (arr) => arr.length === 4 && arr.every((item) => item.title && item.description),
  },
  icons: {
    type: Array,
    required: true,
    validator: (arr) => arr.length === 4,
  },
})
</script>

<template>
  <section id="outcome-section" class="flex flex-col items-center justify-center">
    <div class="mt-4 mb-2 flex items-center justify-between w-full">
      <h3 class="font-bold text-2xl">The Outcome</h3>
      <p class="text-blue font-semibold md:pr-4 tracking-wider">Prototype – Test</p>
    </div>

    <article>
      <!-- Intro Paragraph -->
      <p class="mb-4">
        {{ intro }}
      </p>

      <!-- Second Paragraph -->
      <p class="mb-6">
        {{ context }}
      </p>

      <!-- Outcome Cards -->
      <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <li v-for="(item, index) in outcomes" :key="index" class="relative px-2 py-12">
          <img
            :src="icons[index]"
            alt="icons representing outcome"
            class="absolute top-0 left-2 h-10 -rotate-12"
          />
          <h5 class="font-semibold my-2">{{ item.title }}</h5>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped></style>
