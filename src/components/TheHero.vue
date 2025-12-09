<script setup>
import { showContactModal } from '@/composables/useContactModal'
import { useRouter } from 'vue-router'

import heroMainImg from '@/assets/images/hero-main-img-2.png'

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
  <section class="hero-container md:grid md:grid-cols-2">
    <div class="transition-all duration-500 ease-in-out md:place-content-center">
      <div class="">
        <h2 class="hero-title">Hello, I'm Juan</h2>
        <h2 class="hero-title text-pink">Hola, Soy Juan</h2>
        <h2 class="hero-title text-blue">ハロー、フアンです。</h2>

        <p class="my-4 leading-5 text-lg sm:text-xl text-wrap lg:leading-7 2xl:text-2xl">
          <span class="pink-bold-letter">UX</span> &
          <span class="blue-bold-letter">UI</span> designer crafting experiences that feel as good
          as they look.
        </p>
        <p class="leading-5 text-lg sm:text-xl lg:leading-7 2xl:text-2xl">
          I merge thoughtful product design with clean, engaging visual systems for international
          audiences.
        </p>
        <div class="hero-btn-wrapper-md">
          <button
            class="bg-pink text-light px-3 py-1 rounded-sm hover:cursor-pointer transition-all duration-300 hover:brightness-90"
            @click="openContactModal()"
          >
            Contact Me
          </button>
          <button
            class="nav-btn-styles hover:bg-blue hover:text-light duration-300 transition-all ease-linear"
          >
            <a href="/Juan-Resume.pdf" download>Resume</a>
          </button>
          <button
            class="nav-btn-styles hover:bg-blue hover:text-light duration-300 transition-all ease-linear relative"
            @click="navigateToWork"
          >
            See Work
          </button>
        </div>
      </div>
    </div>
    <figure class="">
      <img :src="heroMainImg" alt="img of Juan Lagunas" class="w-full h-full object-cover" />
    </figure>

    <div class="flex justify-around gap-2 md:hidden">
      <button
        class="bg-pink text-light px-3 py-1 rounded-sm hover:cursor-pointer transition-all duration-300 hover:brightness-90"
        @click="openContactModal()"
      >
        Contact Me
      </button>
      <button
        class="nav-btn-styles hover:bg-blue hover:text-light duration-300 transition-all ease-linear relative"
      >
        <a href="/Juan-Resume.pdf" download>Resume</a>
      </button>
      <button
        class="nav-btn-styles hover:bg-blue hover:text-light duration-300 transition-all ease-linear relative"
        @click="navigateToWork"
      >
        See Work
      </button>
    </div>
  </section>
</template>

<style scoped>
h2,
img {
  -webkit-mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%);
  mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%);
  -webkit-mask-size: 800%;
  mask-size: 900%;
  -webkit-mask-position: 0;
  mask-position: 0;
}

h2:hover,
img:hover {
  transition:
    mask-position 1s ease,
    -webkit-mask-position 1s ease;
  -webkit-mask-position: 120%;
  mask-position: 120%;
  opacity: 1;
}
</style>
