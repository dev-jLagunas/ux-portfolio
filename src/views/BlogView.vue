<script setup>
import { useBlogStore } from '@/stores/blogStore'
import { computed, ref } from 'vue'

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

// Components
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'
</script>

<template>
  <section class="mx-auto mt-16 font-main">
    <!-- Filter Bar -->
    <div class="mb-8 p-4 border rounded-sm">
      <div class="grid md:grid-cols-4 gap-4 items-end">
        <!-- Dates -->
        <div>
          <label class="block text-sm mb-1">From date</label>
          <input type="date" v-model="dateFrom" class="w-full border px-3 py-2 rounded-sm" />
        </div>
        <div>
          <label class="block text-sm mb-1">To date</label>
          <input type="date" v-model="dateTo" class="w-full border px-3 py-2 rounded-sm" />
        </div>

        <!-- Category -->
        <div>
          <label class="block text-sm mb-1">Category</label>
          <select v-model="category" class="w-full border px-3 py-2 rounded-sm">
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
    <h1 class="text-5xl font-bold mb-8">Blog</h1>
    <div class="grid gap-6">
      <router-link
        v-for="post in visiblePosts"
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
