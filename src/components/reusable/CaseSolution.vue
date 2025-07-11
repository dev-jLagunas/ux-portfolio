<script setup>
import TabGroup from '@/components/reusable/TabGroup.vue'

//Props
const props = defineProps({
  introText: {
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
})
</script>

<template>
  <section id="the-solution">
    <div class="mt-4 mb-2 flex items-center justify-between w-full">
      <h3 class="font-bold text-2xl">The Solution</h3>
      <p class="text-sm tracking-wider">Ideate – Prototype</p>
    </div>

    <article>
      <p class="mb-6">{{ introText }}</p>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TabGroup :tabs="beforeTabs" :title="beforeTitle" />
        <TabGroup :tabs="afterTabs" :title="afterTitle" />
      </section>
    </article>
  </section>
</template>

<style scoped></style>
