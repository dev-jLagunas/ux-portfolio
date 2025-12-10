<script setup>
import { computed } from 'vue'
import { showContactModal } from '@/composables/useContactModal'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

// Svg Icons
import nameLogoDark from '@/assets/images/name_logo_sm.png'
import nameLogoLight from '@/assets/images/name-logo-light.png'
import userDarkSvg from '@/assets/svgs/dark-user.svg'
import workDarkSvg from '@/assets/svgs/dark-design-works.svg'
import personalDarkSvg from '@/assets/svgs/personal-dark.svg'
import userWhiteSvg from '@/assets/svgs/white-user.svg'
import workWhiteSvg from '@/assets/svgs/white-design-works.svg'
import personalWhiteSvg from '@/assets/svgs/personal-white.svg'
import blogWhiteSvg from '@/assets/svgs/blog-white.svg'
import blogDarkSvg from '@/assets/svgs/blog-dark.svg'

// Store
const theme = useThemeStore()

// Computed Properties
const workIcon = computed(() => (theme.isDarkMode ? workWhiteSvg : workDarkSvg))
const userIcon = computed(() => (theme.isDarkMode ? userWhiteSvg : userDarkSvg))
const personalIcon = computed(() => (theme.isDarkMode ? personalWhiteSvg : personalDarkSvg))
const nameLogo = computed(() => (theme.isDarkMode ? nameLogoLight : nameLogoDark))
const blogIcon = computed(() => (theme.isDarkMode ? blogWhiteSvg : blogDarkSvg))

// Methods
function openModal() {
  showContactModal.value = true
}

// Routing
const router = useRouter()
const route = useRoute()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}
</script>

<template>
  <nav class="nav-container-styles">
    <div class="flex items-center mr-8">
      <img :src="nameLogo" alt="Name logo of Juan Lagunas" class="h-20" />
      <router-link class="flex items-start nav-name-wrapper" to="/">
        <p><span class="pink-bold-letter">J</span>uan</p>
        <p><span class="blue-bold-letter">L</span>agunas</p>
      </router-link>
    </div>
    <ul class="flex items-center justify-between w-[65%]">
      <li
        class="nav-list-styles hover:cursor-pointer underline-offset-4"
        @click="navigateToWork"
        :class="{ underline: route.path === '/' }"
      >
        <img :src="workIcon" alt="svg of a briefcase" class="h-6" />
        <p>Work</p>
      </li>
      <router-link to="/about" active-class="underline  underline-offset-4"
        ><li class="nav-list-styles hover:cursor-pointer">
          <img :src="userIcon" alt="svg of a name card" class="h-6" />
          <p>About</p>
        </li></router-link
      >
      <router-link to="/personal" active-class="underline underline-offset-4">
        <li class="nav-list-styles hover:cursor-pointer">
          <img :src="personalIcon" alt="svg of smiley face" class="h-6" />
          <p>Personal</p>
        </li></router-link
      >
      <router-link to="/blog" active-class="underline  underline-offset-4">
        <li class="nav-list-styles hover:cursor-pointer">
          <img :src="blogIcon" alt="Blog svg icon" class="h-6" />
          <p>Blog</p>
        </li></router-link
      >

      <div class="nav-btn-wrapper">
        <li>
          <button
            class="bg-pink text-light px-3 py-1 rounded-sm hover:cursor-pointer transition-all duration-300 hover:brightness-90"
            @click="openModal"
          >
            Contact
          </button>
        </li>
        <li>
          <button
            class="border px-3 py-1 rounded-sm hover:bg-blue hover:text-light duration-300 transition-all ease-linear hover:cursor-pointer"
            @click="theme.toggleTheme()"
          >
            {{ theme.isDarkMode ? 'Lights On' : 'Lights Off' }}
          </button>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped></style>
