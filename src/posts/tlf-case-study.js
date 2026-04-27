import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.webp'
import case1 from '@/assets/images/blogPosts/post14/tlf-case-1.webp'
import case2 from '@/assets/images/blogPosts/post14/tlf-case-2.webp'
import case3 from '@/assets/images/blogPosts/post14/tlf-case-3.webp'
import case4 from '@/assets/images/blogPosts/post14/tlf-case-4.webp'
import case5 from '@/assets/images/blogPosts/post14/tlf-case-5.webp'
import case6 from '@/assets/images/blogPosts/post14/tlf-case-6.webp'

import coverImg from '@/assets/images/blogPosts/post14/tlf-cover-img.webp'

export default {
  id: 14,
  title: 'A Visual Deep Dive into The Language Friends',
  slug: 'tlf-case-study',
  date: '2026-04-27',

  summary:
    'I designed and built a bilingual English-learning ecosystem for children in Japan, focusing on confidence-first pedagogy, character-driven UX, and scalable modular architecture.',

  content: `
  <p class="blog-paragraphs">The Language Friends was born from a desire to rethink how young children in Japan experience English. My goal was to move away from the high-pressure, grammar-heavy norm and create a system grounded in emotional safety and natural pattern recognition. In 45 days, I designed and produced five original books and a bilingual Nuxt 4 website, iterating directly in code to master the complexities of multilingual typography. These visuals showcase the transition from a real-world observation to a launch-ready product ecosystem where every interaction is designed to build confidence.</p>
    <div class="my-8 space-y-4">
      <img src="${case1}" alt="The Language Friends Overview and Strategic Intent" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case2}" alt="Pedagogical Framework and Pattern Recognition Foundations" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case3}" alt="Character System and Emotional UX Anchors" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case4}" alt="Bilingual Typography and Designing in Code Methodology" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case5}" alt="Bento-Style UI and Trust-First Landing Experience" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case6}" alt="Modular Architecture and Scalable i18n System" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
    </div>
  `,

  tags: ['ux', 'product-design', 'edtech', 'multilingual-ux', 'bilingual', 'nuxt'],
  category: 'Case Study',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'Product Designer specializing in scalable UX systems',
    website: 'https://juan-lagunas.com',
  },

  coverImage: coverImg,
  thumbnail: coverImg,

  readingTime: '4 min read',
  published: true,
  updated: '2026-04-27',

  relatedPosts: [13, 12],
  showToc: false,
}
