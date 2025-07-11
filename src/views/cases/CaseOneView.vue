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
import userPersona from '@/assets/images/cases/case-one/persona-cafe.jpg'
import journeyMap from '@/assets/images/cases/case-one/journey-map-cafe.jpg'
import empathyMap from '@/assets/images/cases/case-one/empathy-map-cafe.jpg'
import cafeTrioPhoto from '@/assets/images/home/cafe-triangle-home.png'
import usableFeat from '@/assets/images/cases/case-one/cafe-accesible-feat.png'
import boldFeat from '@/assets/images/cases/case-one/cafe-bold-feat.png'
import languageFeat from '@/assets/images/cases/case-one/cafe-language-feat.png'
import menuFeat from '@/assets/images/cases/case-one/cafe-menu-feat.png'
import responsiveFeat from '@/assets/images/cases/case-one/cafe-responsive-feat.png'
import touchFeat from '@/assets/images/cases/case-one/cafe-touch-feat.png'

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
    image: languageFeat,
    heading: 'Users Can Browse in 3 Languages',
    description:
      'Many of our customers were Japanese locals or international tourists, yet our original site was only in English. To reduce friction and make the experience inclusive, we introduced a language toggle supporting English, Japanese, and Spanish. This directly reflects the empathy work we did early on, understanding our user base and designing with accessibility and cultural inclusivity in mind.',
  },
  {
    title: 'Responsive Design',
    image: responsiveFeat,
    heading: 'Seamless Experience on Any Device',
    description:
      'The original site was hard to read on mobile and looked clunky on larger screens. By designing mobile-first and leveraging Tailwind CSS breakpoints, we ensured the new site adapts beautifully across devices. This aligns with our ideation and prototyping phase goals which were to prioritize clarity, comfort, and usability in every context.',
  },
  {
    title: 'Interactive Menu',
    image: menuFeat,
    heading: 'Filterable & Image-Based Menu',
    description:
      'We replaced the static PDF menu with a fully interactive layout that lets users filter by food, drinks, or dessert. This improves skimmability and reinforces the playful tone of our brand. It was inspired by direct customer pain points and validated through informal testing and visual consistency analysis during the define phase.',
  },
]

const afterTabs = [
  {
    title: 'One-Touch Contact',
    image: touchFeat,
    heading: 'Instant Call & Map Buttons',
    description:
      'Users can now call us or get directions with a single tap. This wasn’t possible on our old site and created unnecessary barriers. Adding these touch-friendly elements addressed real-world needs uncovered during user journey mapping, particularly around mobile use and last-minute decision-making.',
  },
  {
    title: 'Visual Identity',
    image: boldFeat,
    heading: 'Bold, Human-Centered Design',
    description:
      'Rather than copy the minimalist cafe style common in Japan, we leaned into color, culture, and personality. From the hero images to iconography, every visual reinforces who we are. This was a direct result of ideating around how to reflect our brand’s emotional tone digitally. This was something we knew was missing before.',
  },
  {
    title: 'Accessibility First',
    image: usableFeat,
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
      'Multiple users commented that the site "felt like us". Which felt like a reflection of our cafe’s cultural warmth, vibrant personality, and inclusive vibe. This alignment wasn’t accidental; it was the result of dozens of thoughtful design decisions that translated our physical identity into digital form.',
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
    title: 'Instinct is valuable, but process sharpens it.',
    icon: arrowBlue,
    description:
      'When I first built this site, I relied entirely on intuition. Now, I know how much stronger that instinct becomes when paired with tools like design frameworks and knowledge about visual design principles.',
  },
  {
    title: 'Design is about care, not credentials.',
    icon: arrowPink,
    description:
      'This project reminded me that great UX isn’t limited to people with formal titles. It’s about empathy, clarity, and thoughtful execution. Even if you’re teaching yourself from scratch.',
  },
  {
    title: 'Simplicity but vibrant as a design goal.',
    icon: arrowBlue,
    description:
      'The layout, navigation, or color use, all served to keep things simple and user-friendly but make sure we still let the brand personality shine through.',
  },
  {
    title: 'Post-launch is where the real UX begins.',
    icon: arrowPink,
    description:
      'I used to think “done” meant going live. But now I understand that testing, iteration, and user feedback are just as critical as the build. That’s how good becomes great.',
  },
]

// Ux Lens Data
const uxIntro = `This project was completed before I formally adopted the design thinking framework, but if I were to approach it today, I’d apply the full process from the ground up as I learned in the Google UX Design course. Below is how I would structure this project using each phase of the design thinking framework, combining the intuition I had then with the structure and strategy I’ve developed now.

`

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
        'In the second year of running our culture-driven cafe in Kanazawa, Japan, my wife and I reached a crossroads. We had built Cafe Triangle to reflect the three sides of our life together. My Mexican-American culture, her Japanese culture, and the home we created together, but the daily grind left us burnt out and unable to scale. That’s when I set a personal challenge: teach myself web development and rebuild our entire cafe website from scratch, without templates or shortcuts',
        'Over seven months, I studied every morning before opening shop, eventually launching a fully custom-coded site built with Angular and Tailwind CSS. It was responsive, multilingual, and deeply personal. Designed not just to function, but to feel like an extension of who we were. I didn’t know it then, but I was practicing UX: prioritizing usability, accessibility, clarity, and user-centered design from the very beginning.',
      ]"
      role="UX Designer, UX Researcher, Developer, Owner"
      date="January – April 2025"
      toolkit="Figma, Canva, Angular, TailwindCSS, Typescript"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseProblem
      id="problem-section"
      problemStatement="Our original cafe website, built with Wix, lacked both functionality and personality. It wasn’t very responsive, offered no multilingual support, and used a static pdf image for our menu. Making it inaccessible to many users, especially Japanese and Spanish speakers. Customers struggled to find basic information like operating hours or contact details, particularly on mobile devices."
      problemStatementB="Beyond usability, the site failed to reflect who we were. Cafe Triangle was warm, vibrant, and inclusive, but the digital experience felt generic and lifeless. This disconnect became our quiet challenge: to design a website that was not only accessible and user-friendly, but also an honest digital extension of our space and values."
      :artifacts="[
        { caption: 'Persona', imageSrc: userPersona },
        { caption: 'Empathy Map', imageSrc: empathyMap },
        { caption: 'Journey Map', imageSrc: journeyMap },
      ]"
      takeaway="Megumi is a thoughtful, community-oriented cafe-goer who values comfort, cultural richness, and clear pet-friendly policies. Her journey reflects a desire not just for good food, but for experiences that feel welcoming, unique, and worth sharing. When cafes clearly communicate their vibe and inclusivity, she becomes a loyal advocate."
      quote="It's hard to know if a place is truly pet-friendly."
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseSolution
      id="solution-section"
      introText="To address the limitations of our original site, I redesigned the Café Triangle website from the ground up with a focus on usability, personality, and accessibility. The new site features a fully responsive layout, multilingual support, interactive menu browsing, and one-touch contact tools which were all coded in Angular and Tailwind CSS. Every design decision was guided by a single goal: to create a digital experience that felt as welcoming and vibrant as our café itself.

"
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Site Features A"
      afterTitle="Site Features B"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseOutcome
      id="outcome-section"
      intro="The launch of the redesigned Cafe Triangle website brought immediate, qualitative improvements. Although we didn’t use formal analytics, feedback from friends, family, and customers painted a clear picture: the site was easier to navigate, more informative, and far more aligned with who we were as a brand. It wasn’t just functional, it felt right to the people who used it."
      context="These outcomes reflected a shift not only in usability, but in emotional resonance. The site’s design helped people feel more welcomed, more informed, and more connected to our space. Below are four key themes that emerged from this redesign:"
      :outcomes="outcomeList"
      :icons="icons"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseReflections
      id="reflections-section"
      intro="This project was more than just building a website, it was the start of a deeper shift in how I think about design, users, and problem-solving. Looking back, it helped shape the foundation of my UX mindset without me even knowing it. Here are a few key lessons I took away. What worked, what didn’t, and how the experience changed the way I approach design today."
      :reflections="reflections"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Empathize</h3>
        <p class="text-xs tracking-wide uppercase">Users, Context, and Constraints</p>
        <p class="mt-3">
          I’d begin with stakeholder interviews, observational café visits, and digital surveys to
          better understand user behavior, pain points, and expectations. This would be for both
          online and in-person. I’d also run a competitive audit of local cafés' digital presence to
          identify opportunities and gaps. This would mirror the initial research process emphasized
          in the Google course, combining qualitative and quantitative data collection.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase">Identify Core Problem</p>
        <p class="mt-3">
          Using tools like affinity diagrams and insights synthesis, I’d clearly define the primary
          user challenge,for example, “Multilingual users can’t easily access essential café
          information.” I’d create user personas and write a focused problem statement, just like we
          practiced in the course. This step would align my design goals with user needs and ensure
          I stay grounded in real pain points. I'd do what is important to ensure I was not working
          through guesses and assumptions.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase">Explore Multiple Solutions</p>
        <p class="mt-3">
          Here, I’d brainstorm ideas using methods like mind mapping, crazy 8s, and task flows. I’d
          involve collaborators early on. Especially café visitors and my co-founder to help
          validate ideas and ensure I wasn’t designing in a vacuum. I’d also sketch out low-fidelity
          screens on paper or in Figma to explore structure before jumping to high-res visuals.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Prototype</h3>
        <p class="text-xs tracking-wide uppercase">Design Low & High Fidelity Mockups</p>
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
        <p class="text-xs tracking-wide uppercase">Validate and Iterate</p>
        <p class="mt-3">
          Finally, I’d conduct usability tests with real users. This would ideally be a mix of
          Japanese locals, international tourists, and bilingual users. I’d collect feedback using
          structured protocols like task completion questions and “think aloud” techniques. Based on
          the feedback, I’d iterate, refine, and test again to ensure the final product was both
          functional and user-centered.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver & Measure</h3>
        <p class="text-xs tracking-wide uppercase">Launch and Track Behavior</p>
        <p class="mt-3">
          Once launched, I’d implement analytics tools to monitor user behavior. Tracking
          engagement, clicks, bounce rates, and task success. I’d also explore lightweight feedback
          tools like surveys or usability polls to gather real-world insights. From there, I’d build
          a plan for continuous improvement through data-driven iteration, ensuring the design
          evolves with user needs.
        </p>
      </div>
    </CaseUxLens>
  </div>
</template>

<style scoped></style>
