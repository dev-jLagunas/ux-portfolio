<script setup>
import { ref, computed } from 'vue'
import { showContactModal } from '@/composables/useContactModal'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

// Svg Icons
import nameLogoDark from '@/assets/images/name_logo_sm.webp'
import nameLogoLight from '@/assets/images/name-logo-light.webp'
import hamburgerDarkIcon from '@/assets/svgs/hamburger-menu-dark.svg'
import hamburgerLightIcon from '@/assets/svgs/hamburger-menu-white.svg'
import userSvg from '@/assets/svgs/white-user.svg'
import workSvg from '@/assets/svgs/white-design-works.svg'
import personalSvg from '@/assets/svgs/personal-white.svg'
import blogWhiteSvg from '@/assets/svgs/blog-white.svg'

// Routing
const router = useRouter()
const route = useRoute()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
  isOpen.value = false
}

// Reactive Properties
const isOpen = ref(false)

const theme = useThemeStore()

// Computed Properties
const hamburgerIcon = computed(() => (theme.isDarkMode ? hamburgerLightIcon : hamburgerDarkIcon))
const nameLogo = computed(() => (theme.isDarkMode ? nameLogoLight : nameLogoDark))

// Methods
function toggleSidebar() {
  isOpen.value = !isOpen.value
}

function navigateAndClose(path) {
  isOpen.value = false
  router.push(path)
}

function openModal() {
  showContactModal.value = true
  isOpen.value = false
}
</script>

<template>
  <div class="mt-4 md:hidden font-main">
    <div class="flex-row-center gap-2">
      <img :src="nameLogo" alt="designer logo of Juan Lagunas" class="h-15 sm:h-20" />
      <router-link to="/" class="flex gap-1 text-3xl -ml-2 sm:text-4xl">
        <p><span class="pink-bold-letter">J</span>uan</p>
        <p><span class="blue-bold-letter">L</span>agunas</p>
      </router-link>
      <div class="relative group">
        <button @click="toggleSidebar" class="hover:cursor-pointer">
          <img :src="hamburgerIcon" alt="hamburger icon" class="h-12" />
        </button>
        <span class="menu-hover"> See menu </span>
      </div>
    </div>
    <aside
      :class="['sidebar', { open: isOpen }]"
      class="shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]"
    >
      <div class="flex-col-center h-full w-full">
        <ul class="text-light text-xl">
          <li
            class="nav-list-styles side-items"
            @click="navigateToWork"
            :class="{ underline: route.path === '/' }"
          >
            <img :src="workSvg" alt="Monitor design svg" class="h-7" />
            <p>Work</p>
          </li>
          <li
            class="nav-list-styles side-items"
            @click="navigateAndClose('/about')"
            :class="{ underline: route.path === '/about' }"
          >
            <img :src="userSvg" alt="user shaped svg" class="h-7" />
            <p>About</p>
          </li>
          <li
            class="nav-list-styles side-items"
            @click="navigateAndClose('/personal')"
            :class="{ underline: route.path === '/personal' }"
          >
            <img :src="personalSvg" alt="Mona lisa svg" class="h-7" />
            <p>Personal</p>
          </li>
          <li
            class="nav-list-styles side-items"
            @click="navigateAndClose('/blog')"
            :class="{ underline: route.path === '/blog' }"
          >
            <img :src="blogWhiteSvg" alt="cool smile face svg" class="h-7" />
            <p>Blog</p>
          </li>
          <div class="flex-col-center gap-2">
            <li>
              <button
                class="nav-btn-styles hover:text-pink hover:bg-light hover:cursor-pointer"
                @click="openModal"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                class="nav-btn-styles hover:bg-white hover:text-pink hover:cursor-pointer"
                @click="theme.toggleTheme()"
              >
                {{ theme.isDarkMode ? 'Lights On' : 'Lights Off' }}
              </button>
            </li>
          </div>
          <button class="side-close-btn" @click="toggleSidebar">X</button>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 80vw;
  height: 110vh;
  background-color: #e9404f;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 100;
}

.sidebar.open {
  transform: translateX(0);
}
</style>
