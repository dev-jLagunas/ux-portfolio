<script setup>
import instagramIcon from '@/assets/svgs/instagram-icon.svg'
</script>

<template>
  <article
    class="rounded-md h-fit p-4 font-headings flex flex-col justify-center items-center w-fit mt-8 border border-gray-200"
  >
    <h2 class="font-bold">My Instagram</h2>
    <img :src="instagramIcon" alt="" class="h-20 pb-2" />
    <button class="text-sm border-2 border-pink p-2 rounded-sm tracking-widest">See Now</button>
  </article>
</template>

<style scoped></style>
