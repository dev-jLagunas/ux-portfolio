import uxImg from '@/assets/images/blogPosts/post5/ux-features.png'
import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.png'
import uxImg1 from '@/assets/images/blogPosts/post5/post-5-img-1.png'
import uxImg2 from '@/assets/images/blogPosts/post5/post-5-img-2.png'
import uxImg3 from '@/assets/images/blogPosts/post5/post-5-img-3.png'
import nameLogo from '@/assets/images/blogPosts/post5/name_logo.png'

export default {
  id: 5,
  title: 'UX Features Built Into My Portfolio',
  slug: 'ux-features-in-my-portfolio',
  date: '2025-08-18',

  summary:
    'My portfolio isn’t just a place to show my work, I thought about it as a UX project in itself. From navigation and layout to case study storytelling, I intentionally designed features that make the experience smooth, accessible, and even fun. Here’s a breakdown of the UX features I built into my portfolio and why they matter.',

  content: `
    <p class="blog-paragraphs">When I designed my portfolio, I approached it as more than a showcase. I treated it as a user experience challenge: how could I make the act of <em>navigating my work</em> enjoyable, clear, and useful? Below, I’ll walk through the UX features I built into my site and explain why they matter.</p>

    <h2 class="font-bold">Navigation & Access</h2>
    <p class="mb-2">Navigation is the backbone of any site. I built mine with a responsive navbar and sidebar, making sure both desktop and mobile users get a clear, consistent way to move around. Each menu item has an icon <em>and</em> a label, improving both clarity and accessibility. Quick access buttons for “Contact” and a light/dark mode toggle are always visible, no matter where you are.</p>
    <p class="mb-2">Inside my case studies, I added a reusable sticky navbar that highlights the current section and scrolls instantly to any part of the page. A back-to-top button is always present too, small and subtle until hovered, where it expands for easy interaction. Even loading states got attention. A clean spinner with playful captions like “working on it” or “thanks for waiting!” adds guidance and delight when pages switch.</p>
   <p><strong>Why it’s good UX:</strong> These navigation choices align with multiple usability heuristics. The persistent navbar and sidebar give users <em>visibility of system status</em> and <em>user control</em>, so they always know where they are and how to move. Icons paired with text improve <em>recognition rather than recall</em>, since users don’t have to guess what each option means. The sticky navbar and back-to-top button increase <em>efficiency of use</em>, reducing scrolling effort in long case studies. Even the loading spinner with captions addresses <em>visibility of system status</em> by giving clear feedback that the system is working while adding a touch of personality to keep the experience engaging.</p>


    <img src=${uxImg1} alt="Navigation and access UX features screenshot" class="my-6 rounded-lg shadow-lg" />

    <h2 class="font-bold">Hero & Layout</h2>
    <p class="mb-2">At the top of my home page, I made sure the essentials stand out. Keywords like “UX / UI Designer” and “meaningful experiences” are styled in distinct colors, so someone scanning quickly can instantly pick up who I am and what I do. My hero section also has three key buttons: “Contact Me” opens a modal instantly, “Resume” downloads a PDF right away, and “See Work” scrolls directly to my case studies.</p>
    <p class="mb-2">The entire site is fully responsive, with grids and layouts adapting smoothly across devices. This isn’t flashy, but it’s foundational. recruiters and hiring managers often check portfolios on phones or tablets, and a broken layout can cost attention fast.</p>
    <p><strong>Why it’s good UX:</strong> The highlighted keywords in my hero section follow the heuristic of <em>aesthetic and minimalist design</em>, surfacing only the most important information so users can grasp my role at a glance. Quick-access buttons respect <em>efficiency of use</em> by connecting users directly to top goals such as contacting me, downloading a resume, or jumping to case studies. The responsive grid layout addresses <em>flexibility and efficiency</em>, ensuring the site works across devices and contexts. Together, these features create a first impression that is clear, efficient, and visually aligned with user expectations.</p>

    <img src=${uxImg2} alt="Hero section and layout UX features screenshot" class="my-6 rounded-lg shadow-lg" />

    <h2 class="font-bold">Case Study Experience</h2>
    <p class="mb-2">My case studies aren’t just static pages. I tried to create a story and a guided experience. At the top, users can download a full PDF or view the live site version. Each case study is labeled with UX tags that preview the methods used, so readers know what to expect right away.</p>
    <p class="mb-2">I present visual artifacts (like empathy maps, personas, and journey maps) in auto-scrolling slides. Each one comes with a short blurb that ties back to the design thinking framework, helping users connect the dots between research and solutions. Solution content is chunked into tabbed sections, each with visuals and narrative, so readers can digest the story step by step. A sticky navbar guides navigation within the study, and a back-to-case-studies button makes exiting easy.</p>
<p><strong>Why it’s good UX:</strong> My case studies are designed with heuristics like <em>consistency and standards</em> and <em>recognition rather than recall</em> in mind. Downloadable PDFs and links to live sites provide <em>flexibility</em> so users can choose their preferred format. UX tags at the top give <em>visibility</em> into what the study covers. Auto-scrolling visual artifacts paired with short blurbs help chunk information into <em>recognizable</em>, digestible units rather than relying on users to recall details. Tabbed solution sections demonstrate <em>aesthetic and minimalist design</em> by avoiding overwhelming walls of content. Finally, the sticky navbar and back button reinforce <em>user control and freedom</em>, allowing readers to navigate or exit easily at any point.</p>

    <img src=${uxImg3} alt="Case study UX features screenshot" class="my-6 rounded-lg shadow-lg" />

    <h2 class="font-bold">Branding & Trust</h2>
    <p class="mb-2">Lastly, I designed a custom name logo to build a recognizable personal brand. It’s not just decoration. I would hope it signals identity and professionalism. Consistent branding helps build trust, which is crucial in a portfolio context where first impressions matter a lot.</p>
   <p><strong>Why it’s good UX:</strong> My custom logo supports <em>consistency and standards</em> by giving a recognizable visual anchor across my portfolio. It also contributes to <em>aesthetic and minimalist design</em>, keeping branding clean and professional without excess. Strong branding builds trust and credibility, aligning with the heuristic of <em>match between system and real world</em>: just as products use branding to signal reliability, a designer’s portfolio benefits from recognizable identity that sets expectations and reassures users they’re in the right place.</p>

    <img src=${nameLogo} alt="Custom logo branding screenshot" class="my-6 rounded-lg shadow-lg h-56" />

    <p class="blog-paragraphs">Taken together, these features show that my portfolio itself is a UX project. Every decision, from navigation to case study storytelling, was made with the user in mind. Because if I can’t design a usable, engaging experience for my own portfolio, how could I do it for someone else’s product?</p>
  `,

  tags: ['ux', 'portfolio', 'ux-features'],
  category: 'UX Design',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'UX Designer, Developer, and Dreamer',
    website: 'https://yourportfolio.com',
    twitter: 'https://twitter.com/yourhandle',
  },

  coverImage: uxImg,
  thumbnail: uxImg,
  imageAlt: 'Screenshots of UX features in portfolio',

  readingTime: '7 min read',
  published: true,
  updated: '2025-08-18',

  relatedPosts: ['my-custom-ux-framework-flowchart', 'top-ux-design-frameworks'],
  showToc: false,

  problem:
    'Portfolios are often designed only as showcases, but recruiters and hiring managers experience them as products they need to navigate.',
  solution:
    'I treated my portfolio as a UX project in itself, adding thoughtful features to make it more usable, engaging, and accessible.',
  outcome: 'A portfolio that not only shows my work but also proves my UX thinking in action.',
}
