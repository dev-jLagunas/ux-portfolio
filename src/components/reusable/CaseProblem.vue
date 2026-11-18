<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { IconPlus, IconX, IconQuote } from '@tabler/icons-vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isModalOpen = ref(false)
const activeArtifactIdx = ref(0)
const sectionRef = ref(null)
const artifactCopyRef = ref(null)
const artifactMediaRef = ref(null)

let ctx
let demoTimers = []
const hasRunDemo = ref(false)

const clearDemoTimers = () => {
  demoTimers.forEach((id) => clearTimeout(id))
  demoTimers = []
}

const selectArtifactTab = (idx) => {
  clearDemoTimers()
  if (idx === activeArtifactIdx.value) return
  activeArtifactIdx.value = idx
}

// Smooth directional transition whenever the active artifact tab changes
watch(activeArtifactIdx, async () => {
  await nextTick()
  if (!artifactCopyRef.value || !artifactMediaRef.value) return

  const isDesktop = window.innerWidth >= 1024

  gsap.killTweensOf([artifactCopyRef.value, artifactMediaRef.value])

  if (isDesktop) {
    gsap.fromTo(
      artifactCopyRef.value,
      { x: -22, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.45, ease: 'power3.out', clearProps: 'transform' },
    )
    gsap.fromTo(
      artifactMediaRef.value,
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
  } else {
    gsap.fromTo(
      [artifactCopyRef.value, artifactMediaRef.value],
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

const runArtifactPreviewCycle = () => {
  const count = props.artifacts?.length || 0
  if (hasRunDemo.value || count <= 1) return
  hasRunDemo.value = true

  const stepMs = 340

  for (let i = 1; i <= count; i++) {
    const timerId = setTimeout(() => {
      activeArtifactIdx.value = i === count ? 0 : i
    }, i * stepMs)
    demoTimers.push(timerId)
  }
}

const openModal = (idx) => {
  clearDemoTimers()
  activeArtifactIdx.value = idx
  isModalOpen.value = true
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    // Desktop: Directional 2-column choreography triggered once on first view
    mm.add('(min-width: 1024px)', () => {
      // 1. Top Problem Split (Left slides from left, Aside slides from right)
      const topTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.problem-top-grid',
          start: 'top 84%',
          once: true,
        },
      })

      topTl
        .from('.problem-main-col', {
          x: -38,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        })
        .from(
          '.problem-aside-col',
          {
            x: 38,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          '-=0.55',
        )

      // 2. Research Intro + Staggered 3-Column Cards from bottom
      const researchTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.problem-research-wrap',
          start: 'top 84%',
          once: true,
        },
      })

      researchTl
        .from('.problem-research-intro', {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        })
        .from(
          '.research-row',
          {
            y: 28,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
          '-=0.35',
        )

      // 3. Research Artifacts Stage (Header from bottom, Left card from left, Right image from right)
      const artifactTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.artifact-section-wrap',
          start: 'top 84%',
          once: true,
        },
      })

      artifactTl
        .from('.artifact-header-bar', {
          y: 22,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        })
        .from(
          '.artifact-copy-col',
          {
            x: -34,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          '-=0.3',
        )
        .from(
          '.artifact-media-col',
          {
            x: 34,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          '-=0.6',
        )
    })

    // Mobile & Tablet: Clean vertical reveals triggered once on first view
    mm.add('(max-width: 1023px)', () => {
      const mobileBlocks = gsap.utils.toArray('.problem-mobile-reveal')

      mobileBlocks.forEach((block) => {
        gsap.from(block, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: block,
            start: 'top 88%',
            once: true,
          },
        })
      })
    })

    // Quick one-time tab cycle when Research Artifacts enters view for the first time
    ScrollTrigger.create({
      trigger: '.artifact-section-wrap',
      start: 'top 78%',
      once: true,
      onEnter: () => {
        const startDelay = setTimeout(() => {
          runArtifactPreviewCycle()
        }, 550)
        demoTimers.push(startDelay)
      },
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  clearDemoTimers()
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
  <section
    :id="id || 'problem-section'"
    ref="sectionRef"
    class="pt-20 md:pt-28 max-w-7xl mx-auto overflow-x-clip"
  >
    <!-- Part 1: Problem Framing + Anchor Quote & Key Takeaway -->
    <div class="problem-mobile-reveal problem-top-grid">
      <div class="problem-main-col">
        <span class="problem-eyebrow">Discovery & Friction</span>
        <h2 class="problem-title">The Problem</h2>

        <div class="space-y-4 mt-5">
          <p class="problem-body-text">{{ problemStatement }}</p>
          <p class="problem-body-text">{{ problemStatementB }}</p>
        </div>
      </div>

      <aside class="problem-aside-col">
        <div v-if="quote" class="problem-quote-box">
          <IconQuote class="text-pink shrink-0 mb-2" :size="20" />
          <blockquote class="problem-quote-text">“{{ quote }}”</blockquote>
        </div>

        <div v-if="takeaway" class="problem-takeaway-box">
          <span class="problem-meta-label">Core Takeaway</span>
          <p class="problem-takeaway-text">{{ takeaway }}</p>
        </div>
      </aside>
    </div>

    <!-- Part 2: Research Approach & Methods -->
    <div
      v-if="userResearchIntro || (researchMethods && researchMethods.length)"
      class="problem-mobile-reveal problem-research-wrap mt-16"
    >
      <div class="problem-research-intro max-w-7xl mb-8">
        <span class="problem-meta-label">Research & Validation</span>
        <p class="text-base md:text-lg leading-relaxed mt-2">
          {{ userResearchIntro }}
        </p>
      </div>

      <div v-if="researchMethods && researchMethods.length" class="research-insights-container">
        <article v-for="(method, idx) in researchMethods" :key="idx" class="research-row">
          <div class="research-row-icon">
            <img :src="method.imageSrc" :alt="method.caption" />
          </div>
          <div class="research-row-content">
            <h3 class="research-row-title">{{ method.caption }}</h3>
            <p class="research-row-desc">{{ method.description }}</p>
          </div>
        </article>
      </div>
    </div>

    <!-- Part 3: Tabbed Research Artifacts -->
    <div
      v-if="artifacts && artifacts.length"
      class="problem-mobile-reveal artifact-section-wrap mt-32"
    >
      <div class="artifact-header-bar flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <span class="problem-meta-label">Research Artifacts</span>
          <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight">
            User Insights & Mapping
          </h3>
        </div>

        <div class="artifact-tab-bar" role="tablist">
          <button
            v-for="(artifact, idx) in artifacts"
            :key="idx"
            type="button"
            role="tab"
            :aria-selected="activeArtifactIdx === idx"
            @click="selectArtifactTab(idx)"
            class="artifact-tab-btn"
            :class="{ 'is-active': activeArtifactIdx === idx }"
          >
            {{ artifact.caption }}
          </button>
        </div>
      </div>

      <div v-if="artifacts[activeArtifactIdx]" class="artifact-stage-grid">
        <div
          ref="artifactCopyRef"
          class="artifact-copy-col artifact-texture-wrap rounded-2xl p-6 md:p-8 relative overflow-hidden"
        >
          <div class="relative z-10 flex flex-col gap-4">
            <span class="artifact-index-label"
              >0{{ activeArtifactIdx + 1 }} / 0{{ artifacts.length }}</span
            >
            <h4 class="artifact-heading">{{ artifacts[activeArtifactIdx].caption }}</h4>

            <div v-if="artifacts[activeArtifactIdx].statementDetails" class="artifact-callout">
              <span class="artifact-callout-label">
                {{ artifacts[activeArtifactIdx].statement }}
              </span>
              <p class="artifact-callout-text">
                {{ artifacts[activeArtifactIdx].statementDetails }}
              </p>
            </div>

            <p
              v-if="artifacts[activeArtifactIdx].blurb"
              class="text-base md:text-lg leading-relaxed opacity-90"
            >
              {{ artifacts[activeArtifactIdx].blurb }}
            </p>
          </div>
        </div>

        <div ref="artifactMediaRef" class="artifact-media-col">
          <div class="editorial-img-wrapper group" @click="openModal(activeArtifactIdx)">
            <img
              :src="artifacts[activeArtifactIdx].imageSrc"
              :alt="artifacts[activeArtifactIdx].caption"
              class="artifact-image-file"
            />
            <span class="artifact-zoom-badge">
              <IconPlus :size="15" />
              <span>Inspect</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2-Column Light Artifact Modal -->
  <div v-if="isModalOpen" class="artifact-modal-backdrop" @click.self="isModalOpen = false">
    <div class="artifact-modal-card">
      <button
        type="button"
        @click="isModalOpen = false"
        class="artifact-modal-close"
        aria-label="Close preview"
      >
        <IconX :size="22" />
      </button>

      <div class="artifact-modal-grid">
        <div class="artifact-modal-media">
          <img
            :src="props.artifacts[activeArtifactIdx].imageSrc"
            :alt="props.artifacts[activeArtifactIdx].caption"
            class="artifact-modal-img"
            loading="lazy"
          />
        </div>

        <div class="artifact-modal-copy">
          <span class="problem-eyebrow">
            Artifact 0{{ activeArtifactIdx + 1 }} / 0{{ props.artifacts.length }}
          </span>
          <h3 class="artifact-heading mb-4">
            {{ props.artifacts[activeArtifactIdx].caption }}
          </h3>

          <div
            v-if="props.artifacts[activeArtifactIdx].statementDetails"
            class="artifact-callout mb-4"
          >
            <span class="artifact-callout-label">
              {{ props.artifacts[activeArtifactIdx].statement }}
            </span>
            <p class="artifact-callout-text">
              {{ props.artifacts[activeArtifactIdx].statementDetails }}
            </p>
          </div>

          <p class="text-sm md:text-base leading-relaxed opacity-90">
            {{ props.artifacts[activeArtifactIdx].blurb }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.problem-main-col,
.problem-aside-col,
.problem-research-intro,
.research-row,
.artifact-header-bar,
.artifact-copy-col,
.artifact-media-col,
.problem-mobile-reveal {
  will-change: transform, opacity;
}

.artifact-texture-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2 L30 16 L16 30 L2 16 Z' fill='none' stroke='%23000000' stroke-opacity='0.030' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 28px 28px;
  z-index: 0;
}

:global(.dark) .artifact-texture-wrap::before {
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2 L30 16 L16 30 L2 16 Z' fill='none' stroke='%23ffffff' stroke-opacity='0.045' stroke-width='1'/%3E%3C/svg%3E");
}
</style>
