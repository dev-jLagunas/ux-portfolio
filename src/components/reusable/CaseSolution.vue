<script setup>
import TabGroup from '@/components/reusable/TabGroup.vue'
import { IconTarget, IconRoute, IconStack2 } from '@tabler/icons-vue'

//Props
defineProps({
  introText: {
    type: String,
    required: true,
  },
  introText2: {
    type: String,
    required: true,
  },
  introText3: {
    type: String,
    required: true,
  },
  beforeTabs: {
    type: Array,
    required: true,
  },
  afterTabs: {
    type: Array,
    required: true,
  },
  beforeTitle: {
    type: String,
    default: 'Before',
  },
  afterTitle: {
    type: String,
    default: 'After',
  },
  // New HMW props
  hmwTitle: { type: String, default: 'How Might We' },
  hmwIntro: { type: String, default: '' },
  // [{ question: string, response: string, icon?: string }]
  hmwItems: { type: Array, default: () => [] },
})
</script>

<template>
  <section id="the-solution">
    <div class="section-header-wrapper">
      <h3 class="section-title">The Solution</h3>
      <div class="section-phase">Ideate – Prototype</div>
    </div>
    <article class="">
      <div class="solution-intro-grid">
        <div class="solution-block">
          <div class="solution-icon-wrapper">
            <IconTarget class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title">The Vision</h4>
            <p class="solution-text">{{ introText }}</p>
          </div>
        </div>

        <div class="solution-block">
          <div class="solution-icon-wrapper">
            <IconRoute class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title">The Strategy</h4>
            <p class="solution-text">{{ introText2 }}</p>
          </div>
        </div>

        <div class="solution-block">
          <div class="solution-icon-wrapper">
            <IconStack2 class="solution-icon" />
          </div>
          <div class="solution-content">
            <h4 class="solution-block-title">The Blueprint</h4>
            <p class="solution-text">{{ introText3 }}</p>
          </div>
        </div>
      </div>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TabGroup :tabs="beforeTabs" :title="beforeTitle" />
        <TabGroup :tabs="afterTabs" :title="afterTitle" />
      </section>
    </article>
  </section>
</template>

<style scoped></style>
