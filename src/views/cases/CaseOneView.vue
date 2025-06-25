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
import userPersona from '@/assets/images/cases/user-persona.png'
import journeyMap from '@/assets/images/cases/user-journey.png'
import empathyMap from '@/assets/images/cases/empathy-map.png'
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
    title: 'Before – Project Mgmt',
    image: notionBefore,
    heading: 'Disorganized System',
    description: 'Tasks were stored across emails, disconnected Notion pages, and verbal memory.',
  },
  {
    title: 'Before – Ownership',
    image: notionBefore,
    heading: 'No Task Ownership',
    description: 'No one knew who was responsible for what. Things slipped through the cracks.',
  },
  {
    title: 'Before – Collaboration',
    image: notionBefore,
    heading: 'Siloed Work',
    description: 'Only those with prior knowledge could understand or update tasks.',
  },
]

const afterTabs = [
  {
    title: 'After – Project Management',
    image: notionAfter,
    heading: 'Structured Timeline',
    description: 'Tasks now follow a chronological timeline, with embedded instructions.',
  },
  {
    title: 'After – Ownership',
    image: notionAfter,
    heading: 'Clear Ownership',
    description: 'Each task includes a lead, contact info, and platform links.',
  },
  {
    title: 'After – Collaboration',
    image: notionAfter,
    heading: 'Team Transparency',
    description: 'Anyone can jump in and contribute, regardless of past involvement.',
  },
]

// Outcome Data & Icons
const outcomeList = [
  {
    title: 'Clear Ownership',
    description:
      'Team members now had well-defined roles, which reduced confusion and task overlap.',
  },
  {
    title: 'Boosted Morale',
    description:
      'People felt less overwhelmed because systems were easier to use and expectations were clearer.',
  },
  {
    title: 'Increased Visibility',
    description:
      'Stakeholders could now see timelines and task progress without needing direct updates.',
  },
  {
    title: 'Smoother Onboarding',
    description:
      'New team members could understand the project flow without needing tribal knowledge.',
  },
]

const icons = [smileIcon, thumbsIcon, upwardIcon, medalIcon]

// Reflections Data
const reflections = [
  {
    title: 'Reflection 1',
    icon: arrowBlue,
    description: 'I learned that team-wide tools are only helpful if expectations are aligned.',
  },
  {
    title: 'Reflection 2',
    icon: arrowPink,
    description: 'Design systems are most powerful when paired with clear workflows.',
  },
  {
    title: 'Reflection 3',
    icon: arrowBlue,
    description: 'Sometimes the best way to advocate for UX is through quiet consistency.',
  },
  {
    title: 'Reflection 4',
    icon: arrowPink,
    description: 'Proactive work often goes unnoticed, but it builds credibility over time.',
  },
]

// Ux Lens Data
const uxIntro = `This project was completed before I started to formally apply the design thinking
framework but if I were to start it today, here is exactly how I would approach it using a full UX process from the ground up.`

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
      workTitle="Cafe Triangle Redesign"
      :tags="['UX Research', 'Systems Design', 'Workflow Design']"
      :imgSrc="notionTrioPhoto"
      :paragraphs="[
        'Here I can have some context of this case study. I  need to make sure this length thing is working of why structure is off a bit. ok that looks better. it was just tat the text was too short',
        'This is going to continue the overview of the project and here is the second text. this will be a continuation of the second text. I am just doing this to see how it looks.',
      ]"
      role="UX Designer, UX Researcher"
      date="March – April 2025"
      toolkit="Figma, Canva, Angular, TailwindCSS, Typescript"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseProblem
      id="problem-section"
      problemStatement="Here I will explain the problem at hand. I need to add more filler text so it looks like the problem statement is well written. I will need to add more content later, but for the time being this is fine. I don't know what else to do but I guess this will work fine for now."
      :artifacts="[
        { caption: 'Persona', imageSrc: userPersona },
        { caption: 'Empathy Map', imageSrc: empathyMap },
        { caption: 'Journey Map', imageSrc: journeyMap },
      ]"
      takeaway="Here we'll expand on or clearly state important takeaways from the visuals above..."
      quote="I will leave this here as another possible text. Maybe a quote?"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseSolution
      id="solution-section"
      introText="Here I can explain the solution..."
      :beforeTabs="beforeTabs"
      :afterTabs="afterTabs"
      beforeTitle="Project Management Before"
      afterTitle="Project Management After"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseOutcome
      id="outcome-section"
      intro="Here I will describe and explain the outcome. These outcomes are largely qualitative due to the nature of the project."
      context="I’ll highlight 4 key themes that emerged from the changes I implemented."
      :outcomes="outcomeList"
      :icons="icons"
    />
    <ArrowTransition customClass="mx-auto" />
    <CaseReflections
      id="reflections-section"
      intro="Here are a few key lessons I took away from this project — what worked, what didn’t, and how it shaped my UX thinking."
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
          I would begin with stakeholder interviews, user surveys, and observational research to
          understand needs, pain points, and expectations. I’d gather data on current behaviors and
          system limitations.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Define</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Identify Core Problem</p>
        <p class="mt-3">
          Using affinity diagrams and insights synthesis, I’d define the most pressing user problem.
          I’d write a clear problem statement and build a lightweight persona to guide design
          decisions.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Explore Multiple Solutions</p>
        <p class="mt-3">
          I’d brainstorm multiple directions using mind mapping, task flows, and early sketches. I’d
          involve stakeholders to validate early ideas before narrowing down.
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
          Using Figma, I’d design wireframes and interactive prototypes focused on hierarchy,
          usability, and accessibility. I'd share drafts with users and collaborators for early
          feedback.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Test</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Validate and Iterate</p>
        <p class="mt-3">
          I’d conduct usability testing with real users to observe pain points and confusion. Based
          on feedback, I’d iterate and refine the prototype until it felt intuitive and effective.
        </p>
      </div>

      <div
        class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
      >
        <h3 class="text-xl font-semibold tracking-wide">Deliver & Measure</h3>
        <p class="text-xs tracking-wide uppercase dark:text-gray-600">Launch and Track Behavior</p>
        <p class="mt-3">
          I’d ship the solution with tracking in place, gather metrics (engagement, clicks, NPS),
          and plan follow-ups to continuously improve the experience based on real-world usage.
        </p>
      </div>
    </CaseUxLens>
  </div>
</template>

<style scoped></style>
