<script setup>
import { showContactModal } from '@/composables/useContactModal'

function closeModal() {
  showContactModal.value = false
}
</script>

<template>
  <article
    v-if="showContactModal"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/[var(--bg-opacity)] [--bg-opacity:70%]"
  >
    <div class="bg-white">
      <ul class="">
        <li>Location</li>
        <li>Email</li>
      </ul>
      <form action="" class="p-8 flex justify-center items-center flex-col">
        <label for="name">Your name</label>
        <input type="text" name="name" id="name" required />
        <label for="email">Your email</label>
        <input type="text" name="name" id="name" required />
        <label for="message">Your message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="e.g. I'd like to get in touch..."
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <button class="" @click="closeModal()">close</button>
    </div>
  </article>
</template>

<style scoped></style>
