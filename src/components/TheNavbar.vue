<script setup>
import { ref, watch, computed } from 'vue'
import nameLogoDark from '@/assets/images/name_logo_sm.png'
import nameLogoLight from '@/assets/images/name-logo-light.png'
import userDarkSvg from '@/assets/svgs/dark-user.svg'
import workDarkSvg from '@/assets/svgs/dark-design-works.svg'
import personalDarkSvg from '@/assets/svgs/dark-artwork.svg'
import userWhiteSvg from '@/assets/svgs/white-user.svg'
import workWhiteSvg from '@/assets/svgs/white-design-works.svg'
import personalWhiteSvg from '@/assets/svgs/white-artwork.svg'

// Reactive Properties
const isDarkMode = ref(false)

// Computed Properties
const workIcon = computed(() => (isDarkMode.value ? workWhiteSvg : workDarkSvg))
const userIcon = computed(() => (isDarkMode.value ? userWhiteSvg : userDarkSvg))
const personalIcon = computed(() => (isDarkMode.value ? personalWhiteSvg : personalDarkSvg))
const nameLogo = computed(() => (isDarkMode.value ? nameLogoLight : nameLogoDark))

// Watchers
watch(isDarkMode, (val) => {
  const root = document.documentElement
  val ? root.classList.add('dark') : root.classList.remove('dark')
})
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
      <router-link to="/work"
        ><li class="nav-list-styles hover:cursor-pointer">
          <img :src="workIcon" alt="Monitor design svg" class="h-7" />
          <p>Work</p>
        </li></router-link
      >
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
          <router-link to="/contact"
            ><button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer">
              Contact
            </button></router-link
          >
        </li>
        <li>
          <button
            class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer"
            @click="isDarkMode = !isDarkMode"
          >
            Lights Off
          </button>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped></style>
