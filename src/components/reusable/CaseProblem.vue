<script setup>
//Props
const props = defineProps({
  problemStatement: {
    type: String,
    required: true,
  },
  artifacts: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((a) => a.caption && a.imageSrc),
  },
  takeaway: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section id="problem-section" class="flex flex-col items-center justify-center">
    <div class="mt-4 mb-2 flex items-center justify-between w-full">
      <h3 class="font-bold text-2xl">The Problem</h3>
      <p class="text-sm">Empathize – Define</p>
    </div>
    <article class="flex flex-col items-center justify-center">
      <p class="border-pink border-2 p-4 rounded-md my-4">
        {{ problemStatement }}
      </p>
      <div class="md:grid md:grid-cols-2 md:gap-4 md:w-4/5 md:place-items-center">
        <figure
          v-for="(artifact, index) in artifacts"
          :key="index"
          :class="['mt-4', index === 2 ? 'md:col-span-2' : '', 'md:mt-0']"
        >
          <figcaption class="text-center">{{ artifact.caption }}</figcaption>
          <img :src="artifact.imageSrc" alt="" class="mx-auto" />
        </figure>
      </div>
      <p class="mt-6">
        {{ takeaway }}
      </p>
      <p class="text-2xl mt-4">
        {{ quote }}
      </p>
    </article>
  </section>
</template>

<style scoped></style>
