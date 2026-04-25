import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.webp'
import case1 from '@/assets/images/blogPosts/post12/bnb-visual-1.webp'
import case2 from '@/assets/images/blogPosts/post12/bnb-visual-2.webp'
import case3 from '@/assets/images/blogPosts/post12/bnb-visual-3.webp'
import case4 from '@/assets/images/blogPosts/post12/bnb-visual-4.webp'
import coverImg from '@/assets/images/blogPosts/post12/bnb-cover-img.webp'

export default {
  id: 12,
  title: 'A Visual Deep Dive into Bean & Beast',
  slug: 'bean-and-beast-visual-case-study',
  date: '2026-04-25',

  summary:
    'I created a visual case study for Bean & Beast Chocolates to show how storytelling and character lore can transform a standard e-commerce experience into something personal.',

  content: `
  <p class="blog-paragraphs">I wanted to find a better way to share the story of Bean & Beast. My goal was to create a visual flow that feels as bold and intentional as the chocolate itself. I used this project to practice the full design thinking process from start to finish. I focused on making every feature easy to scan and understand. From the personality quiz to the character lore, these visuals show how I use design and code to build an emotional connection with the user.</p>
    <div class="my-8 space-y-4">
      <img src="${case1}" alt="Bean and Beast Overview and Strategic Intent" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case2}" alt="Research Insights and Visual Packaging Mockups" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case3}" alt="Rapid Ideation and Interactive Flavor Quiz" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
      <img src="${case4}" alt="Character Lore and Modular Engineering Structure" class="w-full rounded-sm border border-gray-200 dark:border-gray-800" />
    </div>
  `,

  tags: ['ux', 'product-design', 'ecommerce', 'branding', 'storytelling', 'vue'],
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
  updated: '2026-04-25',

  relatedPosts: [11, 5],
  showToc: false,
}
