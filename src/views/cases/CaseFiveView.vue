<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'

const { isLoading } = usePageLoader(2000)
const spinnerMessage = 'Coming Right Up!'

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
import identifyFeat from '@/assets/images/cases/case-five/visual-identity.webp'
import paperFeat from '@/assets/images/cases/case-five/paper-wireframes.webp'
import loFiFeat from '@/assets/images/cases/case-five/wireframes.webp'
import hiFiFeat from '@/assets/images/cases/case-five/hifi-frames.webp'
import siteMap from '@/assets/images/cases/case-five/site-map.webp'
import shopFeat from '@/assets/images/cases/case-five/cart-functionality.webp'
import empathyMapLisa from '@/assets/images/cases/case-five/lisa-empathy-map.webp'
import empathyMapKevin from '@/assets/images/cases/case-five/kevin-empathy-map.webp'
import personaLisa from '@/assets/images/cases/case-five/lisa-user-persona.webp'
import personaKevin from '@/assets/images/cases/case-five/kevin-user-persona.webp'
import journeyLisa from '@/assets/images/cases/case-five/lisa-user-journey.webp'
import journeyKevin from '@/assets/images/cases/case-five/kevin-journey-map.webp'
import interviewImg from '@/assets/svgs/research/interview-research.svg'
import competitionImg from '@/assets/svgs/research/official-research.svg'
import ideaImg from '@/assets/svgs/research/best-practice.svg'

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
    title: 'Visual Identity System',
    image: identifyFeat,
    heading: 'A Brand That Tells a Story',
    description:
      'I crafted a bold visual identity from scratch using black-and-white animal silhouettes contrasted against vibrant backgrounds. This storytelling-driven design invites curiosity and reflects the emotional, premium feel of the brand. Built during the Ideate phase, it set the foundation for every touchpoint.',
  },
  {
    title: 'Paper Wireframes',
    image: paperFeat,
    heading: 'Quick Iteration by Hand',
    description:
      'Before touching Figma, I sketched layout ideas on paper using the Crazy 8s method. This helped me explore multiple layout patterns quickly and narrowed my direction based on user personas and brand tone. These sketches served as the starting point for digital prototyping.',
  },
  {
    title: 'Lo-Fi Wireframes',
    image: loFiFeat,
    heading: 'Structure First, Style Later',
    description:
      'I translated paper sketches into grayscale wireframes in Figma, focusing on layout, hierarchy, and CTA placement. This stage allowed me to test user flows without distractions from visual styling, helping me validate usability assumptions before adding polish.',
  },
]

const afterTabs = [
  {
    title: 'Hi-Fi Prototypes',
    image: hiFiFeat,
    heading: 'Branded, Functional, and Test-Ready',
    description:
      'Once structure was locked in, I applied final colors, typography, and imagery in Figma to build high-fidelity mockups of the site. These matched the visual identity and were used in informal testing to gather early feedback on usability and tone.',
  },
  {
    title: 'Component-Based Coding',
    image: siteMap,
    heading: 'Smart Structure Using Vue + Tailwind',
    description:
      'I built the site from scratch using Vue.js and Tailwind CSS, creating reusable components and a clean data store using Pinia. This approach ensured scalability, modularity, and consistent styling across the site.',
  },
  {
    title: 'Real E-Commerce Features',
    image: shopFeat,
    heading: 'Cart Logic and Custom Modals',
    description:
      'To simulate a functioning shop, I implemented a global cart modal, product customization logic, and item tracking which were all stored reactively. Though not a real store, these features demonstrate full UX thinking across interface, logic, and interaction design.',
  },
]

// Outcome Data
const outcomeList = [
  {
    title: 'Brand & Space Alignment',
    description:
      'Multiple users commented that the site “felt directed.” It captured the essence of Bean And Beast is trying to be. Bold, thoughtful, playful, and emotionally rich. This alignment wasn’t accidental; it was the result of deliberate design choices across tone, color, imagery, and interaction.',
  },
  {
    title: 'Improved Usability',
    description:
      'Even without formal analytics, informal testers and friends consistently praised the site’s clarity and ease of use. The responsive layout, clear CTAs, and consistent structure made it simple to browse, shop, and learn, particularly for mobile users on the go.',
  },
  {
    title: 'Distinct Visual Identity',
    description:
      'Compared to typical e-commerce sites or minimalist chocolatier brands, Bean And Beast stood out with its animal characters, bold layouts, and emotional storytelling. This helped create not just a product site, but an experience users felt was unique and worth exploring.',
  },
  {
    title: 'Organic Curiosity & Sharing',
    description:
      'Without SEO, ads, or real marketing, people still shared the site, especially those drawn to the art or branding. Terms like “adorable” or “cool design” popped up in messages. The visual intrigue of the site sparked conversations and shares, which was exactly what I hoped for.',
  },
]

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Reflections Data
const reflections = [
  {
    title: 'Process brings structure to creativity.',
    icon: arrowBlue,
    description:
      'Following the UX design thinking framework from start to finish helped me turn abstract ideas into clear steps. It gave me confidence that good instincts can be sharpened through structure and intent.',
  },
  {
    title: 'Every design choice tells a story.',
    icon: arrowPink,
    description:
      'From the animal characters to the wireframe layout, everything had to reflect the heart of the brand. This taught me how much thought goes into building not just a functional product, but a memorable one.',
  },
  {
    title: 'More visuals means more complexity.',
    icon: arrowBlue,
    description:
      'Managing multiple wireframe versions, visual assets, and storytelling elements pushed me to stay organized and intentional. Not everything needs to be shown but everything needs a reason.',
  },
  {
    title: 'This was the project that proved I’m ready.',
    icon: arrowPink,
    description:
      'End to end, this was my most complete UX process. It tested everything I’ve learned so far and showed me I can design and build with purpose, clarity, and impact. I’m proud of what came out of it.',
  },
]

// UX Lens Data
const uxIntro =
  'A high-level summary of the design process, focusing on the decisions that had the greatest impact on usability, clarity, and outcomes.'

const uxSubheading = 'Design Process at a Glance'
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
      url="https://dev-jlagunas.github.io/bean-and-beast/#/"
      workTitle="Bean And Beast Luxury Chocolates"
      :tags="['UX Research', 'UI Design', 'Product Design', 'Branding', 'Front-End Development']"
      :videoSrc="beanVideo"
      :paragraphs="[
        'Bean And Beast is a fictional premium chocolate brand born from a personal art series. What started as a collection of black-and-white animal silhouettes evolved into a UX-driven ecommerce experience built entirely from scratch. I used this capstone project to practice the full design thinking process, from early research to hi-fi prototype to fully coded Vue.js site.',
        'Centered on emotionally rich storytelling, intuitive UI, and a playful but elegant aesthetic, the brand guides users through discovery, personalization, and gift-giving. I created the visual identity, packaging mockups, user research, wireframes, usability testing, and front-end build.',
      ]"
      role="UX Designer, UI Designer, Front-End Developer, Brand Strategist"
      date="March – July 2025"
      toolkit="Figma, Canva, Vue.js, Tailwind CSS, Pinia"
      pdfFile="case-study-5-bean-and-beast.pdf"
    />
    <CaseProblem
      id="problem-section"
      problemStatement="Buying chocolate should feel joyful but instead, it’s often overwhelming. Too many options, unclear labels, forgettable packaging, and little emotional connection make it hard for users to find something truly special. Whether shopping for themselves or a gift, users end up choosing the safe option not the best one."
      problemStatementB="I wanted to create a chocolate experience that goes beyond flavor. A digital-first brand that captures curiosity, delivers clarity, and centers the emotional impact of design. From the first click to the last bite, the goal was to build a gifting experience that's bold, memorable, and rooted in story."
      userResearchIntro="To better understand the emotional and practical needs behind chocolate gifting, I began by mapping real user motivations, frustrations, and behaviors. The following visual artifacts helped me define the problem with clarity and keep users at the center of every design decision."
      :research-methods="[
        {
          caption: 'Stakeholder Interviews',
          imageSrc: interviewImg,
          description:
            'Conducted one-on-one interviews with five millennial users to understand chocolate habits, gifting behaviors, and emotional drivers.',
        },
        {
          caption: 'Competitive Analysis',
          imageSrc: competitionImg,
          description:
            'Researched existing chocolate brands and packaging to benchmark tone, storytelling, and UX gaps in the market.',
        },
        {
          caption: 'Sketching and Ideation',
          imageSrc: ideaImg,
          description:
            'Ran multiple Crazy 8s sketching sessions based on “How Might We” questions to generate feature ideas like gift flows, lore cards, and a flavor quiz.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Persona',
          statement: 'Goal',
          statementDetails:
            'Develop a chocolate brand rooted in emotional storytelling and a unique visual identity, supported by an e-commerce experience designed for discovery.',
          blurb:
            'Lisa’s profile revealed a need for culturally engaging, giftable treats. Her desire for personal connection shaped a brand identity that prioritizes charm, discovery, and emotional resonance.',
          imageSrc: personaLisa,
        },
        {
          caption: 'Persona',
          statement: 'Kevin – Goal',
          statementDetails:
            'Discover high-end chocolate gifts that align with specific design sensibilities and values, delivering a sense of pride through intentional storytelling.',
          blurb:
            'Focused on quality and intention, Kevin’s persona pushed the brand away from commercialized aesthetics toward a visual narrative truly worth giving.',
          imageSrc: personaKevin,
        },
        {
          caption: 'Empathy',
          statement: 'Problem',
          statementDetails:
            'Design-conscious users often find premium gifting options lackluster, missing the playful elegance and character-driven narratives they value.',
          blurb:
            'This map highlighted Lisa’s emphasis on the joy of discovery. We transitioned the design from a food product to a meaningful, shareable experience through bold visual storytelling.',
          imageSrc: empathyMapLisa,
        },
        {
          caption: 'Empathy Map',
          statement: 'Problem',
          statementDetails:
            'Users like Kevin are often skeptical of flashy packaging that lacks substance, leaving them unsure if a product is worth the premium price tag.',
          blurb:
            'Kevin’s skepticism drove us to ensure the branding wasn’t just premium on the surface, but delivered depth and meaning through an aligned product-story narrative.',
          imageSrc: empathyMapKevin,
        },
        {
          caption: 'Journey',
          statement: 'Hypothesis',
          statementDetails:
            'Combining bold branding with intuitive discovery and gift-centric messaging will drive emotional connection and increase conversion for users like Lisa.',
          blurb:
            'By tracing Lisa’s path from browsing to purchase, we identified critical moments to resolve detachment through curated presentation and expressive design.',
          imageSrc: journeyLisa,
        },
        {
          caption: 'Journey',
          statement: 'Hypothesis',
          statementDetails:
            'If we pair memorable packaging with clear storytelling and customization, design-driven users will feel more confident and connected to the brand.',
          blurb:
            'Tracing the gifting journey highlighted where generic aesthetics fail. We leveraged these gaps to implement intentional branding that transforms a simple purchase into a personal statement.',
          imageSrc: journeyKevin,
        },
      ]"
      takeaway="Both Lisa and Kevin wanted clarity, confidence, and connection but traditional chocolate sites left them feeling unsure, uninspired, or emotionally detached. By centering user goals, emotional needs, and storytelling, I set out to reimagine what premium chocolate could look and feel like in a digital space."
      quote="Buying chocolate shouldn’t feel like a gamble or a chore."
    />
    <CaseSolution
      id="solution-section"
      introText="Bean And Beast was my first project built entirely from the ground up using the full UX design thinking framework. Unlike my earlier retroactive case studies, this one followed each phase deliberately, from empathy research to coded implementation. My goal was not only to design a product, but to prove I could create a bold, emotionally resonant brand and e-commerce experience with structure and intent at every step."
      introText2="To stay grounded, I framed my ideation around a set of guiding How Might We questions. These questions helped me transform user insights into concrete opportunities: making chocolate giftable and personal, turning the act of purchase into discovery, and helping users choose with confidence. The answers to these questions directly shaped features such as the product quiz, lore system, reusable components, and gift flows."
      introText3="The solutions are grouped into two sets. The first highlights user informed features, empathy driven outputs like personas, Crazy 8s, and system logic that shaped the site’s flows and interactivity. The second focuses on visual and experiential impact. The character branding, emotional storytelling, packaging mockups, and responsive Vue build that brought the concept to life. Together, they reflect the most complete expression of my UX process to date."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Solution Features"
      afterTitle="Solution Features"
      hmwTitle="How Might We"
      hmwIntro="These questions anchored my ideation process and map directly to solution features."
      :hmwItems="[
        {
          question: 'HMW make chocolate feel more personal and gift worthy at first glance?',
          response: 'Character driven packaging, gift box options, and personalization flows',
        },
        {
          question: 'HMW turn buying chocolate into a small, delightful discovery?',
          response: 'Interactive lore system, surprise me button, product quiz, hover reveals',
        },
        {
          question: 'HMW help users choose the right chocolate for a mood, moment, or recipient?',
          response: 'Mood filters, gifting tags, and clear product categories tied to personas',
        },
      ]"
    />
    <CaseOutcome
      id="outcome-section"
      intro="Launching Bean And Beast was the culmination of a full design thinking process. This mean starting from research then implementation. While it’s a fictional chocolate brand, the feedback from peers, mentors, and fellow designers confirmed its real-world impact: a visually striking, emotionally resonant brand that felt intentional, polished, and ready for the market."
      context="The project didn’t just meet functional UX goals, it also built a story-driven experience that made users smile, explore, and share. Below are four key takeaways that emerged from this capstone effort:"
      :outcomes="outcomeList"
      :icons="icons"
    />
    <CaseReflections
      id="reflections-section"
      intro="Bean And Beast was more than a design project to me. It was proof that I could lead a UX process from start to finish. It challenged me to think holistically: from empathizing with users to crafting visuals, building structure, and telling a brand story that resonated. This capstone taught me what it really means to design with purpose, and how process transforms intuition into impact."
      :reflections="reflections"
    />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Empathize</h3>
        <p class="text-xs tracking-wide uppercase">Understand Gifting Behavior</p>
        <p class="mt-3">
          I interviewed five users to understand how people choose chocolate as a gift, what creates
          confidence, and where hesitation appears. This surfaced patterns like decision fatigue,
          weak differentiation, and a lack of emotional payoff in existing brands.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase">Frame the Core Problem</p>
        <p class="mt-3">
          Research showed that most chocolate e-commerce experiences fail to guide users or create
          emotional connection. I defined two personas with distinct motivations and mapped their
          journeys to pinpoint friction in browsing, selection, and gifting confidence.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase">Design for Guidance and Story</p>
        <p class="mt-3">
          I explored layouts, flows, and content structures that balanced exploration with
          direction. Ideas focused on storytelling, character-driven branding, and reducing choice
          overload while preserving discovery.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Prototype</h3>
        <p class="text-xs tracking-wide uppercase">Design the Experience</p>
        <p class="mt-3">
          I built lo-fi and hi-fi prototypes in Figma to refine hierarchy, pacing, and emotional
          tone. Features like guided quizzes, customizable gifting, and visual feedback were
          designed to increase confidence and reduce friction at checkout.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test</h3>
        <p class="text-xs tracking-wide uppercase">Refine with Feedback</p>
        <p class="mt-3">
          I tested prototypes with users similar to the personas and iterated based on clarity and
          flow. Feedback highlighted where visual density caused hesitation, leading to improved
          spacing, hierarchy, and microcopy.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver & Measure</h3>
        <p class="text-xs tracking-wide uppercase">Build for Scale</p>
        <p class="mt-3">
          I implemented the experience using Vue with reusable components and centralized state
          management. The system was designed to scale, support iteration, and translate UX
          decisions cleanly into production-ready code.
        </p>
      </div>
    </CaseUxLens>
    <BackHomeBtn />
  </div>
</template>

<style scoped></style>
