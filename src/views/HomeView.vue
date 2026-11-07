<script setup>
import TheHero from '@/components/TheHero.vue'
import HomeProjects from '@/components/HomeProjects.vue'
import HomeFooter from '@/components/HomePersonalLinks.vue'
import ProjectPromoToast from '@/components/reusable/ProjectPromoToast.vue'
</script>

<template>
  <div>
    <TheHero />
    <section id="case-studies" class="mt-8">
      <HomeProjects />
    </section>
    <HomeFooter class="my-32" />
    <ProjectPromoToast />
  </div>
</template>

<style scoped></style>
