<script setup>
import TheHero from '@/components/TheHero.vue'
import HomeProjects from '@/components/HomeProjects.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import HomeFooter from '@/components/HomeFooter.vue'
</script>

<template>
  <TheHero />
  <ArrowTransition customClass="md:-mt-6  md:rotate-45 lg:-rotate-45 lg:-mt-24 lg:-ml-64" />
  <HomeProjects />
  <ArrowTransition customClass="md:mt-5 md:-rotate-45 lg:rotate-45 lg:-ml-50" />
  <HomeFooter />
</template>

<style scoped></style>
