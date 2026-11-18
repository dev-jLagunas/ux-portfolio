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
    gsap.from('.reflections-reveal', {
      y: 24,
      opacity: 0,
      duration: 0.65,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: reflectionsRoot.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    gsap.from('.reflection-item', {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.reflections-list',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
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
    class="pt-20 md:pt-28 max-w-7xl mx-auto"
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
.reflections-reveal,
.reflection-item {
  will-change: transform, opacity;
}
</style>
