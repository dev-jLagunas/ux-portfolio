<script setup>
import { showContactModal } from '@/composables/useContactModal'

// Images
import nameLogoDark from '@/assets/images/name_logo_sm.webp'

// Methods
function closeModal() {
  showContactModal.value = false
}
</script>

<template>
  <article v-if="showContactModal" class="contact-modal-container">
    <div class="">
      <h2 class="contact-modal-title">Contact Me</h2>
    </div>
    <div class="contact-form-wrapper relative">
      <button class="form-close-btn" @click="closeModal()">X</button>

      <img :src="nameLogoDark" alt="Name logo of Juan Lagunas" class="h-20 mx-auto" />
      <p class="px-4 leading-5 mt-2 text-dark">
        Have a project in mind? Want to collaborate? Want to say hello?
      </p>
      <p class="px-4 leading-5 mt-1 mb-4 text-dark">
        <strong>Send me a message!</strong> I’d be happy to talk.
      </p>
      <form action="https://formspree.io/f/xjkobrre" method="POST" class="form-wrapper">
        <label for="name" class="hidden">Name</label>
        <input type="text" name="name" id="name" required class="form-input" placeholder="Name" />
        <label for="email" class="hidden">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          class="form-input"
          placeholder="Email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          aria-describedby="emailHelp"
          oninvalid="this.setCustomValidity('Please enter a valid email address.')"
          oninput="this.setCustomValidity('')"
        />
        <label for="message" class="hidden">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="Message"
          required
          minlength="10"
          maxlength="2000"
          class="w-full rounded-sm pl-1 py-1 bg-blue/10 shadow-sm placeholder:text-dark"
          aria-describedby="messageHelp"
          oninvalid="this.setCustomValidity('Please enter a message (at least 10 characters).')"
          oninput="this.setCustomValidity('')"
        ></textarea>
        <button type="submit" class="form-send-btn">Send</button>
      </form>
    </div>
  </article>
</template>

<style scoped></style>
