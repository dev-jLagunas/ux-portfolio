import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.webp'
import case1 from '@/assets/images/blogPosts/post11/ux-port-case-1.webp'
import case2 from '@/assets/images/blogPosts/post11/ux-port-case-2.webp'
import case3 from '@/assets/images/blogPosts/post11/ux-port-case-3.webp'
import case4 from '@/assets/images/blogPosts/post11/ux-port-case-4.webp'
import coverImg from '@/assets/images/blogPosts/post11/post11-cover-img.png'

export default {
  id: 11,
  title: 'The Meta Case Study: Engineering a Designer Identity',
  slug: 'ux-portfolio-meta-case-study',
  date: '2026-04-25',

  summary:
    'I iterated on this portfolio five times to solve the problem of presenting a professional identity that balances technical engineering with high-impact visual design.',

  content: `
  <p class="blog-paragraphs">This is my portfolio's most recent iteration. It has been a project that has evolved alongside my skills. I built it to solve a specific problem: how to present myself to employers and designers in a way that is both functional and representative of who I am. It is a feature-rich product that demonstrates my approach to design systems and technical execution. I am proud of features like GSAP-driven hero to the custom blog engine, every part of the site is meant to be a living case study of my process.</p>
    <div class="my-8 space-y-4">
      <img src="${case1}" alt="Visual Identity and Brand Equity" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case2}" alt="Hero interaction and information architecture" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case3}" alt="Technical execution and motion engine" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case4}" alt="Optimization and case study narrative framework" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
    </div>
  `,

  tags: ['ux', 'product-design', 'case-study', 'branding', 'meta', 'nuxt'],
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
  updated: '2026-04-25',

  relatedPosts: [10, 5],
  showToc: false,
}
