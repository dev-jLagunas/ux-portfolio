<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { IconPlus } from '@tabler/icons-vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isModalOpen = ref(false)
const currentIndex = ref(0)
const artifactsContainer = ref(null)

let ctx

const openModal = (idx) => {
  isModalOpen.value = true
  currentIndex.value = idx
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    // Only run the alternating animation on desktop so mobile doesn't feel erratic
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const cards = gsap.utils.toArray('.artifact-slide')

      cards.forEach((card, index) => {
        // Even indices come from the left (-100), odd from the right (100)
        const xOffset = index % 2 === 0 ? -100 : 100

        gsap.from(card, {
          x: xOffset,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })

    // Mobile fallback: simple fade in up
    mm.add('(max-width: 767px)', () => {
      const cards = gsap.utils.toArray('.artifact-slide')
      cards.forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    })
  }, artifactsContainer.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})

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
</script>

<template>
  <section id="problem-section" class="my-24">
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
          <p class="problem-card-text">{{ problemStatement }}</p>
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
          <p class="problem-card-text">{{ problemStatementB }}</p>
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
          <p class="problem-card-text">{{ userResearchIntro }}</p>
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

      <div class="mb-8 md:mb-16 w-full">
        <h4 class="research-header">Visualizing the research.</h4>
      </div>

      <div ref="artifactsContainer" class="w-full flex flex-col gap-16 md:gap-32">
        <template v-for="(artifact, idx) in props.artifacts" :key="idx">
          <div class="artifact-slide w-full bg-transparent flex justify-center">
            <div
              class="slide-inner w-full max-w-[90rem] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
              :class="idx % 2 !== 0 ? 'md:flex-row-reverse' : ''"
            >
              <div class="slide-text-content w-full md:w-[55%] flex flex-col">
                <span
                  class="slide-number bg-pink border py-1 px-2 rounded-xs w-fit block font-black tracking-widest text-xs uppercase mb-4"
                >
                  Artifact 0{{ idx + 1 }}
                </span>
                <h3 class="slide-title text-4xl md:text-5xl font-black uppercase leading-none mb-6">
                  {{ artifact.caption }}
                </h3>
                <p class="slide-blurb text-lg leading-relaxed mb-8">{{ artifact.blurb }}</p>

                <div
                  class="slide-statement-grid bg-pink border rounded-sm px-4 py-2 md:text-lg shadow-sm"
                >
                  <div class="statement-item">
                    <h4 class="statement-label font-bold text-xs uppercase tracking-wider mb-1">
                      {{ artifact.statement }}
                    </h4>
                    <p class="statement-text leading-snug">{{ artifact.statementDetails }}</p>
                  </div>
                </div>
              </div>

              <div
                class="editorial-img-wrapper relative w-full md:w-[40%] cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                @click="openModal(idx)"
              >
                <img
                  :src="artifact.imageSrc"
                  :alt="artifact.caption"
                  class="artifact-image-file w-full h-auto object-contain rounded shadow-xl"
                />
                <div
                  class="absolute bottom-2 right-2 bg-pink text-white rounded-sm p-1.5 shadow-md pointer-events-none"
                >
                  <IconPlus size="20" />
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>

      <p
        class="text-5xl xl:text-6xl text-left mt-24 md:mt-32 font-black font-special uppercase leading-[1.3] tracking-tighter text-pink"
      >
        "{{ quote }}"
      </p>
    </article>
  </section>

  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-dark/99 flex items-center justify-center z-50 p-4"
    @click.self="isModalOpen = false"
  >
    <div class="relative w-full max-w-4xl bg-transparent rounded-lg">
      <button
        @click="isModalOpen = false"
        class="absolute -top-10 right-0 md:right-24 text-pink hover:scale-110 hover:font-bold hover:cursor-pointer text-5xl z-10 transition-transform"
      >
        X
      </button>
      <img
        :src="props.artifacts[currentIndex].imageSrc"
        :alt="props.artifacts[currentIndex].caption"
        class="w-full rounded-md shadow-2xl object-contain max-h-[70vh] mx-auto"
        loading="lazy"
      />
      <div class="mt-4 text-center">
        <p class="text-white font-bold text-2xl mb-1">
          {{ props.artifacts[currentIndex].caption }}
        </p>
        <p class="text-gray-200 leading-relaxed max-w-2xl mx-auto">
          {{ props.artifacts[currentIndex].blurb }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
