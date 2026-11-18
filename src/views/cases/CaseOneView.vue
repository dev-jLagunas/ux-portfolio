<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

// Store
const theme = useThemeStore()

// Computed Properties
const beanVideo = computed(() => (theme.isDarkMode ? beanVideoDark : beanVideoLight))

// Components
import CaseNav from '@/components/reusable/CaseStickyNav.vue'
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import CaseOutcome from '@/components/reusable/CaseOutcome.vue'
import CaseReflections from '@/components/reusable/CaseReflections.vue'
import CaseUxLens from '@/components/reusable/CaseUxLens.vue'
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'

// Images
import empathyMapLisa from '@/assets/images/cases/case-five/lisa-empathy-map.webp'
import personaLisa from '@/assets/images/cases/case-five/lisa-user-persona.webp'
import journeyLisa from '@/assets/images/cases/case-five/lisa-user-journey.webp'
import interviewImg from '@/assets/svgs/research/interview-research.svg'
import competitionImg from '@/assets/svgs/research/official-research.svg'
import ideaImg from '@/assets/svgs/research/best-practice.svg'
import solution1 from '@/assets/images/cases/case-five/bean-solution-1.webp'
import solution2 from '@/assets/images/cases/case-five/bean-solution-2.webp'
import solution3 from '@/assets/images/cases/case-five/bean-solution-3.webp'
import solution4 from '@/assets/images/cases/case-five/bean-solution-4.webp'
import solution5 from '@/assets/images/cases/case-five/bean-solution-5.webp'
import solution6 from '@/assets/images/cases/case-five/bean-solution-6.webp'
import solution7 from '@/assets/images/cases/case-five/bean-solution-7.webp'
import solution8 from '@/assets/images/cases/case-five/bean-solution-8.webp'
import solution9 from '@/assets/images/cases/case-five/bean-solution-9.webp'

// Videos
import beanVideoLight from '@/assets/images/cases/case-five/bnb-video-light.mp4'
import beanVideoDark from '@/assets/images/cases/case-five/bnb-video-dark.mp4'

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
    title: 'Brand & Packaging System',
    image: solution1,
    heading: 'Six Distinct Character Identities',
    description:
      'Expanded a series of six black-and-white animal illustrations into a complete product lineup. Each chocolate bar pairs a character silhouette and vibrant color palette with custom wrapper mockups, flavor notes, and full nutrition facts.',
  },
  {
    title: 'Paper & Digital Wireframes',
    image: solution2,
    heading: 'Validating Hierarchy Before Visual Polish',
    description:
      'Started with Crazy 8s sketches and translated the strongest flows into grayscale Figma wireframes. Locking in navigation, card density, and gifting entry points early kept the storefront scannable before applying color and imagery.',
  },
  {
    title: 'High-Fidelity Figma Prototypes',
    image: solution3,
    heading: 'Aligning Product Packaging and Storefront UI',
    description:
      'Built high-fidelity Figma screens covering the full catalog, character lore pages, apparel and art frames, and responsive mobile views so the digital experience matched the physical packaging system.',
  },
]

const afterTabs = [
  {
    title: 'Component Architecture',
    image: solution4,
    heading: 'Data-Driven Vue 3 & Tailwind Build',
    description:
      'Translated the Figma prototypes into modular Vue 3 components backed by a centralized Pinia store. Product cards, flavor detail routes, hoodies, and art prints render dynamically from structured data.',
  },
  {
    title: 'Custom Gift-Box Configurator',
    image: solution5,
    heading: 'Adaptive Cart Logic by Product Type',
    description:
      'Built a global cart modal that adapts to what the shopper adds: standard quantity controls for single bars and merch, and an interactive bar-picker when building a custom multi-bar gift box.',
  },
  {
    title: 'End-to-End Checkout Simulation',
    image: solution6,
    heading: '4-Step Order Flow with Receipt Summary',
    description:
      'Engineered a complete four-step checkout experience with empty-cart fallbacks, form state validation, and a live order confirmation receipt displaying itemized selections.',
  },
  {
    image: solution7,
  },
  {
    image: solution8,
  },
  {
    image: solution9,
  },
]

// Outcome Data
const outcomeList = [
  {
    title: 'Complete Retail-Ready Brand System',
    description:
      'Created a cohesive brand ecosystem spanning six chocolate flavors, print-ready packaging mockups with nutrition panels, character lore, apparel, and framed artwork.',
  },
  {
    title: 'Research-Backed Gifting Flows',
    description:
      'Turned qualitative interview findings about buyer hesitation into concrete UI solutions: occasion tags, character personality matching, and custom gift-box bundling.',
  },
  {
    title: 'Production-Grade Front-End Architecture',
    description:
      'Implemented the full storefront in Vue 3, Tailwind CSS, and Pinia with dynamic routing, adaptive cart modals, and a four-step checkout flow ending in a generated order receipt.',
  },
  {
    title: 'Positive Walkthrough Validation',
    description:
      'Reviews with five early participants confirmed high clarity across browsing and gift configuration, with testers noting the polish and cohesion of the brand.',
  },
]

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Reflections Data
const reflections = [
  {
    title: 'Wireframing in Figma first elevates visual craft.',
    icon: arrowBlue,
    description:
      'Starting with paper sketches and grayscale Figma wireframes before writing code gave me space to test layout hierarchy, spacing, and gifting flows without getting pulled into CSS details early.',
  },
  {
    title: 'Connecting brand packaging with UI creates stronger products.',
    icon: arrowPink,
    description:
      'Designing the chocolate wrappers, nutrition labels, merch, and storefront together ensured every touchpoint reinforced the same visual language and tone.',
  },
  {
    title: 'Clean state management simplifies complex UI.',
    icon: arrowBlue,
    description:
      'Using Pinia to manage product data, adaptive cart rules, and multi-step checkout receipts showed how structured front-end architecture supports rich user interactions.',
  },
  {
    title: 'Next step: moderated usability testing.',
    icon: arrowPink,
    description:
      'The immediate next milestone is running structured usability sessions with the original interview participants to observe how quickly they navigate the gift-box configurator and flavor discovery flows.',
  },
]

// UX Lens Data
const uxIntro =
  'A concise breakdown of how an original animal illustration series grew into a researched, wireframed, and coded e-commerce experience.'

const uxSubheading = 'From Illustration Concept to Interactive Storefront'
</script>

<template>
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
      url="https://dev-jlagunas.github.io/bean-and-beast/#/"
      workTitle="Bean & Beast: Character-Driven E-Commerce Experience"
      :tags="['Product Design', 'Design Systems', 'User Research', 'Vue 3 & Pinia']"
      :videoSrc="beanVideo"
      :paragraphs="[
        'Bean & Beast is a self-initiated e-commerce product design project that grew out of an original series of six black-and-white animal illustrations set against vibrant color fields. Seeing how well the artwork worked on packaging mockups, I built out a complete specialty chocolate brand from zero, including flavor profiles, print-ready wrapper designs with nutrition facts, apparel, and art prints.',
        'To turn the brand into an intuitive digital storefront, I ran qualitative user interviews, sketched and wireframed flows in Figma, and engineered a responsive Vue 3 application with Pinia state management, a custom gift-box configurator, and an interactive four-step checkout with order receipt generation.',
      ]"
      role="Product Designer, Brand & Packaging Designer, Front-End Developer"
      date="March - July 2025"
      toolkit="Figma, Vue 3, Pinia, Tailwind CSS, Canva, Photopea"
      pdfFile="case-study-5-bean-and-beast.pdf"
    />
    <CaseProblem
      id="problem-section"
      problemStatement="Buying specialty chocolate online often creates choice overload. Standard product grids list cacao percentages and ingredients without helping shoppers match a flavor to a specific mood, occasion, or gift recipient."
      problemStatementB="My goal was to design an e-commerce experience that makes online gift selection intuitive and memorable, pairing distinct character storytelling with guided bundling and clear product hierarchy."
      userResearchIntro="Before designing screens, I interviewed five consumers (ages 33 to 41) about how they buy chocolate for themselves, while traveling, and as gifts, alongside a competitive audit of specialty chocolatiers."
      :research-methods="[
        {
          caption: 'User Interviews (n=5)',
          imageSrc: interviewImg,
          description:
            'Conducted 15 to 20 minute interviews exploring chocolate buying triggers, flavor preferences, and what makes packaging feel gift-worthy.',
        },
        {
          caption: 'Competitive Packaging & UX Audit',
          imageSrc: competitionImg,
          description:
            'Reviewed specialty chocolate brands to evaluate how they balance visual tone, product storytelling, and e-commerce navigation.',
        },
        {
          caption: 'Crazy 8s Sketching',
          imageSrc: ideaImg,
          description:
            'Ran five timed ideation sprints mapped to user pain points to generate features like occasion tags, character lore cards, and custom gift boxes.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Persona',
          statement: 'Goal',
          statementDetails:
            'Help design-conscious shoppers quickly discover distinctive, gift-worthy flavors that feel personal and intentional.',
          blurb:
            'Lisa represents buyers who pick up specialty treats while traveling or shopping for friends. Her preferences shaped our focus on expressive packaging, flavor notes, and gifting cues.',
          imageSrc: personaLisa,
        },
        {
          caption: 'Empathy Map',
          statement: 'Problem',
          statementDetails:
            'Shoppers want gifts that feel thoughtful and memorable, yet flat product catalogs give them little confidence in which flavor fits the recipient.',
          blurb:
            'Mapping buyer hesitations shifted the storefront architecture from a basic product grid toward character-led discovery and curated gift sets.',
          imageSrc: empathyMapLisa,
        },
        {
          caption: 'Journey Map',
          statement: 'Hypothesis',
          statementDetails:
            'Pairing bold character identities with occasion tags and a custom gift-box builder will reduce decision fatigue and encourage multi-bar orders.',
          blurb:
            'Tracing the path from landing page to order receipt highlighted where guided prompts, flavor breakdowns, and clear cart feedback keep momentum high.',
          imageSrc: journeyLisa,
        },
      ]"
      takeaway="When shopping for food gifts online, clear visual storytelling and guided bundling do the heavy lifting that in-store sampling cannot."
      quote="Buying chocolate shouldn't feel like a gamble or a chore."
    />
    <CaseSolution
      id="solution-section"
      introText="I built Bean & Beast across two connected layers: a cohesive brand and packaging system giving each flavor a clear identity, and a stateful e-commerce storefront guiding shoppers from discovery to order confirmation."
      introText2="Every interactive flow ties back to interview insights, using character lore, gifting cues, and a custom box builder to help buyers choose with confidence."
      introText3="Below is how the brand system, Figma wireframes, and Vue 3 front-end architecture come together."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Brand & Figma Process"
      afterTitle="Front-End & Cart Architecture"
      hmwTitle="Key Design Questions"
      hmwIntro="Three core questions guided the wireframes, packaging system, and front-end build."
      :hmwItems="[
        {
          question: 'How might we make online chocolate selection feel personal and gift-worthy?',
          response:
            'Distinct animal character identities, full wrapper packaging mockups, and build-your-own gift boxes.',
        },
        {
          question: 'How might we turn browsing into an engaging brand discovery experience?',
          response:
            'Interactive character lore views, detailed flavor notes, and cohesive merch and art collections.',
        },
        {
          question: 'How might we keep multi-item gift building simple through checkout?',
          response:
            'An adaptive Pinia cart modal paired with a four-step checkout flow and instant order receipt.',
        },
      ]"
    />
    <CaseOutcome
      id="outcome-section"
      intro="Bean & Beast showcases a full product design lifecycle, taking an original illustration concept through qualitative research, Figma prototyping, retail packaging design, and a stateful Vue 3 storefront."
      context="Walkthroughs with five early reviewers confirmed strong visual cohesion and intuitive shopping flows:"
      :outcomes="outcomeList"
      :icons="icons"
    />
    <CaseReflections
      id="reflections-section"
      intro="Building Bean & Beast from a blank canvas reinforced how structured user research, Figma wireframing, and clean component architecture support each other."
      :reflections="reflections"
    />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">User Interviews & Market Audit</h3>
        <p class="text-xs tracking-wide uppercase">Understanding Gifting Drivers</p>
        <p class="mt-3">
          Interviewed five target shoppers and audited specialty chocolate brands, identifying a gap
          between strong packaging design and guided online gift selection.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Personas & Journey Mapping</h3>
        <p class="text-xs tracking-wide uppercase">Pinpointing Buyer Friction</p>
        <p class="mt-3">
          Synthesized interview findings into personas, empathy maps, and journey maps to clarify
          where shoppers hesitate when choosing flavors for others.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Wireframes & High-Fidelity Figma</h3>
        <p class="text-xs tracking-wide uppercase">Structuring Flows Before Code</p>
        <p class="mt-3">
          Sketched Crazy 8s concepts and built low- and high-fidelity Figma prototypes to validate
          product hierarchy, lore pages, and multi-bar gift box flows.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Brand & Retail Packaging System</h3>
        <p class="text-xs tracking-wide uppercase">Wrappers, Nutrition Panels & Merch</p>
        <p class="mt-3">
          Expanded six animal illustrations into complete wrapper mockups with nutritional facts,
          color-coded flavor palettes, apparel, and framed prints.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Vue 3 & Pinia Storefront</h3>
        <p class="text-xs tracking-wide uppercase">Interactive Cart & Order Receipt</p>
        <p class="mt-3">
          Engineered a responsive single-page app featuring reusable product cards, an adaptive
          gift-box cart modal, and a four-step checkout flow with receipt confirmation.
        </p>
      </div>
    </CaseUxLens>
    <BackHomeBtn />
  </div>
</template>

<style scoped></style>
