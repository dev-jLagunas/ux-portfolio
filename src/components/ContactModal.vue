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
    <div class="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-lg text-black">
      <ul class="flex justify-center items-center flex-col gap-2">
        <li class="text-center flex flex-col justify-center items-center">
          <img :src="emailIcon" alt="" class="h-10" />juan.lagunas.ux@gmail.com
        </li>
        <li class="text-center flex flex-col justify-center items-center">
          <img :src="locationIcon" alt="" class="h-10" />United States
        </li>
      </ul>
      <form action="" class="p-8 flex justify-center items-center flex-col">
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
          type="text"
          name="name"
          id="name"
          required
          class="border border-gray-500 w-full rounded-sm px-4 mb-3"
        />
        <label for="message" class="">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="e.g. I'd like to get in touch..."
          required
          class="border w-full rounded-sm px-4 border-gray-500"
        ></textarea>
        <button type="submit" class="mt-2 hover:font-bold hover:cursor-pointer">Send</button>
      </form>

      <button
        class="mx-auto w-full text-pink font-bold text-xl hover:font-light hover:cursor-pointer"
        @click="closeModal()"
      >
        close
      </button>
    </div>
  </article>
</template>

<style scoped></style>
