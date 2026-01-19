<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'

// Store
const theme = useThemeStore()

// Computed Properties
const tlfVideo = computed(() => (theme.isDarkMode ? tlfDarkVid : tlfLightVid))

// Spinner Logic
const { isLoading } = usePageLoader(2000)
const spinnerMessage = 'Thanks for your patience!'

// Components
import CaseNav from '@/components/reusable/CaseStickyNav.vue'
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import CaseOutcome from '@/components/reusable/CaseOutcome.vue'
import CaseReflections from '@/components/reusable/CaseReflections.vue'
import CaseUxLens from '@/components/reusable/CaseUxLens.vue'
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'
import analysisImg from '@/assets/svgs/research/analysis-research.svg'
import userImg from '@/assets/svgs/research/user-research.svg'

// Images
import tlfCoverImg from '@/assets/images/cases/case-tlf/case-cover-img-tlf.png'
import divider from '@/assets/images/divider-img.png'
import userPersona from '@/assets/images/cases/case-tlf/tlf-persona-1.png'
import empathyMap from '@/assets/images/cases/case-tlf/tlf-empathy-1.png'
import journeyMap from '@/assets/images/cases/case-tlf/tlf-journey-1.png'
import trustFeat from '@/assets/images/cases/case-tlf/solution-trust.png'
import tourFeat from '@/assets/images/cases/case-tlf/solution-tour.png'
import characterFeat from '@/assets/images/cases/case-tlf/solution-characters.png'
import pedagogyFeat from '@/assets/images/cases/case-tlf/solution-pedagogy.png'
import typeFeat from '@/assets/images/cases/case-tlf/solution-multilingual.png'
import navFeat from '@/assets/images/cases/case-tlf/solution-nav.png'

// Icons
import smileIcon from '@/assets/svgs/highlights/smile-icon.svg'
import medalIcon from '@/assets/svgs/highlights/medal-icon.svg'
import thumbsIcon from '@/assets/svgs/highlights/thumbs-icon.svg'
import upwardIcon from '@/assets/svgs/highlights/upward-icon.svg'
import arrowBlue from '@/assets/svgs/right-arrow-blue.svg'
import arrowPink from '@/assets/svgs/right-arrow-pink.svg'

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Videos
import tlfLightVid from '@/assets/images/cases/case-tlf/tlf-video-light.mp4'
import tlfDarkVid from '@/assets/images/cases/case-tlf/tlf-video-dark.mp4'

// Solution Tabs Data
const solutionA = [
  {
    title: 'Trust-First UX Strategy',
    image: trustFeat,
    heading: 'Designed to Earn Confidence, Not Rush Sales',
    description:
      'From the very beginning, the site was intentionally designed to explain before selling. Every decision, from the absence of a Buy Now CTA to the emphasis on pedagogy and characters, reflects a clear strategy: earn parental trust first, then invite commitment once confidence is established.',
  },
  {
    title: 'Guided Learning Flow',
    image: tourFeat,
    heading: 'A Landing Page That Teaches Like the Books',
    description:
      'The landing page functions as a guided learning experience, using a numbered scroll tour to introduce ideas one at a time. This mirrors how the books teach language, reinforcing clarity, reducing overwhelm, and helping parents understand the system intuitively.',
  },
  {
    title: 'Character-Driven System Design',
    image: characterFeat,
    heading: 'Characters as UX Anchors',
    description:
      'Moko, Niko, and Okja are not decorative mascots but core UX elements. Their consistent use across the site and books creates familiarity, emotional safety, and continuity, helping both parents and children quickly understand what the product is and how it works.',
  },
]

const solutionB = [
  {
    title: 'Pedagogy Embedded in UX',
    image: pedagogyFeat,
    heading: 'Teaching Principles Reflected in the Interface',
    description:
      'The website mirrors the learning philosophy of the books through clear structure, repetition, visual consistency, and progressive disclosure, helping parents understand how the system works without requiring dense explanations.',
  },

  {
    title: 'Multilingual-First Execution',
    image: typeFeat,
    heading: 'Built for Real Japanese and English Use',
    description:
      'The site was designed directly in code to properly handle the realities of bilingual typography. Spacing, hierarchy, and rhythm were refined with real language switching, prioritizing readability and usability over artificial design perfection.',
  },
  {
    title: 'Flexible, User-Controlled Navigation',
    image: navFeat,
    heading: 'Guidance Without Restriction',
    description:
      'A sticky navigation and clickable progress indicator allow users to follow the guided experience or freely explore. New visitors receive structure, while returning users retain full control, respecting different intent levels without forcing a single path.',
  },
]

// Outcome Tabs Data
const outcomeList = [
  {
    title: 'Launch-Ready Product Ecosystem',
    description:
      'In 45 days, I designed and built a complete, cohesive system: five finished children’s books, a bilingual website, supporting assets, and a clear launch pipeline. The project is fully prepared for release across Amazon, the website, and social channels.',
  },
  {
    title: 'Clear Pedagogical Foundation',
    description:
      'The books and site consistently reflect a confidence-first, pattern-based learning approach grounded in linguistics and real teaching experience. Every design and content decision reinforces clarity, repetition, and low cognitive load for both parents and children.',
  },
  {
    title: 'Scalable Systems, Not One-Off Designs',
    description:
      'Reusable layouts, structured i18n files, character systems, and modular components make it easy to add new books, pages, and features without rework. The system is designed to scale intentionally, not patch itself together later.',
  },
  {
    title: 'Business-Ready Growth Channels',
    description:
      'The site prioritizes trust-building and email capture ahead of aggressive sales, creating a foundation for long-term growth. Instagram and YouTube Shorts are aligned to launch alongside the books, extending reach beyond the site and supporting organic discovery.',
  },
]

// Reflections Data
const reflections = [
  {
    title: 'Designing in code changed how I think.',
    icon: arrowBlue,
    description:
      'Skipping Figma was a deliberate choice. Designing directly in code allowed me to confront real constraints early, especially around multilingual typography and responsive behavior. It made the process more honest and forced decisions that actually work in production.',
  },
  {
    title: 'Multilingual UX is never perfect, only intentional.',
    icon: arrowPink,
    description:
      'Balancing Japanese and English typography revealed limits I couldn’t “design away.” Widows, spacing tradeoffs, and line breaks became exercises in judgment rather than perfection. I learned to prioritize readability and clarity over pixel-level control.',
  },
  {
    title: 'Systems matter more than single artifacts.',
    icon: arrowBlue,
    description:
      'Building five books and a full website in 45 days was only possible because everything was systemized: characters, color rules, layouts, i18n structure, and reusable components. This project reinforced that scalability is a design skill, not an afterthought.',
  },
  {
    title: 'Trust is a design outcome, not a marketing trick.',
    icon: arrowPink,
    description:
      'Resisting aggressive sales patterns forced me to design for confidence and understanding first. The site reflects a belief that when users feel informed and respected, conversion follows naturally. This mindset shaped every major UX decision.',
  },
]

// TLDR
const uxIntro =
  'A high-level summary of the design process, focusing on the decisions that had the greatest impact on usability, clarity, and outcomes.'

const uxSubheading = 'Quick breakdown of process.'
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
      url="https://language-friends.netlify.app/"
      workTitle="The Language Friends — Bilingual Children’s Book Series"
      :tags="[
        'Product Design',
        'UX Strategy',
        'Multilingual UX',
        'Pedagogy-Driven Design',
        'Branding',
        'Front-End Development',
      ]"
      :imgSrc="tlfCoverImg"
      :paragraphs="[
        'The Language Friends began with a simple question: why does early English learning in Japan so often feel stressful, academic, and confidence-damaging for both parents and children? Having spent years teaching English across all ages in Japan, I wanted to explore what early exposure could look like if it focused less on correctness and more on comfort, familiarity, and emotional safety.',
        'What started as an idea for a small set of children’s books gradually grew into a full product ecosystem. I designed a character-driven learning system, built a consistent visual and pedagogical structure, and created a bilingual website to explain the approach to parents clearly and calmly. Rather than separating design and implementation, I iterated directly in code, shaping the experience one component at a time while balancing real constraints like multilingual typography, early childhood learning, and launching a digital-first product.',
      ]"
      role="Product Designer, UX Designer, UI Designer, Front-End Developer, Brand Strategist"
      date="December 2025 – January 2026"
      toolkit="Nuxt 4, Vue 3, Tailwind CSS, GSAP, Canva Pro, Google Gemini, Netlify"
      pdfFile="case-study-7-the-language-friends.pdf"
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
      <source :src="tlfVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseProblem
      id="problem-section"
      problemStatement="Many parents want to introduce English to their young children, but the experience often feels confusing, intimidating, or too academic. English books are either overloaded with explanations, focused on memorization, or assume parents need to actively teach a language they may not feel confident using themselves. Instead of feeling natural and enjoyable, early English exposure becomes something families postpone or avoid."
      problemStatementB="I wanted to rethink what an English learning experience for young children could feel like. Rather than treating English as a subject to master, I aimed to create something gentle, visual, and confidence-first. A series that fits naturally into everyday family life, where parents can simply read together with their child and trust that learning is happening through familiarity, repetition, and joy."
      userResearchIntro="To better understand how families actually approach early English learning, I focused on the emotional side of the experience. I examined parental concerns, daily routines, and how children respond to language through play, visuals, and shared moments. The following research artifacts helped ground the project in real behaviors and guided every decision toward clarity, comfort, and trust."
      :research-methods="[
        {
          caption: 'Pedagogical Research',
          imageSrc: analysisImg,
          description:
            'Reviewed existing early childhood English books and teaching materials to understand how language is typically introduced to young learners, identifying common patterns, gaps, and pressure-heavy approaches.',
        },
        {
          caption: 'Linguistics & Bilingual Theory',
          imageSrc: analysisImg,
          description:
            'Applied principles from linguistics and bilingual language acquisition to design learning patterns based on exposure, repetition, and emotional safety rather than memorization or testing.',
        },
        {
          caption: 'Teaching Experience',
          imageSrc: userImg,
          description:
            'Grounded every decision in over eight years of real-world English teaching experience across all ages, with a deep understanding of how children, parents, and learners respond to language emotionally and cognitively.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Empathy Map',
          statement: 'Insight',
          statementDetails:
            'Japanese parents want to support their child’s English learning, but feel unsure where to start and wary of resources that feel overly academic, overwhelming, or pressure-driven.',
          blurb:
            'This empathy map helped me step into a parent’s mindset and emotional state. It clarified the importance of trust, gentleness, and clarity, shaping everything from visual tone to how learning concepts are introduced.',
          imageSrc: empathyMap,
        },
        {
          caption: 'Persona',
          statement: 'Focus',
          statementDetails:
            'Design for a parent who values emotional safety, simplicity, and long-term confidence over fast results or measurable performance.',
          blurb:
            'Yuki represents parents who want English to feel natural and positive for their child. Her goals guided decisions around pacing, language simplicity, character design, and how the books are framed for parents.',
          imageSrc: userPersona,
        },
        {
          caption: 'Journey Map',
          statement: 'Opportunity',
          statementDetails:
            'Parents often struggle to find age-appropriate English materials that feel approachable, effective, and aligned with how young children actually learn.',
          blurb:
            'Mapping the journey revealed frustration during discovery and uncertainty around trust. This reinforced the need for a calm, transparent website and a book experience that feels supportive rather than instructional.',
          imageSrc: journeyMap,
        },
      ]"
      takeaway="Parents need English learning tools that feel safe, simple, and confidence-building. When the experience respects both the child’s natural learning process and the parent’s comfort level, engagement becomes consistent and meaningful."
      quote="I don’t need to teach perfectly. I just want to share English with my child in a way that feels natural."
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseSolution
      id="solution-section"
      introText="The solution was designed to balance trust-building with long-term business viability. In a category where parents are cautious and credibility matters, the website needed to explain the value of the books before asking for a purchase."
      introText2="By prioritizing clarity, pedagogy, and guided discovery over aggressive sales tactics, the site reduces hesitation and builds confidence. This creates a stronger foundation for repeat visits, word-of-mouth sharing, and email growth, all of which support sustainable revenue over time."
      introText3="Each solution below reflects that balance: thoughtful UX decisions that serve real user needs while quietly setting the groundwork for conversion, retention, and future expansion."
      :beforeTabs="solutionA"
      :afterTabs="solutionB"
      beforeTitle="Solution Features"
      afterTitle="Solution Features"
      hmwTitle="How Might We"
      hmwIntro="These questions helped translate teaching philosophy into concrete UX decisions and guided how the site introduces learning without pressure."
      :hmwItems="[
        {
          question:
            'How might we help parents feel confident sharing English with their child, even if they are not fluent themselves?',
          response:
            'By designing a system that relies on repetition, visuals, and fixed sentence patterns so parents can simply read and participate without teaching.',
        },
        {
          question:
            'How might we introduce English in a way that feels natural rather than academic for young children?',
          response:
            'By focusing on one clear sentence pattern per book and reinforcing it through consistent characters, color coding, and familiar structure.',
        },
        {
          question:
            'How might we build trust with first-time visitors before asking them to buy anything?',
          response:
            'By leading with explanation, pedagogy, and guided exploration through a calm, step-by-step landing experience instead of sales-driven CTAs.',
        },
      ]"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseOutcome
      id="outcome-section"
      intro="The Language Friends is approaching launch, not a retrospective success story. In 45 days, I built a complete, real product from zero: five finished books, a bilingual website, a clear pedagogy, and the systems needed to ship and grow. While analytics and sales data will come post-launch, the product itself is finished, coherent, and ready to be tested in the real world."
      context="Rather than measuring outcomes by metrics that don’t yet exist, this section focuses on what has already been achieved: a launch-ready system, validated learning principles, and a foundation designed to scale. These outcomes reflect execution, judgment, and readiness, not hypothetical impact."
      :outcomes="outcomeList"
      :icons="icons"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseReflections
      id="reflections-section"
      intro="The Language Friends is still days away from launch, but taking it from nothing to a complete, real product in 45 days reshaped how I think about design. Building five books, a bilingual website, and the systems behind them forced me to make hard tradeoffs, trust my judgment, and design under real constraints. This project wasn’t about polish or perfection; it was about execution, clarity, and building something that can exist in the world and grow."
      :reflections="reflections"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Empathize</h3>
        <p class="text-xs tracking-wide uppercase">Notice a Real-World Problem</p>
        <p class="mt-3">
          The project began with a simple observation at a local city hall, where I noticed
          children’s books and started questioning how English is introduced to kids in Japan. That
          moment sparked a deeper reflection on how parents approach early language exposure.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase">Identify the Learning Gap</p>
        <p class="mt-3">
          Through research into Japanese education culture, existing children’s book series, and my
          own teaching experience, I identified a core issue: English learning focuses heavily on
          grammar and correctness, while confidence, speaking, and pattern recognition are often
          neglected.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase">Reframe How Language Is Introduced</p>
        <p class="mt-3">
          I explored how character-driven storytelling, repetition, and visual structure could
          support confidence-first language exposure. The goal was not mastery, but familiarity,
          comfort, and positive emotional association with English.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Prototype</h3>
        <p class="text-xs tracking-wide uppercase">Design Through Code</p>
        <p class="mt-3">
          Instead of formal wireframes or Figma flows, I designed directly in code with light paper
          sketches for direction. This allowed me to iterate quickly, confront multilingual
          typography constraints early, and shape the experience as it would exist in production.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Build</h3>
        <p class="text-xs tracking-wide uppercase">Create the Full System</p>
        <p class="mt-3">
          I produced five complete books and returned to finalize the website, ensuring that
          pedagogy, visuals, characters, and language systems were fully aligned. Everything was
          built as a reusable, scalable system rather than a one-off release.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Launch & Iterate</h3>
        <p class="text-xs tracking-wide uppercase">Prepare for the Real World</p>
        <p class="mt-3">
          With the product now launch-ready, the next phase focuses on analytics, usability testing,
          and real market feedback. The system is designed to evolve post-launch, guided by actual
          user behavior rather than assumptions.
        </p>
      </div>
    </CaseUxLens>
  </div>
  <BackHomeBtn />
</template>
