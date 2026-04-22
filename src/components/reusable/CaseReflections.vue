<script setup>
import { IconBrain, IconBulb, IconHammer, IconCompass } from '@tabler/icons-vue'

defineProps({
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

// Mapping icons for consistent styling across the list
const iconComponents = [IconBrain, IconBulb, IconHammer, IconCompass]
</script>

<template>
  <section id="reflections-section" class="reflections-container">
    <div class="section-header-wrapper">
      <h3 class="section-title">My Reflections</h3>
      <div class="section-phase">Final Thoughts</div>
    </div>

    <article class="w-full">
      <p class="reflections-intro">
        {{ intro }}
      </p>

      <ul class="reflections-list">
        <li v-for="(item, index) in reflections" :key="index" class="reflection-item">
          <div class="reflection-header">
            <div class="reflection-icon-box">
              <component
                :is="iconComponents[index % iconComponents.length]"
                class="reflection-icon"
              />
            </div>
            <h5 class="reflection-title">{{ item.title }}</h5>
          </div>
          <p class="reflection-desc">{{ item.description }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped></style>
