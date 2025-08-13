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
  <section class="hero-container">
    <div class="place-content-center">
      <h2 class="hero-title">Hello, I'm Juan</h2>
      <p class="mb-2 sm:text-xl">
        I'm a <span class="pink-bold-letter">UX / UI Designer</span> who also wears many other hats
        all focused on creating better user experiences.
      </p>
      <p class="sm:text-xl">
        I strive to merge UX design, development, and visual story telling to create
        <span class="blue-bold-letter">meaningful experiences.</span>
      </p>
      <div class="hero-btn-wrapper-md">
        <button class="nav-btn-styles hover-btn-styles" @click="openContactModal()">
          Contact Me
        </button>
        <button class="nav-btn-styles hover-btn-styles">
          <a href="/Juan-Resume.pdf" download>Resume</a>
        </button>
        <button class="nav-btn-styles hover-btn-styles relative" @click="navigateToWork">
          See Work
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2">
      <figure>
        <img :src="designerImg" alt="" />
        <figcaption class="img-caption-pink">Designer</figcaption>
      </figure>
      <figure>
        <img :src="developerImg" alt="" />
        <figcaption class="img-caption-blue">Developer</figcaption>
      </figure>
      <figure>
        <img :src="builderImg" alt="" />
        <figcaption class="img-caption-pink">Architect</figcaption>
      </figure>
      <figure>
        <img :src="photographerImg" alt="" />
        <figcaption class="img-caption-blue">Photographer</figcaption>
      </figure>
      <figure>
        <img :src="artistImg" alt="" />
        <figcaption class="img-caption-pink">Artist</figcaption>
      </figure>
      <figure>
        <img :src="dreamerImg" alt="" />
        <figcaption class="img-caption-blue">Dreamer</figcaption>
      </figure>
    </div>
    <div class="flex justify-around mt-4 md:hidden">
      <button class="nav-btn-styles hover-btn-styles" @click="openContactModal()">
        Contact Me
      </button>
      <button class="nav-btn-styles hover-btn-styles">
        <a href="/Juan-Resume.pdf" download>Resume</a>
      </button>
      <button class="nav-btn-styles hover-btn-styles relative" @click="navigateToWork">
        See Work
      </button>
    </div>
  </section>
</template>

<style scoped></style>
