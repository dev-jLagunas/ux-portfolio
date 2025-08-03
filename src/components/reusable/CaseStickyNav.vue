<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

// Props
const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
})

// Reactive Properties
const activeSection = ref(null)

// Methods
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const yOffset = -80
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const updateActiveSection = () => {
  let closest = null
  let closestDistance = Infinity

  props.sections.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const distance = Math.abs(rect.top - 80)
      if (distance < closestDistance) {
        closest = section.id
        closestDistance = distance
      }
    }
  })

  activeSection.value = closest
}

// Lifecycle Hooks
onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <nav class="mt-8 mb-8 sticky top-5 z-50 bg-pink py-3 rounded-sm font-main">
    <ul
      class="grid grid-cols-3 w-full place-items-center gap-4 text-sm font-semibold md:grid-cols-6"
    >
      <li
        v-for="section in sections"
        :key="section.id"
        :class="[
          'cursor-pointer transition-colors duration-300',
          activeSection === section.id ? 'text-dark' : 'text-white',
        ]"
        @click="scrollToSection(section.id)"
      >
        {{ section.label }}
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  scroll-margin-top: 5rem;
}
</style>
