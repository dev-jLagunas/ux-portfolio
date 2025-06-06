<script setup>
import arrowPink from '@/assets/svgs/arrow-pink.svg'
import arrowBlue from '@/assets/svgs/arrow-blue.svg'
</script>

<template>
  <figure
    class="flex flex-col justify-center items-center md:w-fit md:-mt-20 md:ml-28 md:rotate-45 lg:-rotate-45 lg:-mt-40 lg:ml-40"
  >
    <img :src="arrowBlue" alt="" class="-rotate-45" />
    <img :src="arrowPink" alt="" class="rotate-45" />
    <img :src="arrowBlue" alt="" class="-rotate-45" />
  </figure>
</template>

<style scoped></style>
