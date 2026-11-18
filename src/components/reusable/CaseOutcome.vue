<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconCircleCheck, IconTrendingUp, IconUsers, IconAward } from '@tabler/icons-vue'

gsap.registerPlugin(ScrollTrigger)

const iconComponents = [IconCircleCheck, IconTrendingUp, IconUsers, IconAward]

defineProps({
  id: String,
  intro: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  outcomes: {
    type: Array,
    required: true,
    validator: (arr) => arr.length === 4 && arr.every((item) => item.title && item.description),
  },
  icons: {
    type: Array,
    required: false,
  },
})

const outcomeRoot = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    // Desktop: Directional 2-column & 2x2 grid choreography triggered once on first view
    mm.add('(min-width: 1024px)', () => {
      // 1. Top Outcome Split (Left slides from left, Context box slides from right)
      const topTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.outcome-top-grid',
          start: 'top 84%',
          once: true,
        },
      })

      topTl
        .from('.outcome-main-col', {
          x: -36,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        })
        .from(
          '.outcome-context-col',
          {
            x: 36,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          '-=0.55',
        )

      // 2. 2x2 Outcome Cards (Left column cards from left, right column cards from right)
      const cards = gsap.utils.toArray('.outcome-card')

      gsap.from(cards, {
        x: (idx) => (idx % 2 === 0 ? -28 : 28),
        y: 16,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.outcome-card-grid',
          start: 'top 84%',
          once: true,
        },
      })
    })

    // Mobile & Tablet: Clean vertical reveals triggered once on first view
    mm.add('(max-width: 1023px)', () => {
      gsap.from('.outcome-reveal', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.outcome-top-grid',
          start: 'top 88%',
          once: true,
        },
      })

      const mobileCards = gsap.utils.toArray('.outcome-card')
      mobileCards.forEach((card) => {
        gsap.from(card, {
          y: 22,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true,
          },
        })
      })
    })
  }, outcomeRoot.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
<template>
  <section
    :id="id || 'outcome-section'"
    ref="outcomeRoot"
    class="pt-20 md:pt-24 max-w-7xl mx-auto overflow-x-clip"
  >
    <!-- Top 2-Column Split -->
    <div class="outcome-reveal outcome-top-grid">
      <div class="outcome-main-col">
        <span class="outcome-eyebrow">Impact & Results</span>
        <h2 class="outcome-title">The Outcome</h2>
        <p class="outcome-body-text mt-4">{{ intro }}</p>
      </div>

      <div class="outcome-context-col">
        <div class="outcome-context-box">
          <span class="outcome-meta-label">Key Takeaways</span>
          <p class="outcome-context-text">{{ context }}</p>
        </div>
      </div>
    </div>

    <!-- 2x2 Outcome Cards Grid -->
    <ul class="outcome-card-grid">
      <li v-for="(item, index) in outcomes" :key="index" class="outcome-card">
        <div class="outcome-card-header">
          <div class="outcome-icon-box">
            <component :is="iconComponents[index % iconComponents.length]" class="outcome-icon" />
          </div>
          <span class="outcome-index">0{{ index + 1 }}</span>
        </div>

        <div class="outcome-content">
          <h3 class="outcome-card-title">{{ item.title }}</h3>
          <p class="outcome-card-desc">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.outcome-main-col,
.outcome-context-col,
.outcome-reveal,
.outcome-card {
  will-change: transform, opacity;
}
</style>
