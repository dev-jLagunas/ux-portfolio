import avatar1 from '@/assets/images/blogPosts/post1/avatar-hoodie.webp'
import coverImg from '@/assets/images/blogPosts/post15/post-15-cover-img.png'

export default {
  id: 15,
  title: 'Building a Daily Content Engine as a Product Designer',
  slug: 'building-a-daily-content-engine-as-a-product-designer',
  date: '2026-09-03',

  summary:
    'When I decided to launch my Japanese learning YouTube channel, I approached it through the lens of product design: identifying real friction points, building modular systems, and creating a sustainable daily production pipeline.',

  content: `
    <p class="blog-paragraphs">A lot of people look at content creation and see a creative hobby. When I decided to launch my YouTube channel, I looked at it through the exact same lens I use for interface and product work: user research, system design, cognitive load, and iterative deployment.</p>

    <p class="mb-2">I have lived in Japan for 10 years. Over the last five, my Japanese plateaued hard. I could get through daily life, but passive study was no longer moving the needle. At the same time, I set a concrete goal for myself: passing the JLPT N1 this coming December.</p>

    <p class="mb-2">I needed high-density daily output. I needed real accountability. Instead of just cramming textbooks in private, I decided to solve two problems at once by launching <a href="https://www.youtube.com/@juantriesjapanese" target="_blank" rel="noopener noreferrer" class="underline font-semibold">Juan Tries Japanese (@juantriesjapanese)</a>.</p>

    <p class="mb-2">The goal was simple: turn my study routine into a micro-learning tool for other intermediate learners, while building a live, public project from scratch.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Treating language content as UX</h2>

    <p class="mb-2">Before recording anything, I spent time looking closely at educational shorts across YouTube, Instagram, and TikTok.</p>

    <p class="mb-2">A lot of language content falls into the same traps: it is too long, the information architecture is messy, or it focuses purely on textbook rules without showing how words function in the real world. Viewers end up passively watching without actually retaining the lesson.</p>

    <p class="mb-2">I wanted to treat every 60-second video as a clean user experience:</p>

    <p class="mb-2"><strong>Format constraints:</strong> Vertical 9:16 video strictly under 59 seconds to respect user attention spans and mobile viewing habits.</p>

    <p class="mb-2"><strong>High information density:</strong> 100% natural-speed spoken Japanese paired with synchronized English and Japanese subtitles so viewers can read and listen at the exact same time.</p>

    <p class="mb-2"><strong>Authentic positioning:</strong> I am not a native speaker or a certified teacher, and I make that clear up front. I am an intermediate learner sharing one specific lesson every day. That framing lowers friction, makes the content relatable, and turns the comment section into an active feedback loop where people can point out mistakes or share their own examples.</p>

    <p class="mb-2">To keep the content balanced, I split it into clear categories:</p>

    <p class="mb-2"><strong>Weekdays:</strong> Core test material covering N3, N2, and N1 vocabulary, grammar patterns, compound verbs, and formal business Japanese (Keigo).</p>

    <p class="mb-2"><strong>Weekends:</strong> Cultural nuance and conversational Japanese, including puns (dajare), loanwords, common idioms, and tongue twisters.</p>

    <p class="mb-2"><strong>One Take Japanese:</strong> A companion long-form format where I sit down and talk about a single topic with zero cuts, zero scripts, and zero subtitles. It strips away the safety net of video editing and forces spontaneous speech recall.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Engineering the production pipeline</h2>

    <p class="mb-2">Having a good content strategy is useless if you cannot deliver it consistently. Posting seven vertical videos a week alongside long-form practice can lead to immediate burnout if you try to wing it every day.</p>

    <p class="mb-2">To make this sustainable, I built an operational system in Notion.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Modular script components</h2>

    <p class="mb-2">Every short uses a standardized architecture. Having a set structure means I never waste mental energy staring at a blank screen. Each script flows through four clear steps:</p>

    <p class="mb-2">1. <strong>Hook and Intro (5 to 8 seconds):</strong> A quick greeting chosen from a pre-written library of tone variations.</p>
    <p class="mb-2">2. <strong>Core Meaning (5 to 10 seconds):</strong> A direct explanation of the target word or grammar point in clear Japanese.</p>
    <p class="mb-2">3. <strong>Contextual Examples (25 to 30 seconds):</strong> Three sample sentences moving from workplace usage to daily life to a relatable, lighter scenario.</p>
    <p class="mb-2">4. <strong>Closing and CTA (5 to 8 seconds):</strong> A brief prompt asking viewers to drop their own sentences in the comments.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Standardizing the assets and workflow</h2>

    <p class="mb-2">I wrote out multiple sets of localized video descriptions, disclaimer options, and tiered hashtag clusters for search optimization. When an export finishes, I do not have to write copy on the fly; everything is indexed and ready to plug in.</p>

    <p class="mb-2">Because the visual layouts, text hierarchies, audio presets, and sound design templates are set up beforehand, the entire loop: filming, rough cut, color grading, audio cleanup, dual subtitles, and final export, takes about 50 minutes total per video.</p>

    <p class="mb-2">I also keep a rolling two-week buffer of fully written, categorized scripts ready to shoot. Currently, I have dozens of scripts organized across grammatical categories and cultural themes. Being weeks ahead keeps the release schedule stable no matter what comes up in daily life.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Early numbers and daily output</h2>

    <p class="mb-2">Right now, the project is still in its early stages. Over 22 shorts are published, YouTube has grown from zero to over 60 subscribers, and cross-posting to Instagram and Facebook is starting to pick up traction with zero missed uploads.</p>

    <p class="mb-2">The metrics are modest, but the product infrastructure is completely functional. Every video published gives me real analytics on retention curves, drop-off points, and thumbnail click-through rates. When someone leaves a comment correcting my pitch accent or asking about a grammar point, that is direct user feedback that shapes how I write the next batch of scripts.</p>

    <h2 class="mt-6 mb-3 text-xl font-semibold">Why this matters to my work as a designer</h2>

    <p class="mb-2">Product design does not begin and end inside design software.</p>

    <p class="mb-2">Design is fundamentally about spotting a real need, establishing constraints, building a system to solve the problem, and showing up every single day to execute and refine it.</p>

    <p class="mb-2">Through this project, I am actively building my Japanese toward passing the N1 this December. Just as importantly, I am using it to practice what I care about most: structured thinking, visual hierarchy, user engagement, and end-to-end operational discipline. It is a live project that proves design thinking works everywhere you apply it.</p>
  `,

  tags: ['ux', 'product-design', 'systems-thinking', 'workflow', 'language-learning', 'youtube'],
  category: 'Case Study',

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
  updated: '2026-09-03',

  relatedPosts: [],
  showToc: false,
}
