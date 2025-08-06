<script setup>
import { useBlogStore } from '@/stores/blogStore'
import { computed } from 'vue'

// Store
const blogStore = useBlogStore()
const posts = computed(() => blogStore.posts)

// Components
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'
</script>

<template>
  <section class="mx-auto mt-16 font-main">
    <h1 class="text-3xl font-bold mb-8">Blog</h1>
    <div class="grid gap-6">
      <router-link
        v-for="post in posts"
        :key="post.id"
        :to="`/blog/${post.slug}`"
        class="block p-4 border rounded-sm hover:rounded-tl-3xl hover:rounded-br-4xl transition-all ease-linear duration-200"
      >
        <article class="grid md:grid-cols-4 relative md:place-items-center">
          <p
            class="absolute -top-5 shadow-xs shadow-dark left-1/2 -translate-1/2 bg-dark px-4 py-1 text-light font-bold rounded-sm"
          >
            Post {{ post.id }}
          </p>
          <div class="md:col-span-3">
            <p class="text-sm font-light mb-2">{{ post.date }}</p>
            <h2 class="text-2xl font-semibold">{{ post.title }}</h2>
            <p class="">{{ post.summary }}</p>
          </div>
          <figure class="max-w-[225px] mx-auto mt-4 md:mt-0">
            <img :src="post.thumbnail" alt="cover-image" class="h-full w-full object-contain" />
          </figure>
        </article>
      </router-link>
    </div>
  </section>
  <BackHomeBtn />
</template>

<style scoped></style>
