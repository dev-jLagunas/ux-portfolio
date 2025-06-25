<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'
import ContactModal from '@/components/ContactModal.vue'

const showBackToTop = ref(false)

const toggleBackToTop = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', toggleBackToTop, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleBackToTop)
})
</script>

<template>
  <TheNavbar />
  <TheSidebar />
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </router-view>
  <TheFooter />
  <ContactModal />
  <button
    v-show="showBackToTop"
    @click="scrollToTop"
    class="fixed bottom-10 right-6 px-3 rounded-md z-50 bg-blue text-white transition opacity-75 hover:opacity-100"
  >
    Back to Top
  </button>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 1s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
