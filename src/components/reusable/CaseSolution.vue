<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
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
const featureCopyRef = ref(null)
const featureMediaRef = ref(null)
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
  if (idx === activeFeatureIdx.value) return
  activeFeatureIdx.value = idx
}

// Smooth directional transition whenever the active feature tab changes
watch(activeFeatureIdx, async () => {
  await nextTick()
  if (!featureCopyRef.value) return

  const isDesktop = window.innerWidth >= 1024
  const targets = featureMediaRef.value
    ? [featureCopyRef.value, featureMediaRef.value]
    : [featureCopyRef.value]

  gsap.killTweensOf(targets)

  if (isDesktop) {
    gsap.fromTo(
      featureCopyRef.value,
      { x: -22, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.45, ease: 'power3.out', clearProps: 'transform' },
    )
    if (featureMediaRef.value) {
      gsap.fromTo(
        featureMediaRef.value,
        { x: 22, opacity: 0, scale: 0.98 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: 'power3.out',
          clearProps: 'transform',
        },
      )
    }
  } else {
    gsap.fromTo(
      targets,
      { y: 12, opacity: 0, scale: 0.985 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.38,
        stagger: 0.06,
        ease: 'power2.out',
        clearProps: 'transform',
      },
    )
  }
})

const runTabPreviewCycle = () => {
  const count = featureItems.value.length
  if (hasRunDemo.value || count <= 1) return
  hasRunDemo.value = true

  const stepMs = 340

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
    const mm = gsap.matchMedia()

    // Desktop: Directional 2-column choreography that re-triggers on scroll
    mm.add('(min-width: 1024px)', () => {
      // 1. Top Solution Split (Left slides from left, Aside slides from right)
      const topTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.solution-top-grid',
          start: 'top 84%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse',
        },
      })

      topTl
        .from('.solution-main-col', {
          x: -38,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
        })
        .from(
          '.solution-aside-col',
          {
            x: 38,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
          },
          '-=0.55',
        )
        .from(
          '.hmw-card',
          {
            y: 16,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
          },
          '-=0.45',
        )

      // 2. System Breakdown Stage (Header from bottom, Left copy from left, Right mockup from right)
      const breakdownTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.solution-breakdown-wrap',
          start: 'top 84%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse',
        },
      })

      breakdownTl
        .from('.solution-header-bar', {
          y: 22,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
        })
        .from(
          '.solution-copy-col',
          {
            x: -34,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.3',
        )
        .from(
          '.solution-media-col',
          {
            x: 34,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.6',
        )

      // 3. Additional Screens Strip (Staggered rise from bottom)
      if (extraScreens.value.length) {
        gsap.from('.solution-extra-card', {
          y: 26,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.solution-extras-wrap',
            start: 'top 86%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        })
      }
    })

    // Mobile & Tablet: Clean vertical reveals without horizontal overflow
    mm.add('(max-width: 1023px)', () => {
      const mobileBlocks = gsap.utils.toArray('.solution-mobile-reveal')

      mobileBlocks.forEach((block) => {
        gsap.from(block, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 88%',
            end: 'bottom 12%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    })

    // Quick one-time tab cycle when the System Breakdown enters view for the first time
    ScrollTrigger.create({
      trigger: '.solution-breakdown-wrap',
      start: 'top 78%',
      once: true,
      onEnter: () => {
        const startDelay = setTimeout(() => {
          runTabPreviewCycle()
        }, 550)
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
    class="pt-20 md:pt-48 max-w-7xl mx-auto overflow-x-clip"
  >
    <!-- Part 1: Solution Narrative + Key Design Questions -->
    <div class="solution-mobile-reveal solution-top-grid">
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
    <div v-if="featureItems.length" class="solution-mobile-reveal solution-breakdown-wrap mt-32">
      <div class="solution-header-bar flex flex-wrap items-center justify-between gap-4 mb-8">
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
      <div v-if="featureItems[activeFeatureIdx]" class="solution-stage-grid">
        <div ref="featureCopyRef" class="solution-copy-col">
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

        <div ref="featureMediaRef" class="solution-media-col">
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
    <div v-if="extraScreens.length" class="solution-mobile-reveal solution-extras-wrap mt-16">
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
.solution-main-col,
.solution-aside-col,
.hmw-card,
.solution-header-bar,
.solution-copy-col,
.solution-media-col,
.solution-extra-card,
.solution-mobile-reveal {
  will-change: transform, opacity;
}
</style>
