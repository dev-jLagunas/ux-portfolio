import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.png'
import frameworksImg from '@/assets/images/blogPosts/post3/post-3-img.png'

export default {
  id: 3,
  title: 'Top 6 UX Design Frameworks and When to Use Them',
  slug: 'top-ux-design-frameworks',
  date: '2025-08-08',

  summary:
    'UX design frameworks are more than buzzwords, they’re proven approaches for turning ideas into meaningful user experiences. This post explores six of the most widely used frameworks, explains how they work, and helps you decide which one to use based on your project goals.',

  content: `
    <p class="blog-paragraphs">In UX design, a framework is a structured approach for turning an idea into a usable, user-centered product. Think of it as a roadmap: it doesn’t tell you exactly what turns to take, but it gives you the proven route options that help you avoid dead ends. I have found that the more structure to use as a guide, the smoothly the entire process goes. Frameworks provide a common language for teams, improve efficiency, and ensure a project remains focused on solving real user problems. They’re not rigid rules but flexible guides, adaptable to the needs, scope, and constraints of each project. I just recently made it a point to dive deep into the different frameworks that exist. Here are 6 that I found interesting.</p>

    <h2 class="blog-sect-title">1. Design Thinking</h2>
    <h3 class="mb-1">A human-centered, iterative problem-solving process.</h3>
    <ul class="mb-2">
      <li>~ Built around five phases: Empathize, Define, Ideate, Prototype, Test.</li>
      <li>~ Encourages deep user research before jumping into solutions.</li>
      <li>~ Iterative—teams can loop back to earlier phases as insights evolve.</li>
    </ul>
    <p class="mb-2"><strong>When to use:</strong> Best for projects where the problem space is unclear or requires deep understanding of user needs. For example, redesigning a public transportation app where you need to learn why riders are frustrated before proposing features. The iterative cycles let you refine solutions as you uncover more about your audience.</p>

    <h2 class="blog-sect-title">2. Double Diamond</h2>
    <h3 class="mb-1">A visual process model that alternates between divergent and convergent thinking.</h3>
    <ul>
      <li>~ Four stages: Discover, Define, Develop, Deliver.</li>
      <li>~ "Diamond" phases represent broad exploration followed by focused decision-making.</li>
      <li>~ Balances creativity with structured evaluation.</li>
    </ul>
    <p class="my-2"><strong>When to use:</strong> Ideal for teams that need a clear, visual roadmap to manage both exploration and refinement. For instance, creating a new e-commerce checkout flow, starting with wide-ranging research, then narrowing to tested, high-impact solutions.</p>

    <h2 class="blog-sect-title">3. Lean UX</h2>
    <h3 class="mb-1">A rapid, collaborative approach that prioritizes outcomes over deliverables.</h3>
    <ul>
      <li>~ Integrates design, development, and business perspectives early.</li>
      <li>~ Uses quick experiments to validate ideas before heavy investment.</li>
      <li>~ Encourages a “build-measure-learn” feedback loop.</li>
    </ul>
    <p class="my-2"><strong>When to use:</strong> Great for fast-paced environments like startups or Agile teams, where speed and adaptability are essential. If you’re adding a new social feature to an existing platform, Lean UX lets you launch a minimal version quickly, measure engagement, and adjust without wasting months on full builds.</p>

    <h2 class="blog-sect-title">4. User-Centered Design (UCD)</h2>
    <h3 class"mb-1">A process that puts the user’s needs, wants, and limitations at the core of design decisions.</h3>
    <ul>
      <li>~ Involves users throughout all design phases.</li>
      <li>~ Balances business goals with human factors.</li>
      <li>~ Relies on usability testing to guide iteration.</li>
    </ul>
    <p class="my-2"><strong>When to use:</strong> Perfect when accessibility and usability are critical, such as designing an online banking portal where mistakes have serious consequences. UCD ensures the product works for all intended users, including those with varying technical abilities.</p>

    <h2 class="blog-sect-title">5. Hook Model</h2>
    <h3 class="mb-1">A behavior-design framework for building habit-forming products.</h3>
    <ul>
      <li>~ Four stages: Trigger → Action → Variable Reward → Investment.</li>
      <li>~ Focuses on understanding psychological motivators.</li>
      <li>~ Effective for driving long-term user engagement.</li>
    </ul>
    <p class="my-2"><strong>When to use:</strong> Best when designing products that rely on frequent user interaction, like a language-learning app. By creating rewarding feedback loops, you encourage repeat usage and habit formation over time.</p>

    <h2 class="blog-sect-title">6. UX Honeycomb</h2>
    <h3 class="mb-1">A visual guide to the qualities of a good user experience.</h3>
    <ul>
      <li>~ Seven facets: Useful, Usable, Desirable, Findable, Accessible, Credible, Valuable.</li>
      <li>~ Provides a quick checklist for evaluating designs.</li>
      <li>~ Helps prioritize improvements based on UX quality dimensions.</li>
    </ul>
    <p class="my-2"><strong>When to use:</strong> Useful as a diagnostic tool mid-project or during redesigns. For example, if a government services website has low adoption rates, running its design through the Honeycomb can pinpoint whether the issue is usability, findability, or credibility.</p>

    <p class="blog-paragraphs">UX design frameworks aren’t about restricting creativity.They’re actually about channeling it effectively. The right framework provides structure, keeps teams aligned, and helps ensure your solutions are both user-friendly and business-viable. Whether you’re crafting a product from scratch or refining an existing one, understanding when and how to apply these frameworks can turn good ideas into exceptional experiences.</p>
  `,

  tags: ['ux-frameworks', 'ux-process', 'design-thinking'],
  category: 'UX Design',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'UX Designer, Developer, and Dreamer',
    website: 'https://yourportfolio.com',
    twitter: 'https://twitter.com/yourhandle',
  },

  coverImage: frameworksImg,
  thumbnail: frameworksImg,
  imageAlt: 'Illustration of interconnected UX frameworks',

  readingTime: '8 min read',
  published: true,
  updated: '2025-08-08',

  relatedPosts: ['ux-vs-ui', 'design-thinking-guide'],
  showToc: false,

  problem:
    'UX frameworks can seem overwhelming or abstract to new designers, making it hard to choose the right one for a project.',
  solution:
    'Provide a concise breakdown of six key frameworks, their core elements, and when to apply them for maximum impact.',
  outcome:
    'Readers leave with a clearer understanding of UX frameworks and practical guidance for selecting the right approach for their own work.',
}
