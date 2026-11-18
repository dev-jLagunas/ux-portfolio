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
import empathyMapNakamura from '@/assets/images/cases/case-six/empathy-denki-nakamura.webp'
import personaNakamura from '@/assets/images/cases/case-six/persona-denki-nakamura.webp'
import journeyNakamura from '@/assets/images/cases/case-six/journey-denki-nakamura.webp'
import solution1 from '@/assets/images/cases/case-six/denki-solution-1.webp'
import solution2 from '@/assets/images/cases/case-six/denki-solution-2.webp'
import solution3 from '@/assets/images/cases/case-six/denki-solution-3.webp'
import solution4 from '@/assets/images/cases/case-six/denki-solution-4.webp'
import solution5 from '@/assets/images/cases/case-six/denki-solution-5.webp'
import solution6 from '@/assets/images/cases/case-six/denki-solution-6.webp'
import solution7 from '@/assets/images/cases/case-six/denki-solution-7.webp'
import solution8 from '@/assets/images/cases/case-six/denki-solution-8.webp'
import solution9 from '@/assets/images/cases/case-six/denki-solution-9.webp'

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

const uxIntro = `How I took this rebuild from initial discovery and wireframes to a live production site as a solo freelance designer.`
const uxSubheading = 'How It Came Together'

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Active Inquiry Pipeline',
    description:
      'While phone calls remain the primary channel in Japanese B2B, the redesigned site began generating consistent email inquiries through the new contact flow, proving visitors could actually find and trust the service offerings.',
  },
  {
    title: 'Zero-Bottleneck Publishing',
    description:
      'Moving off a bloated WordPress dashboard to a focused Contentful setup eliminated a three-year content stall. Non-technical staff can now publish company news and project updates without calling a developer.',
  },
  {
    title: 'Stronger B2B Positioning',
    description:
      'Company leadership noted an immediate lift in client perception when sharing the URL during sales introductions, aligning their digital presence with the scale of their commercial and municipal contracts.',
  },
  {
    title: 'Ongoing Client Retention',
    description:
      'Since launch, the client has re-engaged me to scope and build additional site features to support their expansion into a new headquarters facility.',
  },
]

// Solution Features Data (Kept on existing beforeTabs/afterTabs props for component compatibility)
const beforeTabs = [
  {
    title: 'Information Architecture',
    image: solution1,
    heading: 'Scannable B2B Service Hierarchy',
    description:
      'Reorganized the site around the exact sequence municipal and corporate facility buyers use to vet contractors: core solar maintenance services, past project capacity, safety credentials, and direct contact paths.',
  },
  {
    title: 'Japanese Typography & Grids',
    image: solution2,
    heading: 'High-Density Clarity Without Clutter',
    description:
      'Japanese infrastructure buyers expect thorough technical documentation upfront. I tuned line heights, font weights, and modular card grouping so dense service specs stay easy to scan on both desktop and mobile.',
  },
  {
    title: 'Trust & Credibility Signals',
    image: solution3,
    heading: 'Upfront Track Record & Licensing Proof',
    description:
      'Surfaced key operational proof points, including their 5 MW+ maintenance track record, licensing compliance, and regional client history, giving decision-makers immediate confidence before reaching out.',
  },
]

const afterTabs = [
  {
    title: 'Phone-First Conversion',
    image: solution4,
    heading: 'Persistent Call Actions & Streamlined Inquiry Flow',
    description:
      'Aligned conversion paths with real Japanese B2B habits by pairing prominent tap-to-call buttons and clear office hours with a friction-free Netlify contact form for written quote requests.',
  },
  {
    title: 'Visual & Brand System',
    image: solution5,
    heading: 'Cohesive Industrial Identity',
    description:
      'Established a unified visual system built on clean technical blues, balanced whitespace, and modular service cards that reflect a licensed commercial electrical contractor.',
  },
  {
    title: 'Contentful CMS Workflow',
    image: solution6,
    heading: 'Friction-Free Publishing for Office Staff',
    description:
      'Replaced an overwhelming WordPress dashboard with a focused Contentful setup and global rich-text styling, enabling non-technical staff to publish news and project updates independently.',
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

// Reflections Data
const reflections = [
  {
    title: 'Working solo means owning every trade-off.',
    icon: arrowBlue,
    description:
      'Without a separate PM, copywriter, or dev team, I had to balance visual polish against practical maintenance. Every design choice had to be something I could build cleanly and the client could actually run.',
  },
  {
    title: 'Western minimalism does not always translate in Japan.',
    icon: arrowPink,
    description:
      'Stripping away text to make the site look sleek would have hurt trust. Japanese B2B buyers look for thorough technical details upfront, so the real design problem was organizing density, not deleting it.',
  },
  {
    title: 'Internal staff are users too.',
    icon: arrowBlue,
    description:
      'A redesign fails if the site goes stale six months later. Watching office staff struggle with WordPress made it clear that simplifying the publishing workflow was just as critical as fixing the public homepage.',
  },
  {
    title: 'Stakeholder alignment happens in the details.',
    icon: arrowPink,
    description:
      'Conducting discovery, presenting design rationale, and iterating on technical copy directly in Japanese pushed me to communicate clearly and translate vague business requests into concrete UI decisions.',
  },
]
</script>

<template>
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
  <div class="font-main mb-28">
    <CaseOverview
      id="overview-section"
      title="Project Overview"
      url="https://tdss.co.jp"
      workTitle="Tanaka Denki Website Redesign"
      :tags="[
        'Product Design',
        'Information Architecture',
        'Design Systems',
        'Japanese UX',
        'End-to-End Delivery',
      ]"
      :videoSrc="denkiVideo"
      :paragraphs="[
        'Tanaka Denki System Services (TDSS) is a 20-person commercial solar maintenance company in Ishikawa, Japan. When they brought me on as a solo freelance designer, their website had not been updated in three years. Cluttered layouts and a confusing WordPress backend left them with an outdated digital brochure that undermined their credibility with corporate and municipal clients.',
        'I owned the entire rebuild from initial discovery and information architecture to visual design, front-end production, and CMS setup. The goal was straightforward: give B2B facility managers a clear, trustworthy way to verify services and initiate contact, while giving internal staff a publishing setup they could actually use.',
      ]"
      role="Lead Product Designer (End-to-End Freelance)"
      date="11/25 - 1/2026"
      toolkit="Figma, Nuxt 4, Tailwind CSS, Contentful, Netlify"
      pdfFile="case-study-denki.pdf"
    />
    <CaseProblem
      id="problem-section"
      problemStatement="TDSS maintains solar infrastructure for commercial plants, universities, and municipal buildings, yet their website looked neglected. Key service details were buried in dense, unformatted blocks, low-contrast yellow text hurt readability, and inconsistent layouts made it hard for facility buyers to verify licensing and scope."
      problemStatementB="The problem was not just visual. Because the legacy WordPress dashboard was intimidating for non-technical staff, nobody updated the site for three years. In Japanese B2B contracting, an inactive website signals operational risk, hurting sales conversations before a buyer ever picks up the phone."
      userResearchIntro="Before touching layouts, I audited the existing site, reviewed five regional solar maintenance competitors, and interviewed company leadership and staff to see how buyers actually evaluate vendors and where internal workflows broke down."
      :research-methods="[
        {
          caption: 'Competitive Audit',
          imageSrc: analysisImg,
          description:
            'Benchmarked 5 regional solar contractors to see how competitors structure compliance proof, service tiers, and high-density technical specs.',
        },
        {
          caption: 'Stakeholder Interviews',
          imageSrc: userImg,
          description:
            'Interviewed leadership and office staff to map sales workflows, phone inquiry habits, and why internal CMS updates had stalled.',
        },
        {
          caption: 'Buyer Vetting Research',
          imageSrc: storeImg,
          description:
            'Analyzed how municipal and manufacturing buyers in Japan screen electrical contractors, focusing on trust signals and contact preferences.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Persona',
          statement: 'Goal',
          statementDetails:
            'Let municipal and corporate facility managers confirm service scope, safety compliance, and contact details within seconds of landing.',
          blurb:
            'Public-sector buyers like Mr. Nakamura visit vendor sites after receiving a business card or referral. If the site looks disorganized, they question the contractor’s field reliability.',
          imageSrc: personaNakamura,
        },
        {
          caption: 'Empathy',
          statement: 'Problem',
          statementDetails:
            'Dense, unstructured pages and buried phone numbers create friction for busy managers comparing multiple maintenance vendors.',
          blurb:
            'Mapping buyer frustrations confirmed that aggressive web forms are secondary in Japanese B2B. Decision-makers want visible credentials and an immediate phone number.',
          imageSrc: empathyMapNakamura,
        },

        {
          caption: 'Journey Map',
          statement: 'Hypothesis',
          statementDetails:
            'Pairing scannable service grids with upfront track-record metrics and persistent phone CTAs will shorten vendor evaluation and increase inquiries.',
          blurb:
            'Tracing the path from initial referral check to inquiry showed exactly where buyers stalled: verifying past installation capacity and finding direct contact hours.',
          imageSrc: journeyNakamura,
        },
      ]"
      takeaway="Japanese B2B buyers expect thorough information upfront, not stripped-down marketing copy. The real challenge was organizing high-density technical and compliance details so busy managers could scan them fast and reach out with confidence."
      quote="I need to confirm your services quickly and know I can trust you."
    />
    <CaseSolution
      id="solution-section"
      introText="I built a custom design system tailored to Japanese B2B expectations, focusing on helping facility managers verify credibility quickly while keeping day-to-day updates effortless for a small office team."
      introText2="The rebuild centered on three core pillars: structuring service information around how buyers vet contractors, designing a clean Japanese typographic hierarchy that handles dense technical specs without clutter, and replacing WordPress with a focused Contentful publishing workflow."
      introText3="Below is a breakdown of the key UX, visual, and technical features across the redesigned site."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="UX & Structure"
      afterTitle="Conversion & CMS"
      hmwTitle="Key Design Questions"
      hmwIntro="Three practical questions kept the rebuild focused on buyer trust and day-to-day usability."
      :hmwItems="[
        {
          question:
            'How do we present dense technical services without overwhelming busy facility managers?',
          response:
            'Modular service cards, clear visual grouping, and scannable Japanese typography.',
        },
        {
          question: 'How do we build instant credibility with municipal and corporate buyers?',
          response:
            'Upfront installation metrics (5 MW+ track record), safety credentials, and clean industrial branding.',
        },
        {
          question: 'How do we stop the site from going stale again after launch?',
          response:
            'Replace WordPress with a stripped-down Contentful setup for easy blog updates.',
        },
      ]"
    />
    <CaseOutcome
      id="outcome-section"
      intro="The rebuilt site gave TDSS a credible, mobile-ready presence that reflects the real scale of their operations. Beyond cleaner visuals, the redesign fixed the operational bottlenecks that kept their previous site frozen for years."
      context="With Google Analytics wired in from day one, the team now has visibility into traffic and inquiry behavior. Here is what changed after launch:"
      :outcomes="outcomeList"
      :icons="icons"
    />
    <CaseReflections
      id="reflections-section"
      intro="Handling discovery, visual systems, Japanese client communication, and front-end execution as a solo designer taught me how much real-world UX depends on practical trade-offs rather than textbook frameworks."
      :reflections="reflections"
    />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <!-- Step 1 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Audit & Stakeholder Discovery</h3>
        <p class="text-xs tracking-wide uppercase">Mapping Real Bottlenecks</p>
        <p class="mt-3 md:text-lg leading-normal">
          Reviewed the legacy WordPress site, benchmarked five regional competitors, and interviewed
          leadership and staff. Discovered that buyers relied heavily on phone inquiries and staff
          avoided updates because the CMS felt overwhelming.
        </p>
      </div>

      <!-- Step 2 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Information Architecture</h3>
        <p class="text-xs tracking-wide uppercase">Structuring for B2B Vetting</p>
        <p class="mt-3 md:text-lg leading-normal">
          Reorganized scattered pages into a clear flow built around buyer evaluation: core solar
          maintenance services, past project capacity, company credentials, recruitment, and direct
          contact options.
        </p>
      </div>

      <!-- Step 3 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Visual System & Japanese UI</h3>
        <p class="text-xs tracking-wide uppercase">Balancing Density with Clarity</p>
        <p class="mt-3 md:text-lg leading-normal">
          Designed a cohesive blue and neutral palette with structured grids and tuned Japanese line
          heights. Kept the detailed technical specs B2B buyers expect while eliminating visual
          clutter and low-contrast text.
        </p>
      </div>

      <!-- Step 4 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Production Build & CMS</h3>
        <p class="text-xs tracking-wide uppercase">From Figma to Live Deployment</p>
        <p class="mt-3 md:text-lg leading-normal">
          Built the responsive site from scratch in Nuxt 4 and Tailwind CSS, connecting Contentful
          for friction-free blog publishing, Netlify Forms for email inquiries, and GA4 for ongoing
          analytics.
        </p>
      </div>

      <!-- Step 5 -->
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Launch & Post-Launch Iteration</h3>
        <p class="text-xs tracking-wide uppercase">Refining Live Behavior</p>
        <p class="mt-3 md:text-lg leading-normal">
          Handled DNS cutover, tested mobile tap-to-call and form routing across devices, and
          continued partnering with the client on post-launch feature additions as their operations
          expanded.
        </p>
      </div>
    </CaseUxLens>
    <section class="mt-12 border-t border-slate-100 pt-10">
      <h2 class="text-2xl font-semibold tracking-wide mb-6">From the customer</h2>

      <div class="rounded-sm border border-slate-300 bg-white p-6 shadow-sm">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-lg font-semibold text-dark">Akira Tanaka</p>
            <p class="text-sm text-slate-600">President of Tanaka Denki System Services</p>
          </div>

          <div class="flex items-center gap-1 text-yellow-500">
            <i class="fa-solid fa-star" aria-hidden="true"></i>
            <i class="fa-solid fa-star" aria-hidden="true"></i>
            <i class="fa-solid fa-star" aria-hidden="true"></i>
            <i class="fa-solid fa-star" aria-hidden="true"></i>
            <i class="fa-solid fa-star" aria-hidden="true"></i>
            <span class="sr-only">5 out of 5 stars</span>
          </div>
        </div>

        <p class="mt-6 text-base leading-7 text-slate-800">
          This website was created with great care, beginning with a thorough understanding of our
          needs and continuing seamlessly through design, structure, and development. We are
          extremely satisfied with the clear, user-focused navigation and the refined, professional
          design. Even when our requests were abstract, he responded flexibly and provided accurate,
          thoughtful proposals. Throughout multiple rounds of revisions and additions, every
          improvement was clearly explained, which gave us confidence and satisfaction. After
          launch, customer feedback has been very positive, and the project has contributed to an
          improved company image. He is an exceptionally reliable designer and developer to whom we
          could confidently entrust the entire project. We would gladly work with him again for
          future updates.
        </p>
        <div class="mt-6 border-t border-slate-200 pt-4">
          <p class="text-xs uppercase tracking-wider text-slate-500 mb-2">Original text</p>
          <p class="text-sm leading-6 text-slate-600">
            "本サイトは、当社の要望を丁寧にヒアリングしたうえで、デザイン・構成・開発まで一貫して制作していただきました。
            利用者の視点を重視した分かりやすい導線設計と、洗練されたデザインに非常に満足しています。
            こちらの抽象的な要望にも柔軟に対応し、的確な提案をしていただきました。
            何度も修正追加の要望に対しても、より改善点をきちんと説明を頂き満足しています。
            公開後はお客様からの反応も良く、企業イメージの向上にもつながっています。
            信頼してプロジェクトを任せられる、非常に優れたデザイナー兼開発者です。今後も更新があった場合は依頼させていただきたいです."
          </p>
        </div>
      </div>
    </section>

    <BackHomeBtn />
  </div>
</template>

<style scoped></style>
