<script setup>
import { IconCircleCheck, IconTrendingUp, IconUsers, IconAward } from '@tabler/icons-vue'

const iconComponents = [IconCircleCheck, IconTrendingUp, IconUsers, IconAward]
//Props
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
</script>

<template>
  <section id="outcome-section" class="w-full my-32">
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

<style scoped></style>
