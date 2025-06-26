import { useRoute, useRouter } from 'vue-router'

export function useScrollToSection() {
  const route = useRoute()
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const waitForSectionAndScroll = (sectionId, maxRetries = 20) => {
    let tries = 0

    const tryScroll = () => {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else if (tries < maxRetries) {
        tries++
        requestAnimationFrame(tryScroll)
      }
    }

    tryScroll()
  }

  const goToSection = async (sectionId) => {
    if (route.name === 'home') {
      waitForSectionAndScroll(sectionId)
    } else {
      await router.push({ name: 'home' })
      waitForSectionAndScroll(sectionId)
    }
  }

  return { goToSection }
}
