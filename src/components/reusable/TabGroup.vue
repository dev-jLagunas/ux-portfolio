<script setup>
import { ref } from 'vue'

// Props
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

// Reactive state
const activeTab = ref(0)
const showModal = ref(false)
const modalImage = ref(null)

// Modal handlers
function openModal() {
  const tab = props.tabs[activeTab.value]
  if (tab) {
    modalImage.value = tab
    showModal.value = true
  }
}

function closeModal() {
  showModal.value = false
  modalImage.value = null
}
</script>

<template>
  <div class="w-full mt-8">
    <h3 v-if="title" class="text-2xl font-semibold mb-4 text-center">{{ title }}</h3>

    <!-- Tab Buttons -->
    <div class="flex justify-around mb-6 space-x-2">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'py-2 px-4 text-sm focus:outline-none transition-all hover:cursor-pointer',
          activeTab === index ? 'border-b-4 border-b-pink' : 'text-gray-500 hover:text-pink',
        ]"
      >
        {{ tab.title }}
      </button>
    </div>

    <!-- Tab Content -->
    <div v-if="tabs[activeTab]">
      <img
        :src="tabs[activeTab].image"
        alt="screenshot of project"
        class="mx-auto mb-4 rounded-md object-contain cursor-pointer"
        @click="openModal"
      />
      <h5 class="text-lg font-semibold mb-2">{{ tabs[activeTab].heading }}</h5>
      <p class="mx-auto">
        {{ tabs[activeTab].description }}
      </p>
    </div>
  </div>

  <!-- Image Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/[var(--bg-opacity)] [--bg-opacity:80%] flex items-center justify-center z-50"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg max-w-4xl w-full mx-4 p-4 relative">
      <button
        @click="closeModal"
        class="absolute top-5 right-5 text-pink hover:scale-110 hover:font-bold hover:cursor-pointer text-xl"
      >
        X
      </button>

      <img
        v-if="modalImage?.image"
        :src="modalImage.image"
        alt="enlarged image of project screenshot"
        class="w-full rounded-md mb-4 object-contain max-h-[70vh]"
        loading="lazy"
      />
      <p v-if="modalImage?.description" class="text-sm text-dark">
        {{ modalImage.description }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
