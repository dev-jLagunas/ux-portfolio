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
  <section class="mx-auto px-4 font-main">
    <div v-if="post">
      <!-- Cover Image -->
      <img
        v-if="post.coverImage"
        :src="post.coverImage"
        :alt="post.imageAlt || post.title"
        class="w-full max-w-[400px] rounded-sm mx-auto"
      />

      <!-- Author Info -->
      <div v-if="post.author" class="flex items-center gap-4 mb-10">
        <img
          v-if="post.author.avatar"
          :src="post.author.avatar"
          alt="Author avatar"
          class="w-20 h-20"
        />
        <div>
          <p class="font-medium">{{ post.author.name }}</p>
          <p v-if="post.author.bio" class="text-sm">{{ post.author.bio }}</p>
          <div v-if="post.tags" class="space-x-4">
            <span v-for="tag in post.tags" :key="tag" class="text-xs">#{{ tag }}</span>
          </div>
        </div>
      </div>

      <!-- Title + Meta -->
      <h1 class="text-4xl font-bold mb-2">{{ post.title }}</h1>
      <div class="text-sm text-start mb-4 space-x-8 font-light">
        <span>{{ post.date }}</span>
        <span v-if="post.readingTime">· {{ post.readingTime }}</span>
        <span v-if="post.category">· {{ post.category }}</span>
      </div>

      <!-- Content -->
      <div class="prose prose-lg max-w-none" v-html="post.content" />

      <!-- Optional UX-style sections -->
      <div v-if="post.problem || post.solution || post.outcome" class="mt-10 border-t pt-8">
        <div v-if="post.problem" class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Problem</h2>
          <p class="">{{ post.problem }}</p>
        </div>
        <div v-if="post.solution" class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Solution</h2>
          <p class="">{{ post.solution }}</p>
        </div>
        <div v-if="post.outcome">
          <h2 class="text-xl font-semibold mb-2">Outcome</h2>
          <p class="">{{ post.outcome }}</p>
        </div>
      </div>

      <div class="border-t border-slate-400 mt-12 pt-6 text-center">
        <p class="text-sm mb-2 tracking-wider">Want to read more?</p>
        <router-link
          to="/blog"
          class="bg-pink text-white px-5 py-2 rounded-sm text-sm inline-block hover:cursor-pointer hover:shadow-lg transition"
        >
          Back to Blog
        </router-link>
      </div>

      <!-- Related Posts (just slugs)
      <div v-if="post.relatedPosts?.length" class="mt-12 border-t pt-8">
        <h3 class="text-lg font-semibold mb-2">Related Posts</h3>
        <ul class="list-disc list-inside text-blue-600">
          <li v-for="relatedSlug in post.relatedPosts" :key="relatedSlug">
            <router-link :to="`/blog/${relatedSlug}`" class="hover:underline">
              {{ relatedSlug.replace(/-/g, ' ') }}
            </router-link>
          </li>
        </ul>
      </div> -->
    </div>

    <div v-else class="text-center text-gray-500">
      <p>Post not found.</p>
    </div>
  </section>
</template>

<style scoped></style>
