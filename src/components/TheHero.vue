<script setup>
import { computed, watch, ref } from 'vue'
import artistImg from '@/assets/images/hero-artist.png'
import builderImg from '@/assets/images/hero-builder.png'
import designerImg from '@/assets/images/hero-designer.png'
import developerImg from '@/assets/images/hero-developer.png'
import dreamerImg from '@/assets/images/hero-dreamer.png'
import photographerImg from '@/assets/images/hero-photographer.png'
import arrowDark from '@/assets/svgs/arrow-dark.svg'
import arrowLight from '@/assets/svgs/arrow-light.svg'

// Reactive Properties
const isDarkMode = ref(false)

// Computed Properties
const arrowIcon = computed(() => (isDarkMode.value ? arrowLight : arrowDark))

// Watchers
watch(isDarkMode, (val) => {
  const root = document.documentElement
  val ? root.classList.add('dark') : root.classList.remove('dark')
})
</script>

<template>
  <section class="font-headings mt-8 md:grid md:grid-cols-2 md:gap-4">
    <div class="place-content-center text-center">
      <h2 class="font-bold text-4xl mb-4 md:text-5xl lg:text-6xl">Hello, I'm Juan</h2>
      <p class="mb-2">
        I'm a <span class="font-bold text-pink">UX Designer</span> who also wears many other hats
        all focused on creating better user experiences.
      </p>
      <p>
        I strive to merge UX design, development, and visual story telling to create
        <span class="font-bold text-blue">meaningful experiences.</span>
      </p>
      <div class="hidden md:flex md:justify-around md:mt-8">
        <button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer">
          Contact Me
        </button>
        <button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer relative">
          See Work
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <figure>
        <img :src="designerImg" alt="" />
        <figcaption class="text-pink text-center font-bold md:text-xl">Designer</figcaption>
      </figure>
      <figure>
        <img :src="developerImg" alt="" />
        <figcaption class="text-blue text-center font-bold md:text-xl">Developer</figcaption>
      </figure>
      <figure>
        <img :src="builderImg" alt="" />
        <figcaption class="text-pink text-center font-bold md:text-xl">Builder</figcaption>
      </figure>
      <figure>
        <img :src="photographerImg" alt="" />
        <figcaption class="text-blue text-center font-bold md:text-xl">Photographer</figcaption>
      </figure>
      <figure>
        <img :src="artistImg" alt="" />
        <figcaption class="text-pink text-center font-bold md:text-xl">Creater</figcaption>
      </figure>
      <figure>
        <img :src="dreamerImg" alt="" />
        <figcaption class="text-blue text-center font-bold md:text-xl">Dreamer</figcaption>
      </figure>
    </div>
    <div class="flex justify-around mt-4 md:hidden">
      <button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer">
        Contact Me
      </button>
      <button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer relative">
        See Work
      </button>
    </div>
  </section>
</template>

<style scoped></style>
