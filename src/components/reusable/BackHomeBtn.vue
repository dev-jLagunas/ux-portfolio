<script setup>
import { useRouter } from 'vue-router'

// Routing
const router = useRouter()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}
</script>

<template>
  <div class="component-wrapper">
    <p class="text-sm mb-2 tracking-wider">Looking for more projects?</p>
    <button @click="navigateToWork" class="back-home-btn">Back to Case Studies</button>
  </div>
</template>
