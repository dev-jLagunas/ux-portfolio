<script setup>
import { ref } from 'vue'
import problemIcon from '@/assets/svgs/problem-icon.svg'

// Props
const props = defineProps({
  problemStatement: { type: String, required: true },
  problemStatementB: { type: String, required: true },
  userResearchIntro: { type: String, required: true },
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
      <p class="tracking-wider text-blue font-semibold md:pr-4">Empathize – Define</p>
    </div>
    <article class="flex flex-col items-center justify-center">
      <div class="border-pink border-2 p-4 rounded-md my-4">
        <img :src="problemIcon" alt="troubled face svg icon" class="mx-auto h-12 mb-2" />
        <p class="mb-2 indent-4">
          {{ problemStatement }}
        </p>
        <p class="indent-4 mb-2">{{ problemStatementB }}</p>
        <p class="indent-4">{{ userResearchIntro }}</p>
      </div>

      <figure class="relative w-full mt-4">
        <div class="md:grid md:grid-cols-7 md:place-items-center">
          <div class="md:col-span-3 md:pl-10">
            <p class="mt-2 font-semibold tracking-wide">
              {{ props.artifacts[currentIndex].caption }}
            </p>
            <p class="">{{ props.artifacts[currentIndex].blurb }}</p>
          </div>
          <img
            :src="props.artifacts[currentIndex].imageSrc"
            :alt="props.artifacts[currentIndex].caption"
            class="rounded-md w-full px-4 hover:cursor-pointer md:col-span-4"
            @click="isModalOpen = true"
            loading="lazy"
          />
        </div>
        <button
          @click="prevImage"
          class="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-pink text-white px-3 py-1 rounded-l hover:cursor-pointer"
        >
          ‹
        </button>
        <button
          @click="nextImage"
          class="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-pink text-white px-3 py-1 rounded-r hover:cursor-pointer"
        >
          ›
        </button>
      </figure>
      <h3 class="w-full font-semibold text-2xl mt-12">Takeway</h3>
      <p class="">
        {{ takeaway }}
      </p>
      <p class="text-2xl my-12 font-bold text-pink uppercase mb-2 text-center lg:text-3xl lg:my-24">
        "{{ quote }}"
      </p>
    </article>
  </section>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 bg-black/[var(--bg-opacity)] [--bg-opacity:95%] flex items-center justify-center"
    @click.self="isModalOpen = false"
  >
    <div class="relative w-full md:w-1/2 lg:w-[800px] px-8">
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
      <p class="text-light text-center mt-2">{{ props.artifacts[currentIndex].blurb }}</p>
    </div>
  </div>
</template>

<style scoped></style>
