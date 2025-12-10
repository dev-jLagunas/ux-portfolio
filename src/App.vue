<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

import TheNavbar from './components/TheNavbar.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'
import ContactModal from '@/components/ContactModal.vue'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'

const showBackToTop = ref(false)

const isAppLoading = ref(true)

const router = useRouter()

const toggleBackToTop = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(async () => {
  window.addEventListener('scroll', toggleBackToTop, { passive: true })

  // Wait for router to be ready before showing content
  await router.isReady()
  isAppLoading.value = false
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleBackToTop)
})
</script>

<template>
  <div
    v-if="isAppLoading"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
  >
    <LoadingSpinner />
  </div>
  <div v-else>
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
      class="font-special fixed bottom-10 right-6 px-3 py-1 rounded-md z-50 border border-dotted transition opacity-75 hover:bg-gray-300/10 hover:opacity-100 hover:cursor-pointer duration-300 text-3xl"
    >
      &#8593;
    </button>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
