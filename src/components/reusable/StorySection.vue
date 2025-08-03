<script setup>
import CaseNav from '@/components/reusable/CaseStickyNav.vue'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
// Photos
import selfPhoto from '@/assets/images/about/self-red.webp'
import sunPhoto from '@/assets/images/about/cafe-self-about.webp'
import familyCafePhoto from '@/assets/images/about/family-cafe-about.webp'
import directionPhoto from '@/assets/images/about/direction-about.webp'
import selfCounterPhoto from '@/assets/images/about/self-counter-about.webp'
import selfBlackPhoto from '@/assets/images/about/self-black.webp'
</script>

<template>
  <CaseNav
    :sections="[
      { id: 'bio-section', label: 'My Bio' },
      { id: 'roots-section', label: 'My Roots' },
      { id: 'journey-section', label: 'My Journey' },
      { id: 'realization-section', label: 'My Realization' },
      { id: 'future-section', label: 'My Future' },
      { id: 'dream-section', label: 'My Dream' },
    ]"
    class="md:hidden"
  />
  <section
    class="md:grid md:grid-cols-2 md:place-content-center md:place-items-center md:gap-4 lg:grid-cols-3 lg:gap-8 font-main items-stretch"
  >
    <article
      class="flex flex-col items-center justify-center relative h-full md:mb-8"
      id="bio-section"
    >
      <img
        :src="selfPhoto"
        alt="self image of Juan Lagunas"
        class="h-60 rounded-md custom-shadow"
      />
      <h3 class="text-4xl my-2">
        <span class="font-bold text-pink">M</span>y <span class="font-bold text-blue">B</span>io
      </h3>
      <p class="leading-relaxed mb-2">
        I'm a UX designer with over <strong>20 years of customer-facing experience</strong>, from
        fast food to education to hospitality.
      </p>
      <ul class="list-disc pl-5 text-left leading-relaxed space-y-2">
        <li>
          Learned to <strong>understand users deeply</strong> by listening and solving problems in
          real time.
        </li>
        <li>
          Blended <strong>creative thinking with empathy</strong> across a variety of roles and
          cultures.
        </li>
        <li>
          Developed a passion for
          <strong>simplifying complex systems into intuitive solutions</strong>.
        </li>
      </ul>
      <h4 class="mt-4 tracking-widest font-bold bg-pink text-light px-3 py-1 rounded-sm mb-4">
        Skills Acquired
      </h4>
      <ul class="flex divide-x-2 divide-pink w-full mt-2 text-sm text-center">
        <li class="flex-1">User <br />Empathy</li>
        <li class="flex-1">Systems <br />Thinking</li>
        <li class="flex-1">Problem <br />Solving</li>
      </ul>

      <ArrowTransition
        customClass="scale-75 md:absolute md:-rotate-90 md:-right-24 md:-top-14 md:scale-50  lg:scale-40 lg:-right-26"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative h-full md:mb-8"
      id="roots-section"
    >
      <img
        :src="familyCafePhoto"
        alt="Family of 2 with their cat"
        class="h-60 rounded-md custom-shadow"
      />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">R</SPAN>oots
      </h3>
      <p class="leading-relaxed mb-2">
        My early career combined hospitality and education, giving me a strong foundation in
        communication and service.
      </p>
      <ul class="list-disc pl-5 text-left leading-relaxed space-y-2">
        <li>
          Managed teams at KFC and worked in hospitality at Viejas Casino, gaining hands-on
          experience in
          <strong>customer service and operations</strong>.
        </li>
        <li>
          Studied Linguistics, which deepened my understanding of
          <strong>communication styles and diverse perspectives</strong>.
        </li>
        <li>
          Taught English for 7 years across age groups and backgrounds, building
          <strong>empathy and adaptability</strong> through real human connection.
        </li>
      </ul>

      <h4 class="mt-4 tracking-widest font-bold bg-pink text-light px-3 py-1 rounded-sm mb-4">
        Skills Acquired
      </h4>
      <ul class="flex divide-x-2 divide-pink w-full mt-2 text-sm text-center">
        <li class="flex-1">Cross <br />Cultural</li>
        <li class="flex-1">Operational <br />Management</li>
        <li class="flex-1">User <br />Advocacy</li>
      </ul>
      <ArrowTransition customClass="scale-75 md:hidden" />
    </article>
    <article
      class="flex flex-col items-center justify-center relative h-full md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1 md:mb-8"
      id="journey-section"
    >
      <img
        :src="selfCounterPhoto"
        alt="photo of Juan Lagunas in behind cafe counter"
        class="h-60 rounded-md custom-shadow"
        loading="lazy"
      />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">J</SPAN>ourney
      </h3>
      <p class="leading-relaxed mb-2">
        My time in Japan shaped both my creativity and career direction in unexpected ways.
      </p>
      <ul class="list-disc pl-5 text-left leading-relaxed space-y-2">
        <li>
          Co-founded <strong>Cafe Triangle</strong> with my wife, managing all aspects of the
          business from the ground up.
        </li>
        <li>
          Discovered a passion for <strong>photography and creative storytelling</strong> while
          running the café.
        </li>
        <li>
          Taught myself <strong>front-end development</strong> after the café closed, building a
          solid portfolio from scratch.
        </li>
        <li>
          Stumbled across the term "<strong>UX</strong>"—and instantly realized it described what
          I’d been doing all along.
        </li>
      </ul>

      <h4 class="mt-4 tracking-widest font-bold bg-pink text-light px-3 py-1 rounded-sm mb-4">
        Skills Acquired
      </h4>
      <ul class="flex divide-x-2 divide-pink w-full mt-2 text-sm text-center">
        <li class="flex-1">Web <br />Design</li>
        <li class="flex-1">Strategic <br />Pivoting</li>
        <li class="flex-1">Creative <br />Execution</li>
      </ul>
      <ArrowTransition
        customClass="scale-75  md:absolute md:rotate-90 md:-top-14 md:-left-24 lg:-rotate-90 lg:-left-18 md:scale-50 lg:scale-40 "
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative h-full md:mb-8"
      id="realization-section"
    >
      <img
        :src="sunPhoto"
        alt="photo of Juan Lagunas in front of wall mural"
        class="h-60 rounded-md custom-shadow"
        loading="lazy"
      />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y
        <SPAN class="text-blue font-bold">R</SPAN>ealization
      </h3>
      <p class="leading-relaxed mb-2">
        My last job at a university unexpectedly launched me into UX.
      </p>
      <ul class="list-disc pl-5 text-left leading-relaxed space-y-2">
        <li>
          Worked in a <strong>chaotic environment lacking structure</strong>, which pushed me to
          create my own systems.
        </li>
        <li>
          Built <strong>Notion-based project tools</strong>, overhauled email campaigns using
          analytics, and created full marketing systems.
        </li>
        <li>
          Realized I had been
          <strong>practicing UX thinking long before I had a name for it</strong>.
        </li>
        <li>
          Cemented my path by completing the <strong>Google UX Design certificate</strong> and
          diving deep into UX literature.
        </li>
      </ul>

      <h4 class="mt-4 tracking-widest font-bold bg-pink text-light px-3 py-1 rounded-sm mb-4">
        Skills Acquired
      </h4>

      <ul class="flex divide-x-2 divide-pink w-full mt-2 text-sm text-center">
        <li class="flex-1">User <br />Empathy</li>
        <li class="flex-1">Marketing <br />Strategy</li>
        <li class="flex-1">Analytics &<br />Optimization</li>
      </ul>
      <ArrowTransition
        customClass="scale-75 md:hidden lg:block lg:absolute lg:rotate-90 lg:scale-40 lg:-top-14 lg:-left-26"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative h-full lg:col-start-2 lg:row-start-2 md:mb-8"
      id="future-section"
    >
      <img
        :src="directionPhoto"
        alt="photo of wind arrow"
        class="h-60 rounded-md custom-shadow"
        loading="lazy"
      />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">F</SPAN>uture
      </h3>
      <p class="leading-relaxed mb-2">I’m now fully focused on launching my UX design career.</p>
      <ul class="list-disc pl-5 text-left leading-relaxed space-y-2">
        <li>
          Ready to bring <strong>real-world insight, empathy, and problem-solving</strong> to a team
          environment.
        </li>
        <li>
          Excited to apply everything I’ve learned through both
          <strong>formal training and lived experience</strong>.
        </li>
        <li>
          View my background not as a story, but as a
          <strong>toolkit for creative, human-centered design</strong>.
        </li>
        <li>
          Eager to <strong>collaborate, grow, and contribute</strong> in a UX role where I can make
          real impact.
        </li>
      </ul>

      <h4 class="mt-4 tracking-widest font-bold bg-pink text-light px-3 py-1 rounded-sm mb-4">
        What I Bring
      </h4>

      <ul class="flex divide-x-2 divide-pink w-full mt-2 text-sm text-center">
        <li class="flex-1">User <br />Centered</li>
        <li class="flex-1">Systems <br />Thinking</li>
        <li class="flex-1">Continuous <br />Learner</li>
      </ul>
      <ArrowTransition
        customClass="scale-75 md:scale-50 md:absolute md:-rotate-90 md:-right-24 md:-top-14 lg:rotate-90 lg:scale-40 lg:hidden"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center h-full relative lg:col-start-1 lg:row-start-2 md:mb-8"
      id="dream-section"
    >
      <img
        :src="selfBlackPhoto"
        alt="black and white self portrait of Juan Lagunas"
        class="h-60 rounded-md custom-shadow"
        loading="lazy"
      />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">D</SPAN>ream
      </h3>
      <p class="leading-relaxed mb-2">
        My dream is to build a UX career that’s both meaningful and creatively fulfilling.
      </p>
      <ul class="list-disc pl-5 text-left leading-relaxed space-y-2">
        <li>
          I want to
          <strong>craft digital experiences that solve real problems and improve lives</strong>.
        </li>
        <li>
          I see UX as the intersection of
          <strong>thoughtful logic and human-centered creativity</strong>.
        </li>
        <li>
          Success means <strong>iterating and refining</strong> until we create something truly
          exceptional.
        </li>
        <li>
          This isn't just a job—it’s the
          <strong>culmination of a lifetime of observing and improving</strong>.
        </li>
      </ul>

      <h4 class="mt-4 tracking-widest font-bold bg-pink text-light px-3 py-1 rounded-sm mb-4">
        What I Bring
      </h4>

      <ul class="flex divide-x-2 divide-pink w-full mt-2 text-sm text-center">
        <li class="flex-1">Design <br />Driven</li>
        <li class="flex-1">Logic &<br />Creativity</li>
        <li class="flex-1">Purpose <br />Drivien</li>
      </ul>
      <ArrowTransition
        customClass="scale-75 hidden lg:block lg:absolute lg:scale-40 lg:rotate-90 lg:-right-26 lg:-top-14"
      />
    </article>
  </section>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
</style>
