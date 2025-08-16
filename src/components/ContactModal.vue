<script setup>
import { showContactModal } from '@/composables/useContactModal'
import emailIcon from '@/assets/svgs/email-icon.svg'
import locationIcon from '@/assets/svgs/location-icon.svg'

function closeModal() {
  showContactModal.value = false
}
</script>

<template>
  <article v-if="showContactModal" class="contact-modal-container">
    <div class="contact-form-wrapper">
      <!-- Decorational Triangles -->
      <div class="absolute top-0 left-0 w-24 h-24 bg-pink triangle-top-left"></div>
      <div class="absolute bottom-0 right-0 w-24 h-24 bg-blue triangle-bottom-right"></div>

      <!-- Form Wrapper -->
      <h2 class="contact-modal-title">Contact Me</h2>
      <ul class="contact-info-wrapper">
        <li class="contact-info-item">
          <img :src="emailIcon" alt="email svg icon" class="h-6" />dev.jlagunas@gmail.com
        </li>
        <li class="contact-info-item">
          <img :src="locationIcon" alt="location svg icon" class="h-7" />United States
        </li>
      </ul>
      <form action="https://formspree.io/f/xjkobrre" method="POST" class="form-wrapper">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required class="form-input" />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required class="form-input" />
        <label for="message" class="">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="e.g. I'd like to get in touch..."
          required
          class="border w-full rounded-sm px-4 border-gray-500"
        ></textarea>
        <button type="submit" class="form-send-btn">Send</button>
      </form>
      <button class="form-close-btn" @click="closeModal()">X</button>
    </div>
  </article>
</template>

<style scoped>
.triangle-top-left {
  clip-path: polygon(0 0, 100% 0, 0 100%);
  border-top-left-radius: 12px;
}

.triangle-bottom-right {
  clip-path: polygon(100% 100%, 0 100%, 100% 0);
  border-bottom-right-radius: 12px;
}
</style>
