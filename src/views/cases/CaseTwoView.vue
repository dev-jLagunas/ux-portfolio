<script setup>
//Components
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import CaseSolution from '@/components/reusable/CaseSolution.vue'
import CaseOutcome from '@/components/reusable/CaseOutcome.vue'
import CaseUxLens from '@/components/reusable/CaseUxLens.vue'
import CaseNav from '@/components/reusable/CaseNav.vue'

import CaseReflections from '@/components/reusable/CaseReflections.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'

// Images
import userPersona from '@/assets/images/cases/case-two/persona-notion.jpg'
import journeyMap from '@/assets/images/cases/case-two/journey-map-notion.jpg'
import empathyMap from '@/assets/images/cases/case-two/empathy-map-notion.jpg'
import notionTrioPhoto from '@/assets/images/home/notion-systems-home.png'
import notionBefore from '@/assets/images/cases/case-one/notion-project-before-1.jpg'
import notionAfter from '@/assets/images/cases/case-one/notion-project-after-1.jpg'

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
    image: notionBefore,
    heading: 'Fragmented Tools',
    description:
      'Tasks were spread across Notion, Google Drive, email threads, and verbal memory. There was no single place to understand what was happening. This fragmentation violated UX fundamentals like consistency and ease of navigation because it meant users had to jump between platforms and piece together workflows manually.',
  },
  {
    title: 'Ownership',
    image: notionBefore,
    heading: 'No Defined Roles',
    description:
      'No tasks had clear owners, deadlines, or context. If someone left the team, their knowledge left with them. The system depended on interpersonal memory rather than accessible documentation. A direct failure in information architecture and knowledge transfer.',
  },
  {
    title: 'Task Flow',
    image: notionBefore,
    heading: 'Reactive, Not Proactive',
    description:
      'Without structure, team members were constantly reacting to problems instead of planning ahead. Tasks lacked prioritization and context. From a design thinking lens, this reflects a system that skipped the “Define” phase because nobody had clearly identified what needed to happen, when, or why.',
  },
]

const afterTabs = [
  {
    title: 'Project Management',
    image: notionAfter,
    heading: 'Chronological Timeline',
    description:
      'The new system organizes tasks by timeline, allowing users to see upcoming actions at a glance. It supports proactive planning and enables asynchronous collaboration. I believed this to be a UX solution grounded in simplicity and flow-state design.',
  },
  {
    title: 'Ownership',
    image: notionAfter,
    heading: 'Clear Accountability',
    description:
      'Every task now includes ownership, due dates, support roles, and relevant documentation. This minimizes ambiguity and empowers team members to work independently. It’s a scalable solution rooted in the “Ideate” and “Prototype” stages, turning fuzzy tasks into reliable building blocks. Even better, this now becomes of longterm solution.',
  },
  {
    title: 'Usability',
    image: notionAfter,
    heading: 'Consistent Task Templates',
    description:
      'Each task uses the same internal format of who, what, when, where, why. This reduces cognitive load, supports onboarding, and aligns with UX heuristics like consistency and standards. The system teaches itself as you use it.',
  },
]

const databaseBeforeTabs = [
  {
    title: 'Info Access',
    image: notionBefore,
    heading: 'Hidden Knowledge',
    description:
      'Essential info like event timelines, vendor contacts, or campaign assets lived in inboxes or people’s memories. If you didn’t know who to ask, you were out of luck. From a UX perspective, this created a high barrier to entry and failed basic accessibility standards.',
  },
  {
    title: 'Team Knowledge',
    image: notionBefore,
    heading: 'No Historical Context',
    description:
      'Insights from past events like what went wrong or what worked weren’t documented anywhere. The team kept repeating mistakes because there was no historical awareness. This reflects a missed opportunity to “measure and iterate” to learn from previous cycles.',
  },
  {
    title: 'Stakeholder',
    image: notionBefore,
    heading: 'Constant Follow-Ups',
    description:
      'If someone needed information, they had to email or DM whoever did it last year and hope for a response. This created bottlenecks, interrupted workflows, and made project knowledge exclusive rather than shared. It was a textbook case of poor UX for internal users.',
  },
]

const databaseAfterTabs = [
  {
    title: 'Info Access',
    image: notionAfter,
    heading: 'Centralized Dashboard',
    description:
      'The new “One Source of Truth” dashboard organizes everything, from logistics to branding, in one place. It applies UX principles like findability, consistency, and progressive disclosure to internal documentation, making onboarding and collaboration seamless.',
  },
  {
    title: 'Institutional Memory',
    image: notionAfter,
    heading: 'Captured Insights',
    description:
      'Pro tips, mistakes, and reflections from past events are now stored and categorized for future use. This builds a feedback loop into the system. A direct reflection of the “Test” and “Reflect” stages of design thinking, allowing future teams to continuously improve.',
  },
  {
    title: 'Self-Sufficiency',
    image: notionAfter,
    heading: 'Reduced Bottlenecks',
    description:
      'The dashboard empowers team members to find what they need without asking around. It removes the dependency on individual memory and enables autonomy. From a UX lens, it transforms knowledge into a usable, scalable asset.',
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
</script>

<template>
  <div class="font-headings mb-28">
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
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseProblem
      id="problem-section"
      problemStatement="When I joined the Career Development Center, I wasn’t stepping into a system. In fact, it was like stepping into chaos. Event logistics, timelines, and institutional knowledge were scattered across outdated Notion pages, disconnected email threads, and verbal memory. There was no shared structure, documentation, or ownership. It felt like a patchwork of personalized to-do lists that were unusable the moment someone went on vacation or left the team."
      problemStatementB="This lack of organization led to missed context, constant backtracking, and preventable mistakes. While trying to complete a task, I was also constantly trying to figure out what a task even meant. As a new hire, it made onboarding inefficient and stressful. As a UX thinker, I saw something bigger: a system failure that affected not just me, but every colleague, stakeholder, and future employee trying to do their job in a broken environment."
      :artifacts="[
        { caption: 'Persona', imageSrc: userPersona },
        { caption: 'Empathy Map', imageSrc: empathyMap },
        { caption: 'Journey Map', imageSrc: journeyMap },
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
      :beforeTabs="databaseBeforeTabs"
      :afterTabs="databaseAfterTabs"
      beforeTitle="Single Database Before"
      afterTitle="Single Database After"
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
  </div>
</template>

<style scoped></style>
