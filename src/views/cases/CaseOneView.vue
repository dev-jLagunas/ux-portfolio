<script setup>
import CaseOverview from '@/components/reusable/CaseOverview.vue'
import CaseProblem from '@/components/reusable/CaseProblem.vue'
import TabGroup from '@/components/reusable/TabGroup.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import userPersona from '@/assets/images/cases/user-persona.png'
import journeyMap from '@/assets/images/cases/user-journey.png'
import empathyMap from '@/assets/images/cases/empathy-map.png'
// Images
import notionTrioPhoto from '@/assets/images/home/notion-systems-home.png'
import notionBefore from '@/assets/images/cases/case-one/notion-project-before-1.jpg'
import notionAfter from '@/assets/images/cases/case-one/notion-project-after-1.jpg'
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
</script>

<template>
  <div class="font-headings mb-28">
    <nav class="mt-16 mb-8">
      <ul class="flex flex-wrap justify-between items-center">
        <li>Overview</li>
        <li>Problem</li>
        <li>Solution</li>
        <li>Outcome</li>
        <li>Reflections</li>
        <li>UX Lens</li>
      </ul>
    </nav>
    <CaseOverview
      title="Project Overview"
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
    <section id="the-solution">
      <div class="mt-4 mb-2 flex items-center justify-between w-full">
        <h3 class="font-bold text-2xl">The Solution - A</h3>
        <p class="text-sm">Ideate - Prototype</p>
      </div>
      <article>
        <p>
          Here I can explain the solution. I can talk about what I did and I can describe slightly
          the images that follow. The images will be explaining the images which will be before and
          after images. The images will be edited and perhaps combined in canva.
        </p>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TabGroup :tabs="beforeTabs" title="Project Management Before" />
          <TabGroup :tabs="afterTabs" title="Project Management After" />
        </section>
      </article>
    </section>
    <ArrowTransition customClass="mx-auto" />
    <section id="the-solution-b">
      <div class="mt-4 mb-2 flex items-center justify-between w-full">
        <h3 class="font-bold text-2xl">The Solution - B</h3>
        <p class="text-sm">Ideate - Prototype</p>
      </div>
      <article>
        <p>
          Here I can explain the solution. I can talk about what I did and I can describe slightly
          the images that follow. The images will be explaining the images which will be before and
          after images. The images will be edited and perhaps combined in canva.
        </p>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TabGroup :tabs="beforeTabs" title="One Source Of Truth Database Breakdown" />
          <TabGroup :tabs="afterTabs" title="One Source of Truth Database Breakdown" />
        </section>
      </article>
    </section>
    <ArrowTransition customClass="mx-auto" />
    <section id="outcome-section" class="flex flex-col items-center justify-center">
      <div class="mt-4 mb-2 flex items-center justify-between w-full">
        <h3 class="font-bold text-2xl">The Outcome</h3>
        <p class="text-sm">Protoype - Test</p>
      </div>
      <article>
        <p>
          Here I will describe and explain the outcome. The outcome in these case studies will need
          to be somewhat qualitative because for the most part I was not even given the opportunity
          to shine.
        </p>
        <p>
          I can add a bit more and talk about certain things that I came to see and then I'll follow
          it up with 4 cards explaining the highlights.
        </p>
        <ul class="mt-4 grid grid-cols-2 gap-2">
          <li class="relative px-2 py-12">
            <img :src="smileIcon" alt="" class="absolute top-0 left-2 h-10 -rotate-12" />
            <h5 class="font-semibold">outcome 1</h5>
            <p>
              a short explanation about this particular highlight. It will explain why I believe
              this is a highlight.
            </p>
          </li>
          <li class="relative px-2 py-12">
            <img :src="thumbsIcon" alt="" class="absolute top-0 left-2 h-10 -rotate-12" />
            <h5 class="font-semibold">outcome 1</h5>
            <p>
              a short explanation about this particular highlight. It will explain why I believe
              this is a highlight.
            </p>
          </li>
          <li class="relative px-2 py-12">
            <img :src="upwardIcon" alt="" class="absolute top-0 left-2 h-10 -rotate-12" />
            <h5 class="font-semibold">outcome 1</h5>
            <p>
              a short explanation about this particular highlight. It will explain why I believe
              this is a highlight.
            </p>
          </li>
          <li class="relative px-2 py-12">
            <img :src="medalIcon" alt="" class="absolute top-0 left-2 h-10 -rotate-12" />
            <h5 class="font-semibold">outcome 1</h5>
            <p>
              a short explanation about this particular highlight. It will explain why I believe
              this is a highlight.
            </p>
          </li>
        </ul>
      </article>
    </section>
    <ArrowTransition customClass="mx-auto" />
    <section id="reflections-section">
      <div class="mt-4 mb-2 flex items-center justify-between w-full">
        <h3 class="font-bold text-2xl">My Reflections</h3>
        <p class="text-sm">Protoype - Test</p>
      </div>
      <article>
        <p>
          Here I will talk about my reflections and the lessons I learned from this ux design
          project. I can talk about difficulties or things I feel worked well.
        </p>
        <ul class="mt-8">
          <li>
            <div class="flex items-center">
              <img :src="arrowBlue" alt="" class="h-8 pr-2 rotate-45" />
              <h5 class="font-semibold">Reflection 1</h5>
            </div>
            <p class="pl-10">
              This is some text that is related to the text content. I will likely explain why I
              feel this is important to share and what it means for my ux design journey.
            </p>
          </li>
          <li>
            <div class="flex items-center">
              <img :src="arrowPink" alt="" class="h-8 pr-2 rotate-45" />
              <h5 class="font-semibold">Reflection 1</h5>
            </div>
            <p class="pl-10">
              This is some text that is related to the text content. I will likely explain why I
              feel this is important to share and what it means for my ux design journey.
            </p>
          </li>
          <li>
            <div class="flex items-center">
              <img :src="arrowBlue" alt="" class="h-8 pr-2 rotate-45" />
              <h5 class="font-semibold">Reflection 1</h5>
            </div>
            <p class="pl-10">
              This is some text that is related to the text content. I will likely explain why I
              feel this is important to share and what it means for my ux design journey.
            </p>
          </li>
          <li>
            <div class="flex items-center">
              <img :src="arrowPink" alt="" class="h-8 pr-2 rotate-45" />
              <h5 class="font-semibold">Reflection 1</h5>
            </div>
            <p class="pl-10">
              This is some text that is related to the text content. I will likely explain why I
              feel this is important to share and what it means for my ux design journey.
            </p>
          </li>
        </ul>
      </article>
    </section>
    <ArrowTransition customClass="mx-auto" />
    <section id="ux-timeline-section">
      <div class="mt-4 mb-2 flex items-center justify-between w-full">
        <h3 class="font-bold text-2xl">From a UX lens</h3>
        <p class="text-sm">Full Framework</p>
      </div>
      <article>
        <p class="mt-2">
          This project was completed before I started to formally apply the design thinking
          framework but if I were to start it today. Here is exactly how I would approach it using a
          full UX process from the ground up.
        </p>
        <section class="">
          <div class="container px-4 py-8 mx-auto">
            <div class="grid gap-4 md:grid-cols-12">
              <div class="col-span-12 md:col-span-3">
                <div
                  class="text-center sm:text-left mb-4 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-pink"
                >
                  <h3 class="text-3xl font-semibold">Design Framework</h3>
                  <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-600"
                    >How I would approach this ux challenge today</span
                  >
                </div>
              </div>
              <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div
                  class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300"
                >
                  <div
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
                  >
                    <h3 class="text-xl font-semibold tracking-wide">Empathize</h3>
                    <p class="text-xs tracking-wide uppercase dark:text-gray-600">
                      Users, Context, and Constraints
                    </p>
                    <p class="mt-3">
                      I would begin with stakeholder interviews, user surveys, and observational
                      research to understand needs, pain points, and expectations. I’d gather data
                      on current behaviors and system limitations.
                    </p>
                  </div>
                  <div
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
                  >
                    <h3 class="text-xl font-semibold tracking-wide">Define</h3>
                    <p class="text-xs tracking-wide uppercase dark:text-gray-600">
                      Identify Core Problem
                    </p>
                    <p class="mt-3">
                      Using affinity diagrams and insights synthesis, I’d define the most pressing
                      user problem. I’d write a clear problem statement and build a lightweight
                      persona to guide design decisions.
                    </p>
                  </div>
                  <div
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
                  >
                    <h3 class="text-xl font-semibold tracking-wide">Ideate</h3>
                    <p class="text-xs tracking-wide uppercase dark:text-gray-600">
                      Explore Multiple Solutions
                    </p>
                    <p class="mt-3">
                      I’d brainstorm multiple directions using mind mapping, task flows, and early
                      sketches. I’d involve stakeholders to validate early ideas before narrowing
                      down.
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
                      Using Figma, I’d design wireframes and interactive prototypes focused on
                      hierarchy, usability, and accessibility. I'd share drafts with users and
                      collaborators for early feedback.
                    </p>
                  </div>
                  <div
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
                  >
                    <h3 class="text-xl font-semibold tracking-wide">Test</h3>
                    <p class="text-xs tracking-wide uppercase dark:text-gray-600">
                      Validate and Iterate
                    </p>
                    <p class="mt-3">
                      I’d conduct usability testing with real users to observe pain points and
                      confusion. Based on feedback, I’d iterate and refine the prototype until it
                      felt intuitive and effective.
                    </p>
                  </div>
                  <div
                    class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue"
                  >
                    <h3 class="text-xl font-semibold tracking-wide">Deliver & Measure</h3>
                    <p class="text-xs tracking-wide uppercase dark:text-gray-600">
                      Launch and Track Behavior
                    </p>
                    <p class="mt-3">
                      I’d ship the solution with tracking in place, gather metrics (engagement,
                      clicks, NPS), and plan follow-ups to continuously improve the experience based
                      on real-world usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  </div>
</template>

<style scoped></style>
