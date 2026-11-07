<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

const titleRef = ref(null)
const linkWrapper = ref(null)
const quoteRef = ref(null)

let stInstances = []

onMounted(async () => {
  await nextTick()

  setTimeout(() => {
    // 1. Title slide-in + bounce animation
    if (titleRef.value) {
      const titleAnim = gsap.fromTo(
        titleRef.value,
        { x: -120 },
        {
          x: 0,
          duration: 1.1,
          ease: 'bounce.out',
          paused: true,
        },
      )

      const stTitle = ScrollTrigger.create({
        trigger: titleRef.value,
        start: 'top 85%',
        toggleActions: 'play none none reset',
        onEnter: () => titleAnim.play(),
        onEnterBack: () => titleAnim.play(),
      })

      stInstances.push(stTitle)
    }

    // 2. Link cards grid animation
    if (linkWrapper.value) {
      const cards = linkWrapper.value.children

      const cardsAnim = gsap.fromTo(
        cards,
        {
          scale: 0.7,
          y: 40,
          rotation: -3,
        },
        {
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 0.6,
          stagger: {
            amount: 0.5,
            grid: 'auto',
            from: 'start',
          },
          ease: 'back.out(1.7)',
          paused: true,
        },
      )

      const stCards = ScrollTrigger.create({
        trigger: linkWrapper.value,
        start: 'top 85%',
        toggleActions: 'play none none reset',
        onEnter: () => cardsAnim.play(),
        onEnterBack: () => cardsAnim.play(),
      })

      stInstances.push(stCards)
    }

    // 3. Bottom quote animation
    if (quoteRef.value) {
      const quoteAnim = gsap.fromTo(
        quoteRef.value,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          paused: true,
        },
      )

      const stQuote = ScrollTrigger.create({
        trigger: quoteRef.value,
        start: 'top 90%',
        toggleActions: 'play none none reset',
        onEnter: () => quoteAnim.play(),
        onEnterBack: () => quoteAnim.play(),
      })

      stInstances.push(stQuote)
    }
  }, 2100)
})

onBeforeUnmount(() => {
  stInstances.forEach((st) => st.kill())
})
</script>

<template>
  <section class="mx-auto overflow-x-hidden">
    <div>
      <h1 ref="titleRef" class="section-title">Let's Get To Work!</h1>
    </div>

    <!-- Clean grid kept 100% intact -->
    <section ref="linkWrapper" class="link-card-wrapper">
      <LinkCard title="Resume" :icon="resumeIcon" url="/Juan-Resume.pdf" />
      <LinkCard
        title="LinkedIn"
        :icon="linkedInIcon"
        :url="'https://www.linkedin.com/in/juan-lagunas/'"
        loading="lazy"
      />
      <LinkCard
        title="YouTube"
        :icon="youtubeIcon"
        :url="'https://www.youtube.com/@JuanTriesJapanese'"
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

    <!-- Bottom Quote Placed Outside Grid -->
    <div
      ref="quoteRef"
      class="mt-28 mb-8 text-center flex flex-col items-center justify-center select-none"
    >
      <span class="text-pink text-3xl font-display leading-none">“</span>
      <p class="text-pink font-bold text-lg md:text-xl lg:text-3xl tracking-wide -mt-2">
        Thanks for stopping by. I am always looking to connect with others.
      </p>
      <span class="text-base uppercase tracking-widest text-copy/60 mt-2 font-medium">
        Looking forward to connecting
      </span>
    </div>
  </section>
</template>

<style scoped>
.link-card-wrapper > * {
  will-change: transform;
}
</style>
