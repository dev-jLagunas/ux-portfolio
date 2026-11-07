import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.webp'
import coverImg from '@/assets/images/blogPosts/post16/tdt-logo-transparent.webp'

import screenshot1 from '@/assets/images/blogPosts/post16/dt-preview-1.jpg'
// import screenshot2 from '@/assets/images/blogPosts/post16/dt-preview-2.webp'
// import screenshot3 from '@/assets/images/blogPosts/post16/dt-preview-3.webp'
// import screenshot4 from '@/assets/images/blogPosts/post16/dt-preview-4.webp'

export default {
  id: 16,
  title: 'The Design Tutor: Visual Designs Analyzed and Explained',
  slug: 'the-design-tutor-build-notes',
  date: '2026-11-07',

  summary:
    'An interactive web platform where designers and learners can explore realistic commercial websites and flip a switch to see the UX decisions, brand strategy, and design systems behind them.',

  content: `
    <p class="blog-paragraphs">Over the past few weeks, I built and launched <a href="https://thedesigntutor.netlify.app/" target="_blank" rel="noopener noreferrer" class="underline font-semibold">The Design Tutor</a>. I started this project because I wanted a hands-on way to push my own design skills, explore different visual styles, and create something genuinely useful for other designers and learners.</p>

    <p class="mb-2">A lot of design inspiration online only shows you the surface: a polished homepage screenshot or a nice moodboard. But good design is never just about how something looks. It is about how the visual style serves a business, how the layout guides a user, and why specific choices were made to solve real problems. I wanted to build a platform that actually explains that process in context.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Real Scenarios Instead of Generic Demos</h2>

    <p class="mb-2">Rather than putting together abstract templates, every project on the site is built around a realistic business case with real-world constraints and customer friction.</p>

    <p class="mb-2">For example, the Editorial Noir project explores an intimate pizza and natural wine bar in Kanazawa, focusing on high-contrast typography, mood, and walk-in dining culture. The Warm Minimalism project tackles a private home nail studio in Ishikawa, where the primary UX challenge is removing first-time visitor anxiety around house rules, quiet appointments, and upfront pricing.</p>

    <p class="mb-2">Starting from grounded client briefs means every design decision has a job to do. The colors, layout density, and typography are not chosen randomly; they directly support what that specific business needs to communicate.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">The Interactive HUD Toggle</h2>

    <p class="mb-2">The core feature of The Design Tutor is an interactive Heads-Up Display (HUD) toggle built into the screen. It lets you switch between two perspectives instantly without losing your place on the page:</p>

    <p class="mb-2"><strong>Live UI:</strong> You experience the site as a regular customer. You can navigate the menu, check opening hours, or walk through a booking flow to see how the layout feels in action.</p>

    <p class="mb-2"><strong>Educational UI:</strong> Flipping the HUD switch transforms the entire page into a live breakdown. Using the exact same visual layout, the copy changes to explain what makes the style work, its historical design roots, the psychological reasoning behind the layout, when to use or avoid that aesthetic, and the exact design specs used to put it together.</p>

    <p class="mb-2">This side-by-side view bridges the gap between looking at an interface and understanding how it was designed. You can see the visual choice on the left, flip the toggle, and read the rationale right there on the screen.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Why This Matters as a Product Designer</h2>

    <p class="mb-2">As a product designer, working across different visual styles forces you to stay adaptable. It prevents you from relying on the same safe aesthetic for every project and makes you think carefully about tone, typography, and user psychology.</p>

    <p class="mb-2">Building this platform gave me a dedicated space to practice end-to-end design thinking: taking an initial client problem, establishing clear brand guardrails, structuring the information hierarchy, and orchestrating the final layout in Vue and Nuxt so everything works responsively.</p>

    <p class="mb-2">More than that, it turns the design process into an educational tool. Instead of keeping research and design systems buried in private notes, putting them directly into the interface makes the knowledge accessible to anyone looking to understand design on a deeper level.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Where It Stands Today</h2>

    <p class="mb-2">The platform is currently live in beta with two complete design styles to explore, and I am actively working on the next additions to the catalog. My plan is to keep expanding the library with fresh visual styles, refine the educational breakdowns, and share it with the design community to gather feedback.</p>

    <p class="mb-4">You can explore the live site here: <a href="https://thedesigntutor.netlify.app/" target="_blank" rel="noopener noreferrer" class="underline font-semibold">The Design Tutor (thedesigntutor.netlify.app)</a>.</p>

    <h2 class="mt-8 mb-4 text-xl font-semibold">Platform Preview</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <figure class="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
        <img src="${screenshot1}" alt="The Design Tutor movement catalog grid" class="w-full h-auto object-cover" />
      </figure>

      <figure class="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
        <img src="${screenshot1}" alt="Dual-mode live commercial view" class="w-full h-auto object-cover" />
      </figure>

      <figure class="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
        <img src="${screenshot1}" alt="Educational mode style breakdown" class="w-full h-auto object-cover" />
      </figure>

      <figure class="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
        <img src="${screenshot1}" alt="Design token palette and typography spec" class="w-full h-auto object-cover" />
      </figure>
    </div>
  `,

  tags: ['product-design', 'ux-design', 'design-systems', 'the-design-tutor', 'education'],
  category: 'Product Launch',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'Product and UX Designer focused on systems, clarity, and execution',
    website: 'https://yourportfolio.com',
  },

  coverImage: coverImg,
  thumbnail: coverImg,

  readingTime: '5 min read',
  published: true,
  updated: '2026-11-07',

  relatedPosts: [],
  showToc: false,
}
