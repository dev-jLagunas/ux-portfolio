<script setup>
import { useThemeStore } from '@/stores/theme'
import { watchEffect } from 'vue'

// Store
const theme = useThemeStore()

watchEffect(() => {
  console.log('Dark mode?', theme.isDark)
})
</script>

<template>
  <div
    :class="[
      'fixed inset-0 z-90 flex flex-col items-center justify-center',
      theme.isDarkMode ? 'bg-dark text-white' : 'bg-white text-dark',
    ]"
  >
    <div
      class="w-32 h-32 rounded-full animate-spin border-y-6 border-dashed border-pink border-t-transparent"
    ></div>
    <p class="mt-4 tracking-widest">LOADING...</p>
  </div>
</template>

<style scoped></style>
