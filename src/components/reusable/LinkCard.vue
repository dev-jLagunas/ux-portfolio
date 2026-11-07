<script setup>
// Props
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="link-card-container relative overflow-hidden">
    <div class="card-center-texture" aria-hidden="true"></div>
    <h2 class="font-bold text-center text-2xl relative z-10">{{ title }}</h2>
    <img :src="icon" :alt="title" class="h-20 pb-2 relative z-10" loading="lazy" />
    <a :href="url" target="_blank" rel="noopener noreferrer" class="relative z-10">
      <button class="link-card-btn">Explore</button>
    </a>
  </article>
</template>

<style scoped>
.link-card-container {
  position: relative;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;
}

/* Triggers on the card whenever the explore button is hovered */
.link-card-container:has(.link-card-btn:hover) {
  border-color: rgba(0, 0, 0, 0.138) !important;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.02),
    0 8px 10px -6px rgba(0, 0, 0, 0.02) !important;
  transform: translateY(-2px);
}

:global(.dark) .link-card-container:has(.link-card-btn:hover) {
  border-color: rgba(255, 255, 255, 0.1) !important;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.4),
    0 8px 10px -6px rgba(0, 0, 0, 0.3) !important;
}

/* Centered diamond texture faded out smoothly at the edges */
.card-center-texture {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 200px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2 L30 16 L16 30 L2 16 Z' fill='none' stroke='%23000000' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 24px 24px;
  -webkit-mask-image: radial-gradient(circle, black 50%, transparent 70%);
  mask-image: radial-gradient(circle, black 50%, transparent 70%);
}
</style>
