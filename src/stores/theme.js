import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)

  watch(
    isDarkMode,
    (val) => {
      const root = document.documentElement
      val ? root.classList.add('dark') : root.classList.remove('dark')
    },
    { immediate: true },
  )

  function toggleTheme() {
    isDarkMode.value = !isDarkMode.value
  }

  return { isDarkMode, toggleTheme }
})
