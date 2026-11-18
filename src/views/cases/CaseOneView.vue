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

// Images
import userPersona from '@/assets/images/cases/case-one/persona-cafe.webp'
import journeyMap from '@/assets/images/cases/case-one/journey-map-cafe.webp'
import empathyMap from '@/assets/images/cases/case-one/empathy-map-cafe.webp'
import analysisImg from '@/assets/svgs/research/analysis-research.svg'
import storeImg from '@/assets/svgs/research/store-research.svg'
import userImg from '@/assets/svgs/research/user-research.svg'
import solution1 from '@/assets/images/cases/case-one/cafe-solution-1.webp'
import solution2 from '@/assets/images/cases/case-one/cafe-solution-2.webp'
import solution3 from '@/assets/images/cases/case-one/cafe-solution-3.webp'
import solution4 from '@/assets/images/cases/case-one/cafe-solution-4.webp'
import solution5 from '@/assets/images/cases/case-one/cafe-solution-5.webp'
import solution6 from '@/assets/images/cases/case-one/cafe-solution-6.webp'
import solution7 from '@/assets/images/cases/case-one/cafe-solution-7.webp'
import solution8 from '@/assets/images/cases/case-one/cafe-solution-8.webp'

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
    title: 'Trilingual Localization',
    image: solution1,
    heading: 'Full Site Switching Across EN, JP, and ES',
    description:
      'Implemented instant language switching across English, Japanese, and Spanish. Local residents in Kanazawa, international travelers, and Spanish-speaking guests could read the full menu, hours, and house policies in their own language.',
  },
  {
    title: 'Interactive Menu System',
    image: solution2,
    heading: 'Category Toggles for Lunch, Dessert, and Drinks',
    description:
      'Replaced a hard-to-read scanned PDF of our printed menu with structured, image-led cards. Visitors can filter cleanly between lunch, dessert, and drink offerings with readable pricing on any screen size.',
  },
  {
    title: 'Mobile-First Architecture',
    image: solution3,
    heading: 'Fast, Responsive Discovery on Phones',
    description:
      'Structured the layout around how people actually look up cafes while out in town: clear typography, thumb-friendly navigation, light and dark mode themes, and fast mobile load speeds.',
  },
]

const afterTabs = [
  {
    title: 'One-Click Actions',
    image: solution4,
    heading: 'Instant Map, Call, Email, and Social Links',
    description:
      'Added dedicated one-click buttons for map directions, phone calls, direct email, Instagram, and Facebook so visitors could take action immediately without hunting for contact details.',
  },
  {
    title: 'House Policy Clarity',
    image: solution5,
    heading: 'Upfront Pet-Friendly and Study Signals',
    description:
      'Placed our pet-friendly seating and study-friendly policies directly in the primary content flow, answering the top questions local guests asked before visiting.',
  },
  {
    title: 'Visual & Cultural Identity',
    image: solution6,
    heading: 'Matching the Physical Space Online',
    description:
      'Combined custom food photography, bold color accents, and consistent component styling to reflect the cross-cultural warmth guests experienced inside the cafe.',
  },
  {
    image: solution7,
  },
  {
    image: solution8,
  },
]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Smoother First-Time Visits',
    description:
      'Customers arriving at the cafe already knew the menu options, pet-friendly rules, and hours, cutting down repetitive phone and counter questions.',
  },
  {
    title: 'Full Accessibility for Local & International Guests',
    description:
      'Supporting Japanese, English, and Spanish removed the language barrier created by our original English-only launch site and aligned the web experience with our printed menus.',
  },
  {
    title: 'Consistent Cross-Channel Presence',
    description:
      'One-click links connecting the website, Google Maps, Instagram, and Facebook unified our digital touchpoints and made sharing the cafe effortless for regulars.',
  },
  {
    title: 'Full Technical Ownership',
    description:
      'Building the site from scratch eliminated third-party template constraints and gave us full control over menu updates, localization, and mobile performance during our final year of operation.',
  },
]

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Reflections Data
const reflections = [
  {
    title: 'Daily floor operations are live user research.',
    icon: arrowBlue,
    description:
      'Running the cafe for a year and a half before rebuilding the site gave me a clear log of real customer friction. Every layout and policy decision came directly from observing what confused first-time guests.',
  },
  {
    title: 'Strong information architecture solves practical problems.',
    icon: arrowPink,
    description:
      'At the time, I focused on visual design principles, clean hierarchy, and mobile usability rather than formal UX terminology. Those fundamentals still did the heavy lifting of making the site clear and useful.',
  },
  {
    title: 'Building in code sharpens component thinking.',
    icon: arrowBlue,
    description:
      'Structuring repeatable menu cards, trilingual translation files, and light/dark themes in Angular taught me how design systems scale cleanly across states and languages.',
  },
  {
    title: 'Instrument analytics from day one.',
    icon: arrowPink,
    description:
      'Because this was my first live build, I shipped without analytics tracking. While customer feedback confirmed the site worked well, every project I build now includes event tracking at launch to measure user behavior directly.',
  },
]

// Ux Lens Data
const uxIntro =
  'A concise look at how a year and a half of customer observations at Cafe Triangle shaped a trilingual, mobile-first rebuild.'

const uxSubheading = 'From Storefront Friction to Live Build'
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
      url="https://cafetriangle-refresh.netlify.app/"
      workTitle="Cafe Triangle: Trilingual Website Redesign"
      :tags="['Product Design', 'Information Architecture', 'Multilingual UX', 'Front-End Build']"
      :videoSrc="cafeVideo"
      :paragraphs="[
        'When my wife and I opened Cafe Triangle in Kanazawa, Japan, we launched quickly with a rushed, English-only Wix site. It stayed untouched for a year and a half while we focused on running the shop, creating daily friction for Japanese locals and visitors trying to read a scanned PDF menu or check hours on mobile.',
        'Determined to build a stronger digital presence and expand my technical skill set, I spent early mornings before opening studying web design and front-end development. Eighteen months into running the cafe, I launched a custom-coded, trilingual (English, Japanese, Spanish) site in Angular and Tailwind CSS that served our guests throughout our final year of operation.',
      ]"
      role="Co-Owner, Product Designer, Front-End Developer"
      date="January - April 2025"
      toolkit="Angular, TypeScript, Tailwind CSS, ngx-translate, Netlify"
    />

    <CaseProblem
      id="problem-section"
      problemStatement="Our initial launch site was built solely in English despite operating in Kanazawa, Japan, and relied on a static PDF scan of our printed menu. On mobile phones, items and prices were hard to read, and key details like hours, location, and pet-friendly seating required unnecessary digging."
      problemStatementB="Auditing dozens of local cafe websites revealed widespread gaps in mobile responsiveness, clear house policies, and multilingual access. We needed a fast, welcoming site that answered basic visitor questions immediately and reflected our cross-cultural identity."
      userResearchIntro="This redesign was shaped by eighteen months of daily customer interactions on the cafe floor, recurring phone inquiries, and in-person visits to over ten local cafes to benchmark service flow and digital clarity."
      :research-methods="[
        {
          caption: 'Local Digital Audit',
          imageSrc: analysisImg,
          description:
            'Reviewed dozens of Kanazawa cafe websites to benchmark menu structure, mobile usability, and language availability.',
        },
        {
          caption: 'In-Store Field Visits',
          imageSrc: storeImg,
          description:
            'Visited 10+ local cafes to observe customer flow, signage, seating rules, and how physical spaces aligned with online info.',
        },
        {
          caption: 'Customer Question Log',
          imageSrc: userImg,
          description:
            'Tracked recurring guest questions from daily operations around pet-friendly seating, menu items, hours, and directions.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Persona',
          statement: 'Goal',
          statementDetails:
            'Give local residents, pet owners, and travelers immediate clarity on menu items, house policies, and hours in Japanese, English, or Spanish.',
          blurb:
            'Megumi represents local dog owners and culturally curious guests looking for welcoming spots. Her needs shaped our navigation hierarchy and upfront policy visibility.',
          imageSrc: userPersona,
        },
        {
          caption: 'Empathy Map',
          statement: 'Problem',
          statementDetails:
            'Pinch-zooming a scanned PDF menu on a phone and guessing whether pets are allowed creates friction before a customer ever steps inside.',
          blurb:
            'Mapping visitor hesitations led directly to replacing the PDF menu with categorized interactive cards and placing pet-friendly cues on the main landing flow.',
          imageSrc: empathyMap,
        },
        {
          caption: 'Journey Map',
          statement: 'Hypothesis',
          statementDetails:
            'Pairing a filterable trilingual menu with one-click map, phone, and social actions will make planning a visit effortless on mobile.',
          blurb:
            'Tracing how guests moved from Instagram or Google search to our front door highlighted where one-tap navigation and contact links removed friction.',
          imageSrc: journeyMap,
        },
      ]"
      takeaway="For a neighborhood hospitality business, good UX means answering four things in seconds: what is on the menu, whether guests and pets are welcome, when the doors are open, and how to get there in one tap."
      quote="It's hard to know if a place is truly pet-friendly before showing up."
    />

    <CaseSolution
      id="solution-section"
      introText="I rebuilt the Cafe Triangle website from scratch around clear information architecture, mobile readability, and trilingual access."
      introText2="Every layout choice addressed real friction observed during our first year and a half of operations: instant switching between English, Japanese, and Spanish, category toggles for lunch, dessert, and drinks, light and dark mode support, and one-click actions for maps, email, and social channels."
      introText3="Below is how the core usability features and brand touchpoints came together in the live site."
      hmwTitle="Key Design Questions"
      hmwIntro="Three practical questions guided the site structure from early sketches to live deployment."
      :hmwItems="[
        {
          question: 'How do we make menu browsing effortless on mobile screens?',
          response:
            'Replace the scanned PDF with filterable Lunch, Dessert, and Drinks category tabs.',
        },
        {
          question: 'How do we serve Japanese locals, travelers, and Spanish speakers equally?',
          response:
            'Build instant trilingual switching (EN/JP/ES) across all pages, policies, and menu cards.',
        },
        {
          question: 'How do we reduce friction between discovering the cafe online and visiting?',
          response:
            'Add one-click buttons for map directions, phone calls, email, Instagram, and Facebook.',
        },
      ]"
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Core Usability"
      afterTitle="Actions & Brand"
    />

    <CaseOutcome
      id="outcome-section"
      intro="Deployed eighteen months into running the cafe, the custom site served our community throughout our final year of operation and eliminated the mobile and language bottlenecks of our original launch page."
      context="While I had not yet integrated web analytics on this first build, daily operations and direct customer feedback showed clear improvements:"
      :outcomes="outcomeList"
      :icons="icons"
    />

    <CaseReflections
      id="reflections-section"
      intro="Designing and shipping the site for a business I co-owned taught me how information architecture, visual clarity, and daily customer empathy work together."
      :reflections="reflections"
    />

    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Storefront Observation & Audits</h3>
        <p class="text-xs tracking-wide uppercase">Logging Real Customer Friction</p>
        <p class="mt-3">
          Tracked recurring guest questions over 18 months of daily operations and audited 10+ local
          cafes, pinpointing pain points around our English-only copy and scanned PDF menu.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Information Architecture</h3>
        <p class="text-xs tracking-wide uppercase">Structuring High-Intent Info</p>
        <p class="mt-3">
          Organized the landing experience around what visitors check first: categorized menu
          toggles, pet-friendly and study policies, hours, address, and one-click contact actions.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Trilingual Angular Build</h3>
        <p class="text-xs tracking-wide uppercase">EN/JP/ES & Light/Dark Modes</p>
        <p class="mt-3">
          Built reusable components in Angular and Tailwind CSS with instant language switching,
          category filtering for lunch, dessert, and drinks, and light/dark theme support.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Device Testing & Optimization</h3>
        <p class="text-xs tracking-wide uppercase">Polishing Mobile Performance</p>
        <p class="mt-3">
          Tested responsiveness across phones and desktops with regulars and friends, converting
          images to WebP, self-hosting fonts, and configuring Netlify SPA routing.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Production Launch</h3>
        <p class="text-xs tracking-wide uppercase">Supporting the Final Year</p>
        <p class="mt-3">
          Launched the live site for the cafe's final year of operation, improving menu readability,
          clarifying pet policies upfront, and connecting all social and map channels in one place.
        </p>
      </div>
    </CaseUxLens>
    <BackHomeBtn />
  </div>
</template>

<style scoped></style>
