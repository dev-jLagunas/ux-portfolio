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
  <div class="font-main pt-8 pb-24 md:pb-0">
    <h2 class="text-center font-bold text-4xl font-special">About Me</h2>
    <a href="/Juan-Resume.pdf" download class="block text-center underline underline-offset-2 mb-4">
      Download Resume
    </a>
    <StorySection />
  </div>
</template>

<style scoped></style>
