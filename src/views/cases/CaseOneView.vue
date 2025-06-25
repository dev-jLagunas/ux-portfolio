<script setup>
// import CaseContent from '@/components/reusable/CaseContent.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import userPersona from '@/assets/images/cases/user-persona.png'
import journeyMap from '@/assets/images/cases/user-journey.png'
import empathyMap from '@/assets/images/cases/empathy-map.png'
</script>

<template>
  <div class="font-headings mb-28">
    <nav class="mt-16 mb-8">
      <ul class="flex flex-wrap justify-around items-center">
        <li>Overview</li>
        <li>Problem</li>
        <li>Solution</li>
        <li>Outcome</li>
        <li>Reflections</li>
        <li>UX Lens</li>
      </ul>
    </nav>
    <header id="project-overview">
      <h3 class="font-bold text-2xl">Project Overview</h3>
      <ul
        class="text-pink font-semibold flex items-start justify-start text-center text-sm gap-2 mb-4 divide-x divide-gray-300"
      >
        <li class="pr-2">UX Research</li>
        <li class="pr-2">Systems Design</li>
        <li>Workflow Design</li>
      </ul>
      <p>
        Here I can have some context of this case study. There will also be information regarding
        the case study.
      </p>
      <p class="mt-2">
        This is going to continue the overview of the project. I will likely need a short
        description, but it will need to be informative enough to make sure it explains the project
        well.
      </p>
      <ul class="my-4 flex flex-col gap-2">
        <li><span class="underline">My Role:</span> UX Designer, UX Researcher</li>
        <li><span class="underline">Date:</span> March - April 2025</li>
        <li>
          <span class="underline">Toolkit:</span> Figma, Canva, Angular, TailwindCSS, Typescript
        </li>
      </ul>
    </header>
    <ArrowTransition customClass="mx-auto" />
    <section id="problem-section" class="flex flex-col items-center justify-center">
      <div class="mt-4 mb-2 flex items-center justify-between w-full">
        <h3 class="font-bold text-2xl">The Problem</h3>
        <p class="text-sm">Empathize - Define</p>
      </div>
      <article class="flex flex-col items-center justify-center">
        <p class="border-pink border-2 p-4 rounded-md my-4">
          Here I will explain the problem at hand. It will need to be short but informative and it
          will need to help guide the user into what follows which will be certain visual artifacts.
          This problem statement card will be visually different than the rest of the text so it
          stands out as it will serve as the visual artifact of a problem statement card.
        </p>
        <div class="md:grid md:grid-cols-2 md:gap-4 md:w-4/5 md:place-items-center">
          <figure class="mt-16 md:mt-0">
            <figcaption class="text-center">Persona</figcaption>
            <img :src="userPersona" alt="" class="" />
          </figure>
          <figure class="mt-4 md:mt-0">
            <figcaption class="text-center">Empathy Map</figcaption>
            <img :src="empathyMap" alt="" />
          </figure>
        </div>
        <p class="">
          Here will expand upon the or clearly state important takeaways from the visuals above and
          again prepare the use for the following section. Always as I am telling a story.
        </p>
        <p class="text-2xl mt-4">I will leave this hear as another possible text. Maybe a quote?</p>
      </article>
    </section>
    <ArrowTransition customClass="mx-auto" />
    <section id="solution-a">
      <div class="mt-4 mb-2 flex items-center justify-between w-full">
        <h3 class="font-bold text-2xl">The Solution - A</h3>
        <p class="text-sm">Define - Ideate</p>
      </div>
      <article>
        <p>
          Here I can explain the solution. I can talk about what I did and I can describe slightly
          the images that follow. The images will be explaining the images which will be before and
          after images. The images will be edited and perhaps combined in canva.
        </p>
        <div>
          <figure>
            <figcaption>caption 1</figcaption>
            <img src="" alt="" />
          </figure>
          <figure>
            <figcaption>caption 1</figcaption>
            <img src="" alt="" />
          </figure>
          <div>
            <p>
              text content in between the images of the solutions here. Explaining them a bit more.
              Maybe highlighting some specific features
            </p>
          </div>
          <figure>
            <figcaption>caption 1</figcaption>
            <img src="" alt="" />
          </figure>
          <figure>
            <figcaption>caption 1</figcaption>
            <img src="" alt="" />
          </figure>
        </div>
      </article>
    </section>
    <section id="solution-b">
      <div class="mt-4 mb-2 flex items-center justify-between w-full">
        <h3 class="font-bold text-2xl">The Solution - A</h3>
        <p class="text-sm">Define - Ideate</p>
      </div>
      <article>
        <p>
          Here I can explain the solution. I can talk about what I did and I can describe slightly
          the images that follow. The images will be explaining the images which will be before and
          after images. The images will be edited and perhaps combined in canva.
        </p>
      </article>
    </section>
  </div>
</template>

<style scoped></style>
