<script setup>
//Components
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import CaseOutcome from '@/components/reusable/CaseOutcome.vue'
import CaseUxLens from '@/components/reusable/CaseUxLens.vue'
import CaseNav from '@/components/reusable/CaseNav.vue'

import CaseReflections from '@/components/reusable/CaseReflections.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'

// Images
import userPersona from '@/assets/images/cases/user-persona.png'
import journeyMap from '@/assets/images/cases/user-journey.png'
import empathyMap from '@/assets/images/cases/empathy-map.png'
import cafeTrioPhoto from '@/assets/images/home/cafe-triangle-home.png'
import notionBefore from '@/assets/images/cases/case-one/notion-project-before-1.jpg'
import notionAfter from '@/assets/images/cases/case-one/notion-project-after-1.jpg'

// Icons
import smileIcon from '@/assets/svgs/highlights/smile-icon.svg'
import medalIcon from '@/assets/svgs/highlights/medal-icon.svg'
import thumbsIcon from '@/assets/svgs/highlights/thumbs-icon.svg'
import upwardIcon from '@/assets/svgs/highlights/upward-icon.svg'
import arrowBlue from '@/assets/svgs/right-arrow-blue.svg'
import arrowPink from '@/assets/svgs/right-arrow-pink.svg'

// Tab Data
const beforeTabs = [
  {
    title: 'Multi-lingual Functionality',
    image: notionBefore,
    heading: 'Users Can Browse in 3 Languages',
    description:
      'Many of our customers were Japanese locals or international tourists, yet our original site was only in English. To reduce friction and make the experience inclusive, we introduced a language toggle supporting English, Japanese, and Spanish. This directly reflects the empathy work we did early on, understanding our user base and designing with accessibility and cultural inclusivity in mind.',
  },
  {
    title: 'Responsive Design',
    image: notionBefore,
    heading: 'Seamless Experience on Any Device',
    description:
      'The original site was hard to read on mobile and looked clunky on larger screens. By designing mobile-first and leveraging Tailwind CSS breakpoints, we ensured the new site adapts beautifully across devices. This aligns with our ideation and prototyping phase goals which were to prioritize clarity, comfort, and usability in every context.',
  },
  {
    title: 'Interactive Menu',
    image: notionBefore,
    heading: 'Filterable & Image-Based Menu',
    description:
      'We replaced the static PDF menu with a fully interactive layout that lets users filter by food, drinks, or dessert. This improves skimmability and reinforces the playful tone of our brand. It was inspired by direct customer pain points and validated through informal testing and visual consistency analysis during the define phase.',
  },
]

const afterTabs = [
  {
    title: 'One-Touch Contact',
    image: notionAfter,
    heading: 'Instant Call & Map Buttons',
    description:
      'Users can now call us or get directions with a single tap. This wasn’t possible on our old site and created unnecessary barriers. Adding these touch-friendly elements addressed real-world needs uncovered during user journey mapping, particularly around mobile use and last-minute decision-making.',
  },
  {
    title: 'Visual Identity',
    image: notionAfter,
    heading: 'Bold, Human-Centered Design',
    description:
      'Rather than copy the minimalist café style common in Japan, we leaned into color, culture, and personality. From the hero images to iconography, every visual reinforces who we are. This was a direct result of ideating around how to reflect our brand’s emotional tone digitally. This was something we knew was missing before.',
  },
  {
    title: 'Accessibility First',
    image: notionAfter,
    heading: ' Designed with Clarity in Mind',
    description:
      'Accessibility wasn’t an afterthought. It was baked into the code and the visuals. We used semantic HTML, optimized contrast, and minimized cognitive load across pages. This decision grew out of our reflection phase, where we evaluated how even unintentional design choices can exclude users and then did our best  to correct that.',
  },
]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Brand & Space Alignment',
    description:
      'Multiple users commented that the site "felt like us". Which felt like a reflection of our café’s cultural warmth, vibrant personality, and inclusive vibe. This alignment wasn’t accidental; it was the result of dozens of thoughtful design decisions that translated our physical identity into digital form.',
  },
  {
    title: 'Improved Usability',
    description:
      'Visitors or friends and family we asked to test our site consistently remarked on how intuitive. The information architecture, simplified navigation, and one-touch contact buttons all contributed to a smoother user flow. This was especially important for mobile-first users discovering us on the go.',
  },
  {
    title: 'Competitive Distinction',
    description:
      'In contrast to other local cafés, our site stood out for its polish, interactivity, and accessibility. This differentiation didn’t just boost credibility, it sparked genuine curiosity. And often lead to new customer visits. It was a quiet, UX-led marketing tool. Also, it was just another way to express our brand.',
  },
  {
    title: 'Organic Promotion',
    description:
      'Because the site was multilingual, beautifully branded and easy to use. Some visitors said they forwarded it to friends or family. A very common word thrown around was "kawaii" which translates to "cute". Without paid ads or SEO strategy, the site began organically spreading. We believe this a direct outcome of designing something people felt worthy of at least sharing.',
  },
]

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Reflections Data
const reflections = [
  {
    title: 'Reflection 1',
    icon: arrowBlue,
    description: 'I learned that team-wide tools are only helpful if expectations are aligned.',
  },
  {
    title: 'Reflection 2',
    icon: arrowPink,
    description: 'Design systems are most powerful when paired with clear workflows.',
  },
  {
    title: 'Reflection 3',
    icon: arrowBlue,
    description: 'Sometimes the best way to advocate for UX is through quiet consistency.',
  },
  {
    title: 'Reflection 4',
    icon: arrowPink,
    description: 'Proactive work often goes unnoticed, but it builds credibility over time.',
  },
]

// Ux Lens Data
const uxIntro = `This project was completed before I started to formally apply the design thinking
framework but if I were to start it today, here is exactly how I would approach it using a full UX process from the ground up.`

const uxSubheading = 'How I would approach this UX challenge today'
</script>

<template>
  <div class="font-headings mb-28">
    <CaseNav
      :sections="[
        { id: 'overview-section', label: 'Overview' },
        { id: 'problem-section', label: 'Problem' },
        { id: 'solution-section', label: 'Solution' },
        { id: 'outcome-section', label: 'Outcome' },
        { id: 'reflections-section', label: 'Reflections' },
        { id: 'ux-section', label: 'UX Lens' },
      ]"
    />
    <CaseOverview
      id="overview-section"
      title="Project Overview"
      workTitle="Cafe Triangle Redesign"
      :tags="['UX Research', 'Visual Design', 'Front-End Development']"
      :imgSrc="cafeTrioPhoto"
      :paragraphs="[
        'In the second year of running our culture-driven café in Kanazawa, Japan, my wife and I reached a crossroads. We had built Cafe Triangle to reflect the three sides of our life together. My Mexican-American culture, her Japanese culture, and the home we created together, but the daily grind left us burnt out and unable to scale. That’s when I set a personal challenge: teach myself web development and rebuild our entire cafe website from scratch, without templates or shortcuts',
        'Over seven months, I studied every morning before opening shop, eventually launching a fully custom-coded site built with Angular and Tailwind CSS. It was responsive, multilingual, and deeply personal. Designed not just to function, but to feel like an extension of who we were. I didn’t know it then, but I was practicing UX: prioritizing accessibility, clarity, and user-centered design from the very beginning.',
      ]"
      role="UX Designer, UX Researcher"
      date="March – April 2025"
      toolkit="Figma, Canva, Angular, TailwindCSS, Typescript"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseProblem
      id="problem-section"
      problemStatement=" Our original café website, built with Wix, lacked both functionality and personality. It wasn’t responsive, offered no multilingual support, and used static images for our menu. Making it inaccessible to many users, especially Japanese and Spanish speakers. Customers struggled to find basic information like operating hours or contact details, particularly on mobile devices."
      problemStatementB="Beyond usability, the site failed to reflect who we were. Café Triangle was warm, vibrant, and inclusive, but the digital experience felt generic and lifeless. This disconnect became our quiet challenge: to design a website that was not only accessible and user-friendly, but also an honest digital extension of our space and values."
      :artifacts="[
        { caption: 'Persona', imageSrc: userPersona },
        { caption: 'Empathy Map', imageSrc: empathyMap },
        { caption: 'Journey Map', imageSrc: journeyMap },
      ]"
      takeaway="Here we'll expand on or clearly state important takeaways from the visuals above..."
      quote="I will leave this here as another possible text. Maybe a quote?"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseSolution
      id="solution-section"
      introText="To address the limitations of our original site, I redesigned the Café Triangle website from the ground up with a focus on usability, personality, and accessibility. The new site features a fully responsive layout, multilingual support, interactive menu browsing, and one-touch contact tools — all hand-coded with Angular and Tailwind CSS. Every design decision was guided by a single goal: to create a digital experience that felt as welcoming and vibrant as our café itself.

"
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Site Features A"
      afterTitle="Site Features B"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseOutcome
      id="outcome-section"
      intro="The launch of the redesigned Café Triangle website brought immediate, qualitative improvements. Although we didn’t use formal analytics, feedback from friends, family, and customers painted a clear picture: the site was easier to navigate, more informative, and far more aligned with who we were as a brand. It wasn’t just functional, it felt right to the people who used it."
      context="These outcomes reflected a shift not only in usability, but in emotional resonance. The site’s design helped people feel more welcomed, more informed, and more connected to our space. Below are four key themes that emerged from this redesign:"
      :outcomes="outcomeList"
      :icons="icons"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseReflections
      id="reflections-section"
      intro="Here are a few key lessons I took away from this project — what worked, what didn’t, and how it shaped my UX thinking."
      :reflections="reflections"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Empathize</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">
          Users, Context, and Constraints
        </p>
        <p class="mt-3">
          I would begin with stakeholder interviews, user surveys, and observational research to
          understand needs, pain points, and expectations. I’d gather data on current behaviors and
          system limitations.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Identify Core Problem</p>
        <p class="mt-3">
          Using affinity diagrams and insights synthesis, I’d define the most pressing user problem.
          I’d write a clear problem statement and build a lightweight persona to guide design
          decisions.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Explore Multiple Solutions</p>
        <p class="mt-3">
          I’d brainstorm multiple directions using mind mapping, task flows, and early sketches. I’d
          involve stakeholders to validate early ideas before narrowing down.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Prototype</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">
          Design Low & High Fidelity Mockups
        </p>
        <p class="mt-3">
          Using Figma, I’d design wireframes and interactive prototypes focused on hierarchy,
          usability, and accessibility. I'd share drafts with users and collaborators for early
          feedback.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Validate and Iterate</p>
        <p class="mt-3">
          I’d conduct usability testing with real users to observe pain points and confusion. Based
          on feedback, I’d iterate and refine the prototype until it felt intuitive and effective.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver & Measure</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Launch and Track Behavior</p>
        <p class="mt-3">
          I’d ship the solution with tracking in place, gather metrics (engagement, clicks, NPS),
          and plan follow-ups to continuously improve the experience based on real-world usage.
        </p>
      </div>
    </CaseUxLens>
  </div>
</template>

<style scoped></style>
