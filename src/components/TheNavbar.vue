<script setup>
import { computed } from 'vue'
import { showContactModal } from '@/composables/useContactModal'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

// Svg Icons
import nameLogoDark from '@/assets/images/name_logo_sm.png'
import nameLogoLight from '@/assets/images/name-logo-light.png'
import userDarkSvg from '@/assets/svgs/dark-user.svg'
import workDarkSvg from '@/assets/svgs/dark-design-works.svg'
import personalDarkSvg from '@/assets/svgs/dark-artwork.svg'
import userWhiteSvg from '@/assets/svgs/white-user.svg'
import workWhiteSvg from '@/assets/svgs/white-design-works.svg'
import personalWhiteSvg from '@/assets/svgs/white-artwork.svg'

// Store
const theme = useThemeStore()

// Computed Properties
const workIcon = computed(() => (theme.isDarkMode ? workWhiteSvg : workDarkSvg))
const userIcon = computed(() => (theme.isDarkMode ? userWhiteSvg : userDarkSvg))
const personalIcon = computed(() => (theme.isDarkMode ? personalWhiteSvg : personalDarkSvg))
const nameLogo = computed(() => (theme.isDarkMode ? nameLogoLight : nameLogoDark))

// Methods
function openModal() {
  showContactModal.value = true
}

// Routing
const router = useRouter()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}
</script>

<template>
  <nav class="hidden font-headings px-2 md:flex md:mt-4 md:gap-8">
    <div class="flex items-center mr-8">
      <img :src="nameLogo" alt="designer logo" class="h-20" />
      <router-link class="flex items-start gap-1 text-2xl ml-2 lg:text-3xl" to="/">
        <p><span class="text-pink font-bold">J</span>uan</p>
        <p><span class="text-blue font-bold">L</span>agunas</p>
      </router-link>
    </div>
    <ul class="flex-row-center w-full">
      <li class="nav-list-styles hover:cursor-pointer" @click="navigateToWork">
        <img :src="workIcon" alt="Monitor design svg" class="h-7" />
        <p>Work</p>
      </li>
      <router-link to="/about"
        ><li class="nav-list-styles hover:cursor-pointer">
          <img :src="userIcon" alt="user shaped svg" class="h-7" />
          <p>About</p>
        </li></router-link
      >
      <router-link to="/personal">
        <li class="nav-list-styles hover:cursor-pointer">
          <img :src="personalIcon" alt="Mona lisa svg" class="h-7" />
          <p>Personal</p>
        </li></router-link
      >

      <div class="flex flex-col gap-2 items-center lg:flex-row">
        <li>
          <button
            class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer"
            @click="openModal"
          >
            Contact
          </button>
        </li>
        <li>
          <button
            class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer"
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
