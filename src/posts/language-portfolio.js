import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.webp'
import behance1 from '@/assets/images/blogPosts/post10/language-behance-1.webp'
import behance2 from '@/assets/images/blogPosts/post10/language-behance-2.webp'
import behance3 from '@/assets/images/blogPosts/post10/language-behance-3.webp'
import coverImg from '@/assets/images/blogPosts/post10/lang-port-img.webp'

export default {
  id: 10,
  title: 'Designing a High-Conversion Landing Page for English Coaching',
  slug: 'designing-a-high-conversion-landing-page-for-english-coaching',
  date: '2026-04-17',

  summary:
    'I built this landing page to stand out by proving my background in linguistics and design through a technical, Brutalist-inspired interface.',

  content: `
  <p class="blog-paragraphs">I built this site to show my approach to language coaching through a design-heavy lens. I used a technical style to reflect my background in linguistics and product design. Instead of a traditional workflow, I went straight into code with Nuxt 4 and Vanilla CSS, refining the site through eight iterations. This let me test the multilingual states and the timeline logic in the browser. My goal was to create a functional tool that connects me with the students I can help the most.</p>
    <div class="my-8 space-y-4">
      <img src="${behance1}" alt="Design tokens and project overview" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${behance2}" alt="Linguistic framework and persistent anchors" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${behance3}" alt="Proof of execution and strategic intent" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
    </div>
  `,

  tags: ['ux', 'case-study', 'linguistics', 'nuxt', 'brutalism', 'i18n'],
  category: 'Case Study',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'Product Designer specializing in scalable UX systems',
    website: 'https://jlagunas.com',
  },

  coverImage: coverImg,
  thumbnail: coverImg,

  readingTime: '3 min read',
  published: true,
  updated: '2026-04-17',

  relatedPosts: [9],
  showToc: false,
}
