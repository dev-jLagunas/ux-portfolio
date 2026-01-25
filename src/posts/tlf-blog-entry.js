import coverImg from '@/assets/images/blogPosts/post7/tlf-blog-mockup.png'
import contentImg from '@/assets/images/blogPosts/post7/portfolio-blog-img.png'
import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.png'

export default {
  id: 7,
  title: 'The Language Friends: A Real Thing I Built',
  slug: 'the-language-friends-a-real-thing-i-built',
  date: '2026-01-25',

  summary:
    'One week before launch, The Language Friends is finished, live, and doing what it was meant to do. This post is a reflection on building a real product end to end and seeing it come together.',

  content: `
    <p class="blog-paragraphs">
      One week before launch, The Language Friends is done. Not perfect, not finished forever, but real. The books exist. The website is live. The links work. Parents can understand what this is, why it exists, and where to go next.
    </p>

    <p class="mb-2">
      For me, that matters more than outcomes. This is another idea I brought to life on my own, through steady work, a lot of problem solving, and not quitting when things got frustrating.
    </p>

    <h2 class="font-bold">What This Actually Is</h2>
    <p class="mb-2">
      The Language Friends is a small English picture book series for children in Japan. It is built around repetition, simple sentence patterns, and visual consistency. No grammar explanations. No testing mindset. Just exposure, familiarity, and confidence.
    </p>
    <p class="mb-2">
      Every book follows strict constraints. One sentence pattern. Clear repetition. Characters and colors that stay consistent. The goal was not to be clever, but to be usable.
    </p>

    <img src=${contentImg} alt="The Language Friends website and book previews" class="my-6 rounded-lg shadow-lg" />

    <h2 class="font-bold">What I Built</h2>
    <p class="mb-2">
      I wrote and designed the books. I built the bilingual website. I handled layout, typography, responsiveness, multilingual routing, previews, and distribution links. I published through Amazon and Kobo and worked through the limitations that come with those platforms.
    </p>
    <p class="mb-2">
      None of this was hypothetical. Every decision had consequences. If something broke, I had to fix it. If something felt confusing, I had to rethink it. There was no handoff and no safety net.
    </p>

    <h2 class="font-bold">Why This Was Hard</h2>
    <p class="mb-2">
      The difficulty was not any single task. It was the number of moving pieces. Content, pedagogy, design, development, multilingual UX, publishing rules, edge cases, and small technical problems that only appear once everything is connected.
    </p>
    <p class="mb-2">
      There were plenty of moments where it would have been easy to stop. Instead, I kept pushing until the system held together.
    </p>

    <h2 class="font-bold">Why This Matters To Me</h2>
    <p class="mb-2">
      This project pulls together a lot of my history. Language teaching. Linguistics. Design. Front end development. Building things from nothing and making them usable by real people.
    </p>
    <p class="mb-2">
      I am not claiming this will be a huge success. That part comes later, if it comes at all. What matters now is that I did not give up, and I shipped something complete and thoughtful.
    </p>

    <h2 class="font-bold">What Comes Next</h2>
    <p class="mb-2">
      Launch is in a week. After that, I will watch, listen, adjust, and keep building. This is not an ending. It is proof that I can carry an idea all the way through.
    </p>
    <p class="mb-2">
      Whatever happens next, The Language Friends already did its job. It exists.
    </p>
  `,

  tags: ['product-design', 'education', 'ux', 'indie'],
  category: 'Product',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'Product Designer, UX/UI, Front-End',
    website: 'https://juan-lagunas.com',
  },

  coverImage: coverImg,
  thumbnail: coverImg,
  imageAlt: 'The Language Friends website and book series',

  readingTime: '4 min read',
  published: true,
  updated: '2026-01-25',

  relatedPosts: ['portfolio-iteration-less-noise-better-signal'],
  showToc: false,

  problem:
    'Most children’s English materials prioritize explanation and testing over confidence and clarity.',
  solution: 'A simple, constrained system built around repetition, visuals, and real usability.',
  outcome: 'A complete, launch-ready product built end to end.',
}
