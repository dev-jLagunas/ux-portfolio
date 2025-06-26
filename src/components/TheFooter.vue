<script setup>
import skaterIcon from '@/assets/svgs/skateboarding-icon.svg'
import { showContactModal } from '@/composables/useContactModal'

// Methods
function openContactModal() {
  showContactModal.value = true
}
</script>

<template>
  <footer class="bg-pink px-4 pt-4 font-headings rounded-t-md text-white relative">
    <img :src="skaterIcon" alt="" class="h-14 absolute -top-12 animate-skate" />
    <h3 class="font-bold text-center text-4xl">Thanks for stopping by!</h3>
    <p class="text-center text-xl">Let's build cool stuff together!</p>
    <p class="text-center mt-2 border w-max p-2 rounded-md mx-auto hover:bg-white hover:text-pink">
      <a href="mailto:your@email.com" class="">juan.a.palomares@gmail.com</a>
    </p>

    <ul class="flex flex-wrap gap-4 justify-around mt-8">
      <router-link to="/about"><li class="hover:underline">About</li></router-link>
      <router-link to="/work"><li class="hover:underline">Work</li></router-link>
      <router-link to="/personal"><li class="hover:underline">Personal</li></router-link>
      <li><button class="hover:cursor-pointer" @click="openContactModal()">Contact</button></li>
    </ul>
    <div class="flex justify-between mt-8 pb-1 text-sm text-center">
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

/* .animate-skate {
  animation: skate 6s linear infinite;
} */
</style>
