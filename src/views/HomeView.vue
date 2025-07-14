<script setup>
import TheHero from '@/components/TheHero.vue'
import HomeProjects from '@/components/HomeProjects.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
const { isLoading } = usePageLoader(2000)

const spinnerMessage = 'One Moment Please...'
</script>

<template>
  <LoadingSpinner v-if="isLoading" :message="spinnerMessage" />

  <div>
    <TheHero />
    <ArrowTransition customClass="mx-auto md:-rotate-12  lg:mx-60 lg:-mt-24" />
    <section id="case-studies">
      <HomeProjects />
    </section>
    <ArrowTransition customClass="scale-x-[-1] mx-auto my-8 md:rotate-12 " />
    <HomeFooter />
    <ArrowTransition customClass="mx-auto my-8 md:rotate-12 " />
  </div>
</template>

<style scoped></style>
