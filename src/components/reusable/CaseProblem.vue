<script setup>
import { ref } from 'vue'

import problemIcon from '@/assets/svgs/problem-icon.svg'

// Props
const props = defineProps({
  problemStatement: { type: String, required: true },
  problemStatementB: { type: String, required: true },
  userResearchIntro: { type: String, required: true },
  researchMethods: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((m) => m.caption && m.imageSrc && m.description),
  },
  artifacts: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((a) => a.caption && a.imageSrc),
  },
  takeaway: { type: String, required: true },
  quote: { type: String, required: true },
  statement: { type: String, required: true },
  statementDetails: { type: String, required: true },
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
  <section id="problem-section" class="flex-col-center">
    <div class="section-header-wrapper">
      <h3 class="font-bold text-3xl">The Problem</h3>
      <p class="tracking-wider text-blue/90 font-semibold md:pr-4">Empathize – Define</p>
    </div>
    <article class="flex-col-center">
      <div class="problem-header-wrapper">
        <img :src="problemIcon" alt="troubled face svg icon" class="mx-auto h-12 mb-2" />
        <p class="mb-2 indent-4">
          {{ problemStatement }}
        </p>
        <p class="indent-4 mb-2">{{ problemStatementB }}</p>
        <p class="indent-4">{{ userResearchIntro }}</p>
      </div>
      <h4 class="w-full font-semibold mb-4 text-2xl mt-8">How I gathered insights?</h4>
      <article
        v-if="researchMethods && researchMethods.length"
        class="w-full grid grid-cols-1 gap-4 mb-16 sm:grid-cols-3 sm:px-4 md:gap-8 lg:gap-16"
      >
        <figure v-for="(method, idx) in researchMethods" :key="idx">
          <img :src="method.imageSrc" alt="research technique icon" class="h-16 mb-2" />
          <figcaption class="font-semibold">{{ method.caption }}</figcaption>
          <p>{{ method.description }}</p>
        </figure>
      </article>
      <h4 class="w-full font-semibold text-2xl">Visualizing the research.</h4>
      <figure class="relative w-full mt-4">
        <div class="md:place-items-center">
          <div class="lg:grid lg:grid-cols-2 lg:gap-4">
            <div class="mt-2 md:mt-0">
              <h3 class="font-semibold tracking-wide border-b w-fit border-b-pink mb-2">
                {{ props.artifacts[currentIndex].caption }}
              </h3>
              <p class="mb-8">{{ props.artifacts[currentIndex].blurb }}</p>
            </div>
            <div>
              <h3 class="font-semibold tracking-wide border-b w-fit border-b-pink mb-2">
                {{ props.artifacts[currentIndex].statement }} Statement
              </h3>
              <p>
                {{ props.artifacts[currentIndex].statementDetails }}
              </p>
            </div>
          </div>
          <img
            :src="props.artifacts[currentIndex].imageSrc"
            :alt="props.artifacts[currentIndex].caption"
            class="rounded-md mt-16 w-[90%] shadow-sm hover:cursor-pointer mx-auto max-w-[350px] lg:mt-4"
            @click="isModalOpen = true"
            loading="lazy"
          />
        </div>
        <button @click="prevImage" class="problem-left-btn">‹</button>
        <button @click="nextImage" class="problem-right-btn">›</button>
      </figure>
      <p class="problem-quote">"{{ quote }}"</p>
    </article>
  </section>
  <div v-if="isModalOpen" class="problem-img-modal" @click.self="isModalOpen = false">
    <div class="relative w-full lg:w-[800px] px-8">
      <button @click="isModalOpen = false" class="problem-modal-close-btn">X</button>
      <img
        :src="props.artifacts[currentIndex].imageSrc"
        :alt="props.artifacts[currentIndex].caption"
        class="w-full rounded shadow-lg hover:cursor-pointer max-w-[600px] mx-auto"
        loading="lazy"
      />
      <p class="text-light font-bold text-2xl text-center mt-2">
        {{ props.artifacts[currentIndex].caption }}
      </p>
      <p class="text-light text-center mt-2 leading-5">{{ props.artifacts[currentIndex].blurb }}</p>
    </div>
  </div>
</template>

<style scoped></style>
