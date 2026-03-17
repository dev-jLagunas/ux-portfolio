<script setup>
import LinkCard from '@/components/reusable/LinkCard.vue'

// Svg Icons
import instagramIcon from '@/assets/svgs/instagram-icon.svg'
import frontendIcon from '@/assets/svgs/frontend-icon.svg'
import resumeIcon from '@/assets/svgs/cv-icon.svg'
import githubIcon from '@/assets/svgs/github-icon.svg'
import linkedInIcon from '@/assets/svgs/linkedin-icon.svg'
import behanceIcon from '@/assets/svgs/behance-icon.svg'
import youtubeIcon from '@/assets/svgs/youtube-icon.svg'
import unsplashIcon from '@/assets/svgs/unsplash-icon.svg'
</script>

<template>
  <section class="max-w-7xl mx-auto">
    <div class="font-main text-center">
      <h1 class="text-6xl font-bold tracking-tight font-special">
        <span class="pink-bold-letter">L</span>et's <span class="blue-bold-letter">G</span>et
        <span class="pink-bold-letter">T</span>o <span class="blue-bold-letter">W</span>ork!
      </h1>
    </div>
    <section class="link-card-wrapper">
      <LinkCard title="Resume" :icon="resumeIcon" url="/Juan-Resume.pdf" />
      <LinkCard
        title="LinkedIn"
        :icon="linkedInIcon"
        class=""
        :url="'https://www.linkedin.com/in/juan-lagunas/'"
        loading="lazy"
      />
      <LinkCard
        title="YouTube"
        :icon="youtubeIcon"
        :url="'https://www.youtube.com/@LanguageSwitch-JM'"
        loading="lazy"
      />
      <LinkCard
        title="Instagram"
        :icon="instagramIcon"
        :url="'https://www.instagram.com/j.lag_works/'"
        loading="lazy"
      />

      <LinkCard
        title="Behance"
        :icon="behanceIcon"
        :url="'https://www.behance.net/juanlagunas87'"
        loading="lazy"
      />
      <LinkCard
        title="Frontend Mentor"
        :icon="frontendIcon"
        :url="'https://www.frontendmentor.io/profile/dev-jLagunas'"
        loading="lazy"
      />
      <LinkCard
        title="Github"
        :icon="githubIcon"
        class=""
        :url="'https://github.com/dev-jLagunas'"
        loading="lazy"
      />
      <LinkCard
        title="Unsplash"
        :icon="unsplashIcon"
        class="md:col-span-2 lg:col-span-1"
        :url="'https://unsplash.com/@jlag_photos'"
        loading="lazy"
      />
    </section>
  </section>
</template>

<style scoped></style>
