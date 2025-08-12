import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.png'
import uxFlowCover from '@/assets/images/blogPosts/post4/ux-flowchart.png'
import flow1 from '@/assets/images/blogPosts/post4/framework-map-1.png'
import flow2 from '@/assets/images/blogPosts/post4/framework-map-2.png'

export default {
  id: 3,
  title: 'My UX Framework Flowchart',
  slug: 'my-custom-ux-framework-flowchart',
  date: '2025-08-12',

  summary:
    'A visual flowchart I created, modeled after the Google UX Designer Course framework, to help me quickly understand and remember the overall UX process from start to finish.',

  content: `
    <p class="blog-paragraphs">When I first went through the <em>Google UX Designer Course</em> on Coursera, one of the biggest takeaways for me was how structured and cyclical the UX process can be. Even though I had studied frameworks before, the course tied it together in a way that made sense. But I still found myself wanting a single visual I could reference, something that mapped out the <strong>general flow</strong> of the UX framework from start to finish.</p>

    <p class="mb-2">That’s why I created this custom flowchart. It’s directly inspired by the Google UX Designer course, but organized in my own way so I can quickly see the big picture at a glance. It follows a typical user-centered process, from identifying a problem to launching an MVP, and it also accounts for iteration. It shows when to loop back if issues arise during usability testing.</p>

    <p class="mb-2">The flow is read from top to bottom, with diamond shapes indicating decision points and arrows showing possible paths forward or back. The boxes contain the key activities in each step of the process, such as empathizing with users, ideating solutions, prototyping, and testing. The right-hand side shows logical loops — for example, going back to earlier research phases if the problem wasn’t clearly defined.</p>

    <p class="mb-2">On the left side of the diagram, I’ve also included <strong>possible artifacts or assets</strong> that could be produced in each stage. These serve as quick reminders of the tangible outputs you might create along the way, from empathy maps and POV statements to high-fidelity prototypes and usability test plans. I find this especially useful for planning projects or keeping track of deliverables when working in a team.</p>

    <p class="mb-2">This isn’t meant to be a rigid rulebook. Every project is different. But having a visual like this helps me remember the core flow and ensures I don’t skip critical steps in the UX process. It’s a tool for my own work, but I think it can also be helpful for other designers who want a clear, high-level map of the journey from idea to implementation.</p>

    <img src=${flow1}  alt="Custom UX framework part 1"" />
    <img src=${flow2}  alt="Custom UX framework part 1"" />
  `,

  tags: ['ux-frameworks', 'design-thinking', 'ux-process'],
  category: 'UX Design',

  author: {
    name: 'Juan Lagunas',
    avatar: avatar1,
    bio: 'UX Designer, Developer, and Dreamer',
    website: 'https://yourportfolio.com',
    twitter: 'https://twitter.com/yourhandle',
  },

  coverImage: uxFlowCover,
  thumbnail: uxFlowCover,
  imageAlt: 'Custom UX framework flowchart diagram',

  readingTime: '4 min read',
  published: true,
  updated: '2025-08-12',

  relatedPosts: ['top-ux-design-frameworks', 'design-thinking-guide'],
  showToc: false,

  problem:
    'I wanted a single, easy-to-read visual that showed the full UX process from start to finish, including iteration points and possible outputs at each stage.',
  solution:
    'I designed my own flowchart, modeled after the Google UX Designer Course framework, to visualize the process and list associated artifacts.',
  outcome:
    'A reusable reference diagram that helps me and others keep track of the UX process and deliverables for any project.',
}
