<script setup>
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
import StorySection from '@/components/reusable/StorySection.vue'

// Spinner Logic
const { isLoading } = usePageLoader(2000)
const spinnerMessage = 'Hang tight!'
</script>

<template>
  <LoadingSpinner v-if="isLoading" :message="spinnerMessage" />
  <div class="font-main">
    <h2 class="text-center mt-12 font-bold text-5xl font-main mb-8">Who am I?</h2>
    <StorySection />
    <!-- New Skills Section -->
    <section class="mt-8">
      <h2 class="text-center font-bold text-4xl font-main mb-8">Skills</h2>

      <!-- Skills list -->
      <div class="grid grid-cols-1 md:grid-cols-2 md:place-items-center gap-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4">Core Strengths</h3>
          <ul class="space-y-1">
            <li>Interaction Design</li>
            <li>User Research & Usability Testing</li>
            <li>Wireframing & Prototyping</li>
            <li>Information Architecture</li>
            <li>Design Systems</li>
            <li>Visual Design & Typography</li>
          </ul>
        </div>

        <div>
          <h3 class="text-2xl font-semibold mb-4">Technologies & Tools</h3>
          <ul class="space-y-1">
            <li>Vue.js / Angular / JavaScript / HTML / CSS</li>
            <li>Tailwind CSS</li>
            <li>Figma / Canva</li>
            <li>Adobe Photoshop / Illustrator</li>
            <li>Constant Contact / Mailchimp</li>
            <li>Notion / Trello</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
