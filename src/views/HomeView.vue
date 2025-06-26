<script setup>
import TheHero from '@/components/TheHero.vue'
import HomeProjects from '@/components/HomeProjects.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import HomeFooter from '@/components/HomeFooter.vue'
</script>

<template>
  <TheHero />
  <ArrowTransition customClass="mx-auto md:-rotate-12  lg:mx-60 lg:-mt-24" />
  <section id="case-studies">
    <HomeProjects />
  </section>
  <ArrowTransition customClass="scale-x-[-1] mx-auto my-8 md:rotate-12 " />
  <HomeFooter />
  <ArrowTransition customClass="mx-auto my-8 md:rotate-12 " />
</template>

<style scoped></style>
