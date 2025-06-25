<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
})

const activeSection = ref(null)

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const yOffset = -80 // Adjust based on navbar height
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
      const distance = Math.abs(rect.top - 80) // offset matches yOffset above
      if (distance < closestDistance) {
        closest = section.id
        closestDistance = distance
      }
    }
  })

  activeSection.value = closest
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <nav class="mt-8 mb-4 sticky top-2 z-50 bg-white">
    <ul class="flex flex-wrap justify-between items-center px-2 py-3 text-sm font-semibold">
      <li
        v-for="section in sections"
        :key="section.id"
        :class="[
          'cursor-pointer transition-colors duration-300',
          activeSection === section.id ? 'text-pink' : 'text-blue',
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
