<script setup>
// Props
const props = defineProps({
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
  <section id="reflections-section" class="flex flex-col items-center justify-center">
    <div class="mt-4 mb-2 flex items-center justify-between w-full">
      <h3 class="font-bold text-2xl">My Reflections</h3>
      <p class="text-sm">Prototype – Test</p>
    </div>

    <article>
      <p class="mb-6">
        {{ intro }}
      </p>

      <ul class="mt-8 space-y-6">
        <li v-for="(item, index) in reflections" :key="index">
          <div class="flex items-center">
            <img :src="item.icon" alt="" class="h-8 pr-2 rotate-45" />
            <h5 class="font-semibold">{{ item.title }}</h5>
          </div>
          <p class="pl-10">{{ item.description }}</p>
        </li>
      </ul>
    </article>
  </section>
</template>

<style scoped></style>
