<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { IconPlus } from '@tabler/icons-vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const scrollContainer = ref(null)
const scrollContent = ref(null)
const isModalOpen = ref(false)
const currentIndex = ref(0)

let ctx

const openModal = (idx) => {
  isModalOpen.value = true
  currentIndex.value = idx
}

let observer

onMounted(async () => {
  gsap.registerPlugin(ScrollTrigger)

  await nextTick()

  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const content = scrollContent.value
      const wrapper = scrollContainer.value

      gsap.to(content, {
        x: () => -(content.scrollWidth - wrapper.offsetWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: 'top 10%',
          end: () => `+=${content.scrollWidth - wrapper.offsetWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })
    })
  }, scrollContainer.value)

  observer = new ResizeObserver(() => {
    ScrollTrigger.refresh()
  })

  if (scrollContent.value) {
    observer.observe(scrollContent.value)
  }
})

onUnmounted(() => {
  if (ctx) ctx.revert()
  if (observer) observer.disconnect()
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

const loadedCount = ref(0)
const onImageLoad = () => {
  loadedCount.value++
  if (loadedCount.value >= props.artifacts.length) {
    // All images are in, now the width is 100% accurate
    ScrollTrigger.refresh()
  }
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

      <div class="horizontal-header mb-4">
        <h4 class="research-header">Visualizing the research.</h4>
      </div>

      <div ref="scrollContainer" class="horizontal-wrapper">
        <div ref="scrollContent" class="horizontal-scroller">
          <template v-for="(artifact, idx) in props.artifacts" :key="idx">
            <div class="artifact-slide combined-box">
              <div class="slide-inner md:border-r md:border-dotted md:border-gray-300 md:pr-16">
                <div class="slide-text-content">
                  <span class="slide-number bg-pink text-white py-1 px-2 rounded-xs w-fit">
                    Artifact 0{{ idx + 1 }}
                  </span>
                  <h3 class="slide-title">{{ artifact.caption }}</h3>
                  <p class="slide-blurb">{{ artifact.blurb }}</p>

                  <div
                    class="slide-statement-grid bg-pink text-white rounded-sm px-4 py-2 md:text-lg shadow-sm"
                  >
                    <div class="statement-item">
                      <h4 class="statement-label text-light">{{ artifact.statement }}</h4>
                      <p class="statement-text">{{ artifact.statementDetails }}</p>
                    </div>
                  </div>
                </div>

                <div class="editorial-img-wrapper" @click="openModal(idx)">
                  <img
                    :src="artifact.imageSrc"
                    :alt="artifact.caption"
                    @load="onImageLoad"
                    class="artifact-image-file"
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
      </div>

      <p
        class="text-6xl xl:text-7xl mt-12 font-black font-special uppercase leading-[1.3] tracking-tighter text-pink"
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
        class="w-full rounded-md shadow-2xl object-contain max-h-[60vh] mx-auto"
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

<style scoped>
.horizontal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}

.horizontal-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  background-color: transparent;
}

.horizontal-scroller {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media (min-width: 768px) {
  .horizontal-scroller {
    flex-direction: row;
    width: max-content;
    flex-wrap: nowrap;
  }
}

.artifact-slide {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  flex-shrink: 0;
  background-color: transparent;
}

@media (min-width: 768px) {
  .artifact-slide {
    width: 100vw;
    height: 80vh; /* Increased slightly for better vertical mockup display */
    padding: 2rem 5rem;
  }
}

@media (min-width: 1024px) {
  .artifact-slide {
    width: 85vw; /* Adjusted for the new 2-column layout width */
  }
}

@media (min-width: 1400px) {
  .artifact-slide {
    width: 65vw;
  }
}

.slide-inner {
  width: 100%;
  max-width: 65rem; /* Increased max-width to accommodate side-by-side layout */
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .slide-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.slide-text-content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .slide-text-content {
    width: 55%;
  }
}

.slide-number {
  display: block;
  font-weight: 900;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.slide-title {
  font-size: 2.25rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.9;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .slide-title {
    font-size: 3.5rem;
  }
}

.slide-blurb {
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

/* Vertical Image Column */
.editorial-img-wrapper {
  position: relative;
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

@media (min-width: 768px) {
  .editorial-img-wrapper {
    width: 40%; /* Keeps the image large but allows space for text */
    max-height: 65vh;
  }
}

.artifact-image-file {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.25rem;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
}

.editorial-img-wrapper:hover {
  transform: scale(1.03);
}

.slide-statement-grid {
  width: 100%;
}

.statement-label {
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.statement-text {
  line-height: 1.4;
  font-size: 0.95rem;
}
</style>
