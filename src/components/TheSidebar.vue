<script setup>
import { ref } from 'vue'
import nameLogo from '@/assets/images/name_logo_sm.png'
import hamburgerIcon from '@/assets/svgs/nav-hamburger-menu.svg'
import userSvg from '@/assets/svgs/side-user.svg'
import workSvg from '@/assets/svgs/side-design-works.svg'
import personalSvg from '@/assets/svgs/side-artwork.svg'

// Reactive Properties
const isOpen = ref(false)

// Methods
function toggleSidebar() {
  isOpen.value = !isOpen.value
}
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
              <button class="nav-btn-styles hover:bg-white hover:text-pink hover:cursor-pointer">
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
