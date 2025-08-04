<script setup>
import { ref } from 'vue'
import problemIcon from '@/assets/svgs/problem-icon.svg'

// Props
const props = defineProps({
  problemStatement: { type: String, required: true },
  problemStatementB: { type: String, required: true },
  artifacts: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((a) => a.caption && a.imageSrc),
  },
  takeaway: { type: String, required: true },
  quote: { type: String, required: true },
})

// Reactive Properties
const currentIndex = ref(0)
const isModalOpen = ref(0)

// Methods
function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.artifacts.length
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + props.artifacts.length) % props.artifacts.length
}
</script>

<template>
  <section id="problem-section" class="flex flex-col items-center justify-center">
    <div class="mt-4 mb-2 flex items-center justify-between w-full">
      <h3 class="font-bold text-2xl">The Problem</h3>
      <p class="text-sm tracking-wider">Empathize – Define</p>
    </div>
    <article class="flex flex-col items-center justify-center">
      <div class="border-pink border-2 p-4 rounded-md my-4">
        <img :src="problemIcon" alt="troubled face svg icon" class="mx-auto h-12 mb-2" />
        <p class="mb-2 indent-4">
          {{ problemStatement }}
        </p>
        <p class="indent-4">{{ problemStatementB }}</p>
      </div>

      <figure class="relative w-full max-w-xl mt-4">
        <!-- <p>
          This project began with real user research, synthesized into empathy maps, personas, and
          journey maps—each informing the problem definition below.
        </p> -->
        <figcaption class="pl-4 mt-2 tracking-wide md:text-center md:pl-0">
          {{ props.artifacts[currentIndex].caption }}
        </figcaption>
        <img
          :src="props.artifacts[currentIndex].imageSrc"
          :alt="props.artifacts[currentIndex].caption"
          class="rounded-md h-full px-4 object-contain hover:cursor-pointer md:w-92 mx-auto lg:w-3/4"
          @click="isModalOpen = true"
          loading="lazy"
        />

        <button
          @click="prevImage"
          class="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-pink text-white px-3 py-1 rounded-l hover:cursor-pointer"
        >
          ‹
        </button>
        <button
          @click="nextImage"
          class="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-pink text-white px-3 py-1 rounded-r hover:cursor-pointer"
        >
          ›
        </button>
      </figure>
      <p class="mt-6">
        {{ takeaway }}
      </p>
      <p class="text-2xl mt-4 font-bold text-pink uppercase mb-2 text-center lg:text-3xl lg:my-8">
        "{{ quote }}"
      </p>
    </article>
  </section>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 bg-black/[var(--bg-opacity)] [--bg-opacity:80%] flex items-center justify-center"
    @click.self="isModalOpen = false"
  >
    <div class="relative w-full md:w-1/2 lg:w-[600px] px-8">
      <button
        @click="isModalOpen = false"
        class="absolute -top-10 right-8 text-white bg-pink px-3 py-1 rounded hover:bg-pink/80"
      >
        X
      </button>
      <img
        :src="props.artifacts[currentIndex].imageSrc"
        :alt="props.artifacts[currentIndex].caption"
        class="w-full rounded shadow-lg hover:cursor-pointer"
        loading="lazy"
      />
      <p class="text-white font-bold text-sm text-center mt-2">
        {{ props.artifacts[currentIndex].caption }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
