<script setup>
import TheHero from '@/components/TheHero.vue'
import HomeProjects from '@/components/HomeProjects.vue'
import HomeFooter from '@/components/HomePersonalLinks.vue'
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
const { isLoading } = usePageLoader(2000)

const spinnerMessage = 'One Moment Please...'
</script>

<template>
  <LoadingSpinner v-if="isLoading" :message="spinnerMessage" />

  <div>
    <TheHero />
    <section id="case-studies" class="my-24">
      <HomeProjects />
    </section>
    <HomeFooter class="my-32" />
  </div>
</template>

<style scoped></style>
