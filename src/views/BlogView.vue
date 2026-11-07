<script setup>
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useBlogStore } from '@/stores/blogStore'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Store
const blogStore = useBlogStore()
const posts = computed(() => blogStore.posts)

// Filter Logic
const selectedTags = ref([])
const category = ref(null)
const dateFrom = ref(null)
const dateTo = ref(null)
const publishedOnly = ref(true)

// Facets
const categories = computed(() => {
  const set = new Set(posts.value.map((p) => p.category).filter(Boolean))
  return Array.from(set).sort()
})
const tags = computed(() => {
  const set = new Set()
  posts.value.forEach((p) => p.tags?.forEach((t) => set.add(t)))
  return Array.from(set).sort()
})

// Helpers
const clearFilters = () => {
  selectedTags.value = []
  category.value = ''
  dateFrom.value = ''
  dateTo.value = ''
  publishedOnly.value = true
}
const toggleTag = (t) => {
  const i = selectedTags.value.indexOf(t)
  if (i === -1) selectedTags.value.push(t)
  else selectedTags.value.splice(i, 1)
}

// Visible posts
const visiblePosts = computed(() => {
  const from = dateFrom.value ? new Date(dateFrom.value) : null
  const to = dateTo.value ? new Date(dateTo.value) : null
  const selTags = selectedTags.value

  return posts.value.filter((p) => {
    if (publishedOnly.value && p.published === false) return false
    if (category.value && p.category !== category.value) return false

    const pDate = p.date ? new Date(p.date) : null
    if (from && pDate && pDate < from) return false
    if (to && pDate && pDate > to) return false

    if (selTags.length) {
      const hasAny = selTags.some((t) => p.tags?.includes(t))
      if (!hasAny) return false
    }
    return true
  })
})

// GSAP Animations
const blogSection = ref(null)
let ctx

function initAnimations() {
  if (ctx) ctx.revert()

  ctx = gsap.context(() => {
    // 1. Header fade & lift
    gsap.from('.blog-header', {
      y: 25,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
    })

    // 2. Blog cards: staggered on load or triggered on scroll below the fold
    const cards = gsap.utils.toArray('.blog-card-link')
    cards.forEach((card) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, blogSection.value)
}

onMounted(async () => {
  await nextTick()
  initAnimations()
})

// Re-run animation if user adjusts any filters
watch(visiblePosts, async () => {
  await nextTick()
  initAnimations()
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})

// Components
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'
</script>

<template>
  <section ref="blogSection" class="mx-auto font-main">
    <!-- Filter Bar -->
    <div class="mb-8 p-4 border rounded-sm hidden">
      <div class="grid md:grid-cols-4 gap-4 items-end">
        <!-- Dates -->
        <div>
          <label class="block text-sm mb-1">From date</label>
          <input
            type="date"
            v-model="dateFrom"
            class="w-fit border px-3 py-2 rounded-sm md:w-full"
          />
        </div>
        <div>
          <label class="block text-sm mb-1">To date</label>
          <input type="date" v-model="dateTo" class="w-fit border px-3 py-2 rounded-sm md:w-full" />
        </div>

        <!-- Category -->
        <div>
          <label class="block text-sm mb-1">Category</label>
          <select v-model="category" class="w-fit border px-3 py-2 rounded-sm md:w-full">
            <option value="">All</option>
            <option class="" v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
        </div>
      </div>

      <!-- Tags -->
      <div class="mt-4">
        <label class="block text-sm mb-2">Tags</label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="t in tags"
            :key="t"
            type="button"
            @click="toggleTag(t)"
            class="px-3 py-1 border rounded-sm text-sm transition-all text-light hover:cursor-pointer"
            :class="selectedTags.includes(t) ? 'bg-dark text-light' : 'bg-pink'"
          >
            {{ t }}
          </button>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-4 flex items-center justify-between px-4">
        <p class="text-sm">{{ visiblePosts.length }} results</p>
        <button
          type="button"
          @click="clearFilters"
          class="px-3 py-2 border rounded-sm hover:bg-pink hover:text-light hover:cursor-pointer duration-300 transition-all ease-linear"
        >
          Clear filters
        </button>
      </div>
    </div>

    <h1 class="blog-header section-title mt-16 mb-4">Blog</h1>

    <div class="grid gap-6">
      <router-link
        v-for="post in visiblePosts"
        :key="post.id"
        :to="`/blog/${post.slug}`"
        class="blog-card-link block mt-8 p-4 border rounded-sm hover:rounded-tl-3xl hover:rounded-br-4xl transition-all ease-linear duration-200"
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

<style scoped>
.blog-card-link,
.blog-header {
  will-change: transform, opacity;
}
</style>
