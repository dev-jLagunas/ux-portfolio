<script setup>
//Components
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import CaseOutcome from '@/components/reusable/CaseOutcome.vue'
import CaseUxLens from '@/components/reusable/CaseUxLens.vue'
import CaseNav from '@/components/reusable/CaseStickyNav.vue'
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'

import CaseReflections from '@/components/reusable/CaseReflections.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
const { isLoading } = usePageLoader(2000)

// Images
import userPersona from '@/assets/images/cases/case-three/persona-marketing.webp'
import journeyMap from '@/assets/images/cases/case-three/journey-map-marketing.webp'
import empathyMap from '@/assets/images/cases/case-three/empathy-map-marketing.webp'
import marketingTrioPhoto from '@/assets/images/home/marketing-system-home.webp'
import beforeVisuals from '@/assets/images/cases/case-three/before-visuals-collage.webp'
import beforeSystem from '@/assets/images/cases/case-three/before-system-collage.webp'
import beforeMessaging from '@/assets/images/cases/case-three/before-messaging-collage.webp'
import afterVisuals from '@/assets/images/cases/case-three/after-visuals-collage.webp'
import afterBranding from '@/assets/images/cases/case-three/after-branding-collage.webp'
import afterSystem from '@/assets/images/cases/case-three/after-system-collage.webp'
import interviewImg from '@/assets/svgs/research/interview-research.svg'
import heuristicsImg from '@/assets/svgs/research/heuristic-research.svg'
import officialImg from '@/assets/svgs/research/official-research.svg'

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
    title: 'Before - Visuals',
    image: beforeVisuals,
    heading: 'Inconsistent Visuals',
    description:
      'Each flyer looked and felt different. Different fonts, tones, colors, and layouts, even when promoting the same event. From a UX standpoint, this broke trust and recognition. Without consistent visual language, students couldn’t build familiarity with our brand, and internal users had no cohesive foundation to build from.',
  },
  {
    title: 'Before – System',
    image: beforeSystem,
    heading: 'No System, Just Assets',
    description:
      'There was no campaign structure, just scattered files uploaded ad hoc. Flyers were created from scratch every time, with no timeline, process, or ownership. This reflects a breakdown in the “Define” phase of design thinking, the team hadn’t clearly identified what users needed or how marketing should support them.',
  },
  {
    title: 'Before – Branding',
    image: beforeMessaging,
    heading: 'Off-Brand Messaging',
    description:
      'Many assets failed to align with university branding or departmental tone. Internally, it created confusion and approval delays. Externally, students received communications that felt generic or unpolished. I belived strongly that this weakened the user experience, making it harder to recognize or trust the Career Centers identity.',
  },
]

const afterTabs = [
  {
    title: 'After – Visuals',
    image: afterVisuals,
    heading: 'Unified Visual Language',
    description:
      'Every flyer now follows a consistent visual system built from official brand guidelines. The color palette, font hierarchy, spacing, and tone all remained more consistent. This alignment boosts credibility, reduces design debt, and reinforces trust through familiarity. It’s a strong example of intentional UX applied to visual storytelling.',
  },
  {
    title: 'After – System',
    image: afterSystem,
    heading: 'Structured Campaign Rollout',
    description:
      'Each event now would follow a clear, repeatable timeline: announcement, build-up, day-of, and follow-up assets. This supports proactive planning and reduces last-minute stress. Strategically, this reflects the “Ideate” and “Prototype” stages in action. Which in turn transform insights into a tested, scalable framework.',
  },
  {
    title: 'After – Branding',
    image: afterBranding,
    heading: 'Systematized, Editable, Reusable',
    description:
      'All assets are clearly labeled, filed by campaign, and formatted for multi-year reuse. Anyone on the team can now locate, edit, and publish materials without needing guidance. It’s a sustainable solution rooted in UX principles of accessibility, clarity, and self-sufficiency. Plus, students now are presented a compelling story based marketing initiative.',
  },
]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Stronger Internal Alignment',
    description:
      'The marketing process is now clear, structured, and consistent. Everyone knows what assets go out and when, and no one has to guess where to find files or what style to use. This shift improved team autonomy and eliminated confusion.',
  },
  {
    title: ' Professional, On-Brand Presence',
    description:
      'Students now receive materials that look and feel intentional. The visuals are consistent, story-driven, and aligned with university branding to reinforce trust and improve how the Career Center is perceived across campus.',
  },
  {
    title: 'Repeatable and Scalable System',
    description:
      'Instead of starting from scratch, the team now works from a reusable library of well-labeled, pre-approved assets. The system was designed for long-term use, and it can be refreshed seasonally without losing its structure or clarity.',
  },
  {
    title: ' Quiet but Clear Impact',
    description:
      'Even without formal recognition, the difference is felt. Templates are reused. Colleagues reference the system without prompting. The workflow is smoother and that kind of invisible UX success is often the most meaningful.',
  },
]

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Reflections Data
const reflections = [
  {
    title: 'Structure Creates Freedom',
    icon: arrowBlue,
    description:
      'Ironically, the more structure I introduced, the more freedom our team had. Clear systems reduced confusion and made room for better, more creative work not less.',
  },
  {
    title: 'Design is Advocacy',
    icon: arrowPink,
    description:
      'I wasn’t asked to fix anything but by stepping in and applying UX thinking, I built something that solved real problems. Sometimes the most impactful design happens when you take initiative.',
  },
  {
    title: 'Good UX is Often Invisible',
    icon: arrowBlue,
    description:
      'No one celebrates a well-labeled folder, but when people can find what they need and trust the system, they work faster and with more confidence. That’s UX at its most practical.',
  },
  {
    title: 'Systems Outlast People',
    icon: arrowPink,
    description:
      'The most satisfying part of this project was knowing it will outlive me. Whether I’m on the team or not, the marketing system I created is built to support others for years to come.',
  },
]

// Ux Lens Data
const uxIntro = `This project was completed before I formally adopted the design thinking process, but it was a turning point that helped me realize I was already thinking like a UX designer. If I were to approach it today, I would apply the full UX framework not just to improve outcomes, but to make the process more intentional, inclusive, and measurable. The framework below reflects what I’ve learned through the Google UX Coursera course and how I now approach every design challenge.

`

const uxSubheading = 'How I would approach this UX challenge today'

const spinnerMessage = 'Working On It...'
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
      workTitle="Marketing System and Branding Redesign"
      :tags="['UX Research', 'Visual Design', 'System Thinking']"
      :imgSrc="marketingTrioPhoto"
      :paragraphs="[
        'When I stepped into my role as the Career Events & Marketing Coordinator at the University of San Diego, I noticed something immediately: our marketing efforts lacked structure, consistency, and a user-centered approach. Flyers varied wildly in tone, visuals, and timing, even if they were for the same event. There was no campaign strategy, no templates, and no clarity on who was responsible for what. It was a UX failure that left both internal teams and students confused.',
        'I saw an opportunity to redesign the system from the ground up. Using USD’s official brand guidelines as a foundation, I created a scalable visual design system and structured rollout timeline for all major events. Over 50 assets were designed with clarity, cohesion, and accessibility in mind and organized into a centralized, reusable system. Now, instead of improvising, the team could operate with a polished, repeatable process that elevates both our internal workflows and our public-facing brand.',
      ]"
      role="UX Designer, Visual Designer, Marketing Coordinator"
      date="March – April 2025"
      toolkit="Figma, Canva, Linearty Curve"
      pdfFile="case-study-3-branding.pdf"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseProblem
      id="problem-section"
      problemStatement="The department’s marketing process wasn’t a system. It was a disorganized collection of mismatched flyers, inconsistent timelines, and scattered responsibilities. Despite recurring events and a predictable calendar, there were no templates, no scheduling strategy, and no clear ownership. Internally, this created confusion and inefficiency. Externally, students were met with off-brand messaging that lacked clarity, cohesion, and credibility. "
      problemStatementB="What stood out most was the lack of a user-centered mindset. Marketing wasn’t being treated as part of the student experience, it was being handled reactively, without intention or design. This fractured approach diluted our impact and missed an opportunity to build trust, engagement, and brand recognition through thoughtful, UX-driven communication."
      userResearchIntro="Because the issues were so deeply embedded in daily operations, I didn’t need formal research to see the problem, I lived it. These visual assets helped organize what I observed firsthand and translate everyday friction into user-centered design solutions."
      :research-methods="[
        {
          caption: 'Stakeholder Interviews',
          imageSrc: interviewImg,
          description:
            'Spoke with colleagues to understand current marketing workflows and uncover frustrations around ownership, timelines, and content consistency.',
        },
        {
          caption: 'Heuristics Evaluation',
          imageSrc: heuristicsImg,
          description:
            'Audited existing Canva and Drive assets to identify gaps in consistency, branding, and accessibility across event marketing.',
        },
        {
          caption: 'Official Guidelines',
          imageSrc: officialImg,
          description:
            'Studied USD’s official brand guidelines and read UX/marketing books to design within institutional standards while introducing clarity and cohesion',
        },
      ]"
      :artifacts="[
        {
          caption: 'Empathy Map',
          statement: 'Problem',
          statementDetails:
            'The Career Development Center lacked a cohesive visual identity across its student-facing materials, leading to confusion, low engagement, and a disjointed user experience for job-seeking students.',
          blurb:
            'Todd’s empathy map revealed the hidden resistance that often comes with process change, especially in environments built on habit and verbal handoffs. His reluctance to adopt new systems reinforced the need for assets that were not only well-designed but also easy to access, understand, and use without formal training.',
          imageSrc: empathyMap,
        },
        {
          caption: 'Persona',
          statement: 'Goal',
          statementDetails:
            'Redesign the Career Center’s digital and physical marketing materials to align with university branding and improve clarity, hierarchy, and visual consistency.',
          blurb:
            'Todd’s persona captured a common challenge in organizational UX: legacy habits and informal ownership. While resistant to structured change, his goals aligned perfectly with the redesign, proving that even reluctant users benefit from systems that reduce chaos, support consistency, and make quality the default.',
          imageSrc: userPersona,
        },
        {
          caption: 'Journey Map',
          statement: 'Hypothesis',
          statementDetails:
            'If I apply a consistent visual system with clear CTAs, brand-compliant color schemes, and skimmable layouts, then students will be more likely to engage with career resources and attend events.',
          blurb:
            'This journey map illustrates the confusion, guesswork, and emotional drain caused by a lack of structure in the marketing process. It exposed the need for clearly labeled folders, version control, and a defined rollout schedule that could replace last-minute scrambles with confident, consistent action.',
          imageSrc: journeyMap,
        },
      ]"
      takeaway="The artifacts expose a marketing system built on improvisation rather than intention. Todd, a long-standing team member, operates from a place of habit and personal control, relying on outdated folders, vague timelines, and visual guesswork. While his deep institutional knowledge is valuable, it exists in silos, contributing to inconsistencies, reactive decisions, and avoidable confusion. There’s no shared process, branding standard, or release strategy, only scattered assets and last-minute fixes. Even with recurring events, the lack of structure results in inefficiencies and mixed messaging. To build trust and clarity with students, the internal process first had to become organized, coordinated, and user-centered."
      quote="I make the marketing assets as needed. It just feels right."
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseSolution
      id="solution-section"
      introText="To fix the confusion, inefficiency, and off-brand messaging in our event marketing, I created a two-part solution: a cohesive visual design system and a repeatable campaign structure. Together, they transformed how our department communicates. Which gave internal teams a scalable, easy-to-use system and delivered students a consistent, engaging experience across every platform and event."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Marketing & Branding Before"
      afterTitle="Marketing & Branding After"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseOutcome
      id="outcome-section"
      intro="This project was about building a system that improves how people work, communicate, and connect with students all through visually appealing digital assets. While the outcomes are largely qualitative, the impact is undeniable: a more consistent visual identity, a smoother internal workflow, and a marketing system that supports users on both sides. The creators which are all staff members and the audience which are the students."
      context="What I designed has so many objective benefits. Marketing is now handled proactively instead of reactively. Event campaigns are created a year in advance, stored in clearly organized folders, and designed for reuse which frees up creative and cognitive bandwidth across the board. While I didn’t measure success through formal KPIs, the increased efficiency, reuse, and recognition of the system speak for themselves."
      :outcomes="outcomeList"
      :icons="icons"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseReflections
      id="reflections-section"
      intro="This project taught me that UX isn’t always flashy or high-tech. Sometimes it looks like folders, timelines, and well-organized assets. But those small, behind-the-scenes decisions can have an enormous impact. By applying a user-centered mindset to internal processes and communication, I was able to design something that not only improved efficiency, but reshaped how our department presents itself. Below are a few takeaways that continue to shape how I approach design and collaboration."
      :reflections="reflections"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseUxLens id="ux-section" :intro="uxIntro" :subheading="uxSubheading">
      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Empathize</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">
          Users, Context, and Constraints
        </p>
        <p class="mt-3">
          I would begin by interviewing student interns, full-time staff, and even student end-users
          to understand how they experience our marketing. I would try to learn what works, what
          frustrates them, and what they wish felt more aligned or accessible. I’d gather input
          through surveys, card sorting, and artifact audits to uncover behavioral patterns and pain
          points across roles.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Identify Core Problem</p>
        <p class="mt-3">
          After synthesizing the insights, I’d use affinity mapping and insight statements to
          clearly define the core issue: the lack of structure and user-centered strategy in our
          marketing system. I’d write a problem statement rooted in user needs and develop
          lightweight personas (e.g., new staff member, time-strapped student) to guide design
          decisions moving forward.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Explore Multiple Solutions</p>
        <p class="mt-3">
          Using task flows and storyboarding, I’d explore multiple marketing system formats. Things
          like centralized dashboards or visual campaign templates. I’d run internal workshops to
          co-create ideas with team members and use early feedback to eliminate friction points
          before investing in high-fidelity assets. I think quick ideation like crazy 8's would have
          really been beneficial in a project like this.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Prototype</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">
          Design Low & High Fidelity Mockups
        </p>
        <p class="mt-3">
          I’d use Figma to design campaign structures, flyer templates, and documentation layouts.
          Then testing different levels of visual hierarchy, readability, and accessibility would be
          important to the process. These prototypes would simulate print, email, and digital
          platforms to reflect real use cases and gather feedback across contexts.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Validate and Iterate</p>
        <p class="mt-3">
          Before full adoption, I’d conduct usability tests with internal staff and student interns
          like asking them to complete key tasks (e.g., find a template, schedule a post) and
          observing where confusion or breakdowns occurred. I’d refine the system based on feedback
          and retest to validate changes. Also, ask real students to rate the prototypes on things
          like clarity, readability, and information hierarchy.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver & Measure</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Launch and Track Behavior</p>
        <p class="mt-3">
          Once implemented, I’d track engagement by observing asset reuse, system adoption, and
          internal satisfaction over time. This would also be perfect to gauge student satisfaction
          with things like surverys or even attendance numbers to the marketed events. I’d conduct
          short feedback loops every semester to assess friction points and update the system based
          on what’s working ensuring continuous UX improvement.
        </p>
      </div>
    </CaseUxLens>
    <div class="mt-8">
      <h4 class="text-pink font-bold text-sm">Disclaimer</h4>
      <p class="text-sm text-gray-500">
        This case study is based on my work at the University of San Diego. While the content may
        reference internal systems or materials, all information shown, such as job titles, event
        descriptions, and task structures, all reflect information that is publicly accessible or
        common within higher education settings. If any sensitive material is identified, please
        inform me and I will immediately revise or blur it out upon request. This portfolio is
        intended solely to showcase my UX process and design thinking, not to disclose confidential
        information.
      </p>
    </div>
    <BackHomeBtn />
  </div>
</template>

<style scoped></style>
