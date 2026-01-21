<script setup>
import { useRouter } from 'vue-router'

import heroMainImg from '@/assets/images/hero-new-image.png'

// Routing
const router = useRouter()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}
</script>

<template>
  <header class="mt-8 max-w-7xl mx-auto">
    <section class="grid grid-cols-1 items-center place-items-center md:grid-cols-2">
      <article>
        <h2 class="hero-title">Hello, I'm Juan.</h2>
        <h2 class="hero-title text-pink lg:-mt-2">Hola, Soy Juan.</h2>
        <h2 class="hero-title text-blue lg:-mt-2">ハロー、フアンです。</h2>
        <p
          class="mt-4 leading-5 text-lg sm:text-xl lg:w-full lg:leading-7 2xl:text-2xl xs:w-3/4 font-bold"
        >
          Product Designer · UX/UI · Front-End · 3+ Years
        </p>
        <p
          class="leading-5 xs:w-3/4 md:w-full text-lg sm:text-xl lg:leading-6 xl:leading-7 2xl:text-2xl"
        >
          I merge thoughtful product design with clean, engaging visual systems for international
          audiences, designing and building real products end to end.
        </p>
        <div class="mt-8 hidden md:block md:relative">
          <button class="hero-cta-btn" @click="navigateToWork">See Work</button>
        </div>
      </article>
      <img :src="heroMainImg" alt="img of Juan Lagunas" class="sm:w-110 lg:w-full" />
    </section>
    <div class="md:hidden mt-4 w-fit mx-auto relative">
      <button
        class="bg-pink tracking-wider px-6 py-2 rounded-lg hover:cursor-pointer text-light duration-100 transition-all ease-linear hover:rounded-2xl relative"
        @click="navigateToWork"
      >
        See Work
      </button>
    </div>
  </header>
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
