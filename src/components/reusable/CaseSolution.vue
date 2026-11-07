<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  IconTarget,
  IconRoute,
  IconStack2,
  IconChevronLeft,
  IconChevronRight,
  IconPlus,
} from '@tabler/icons-vue'

gsap.registerPlugin(ScrollTrigger)

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
})

// Combined Data
const allCards = computed(() => {
  const before = props.beforeTabs.map((tab) => ({ ...tab, phaseTitle: props.beforeTitle }))
  const after = props.afterTabs.map((tab) => ({ ...tab, phaseTitle: props.afterTitle }))
  return [...before, ...after]
})

// Refs & State
const solutionRoot = ref(null)
const carouselRef = ref(null)
const isModalOpen = ref(false)
const modalImageSrc = ref('')

let ctx
let autoScrollTimer = null
const autoDirection = ref('right')

// Base Carousel Scrolling Logic
const scrollCarousel = (direction) => {
  if (!carouselRef.value) return

  const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.4

  carouselRef.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  })
}

// Autoscroll Ping-Pong Logic
const autoScrollStep = () => {
  if (!carouselRef.value) return

  const el = carouselRef.value

  if (autoDirection.value === 'right' && el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
    autoDirection.value = 'left'
  } else if (autoDirection.value === 'left' && el.scrollLeft <= 10) {
    autoDirection.value = 'right'
  }

  scrollCarousel(autoDirection.value)
}

const startAutoScroll = () => {
  stopAutoScroll()
  autoScrollTimer = setInterval(autoScrollStep, 3000)
}

const stopAutoScroll = () => {
  if (autoScrollTimer) clearInterval(autoScrollTimer)
}

const handleManualScroll = (direction) => {
  autoDirection.value = direction
  scrollCarousel(direction)
  startAutoScroll()
}

// Modal Logic
const openModal = (imageSrc) => {
  stopAutoScroll()
  modalImageSrc.value = imageSrc
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  modalImageSrc.value = ''
  startAutoScroll()
}

onMounted(() => {
  startAutoScroll()

  ctx = gsap.context(() => {
    // 1. Header fade-in
    gsap.from('.section-header-wrapper', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-header-wrapper',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    // 2. Vision, Strategy, Blueprint blocks fade-in
    gsap.from('.solution-block', {
      y: 35,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.solution-intro-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    // 3. Gallery section fade-in
    gsap.from('.gallery-section-wrap', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.gallery-section-wrap',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    // 4. Detail cards staggered reveal
    gsap.from('.detail-card-item', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.details-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, solutionRoot.value)
})

onUnmounted(() => {
  stopAutoScroll()
  if (ctx) ctx.revert()
})
</script>

<template>
  <section ref="solutionRoot" id="the-solution" class="mt-10 mx-auto px-4 overflow-x-hidden">
    <div class="section-header-wrapper mb-12">
      <h3 class="section-title text-4xl md:text-5xl font-black uppercase">The Solution</h3>
      <div class="section-phase font-bold tracking-widest uppercase text-sm">
        Ideate – Prototype
      </div>
    </div>

    <article>
      <div class="solution-intro-grid grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 md:mb-24">
        <div class="solution-block">
          <div class="solution-icon-wrapper mb-4">
            <IconTarget size="32" class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title font-bold uppercase text-lg mb-2">The Vision</h4>
            <p class="solution-text leading-relaxed">{{ introText }}</p>
          </div>
        </div>

        <div class="solution-block">
          <div class="solution-icon-wrapper mb-4">
            <IconRoute size="32" class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title font-bold uppercase text-lg mb-2">The Strategy</h4>
            <p class="solution-text leading-relaxed">{{ introText2 }}</p>
          </div>
        </div>

        <div class="solution-block">
          <div class="solution-icon-wrapper mb-4">
            <IconStack2 size="32" class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title font-bold uppercase text-lg mb-2">The Blueprint</h4>
            <p class="solution-text leading-relaxed">{{ introText3 }}</p>
          </div>
        </div>
      </div>

      <div class="gallery-section-wrap w-full mb-16 md:my-24 relative">
        <h4 class="text-2xl md:text-3xl font-black uppercase mb-6">Gallery</h4>

        <div
          class="relative w-full -mx-4 md:-mx-8 px-4 md:px-8"
          @mouseenter="stopAutoScroll"
          @mouseleave="startAutoScroll"
        >
          <div
            ref="carouselRef"
            class="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
          >
            <template v-for="(card, idx) in allCards" :key="`img-${idx}`">
              <div
                v-if="card.image"
                class="relative shrink-0 snap-center w-[85vw] md:w-[60vw] lg:w-[45vw] cursor-pointer group"
                @click="openModal(card.image)"
              >
                <div
                  class="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden border border-gray-300 shadow-sm group-hover:shadow-xl transition-shadow p-4"
                >
                  <img
                    :src="card.image"
                    :alt="`Gallery image ${idx + 1}`"
                    class="w-full h-full object-contain bg-blue/30 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div
                  class="absolute top-6 right-6 rounded-2xl bg-pink text-white p-2 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none border"
                >
                  <IconPlus size="24" />
                </div>
              </div>
            </template>
          </div>

          <div
            class="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 z-20 pointer-events-none"
          >
            <button
              @click="handleManualScroll('left')"
              class="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full text-light bg-pink flex items-center justify-center hover:scale-110 transition-transform shadow-2xl backdrop-blur-xl"
              aria-label="Scroll left"
            >
              <IconChevronLeft size="32" stroke-width="2.5" />
            </button>
            <button
              @click="handleManualScroll('right')"
              class="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full text-light bg-pink flex items-center justify-center hover:scale-110 transition-transform shadow-2xl backdrop-blur-xl"
              aria-label="Scroll right"
            >
              <IconChevronRight size="32" stroke-width="2.5" />
            </button>
          </div>
        </div>
      </div>

      <div class="w-full mb-16">
        <h4 class="text-2xl md:text-3xl font-black uppercase mb-8">The Details</h4>

        <div class="details-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <template v-for="(card, idx) in allCards" :key="`text-${idx}`">
            <div
              v-if="card.heading"
              class="detail-card-item flex flex-col p-6 md:p-8 rounded-xl shadow-sm border border-gray-300 h-full"
            >
              <span
                class="text-xs font-black tracking-widest uppercase border border-dark/10 px-4 py-2 rounded-2xl w-fit mb-4 block bg-pink"
              >
                {{ card.phaseTitle }}
              </span>

              <h3 class="text-2xl font-black uppercase leading-tight mb-4">
                {{ card.heading }}
              </h3>

              <p class="text-base mb-6 flex-grow">
                {{ card.description }}
              </p>

              <div v-if="card.title" class="rounded p-4 mt-auto border-l-4 border-l-pink">
                <h4 class="text-xs font-bold uppercase tracking-wider">
                  {{ card.title }}
                </h4>
                <p v-if="card.statementDetails" class="text-sm mt-2 font-medium">
                  {{ card.statementDetails }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </article>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center z-50 p-4 bg-dark/99"
      @click.self="closeModal"
    >
      <div class="relative w-full max-w-5xl flex flex-col items-center">
        <button
          @click="closeModal"
          class="absolute text-pink text-6xl right-0 hover:scale-110 font-bold hover:cursor-pointer z-10 transition-all"
        >
          &times;
        </button>

        <img
          v-if="modalImageSrc"
          :src="modalImageSrc"
          alt="Enlarged gallery view"
          class="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.solution-block,
.detail-card-item,
.gallery-section-wrap {
  will-change: transform, opacity;
}
</style>
