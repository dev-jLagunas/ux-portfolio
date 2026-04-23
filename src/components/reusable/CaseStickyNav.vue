<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import gsap from 'gsap'
import { IconChevronDown, IconX } from '@tabler/icons-vue'

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
})

const activeSectionId = ref(null)
const isMenuOpen = ref(false)
const isButtonActive = ref(true)
let inactivityTimer = null
let observer = null

const openMenu = () => {
  isMenuOpen.value = true
}
const closeMenu = () => {
  isMenuOpen.value = false
}
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

function scrollToSection(id) {
  closeMenu()
  const target = document.getElementById(id)
  if (target) {
    const yOffset = -100
    const y = target.getBoundingClientRect().top + window.scrollY + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const resetInactivityTimer = () => {
  isButtonActive.value = true
  if (inactivityTimer) clearTimeout(inactivityTimer)
  inactivityTimer = setTimeout(() => {
    if (!isMenuOpen.value) isButtonActive.value = false
  }, 4000)
}

onMounted(() => {
  window.addEventListener('scroll', resetInactivityTimer)
  resetInactivityTimer()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSectionId.value = entry.target.id
      })
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
  )

  props.sections.forEach((section) => {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', resetInactivityTimer)
  if (inactivityTimer) clearTimeout(inactivityTimer)
  if (observer) observer.disconnect()
})

watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    gsap.fromTo(
      '.mobile-modal-item',
      { x: 10, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.05, duration: 0.3, ease: 'power2.out' },
    )
  }
})
</script>

<template>
  <div class="case-nav-system">
    <div class="mobile-nav-wrapper lg:hidden" @mouseenter="openMenu" @mouseleave="closeMenu">
      <button
        @click="toggleMenu"
        :class="['mobile-nav-toggle', { 'is-faded': !isButtonActive && !isMenuOpen }]"
      >
        <span class="font-bold uppercase">Scroll to</span>
        <IconChevronDown v-if="!isMenuOpen" :size="32" />
        <IconX v-else :size="32" />
      </button>

      <Transition name="pop">
        <div v-if="isMenuOpen" class="mobile-nav-card">
          <ul class="mobile-modal-list font-main">
            <li
              v-for="(section, index) in sections"
              :key="section.id"
              @click="scrollToSection(section.id)"
              class="mobile-modal-item hover:cursor-pointer"
              :class="{ 'is-active': activeSectionId === section.id }"
            >
              <div class="item-content">
                <span class="item-num">0{{ index + 1 }}</span>
                <span class="item-label">{{ section.label }}</span>
              </div>
              <div class="item-indicator"></div>
            </li>
          </ul>
        </div>
      </Transition>
    </div>

    <nav class="desktop-sidebar hidden lg:flex">
      <ul class="sidebar-list font-main">
        <li
          v-for="(section, index) in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          :class="[
            'sidebar-item hover:cursor-pointer',
            { 'is-active': activeSectionId === section.id },
          ]"
        >
          <div class="sidebar-indicator"></div>
          <div class="sidebar-content">
            <span class="sidebar-num">0{{ index + 1 }}</span>
            <span class="sidebar-label">{{ section.label }}</span>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: all 0.2s ease;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
