import { useRoute, useRouter } from 'vue-router'
import { nextTick, watch } from 'vue'

export function useScrollToSection() {
  const route = useRoute()
  const router = useRouter()

  const scrollToSection = async (sectionId) => {
    await nextTick() // Wait for DOM updates
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const goToSection = async (sectionId) => {
    if (route.name === 'home') {
      scrollToSection(sectionId)
    } else {
      // Create a temporary watcher to wait until the home view is rendered
      const unwatch = watch(
        () => route.name,
        async (newName) => {
          if (newName === 'home') {
            await scrollToSection(sectionId)
            unwatch() // Clean up watcher
          }
        },
      )

      // Push to home (this triggers the watcher above)
      router.push({ name: 'home' })
    }
  }

  return { goToSection }
}
