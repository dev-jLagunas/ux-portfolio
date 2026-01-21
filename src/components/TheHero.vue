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
  <section class="hero-container md:grid md:grid-cols-2 hero-width mx-auto">
    <div class="transition-all duration-500 ease-in-out place-items-center md:place-content-center">
      <div class="md:w-full lg:ml-16 xl:ml-24">
        <h2 class="hero-title">Hello, I'm Juan.</h2>
        <h2 class="hero-title text-pink">Hola, Soy Juan.</h2>
        <h2 class="hero-title text-blue">ハロー、フアンです。</h2>

        <p class="mt-4 leading-5 text-lg sm:text-xl text-wrap lg:leading-7 2xl:text-2xl font-bold">
          Product Designer · UX · UI · Front-End · 3+ Years
        </p>
        <!-- <p class="leading-5 lg:leading-7">Vue 3 · Nuxt · Tailwind CSS · Front-End Systems</p> -->
        <p
          class="leading-5 xs:w-4/5 md:w-full text-lg sm:text-xl lg:leading-6 xl:leading-7 2xl:text-2xl mt-2 xl:pr-16"
        >
          I merge thoughtful product design with clean, engaging visual systems for international
          audiences, designing and building real products end to end.
        </p>

        <div class="mt-8 hidden md:block md:relative">
          <button class="hero-cta-btn" @click="navigateToWork">See Work</button>
        </div>
      </div>
    </div>
    <figure class="max-w-115 mx-auto md:max-w-150">
      <img :src="heroMainImg" alt="img of Juan Lagunas" class="w-full h-full object-cover" />
    </figure>

    <div class="md:hidden mt-4 w-fit mx-auto relative">
      <button
        class="bg-pink tracking-wider px-6 py-2 rounded-lg hover:cursor-pointer text-light duration-100 transition-all ease-linear hover:rounded-2xl relative"
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

.hero-width {
  max-width: 1500px;
}
</style>
