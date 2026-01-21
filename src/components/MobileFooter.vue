<script setup>
import { ref } from 'vue'
import { showContactModal } from '@/composables/useContactModal'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

import personalSvg from '@/assets/svgs/personal-white.svg'
import blogWhiteSvg from '@/assets/svgs/blog-white.svg'

// Router / Store
const router = useRouter()
const route = useRoute()
const theme = useThemeStore()

// State
const isOpen = ref(false)

// Methods
function toggleSidebar() {
  isOpen.value = !isOpen.value
}

function navigate(path) {
  router.push(path)
  isOpen.value = false
}

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
  isOpen.value = false
}

function openModal() {
  showContactModal.value = true
  isOpen.value = false
}

const isActive = (path) => route.path === path
</script>

<template>
  <!-- Mobile Bottom Nav -->
  <nav
    class="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark border-t-2 border-t-pink font-main"
  >
    <ul class="flex justify-around items-center py-4 text-light">
      <!-- Work -->
      <li
        class="flex flex-col items-center gap-1 cursor-pointer"
        :class="{ 'text-pink': route.path === '/' }"
        @click="navigateToWork"
      >
        <i class="fa-solid fa-briefcase text-xl"></i>
        <span class="text-xs">Work</span>
      </li>

      <!-- About -->
      <li
        class="flex flex-col items-center gap-1 cursor-pointer"
        :class="{ 'text-pink': isActive('/about') }"
        @click="navigate('/about')"
      >
        <i class="fa-solid fa-user text-xl"></i>
        <span class="text-xs hover:text-blue">About</span>
      </li>

      <!-- Contact -->
      <li class="flex flex-col items-center gap-1 cursor-pointer" @click="openModal">
        <i class="fa-solid fa-envelope text-xl"></i>
        <span class="text-xs hover:text-blue">Contact</span>
      </li>

      <!-- More -->
      <li class="flex flex-col items-center gap-1 cursor-pointer" @click="toggleSidebar">
        <i class="fa-solid fa-bars text-xl"></i>
        <span class="text-xs hover:text-blue">More</span>
      </li>
    </ul>
  </nav>

  <!-- Progressive Disclosure Sidebar -->
  <aside
    :class="['sidebar', { open: isOpen }]"
    class="shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)]"
  >
    <div class="flex-col-center h-full w-full">
      <ul class="text-light text-xl gap-2 flex flex-col">
        <li
          class="nav-list-styles side-items"
          :class="{ underline: route.path === '/' }"
          @click="navigate('/')"
        >
          <i class="fa-solid fa-house text-xl"></i>
          <p>Home</p>
        </li>
        <li
          class="nav-list-styles side-items"
          :class="{ underline: route.path === '/personal' }"
          @click="navigate('/personal')"
        >
          <img :src="personalSvg" alt="" class="h-7" />
          <p>Personal</p>
        </li>

        <li
          class="nav-list-styles side-items"
          :class="{ underline: route.path === '/blog' }"
          @click="navigate('/blog')"
        >
          <img :src="blogWhiteSvg" alt="" class="h-7" />
          <p>Blog</p>
        </li>

        <li>
          <button
            class="nav-btn-styles hover:bg-white hover:text-pink"
            @click="theme.toggleTheme()"
          >
            {{ theme.isDarkMode ? 'Lights On' : 'Lights Off' }}
          </button>
        </li>

        <button class="side-close-btn" @click="toggleSidebar">X</button>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  background-color: #e9404f;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 60;
}

.sidebar.open {
  transform: translateX(0);
}
</style>
