<script setup>
import { ref, watch, computed } from 'vue'
import { showContactModal } from '@/composables/useContactModal'
import { useRouter } from 'vue-router'
import { useScrollToSection } from '@/composables/useScrollToSection.js'

import nameLogoDark from '@/assets/images/name_logo_sm.png'
import nameLogoLight from '@/assets/images/name-logo-light.png'
import hamburgerDarkIcon from '@/assets/svgs/hamburger-menu-dark.svg'
import hamburgerLightIcon from '@/assets/svgs/hamburger-menu-white.svg'
import userSvg from '@/assets/svgs/white-user.svg'
import workSvg from '@/assets/svgs/white-design-works.svg'
import personalSvg from '@/assets/svgs/white-artwork.svg'

const router = useRouter()

const { goToSection } = useScrollToSection()

function navigateToWork() {
  goToSection('case-studies')
  isOpen.value = false
}

// Reactive Properties
const isOpen = ref(false)
const isDarkMode = ref(false)

// Computed Properties
const hamburgerIcon = computed(() => (isDarkMode.value ? hamburgerLightIcon : hamburgerDarkIcon))
const nameLogo = computed(() => (isDarkMode.value ? nameLogoLight : nameLogoDark))

// Methods
function toggleSidebar() {
  isOpen.value = !isOpen.value
}

function navigateAndClose(path) {
  isOpen.value = false
  router.push(path)
}

// Watchers
watch(isDarkMode, (val) => {
  const root = document.documentElement
  val ? root.classList.add('dark') : root.classList.remove('dark')
})

// Methods
function openModal() {
  showContactModal.value = true
  isOpen.value = false
}
</script>

<template>
  <div class="mt-4 md:hidden font-headings">
    <div class="flex-row-center gap-2">
      <img :src="nameLogo" alt="designer logo" class="h-20" />
      <router-link to="/" class="flex gap-1 text-3xl -ml-2">
        <p><span class="text-pink font-bold">J</span>uan</p>
        <p><span class="text-blue font-bold">L</span>agunas</p>
      </router-link>
      <div class="relative group">
        <button @click="toggleSidebar" class="hover:cursor-pointer">
          <img :src="hamburgerIcon" alt="hamburger icon" class="h-12" />
        </button>
        <span
          class="absolute -translate-x-1/2 top-full text-sm bg-pink text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50"
        >
          See menu
        </span>
      </div>
    </div>
    <aside :class="['sidebar', { open: isOpen }]">
      <div class="flex-col-center h-full w-full">
        <ul class="text-white text-xl">
          <li class="nav-list-styles mb-4 hover:cursor-pointer" @click="navigateToWork">
            <img :src="workSvg" alt="Monitor design svg" class="h-7" />
            <p>Work</p>
          </li>
          <li class="nav-list-styles mb-4 hover:cursor-pointer" @click="navigateAndClose('/about')">
            <img :src="userSvg" alt="user shaped svg" class="h-7" />
            <p>About</p>
          </li>
          <li
            class="nav-list-styles mb-4 hover:cursor-pointer"
            @click="navigateAndClose('/personal')"
          >
            <img :src="personalSvg" alt="Mona lisa svg" class="h-7" />
            <p>Personal</p>
          </li>
          <div class="flex-col-center gap-2">
            <li>
              <button
                class="nav-btn-styles hover:bg-white hover:text-pink hover:cursor-pointer"
                @click="openModal"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                class="nav-btn-styles hover:bg-white hover:text-pink hover:cursor-pointer"
                @click="isDarkMode = !isDarkMode"
              >
                Lights Off
              </button>
            </li>
          </div>
          <button
            class="mt-4 text-4xl w-full hover:rotate-180 transition-all duration-300 hover:cursor-pointer"
            @click="toggleSidebar"
          >
            X
          </button>
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
  height: 100vh;
  background-color: #fe6567;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 100;
}

.sidebar.open {
  transform: translateX(0);
}
</style>
