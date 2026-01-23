<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

// Store
const theme = useThemeStore()

// Computed Properties
const cafeVideo = computed(() => (theme.isDarkMode ? cafeVideoDark : cafeVideoLight))

//Components
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import CaseOutcome from '@/components/reusable/CaseOutcome.vue'
import CaseUxLens from '@/components/reusable/CaseUxLens.vue'
import CaseNav from '@/components/reusable/CaseStickyNav.vue'
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'
import CaseReflections from '@/components/reusable/CaseReflections.vue'

// Spinner Logic
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
const { isLoading } = usePageLoader(2000)
const spinnerMessage = 'Coming Right Up!'

// Images
import userPersona from '@/assets/images/cases/case-one/persona-cafe.webp'
import journeyMap from '@/assets/images/cases/case-one/journey-map-cafe.webp'
import empathyMap from '@/assets/images/cases/case-one/empathy-map-cafe.webp'
import usableFeat from '@/assets/images/cases/case-one/cafe-accesible-feat.webp'
import boldFeat from '@/assets/images/cases/case-one/cafe-bold-feat.webp'
import languageFeat from '@/assets/images/cases/case-one/cafe-language-feat.webp'
import menuFeat from '@/assets/images/cases/case-one/cafe-menu-feat.webp'
import responsiveFeat from '@/assets/images/cases/case-one/cafe-responsive-feat.webp'
import touchFeat from '@/assets/images/cases/case-one/cafe-touch-feat.webp'

import coverImg from '@/assets/images/cases/case-one/case-cover-img-cafe.png'
import analysisImg from '@/assets/svgs/research/analysis-research.svg'
import storeImg from '@/assets/svgs/research/store-research.svg'
import userImg from '@/assets/svgs/research/user-research.svg'
import divider from '@/assets/images/divider-img.webp'

// Videos
import cafeVideoLight from '@/assets/images/cases/case-one/cafe-video-light.mp4'
import cafeVideoDark from '@/assets/images/cases/case-one/cafe-video-dark.mp4'

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
    title: 'Multilingual Support',
    image: languageFeat,
    heading: 'Browse in Three Languages',
    description:
      'The original site supported only English. Adding English, Japanese, and Spanish reduced friction and made the experience inclusive and culturally aligned.',
  },
  {
    title: 'Responsive Design',
    image: responsiveFeat,
    heading: 'Optimized for Any Screen',
    description:
      'The old site broke down on mobile. A mobile-first rebuild ensured clarity and consistency across all devices.',
  },
  {
    title: 'Interactive Menu',
    image: menuFeat,
    heading: 'Scannable, Visual Menu',
    description:
      'We replaced a static PDF with a filterable, image-based menu to improve readability and reinforce brand tone.',
  },
]

const afterTabs = [
  {
    title: 'One-Touch Contact',
    image: touchFeat,
    heading: 'Call or Navigate Instantly',
    description:
      'Tap-to-call and map buttons removed friction for mobile users making quick decisions.',
  },
  {
    title: 'Visual Identity',
    image: boldFeat,
    heading: 'Human, Culture-Driven Design',
    description:
      'Color, imagery, and layout were used intentionally to express warmth, culture, and personality.',
  },
  {
    title: 'Clear Information Architecture',
    image: usableFeat,
    heading: 'Easy to Scan, Easy to Find',
    description:
      'Content was reorganized around how people actually look for information, with clear sections for menu, hours, location, and contact to reduce confusion and speed up decision-making.',
  },
]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Brand Alignment',
    description:
      'Users consistently said the site felt like the cafe, warm, vibrant, and inclusive.',
  },
  {
    title: 'Clearer Usability',
    description:
      'Navigation, layout, and content structure made key information faster to find, especially on mobile.',
  },
  {
    title: 'Stronger Differentiation',
    description:
      'Compared to local competitors, the site felt more polished and intentional, increasing credibility.',
  },
  {
    title: 'Organic Sharing',
    description:
      'The multilingual, playful design encouraged visitors to share the site with others.',
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
const uxIntro =
  'A quick snapshot of how this project moved from real-world observation to a fully built, user-centered website.'

const uxSubheading = 'TLDR: How the Cafe Triangle redesign came together'
</script>

<template>
  <LoadingSpinner v-if="isLoading" :message="spinnerMessage" />
  <div class="font-main mb-28">
    <CaseNav
      :sections="[
        { id: 'overview-section', label: 'Overview' },
        { id: 'problem-section', label: 'Problem' },
        { id: 'solution-section', label: 'Solution' },
        { id: 'outcome-section', label: 'Outcome' },
        { id: 'reflections-section', label: 'Reflections' },
        { id: 'ux-section', label: 'TLDR' },
      ]"
    />
    <CaseOverview
      id="overview-section"
      title="Project Overview"
      url="https://cafetriangle-refresh.netlify.app/"
      workTitle="Cafe Triangle Redesign"
      :tags="['UX Research', 'Visual Design', 'Front-End Development', 'Branding', 'Accessibility']"
      :imgSrc="coverImg"
      :paragraphs="[
        'In the second year of running our culture-driven cafe in Kanazawa, Japan, my wife and I reached a crossroads. We had built Cafe Triangle to reflect the three sides of our life together. My Mexican-American culture, her Japanese culture, and the home we created together, but the daily grind left us burnt out and unable to scale. That’s when I set a personal challenge: teach myself web development and rebuild our entire cafe website from scratch, without templates or shortcuts',
        'Over seven months, I studied every morning before opening shop, eventually launching a fully custom-coded site built with Angular and Tailwind CSS. It was responsive, multilingual, and deeply personal. Designed not just to function, but to feel like an extension of who we were. I didn’t know it then, but I was practicing UX: prioritizing usability, accessibility, clarity, and user-centered design from the very beginning.',
      ]"
      role="UX Designer, UX Researcher, Developer, Owner"
      date="January – April 2025"
      toolkit="Figma, Canva, Angular, TailwindCSS, Typescript"
      pdfFile="case-study-1-cafe.pdf"
    />
    <video
      :key="theme.isDarkMode"
      autoplay
      loop
      muted
      playsinline
      preload="none"
      width="700"
      height="600"
      class="mx-auto mt-16 w-full max-w-[800px]"
    >
      <source :src="cafeVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p class="text-center">
      <a
        href="https://cafetriangle-refresh.netlify.app/"
        target="_blank"
        class="underline text-blue"
        >View live site</a
      >
    </p>
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseProblem
      id="problem-section"
      problemStatement="The original Cafe Triangle website lacked responsiveness, multilingual support, and clear access to basic information. Key details like hours, menu, and contact info were difficult to find, especially on mobile."
      problemStatementB="The site also failed to reflect the cafe’s warmth and personality. While the physical space felt welcoming and inclusive, the digital experience felt generic and disconnected from the brand."
      userResearchIntro="I approached the redesign with a user-first mindset grounded in daily customer interactions, direct feedback, and real-world observation. These artifacts helped translate intuition into actionable UX insights."
      :research-methods="[
        {
          caption: 'Competitive Analysis',
          imageSrc: analysisImg,
          description: 'Reviewed 10+ cafe websites to benchmark structure, flow, and clarity.',
        },
        {
          caption: 'Field Research',
          imageSrc: storeImg,
          description:
            'Visited 10 local cafes to observe atmosphere, layout, and customer touchpoints.',
        },
        {
          caption: 'Contextual Inquiry',
          imageSrc: userImg,
          description: 'Studied local habits and cultural expectations to guide tone and features.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Empathy Map',
          statement: 'Problem',
          statementDetails:
            'Local customers struggled to find clear, up-to-date information online. The lack of a polished web presence weakened trust and limited growth.',
          blurb:
            'This empathy map surfaced emotional needs around inclusivity, clarity, and vibe. Insights directly shaped content structure and tone.',
          imageSrc: empathyMap,
        },
        {
          caption: 'Persona',
          statement: 'Goal',
          statementDetails:
            'Create a bilingual website that reflects the cafe’s values while clearly communicating menu, hours, and policies.',
          blurb:
            'Megumi represents culturally curious, pet-friendly customers. Her needs guided decisions around messaging, hierarchy, and visual storytelling.',
          imageSrc: userPersona,
        },
        {
          caption: 'Journey Map',
          statement: 'Hypothesis',
          statementDetails:
            'If the site is clear, bilingual, and visually welcoming, customers will better understand the cafe and be more likely to visit or share it.',
          blurb:
            'The journey map revealed early friction and late-stage delight, informing choices like a clear menu, pet cues, and a warmer tone.',
          imageSrc: journeyMap,
        },
      ]"
      takeaway="Megumi values clarity, inclusivity, and atmosphere. When a cafe communicates these well online, she becomes a repeat visitor and advocate."
      quote="It's hard to know if a place is truly pet-friendly."
    />

    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseSolution
      id="solution-section"
      introText="I redesigned Cafe Triangle’s website from the ground up with a clear focus on usability, accessibility, and brand expression. The goal was simple: make the digital experience feel as welcoming and intuitive as the cafe itself."
      introText2="I framed solutions around a small set of guiding questions. These helped translate real user friction into focused design decisions, from mobile access to language support and brand expression."
      introText3="The solutions are grouped into two areas. Core usability improvements address access and clarity. Experience refinements reinforce personality, accessibility, and ease of use. Together, they form a cohesive, user-centered system."
      hmwTitle="How Might We"
      hmwIntro="A few guiding questions shaped every design decision below."
      :hmwItems="[
        {
          question: 'HMW make essential info instantly accessible on mobile?',
          response: 'One-Touch Contact + Responsive Design',
        },
        {
          question: 'HMW reduce language barriers for locals and tourists?',
          response: 'Multilingual Support',
        },
        {
          question: 'HMW reflect our warm, pet-friendly identity online?',
          response: 'Visual Identity + Interactive Menu',
        },
      ]"
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Design Features"
      afterTitle="Design Features"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />

    <CaseOutcome
      id="outcome-section"
      intro="The redesigned Cafe Triangle site immediately improved clarity, navigation, and brand alignment. Informal testing and customer feedback confirmed it felt easier to use and more representative of the cafe."
      context="The redesign improved both usability and emotional connection. Four outcomes stood out:"
      :outcomes="outcomeList"
      :icons="icons"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />

    <CaseReflections
      id="reflections-section"
      intro="This project was more than just building a website, it was the start of a deeper shift in how I think about design, users, and problem-solving. Looking back, it helped shape the foundation of my UX mindset without me even knowing it. Here are a few key lessons I took away. What worked, what didn’t, and how the experience changed the way I approach design today."
      :reflections="reflections"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />

    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Empathize</h3>
        <p class="text-xs tracking-wide uppercase">Real Users, Real Context</p>
        <p class="mt-3">
          I studied local cafe websites, observed in-store behavior, and gathered daily customer
          feedback. This revealed gaps in accessibility, mobile usability, and language support.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase">Clarify the Core Problem</p>
        <p class="mt-3">
          The site was hard to use, English-only, and failed to reflect the cafe’s identity. Users
          struggled to find basic info and understand what made us different.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase">Design for Inclusion and Clarity</p>
        <p class="mt-3">
          I focused on multilingual access, mobile-first layouts, and clear content hierarchy. Every
          idea supported discoverability and emotional connection.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Build</h3>
        <p class="text-xs tracking-wide uppercase">Code as Iteration</p>
        <p class="mt-3">
          I built the site from scratch using Angular and Tailwind, iterating directly in code.
          Features were refined through trial, feedback, and constant usability checks.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test</h3>
        <p class="text-xs tracking-wide uppercase">Refine with Feedback</p>
        <p class="mt-3">
          Friends, family, and customers tested the site across devices. I adjusted spacing,
          navigation, and readability based on their input.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver</h3>
        <p class="text-xs tracking-wide uppercase">Launch and Learn</p>
        <p class="mt-3">
          The site launched as a fast, responsive, multilingual experience. While analytics came
          later, qualitative feedback confirmed strong usability and brand alignment.
        </p>
      </div>
    </CaseUxLens>
    <BackHomeBtn />
  </div>
</template>

<style scoped></style>
