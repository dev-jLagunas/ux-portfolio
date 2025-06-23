<script setup>
import { showContactModal } from '@/composables/useContactModal'

function closeModal() {
  showContactModal.value = false
}
</script>

<template>
  <div
    v-if="showContactModal"
    class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-lg">
      <h2 class="text-xl font-bold mb-4">Contact Me</h2>
      <button @click="closeModal" class="mt-4 text-blue-500 hover:underline">Close</button>
    </div>
  </div>
</template>

<style scoped></style>
