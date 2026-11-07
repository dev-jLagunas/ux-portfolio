<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconCircleCheck, IconTrendingUp, IconUsers, IconAward } from '@tabler/icons-vue'

gsap.registerPlugin(ScrollTrigger)

const iconComponents = [IconCircleCheck, IconTrendingUp, IconUsers, IconAward]

// Props
defineProps({
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
    required: true,
    validator: (arr) => arr.length === 4,
  },
})

const outcomeRoot = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    // 1. Subtle upward fade for the header
    gsap.from('.section-header-wrapper', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-header-wrapper',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    // 2. Staggered fade for the outcome cards
    gsap.from('.outcome-card', {
      y: 28,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.outcome-card-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, outcomeRoot.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section ref="outcomeRoot" id="outcome-section" class="w-fit mx-auto my-32">
    <div class="section-header-wrapper">
      <h3 class="section-title">The Outcome</h3>
      <div class="section-phase">Prototype - Test</div>
    </div>

    <article class="max-w-6xl">
      <p class="mb-4 leading-normal text-lg">
        {{ intro }}
      </p>

      <p class="mb-10 leading-normal text-lg">
        {{ context }}
      </p>

      <ul class="outcome-card-grid">
        <li v-for="(item, index) in outcomes" :key="index" class="outcome-card">
          <div class="outcome-icon-box">
            <component :is="iconComponents[index % iconComponents.length]" class="outcome-icon" />
          </div>
          <div class="outcome-content">
            <h5 class="outcome-card-title">{{ item.title }}</h5>
            <p class="outcome-card-desc">{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped>
.outcome-card {
  will-change: transform, opacity;
}
</style>
