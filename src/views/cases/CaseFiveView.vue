<script setup>
// Components
import CaseNav from '@/components/reusable/CaseStickyNav.vue'
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
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
import beanMockUp from '@/assets/images/home/bean-mockup.png'

// Icons
import smileIcon from '@/assets/svgs/highlights/smile-icon.svg'
import medalIcon from '@/assets/svgs/highlights/medal-icon.svg'
import thumbsIcon from '@/assets/svgs/highlights/thumbs-icon.svg'
import upwardIcon from '@/assets/svgs/highlights/upward-icon.svg'
import arrowBlue from '@/assets/svgs/right-arrow-blue.svg'
import arrowPink from '@/assets/svgs/right-arrow-pink.svg'

// Spinner Logic
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
const { isLoading } = usePageLoader(2000)
const spinnerMessage = 'Coming Right Up!'

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
const uxIntro = `This was the first project where I intentionally applied the full design thinking framework from start to finish. Following each phase of the process was what I needed. Starting from empathizing with users then moving on to testing real prototypes, not only gave my work structure, it brought clarity and depth to every decision. Instead of relying purely on intuition, I designed with evidence, empathy, and purpose. The result was a brand and product experience that felt both emotionally resonant and strategically sound.`

const uxSubheading = 'How the design thinking framework elevated my process'
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
        { id: 'ux-section', label: 'UX Lens' },
      ]"
    />
    <CaseOverview
      id="overview-section"
      title="Project Overview"
      url="https://dev-jlagunas.github.io/bean-and-beast/#/"
      workTitle="Bean And Beast – UX Capstone Project"
      :tags="['UX Research', 'UI Design', 'Product Design', 'Branding', 'Front-End Development']"
      :imgSrc="beanMockUp"
      :paragraphs="[
        'Bean And Beast is a fictional premium chocolate brand born from a personal art series. What started as a collection of black-and-white animal silhouettes evolved into a UX-driven ecommerce experience built entirely from scratch. I used this capstone project to practice the full design thinking process, from early research to hi-fi prototype to fully coded Vue.js site.',
        'Centered on emotionally rich storytelling, intuitive UI, and a playful but elegant aesthetic, the brand guides users through discovery, personalization, and gift-giving. Everything was created by me: the visual identity, packaging mockups, user research, wireframes, usability testing, and front-end build. This project proves I’m ready to deliver professional UX and that all of this is really fun!',
      ]"
      role="UX Designer, UI Designer, Front-End Developer, Brand Strategist"
      date="March – July 2025"
      toolkit="Figma, Canva, Vue.js, Tailwind CSS, Pinia"
      pdfFile="case-study-5-bean-and-beast.pdf"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseProblem
      id="problem-section"
      problemStatement="Buying chocolate should feel joyful but instead, it’s often overwhelming. Too many options, unclear labels, forgettable packaging, and little emotional connection make it hard for users to find something truly special. Whether shopping for themselves or a gift, users end up choosing the safe option not the best one."
      problemStatementB="I wanted to create a chocolate experience that goes beyond flavor. A digital-first brand that captures curiosity, delivers clarity, and centers the emotional impact of design. From the first click to the last bite, the goal was to build a gifting experience that's bold, memorable, and rooted in story."
      userResearchIntro="To better understand the emotional and practical needs behind chocolate gifting, I began by mapping real user motivations, frustrations, and behaviors. The following visual artifacts helped me define the problem with clarity and keep users at the center of every design decision."
      :artifacts="[
        {
          caption: 'Empathy Map – Lisa',
          blurb:
            'This empathy map revealed how much emotional value Lisa places on discovery, gifting, and visual storytelling. Her behaviors and thoughts helped shape a design that treats chocolate not just as food, but as a meaningful, shareable experience.',
          imageSrc: empathyMapLisa,
        },
        {
          caption: 'Empathy Map – Kevin',
          blurb:
            'Kevin’s empathy map highlighted the importance of visual impact and product-story alignment. His skepticism toward flashy packaging without substance pushed us to design something that looked premium but delivered meaning beneath the surface.',
          imageSrc: empathyMapKevin,
        },
        {
          caption: 'Persona – Lisa',
          blurb:
            'Lisa’s persona showed a strong desire for culturally engaging, giftable treats that felt personal and delightful. Her motivations around exploration and storytelling helped shape a brand that prioritized discovery, charm, and emotional resonance.',
          imageSrc: personaLisa,
        },
        {
          caption: 'Persona – Kevin',
          blurb:
            'Kevin’s persona highlighted the importance of visual storytelling, quality, and intention, especially when it comes to gifting. His frustrations with commercialized aesthetics drove the need for a brand that looked and felt like something truly worth giving.',
          imageSrc: personaKevin,
        },
        {
          caption: 'Journey Map – Lisa',
          blurb:
            'This journey map follows the emotional and behavioral process of a user shopping for a meaningful, gift-worthy chocolate experience. Starting from browsing then moving on to settling on a purchase. It highlights key pain points like packaging doubts and emotional detachment, while revealing opportunities to elevate impact through design, storytelling, and presentation.',
          imageSrc: journeyLisa,
        },
        {
          caption: 'Journey Map – Kevin',
          blurb:
            'This map captures the gifting journey of a visually driven user seeking chocolate that reflects quality and personal taste. It surfaces design-conscious pain points like lackluster packaging, generic aesthetics, and poor customization. These being key moments where storytelling and intentional branding could have shifted the outcome.',
          imageSrc: journeyKevin,
        },
      ]"
      takeaway="Both Lisa and Kevin wanted clarity, confidence, and connection but traditional chocolate sites left them feeling unsure, uninspired, or emotionally detached. By centering user goals, emotional needs, and storytelling, I set out to reimagine what premium chocolate could look and feel like in a digital space."
      quote="Buying chocolate shouldn’t feel like a gamble or a chore."
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseSolution
      id="solution-section"
      introText="This was my first project built from the ground up using the full UX design thinking framework. From early user interviews to wireframes, visual identity, and front-end development, every phase was intentionally applied. The final product is a bold, character-driven chocolate brand and e-commerce experience built to delight, inform, and emotionally connect with design-conscious gift buyers."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="User-Informed Features"
      afterTitle="Visual & Experiential Impact"
    />

    <ArrowTransition customClass="mx-auto" />
    <CaseOutcome
      id="outcome-section"
      intro="Launching Bean And Beast was the culmination of a full design thinking process. This mean starting from research then implementation. While it’s a fictional chocolate brand, the feedback from peers, mentors, and fellow designers confirmed its real-world impact: a visually striking, emotionally resonant brand that felt intentional, polished, and ready for the market."
      context="The project didn’t just meet functional UX goals, it also built a story-driven experience that made users smile, explore, and share. Below are four key takeaways that emerged from this capstone effort:"
      :outcomes="outcomeList"
      :icons="icons"
    />

    <ArrowTransition customClass="mx-auto" />
    <CaseReflections
      id="reflections-section"
      intro="Bean And Beast was more than a design project to me. It was proof that I could lead a UX process from start to finish. It challenged me to think holistically: from empathizing with users to crafting visuals, building structure, and telling a brand story that resonated. This capstone taught me what it really means to design with purpose, and how process transforms intuition into impact."
      :reflections="reflections"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Empathize</h3>
        <p class="text-xs tracking-wide uppercase">Understand the User Experience of Gifting</p>
        <p class="mt-3">
          I began with 5 one-on-one interviews to understand how people approach buying chocolate,
          particularly when it's meant as a gift. I wanted to know their thought process, what
          excites them, and what often frustrates them. This helped me uncover pain points like
          decision fatigue, unclear product differences, and the lack of emotional connection in
          many existing options. These interviews formed the emotional core of this project.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase">Clarify the Problem</p>
        <p class="mt-3">
          Synthesizing the interview data into affinity groups revealed that users felt overwhelmed
          by choices and uninspired by presentation. I created two user personas to represent
          distinct motivations: Lisa, the curious taster, and Kevin, the thoughtful gift-giver. From
          there, I crafted journey maps for each to highlight friction and emotional context. The
          core problem: most online chocolate shops fail to connect emotionally or guide the user
          effectively through a decision.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase">Turn Pain Points Into Possibilities</p>
        <p class="mt-3">
          I explored possible solutions through Crazy 8s sketching, paper wireframes, and user flows
          that aligned with Kevin’s and Lisa’s journeys. I also designed a site map based on natural
          browsing expectations. This helped me organize content around exploration,
          personalization, and storytelling. I wanted users to feel guided but not restricted, and
          to emotionally connect with both the characters and the chocolate.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Prototype</h3>
        <p class="text-xs tracking-wide uppercase">Visualize the Experience</p>
        <p class="mt-3">
          I built low-fidelity wireframes in Figma to test layout logic and content hierarchy,
          followed by high-fidelity mockups that fully captured the bold aesthetic and emotional
          tone of the brand. Every detail—from ribbon color options to character-themed packaging
          was intentional. I designed a quiz to guide indecisive users and integrated a customizable
          gifting flow with optional messages and visual feedback.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test</h3>
        <p class="text-xs tracking-wide uppercase">Validate with Real Users</p>
        <p class="mt-3">
          I shared both lo-fi and hi-fi prototypes with friends and colleagues who resembled my
          personas. Their feedback reinforced that the site felt easy to navigate and special to
          explore. A few shared their confusion when seeing too many options at once, so I refined
          key screens to improve hierarchy and microcopy. This step helped me transform a concept
          into a UX-guided experience.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver & Reflect</h3>
        <p class="text-xs tracking-wide uppercase">Launch with Intention, Grow with Curiosity</p>
        <p class="mt-3">
          While this project isn’t live, I treated it like it was. I structured the code for scale,
          built reusable components in Vue, and organized data through a central Pinia store. I
          wrote this case study to reflect not only the UX process, but how much I learned and loved
          doing it. It’s proof to myself and to future teams that I’m serious about this work and
          excited to grow.
        </p>
      </div>
    </CaseUxLens>
  </div>
  <BackHomeBtn />
</template>

<style scoped></style>
