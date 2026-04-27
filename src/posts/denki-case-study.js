import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.webp'
import case1 from '@/assets/images/blogPosts/post13/denki-study-1.webp'
import case2 from '@/assets/images/blogPosts/post13/denki-study-2.webp'
import case3 from '@/assets/images/blogPosts/post13/denki-study-3.webp'
import case4 from '@/assets/images/blogPosts/post13/denki-study-4.webp'
import case5 from '@/assets/images/blogPosts/post13/denki-study-5.webp'

import coverImg from '@/assets/images/blogPosts/post13/denki-cover-img.webp'

export default {
  id: 13,
  title: 'A Visual Deep Dive into Tanaka Denki',
  slug: 'denki-case-study',
  date: '2026-04-27',

  summary:
    'I redesigned the digital presence for a Japanese solar maintenance company to improve B2B trust and simplify content management through a modern, modular architecture.',

  content: `
  <p class="blog-paragraphs">I partnered with Tanaka Denki to transform an outdated WordPress site into a professional, high-trust platform. My goal was to create a visual experience that speaks to the reliability of industrial infrastructure while navigating the specific expectations of the Japanese market. By combining Nuxt 4 with a headless CMS, I focused on building a system that is easy for the team to manage and even easier for their clients to navigate. These visuals break down the strategy, design system, and technical foundations used to support their business growth.</p>
    <div class="my-8 space-y-4">
      <img src="${case1}" alt="Tanaka Denki Project Overview and Strategic Intent" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case2}" alt="Information Architecture and Navigation Structure" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case3}" alt="B2B Visual Identity and Trust Signal System" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case4}" alt="Headless CMS Integration and Content Management" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case5}" alt="Modular Component Engineering and Performance Outcomes" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
    </div>
  `,

  tags: ['ux', 'product-design', 'b2b', 'nuxt', 'cms', 'localization'],
  category: 'Case Study',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'Product Designer specializing in scalable UX systems',
    website: 'https://juan-lagunas.com',
  },

  coverImage: coverImg,
  thumbnail: coverImg,

  readingTime: '3 min read',
  published: true,
  updated: '2026-04-27',

  relatedPosts: [12, 6],
  showToc: false,
}
