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
  <div class="">
    <h2 class="text-center mt-8 font-bold text-5xl font-main mb-8">Who am I?</h2>
    <StorySection />
  </div>
</template>

<style scoped></style>
