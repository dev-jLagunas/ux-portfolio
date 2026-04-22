<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { IconTarget, IconRoute, IconStack2 } from '@tabler/icons-vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Props
const props = defineProps({
  introText: {
    type: String,
    required: true,
  },
  introText2: {
    type: String,
    required: true,
  },
  introText3: {
    type: String,
    required: true,
  },
  beforeTabs: {
    type: Array,
    required: true,
  },
  afterTabs: {
    type: Array,
    required: true,
  },
  beforeTitle: {
    type: String,
    default: 'Before',
  },
  afterTitle: {
    type: String,
    default: 'After',
  },
  // New HMW props
  hmwTitle: { type: String, default: 'How Might We' },
  hmwIntro: { type: String, default: '' },
  // [{ question: string, response: string, icon?: string }]
  hmwItems: { type: Array, default: () => [] },
})

// Combined Data for Horizontal Scroll
const allCards = computed(() => {
  const before = props.beforeTabs.map((tab) => ({ ...tab, phaseTitle: props.beforeTitle }))
  const after = props.afterTabs.map((tab) => ({ ...tab, phaseTitle: props.afterTitle }))
  return [...before, ...after]
})

// Refs & State
const scrollContainer = ref(null)
const scrollContent = ref(null)
const isModalOpen = ref(false)
const modalData = ref(null)

let ctx

// Modal Logic
const openModal = (card) => {
  modalData.value = card
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  modalData.value = null
}

// GSAP Logic
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
</script>

<template>
  <section id="the-solution">
    <div class="section-header-wrapper">
      <h3 class="section-title">The Solution</h3>
      <div class="section-phase">Ideate – Prototype</div>
    </div>

    <article>
      <div class="solution-intro-grid">
        <div class="solution-block">
          <div class="solution-icon-wrapper">
            <IconTarget class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title">The Vision</h4>
            <p class="solution-text">{{ introText }}</p>
          </div>
        </div>

        <div class="solution-block">
          <div class="solution-icon-wrapper">
            <IconRoute class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title">The Strategy</h4>
            <p class="solution-text">{{ introText2 }}</p>
          </div>
        </div>

        <div class="solution-block">
          <div class="solution-icon-wrapper">
            <IconStack2 class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title">The Blueprint</h4>
            <p class="solution-text">{{ introText3 }}</p>
          </div>
        </div>
      </div>

      <div class="mt-16">
        <div ref="scrollContainer" class="horizontal-wrapper">
          <div ref="scrollContent" class="horizontal-scroller">
            <template v-for="(card, idx) in allCards" :key="idx">
              <div
                class="solution-slide combined-box border-b border-gray-300 dark:border-gray-800 md:border-b-0 md:border-r"
              >
                <div class="slide-inner">
                  <span class="slide-number bg-pink text-white py-1 px-2 rounded-xs w-fit">
                    {{ card.phaseTitle }}
                  </span>
                  <h3 class="slide-title">{{ card.heading }}</h3>

                  <div class="editorial-wrapper">
                    <img
                      :src="card.image"
                      :alt="card.heading"
                      class="editorial-img bg-blue/30"
                      @click="openModal(card)"
                    />
                    <p class="slide-blurb">{{ card.description }}</p>
                  </div>

                  <div
                    class="slide-statement-grid pt-4 mt-4 border-t border-gray-300 dark:border-gray-800"
                  >
                    <div class="statement-item">
                      <h4 class="statement-label text-pink">{{ card.title }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </article>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black/[var(--bg-opacity)] [--bg-opacity:80%] flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-lg max-w-4xl w-full mx-4 p-4 relative">
        <button
          @click="closeModal"
          class="absolute top-5 right-5 text-pink hover:scale-110 hover:font-bold hover:cursor-pointer text-xl z-10"
        >
          X
        </button>

        <img
          v-if="modalData?.image"
          :src="modalData.image"
          alt="enlarged image of project screenshot"
          class="w-full rounded-md mb-4 object-contain max-h-[70vh] bg-blue/10"
          loading="lazy"
        />
        <h5 v-if="modalData?.heading" class="text-xl font-bold text-dark mb-1">
          {{ modalData.heading }}
        </h5>
        <p v-if="modalData?.description" class="text-dark">
          {{ modalData.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.solution-slide {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  flex-shrink: 0;
  background-color: transparent;
}

@media (min-width: 768px) {
  .solution-slide {
    width: 100vw;
    height: 70vh;
    padding: 2rem 5rem;
  }
}

@media (min-width: 1024px) {
  .solution-slide {
    width: 80vw;
    height: 70vh;
    padding: 2rem 5rem;
  }
}

@media (min-width: 1400px) {
  .solution-slide {
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

.editorial-img {
  float: right;
  width: 40%;
  min-width: 120px;
  max-width: 200px;
  margin: 0.5rem 0 1rem 1.5rem;
  object-fit: contain;
  border-radius: 0.25rem;
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-out;
  cursor: pointer;
}

@media (min-width: 768px) {
  .editorial-img {
    width: 45%;
    max-width: 350px;
    margin: 0.5rem 0 1.5rem 2.5rem;
  }
}

.editorial-img:hover {
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

.statement-label {
  font-weight: 900;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
