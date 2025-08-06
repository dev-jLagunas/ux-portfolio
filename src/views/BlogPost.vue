<script setup>
import { useRoute } from 'vue-router'
import { useBlogStore } from '@/stores/blogStore'

// Route
const route = useRoute()
const slug = route.params.slug

// Store
const blogStore = useBlogStore()
const post = blogStore.getPostBySlug(slug)
</script>

<template>
  <section class="max-w-3xl mx-auto px-4 py-12 font-main">
    <div v-if="post">
      <!-- Cover Image -->
      <img
        v-if="post.coverImage"
        :src="post.coverImage"
        :alt="post.imageAlt || post.title"
        class="w-full rounded-md mb-8"
      />

      <!-- Title + Meta -->
      <h1 class="text-4xl font-bold mb-2">{{ post.title }}</h1>
      <div class="text-sm mb-6 flex flex-wrap gap-4 items-center">
        <span>{{ post.date }}</span>
        <span v-if="post.readingTime">· {{ post.readingTime }}</span>
        <span v-if="post.category">· {{ post.category }}</span>
        <div v-if="post.tags" class="flex gap-2 flex-wrap">
          <span v-for="tag in post.tags" :key="tag" class="text-xs px-2 py-1 bg-gray-100 rounded"
            >#{{ tag }}</span
          >
        </div>
      </div>

      <!-- Author Info -->
      <div v-if="post.author" class="flex items-center gap-4 mb-10">
        <img
          v-if="post.author.avatar"
          :src="post.author.avatar"
          alt="Author avatar"
          class="w-12 h-12 rounded-full"
        />
        <div>
          <p class="font-medium">{{ post.author.name }}</p>
          <p v-if="post.author.bio" class="text-sm text-gray-500">{{ post.author.bio }}</p>
        </div>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none" v-html="post.content" />

      <!-- Optional UX-style sections -->
      <div v-if="post.problem || post.solution || post.outcome" class="mt-10 border-t pt-8">
        <div v-if="post.problem" class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Problem</h2>
          <p class="text-gray-700">{{ post.problem }}</p>
        </div>
        <div v-if="post.solution" class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Solution</h2>
          <p class="text-gray-700">{{ post.solution }}</p>
        </div>
        <div v-if="post.outcome">
          <h2 class="text-xl font-semibold mb-2">Outcome</h2>
          <p class="text-gray-700">{{ post.outcome }}</p>
        </div>
      </div>

      <!-- Related Posts (just slugs) -->
      <div v-if="post.relatedPosts?.length" class="mt-12 border-t pt-8">
        <h3 class="text-lg font-semibold mb-2">Related Posts</h3>
        <ul class="list-disc list-inside text-blue-600">
          <li v-for="relatedSlug in post.relatedPosts" :key="relatedSlug">
            <router-link :to="`/blog/${relatedSlug}`" class="hover:underline">
              {{ relatedSlug.replace(/-/g, ' ') }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div v-else class="text-center text-gray-500">
      <p>Post not found.</p>
    </div>
  </section>
</template>

<style scoped></style>
