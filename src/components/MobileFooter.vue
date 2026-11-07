<script setup>
import { ref } from 'vue'
import { showContactModal } from '@/composables/useContactModal'
import { useRouter, useRoute } from 'vue-router'

import personalSvg from '@/assets/svgs/personal-white.svg'
import blogWhiteSvg from '@/assets/svgs/blog-white.svg'

// Router
const router = useRouter()
const route = useRoute()

// State
const isOpen = ref(false)

// Methods
function toggleSidebar() {
  isOpen.value = !isOpen.value
}

function closeSidebar() {
  isOpen.value = false
}

function navigate(path) {
  router.push(path)
  closeSidebar()
}

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
  closeSidebar()
}

function openModal() {
  showContactModal.value = true
  closeSidebar()
}

const isActive = (path) => route.path === path
</script>

<template>
  <!-- Screen Backdrop / Blur -->
  <Transition name="backdrop">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-dark/40 backdrop-blur-sm lg:hidden transition-all duration-300"
      @click="closeSidebar"
      aria-hidden="true"
    ></div>
  </Transition>

  <!-- Mobile Bottom Nav -->
  <nav
    class="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-light border-t-2 border-dark/20 font-main shadow-sm"
  >
    <ul class="flex justify-around items-center py-4 text-copy">
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
        <div class="burger" :class="{ open: isOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
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

        <button class="side-close-btn" @click="closeSidebar" aria-label="Close menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
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

.backdrop-enter-active,
.backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

.burger {
  position: relative;
  width: 24px;
  height: 18px;
  cursor: pointer;
}

.burger.open {
  color: #e9404f;
}

.burger span {
  position: absolute;
  height: 3px;
  width: 100%;
  background: currentColor;
  border-radius: 6px;
  left: 0;
  transition: 0.25s ease-in-out;
}

.burger span:nth-child(1) {
  top: 0;
}

.burger span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.burger span:nth-child(3) {
  bottom: 0;
}

.burger.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 50%;
}

.burger.open span:nth-child(2) {
  opacity: 0;
}

.burger.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 50%;
}
</style>
