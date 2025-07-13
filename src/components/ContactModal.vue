<script setup>
import { showContactModal } from '@/composables/useContactModal'
import emailIcon from '@/assets/svgs/email-icon.svg'
import locationIcon from '@/assets/svgs/location-icon.svg'

function closeModal() {
  showContactModal.value = false
}
</script>

<template>
  <article
    v-if="showContactModal"
    class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/[var(--bg-opacity)] [--bg-opacity:80%] font-headings"
  >
    <div
      class="bg-white w-[90vw] py-4 rounded-xl shadow-xl text-dark md:w-4/5 md:max-w-xl relative"
    >
      <div class="absolute top-0 left-0 w-24 h-24 bg-pink triangle-top-left"></div>
      <div class="absolute bottom-0 right-0 w-24 h-24 bg-blue triangle-bottom-right"></div>
      <h2 class="text-center text-lg mb-8 underline underline-offset-4">Contact Me</h2>
      <ul class="flex justify-center items-center flex-col gap-2">
        <li class="text-center flex flex-col justify-center items-center">
          <img :src="emailIcon" alt="" class="h-10" />dev.jlagunas@gmail.com
        </li>
        <li class="text-center flex flex-col justify-center items-center">
          <img :src="locationIcon" alt="" class="h-10" />United States
        </li>
      </ul>
      <form
        action="https://formspree.io/f/xjkobrre"
        method="POST"
        class="px-4 flex justify-center items-start flex-col w-full"
      >
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          class="border border-gray-500 w-full rounded-sm px-4 mb-3"
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          class="border border-gray-500 w-full rounded-sm px-4 mb-3"
        />
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
        <button
          type="submit"
          class="mt-2 rounded-sm bg-pink px-4 py-1 hover:font-bold text-white hover:cursor-pointer"
        >
          Send
        </button>
      </form>
      <button
        class="mx-auto w-full text-pink font-bold text-3xl hover:scale-110 hover:cursor-pointer"
        @click="closeModal()"
      >
        X
      </button>
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
