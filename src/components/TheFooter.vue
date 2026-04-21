<script setup>
import { useRouter } from 'vue-router'
import { showContactModal } from '@/composables/useContactModal'

const router = useRouter()

const navigateToWork = () => {
  router.push({ name: 'home', hash: '#case-studies' })
}

const openContactModal = () => {
  showContactModal.value = true
}

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/juan-lagunas/' },
  { name: 'GitHub', url: 'https://github.com/dev-jLagunas' },
  { name: 'Behance', url: 'https://www.behance.net/juanlagunas87' },
  { name: 'Instagram', url: 'https://www.instagram.com/j.lag_works/' },
]

const externalPlatforms = [
  { name: 'YouTube', url: 'https://www.youtube.com/@LanguageSwitch-JM' },
  { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io/profile/dev-jLagunas' },
  { name: 'Unsplash', url: 'https://unsplash.com/@jlag_photos' },
]
</script>

<template>
  <footer class="mt-32 border-t border-gray-200 pt-16 pb-8 font-main px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div class="md:col-span-5 space-y-6">
          <h2 class="font-special text-4xl tracking-tighter uppercase leading-none">
            Let's build <br />
            <span class="text-pink">cool stuff</span> together.
          </h2>
          <p class="max-w-xs text-sm leading-relaxed opacity-80">
            Focused on creating clean, functional, and scalable digital products for international
            audiences.
          </p>
          <button @click="openContactModal" class="hero-cta-btn inline-block text-sm">
            Get In Touch
          </button>
        </div>

        <div class="md:col-span-3 space-y-4">
          <h4 class="font-bold text-[10px] uppercase tracking-[0.2em] text-blue">Navigation</h4>
          <ul class="space-y-2 text-sm font-bold uppercase tracking-widest">
            <li>
              <router-link to="/about" class="hover:text-pink transition-colors">About</router-link>
            </li>
            <li>
              <button
                @click="navigateToWork"
                class="hover:text-pink transition-colors hover:cursor-pointer uppercase"
              >
                Work
              </button>
            </li>
            <li>
              <router-link to="/personal" class="hover:text-pink transition-colors"
                >Personal</router-link
              >
            </li>
            <li>
              <router-link to="/blog" class="hover:text-pink transition-colors">Blog</router-link>
            </li>
            <li>
              <a href="/Juan-Resume.pdf" download class="hover:text-pink transition-colors"
                >[ Resume ]</a
              >
            </li>
          </ul>
        </div>

        <div class="md:col-span-4 grid grid-cols-2 gap-8">
          <div class="space-y-4">
            <h4 class="font-bold text-[10px] uppercase tracking-[0.2em] text-blue">Social</h4>
            <ul class="space-y-2 text-xs font-bold uppercase tracking-widest opacity-70">
              <li v-for="link in socialLinks" :key="link.name">
                <a :href="link.url" target="_blank" class="hover:text-pink transition-colors">{{
                  link.name
                }}</a>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-[10px] uppercase tracking-[0.2em] text-blue">Labs</h4>
            <ul class="space-y-2 text-xs font-bold uppercase tracking-widest opacity-70">
              <li v-for="link in externalPlatforms" :key="link.name">
                <a :href="link.url" target="_blank" class="hover:text-pink transition-colors">{{
                  link.name
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.1em] opacity-40"
      >
        <p>© 2026 @dev-jLagunas · Ishikawa, Japan</p>
        <div class="flex gap-6">
          <p>Built with Nuxt 4 & Tailwind</p>
          <a href="https://www.svgrepo.com/" target="_blank" class="hover:underline"
            >Icons from SVGRepo</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Removed skating animation to maintain technical focus */
</style>
