<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

// Store
const theme = useThemeStore()

// Computed Properties
const tlfVideo = computed(() => (theme.isDarkMode ? tlfDarkVid : tlfLightVid))

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
import userPersona from '@/assets/images/cases/case-tlf/tlf-persona-1.webp'
import empathyMap from '@/assets/images/cases/case-tlf/tlf-empathy-1.webp'
import journeyMap from '@/assets/images/cases/case-tlf/tlf-journey-1.webp'
import solution1 from '@/assets/images/cases/case-tlf/tlf-solution-1.webp'
import solution2 from '@/assets/images/cases/case-tlf/tlf-solution-2.webp'
import solution3 from '@/assets/images/cases/case-tlf/tlf-solution-3.webp'
import solution4 from '@/assets/images/cases/case-tlf/tlf-solution-4.webp'
import solution5 from '@/assets/images/cases/case-tlf/tlf-solution-5.webp'
import solution6 from '@/assets/images/cases/case-tlf/tlf-solution-6.webp'
import solution7 from '@/assets/images/cases/case-tlf/tlf-solution-7.webp'
import solution8 from '@/assets/images/cases/case-tlf/tlf-solution-8.webp'
import solution9 from '@/assets/images/cases/case-tlf/tlf-solution-9.webp'

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
    title: 'Trust-First Onboarding',
    image: solution1,
    heading: 'Explain the Method Before Asking for a Purchase',
    description:
      'For a brand-new educational product with zero initial reviews, pushing a hard purchase button creates immediate friction. The landing experience prioritizes clear explanations of the learning method, full-book interactive previews, and character introductions so parents can evaluate the books first.',
  },
  {
    title: 'Guided Scroll Tour',
    image: solution2,
    heading: 'A Landing Page Paced Like the Books',
    description:
      'The homepage uses a numbered scroll tour to introduce one core idea at a time. This mirrors how the books teach language, keeping visual density low and helping hesitant parents grasp the system in under a minute.',
  },
  {
    title: 'Character Anchors',
    image: solution3,
    heading: 'Visual Continuity Across Every Surface',
    description:
      'Moko (blue), Niko (purple), and Okja (yellow) serve as consistent behavioral cues across the books and website. Color coding and recurring character roles help young children predict sentence patterns while giving parents a clear series structure.',
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

const solutionB = [
  {
    title: 'Single-Pattern Book UX',
    image: solution4,
    heading: 'Low Cognitive Load for Early Readers',
    description:
      'Each 25 to 33 page book isolates one sentence structure with large typography, romaji and katakana pronunciation guides for parents, and end-of-book review activities. Parents can read aloud naturally without needing prior English fluency.',
  },
  {
    title: 'Bilingual Typography',
    image: solution5,
    heading: 'Designed Directly in Code for JP and EN',
    description:
      'Japanese and English follow completely different line-breaking and spacing rules. Building the web platform directly in Nuxt and Tailwind allowed me to tune line heights, character wrapping, and light/dark mode contrast across real bilingual layouts.',
  },
  {
    title: 'Flexible Navigation',
    image: solution6,
    heading: 'Guided Tour or Direct Exploration',
    description:
      'A sticky progress rail lets first-time visitors follow the step-by-step introduction while allowing returning parents to jump straight to the book catalog, free full-book previews, or Amazon and Rakuten store links.',
  },
]

// Outcome Tabs Data
const outcomeList = [
  {
    title: 'Full Product Ecosystem Shipped',
    description:
      'Designed, illustrated, and published five complete bilingual picture books (over 125 pages total) across Amazon KDP and Rakuten Kobo, paired with a live bilingual web platform featuring embedded full-book previews.',
  },
  {
    title: 'Repeatable Production System',
    description:
      'Built standardized page templates, character assets, and bilingual layout rules that reduced per-book production time while keeping visual hierarchy, pronunciation guides, and activity pages uniform across all five titles.',
  },
  {
    title: 'Zero-Inventory Digital Validation',
    description:
      'Launching e-book first eliminated upfront printing and warehouse costs while proving the end-to-end publishing pipeline. Initial sales came primarily from personal networks, giving me real-world feedback on format preferences.',
  },
  {
    title: 'Clear Post-Launch Channel Insights',
    description:
      'Running initial social promotion revealed two clear realities: Japanese parents strongly prefer physical picture books for toddlers, and sustaining consumer growth requires ongoing parenting-influencer marketing. Recognizing that channel mismatch, I paused active promotion while keeping the catalog live.',
  },
]

// Reflections Data
const reflections = [
  {
    title: 'Designing in code exposes real bilingual constraints early.',
    icon: arrowBlue,
    description:
      'Japanese and English text expand and wrap at completely different rates. Iterating directly in the browser let me solve line-break, font-weight, and responsive spacing issues under real language switching.',
  },
  {
    title: 'Subtle branding choices shape user trust.',
    icon: arrowPink,
    description:
      'Research showed Japanese parents look for native English credibility when choosing home study materials. Publishing under the pen name Joe Lapalo was an intentional UX trust signal designed to remove doubt for parents browsing online marketplaces.',
  },
  {
    title: 'Shipping a product and marketing a product are two different jobs.',
    icon: arrowBlue,
    description:
      'Building five books and a custom bilingual web app played directly to my strengths in systems and product execution. Once live, I realized that day-to-day consumer marketing in the parenting niche was not work I wanted to pursue long term.',
  },
  {
    title: 'Format matters as much as interface.',
    icon: arrowPink,
    description:
      'Digital distribution kept financial risk at zero, but parents reading with two-to-six-year-olds strongly favor physical books over screens. If I revisit this series later, small-batch physical printing for direct distribution is the clear next step.',
  },
]

// TLDR
const uxIntro =
  'A practical look at how The Language Friends went from a local observation in Japan to five published bilingual books and a live web platform.'

const uxSubheading = 'Project Breakdown'
</script>

<template>
  <div class="font-main pb-24 md:pb-0">
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
      url="https://the-language-friends.com/"
      workTitle="The Language Friends: Bilingual Children's Book Series"
      :tags="['Product Design', 'Design Systems', 'Bilingual UX', 'End-to-End Execution']"
      :videoSrc="tlfVideo"
      :paragraphs="[
        'The Language Friends started from a simple observation while browsing children’s books at a city hall in Japan. Drawing on over eight years of teaching English in Japan, I saw how early English materials often overwhelm young kids and parents with grammar rules before children feel comfortable speaking.',
        'I designed and built a complete bilingual learning ecosystem from scratch: five original 25 to 33 page picture books published on Amazon KDP and Rakuten Kobo, paired with a Japanese-first bilingual web platform featuring full-book interactive previews. Every piece was built as a modular system to balance educational clarity with real-world publishing constraints.',
      ]"
      role="Product Designer, Brand & Character Designer, Front-End Developer"
      date="December 2025 - January 2026"
      toolkit="Nuxt 4, Vue 3, Tailwind CSS, GSAP, Canva Pro, Netlify"
      pdfFile="case-study-tlf.pdf"
    />

    <CaseProblem
      id="problem-section"
      problemStatement="Parents in Japan face growing pressure to introduce English early, yet most beginner materials treat language like a school test. Books packed with grammar notes or dense vocabulary create anxiety for children and leave parents feeling unqualified to read aloud at home."
      problemStatementB="My goal was to design a calm, confidence-first English system that fits naturally into daily family routines. Both the books and the website needed to remove teaching pressure for parents while giving children visual repetition they could understand immediately."
      userResearchIntro="To shape the product around real family habits in Japan, I combined competitive analysis of existing children’s English books, bilingual language acquisition principles, and eight years of firsthand classroom and parent-child teaching experience."
      :research-methods="[
        {
          caption: 'Market & Book Audit',
          imageSrc: analysisImg,
          description:
            'Reviewed popular English picture books and KDP titles in Japan to identify common friction points in typography, bilingual layout, and parental usability.',
        },
        {
          caption: 'Language Acquisition Principles',
          imageSrc: analysisImg,
          description:
            'Structured the learning flow around comprehensible input and pattern repetition so children internalize sentence structure visually without explicit grammar drills.',
        },
        {
          caption: '8+ Years Teaching Insight',
          imageSrc: userImg,
          description:
            'Drew directly from years of teaching toddlers, elementary students, and parents in Japan to understand where learners hesitate and what builds speaking confidence.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Persona',
          statement: 'Focus',
          statementDetails:
            'Support Japanese parents who want to share English at home with their two-to-six-year-old children without feeling like they have to act as a teacher.',
          blurb:
            'Yuki represents busy parents looking for approachable, low-stress resources. Her needs shaped the pronunciation guides, calm visual pacing, and clear parent onboarding on the website.',
          imageSrc: userPersona,
        },
        {
          caption: 'Empathy',
          statement: 'Insight',
          statementDetails:
            'Parents worry about mispronouncing words or choosing materials that are too academic, causing them to delay home English exposure altogether.',
          blurb:
            'Mapping parental hesitation led to adding katakana and romaji reading cues inside the books and offering full-book free previews on the site before purchase.',
          imageSrc: empathyMap,
        },

        {
          caption: 'Journey',
          statement: 'Opportunity',
          statementDetails:
            'Parents discovering a new independent book series online need clear proof of quality and pedagogical intent before committing to a purchase.',
          blurb:
            'Tracing the path from social discovery to marketplace checkout highlighted the need for a guided web tour that explains the learning method upfront.',
          imageSrc: journeyMap,
        },
      ]"
      takeaway="Early language products succeed when they lower anxiety for both the child and the parent. Clear visual patterns, pronunciation support, and transparent previews turn hesitant browsers into confident readers."
      quote="I don't need to teach perfectly. I just want to share English with my child in a way that feels natural."
    />
    <CaseSolution
      id="solution-section"
      introText="Because The Language Friends launched as a brand-new independent series with no existing brand recognition, the product experience had to earn trust before asking parents to buy."
      introText2="I designed the books and website as one connected system. The books use fixed sentence patterns, color-coded characters, and bilingual support to make reading effortless, while the web app walks parents through the learning method and lets them read full books for free before visiting Amazon or Rakuten."
      introText3="Below is how the product strategy, visual system, and bilingual web architecture work together across both surfaces."
      :beforeTabs="solutionA"
      :afterTabs="solutionB"
      beforeTitle="Product & Brand System"
      afterTitle="Bilingual Web Experience"
      hmwTitle="Key Design Questions"
      hmwIntro="Three core questions shaped both the book templates and the web platform."
      :hmwItems="[
        {
          question:
            'How can parents read English aloud with confidence even if they are not fluent themselves?',
          response:
            'Pair one simple English sentence pattern per page with natural Japanese translations and pronunciation cues.',
        },
        {
          question:
            'How do we keep young children engaged without overwhelming them with visual clutter?',
          response:
            'Use three color-coded cat characters (Moko, Niko, Okja) and consistent page layouts to anchor meaning.',
        },
        {
          question: 'How do we build credibility for a brand-new independent book series online?',
          response:
            'Lead with a guided web tour, clear pedagogical explanations, and embedded full-book previews.',
        },
      ]"
    />
    <CaseOutcome
      id="outcome-section"
      intro="I took The Language Friends from an initial concept to a live, multi-channel product ecosystem: five published bilingual picture books on Amazon KDP and Rakuten Kobo alongside a custom bilingual web application."
      context="Launching digital-first kept upfront financial risk at zero and revealed clear lessons about product format and go-to-market fit:"
      :outcomes="outcomeList"
      :icons="icons"
    />
    <CaseReflections
      id="reflections-section"
      intro="Building five full-length picture books, an original character system, and a bilingual web platform solo taught me a lot about systemized production, cross-cultural trust signals, and the difference between building a product and running consumer marketing."
      :reflections="reflections"
    />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Observation & Domain Insight</h3>
        <p class="text-xs tracking-wide uppercase">Identifying the Confidence Gap</p>
        <p class="mt-3">
          Browsing children's books at a local city hall sparked a clear connection to my eight-plus
          years teaching in Japan: early English materials focus heavily on grammar and correctness,
          leaving young kids anxious and parents unsure how to help.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Pedagogical & Character System</h3>
        <p class="text-xs tracking-wide uppercase">Designing for Pattern Recognition</p>
        <p class="mt-3">
          Created three color-coded characters (Moko, Niko, Okja) and a repeatable 25 to 33 page
          book structure built around one sentence pattern per book, bilingual text, and end-of-book
          activities.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Code-First Bilingual Web App</h3>
        <p class="text-xs tracking-wide uppercase">Solving JP/EN Typography in Production</p>
        <p class="mt-3">
          Built the website directly in Nuxt 4 and Tailwind CSS to handle real Japanese and English
          typography switching, light and dark modes, a guided scroll tour, and embedded full-book
          previews.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Multi-Marketplace Publishing</h3>
        <p class="text-xs tracking-wide uppercase">Shipping Five Titles Digitally</p>
        <p class="mt-3">
          Produced and formatted five complete books, publishing them across Amazon KDP and Rakuten
          Kobo under a native-sounding pen name to establish immediate marketplace credibility with
          zero inventory risk.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Post-Launch Reality & Evaluation</h3>
        <p class="text-xs tracking-wide uppercase">Assessing Channel & Format Fit</p>
        <p class="mt-3">
          Early feedback from initial sales confirmed parents love the clarity of the books, while
          also showing that toddler books perform best in physical print and require ongoing
          parenting-niche social marketing. I kept the catalog live while pausing active promotion.
        </p>
      </div>
    </CaseUxLens>
    <BackHomeBtn />
  </div>
</template>
