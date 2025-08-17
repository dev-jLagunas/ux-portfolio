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
import userPersona from '@/assets/images/cases/case-two/persona-notion.webp'
import journeyMap from '@/assets/images/cases/case-two/journey-map-notion.webp'
import empathyMap from '@/assets/images/cases/case-two/empathy-map-notion.webp'
import notionTrioPhoto from '@/assets/images/home/notion-systems-home.webp'
import projectBeforeA from '@/assets/images/cases/case-two/notion-project-before-a.webp'
import projectBeforeB from '@/assets/images/cases/case-two/notion-project-before-b.webp'
import projectBeforeC from '@/assets/images/cases/case-two/notion-project-before-c.webp'
import projectAfterA from '@/assets/images/cases/case-two/notion-project-after-a.webp'
import projectAfterB from '@/assets/images/cases/case-two/notion-project-after-b.webp'
import projectAfterC from '@/assets/images/cases/case-two/notion-project-after-c.webp'
import databaseBenefitA from '@/assets/images/cases/case-two/database-benefit-a.webp'
import databaseBenefitB from '@/assets/images/cases/case-two/database-benefit-b.webp'
import databaseBenefitC from '@/assets/images/cases/case-two/database-benefit-c.webp'
import databaseBenefitD from '@/assets/images/cases/case-two/database-benefit-d.webp'
import databaseBenefitE from '@/assets/images/cases/case-two/database-benefit-e.webp'

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
    title: 'Project Management',
    image: projectBeforeA,
    heading: 'Fragmented Tools',
    description:
      'Tasks were spread across Notion, Google Drive, email threads, and verbal memory. There was no single place to understand what was happening. This fragmentation violated UX fundamentals like consistency and ease of navigation because it meant users had to jump between platforms and piece together workflows manually.',
  },
  {
    title: 'Ownership',
    image: projectBeforeB,
    heading: 'No Defined Roles',
    description:
      'No tasks had clear owners, deadlines, or context. If someone left the team, their knowledge left with them. The system depended on interpersonal memory rather than accessible documentation. A direct failure in information architecture and knowledge transfer.',
  },
  {
    title: 'Task Flow',
    image: projectBeforeC,
    heading: 'Reactive, Not Proactive',
    description:
      'Without structure, team members were constantly reacting to problems instead of planning ahead. Tasks lacked prioritization and context. From a design thinking lens, this reflects a system that skipped the “Define” phase because nobody had clearly identified what needed to happen, when, or why.',
  },
]

const afterTabs = [
  {
    title: 'Project Management',
    image: projectAfterA,
    heading: 'Chronological Timeline',
    description:
      'The new system organizes tasks by timeline, allowing users to see upcoming actions at a glance. It supports proactive planning and enables asynchronous collaboration. I believed this to be a UX solution grounded in simplicity and flow-state design.',
  },
  {
    title: 'Ownership',
    image: projectAfterB,
    heading: 'Clear Accountability',
    description:
      'Every task now includes ownership, due dates, support roles, and relevant documentation. This minimizes ambiguity and empowers team members to work independently. It’s a scalable solution rooted in the “Ideate” and “Prototype” stages, turning fuzzy tasks into reliable building blocks. Even better, this now becomes of longterm solution.',
  },
  {
    title: 'Usability',
    image: projectAfterC,
    heading: 'Consistent Task Templates',
    description:
      'Each task uses the same internal format of who, what, when, where, why. This reduces cognitive load, supports onboarding, and aligns with UX heuristics like consistency and standards. The system teaches itself as you use it.',
  },
]

const databaseBenefitsTabsA = [
  {
    title: 'Info Hub',
    image: databaseBenefitA,
    heading: 'Clarity From the Start',
    description:
      'The Fall Fair Dashboard acts as the single entry point for all key materials which includes marketing plans, vendor contacts, outcomes, and more. It replaces verbal memory and scattered links with an organized, navigable interface. From a UX perspective, it establishes hierarchy and orientation instantly, helping users understand what this system is, what’s inside, and where to go next.',
  },
  {
    title: 'Content Design',
    image: databaseBenefitB,
    heading: 'Structured for Growth',
    description:
      'Each section of the dashboard uses a repeatable, clear format. Purpose, Overview, Details, and Contacts. Making it easy to skim, navigate, and update. The more the system is used, the more value it accumulates. This is an example of interaction design that respects user effort and enables long-term scaling.',
  },
  {
    title: 'Information Architecture',
    image: databaseBenefitC,
    heading: 'Clear Mental Models',
    description:
      'The dashboard uses tools like Mermaid.js to visualize complex marketing strategies at a glance. This helps users form clear mental models of how campaigns are structured. By making processes visible and interactive, it enhances scannability and recall which are key principles of good UX. Users can navigate effortlessly across platforms, timeframes, and deliverables without confusion.',
  },
]

const databaseBenefitsTabsB = [
  {
    title: 'Salability',
    image: databaseBenefitD,
    heading: 'Built for Growth',
    description:
      'This dashboard is structured to scale across years without becoming overwhelming. Using collapsible toggles and modular formatting, each event cycle can be added without clutter. From a UX standpoint, this achieves progressive disclosure so users see only what’s needed when it’s needed while also enabling long-term system thinking and institutional memory.',
  },
  {
    title: 'Clarity',
    image: databaseBenefitE,
    heading: 'Captured Insights',
    description:
      'The visual breakdown of tasks across timeframes creates an intuitive mental model of what needs to happen, when, and by whom. By mapping logistical steps across a shared timeline, the system reduces ambiguity and helps stakeholders better anticipate needs, prevent delays, and plan with confidence. It’s a simple but powerful UX strategy rooted in visibility and flow.',
  },
  {
    title: 'Cognitive Ease',
    image: databaseBenefitA,
    heading: 'Color-Coded Navigation',
    description:
      'By using color-coded cards and consistent visual styling, the dashboard reduces the cognitive load required to scan and navigate the system. Users intuitively group information by visual cues, which speeds up decision-making and orientation. From a UX lens, this leverages principles of visual hierarchy and chunking to create a seamless internal tool experience.',
  },
]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Clear Ownership',
    description:
      'Team members were no longer guessing who was responsible for what. Each task had a defined lead, relevant contacts, and linked resources which helped reduce overlap, missed steps, and the need for repeated clarification.',
  },
  {
    title: 'Boosted Morale',
    description:
      'By removing bottlenecks and making workflows intuitive, people could feel less overwhelmed. Expectations were clear, and systems no longer required constant hand-holding, creating space for more focused, confident work.',
  },
  {
    title: 'Increased Visibility',
    description:
      'Stakeholders could now see timelines, progress, and documentation without asking for updates. This visibility made collaboration smoother and enabled informed decision-making without interrupting team flow.',
  },
  {
    title: 'Smoother Onboarding',
    description:
      'New team members no longer had to rely on tribal knowledge or scavenger hunts through old emails. With the dashboard and task system in place, they could understand the full context of a project in one afternoon and get to work without delay.',
  },
]

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Reflections Data
const reflections = [
  {
    title: 'UX Lives Beyond Interfaces',
    icon: arrowBlue,
    description:
      'This project helped me see that UX isn’t limited to apps or websites. It’s embedded in our daily work lives such as in team workflows, onboarding, and internal operations. Anywhere people interact with systems, there’s an opportunity to design a better experience.',
  },
  {
    title: 'Documentation is Design',
    icon: arrowPink,
    description:
      'When people can’t find information or don’t know where to start, that’s a UX failure. Creating clear, structured documentation is just as impactful as building a product because it reduced friction and empowered the team to act independently.',
  },
  {
    title: ' Structure is a Form of Empathy',
    icon: arrowBlue,
    description:
      'What felt like "just organizing tasks" was actually designing for ease, clarity, and autonomy. Systems that reduce mental load help people focus, feel capable, and do better work and that’s the core of empathetic UX work, at least to me.',
  },
  {
    title: 'You Don’t Need Permission to Improve Things',
    icon: arrowPink,
    description:
      'I wasn’t asked to redesign our systems. I did it because the existing ones caused stress, confusion, and inefficiency. This experience reminded me that thoughtful, proactive design speaks for itself even when it’s invisible.',
  },
]

// Ux Lens Data
const uxIntro = `At the time I built this system, I hadn’t yet fully committed to becoming a UX designer but looking back, the thinking was already there. This project was driven by instinct, curiosity, and a desire to solve real problems for real people. While I hadn't yet fully internalized UX training, I later completed the Google Coursera UX course, which gave me the language and structure to articulate what I had already been doing intuitively. I now have a much stronger understanding of UX frameworks, methods, and best practices and if I were to approach this project today, I would apply a more formalized, research-driven process from the start. This section outlines how I would refine or expand this work using what I know now as a dedicated UX designer.`

const uxSubheading = 'How I would approach this UX challenge today'

const spinnerMessage = 'Be Right With You!'
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
      workTitle="Notion Systems Redesign"
      :tags="['UX Research', 'Systems Design', 'Workflow Design']"
      :imgSrc="notionTrioPhoto"
      :paragraphs="[
        'Shortly after joining the University of San Diego’s Career Development Center, I was tasked with supporting multiple high-impact events but instead of a streamlined system, I inherited scattered task lists, disconnected Notion pages, and undocumented knowledge buried in emails and memory. There was no clear structure, ownership, or documentation. As a new team member I found a lot confusion and bottlenecks.',
        'What began as an effort to make my own job easier became a complete UX-led system overhaul. I built a structured project management system in Notion and designed a scalable, department-wide dashboard to serve as a single source of truth. These tools turned chaos into clarity, making it easy for anyone, including new hires, team members, or stakeholders to understand what needed to be done, when, and how. The result? A transparent, repeatable, and self-sufficient workflow that transformed how our team operates.',
      ]"
      role="UX Designer, UX Researcher"
      date="Feb – April 2025"
      toolkit="Figma, Notion, Canva"
      pdfFile="case-study-2-notion.pdf"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseProblem
      id="problem-section"
      problemStatement="When I joined the Career Development Center, I wasn’t stepping into a system. In fact, it was like stepping into chaos. Event logistics, timelines, and institutional knowledge were scattered across outdated Notion pages, disconnected email threads, and verbal memory. There was no shared structure, documentation, or ownership. It felt like a patchwork of personalized to-do lists that were unusable the moment someone went on vacation or left the team."
      problemStatementB="This lack of organization led to missed context, constant backtracking, and preventable mistakes. While trying to complete a task, I was also constantly trying to figure out what a task even meant. As a new hire, it made onboarding inefficient and stressful. As a UX thinker, I saw something bigger: a system failure that affected not just me, but every colleague, stakeholder, and future employee trying to do their job in a broken environment."
      userResearchIntro="Even without running formal user interviews, I had direct access to the problem by living it daily. The following visual assets helped capture that firsthand experience and translate it into design decisions rooted in empathy, clarity, and shared understanding."
      :artifacts="[
        {
          caption: 'Empathy Map',
          statement: 'Problem',
          statementDetails:
            'The Career Development Center’s internal resources were disorganized, outdated, and scattered across multiple tools. This made it difficult for team members to find, update, or share information, causing inefficiencies and onboarding challenges.',
          blurb:
            'Julian’s empathy map highlights the emotional cost of poor documentation. Feelings like frustration, wasted time, and constant second-guessing. His experience as a new hire informed my core design principle: eliminate ambiguity by creating systems that are clear, self-explanatory, and easy to trust.',
          imageSrc: empathyMap,
        },
        {
          caption: 'Persona',
          statement: 'Goal Statement',
          statementDetails:
            'Refactor the internal documentation system using Notion to create a centralized, clean, and well-structured hub for resources, guides, and shared knowledge.',
          blurb:
            'Julian’s persona represents the motivated but overwhelmed new hire. Eager to contribute, yet blocked by scattered information and vague processes. His goals and frustrations directly shaped my approach to designing systems that prioritize clarity, reduce redundancy, and empower users from day one.',
          imageSrc: userPersona,
        },
        {
          caption: 'Journey Map',
          statement: 'Hypothesis',
          statementDetails:
            'If I create a visually structured, logically organized Notion system with consistent formatting and intuitive navigation, then team productivity and onboarding experience will improve significantly.',
          blurb:
            'This journey map outlines the mental load of planning recurring events without reliable systems, from confusion and frustration to uncertainty and burnout. Each stage reveals a clear UX failure, and these pain points directly informed the structure, clarity, and consistency of the new project management flow.',
          imageSrc: journeyMap,
        },
      ]"
      takeaway="The visual artifacts make it clear: the true problem was the lack of structure, consistency, and ownership across systems. Julian, a capable and motivated new hire, found himself navigating a maze of outdated pages, vague tasks, and unclear responsibilities. His experience highlights a systemic issue where even simple tasks became complex due to disorganization, leading to anxiety, wasted time, and second-guessing. Despite his confidence and drive, the absence of a reliable system made onboarding difficult and collaboration fragile. Solving this meant more than documenting tasks because what it actually required was building clarity, repeatability, and trust into the way the team worked."
      quote="I don't mind figuring things out, but there has to be a better way to do this."
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseSolution
      id="solution-section"
      introText="To address the confusion, inefficiency, and lack of transparency in our department’s workflows, I redesigned our internal systems from the ground up. I created a structured project management system in Notion and a companion dashboard to serve as a single source of truth. Together, these tools made our workflows clear, self-sufficient, and easy to follow. Processes and systems that worked towards reducing bottlenecks, eliminating institutional gatekeeping, and allowing any team member to confidently step in, contribute, and understand exactly what needed to happen and when."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Project Management Before"
      afterTitle="Project Management After"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseSolution
      introText="While the internal project management system streamlined day-to-day operations for our immediate team, it became clear that knowledge was still siloed across the broader department. To solve this, I created a companion dashboard. A centralized, user-friendly reference hub that anyone in the department could use to understand what was done, why it mattered, and how to replicate it. Designed with clarity, structure, and self-sufficiency in mind, this “One Source of Truth” eliminated the need for back-and-forth emails and verbal memory. It turned hidden institutional knowledge into an accessible, scalable asset. Making onboarding, collaboration, and historical insight dramatically more efficient. Below is a breakdown of how the dashboard improves access, continuity, and team-wide alignment."
      :beforeTabs="databaseBenefitsTabsA"
      :afterTabs="databaseBenefitsTabsB"
      beforeTitle="Single Source of Truth Database Benefits A"
      afterTitle="Single Source of Truth Database Benefits B"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseOutcome
      id="outcome-section"
      intro="Redesigning our internal systems led to an immediate and noticeable shift in how our team worked. The project waas about building a solid scalable too but also it was about reducing friction, increasing transparency, and giving people the clarity they needed to work effectively. While the outcomes were primarily qualitative, the impact was clear: less confusion, faster onboarding, and more confident collaboration across the board."
      context="By focusing on structure, ownership, and accessibility, I transformed a chaotic patchwork of tasks into a system that supports people, not just processes. What started as a personal fix for my own onboarding challenges quickly became a scalable foundation for the entire department. One that future team members can build on, without starting from scratch."
      :outcomes="outcomeList"
      :icons="icons"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseReflections
      id="reflections-section"
      intro="This project was a turning point in how I understand and approach UX. It showed me that user experience isn’t limited to customer-facing products, but lives in the tools, processes, and interactions that shape how people work every day. Below are a few key lessons I took away from the experience. These are insights that not only shaped the outcome of this project, but continue to guide how I design, collaborate, and lead."
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
          To start, I’d conduct stakeholder interviews, surveys, and direct observation to
          understand how team members interact with current systems, what frustrates them, and what
          success looks like from their perspective. I’d also map out context constraints like tech
          literacy, workload, and platform limitations to design within real-world boundaries.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Identify Core Problem</p>
        <p class="mt-3">
          I’d synthesize the qualitative data into insights using affinity diagrams and define the
          most urgent, recurring user pain points. Then I’d write a clear problem statement and
          draft a simple persona that captures the needs of a typical internal user which would
          likely be a staff member juggling competing priorities while navigating scattered tools.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Explore Multiple Solutions</p>
        <p class="mt-3">
          With the problem clearly defined, I’d host a few lightweight brainstorming sessions to
          explore system redesigns, dashboard concepts, and new workflows. I’d sketch low-fidelity
          ideas like task flows or content structures and get early input from team members to
          pressure-test assumptions before building anything.
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
          Using Figma or in this case Notion I’d wireframe potential dashboard layouts, task
          structures, and navigation flows. I’d test for hierarchy, scanability, and information
          grouping. Once I had a working prototype, I’d share it with users to get feedback then
          iterate based on what they needed clarified or simplify what was overly complex.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Validate and Iterate</p>
        <p class="mt-3">
          Rather than assuming the system worked, I’d observe users interacting with it and gather
          direct input on usability. Were they finding what they needed? Did they understand how to
          use it without being trained? This would help me refine interactions and catch friction
          points early.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver & Measure</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Launch and Track Behavior</p>
        <p class="mt-3">
          I’d implement tracking using engagement data, team member surveys, and real user
          qualitative feedback. I’d also build in checkpoints for continuous improvement, ensuring
          the system evolves alongside the team’s needs. Measuring outcomes would help me stay
          accountable to the core goal: making people’s work lives easier.
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
