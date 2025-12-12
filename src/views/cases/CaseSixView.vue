<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

// Store
const theme = useThemeStore()

// Computed Properties
const denkiVideo = computed(() => (theme.isDarkMode ? denkiVideoDark : denkiVideoLight))

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
import divider from '@/assets/images/divider-img.png'
import coverImg from '@/assets/images/cases/case-six/case-cover-img-denki.png'
import empathyMapNakamura from '@/assets/images/cases/case-six/empathy-denki-nakamura.png'
import empathyMapTanabe from '@/assets/images/cases/case-six/empathy-denki-tanabe.png'
import personaNakamura from '@/assets/images/cases/case-six/persona-denki-nakamura.png'
import personaTanabe from '@/assets/images/cases/case-six/persona-denki-tanabe.png'
import journeyNakamura from '@/assets/images/cases/case-six/journey-denki-nakamura.png'
import journeyTanabe from '@/assets/images/cases/case-six/journey-denki-tanabe.png'
import tdBeforeBranding from '@/assets/images/cases/case-six/denki-branding-before.png'
import tdBeforeTrust from '@/assets/images/cases/case-six/denki-trust-before.png'
import tdBeforeNav from '@/assets/images/cases/case-six/denki-navigation-before.png'
import tdAfterBranding from '@/assets/images/cases/case-six/denki-branding-after.png'
import tdAfterTrust from '@/assets/images/cases/case-six/denki-trust-after.png'
import tdAfterNav from '@/assets/images/cases/case-six/denki-navigation-after.png'

// Icons
import smileIcon from '@/assets/svgs/highlights/smile-icon.svg'
import medalIcon from '@/assets/svgs/highlights/medal-icon.svg'
import thumbsIcon from '@/assets/svgs/highlights/thumbs-icon.svg'
import upwardIcon from '@/assets/svgs/highlights/upward-icon.svg'
import arrowBlue from '@/assets/svgs/right-arrow-blue.svg'
import arrowPink from '@/assets/svgs/right-arrow-pink.svg'
import analysisImg from '@/assets/svgs/research/analysis-research.svg'
import storeImg from '@/assets/svgs/research/store-research.svg'
import userImg from '@/assets/svgs/research/user-research.svg'

// Videos
import denkiVideoLight from '@/assets/images/cases/case-six/denki-video-light.mp4'
import denkiVideoDark from '@/assets/images/cases/case-six/denki-video-dark.mp4'

// Spinner Logic
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
const { isLoading } = usePageLoader(2000)
const spinnerMessage = 'Almost Ready!'

const uxIntro = `A quick breakdown of how this project came together from strategy to launch. This TLDR highlights the key steps I took, the decisions that shaped the final experience, and how the redesign supported Tanaka Denki’s business goals.`
const uxSubheading = 'Project Workflow at a Glance'

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Clearer Service Understanding',
    description:
      'Users quickly understood what Tanaka Denki offers. Streamlined hierarchy and clearer copy reduced confusion and helped visitors reach high-value pages like Services and Projects without drop-offs.',
  },
  {
    title: 'Stronger Contact Intent',
    description:
      'Early analytics showed more clicks on both the phone CTA and contact button. With a cleaner layout and mobile-first design, visitors moved from browsing to action faster and with less friction.',
  },
  {
    title: 'Credibility Boost',
    description:
      'Stakeholders and early testers described the site as more professional and trustworthy. This stronger first impression supports B2B decision-making and positions Tanaka Denki as a reliable local partner.',
  },
  {
    title: 'Improved Engagement',
    description:
      'Pages held attention longer due to better readability, structure, and visuals. Mobile users in particular scrolled deeper and explored more sections, signaling higher overall engagement.',
  },
]

// Solution Tabs Data
const beforeTabs = [
  {
    title: 'Navigation',
    image: tdBeforeNav,
    heading: 'Unstructured Layout',
    description:
      'Pages were long, dense, and inconsistent. Key information like services, certifications, and past work was buried. Users had to scroll and guess where things were. This slowed evaluation and hurt credibility.',
  },
  {
    title: 'Branding',
    image: tdBeforeBranding,
    heading: 'Outdated Visuals',
    description:
      'The old site relied on mismatched colors, unbalanced spacing, and non-branded components. To B2B users, this created doubt about professionalism. The digital impression did not match the quality of the real company.',
  },
  {
    title: 'Trust Signals',
    image: tdBeforeTrust,
    heading: 'Low Transparency',
    description:
      'Certifications, project history, and safety compliance were missing or hard to find. For municipal and industrial clients, these signals are essential for risk reduction. Without them, the company looked less reliable than it actually is.',
  },
]

const afterTabs = [
  {
    title: 'Navigation',
    image: tdAfterNav,
    heading: 'Clear Information Architecture',
    description:
      'I reorganized the site into simple, predictable sections: Services, Projects, Company Info, Certifications, and Contact. Users now find what they need in seconds. This directly supports faster vendor evaluation and fewer drop-offs.',
  },
  {
    title: 'Branding',
    image: tdAfterBranding,
    heading: 'Modern and Consistent UI',
    description:
      'I introduced a fully unified design system: spacing rules, typography, color usage, layout patterns, and component styling. The brand now communicates stability and expertise, increasing perceived trust at first glance.',
  },
  {
    title: 'Trust Signals',
    image: tdAfterTrust,
    heading: 'Proof of Expertise',
    description:
      'Certifications, past projects, safety information, and company credentials are now front and center. These updates directly reduce user hesitation and give decision-makers the confidence to follow through with inquiries.',
  },
]

// Reflections Data
const reflections = [
  {
    title: 'Freelance work demands clarity.',
    icon: arrowBlue,
    description:
      'Working directly with stakeholders taught me the value of fast communication, structured updates, and guiding clients through each UX decision with confidence.',
  },
  {
    title: 'Designing across cultures requires adaptation.',
    icon: arrowPink,
    description:
      'Japanese UX norms prioritize detail and upfront information. Balancing that expectation with modern IA pushed me to adapt my process instead of relying on Western standards.',
  },
  {
    title: 'Brand identity must support business goals.',
    icon: arrowBlue,
    description:
      'I had to modernize the brand without disconnecting it from its industry. The design needed to feel clean and reliable, but still approachable and local. Every decision aimed at building trust quickly.',
  },
  {
    title: 'International UX requires precision.',
    icon: arrowPink,
    description:
      'Working in Japanese, handling content in two languages, and presenting to stakeholders in their native language made accuracy essential. It strengthened my attention to detail and cross-cultural communication.',
  },
  {
    title: 'Complex systems need simple foundations.',
    icon: arrowBlue,
    description:
      'Between CMS structure, form handling, and technical constraints, the build had many moving parts. Clear architecture and clean documentation made the final product stable and scalable.',
  },
  {
    title: 'This project expanded my range.',
    icon: arrowPink,
    description:
      'It blended UX, UI, branding, development, and client management. It improved my ability to deliver professional work end to end, even under real-world constraints and cultural expectations.',
  },
]
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
      url="https://tdss.co.jp"
      workTitle="Tanaka Denki Website Redesign"
      :tags="[
        'UX Research',
        'Information Architecture',
        'Visual Design',
        'Front-End Development',
        'CMS Integration',
      ]"
      :imgSrc="coverImg"
      :paragraphs="[
        'Tanaka Denki Service is a solar maintenance company based in Ishikawa, Japan. Their existing WordPress site had not been updated in years and no longer reflected the professionalism or reliability of their business. The content was difficult to scan, visually outdated, and overwhelming for internal staff to maintain.',
        'I partnered with the company to redesign the entire website using Nuxt 4, Tailwind CSS, and a streamlined Contentful CMS. My focus was improving clarity, communication, and trust for their core audience, which includes universities, public institutions, and medium-sized businesses across the region. The result is a modern, mobile-first, and easy-to-maintain website that supports stronger communication and long-term business growth.',
      ]"
      role="UX Designer, UX Researcher, Developer"
      date="November – December 2025"
      toolkit="Figma, Nuxt 4, Tailwind CSS, Contentful, Netlify"
      pdfFile="case-study-6-tanaka.pdf"
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
      <source :src="denkiVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseProblem
      id="problem-section"
      problemStatement="Tanaka Denki’s original website lacked clarity, structure, and credibility. Key services were buried, contact information was inconsistent, and the visual design did not reflect the professionalism of a licensed electrical safety contractor. For a company whose work focuses on compliance, inspections, and long-term maintenance, the site failed to communicate reliability or expertise."
      problemStatementB="Navigation issues and poor information hierarchy made it difficult for decision-makers to understand what the company offered. The outdated WordPress build also required manual upkeep that the team rarely performed. As a result, the site did little to support sales, trust building, or long-term client acquisition."
      userResearchIntro="I approached the redesign with a clear goal: understand how corporate and public-sector clients evaluate maintenance vendors and identify the friction points that slowed their decision process. Through market research, competitor analysis, and stakeholder conversations, patterns quickly emerged that shaped the strategic direction of the new site."
      :research-methods="[
        {
          caption: 'Competitive Analysis',
          imageSrc: analysisImg,
          description:
            'Reviewed 5 regional solar maintenance websites to identify common UX gaps and benchmark communication standards.',
        },
        {
          caption: 'Stakeholder Interviews',
          imageSrc: userImg,
          description:
            'Spoke directly with leadership to understand operational needs, client expectations, and internal limitations around updating content.',
        },
        {
          caption: 'Market Research',
          imageSrc: storeImg,
          description:
            'Studied how municipalities and companies in Japan vet contractors, with a focus on clarity, compliance, and visual trust signals.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Mr. Nakamura – Empathy Map',
          statement: 'Mr. Nakamura – Problem',
          statementDetails:
            'Public-sector facility managers like Mr. Nakamura need immediate clarity when evaluating vendors. Overly cluttered or outdated websites slow decision-making and create uncertainty about service scope, compliance, and reliability.',
          blurb:
            'His empathy map emphasized how critical trust, clarity, and professional presentation are when managing municipal infrastructure. Insights such as frustration with cluttered layouts and a preference for phone-first communication directly influenced the redesigned hierarchy and CTA placement.',
          imageSrc: empathyMapNakamura,
        },
        {
          caption: 'Ms. Tanabe – Empathy Map',
          statement: 'Ms. Tanabe – Problem',
          statementDetails:
            'Operations managers like Ms. Tanabe need quick confirmation of services, maintenance plans, and contact options. Sites with unclear structure or outdated content create friction that slows vendor comparison and disrupts workflow.',
          blurb:
            'Her empathy map highlighted the need for efficient scanning, predictable organization, and clear maintenance-related information. These insights led to stronger service segmentation, prominent CTAs, and a more business-focused layout.',
          imageSrc: empathyMapTanabe,
        },
        {
          caption: 'Mr. Nakamura – Persona',
          statement: 'Mr. Nakamura – Goal',
          statementDetails:
            'Design a professional site that communicates safety, compliance, and reliability at first glance, while making it easy for municipal staff to confirm services and quickly initiate contact.',
          blurb:
            'Mr. Nakamura’s persona showed how vital credibility and trust signals are in public-sector decision-making. His need for clear service explanations and reassurance shaped the structured hierarchy, certifications section, and straightforward contact paths.',
          imageSrc: personaNakamura,
        },
        {
          caption: 'Ms. Tanabe – Persona',
          statement: 'Ms. Tanabe – Goal',
          statementDetails:
            'Create a streamlined website that lets busy operations managers understand offerings quickly, compare vendor value, and share information internally without confusion.',
          blurb:
            'Her persona emphasized efficiency, clarity, and responsiveness. This informed the redesign’s clean layout, simplified service categories, and consistent messaging intended to reduce evaluation time and improve conversion likelihood.',
          imageSrc: personaTanabe,
        },
        {
          caption: 'Mr. Nakamura – Journey Map',
          statement: 'Mr. Nakamura – Hypothesis',
          statementDetails:
            'If the site presents a clean hierarchy, strong compliance signals, and fast access to contact information, then municipal users like Mr. Nakamura will feel confident reaching out for inspections or maintenance support.',
          blurb:
            'His journey map follows a typical workflow: receiving a recommendation, visiting the site, scanning for service fit, confirming compliance, and initiating contact. Pain points included cluttered layouts and unclear service details. Opportunities centered around credibility, clarity, and reducing cognitive load.',
          imageSrc: journeyNakamura,
        },
        {
          caption: 'Ms. Tanabe – Journey Map',
          statement: 'Ms. Tanabe – Hypothesis',
          statementDetails:
            'If the site clearly separates services, highlights maintenance options, and shows social proof, then operations managers like Ms. Tanabe will be more likely to compare positively and move forward with an inquiry.',
          blurb:
            'Her journey map reflects a fast-paced evaluation process: researching vendors, comparing options, reviewing case studies, and passing links to supervisors. Pain points centered on dense content and unclear value. Opportunities focused on scannability, visual hierarchy, and CTA prominence.',
          imageSrc: journeyTanabe,
        },
      ]"
      takeaway="B2B clients depend on clarity, speed, and professionalism when choosing a maintenance partner. By understanding their decision flow and expectations, the redesign positioned Tanaka Denki as a reliable, compliant, and easy-to-contact vendor that supports business continuity."
      quote="I need to confirm your services quickly and know I can trust you."
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseSolution
      id="solution-section"
      introText="The original site made it difficult for potential clients to understand what Tanaka Denki offered, why they should trust the company, and how to contact them quickly. My goal was to create a modern, structured, and credible digital presence that supported real business outcomes."
      introText2="I approached the redesign by breaking down the core UX failures: unclear navigation, weak hierarchy, inconsistent branding, and a complete lack of trust signals. Each issue pointed to the same opportunity: improve clarity and reduce friction for the two primary personas, municipal managers and manufacturing operations leads."
      introText3="The work is shown below in two parts. The first captures the problems in the original site: scattered content, unclear structure, and low perceived credibility. The second shows the improvements I delivered through modern UI, tighter information architecture, and a system that supports long-term business growth."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Before Redesign"
      afterTitle="After Redesign"
      hmwTitle="How Might We"
      hmwIntro="These questions guided the direction of the redesign and kept the work focused on clarity, trust, and measurable business value."
      :hmwItems="[
        {
          question:
            'HMW make service offerings instantly clear for busy municipal and manufacturing users?',
          response: 'Reorganize all content into a clean, predictable hierarchy.',
        },
        {
          question: 'HMW increase trust and reduce doubt during vendor evaluation?',
          response:
            'Use consistent branding, certifications, past projects, and proof of expertise.',
        },
        {
          question: 'HMW improve conversion for users who prefer quick communication?',
          response: 'Prominent call buttons, simplified contact paths, and mobile-first layout.',
        },
      ]"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseOutcome
      id="outcome-section"
      intro="The redesigned site gave Tanaka Denki a clearer, more credible digital presence. Even in the first months after launch, early analytics showed stronger engagement, better navigation behavior, and higher intent to contact. The new IA, modern UI, and mobile-first layout made the site faster to understand and easier to act on."
      context="Because I implemented Google Analytics from day one, I can now track performance weekly and measure real ROI. Early results point to a more confident, user-friendly experience that supports actual business decisions. Below are the initial outcomes shaped by the redesign:"
      :outcomes="outcomeList"
      :icons="icons"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseReflections
      id="reflections-section"
      intro="This project sharpened my ability to design for international clients, manage cultural constraints, and deliver a product that balances brand identity with the expectations of Japan’s B2B solar market. It pushed me to think beyond visuals and consider how trust, clarity, and communication work differently across cultures."
      :reflections="reflections"
    />
    <img :src="divider" alt="divider image" class="mx-auto -scale-40 opacity-75" />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <!-- Step 1 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Understand the Business</h3>
        <p class="text-xs tracking-wide uppercase">Goals, Audience, Constraints</p>
        <p class="mt-3">
          I met with stakeholders to clarify goals, understand service offerings, and identify the
          core audiences. This step grounded the redesign in real needs, not assumptions, and
          revealed the importance of clear communication for B2B clients.
        </p>
      </div>

      <!-- Step 2 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Analyze the Current Experience</h3>
        <p class="text-xs tracking-wide uppercase">Pain Points and Risks</p>
        <p class="mt-3">
          I reviewed the old WordPress site and mapped its UX issues like unclear hierarchy,
          outdated visuals, inconsistent branding, and friction in essential tasks like contacting
          the company. This clarified where the redesign needed to deliver immediate value.
        </p>
      </div>

      <!-- Step 3 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Research the Market</h3>
        <p class="text-xs tracking-wide uppercase">Industry Patterns and Expectations</p>
        <p class="mt-3">
          I reviewed competitor sites and studied patterns across Japan’s solar maintenance
          industry. This helped me design an interface that felt modern but still aligned with the
          information-heavy expectations of Japanese B2B customers.
        </p>
      </div>

      <!-- Step 4 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define the Structure</h3>
        <p class="text-xs tracking-wide uppercase">Navigation and Information Architecture</p>
        <p class="mt-3">
          I reorganized the site into a simple, predictable structure with clear paths to Services,
          Company Info, and Contact. The goal was to reduce decision friction and highlight
          high-value information quickly.
        </p>
      </div>

      <!-- Step 5 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Design the Interface</h3>
        <p class="text-xs tracking-wide uppercase">UI, Branding, and Trust Signals</p>
        <p class="mt-3">
          Using a new visual system, I built layouts that increased clarity, consistency, and trust.
          Colors, spacing, typography, and imagery all reinforced a professional, reliable brand
          without losing the company's approachable tone.
        </p>
      </div>

      <!-- Step 6 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Build the System</h3>
        <p class="text-xs tracking-wide uppercase">Nuxt, Tailwind, CMS, Forms</p>
        <p class="mt-3">
          I built the site with Nuxt 4, Tailwind CSS, and Contentful. Each choice supported speed,
          consistency, and long-term scalability. Netlify Forms handled submissions, while Supabase
          prepared the project for admin access later.
        </p>
      </div>

      <!-- Step 7 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test and Refine</h3>
        <p class="text-xs tracking-wide uppercase">Feedback and Adjustments</p>
        <p class="mt-3">
          I tested layouts with stakeholders, confirmed copy accuracy, and resolved issues like form
          parsing, rich text rendering, and asset handling. Every round made the experience smoother
          and more reliable.
        </p>
      </div>

      <!-- Step 8 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Launch and Measure</h3>
        <p class="text-xs tracking-wide uppercase">Analytics and Continuous Insight</p>
        <p class="mt-3">
          I implemented Google Analytics at launch so I can track engagement, contact intent, and
          scroll behavior over time. This ensures future improvements are guided by real user data,
          not assumptions.
        </p>
      </div>
    </CaseUxLens>
    <BackHomeBtn />
  </div>
</template>

<style scoped></style>
