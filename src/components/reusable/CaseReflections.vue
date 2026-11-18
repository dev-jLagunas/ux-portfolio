<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IconBrain, IconBulb, IconHammer, IconCompass } from '@tabler/icons-vue'

gsap.registerPlugin(ScrollTrigger)

defineProps({
  id: String,
  intro: {
    type: String,
    required: true,
  },
  reflections: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((item) => item.title && item.description),
  },
})

const iconComponents = [IconBrain, IconBulb, IconHammer, IconCompass]

const reflectionsRoot = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    // Desktop: Directional 2-column & 2-column grid choreography triggered once on first view
    mm.add('(min-width: 1024px)', () => {
      // 1. Top Reflections Split (Title slides from left, Intro slides from right)
      const topTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.reflections-top-grid',
          start: 'top 84%',
          once: true,
        },
      })

      topTl
        .from('.reflections-main-col', {
          x: -36,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        })
        .from(
          '.reflections-intro-col',
          {
            x: 36,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          },
          '-=0.55',
        )

      // 2. Reflection Cards Grid (Left column cards from left, right column cards from right)
      const cards = gsap.utils.toArray('.reflection-item')

      gsap.from(cards, {
        x: (idx) => (idx % 2 === 0 ? -28 : 28),
        y: 16,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.reflections-list',
          start: 'top 84%',
          once: true,
        },
      })
    })

    // Mobile & Tablet: Clean vertical reveals triggered once on first view
    mm.add('(max-width: 1023px)', () => {
      gsap.from('.reflections-reveal', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.reflections-top-grid',
          start: 'top 88%',
          once: true,
        },
      })

      const mobileCards = gsap.utils.toArray('.reflection-item')
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
  }, reflectionsRoot.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>
<template>
  <section
    :id="id || 'reflections-section'"
    ref="reflectionsRoot"
    class="pt-20 md:pt-28 max-w-7xl mx-auto overflow-x-clip"
  >
    <!-- Top 2-Column Split -->
    <div class="reflections-reveal reflections-top-grid">
      <div class="reflections-main-col">
        <span class="reflections-eyebrow">Retrospective</span>
        <h2 class="reflections-title">My Reflections</h2>
      </div>

      <div class="reflections-intro-col">
        <p class="reflections-intro">{{ intro }}</p>
      </div>
    </div>

    <!-- 2-Column Reflection Cards Grid -->
    <ul class="reflections-list">
      <li v-for="(item, index) in reflections" :key="index" class="reflection-item">
        <div class="reflection-header">
          <div class="reflection-icon-box">
            <component
              :is="iconComponents[index % iconComponents.length]"
              class="reflection-icon"
            />
          </div>
          <span class="reflection-index">0{{ index + 1 }}</span>
        </div>

        <div class="reflection-content">
          <h3 class="reflection-title">{{ item.title }}</h3>
          <p class="reflection-desc">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.reflections-main-col,
.reflections-intro-col,
.reflections-reveal,
.reflection-item {
  will-change: transform, opacity;
}
</style>
