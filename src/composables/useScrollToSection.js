import { useRoute, useRouter } from 'vue-router'
import { nextTick } from 'vue'

export function useScrollToSection() {
  const route = useRoute()
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToSection = async (sectionId) => {
    if (route.name === 'home') {
      scrollToSection(sectionId)
    } else {
      await router.push({ name: 'home' })
      await nextTick()
      requestAnimationFrame(() => {
        scrollToSection(sectionId)
      })
    }
  }

  return { goToSection }
}
