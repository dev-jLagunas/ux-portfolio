<script setup>
import { useRouter } from 'vue-router'

import heroMainImg from '@/assets/images/hero-main-img-2.webp'
import arrow from '@/assets/images/curved-arrow.webp'

// Routing
const router = useRouter()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}
</script>

<template>
  <section class="hero-container md:grid md:grid-cols-2">
    <div class="transition-all duration-500 ease-in-out place-items-center md:place-content-center">
      <div class="xs:w-4/5 md:w-full">
        <h2 class="hero-title">Hello, I'm Juan</h2>
        <h2 class="hero-title text-pink">Hola, Soy Juan</h2>
        <h2 class="hero-title text-blue">ハロー、フアンです。</h2>

        <p class="mt-4 leading-5 text-lg sm:text-xl text-wrap lg:leading-7 2xl:text-2xl font-bold">
          Product Designer · UX · UI · Front-End · 3+ Years
        </p>
        <p class="leading-5 text-lg sm:text-xl lg:leading-7 2xl:text-2xl">
          Vue 3 · Nuxt · Tailwind CSS · Front-End Systems
        </p>
        <p class="leading-5 text-lg sm:text-xl lg:leading-7 2xl:text-2xl mt-2">
          I merge thoughtful product design with clean, engaging visual systems for international
          audiences, designing and building real products end to end.
        </p>

        <div class="mt-8 hidden md:block md:relative">
          <button
            class="nav-btn-styles hover:bg-blue hover:text-light duration-100 transition-all ease-linear relative"
            @click="navigateToWork"
          >
            See Work
          </button>
          <img :src="arrow" alt="" class="h-24 absolute top-4 left-24 rotate-15" />
        </div>
      </div>
    </div>
    <figure class="max-w-92 mx-auto md:max-w-125 lg:max-w-150">
      <img :src="heroMainImg" alt="img of Juan Lagunas" class="w-full h-full object-cover" />
    </figure>

    <div class="md:hidden w-fit mx-auto relative">
      <button
        class="nav-btn-styles hover:bg-blue hover:text-light duration-300 transition-all ease-linear relative"
        @click="navigateToWork"
      >
        See Work
      </button>
      <img :src="arrow" alt="" class="h-24 absolute top-4 left-24 rotate-15" />
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
