<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <TheNavbar />
  <TheSidebar />
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 1s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
