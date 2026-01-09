<script setup>
import { useRouter } from 'vue-router'
import { showContactModal } from '@/composables/useContactModal'
import skaterIcon from '@/assets/svgs/skateboarding-icon.svg'

// Routing
const router = useRouter()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}

// Methods
function openContactModal() {
  showContactModal.value = true
}
</script>

<template>
  <footer class="bg-pink px-4 pt-4 font-main rounded-t-md text-white relative mt-36">
    <img :src="skaterIcon" alt="" class="h-14 absolute -top-12 animate-skate" />
    <h3 class="font-bold text-center text-3xl md:text-5xl mt-4 font-special">
      Thanks for stopping by!
    </h3>
    <p class="text-center text-lg tracking-wider">Let's build cool stuff together!</p>

    <ul class="flex flex-wrap gap-6 justify-center mt-8">
      <router-link to="/about"><li class="hover:underline">About</li></router-link>
      <li>
        <button class="hover:underline hover:cursor-pointer" @click="navigateToWork">Work</button>
      </li>
      <router-link to="/personal"><li class="hover:underline">Personal</li></router-link>
      <li><button class="hover:cursor-pointer" @click="openContactModal()">Contact</button></li>
    </ul>
    <div class="flex justify-between mt-8 pb-1 text-xs text-center opacity-50">
      <p class="">
        Built with Vue & Tailwind · Icons from
        <a href="https://www.svgrepo.com/" class="underline">SVGRepo</a>
      </p>
      <p class="">© 2025 @dev-jLagunas · All rights reserved</p>
    </div>
  </footer>
</template>

<style scoped>
@keyframes skate {
  0% {
    left: -60px;
  }
  100% {
    left: calc(100% - 60px);
  }
}

.animate-skate {
  animation: skate 6s linear infinite;
}
</style>
