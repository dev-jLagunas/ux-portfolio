<script setup>
// Props
defineProps({
  intro: {
    type: String,
    required: true,
  },
  reflections: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((item) => item.title && item.description && item.icon),
  },
})
</script>

<template>
  <section id="reflections-section" class="flex-col-center">
    <div class="section-header-wrapper">
      <h3 class="font-bold text-3xl">My Reflections</h3>
      <p class="text-blue/90 font-semibold tracking-wider md:pr-4">Prototype – Test</p>
    </div>

    <article class="w-full">
      <p class="mb-6">
        {{ intro }}
      </p>

      <ul class="mt-8 space-y-6">
        <li v-for="(item, index) in reflections" :key="index">
          <div class="flex items-center">
            <img :src="item.icon" alt="" class="h-6 pr-2 rotate-35" />
            <h5 class="font-semibold">{{ item.title }}</h5>
          </div>
          <p class="pl-10">{{ item.description }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped></style>
