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

  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 250)
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

      <div class="horizontal-header">
        <h4 class="research-header">Visualizing the research.</h4>
      </div>

      <div ref="scrollContainer" class="horizontal-wrapper">
        <div ref="scrollContent" class="horizontal-scroller">
          <template v-for="(artifact, idx) in props.artifacts" :key="idx">
            <div class="artifact-slide combined-box">
              <div class="slide-inner">
                <span class="slide-number bg-pink text-white py-1 px-2 rounded-xs w-fit"
                  >Artifact 0{{ idx + 1 }}</span
                >
                <h3 class="slide-title">{{ artifact.caption }}</h3>

                <div class="editorial-wrapper">
                  <div class="editorial-img-wrapper" @click="openModal(idx)">
                    <img
                      :src="artifact.imageSrc"
                      :alt="artifact.caption"
                      class="w-full rounded-md shadow-lg object-contain"
                    />
                    <div
                      class="absolute bottom-2 right-2 bg-pink text-white rounded-sm p-1.5 shadow-md pointer-events-none"
                    >
                      <IconPlus size="20" />
                    </div>
                  </div>
                  <p class="slide-blurb">{{ artifact.blurb }}</p>
                  <div
                    class="slide-statement-grid bg-pink text-white rounded-sm px-4 py-2 md:text-lg"
                  >
                    <div class="statement-item">
                      <h4 class="statement-label text-dark">{{ artifact.statement }}</h4>
                      <p class="statement-text">{{ artifact.statementDetails }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <p
        class="text-6xl xl:text-8xl mt-48 font-black font-special uppercase leading-[1.3] tracking-tighter text-pink"
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
        class="absolute -top-10 right-0 text-pink hover:scale-110 hover:font-bold hover:cursor-pointer text-2xl z-10 transition-transform"
      >
        X
      </button>
      <img
        :src="props.artifacts[currentIndex].imageSrc"
        :alt="props.artifacts[currentIndex].caption"
        class="w-full rounded-md shadow-2xl object-contain max-h-[50vh] mx-auto"
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

.skip-btn {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: opacity 0.3s;
}

.skip-btn:hover {
  opacity: 0.7;
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
    height: 70vh;
    padding: 2rem 5rem;
  }
}

.combined-box {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

@media (min-width: 768px) {
  .combined-box {
    border-bottom: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }
}

@media (min-width: 1024px) {
  .artifact-slide {
    width: 80vw;
    height: 70vh;
    padding: 2rem 5rem;
  }
}

@media (min-width: 1400px) {
  .artifact-slide {
    width: 52vw;
    height: 70vh;
    padding: 2rem 5rem;
  }
}

.slide-inner {
  max-width: 42rem;
  width: 100%;
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
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .slide-title {
    font-size: 3.75rem;
  }
}

/* Editorial Layout CSS */
.editorial-wrapper {
  display: block;
  width: 100%;
}

.editorial-wrapper::after {
  content: '';
  display: table;
  clear: both;
}

/* Updated Wrapper for the plus icon */
.editorial-img-wrapper {
  float: right;
  position: relative;
  width: 40%;
  min-width: 120px;
  max-width: 200px;
  margin: 0.5rem 0 1rem 1.5rem;
  transition: transform 0.3s ease-out;
  cursor: pointer;
}

@media (min-width: 768px) {
  .editorial-img-wrapper {
    width: 40%;
    max-width: 350px;
    margin: 0.5rem 0 1.5rem 2.5rem;
  }
}

.editorial-img-wrapper:hover {
  transform: scale(1.05);
}

.slide-blurb {
  font-size: 1.125rem;
  line-height: 1.625;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .slide-blurb {
    font-size: 1.25rem;
  }
}

.slide-statement-grid {
  clear: both;
}

.statement-label {
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.statement-text {
  line-height: 1.5;
}
</style>
