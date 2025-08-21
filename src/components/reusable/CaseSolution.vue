<script setup>
import TabGroup from '@/components/reusable/TabGroup.vue'

//Props
const props = defineProps({
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
    <div class="mt-4 mb-2 flex items-center justify-between w-full">
      <h3 class="font-bold text-2xl">The Solution</h3>
      <p class="tracking-wider text-blue font-semibold md:pr-4">Ideate – Prototype</p>
    </div>
    <article>
      <p class="mb-2">{{ introText }}</p>
      <p class="mb-2">{{ introText2 }}</p>
      <p class="mb-6">{{ introText3 }}</p>
      <section v-if="hmwItems.length" id="hmw-section" class="">
        <h3 class="text-xl font-semibold tracking-wide">{{ hmwTitle }}</h3>
        <p v-if="hmwIntro" class="mt-2">
          {{ hmwIntro }}
        </p>

        <ul class="mt-2 space-y-3">
          <li v-for="(item, i) in hmwItems" :key="i" class="flex gap-3">
            <img v-if="item.icon" :src="item.icon" alt="" class="h-5 w-5 mt-0.5" />
            <div>
              <p class="font-medium">{{ item.question }}</p>
              <p v-if="item.response" class="text-sm">
                Design response → <span class="italic">{{ item.response }}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TabGroup :tabs="beforeTabs" :title="beforeTitle" />
        <TabGroup :tabs="afterTabs" :title="afterTitle" />
      </section>
    </article>
  </section>
</template>

<style scoped></style>
