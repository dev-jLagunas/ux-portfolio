<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { useBlogStore } from '@/stores/blogStore'
import gsap from 'gsap'

// Props
const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

// Store
const blogStore = useBlogStore()
const post = blogStore.getPostBySlug(props.slug)

const postContainer = ref(null)
let ctx

onMounted(async () => {
  await nextTick()

  ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.from('.post-hero-anim', {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
    }).from(
      '.post-content-anim',
      {
        y: 25,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.3',
    )
  }, postContainer.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <div ref="postContainer" :data-slug="slug">
    <section class="mx-auto mt-16 px-4 font-main max-w-7xl">
      <div v-if="post">
        <!-- Cover Image -->
        <img
          v-if="post.coverImage"
          :src="post.coverImage"
          :alt="post.imageAlt || post.title"
          class="post-hero-anim w-full max-w-[400px] rounded-sm mx-auto mb-8"
        />

        <!-- Author Info -->
        <div v-if="post.author" class="post-hero-anim flex items-center gap-4 mb-10">
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
        <h1 class="post-hero-anim text-4xl font-bold mb-2">{{ post.title }}</h1>
        <div class="post-hero-anim text-sm text-start mb-4 space-x-8 font-light">
          <span>{{ post.date }}</span>
          <span v-if="post.readingTime">· {{ post.readingTime }}</span>
          <span v-if="post.category">· {{ post.category }}</span>
        </div>

        <!-- Content -->
        <div class="post-content-anim prose prose-lg max-w-none" v-html="post.content" />

        <!-- Optional UX-style sections -->
        <div
          v-if="post.problem || post.solution || post.outcome"
          class="mt-10 border-t border-t-gray-500 pt-8"
        >
          <div v-if="post.problem" class="mb-4">
            <h2 class="text-xl font-semibold">Problem</h2>
            <p>{{ post.problem }}</p>
          </div>
          <div v-if="post.solution" class="mb-4">
            <h2 class="text-xl font-semibold">Solution</h2>
            <p>{{ post.solution }}</p>
          </div>
          <div v-if="post.outcome">
            <h2 class="text-xl font-semibold">Outcome</h2>
            <p>{{ post.outcome }}</p>
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
      </div>

      <div v-else class="text-center text-gray-500">
        <p>Post not found.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.post-hero-anim,
.post-content-anim {
  will-change: transform, opacity;
}
</style>
