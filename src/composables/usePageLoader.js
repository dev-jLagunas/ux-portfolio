import { ref, onMounted } from 'vue'

export function usePageLoader(delay = 1500) {
  const isLoading = ref(true)

  onMounted(() => {
    // Simulate loading time or image-heavy processing
    setTimeout(() => {
      isLoading.value = false
    }, delay)
  })

  return {
    isLoading,
  }
}
