<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { IconPlus, IconX, IconQuote } from '@tabler/icons-vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isModalOpen = ref(false)
const activeArtifactIdx = ref(0)
const sectionRef = ref(null)

let ctx

const openModal = (idx) => {
  activeArtifactIdx.value = idx
  isModalOpen.value = true
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const blocks = gsap.utils.toArray('.problem-reveal')

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
  }, sectionRef.value)
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
  <section :id="id || 'problem-section'" ref="sectionRef" class="pt-20 md:pt-28 max-w-7xl mx-auto">
    <!-- Part 1: Problem Framing + Anchor Quote & Key Takeaway -->
    <div class="problem-reveal problem-top-grid">
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
      class="problem-reveal mt-16"
    >
      <div class="max-w-7xl mb-8">
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
    <div v-if="artifacts && artifacts.length" class="problem-reveal mt-32">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
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
            @click="activeArtifactIdx = idx"
            class="artifact-tab-btn"
            :class="{ 'is-active': activeArtifactIdx === idx }"
          >
            {{ artifact.caption }}
          </button>
        </div>
      </div>

      <div v-if="artifacts[activeArtifactIdx]" :key="activeArtifactIdx" class="artifact-stage-grid">
        <div class="artifact-copy-col">
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

        <div class="artifact-media-col">
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
.problem-reveal {
  will-change: transform, opacity;
}
</style>
