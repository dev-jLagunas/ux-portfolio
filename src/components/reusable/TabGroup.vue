<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
})

// Reactive
const activeTab = ref(0)
</script>

<template>
  <div class="w-full mt-8">
    <h3 v-if="title" class="text-xl font-semibold mb-4">{{ title }}</h3>

    <!-- Tab Buttons -->
    <div class="flex border-b border-gray-300 mb-6 space-x-2">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'py-2 px-4 text-sm font-medium focus:outline-none transition-all',
          activeTab === index
            ? 'border-b-2 border-blue-500 text-blue-600'
            : 'text-gray-500 hover:text-blue-600',
        ]"
      >
        {{ tab.title }}
      </button>
    </div>

    <!-- Tab Content -->
    <div v-if="tabs[activeTab]" class="text-center">
      <img
        :src="tabs[activeTab].image"
        alt=""
        class="mx-auto mb-4 rounded-md max-h-96 object-contain"
      />
      <h5 class="text-lg font-semibold mb-2">{{ tabs[activeTab].heading }}</h5>
      <p class="text-gray-600 text-sm leading-relaxed max-w-prose mx-auto">
        {{ tabs[activeTab].description }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
