<script setup>
import arrowPink from '@/assets/svgs/arrow-pink.svg'
import arrowBlue from '@/assets/svgs/arrow-blue.svg'

// Props
defineProps({
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <figure :class="`w-fit flex flex-col justify-center items-center ${customClass}`">
    <img :src="arrowBlue" alt="" class="-rotate-45" />
    <img :src="arrowPink" alt="" class="rotate-45" />
    <img :src="arrowBlue" alt="" class="-rotate-45" />
  </figure>
</template>

<style scoped></style>
