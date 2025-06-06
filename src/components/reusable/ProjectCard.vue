<script setup></script>

<template>
  <div class="relative px-4 py-12 border border-gray-300 rounded-md w-auto font-headings">
    <div class="absolute top-0 left-0 w-24 h-24 bg-pink triangle-top-left"></div>
    <div class="absolute bottom-0 right-0 w-24 h-24 bg-blue triangle-bottom-right"></div>
    <p class="text-center text-pink-400 font-bold mb-2">Website UX</p>
    <h3 class="text-xl font-bold mb-2 text-center">Cafe Triangle Website</h3>
    <p class="text-sm text-center text-gray-500 mb-4">
      Here is something to describe this work. Its short but catching so people visit my site.
    </p>
    <ul class="text-gray-500">
      <li>item one</li>
      <li>item two</li>
      <li>item three</li>
      <li>item four</li>
    </ul>
    <div class="text-center">
      <button class="bg-black text-white px-4 py-2 text-sm rounded">View Case Study</button>
    </div>
  </div>
</template>

<style scoped>
.triangle-top-left {
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

.triangle-bottom-right {
  clip-path: polygon(100% 100%, 0 100%, 100% 0);
}
</style>
