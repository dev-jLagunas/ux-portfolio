<script setup>
import { ref, watch, computed } from 'vue'
import nameLogoDark from '@/assets/images/name_logo_sm.png'
import nameLogoLight from '@/assets/images/name-logo-light.png'
import hamburgerDarkIcon from '@/assets/svgs/hamburger-menu-dark.svg'
import hamburgerLightIcon from '@/assets/svgs/hamburger-menu-white.svg'
import userSvg from '@/assets/svgs/white-user.svg'
import workSvg from '@/assets/svgs/white-design-works.svg'
import personalSvg from '@/assets/svgs/white-artwork.svg'

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

// Watchers
watch(isDarkMode, (val) => {
  const root = document.documentElement
  val ? root.classList.add('dark') : root.classList.remove('dark')
})
</script>

<template>
  <div class="mt-4 md:hidden">
    <div class="flex-row-center">
      <img :src="nameLogo" alt="designer logo" class="h-20" />
      <div class="flex gap-1 text-3xl -ml-2">
        <p><span class="text-pink font-bold">J</span>uan</p>
        <p><span class="text-blue font-bold">L</span>agunas</p>
      </div>
      <button @click="toggleSidebar" class="hover:cursor-pointer">
        <img :src="hamburgerIcon" alt="hamburger icon" class="h-12" />
      </button>
    </div>
    <aside :class="['sidebar', { open: isOpen }]">
      <div class="flex-col-center h-full w-full">
        <ul class="text-white text-xl">
          <li class="nav-list-styles mb-4">
            <img :src="workSvg" alt="Monitor design svg" class="h-7" />
            <p>Work</p>
          </li>
          <li class="nav-list-styles mb-4">
            <img :src="userSvg" alt="user shaped svg" class="h-7" />
            <p>About</p>
          </li>
          <li class="nav-list-styles mb-4">
            <img :src="personalSvg" alt="Mona lisa svg" class="h-7" />
            <p>Personal</p>
          </li>
          <div class="flex-col-center gap-2">
            <li>
              <button class="nav-btn-styles hover:bg-white hover:text-pink hover:cursor-pointer">
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
