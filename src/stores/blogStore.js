import { defineStore } from 'pinia'
import post1 from '@/posts/what-ux-means-to-me.js'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [post1],
  }),
  getters: {
    getPostBySlug: (state) => (slug) => state.posts.find((p) => p.slug === slug),
  },
})
