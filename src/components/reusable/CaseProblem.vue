<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  id: String,
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
  statement: { type: String, required: false },
  statementDetails: { type: String, required: false },
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
  <section id="problem-section" class="max-w-7xl mt-10">
    <div class="section-header-wrapper">
      <h3 class="section-title">The Problem</h3>
      <div class="section-phase">Empathize – Define</div>
    </div>
    <article class="flex-col-center">
      <div class="problem-cards-grid">
        <div class="problem-card">
          <div class="problem-card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </div>
          <p class="problem-card-text">
            {{ problemStatement }}
          </p>
        </div>

        <div class="problem-card">
          <div class="problem-card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m7.5 4.27 9 5.15" />
              <path
                d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
              />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
          </div>
          <p class="problem-card-text">
            {{ problemStatementB }}
          </p>
        </div>

        <div class="problem-card problem-card-wide">
          <div class="problem-card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h9z" />
            </svg>
          </div>
          <p class="problem-card-text">
            {{ userResearchIntro }}
          </p>
        </div>
      </div>
      <h4 class="research-header">How I gathered insights?</h4>
      <article v-if="researchMethods && researchMethods.length" class="research-insights-container">
        <div v-for="(method, idx) in researchMethods" :key="idx" class="research-row">
          <div class="research-row-icon">
            <img :src="method.imageSrc" alt="research technique icon" />
          </div>
          <div class="research-row-content">
            <h5 class="research-row-title">{{ method.caption }}</h5>
            <p class="research-row-desc">{{ method.description }}</p>
          </div>
        </div>
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
