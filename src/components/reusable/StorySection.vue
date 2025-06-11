<script setup>
import selfPhoto from '@/assets/images/about/self-red.jpg'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import sunPhoto from '@/assets/images/about/cafe-self-about.jpg'
import familyCafePhoto from '@/assets/images/about/family-cafe-about.jpg'
import directionPhoto from '@/assets/images/about/direction-about.jpg'
import selfCounterPhoto from '@/assets/images/about/self-counter-about.jpg'
import selfBlackPhoto from '@/assets/images/about/self-black.jpg'
import empathyIcon from '@/assets/svgs/skills/empathy-skill.svg'
import globalIcon from '@/assets/svgs/skills/global-skill.svg'
import listeningIcon from '@/assets/svgs/skills/listen-skill.svg'
import problemIcon from '@/assets/svgs/skills/problem-skill.svg'
import codeIcon from '@/assets/svgs/skills/code-skill.svg'
import growthIcon from '@/assets/svgs/skills/growth-skill.svg'
import innovateIcon from '@/assets/svgs/skills/innovate-skill.svg'
import visualIcon from '@/assets/svgs/skills/visual-skill.svg'
import systemsIcon from '@/assets/svgs/skills/systems-icon.svg'
import operationsIcon from '@/assets/svgs/skills/operational-skill.svg'
import adaptIcon from '@/assets/svgs/skills/adapt-skill.svg'
import creativityIcon from '@/assets/svgs/skills/creativity-skill.svg'
</script>

<template>
  <section class="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
    <article class="flex flex-col items-center justify-center relative md:mb-8">
      <img :src="selfPhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="font-bold text-pink">M</span>y <span class="font-bold text-blue">B</span>io
      </h3>
      <p class="leading-relaxed">
        I'm a seasoned pro with over
        <strong>twenty years of direct customer service experience</strong>, meaning I deeply
        understand how people think and what they need.
      </p>
      <p class="leading-relaxed my-2">
        My unique journey through various jobs and cultures has taught me to
        <strong>blend smart thinking with creative solutions and a whole lot of empathy,</strong>
        driving my genuine love for tackling tricky problems and making experiences easier and more
        enjoyable.
      </p>
      <p class="leading-relaxed">
        My ultimate goal is to turn complicated challenges into
        <strong>simple, beautiful, and intuitive solutions that just click</strong>, because for me,
        UX design is the perfect way to bring a lifetime of problem-solving and refining ideas to
        life.
      </p>
      <ul class="flex justify-between items-center mt-8 w-full px-2 gap-2">
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
      </ul>
      <ArrowTransition
        customClass="scale-75 md:absolute md:-rotate-90 md:-right-18 md:-top-14 md:scale-50  lg:scale-40 lg:-right-18 "
      />
    </article>

    <article class="flex flex-col items-center justify-center relative md:mb-8">
      <img :src="familyCafePhoto" alt="" class="h-60 rounded-md" />
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
      <p class="leading-relaxed my-2">
        Building on this, I spent seven years teaching English to everyone from young children to
        adults, including refugees and international students,
        <strong>which sharpened my communication skills and empathy</strong>
      </p>

      <p class="leading-relaxed">
        My Linguistics degree further shaped my thinking about communication, different
        perspectives,
        <strong>and deepened my ability to connect with and understand diverse users.</strong>
      </p>
      <ul class="flex justify-between items-center mt-8 w-full px-2 gap-2">
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
      </ul>
      <ArrowTransition customClass="scale-75 md:hidden" />
    </article>
    <article
      class="flex flex-col items-center justify-center relative md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1 md:mb-8"
    >
      <img :src="selfCounterPhoto" alt="" class="h-60 rounded-md" />
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
      <ul class="flex justify-between items-center mt-8 w-full gap-2">
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
          <figcaption class="text-sm text-center">Problem Solving</figcaption>
        </figure>
      </ul>
      <ArrowTransition
        customClass="scale-75  md:absolute md:rotate-90 md:-top-14 md:-left-20 lg:-rotate-90 lg:-left-18 md:scale-50 lg:scale-40 "
      />
    </article>
    <article class="flex flex-col items-center justify-center relative md:mb-8">
      <img :src="sunPhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">W</SPAN>ork
      </h3>
      <p class="leading-relaxed">
        My journey truly hit its stride at my recent university job in San Diego;
        <strong
          >its chaotic environment, lacking systems and plans, unexpectedly became my launchpad into
          UX. my career path.</strong
        >
      </p>
      <p class="leading-relaxed my-2">
        I proactively transformed challenges into opportunities,
        <strong
          >building Notion-based project management systems, crafting a year-long marketing strategy
          with digital assets, and refactoring email newsletters with analytics.</strong
        >
        It was here that everything clicked, as I realized my daily life had long revolved around
        iterating, ideating, and problem-solving to make things better—even before I knew the term
        "UX." This hands-on application, combined with extensive UX reading and completing Google's
        Coursera UX course, definitively cemented
      </p>
      <ul class="flex justify-between items-center mt-8 w-full">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="empathyIcon" alt="" class="h-10" />
          <figcaption class="text-sm">User Empathy</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="systemsIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Systems Thinking</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="problemIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Problem Solving</figcaption>
        </figure>
      </ul>
      <ArrowTransition
        customClass="scale-75 md:hidden lg:block lg:absolute lg:rotate-90 lg:scale-40 lg:-top-14 lg:-left-18"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative lg:col-start-2 lg:row-start-2 md:mb-8"
    >
      <img :src="directionPhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">F</SPAN>uture
      </h3>
      <p class="leading-relaxed">
        <strong class="">Right now, my whole focus is on landing my first UX design role.</strong>
        I'm excited to finally pursue a career that truly ignites my passion and aligns with
        everything I've learned, both formally and through my life's unique experiences. I'm ready
        to bring my extensive real-world understanding of users, my knack for problem-solving, and
        my commitment to creating meaningful digital experiences to a team.
      </p>
      <p class="mt-2 leading-relaxed">
        <strong
          >I believe my diverse background isn't just a story—it's a toolkit for approaching design
          challenges with empathy, creativity, and a fresh perspective.</strong
        >
        I'm eager to jump in, collaborate, and continue learning and growing within the UX field.
      </p>
      <ul class="flex justify-between items-center mt-8 w-full">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="empathyIcon" alt="" class="h-10" />
          <figcaption class="text-sm">User Empathy</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="systemsIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Systems Thinking</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="problemIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Problem Solving</figcaption>
        </figure>
      </ul>
      <ArrowTransition
        customClass="scale-75 md:scale-50 md:absolute md:-rotate-90 md:-right-14 md:-top-14 lg:rotate-90 lg:scale-40 lg:hidden"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative lg:col-start-1 lg:row-start-2 md:mb-8"
    >
      <img :src="selfBlackPhoto" alt="" class="h-60 rounded-md" />
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
        solving, and striving to make things better—now clearly defined as UX design.
      </p>
      <ul class="flex justify-between items-center mt-8 w-full">
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="empathyIcon" alt="" class="h-10" />
          <figcaption class="text-sm">User Empathy</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="systemsIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Systems Thinking</figcaption>
        </figure>
        <figure class="flex justify-center items-center flex-col gap-2">
          <img :src="problemIcon" alt="" class="h-10" />
          <figcaption class="text-sm">Problem Solving</figcaption>
        </figure>
      </ul>
      <ArrowTransition
        customClass="scale-75 hidden lg:block lg:absolute lg:scale-40 lg:rotate-90 lg:-right-18 lg:-top-14"
      />
    </article>
  </section>
</template>

<style scoped></style>
