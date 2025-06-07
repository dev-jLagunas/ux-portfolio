<script setup>
import LinkCard from '@/components/reusable/LinkCard.vue'
import instagramIcon from '@/assets/svgs/instagram-icon.svg'
import frontendIcon from '@/assets/svgs/frontend-icon.svg'
import portfolioIcon from '@/assets/svgs/portfolio-icon.svg'
import resumeIcon from '@/assets/svgs/resume-icon.svg'
import githubIcon from '@/assets/svgs/github-icon.svg'
import linkedInIcon from '@/assets/svgs/linkedin-icon.svg'
</script>

<template>
  <footer>
    <div class="font-headings text-center">
      <h1 class="text-8xl font-bold tracking-tight">
        <span class="font-bold text-pink">L</span>et's <span class="text-blue">G</span>et
        <span class="text-pink">T</span>o <span class="text-blue">W</span>ork!
      </h1>
    </div>
    <section class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <LinkCard title="My Instagram" :icon="instagramIcon" />
      <LinkCard title="My Dev Portfolio" :icon="portfolioIcon" />
      <LinkCard title="My Frontend Masters" :icon="frontendIcon" />
      <LinkCard title="My Resume" :icon="resumeIcon" />
      <LinkCard title="My LinkedIn" :icon="linkedInIcon" class="lg:col-span-2" />
      <LinkCard title="My Github" :icon="githubIcon" class="lg:col-span-2" />
    </section>
  </footer>
</template>

<style scoped></style>
