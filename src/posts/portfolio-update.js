import coverImg from '@/assets/images/blogPosts/post6/portfolio-iteration-cover.png'
import heroBeforeAfter from '@/assets/images/blogPosts/post6/hero-before-after.png'
import workSectionImg from '@/assets/images/blogPosts/post6/work-section.png'
import caseStudyImg from '@/assets/images/blogPosts/post6/case-study-cleanup.png'
import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.png'

export default {
  id: 6,
  title: 'Portfolio Iteration: Less Noise, Better Signal',
  slug: 'portfolio-iteration-less-noise-better-signal',
  date: '2026-01-21',

  summary:
    'This update focuses on structural cleanup. I simplified the hero, reduced copy, removed weaker case studies, and updated layouts and visuals so the portfolio reflects how I currently design and build real products.',

  content: `
    <p class="blog-paragraphs">
      This update started as a small change to my hero section and expanded into a broader cleanup across the site. As I reviewed the portfolio, several areas no longer matched how I work or how I want the work to be understood.
    </p>

    <h2 class="font-bold">Why I Updated It</h2>
    <p class="mb-2">
      The previous version had too much friction. There were too many words, too many competing actions, and too much explanation where structure and layout could do the work instead.
    </p>
    <p class="mb-2">
      The goal of this update was to reduce noise and make the portfolio faster to scan, easier to navigate, and more focused on shipped work.
    </p>

    <img src=${heroBeforeAfter} alt="Before and after hero section comparison" class="my-6 rounded-lg shadow-lg" />

    <h2 class="font-bold">What Changed</h2>
    <p class="mb-2">
      I simplified the hero section to show role, experience level, and tools immediately. Secondary buttons were removed so the primary action leads directly to the work.
    </p>
    <p class="mb-2">
      I narrowed the portfolio to projects that better represent my current work. Case study copy was shortened throughout, and images were made smaller to create a more consistent visual rhythm.
    </p>
    <p class="mb-2">
      Each case study now includes a TLDR section for quick scanning and a looping product video placed directly after the overview. Live site links are emphasized to allow users to browse work directly.
    </p>

    <img src=${workSectionImg} alt="Updated work section layout" class="my-6 rounded-lg shadow-lg" />

    <h2 class="font-bold">Result</h2>
    <p class="mb-2">
      The portfolio is now more direct. It shows fewer projects, with clearer structure, less copy, and more emphasis on real, live work.
    </p>
    <p class="mb-2">
  This iteration reflects my current level of design judgment. As my work and experience continue to evolve, the portfolio will continue to evolve with it.
</p>


    <img src=${caseStudyImg} alt="Cleaned up case study layout with video and TLDR" class="my-6 rounded-lg shadow-lg" />
  `,

  tags: ['portfolio', 'ux', 'product-design'],
  category: 'UX Design',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'Product Designer, UX/UI, Front-End',
    website: 'https://juan-lagunas.com',
  },

  coverImage: coverImg,
  thumbnail: coverImg,
  imageAlt: 'Updated portfolio screenshots',

  readingTime: '3 min read',
  published: true,
  updated: '2026-01-21',

  relatedPosts: ['ux-features-in-my-portfolio'],
  showToc: false,

  problem:
    'The previous portfolio iteration contained unnecessary friction and did not reflect current structure or priorities.',
  solution:
    'Reduced copy, simplified layout, removed weaker work, and clarified navigation and case study structure.',
  outcome: 'A cleaner portfolio that communicates work and context more efficiently.',
}
