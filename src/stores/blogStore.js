import { defineStore } from 'pinia'
import post1 from '@/posts/what-ux-means-to-me.js'
import post2 from '@/posts/bean-and-beast-write-up.js'
import post3 from '@/posts/what-are-frameworks.js'
import post4 from '@/posts/ux-flowchart.js'
import post5 from '@/posts/portfolio-ux-features.js'
import post6 from '@/posts/portfolio-update.js'
import post7 from '@/posts/tlf-blog-entry.js'
import post8 from '@/posts/ux-multilingual-advantage.js'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [post8, post7, post6, post5, post4, post3, post2, post1],
  }),
  getters: {
    getPostBySlug: (state) => (slug) => state.posts.find((p) => p.slug === slug),
  },
})
