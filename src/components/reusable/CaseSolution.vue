<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconPlus, IconX, IconHelpCircle } from '@tabler/icons-vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  id: String,
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
    required: false,
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
    default: 'Phase One',
  },
  afterTitle: {
    type: String,
    default: 'Phase Two',
  },
  hmwTitle: {
    type: String,
    default: 'Key Design Questions',
  },
  hmwIntro: {
    type: String,
    default: '',
  },
  hmwItems: {
    type: Array,
    default: () => [],
  },
})

// Feature items that have both copy and visual
const featureItems = computed(() => {
  const firstGroup = (props.beforeTabs || [])
    .filter((tab) => tab.heading)
    .map((tab) => ({ ...tab, groupLabel: props.beforeTitle }))

  const secondGroup = (props.afterTabs || [])
    .filter((tab) => tab.heading)
    .map((tab) => ({ ...tab, groupLabel: props.afterTitle }))

  return [...firstGroup, ...secondGroup]
})

// Extra standalone screenshots without headings (e.g., solution7, solution8, solution9)
const extraScreens = computed(() => {
  const all = [...(props.beforeTabs || []), ...(props.afterTabs || [])]
  return all.filter((tab) => !tab.heading && tab.image)
})

const solutionRoot = ref(null)
const activeFeatureIdx = ref(0)
const isModalOpen = ref(false)
const modalData = ref(null)

let ctx
let demoTimers = []
const hasRunDemo = ref(false)

const clearDemoTimers = () => {
  demoTimers.forEach((id) => clearTimeout(id))
  demoTimers = []
}

const selectTab = (idx) => {
  clearDemoTimers()
  activeFeatureIdx.value = idx
}

const runTabPreviewCycle = () => {
  const count = featureItems.value.length
  if (hasRunDemo.value || count <= 1) return
  hasRunDemo.value = true

  const stepMs = 260

  for (let i = 1; i <= count; i++) {
    const timerId = setTimeout(() => {
      activeFeatureIdx.value = i === count ? 0 : i
    }, i * stepMs)
    demoTimers.push(timerId)
  }
}

const openFeatureModal = (item) => {
  clearDemoTimers()
  modalData.value = {
    image: item.image,
    eyebrow: item.groupLabel || 'Solution Detail',
    title: item.heading || item.title || 'Screen Preview',
    subtitle: item.title || '',
    description: item.description || '',
  }
  isModalOpen.value = true
}

const openScreenModal = (imgSrc, index) => {
  clearDemoTimers()
  modalData.value = {
    image: imgSrc,
    eyebrow: 'Interface Preview',
    title: `Additional View 0${index + 1}`,
    subtitle: '',
    description: '',
  }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  modalData.value = null
}

onMounted(() => {
  ctx = gsap.context(() => {
    const blocks = gsap.utils.toArray('.solution-reveal')

    blocks.forEach((block) => {
      gsap.from(block, {
        y: 24,
        opacity: 0,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    // Quick one-time tab cycle when the System Breakdown enters view
    ScrollTrigger.create({
      trigger: '.solution-breakdown-wrap',
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const startDelay = setTimeout(() => {
          runTabPreviewCycle()
        }, 350)
        demoTimers.push(startDelay)
      },
    })
  }, solutionRoot.value)
})

onUnmounted(() => {
  clearDemoTimers()
  if (ctx) ctx.revert()
})
</script>

<template>
  <section
    :id="id || 'solution-section'"
    ref="solutionRoot"
    class="pt-20 md:pt-48 max-w-7xl mx-auto"
  >
    <!-- Part 1: Solution Narrative + Key Design Questions -->
    <div class="solution-reveal solution-top-grid">
      <div class="solution-main-col">
        <span class="solution-eyebrow">Execution & Architecture</span>
        <h2 class="solution-title">The Solution</h2>

        <div class="space-y-4 mt-5">
          <p class="solution-body-text">{{ introText }}</p>
          <p class="solution-body-text">{{ introText2 }}</p>
          <p v-if="introText3" class="solution-body-text opacity-90">{{ introText3 }}</p>
        </div>
      </div>

      <aside v-if="hmwItems && hmwItems.length" class="solution-aside-col">
        <div class="mb-1">
          <span class="solution-meta-label">{{ hmwTitle }}</span>
          <p v-if="hmwIntro" class="text-sm opacity-75">{{ hmwIntro }}</p>
        </div>

        <div v-for="(item, idx) in hmwItems" :key="idx" class="hmw-card">
          <div class="flex items-start gap-2.5 mb-2">
            <IconHelpCircle class="text-pink shrink-0 mt-0.5" :size="18" />
            <p class="hmw-question">{{ item.question }}</p>
          </div>
          <p class="hmw-response">{{ item.response }}</p>
        </div>
      </aside>
    </div>

    <!-- Part 2: Interactive Feature & UI Explorer -->
    <div v-if="featureItems.length" class="solution-reveal solution-breakdown-wrap mt-32">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span class="solution-meta-label">System Breakdown</span>
          <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight">
            Key Decisions & Interface
          </h3>
        </div>

        <!-- Pill Navigation -->
        <div class="solution-tab-bar" role="tablist">
          <button
            v-for="(item, idx) in featureItems"
            :key="idx"
            type="button"
            role="tab"
            :aria-selected="activeFeatureIdx === idx"
            @click="selectTab(idx)"
            class="solution-tab-btn"
            :class="{ 'is-active': activeFeatureIdx === idx }"
          >
            {{ item.title || item.heading }}
          </button>
        </div>
      </div>

      <!-- Active Feature Stage -->
      <div
        v-if="featureItems[activeFeatureIdx]"
        :key="activeFeatureIdx"
        class="solution-stage-grid"
      >
        <div class="solution-copy-col">
          <div class="flex items-center gap-3">
            <span class="solution-index-label">
              0{{ activeFeatureIdx + 1 }} / 0{{ featureItems.length }}
            </span>
            <span v-if="featureItems[activeFeatureIdx].groupLabel" class="solution-group-pill">
              {{ featureItems[activeFeatureIdx].groupLabel }}
            </span>
          </div>

          <h4 class="solution-feature-heading">
            {{ featureItems[activeFeatureIdx].heading }}
          </h4>

          <p class="text-base md:text-lg leading-relaxed opacity-90">
            {{ featureItems[activeFeatureIdx].description }}
          </p>

          <div v-if="featureItems[activeFeatureIdx].title" class="solution-pillar-callout">
            <span class="solution-pillar-label">Focus Area</span>
            <p class="solution-pillar-value">{{ featureItems[activeFeatureIdx].title }}</p>
          </div>
        </div>

        <div class="solution-media-col">
          <div
            v-if="featureItems[activeFeatureIdx].image"
            class="solution-img-wrapper group"
            @click="openFeatureModal(featureItems[activeFeatureIdx])"
          >
            <img
              :src="featureItems[activeFeatureIdx].image"
              :alt="featureItems[activeFeatureIdx].heading"
              class="solution-image-file"
            />
            <span class="solution-zoom-badge">
              <IconPlus :size="15" />
              <span>Inspect</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Part 3: Additional Screens Strip (if extra screenshots exist) -->
    <div v-if="extraScreens.length" class="solution-reveal mt-16">
      <span class="solution-meta-label mb-4">Additional Views</span>
      <div class="solution-extras-grid">
        <div
          v-for="(screen, idx) in extraScreens"
          :key="idx"
          class="solution-extra-card group"
          @click="openScreenModal(screen.image, idx)"
        >
          <img
            :src="screen.image"
            :alt="`Additional interface view ${idx + 1}`"
            class="solution-extra-img"
            loading="lazy"
          />
          <span class="solution-zoom-badge">
            <IconPlus :size="14" />
            <span>View</span>
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- 2-Column Light Solution Modal -->
  <div v-if="isModalOpen && modalData" class="solution-modal-backdrop" @click.self="closeModal">
    <div class="solution-modal-card" :class="modalData.description ? 'max-w-4xl' : 'max-w-3xl'">
      <button
        type="button"
        @click="closeModal"
        class="solution-modal-close"
        aria-label="Close preview"
      >
        <IconX :size="22" />
      </button>

      <div v-if="modalData.description" class="solution-modal-grid">
        <div class="solution-modal-media">
          <img
            :src="modalData.image"
            :alt="modalData.title"
            class="solution-modal-img"
            loading="lazy"
          />
        </div>

        <div class="solution-modal-copy">
          <span class="solution-eyebrow">{{ modalData.eyebrow }}</span>
          <h3 class="solution-feature-heading mb-4">{{ modalData.title }}</h3>

          <div v-if="modalData.subtitle" class="solution-pillar-callout mb-4">
            <span class="solution-pillar-label">Focus Area</span>
            <p class="solution-pillar-value">{{ modalData.subtitle }}</p>
          </div>

          <p class="text-sm md:text-base leading-relaxed opacity-90">
            {{ modalData.description }}
          </p>
        </div>
      </div>

      <div v-else class="flex flex-col items-center pt-4">
        <span class="solution-eyebrow mb-3">{{ modalData.eyebrow }}</span>
        <img
          :src="modalData.image"
          :alt="modalData.title"
          class="w-full max-h-[65vh] object-contain rounded-2xl"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.solution-reveal {
  will-change: transform, opacity;
}
</style>
