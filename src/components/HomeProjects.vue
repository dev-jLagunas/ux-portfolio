<script setup>
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
</script>

<template>
  <ArrowTransition />
  <section class="font-headings">
    <header class="px-4">
      <h1 class="font-bold text-3xl text-center md:text-5xl">My UX Work</h1>
      <p class="my-2 text-center">
        A selection of real-world project that highlight my process, versatility, and impact ranging
        from internal systems to full product design.
      </p>
    </header>

    <div class="px-4 flex flex-col gap-6 mt-8 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </section>
</template>

<style scoped></style>
