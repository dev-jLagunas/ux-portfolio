import { useRoute, useRouter } from 'vue-router'

export function useScrollToSection() {
  const route = useRoute()
  const router = useRouter()

  const scrollToSection = async (sectionId) => {
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
      setTimeout(() => scrollToSection(sectionId), 300)
    }
  }

  return { goToSection }
}
