<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

// Store
const theme = useThemeStore()

// Computed Properties
const cafeVideo = computed(() => (theme.isDarkMode ? cafeVideoDark : cafeVideoLight))
//Components
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import CaseOutcome from '@/components/reusable/CaseOutcome.vue'
import CaseUxLens from '@/components/reusable/CaseUxLens.vue'
import CaseNav from '@/components/reusable/CaseStickyNav.vue'
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'
import CaseReflections from '@/components/reusable/CaseReflections.vue'
import divider from '@/assets/images/divider-img.png'

// Videos
import cafeVideoLight from '@/assets/images/cases/case-one/cafe-video-light.mp4'
import cafeVideoDark from '@/assets/images/cases/case-one/cafe-video-dark.mp4'
// Spinner Logic
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
const { isLoading } = usePageLoader(2000)
const spinnerMessage = 'Almost Ready!'
</script>

<template>
  <LoadingSpinner v-if="isLoading" :message="spinnerMessage" />
  <div class="font-main mb-28">
    <CaseNav
      :sections="[
        { id: 'overview-section', label: 'Overview' },
        { id: 'problem-section', label: 'Problem' },
        { id: 'solution-section', label: 'Solution' },
        { id: 'outcome-section', label: 'Outcome' },
        { id: 'reflections-section', label: 'Reflections' },
        { id: 'ux-section', label: 'UX Lens' },
      ]"
    />
    <CaseOverview
      id="overview-section"
      title="Project Overview"
      url="https://tdss.co.jp"
      workTitle="Tanaka Denki Website Redesign"
      :tags="[
        'UX Research',
        'Information Architecture',
        'Visual Design',
        'Front-End Development',
        'CMS Integration',
      ]"
      :imgSrc="coverImg"
      :paragraphs="[
        'Tanaka Denki Service is a solar maintenance company based in Ishikawa, Japan. Their existing WordPress site had not been updated in years and no longer reflected the professionalism or reliability of their business. The content was difficult to scan, visually outdated, and overwhelming for internal staff to maintain.',
        'I partnered with the company to redesign the entire website using Nuxt 4, Tailwind CSS, and a streamlined Contentful CMS. My focus was improving clarity, communication, and trust for their core audience, which includes universities, public institutions, and medium-sized businesses across the region. The result is a modern, mobile-first, and easy-to-maintain website that supports stronger communication and long-term business growth.',
      ]"
      role="UX Designer, UX Researcher, Developer"
      date="November – December 2025"
      toolkit="Figma, Nuxt 4, Tailwind CSS, Contentful, Netlify"
      pdfFile="case-study-6-tanaka.pdf"
    />
    <video
      :key="theme.isDarkMode"
      autoplay
      loop
      muted
      playsinline
      preload="none"
      width="700"
      height="600"
      class="mx-auto mt-16 w-full max-w-[800px]"
    >
      <source :src="cafeVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
  </div>
</template>

<style scoped></style>
