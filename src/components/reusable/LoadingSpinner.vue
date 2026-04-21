<script setup>
import { useThemeStore } from '@/stores/theme'

// Props
defineProps({
  message: {
    type: String,
    default: 'LOADING...',
  },
})

// Store
const theme = useThemeStore()
</script>

<template>
  <div
    :class="[
      'fixed inset-0 z-90 flex-col-center overflow-hidden transition-colors duration-500',
      theme.isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark',
    ]"
  >
    <div class="breathe-wrapper">
      <span class="breathe-text">
        {{ message.toUpperCase() }}
      </span>
    </div>

    <div class="w-12 h-1 bg-pink mt-6 opacity-80 animate-pulse"></div>
  </div>
</template>

<style scoped>
/* 1. Define the Variable Font */
@font-face {
  font-family: 'BreatheFont';
  src: url('https://garet.typeforward.com/assets/fonts/shared/TFMixVF.woff2') format('woff2');
  font-display: swap;
}

.breathe-wrapper {
  @apply flex items-center justify-center w-full;
}

.breathe-text {
  font-family: 'BreatheFont', sans-serif;
  /* Scalable size: fits screen width but caps at half screen height */
  font-size: clamp(2rem, 8vw, 15vh);
  text-align: center;
  line-height: 1;
  letter-spacing: -0.05em;

  /* Animation Logic */
  animation: breathe-weight 3s ease-in-out infinite;
  will-change: font-variation-settings;
}

/* 2. The Morphing Keyframes */
@keyframes breathe-weight {
  0%,
  100% {
    font-variation-settings: 'wght' 100;
  }
  50% {
    font-variation-settings: 'wght' 900;
  }
}
</style>
