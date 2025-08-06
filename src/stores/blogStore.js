import { defineStore } from 'pinia'
import post1 from '@/posts/what-ux-means-to-me.js'
import post2 from '@/posts/bean-and-beast-write-up'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [post1, post2],
  }),
  getters: {
    getPostBySlug: (state) => (slug) => state.posts.find((p) => p.slug === slug),
  },
})
