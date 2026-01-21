<script setup>
import { computed } from 'vue'
import { showContactModal } from '@/composables/useContactModal'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

// Svg Icons
import nameLogoDark from '@/assets/images/name_logo_sm.webp'
import nameLogoLight from '@/assets/images/name-logo-light.webp'
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
  <nav class="nav-container-styles mx-auto max-w-7xl">
    <router-link class="" to="/"
      ><img :src="nameLogo" alt="Name logo of Juan Lagunas" class="h-20 lg:h-24" />
    </router-link>
    <ul class="flex items-center justify-between w-[80%] lg:w-[70%] xl:w-[60%]">
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
      <li>
        <ul class="flex gap-2">
          <li class="relative group">
            <button
              class="border px-3 py-1 rounded-sm hover:bg-blue hover:text-light duration-300 transition-all ease-linear hover:cursor-pointer"
              @click="openModal"
              aria-label="Contact"
            >
              <i class="fa-solid fa-envelope text-lg"></i>
            </button>

            <!-- Tooltip -->
            <span
              class="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-light text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
            >
              Contact
            </span>
          </li>

          <li class="relative group">
            <button
              class="border px-3 py-1 rounded-sm hover:bg-blue hover:text-light duration-300 transition-all ease-linear hover:cursor-pointer"
              @click="theme.toggleTheme()"
              aria-label="Toggle theme"
            >
              <i
                :class="theme.isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
                class="text-lg"
              ></i>
            </button>

            <!-- Tooltip -->
            <span
              class="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-light text-xs px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
            >
              Toggle theme
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
