<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import ContactModal from '@/components/ContactModal.vue'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
import MobileFooter from './components/MobileFooter.vue'

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
  await router.isReady()
  isAppLoading.value = false
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleBackToTop)
})
</script>

<template>
  <div v-if="isAppLoading" class="fixed inset-0 z-50 flex flex-col items-center justify-center">
    <LoadingSpinner />
  </div>

  <div v-else>
    <TheNavbar />

    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <div v-if="Component" class="page-wrapper">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>

    <MobileFooter />
    <TheFooter class="hidden md:block" />
    <ContactModal />

    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="back-top-btn"
      aria-label="Back to top"
    >
      ↑
    </button>
  </div>
</template>

<style scoped></style>
