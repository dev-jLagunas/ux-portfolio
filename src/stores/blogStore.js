import { defineStore } from 'pinia'
import post1 from '@/posts/what-ux-means-to-me.js'
import post2 from '@/posts/bean-and-beast-write-up.js'
import post3 from '@/posts/what-are-frameworks.js'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [post1, post2, post3],
  }),
  getters: {
    getPostBySlug: (state) => (slug) => state.posts.find((p) => p.slug === slug),
  },
})
