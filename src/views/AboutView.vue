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
  <div class="my-16">
    <h2 class="text-center mt-8 mb-20 font-bold text-5xl font-main">Who am I?</h2>
    <StorySection />
  </div>
</template>

<style scoped></style>
