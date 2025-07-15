<script setup>
import LinkCard from '@/components/reusable/LinkCard.vue'

// Svg Icons
import instagramIcon from '@/assets/svgs/instagram-icon.svg'
import frontendIcon from '@/assets/svgs/frontend-icon.svg'
import portfolioIcon from '@/assets/svgs/portfolio-icon.svg'
import resumeIcon from '@/assets/svgs/resume-icon.svg'
import githubIcon from '@/assets/svgs/github-icon.svg'
import linkedInIcon from '@/assets/svgs/linkedin-icon.svg'
import behanceIcon from '@/assets/svgs/behance-icon.svg'
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
      <LinkCard title="My Resume" :icon="resumeIcon" url="/Juan-Resume.pdf" />
      <LinkCard
        title="My Instagram"
        :icon="instagramIcon"
        :url="'https://www.instagram.com/j.lag_works/'"
        loading="lazy"
      />

      <LinkCard
        title="My Dev Portfolio"
        :icon="portfolioIcon"
        :url="'https://dev-jlagunas.github.io/my-portfolio/#/'"
        loading="lazy"
      />
      <LinkCard
        title="My Behance"
        :icon="behanceIcon"
        :url="'https://www.behance.net/juanlagunas87'"
        loading="lazy"
      />
      <LinkCard
        title="My Frontend Mentor"
        :icon="frontendIcon"
        :url="'https://www.frontendmentor.io/profile/dev-jLagunas'"
        loading="lazy"
      />
      <LinkCard
        title="My LinkedIn"
        :icon="linkedInIcon"
        class="lg:col-span-2"
        :url="'https://www.linkedin.com/in/juan-lagunas/'"
        loading="lazy"
      />
      <LinkCard
        title="My Github"
        :icon="githubIcon"
        class="col-span-2 md:col-span-3 lg:col-span-1"
        :url="'https://github.com/dev-jLagunas'"
        loading="lazy"
      />
    </section>
  </footer>
</template>

<style scoped></style>
