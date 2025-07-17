<script setup>
import { showContactModal } from '@/composables/useContactModal'
import { useRouter } from 'vue-router'

// Hero Images
import artistImg from '@/assets/images/hero-artist.webp'
import builderImg from '@/assets/images/hero-builder.webp'
import designerImg from '@/assets/images/hero-designer.webp'
import developerImg from '@/assets/images/hero-developer.webp'
import dreamerImg from '@/assets/images/hero-dreamer.webp'
import photographerImg from '@/assets/images/hero-photographer.webp'

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
        <button
          class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer"
          @click="openContactModal()"
        >
          Contact Me
        </button>
        <button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer">
          <a href="/Juan-Resume.pdf" download>Resume</a>
        </button>
        <button
          class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer relative"
          @click="navigateToWork"
        >
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
        <figcaption class="text-pink text-center font-bold md:text-xl">Architect</figcaption>
      </figure>
      <figure>
        <img :src="photographerImg" alt="" />
        <figcaption class="text-blue text-center font-bold md:text-xl">Photographer</figcaption>
      </figure>
      <figure>
        <img :src="artistImg" alt="" />
        <figcaption class="text-pink text-center font-bold md:text-xl">Artist</figcaption>
      </figure>
      <figure>
        <img :src="dreamerImg" alt="" />
        <figcaption class="text-blue text-center font-bold md:text-xl">Dreamer</figcaption>
      </figure>
    </div>
    <div class="flex justify-around mt-4 md:hidden">
      <button
        class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer"
        @click="openContactModal()"
      >
        Contact Me
      </button>
      <button class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer">
        <a href="/Juan-Resume.pdf" download>Resume</a>
      </button>
      <button
        class="nav-btn-styles hover:bg-pink hover:text-white hover:cursor-pointer relative"
        @click="navigateToWork"
      >
        See Work
      </button>
    </div>
  </section>
</template>

<style scoped></style>
