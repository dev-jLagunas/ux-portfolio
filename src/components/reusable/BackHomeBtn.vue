<script setup>
import { useRouter } from 'vue-router'

// Routing
const router = useRouter()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}
</script>

<template>
  <div class="border-t border-slate-400 mt-12 pt-6 text-center">
    <p class="text-sm text-dark mb-2">Looking for more projects?</p>
    <button
      @click="navigateToWork"
      class="bg-pink text-white px-5 py-2 rounded-sm text-sm inline-block hover:cursor-pointer hover:shadow-lg transition"
    >
      Back to Case Studies
    </button>
  </div>
</template>
