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
// Svg Icons
import empathyIcon from '@/assets/svgs/skills/empathy-skill.svg'
import globalIcon from '@/assets/svgs/skills/global-skill.svg'
import listeningIcon from '@/assets/svgs/skills/listen-skill.svg'
import problemIcon from '@/assets/svgs/skills/problem-skill.svg'
import codeIcon from '@/assets/svgs/skills/code-skill.svg'
import operationsIcon from '@/assets/svgs/skills/operational-skill.svg'
import adaptIcon from '@/assets/svgs/skills/adapt-skill.svg'
import creativityIcon from '@/assets/svgs/skills/creativity-skill.svg'
import informationIcon from '@/assets/svgs/skills/architecture-skill.svg'
import optimizeIcon from '@/assets/svgs/skills/optimize-skill.svg'
import marketingIcon from '@/assets/svgs/skills/marketing-skill.svg'
import systemsIcon from '@/assets/svgs/skills/systems-icon.svg'
import userIcon from '@/assets/svgs/skills/user-centered-skill.svg'
import collabIcon from '@/assets/svgs/skills/collaborative-skill.svg'
import learnerIcon from '@/assets/svgs/skills/learner-skill.svg'
import impactIcon from '@/assets/svgs/skills/impact-skill.svg'
import balanceIcon from '@/assets/svgs/skills/balance-skill.svg'
import purposeIcon from '@/assets/svgs/skills/purpose-skill.svg'
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
  <section class="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 font-headings">
    <article class="flex flex-col items-center justify-center relative md:mb-8" id="bio-section">
      <img :src="selfPhoto" alt="self image of Juan Lagunas" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="font-bold text-pink">M</span>y <span class="font-bold text-blue">B</span>io
      </h3>
      <p class="leading-relaxed">
        I'm a highly experiened professional with over
        <strong>twenty years of direct customer service experience</strong>, meaning I deeply
        understand how people think and what they need.
      </p>
      <p class="leading-relaxed my-2">
        My unique journey through various jobs and cultures has taught me to
        <strong>blend smart thinking with creative solutions and a whole lot of empathy</strong>,
        driving my genuine love for tackling tricky problems and making experiences easier and more
        enjoyable.
      </p>
      <p class="leading-relaxed">
        My ultimate goal is to turn complicated challenges into
        <strong>simple, beautiful, and intuitive solutions that just click.</strong> This means that
        UX design is the perfect way to bring a lifetime of problem-solving and refining ideas to
        life.
      </p>
      <h4 class="mt-4 tracking-widest">Skills Acquired</h4>
      <div class="flex justify-between items-center mt-2 w-full px-2 gap-2 relative">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="empathyIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">User Empathy</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="systemsIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">Systems Thinking</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="problemIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">Problem Solving</figcaption>
        </figure>
      </div>
      <ArrowTransition
        customClass="scale-75 md:absolute md:-rotate-90 md:-right-24 md:-top-14 md:scale-50  lg:scale-40 lg:-right-18 "
      />
    </article>
    <article class="flex flex-col items-center justify-center relative md:mb-8" id="roots-section">
      <img :src="familyCafePhoto" alt="Family of 2 with their cat" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">R</SPAN>oots
      </h3>
      <p class="leading-relaxed">
        My professional journey began with roles like KFC Manager and Hospitality Coordinator at
        Viejas Casino,
        <strong
          >where I gained a deep understanding of customer service, operations, and handling diverse
          groups of people.</strong
        >
      </p>
      <p class="leading-relaxed mt-2">
        My Linguistics degree further shaped my thinking about communication, different
        perspectives,
        <strong>and deepened my ability to connect with and understand diverse users.</strong>
      </p>
      <p class="leading-relaxed my-2">
        Building on this, I spent seven years teaching English to everyone from young children to
        adults, including refugees and international students,
        <strong>which sharpened my communication skills and empathy</strong>
      </p>

      <h4 class="mt-4 tracking-widest">Skills Acquired</h4>
      <div class="flex justify-between items-center mt-2 w-full px-2 gap-2">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="globalIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">Cross-Cultural</figcaption>
        </figure>

        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="operationsIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">Operational Management</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="listeningIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">User Advocacy</figcaption>
        </figure>
      </div>
      <ArrowTransition customClass="scale-75 md:hidden" />
    </article>
    <article
      class="flex flex-col items-center justify-center relative md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1 md:mb-8"
      id="journey-section"
    >
      <img
        :src="selfCounterPhoto"
        alt="photo of Juan Lagunas in behind cafe counter"
        class="h-60 rounded-md"
        loading="lazy"
      />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">J</SPAN>ourney
      </h3>
      <p class="leading-relaxed">
        After almost a decade in Japan, where I began as an English teacher,
        <strong>I sought a bigger challenge and, with my wife, opened Cafe Triangle.</strong> This
        venture truly forced me to learn on the fly.
      </p>
      <p class="leading-relaxed my-2">
        From business management and customer service to discovering my love for creativity through
        photography. When the cafe eventually closed,
        <strong
          >I pivoted hard, teaching myself front-end web development over the last two and a half
          years and building a solid portfolio.</strong
        >
      </p>
      <p class="leading-relaxed">
        It was during this period that <strong>I first encountered the term "UX,"</strong> a casual
        introduction that deeply planted a seed for my future path.
      </p>
      <h4 class="mt-4 tracking-widest">Skills Acquired</h4>
      <div class="flex justify-between items-center mt-2 w-full gap-2">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="codeIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">Front-End Development</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="adaptIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">Strategic Pivoting</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="creativityIcon" alt="" class="h-10" />
          <figcaption class="text-sm text-center">Creative Execution</figcaption>
        </figure>
      </div>
      <ArrowTransition
        customClass="scale-75  md:absolute md:rotate-90 md:-top-14 md:-left-24 lg:-rotate-90 lg:-left-18 md:scale-50 lg:scale-40 "
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative md:mb-8"
      id="realization-section"
    >
      <img
        :src="sunPhoto"
        alt="photo of Juan Lagunas in front of wall mural"
        class="h-60 rounded-md"
        loading="lazy"
      />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y
        <SPAN class="text-blue font-bold">R</SPAN>ealization
      </h3>
      <p class="leading-relaxed">
        Something clicked at my recent university job in San Diego;
        <strong
          >its chaotic environment, lacking systems and plans, unexpectedly became my launchpad into
          my UX career path.</strong
        >
      </p>
      <p class="leading-relaxed my-2">
        I proactively transformed challenges into opportunities,
        <strong
          >building Notion-based project management systems, crafting a year-long marketing strategy
          with digital assets, and refactoring email newsletters with analytics.</strong
        >
        It was here that everything fell into place as
        <strong
          >I realized my daily life had long revolved around iterating, ideating, and
          problem-solving to make things better.</strong
        >
        Even before I knew the term "UX." This hands-on application, combined with extensive UX
        reading and completing Google's Coursera UX course, definitively cemented
      </p>
      <h4 class="mt-4 tracking-widest">Skills Acquired</h4>
      <div class="flex justify-between items-center mt-2 w-full gap-2 text-center">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="informationIcon" alt="" class="h-10" />
          <figcaption class="text-sm">User Empathy</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="marketingIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Marketing Strategy</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="optimizeIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Analytics & Optimization</figcaption>
        </figure>
      </div>
      <ArrowTransition
        customClass="scale-75 md:hidden lg:block lg:absolute lg:rotate-90 lg:scale-40 lg:-top-14 lg:-left-18"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative lg:col-start-2 lg:row-start-2 md:mb-8"
      id="future-section"
    >
      <img :src="directionPhoto" alt="photo of wind arrow" class="h-60 rounded-md" loading="lazy" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">F</SPAN>uture
      </h3>
      <p class="leading-relaxed">
        <strong class="">Right now, my whole focus is on landing my first UX design role.</strong>
        I'm excited to finally pursue a career that truly ignites my passion and aligns with
        everything I've learned, both formally and through my life's unique experiences.
        <strong
          >I'm ready to bring my extensive real-world understanding of users, my knack for
          problem-solving, and my commitment to creating meaningful digital experiences to a
          team.</strong
        >
      </p>
      <p class="mt-2 leading-relaxed">
        I believe my diverse background isn't just a story, it's a toolkit for approaching design
        challenges with empathy, creativity, and a fresh perspective.
        <strong
          >I'm eager to jump in, collaborate, and continue learning and growing within the UX
          field.</strong
        >
      </p>
      <h4 class="mt-4 tracking-widest">What I Bring</h4>
      <div class="flex justify-between items-center mt-2 w-full gap-2 text-center">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="userIcon" alt="" class="h-10" />
          <figcaption class="text-sm">User-Centered Mindset</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="collabIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Systems Thinking</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="learnerIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Continuous Learner</figcaption>
        </figure>
      </div>
      <ArrowTransition
        customClass="scale-75 md:scale-50 md:absolute md:-rotate-90 md:-right-24 md:-top-14 lg:rotate-90 lg:scale-40 lg:hidden"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative lg:col-start-1 lg:row-start-2 md:mb-8"
      id="dream-section"
    >
      <img
        :src="selfBlackPhoto"
        alt="black and white self portrait of Juan Lagunas"
        class="h-60 rounded-md"
        loading="lazy"
      />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">D</SPAN>ream
      </h3>
      <p class="leading-relaxed">
        My ultimate dream in UX is to finally
        <strong
          >build a career that genuinely fuels my passion daily, where I can be part of a team
          crafting impactful digital experiences that solve real problems and make lives easier and
          more enjoyable.</strong
        >
        I envision creating solutions that blend thoughtful logic with pure creativity, designing
        systems both structured and deeply empathetic to user needs.
      </p>
      <p class="my-2">
        <strong
          >For me, success means continuously iterating, ideating, and tweaking until we deliver
          something truly amazing,</strong
        >
        marking this not just as a job, but as the culmination of a lifetime spent observing,
        solving, and striving to make things better. Now, finally, clearly defined as UX design.
      </p>
      <h4 class="mt-4 tracking-widest">What I Bring</h4>
      <ul class="flex justify-between items-center mt-2 w-full gap-2 text-center">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="impactIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Impact-Driven Design</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="balanceIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Logic + Creativity</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="purposeIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Purpose Driven Career</figcaption>
        </figure>
      </ul>
      <ArrowTransition
        customClass="scale-75 hidden lg:block lg:absolute lg:scale-40 lg:rotate-90 lg:-right-18 lg:-top-14"
      />
    </article>
  </section>
</template>

<style scoped></style>
