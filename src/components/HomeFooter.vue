<script setup>
import LinkCard from '@/components/reusable/LinkCard.vue'
</script>

<template>
  <footer>
    <div class="font-headings text-center">
      <h1 class="text-8xl font-bold tracking-tight">
        <span class="font-bold text-pink">L</span>et's <span class="text-blue">G</span>et
        <span class="text-pink">T</span>o <span class="text-blue">W</span>ork!
      </h1>
    </div>
    <section class="flex flex-wrap justify-center gap-4">
      <LinkCard />
      <LinkCard />
      <LinkCard />
      <LinkCard />
    </section>
  </footer>
</template>

<style scoped></style>
