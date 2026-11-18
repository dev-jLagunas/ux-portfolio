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
    gsap.from('.outcome-reveal', {
      y: 24,
      opacity: 0,
      duration: 0.65,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: outcomeRoot.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    gsap.from('.outcome-card', {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
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
  <section
    :id="id || 'outcome-section'"
    ref="outcomeRoot"
    class="pt-20 md:pt-28 md:my-32 max-w-7xl mx-auto"
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
.outcome-reveal,
.outcome-card {
  will-change: transform, opacity;
}
</style>
