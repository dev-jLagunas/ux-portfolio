<script setup>
defineProps({
  sectionId: { type: String, required: true },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, default: '' },
  title: { type: String, default: '' },
  intro: { type: String, required: true },
  bullets: { type: Array, default: () => [] },
  tagLabel: { type: String, default: '' },
  tagItems: { type: Array, default: () => [] },
})

function firstWord(s) {
  const [first] = s.split(' ')
  return first || s
}
function restWords(s) {
  const parts = s.split(' ')
  return parts.slice(1).join(' ')
}
</script>

<template>
  <article
    class="font-main px-4 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:gap-0 md:place-items-center"
    :id="sectionId"
  >
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="custom-shadow rounded-md w-3/4 mx-auto xs:w-1/2 md:w-full md:max-w-96"
      loading="lazy"
    />
    <section class="lg:mr-16 xl:mr-24">
      <h3 class="text-3xl mt-4 mb-2 text-center">
        <slot name="title">{{ title }}</slot>
      </h3>
      <p class="leading-6 text-xl mb-2 lg:text-2xl">
        {{ intro }}
      </p>

      <ul class="pl-5 list-disc text-left leading-5 space-y-2 mt-4 mb-4">
        <li v-for="(b, i) in bullets" :key="i">
          {{ b }}
        </li>
      </ul>

      <h4 class="tracking-widest mx-auto font-bold text-center px-3 py-1">
        {{ tagLabel }}
      </h4>

      <ul
        class="flex justify-between items-center divide-x-2 divide-pink w-full text-center text-sm"
      >
        <li v-for="(t, i) in tagItems" :key="i" class="flex-1">
          <!-- Split on first space to get a two-line look without HTML in data -->
          <span class="block">{{ firstWord(t) }}</span>
          <span class="block -mt-1">{{ restWords(t) }}</span>
        </li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.custom-shadow {
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
