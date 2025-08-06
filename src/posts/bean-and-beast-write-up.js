import beanThumbnail from '@/assets/images/blogPosts/post2/bean-beast-thumbnail.png'
import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.png'
import beanCover from '@/assets/images/blogPosts/post2/bean-beast-cover.png'

export default {
  id: 2,
  title: 'What I Learned From Following the Full UX Process',
  slug: 'what-i-learned-full-ux-process',
  date: '2025-08-06',

  summary:
    'Bean & Beast was the first time I followed the full design thinking framework from start to finish and because of that, it changed everything. From user research to wireframes to final code, here’s what I learned and why it made me feel like a real designer for the first time.',

  content: `
    <p class="blog-paragraphs">Before Bean And Beast, I had done UX work, even user research, but it was never this official. I’d talk to users, observe behaviors, and make mental notes, but it was all intuitive and informal. <strong>This time, I created a research plan. I asked targeted questions. I took real notes and gathered qualitative data I could analyze.</strong> That data shaped the project in ways I hadn’t experienced before. It gave me confidence that my designs were rooted in real user needs, not just assumptions.</p>

    <p class="mb-2">The other major shift was starting with low-fidelity wireframes and prototypes instead of jumping straight into code. I used to build directly in the browser, making changes on the fly, which always felt a bit clunky. But this time, I began with paper sketches, then Figma wireframes, then hi-fi mockups. And everything flowed so naturally. It was easier to see usability gaps, smoother to iterate, and far less refactoring was needed later on. The process itself improved the product.</p>

    <p class="mb-2"><strong>Following the design thinking framework didn’t just make the case study better.</strong> It made <em>me</em> better. I internalized the phases. I became more methodical. I started seeing how structure leads to creativity, not away from it. Empathizing and defining gave my ideas focus. Ideation gave them shape. Prototyping and building gave them life. And all of it was grounded in purpose.</p>

    <p class="mb-2">I think the ideate and prototype phases had the biggest impact. For the first time, I took ideas from Crazy 8s sketches to digital wireframes, and I realized how much that middle space matters. You find the gaps. You get better ideas. And you stop wasting time coding things that don’t belong. That shift alone made the whole experience feel more professional.</p>

    <p class="mb-2">What I’m most proud of is that I did the entire thing myself. The branding, the characters, the research, the design, and even the code. I strongly believe I made something that looks and feels like a real startup.<strong>People I showed it to thought it was a live brand. One friend said, “I want to buy a set right now.”</strong>  That’s the kind of feedback that hits different.</p>

    <p class="mb-2"><strong>Biggest headace?</strong> Definitely Figma wireframes. I overdid it. I designed way too many screens before realizing I only needed a focused set for testing. Still, it helped me improve fast. Even more I learned the importance of having the proper tools. In this case the proper hardware. I had to buy a more ergonomic mouse after those 14-hour Figma marathons!</p>

    <p class="mb-2">If I were to keep improving the project, I’d focus on usability testing. I haven’t done much of it yet, and it’s hard to get meaningful feedback on something that isn’t a real product. But once I land a UX job, that’s one area I’m excited to grow in. I’d also add small touches like local storage or flavor filters just to push the realism further.</p>

    <p class="mb-2">Most importantly, this project proved to me that I’m not just learning UX. I <strong>am</strong> a UX designer. I finally see how all my experiences, all my instincts, and now all this structure are coming together. The imposter syndrome is still there, but it’s getting quieter. And I know that this is just the beginning.</p>
  `,

  tags: ['ux-process', 'case-study', 'reflection'],
  category: 'Reflection',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'UX Designer, Developer, and Dreamer',
    website: 'https://yourportfolio.com',
    twitter: 'https://twitter.com/yourhandle',
  },

  coverImage: beanCover,
  thumbnail: beanThumbnail,
  imageAlt: 'Mockups and wireframes from the Bean & Beast UX case study',

  readingTime: '7 min read',
  published: true,
  updated: '2025-08-06',

  relatedPosts: ['what-ux-means-to-me', 'ux-vs-ui'],
  showToc: false,

  problem:
    'My previous UX work lacked structure. I needed a way to move beyond instinct and assumptions and ground my work in real research and systems.',
  solution:
    'By following the full design thinking framework from start to finish, I was able to produce work that felt real, intentional, and professional.',
  outcome:
    'Bean & Beast became my strongest project to date and made me feel, for the first time, like a true UX designer.',
}
