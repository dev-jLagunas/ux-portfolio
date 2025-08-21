<script setup>
//Components
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import CaseOutcome from '@/components/reusable/CaseOutcome.vue'
import CaseUxLens from '@/components/reusable/CaseUxLens.vue'
import CaseNav from '@/components/reusable/CaseStickyNav.vue'
import CaseReflections from '@/components/reusable/CaseReflections.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import BackHomeBtn from '@/components/reusable/BackHomeBtn.vue'

import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'
const { isLoading } = usePageLoader(2000)

// Images
import userPersona from '@/assets/images/cases/case-four/persona-newsletter.webp'
import journeyMap from '@/assets/images/cases/case-four/journey-map-newsletter.webp'
import empathyMap from '@/assets/images/cases/case-four/empathy-map-newsletter.webp'
import emailTrioPhoto from '@/assets/images/home/newsletter-system-home.webp'
import beforeHierarchy from '@/assets/images/cases/case-four/before-hierarchy-collage.webp'
import beforeOverload from '@/assets/images/cases/case-four/before-overload-collage.webp'
import beforeAccess from '@/assets/images/cases/case-four/before-accesibility-collage.webp'
import afterAccess from '@/assets/images/cases/case-four/after-accessibility-collage.webp'
import afterHierarchy from '@/assets/images/cases/case-four/after-hierarchy-collage.webp'
import afterIntention from '@/assets/images/cases/case-four/after-intentionality-collage.webp'
import interviewImg from '@/assets/svgs/research/interview-research.svg'
import analysisImg from '@/assets/svgs/research/analysis-research.svg'
import bestPracticeImg from '@/assets/svgs/research/best-practice.svg'

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
    title: 'Before – Hierarchy',
    image: beforeHierarchy,
    heading: 'Lack of Visual Hierarchy',
    description:
      'The original layout had no clear prioritization of content. All sections were treated equally, forcing readers to hunt for relevant info. This broke basic UX principles of hierarchy and skimmability, making it hard for students to know where to start a pain point supported by insights from the empathy map and journey map created during the define phase.',
  },
  {
    title: 'Before – Content',
    image: beforeOverload,
    heading: 'Cognitive Overload',
    description:
      'The newsletter attempted to include every possible detail in one go, overwhelming users with dense blocks of text and multiple unrelated CTAs. This violated usability best practices by asking users to process too much at once.',
  },
  {
    title: 'Before – Accesibility',
    image: beforeAccess,
    heading: 'Weak CTA Placement',
    description:
      'Calls to action were buried deep within paragraphs or lacked visual distinction. This led to confusion and low click-through rates, as confirmed by Constant Contact analytics. From a UX lens, this failed the aim to make critical user actions obvious and accessible.',
  },
]

const afterTabs = [
  {
    title: 'After – Hierarchy',
    image: afterHierarchy,
    heading: 'Intentional Visual Hierarchy',
    description:
      'Content is now structured by relevance, with clear sections and consistent formatting. Headers guide the eye, and layout decisions were made with F-pattern reading behavior in mind. This aligns with the Define and Ideate phases by responding directly to user needs around clarity and content prioritization.',
  },
  {
    title: 'After – Ownership',
    image: afterIntention,
    heading: 'Clear Ownership',
    description:
      'Each section now has just enough context to inform, but not overwhelm. Language was rewritten for tone and clarity, following UX writing best practices. This reflects empathy for student time and attention, a theme that surfaced strongly in the research phase.',
  },
  {
    title: 'After – Accesibility',
    image: afterAccess,
    heading: 'Team Transparency',
    description:
      'CTAs are now consistently styled and positioned for maximum visibility and clickability. They use direct language (e.g., “Book an Appointment”) and visual contrast to draw the eye. This solution was tested with internal stakeholders and optimized through iterations, aligning with the test phase of the design thinking framework.',
  },
]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Cleaner Design, Higher Engagement',
    description:
      'Early stakeholder responses confirmed that the cleaner layout felt easier to navigate. Click-through rates became were predicted to increase track post-launch, and the email itself began receiving positive callouts in meetings, something that never happened with the old version.',
  },
  {
    title: 'Internal Alignment',
    description:
      'The design process prompted important conversations with leadership and coworkers about what content truly mattered. This led to stronger alignment on goals and reduced last-minute requests that used to delay sends or clutter the message.',
  },
  {
    title: 'Reusable System',
    description:
      'Because the new design was built with modularity in mind, it’s now easy to replicate and edit for future use. This saves the team time each week and ensures consistency across campaigns, aligning with UX principles of scalability and design systems.',
  },
  {
    title: ' Team-Wide Buy-In',
    description:
      'Even team members not directly involved in the newsletter began referencing the new format as a “cleaner” and “way easier to read” version. This built credibility for future UX work and showed how small, thoughtful improvements could shift team culture.',
  },
]

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Reflections Data
const reflections = [
  {
    title: 'Simple isn’t always easy.',
    icon: arrowBlue,
    description:
      'Creating a clean, skimmable layout took multiple iterations not just in visuals, but in content hierarchy, team messaging, and technical constraints. Simplicity is hard-earned.',
  },
  {
    title: 'Design can shift team culture.',
    icon: arrowPink,
    description:
      'Even small wins like a redesigned email can open the door to broader conversations about user experience and raise the bar for internal standards.',
  },
  {
    title: 'Constraints are a creative catalyst.',
    icon: arrowBlue,
    description:
      'Working within platform limitations (like Constant Contacts editor) forced me to get scrappy and precise, which actually made the final result more focused.',
  },
  {
    title: 'The best UX often feels invisible.',
    icon: arrowPink,
    description:
      'No one mentioned “the UX” of the new email, but people noticed how much smoother and easier it was to engage with. That’s how I knew it worked.',
  },
]

// Ux Lens Data
const uxIntro = `This project was completed before I started to formally apply the design thinking
framework but if I were to start it today, here is exactly how I would approach it using a full UX process from the ground up.`

const uxSubheading = 'How I would approach this UX challenge today'

const spinnerMessage = 'Almost There...'
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
      workTitle="Email Newsletter Redesign"
      :tags="['Email UX', 'Visual System', 'Content Strategy']"
      :imgSrc="emailTrioPhoto"
      :paragraphs="[
        'As the Career Events & Marketing Coordinator at the University of San Diego, I managed the department’s weekly email newsletter. Initially, my role was only executional so I was in charge of updating content, designing flyers, and scheduling through Constant Contact. But after noticing patterns in engagement data and experiencing firsthand how outdated and bloated the format felt, I saw an opportunity to rethink the newsletter through a UX lens.',
        'Using analytics, student-centered design principles, and branded visual assets, I completely redesigned the structure, flow, and tone of the newsletter. The goal was simple: reduce friction, increase clarity, and create a scalable system that actually speaks to students. The new version prioritizes actionable content, brand cohesion, and ease of use and is set to launch in Fall 2025.',
      ]"
      role="UX Designer, UX Researcher"
      date="March – April 2025"
      toolkit="Constant Contact, Canva, Linearty Curve"
      pdfFile="case-study-4-email.pdf"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseProblem
      id="problem-section"
      problemStatement="Students at the University of San Diego were regularly receiving the Career Development Center’s weekly email, but engagement was low. The newsletter was dense, visually inconsistent, and overwhelming to skim mainly because of dense text, especially on mobile. There was no clear hierarchy, and critical content like event information or job opportunities often got buried beneath less relevant items. "
      problemStatementB="Through conversations with students and a review of engagement analytics, I identified a core need: students wanted quick, scannable access to personalized, actionable content that didn’t feel like just another school blast."
      userResearchIntro="By combining direct student feedback with Constant Contact analytics, I was able to map out clear behavior patterns and content drop-off points. These visual assets helped me turn that data into focused design improvements that prioritized clarity, relevance, and real student value.
here ar"
      :research-methods="[
        {
          caption: 'Stakeholder Interviews',
          imageSrc: interviewImg,
          description:
            'Held one-on-one conversations with colleagues to understand content goals, internal processes, and recurring challenges with the newsletter.',
        },
        {
          caption: 'Analytics Review',
          imageSrc: analysisImg,
          description:
            'Analyzed Constant Contact metrics including open rates, click-throughs, and scroll heatmaps to identify drop-off points and engagement patterns.',
        },
        {
          caption: 'Secondary Research',
          imageSrc: bestPracticeImg,
          description:
            'Researched best practices in email design and student-centered content strategy to guide layout, hierarchy, and visual consistency.',
        },
      ]"
      :artifacts="[
        {
          caption: 'Empathy Map',
          statement: 'Problem',
          statementDetails:
            'The original student newsletter was poorly formatted, text-heavy, and lacked hierarchy. It was hard to skim and didn’t prioritize the student experience.',
          blurb:
            'Isabella’s empathy map revealed how quickly students disengage from content that feels outdated, cluttered, or repetitive. Her behavior and reactions made it clear that the newsletter needed a visual and structural overhaul focused on clarity, credibility, and real student value.',
          imageSrc: empathyMap,
        },
        {
          caption: 'Persona',
          statement: 'Goal',
          statementDetails:
            'To redesign the weekly newsletter in a way that prioritizes the student reader, improves scannability, and boosts engagement.',
          blurb:
            'Isabella’s persona highlighted a common behavior pattern: students scan for value and disengage quickly if content doesn’t feel relevant or modern. Her feedback shaped the redesign toward a layout that is visually clean, quickly scannable, and more reflective of real student needs.',
          imageSrc: userPersona,
        },
        {
          caption: 'Journey Map',
          statement: 'Hypothesis',
          statementDetails:
            'If we restructure the layout and content of the newsletter with students’ needs in mind, then students will find it easier to read and more likely to engage with.',
          blurb:
            'This journey map shows how students like Isabella interact with the weekly newsletter—quickly, selectively, and often with disinterest. Her behavior revealed key opportunities to reduce noise, modernize design, and lead with student-driven content that actually earns attention.',
          imageSrc: journeyMap,
        },
      ]"
      takeaway="The newsletter's main problem seemed to be a lack of intention. Isabella, a motivated and routine-driven student, opens the email weekly but quickly disengages due to visual clutter, repetitive content, and unclear hierarchy. She scrolls only as far as necessary to meet her CRP requirements, then deletes the message. Her experience highlights a disconnect between the newsletter's format and its audience’s expectations: students want concise, relevant, and fresh content that respects their time and feels designed for them. Without visual cues, structured hierarchy, or evolving content, the email becomes noise which is then easily ignored instead of meaningfully engaged with."
      quote="I don’t really need fluff. Just useful or relevant content."
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseSolution
      id="solution-section"
      introText="Students were opening the weekly newsletter but not engaging. It was long, cluttered, and hard to scan on mobile. I reframed this as a UX problem and redesigned the email around hierarchy, skimmability, and clear actions, grounded in Constant Contact data and student-centered best practices."
      introText2="To guide the work, I organized solutions around a few How Might We questions. This kept decisions focused on what students need in the first 10 seconds: timely opportunities at the top, clear next steps, and a calmer layout that reduces friction. Even without formal ideation tools, this framing kept the redesign intentional and user focused."
      introText3="The solutions below are presented in two parts. First, Structure for Flow and Clarity, which reorganizes the newsletter by relevance, merges related content, trims static sections, and improves mobile scanning. Second, Visual Consistency and Human Centered Design, which aligns colors, type, and components to USD branding, adds white space, improves buttons, and introduces Student Voices and Our Team to build trust."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Newsletter Before"
      afterTitle="Newsletter After"
      hmwTitle="How Might We"
      hmwIntro="These questions turned analytics and constraints into clear opportunities and map to the solutions below."
      :hmwItems="[
        {
          question: 'HMW help students find timely actions fast, especially on mobile?',
          response:
            'Reordered hierarchy with events and Treks at the top, merged event blocks, trimmed static sections, mobile-first spacing',
        },
        {
          question: 'HMW reduce cognitive load and make a long email feel shorter?',
          response:
            'Removed noisy backgrounds, simplified layout, consistent headers, concise copy, clearer grouping and scanning',
        },
        {
          question:
            'HMW build trust and recognition across channels while keeping CTAs meaningful?',
          response:
            'USD brand alignment, improved button patterns, Student Voices for authenticity, Our Team for human connection',
        },
      ]"
    />

    <ArrowTransition customClass="mx-auto" />
    <CaseOutcome
      id="outcome-section"
      intro="While the newsletter redesign didn’t lend itself to traditional metrics like A/B testing or user surveys, I observed strong qualitative signals that the redesign addressed real user needs. These signals came from stakeholder feedback, improved team workflows, and early student reactions shared anecdotally."
      context="By prioritizing usability and clarity, we created a more user-centered communication tool. This project also served as a prototype for future digital collateral and sparked department-wide discussions on the role of UX in everyday systems."
      :outcomes="outcomeList"
      :icons="icons"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseReflections
      id="reflections-section"
      intro="Every project teaches you something new. Sometimes that new knowledge is about UX, sometimes about people, and sometimes about yourself. This redesign may have looked like a simple formatting fix on the surface, but under the hood, it challenged my communication skills, tested my patience, and solidified my belief in intentional, systems-driven design. These are a few takeaways I’ll carry forward."
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
          I’d begin by conducting stakeholder interviews and gathering user feedback from students
          who read the newsletter. I'd supplement that with Constant Contact analytics to identify
          patterns in engagement, and I’d observe how students interact with their inboxes during
          high-volume weeks. These methods would give me insight into user behaviors, needs, and
          friction points which is of course the foundation for meaningful design decisions.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Identify Core Problem</p>
        <p class="mt-3">
          After collecting the data, I’d use affinity mapping to synthesize findings into key
          themes. I’d identify the most pressing user problem (e.g., too much content, not enough
          clarity) and write a clear problem statement grounded in user needs. I’d also build a a
          user persona based on real student feedback to ensure I kept the audience top of mind
          throughout ideation.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Explore Multiple Solutions</p>
        <p class="mt-3">
          With the problem clearly defined, I’d facilitate low-fidelity sketching and brainstorming
          to explore different layouts, tone-of-voice strategies, and content prioritization
          methods. I'd generate a few ideas before narrowing down with input from stakeholders which
          would ideally including student reps, the director, and my marketing teammates to find the
          most promising direction.
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
          Once a clear direction was chosen, I’d build wireframes in Figma, testing different layout
          options for hierarchy, scannability, and engagement. I’d create both desktop and mobile
          versions (since students often check emails on phones) and include realistic content to
          evaluate clarity. I’d share early drafts with collaborators and revise based on feedback.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Validate and Iterate</p>
        <p class="mt-3">
          With prototypes in hand, I’d conduct usability tests that could be either in-person or
          remotely in order to observe how students engage with the layout. I’d measure how quickly
          they identify key CTAs and which sections they prioritize. I’d iterate based on this
          feedback to ensure the final version was usable, attractive, and truly student-centered.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver & Measure</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Launch and Track Behavior</p>
        <p class="mt-3">
          After launch, I’d track key metrics (open rates, click-throughs, time of day, etc.) using
          Constant Contact and Google Analytics if available. I’d set benchmarks for engagement and
          check them weekly during the first few months, while also planning mini-check-ins to
          gather anecdotal student feedback. This data would help inform continuous improvements to
          both design and content strategy.
        </p>
      </div>
    </CaseUxLens>
    <div class="mt-8 -mb-20">
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
  </div>
  <BackHomeBtn />
</template>

<style scoped></style>
