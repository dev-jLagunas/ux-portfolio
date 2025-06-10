<script setup>
import selfPhoto from '@/assets/images/about/self-red.jpg'
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
import sunPhoto from '@/assets/images/about/cafe-self-about.jpg'
import familyCafePhoto from '@/assets/images/about/family-cafe-about.jpg'
import familyHomePhoto from '@/assets/images/about/family-home-about.jpg'
import directionPhoto from '@/assets/images/about/direction-about.jpg'
import selfCounterPhoto from '@/assets/images/about/self-counter-about.jpg'
import selfBlackPhoto from '@/assets/images/about/self-black.jpg'
</script>

<template>
  <section class="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
    <article class="flex flex-col items-center justify-center relative">
      <img :src="selfPhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">B</SPAN>io
      </h3>
      <p class="leading-relaxed indent-8">
        I'm a seasoned pro with over twenty years of direct customer service experience, which means
        I really get how people think and what they need.
        <strong>My career path has been pretty unique,</strong>
        taking me through different jobs and even cultures, and it's taught me how to blend smart
        thinking with creative solutions and a whole lot of empathy.
      </p>
      <p class="mt-2 leading-relaxed indent-8">
        I genuinely love diving into tricky problems and figuring out how to make things easier and
        more enjoyable for users.
        <strong
          >My goal is to turn complicated stuff into simple, beautiful, and intuitive experiences
          that just click.</strong
        >
        For me, UX design isn't just a job; it's the perfect way to bring a lifetime of
        problem-solving and refining ideas to life.
      </p>
      <ArrowTransition
        customClass="scale-75 md:scale-50 md:absolute md:-rotate-90 md:-right-14 md:-top-14 lg:scale-40 lg:-right-18"
      />
    </article>
    <article class="flex flex-col items-center justify-center relative">
      <img :src="familyCafePhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">R</SPAN>oots
      </h3>
      <p class="leading-relaxed indent-8">
        My professional journey kicked off with five years managing a KFC, followed by seven years
        as a Hospitality Coordinator at Viejas Casino.
        <strong
          >These early roles taught me a ton about customer service, operations, and handling all
          sorts of people.</strong
        >
      </p>
      <p class="mt-2 leading-relaxed indent-8">
        On top of that, I spent about seven years teaching English – volunteering for refugees and
        international students, then teaching all ages in Japan from five-year-olds to
        eighty-five-year-olds.
        <strong
          >Studying Linguistics in college really shaped how I think about communication and
          understanding different perspectives, and speaking four languages</strong
        >
        – Spanish, Japanese, English, and French – has only deepened my empathy for diverse users.
      </p>
      <ArrowTransition customClass="scale-75 md:hidden" />
    </article>
    <article
      class="flex flex-col items-center justify-center relative md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-1"
    >
      <img :src="selfCounterPhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">J</SPAN>ourney
      </h3>
      <p class="leading-relaxed indent-8">
        After college, I spent almost a decade in Japan, starting as an English teacher where I even
        won an award. But after five years,
        <strong>I needed a bigger challenge and decided to open Cafe Triangle with my wife. </strong
        >That's where I was really forced to learn, handling everything from business management to
        customer service, and discovering a real love for creativity through photography.
      </p>
      <p class="leading-relaxed indent-8">
        <strong
          >When the cafe eventually closed, I pivoted hard, spending the last two and a half years
          teaching myself front-end web development and building a solid portfolio.</strong
        >
        It was during this time that I first bumped into the term "UX," and that casual introduction
        truly planted a seed for what was to come.
      </p>
      <ArrowTransition
        customClass="scale-75  md:scale-50 md:absolute md:rotate-90 md:-top-14 md:-left-20 lg:-rotate-90 lg:-left-18 lg:scale-40"
      />
    </article>
    <article class="flex flex-col items-center justify-center relative">
      <img :src="sunPhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">W</SPAN>ork
      </h3>
      <p class="leading-relaxed indent-8">
        My journey truly hit its stride recently, especially in my current university job in San
        Diego.
        <strong
          >That workplace was pretty chaotic—no real systems, no clear plans, just a lot of
          struggles that actually became my launchpad into UX.</strong
        >
        I jumped in, building out Notion systems for project management, creating a solid marketing
        strategy with digital assets for the year, and even refactoring our email newsletters to use
        real analytics.
      </p>
      <p class="mt-2 leading-relaxed indent-8">
        <strong
          >It was here that everything clicked: I realized my daily life was already about making
          things better through constant iteration, ideation, and problem-solving, even if I didn't
          call it "UX" yet.</strong
        >
        This hands-on experience, coupled with deep dives into UX reading and finishing Google's
        Coursera UX course, cemented my path.
      </p>
      <ArrowTransition
        customClass="scale-75 md:hidden lg:block lg:absolute lg:rotate-90 lg:scale-40 lg:-top-14 lg:-left-18"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative lg:col-start-2 lg:row-start-2"
    >
      <img :src="directionPhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">F</SPAN>uture
      </h3>
      <p class="leading-relaxed indent-8">
        <strong class="">Right now, my whole focus is on landing my first UX design role.</strong>
        I'm excited to finally pursue a career that truly ignites my passion and aligns with
        everything I've learned, both formally and through my life's unique experiences. I'm ready
        to bring my extensive real-world understanding of users, my knack for problem-solving, and
        my commitment to creating meaningful digital experiences to a team.
      </p>
      <p class="mt-2 leading-relaxed indent-8">
        <strong
          >I believe my diverse background isn't just a story—it's a toolkit for approaching design
          challenges with empathy, creativity, and a fresh perspective.</strong
        >
        I'm eager to jump in, collaborate, and continue learning and growing within the UX field.
      </p>
      <ArrowTransition
        customClass="scale-75 md:scale-50 md:absolute md:-rotate-90 md:-right-14 md:-top-14 lg:rotate-90 lg:scale-40 lg:hidden"
      />
    </article>
    <article
      class="flex flex-col items-center justify-center relative lg:col-start-1 lg:row-start-2"
    >
      <img :src="selfBlackPhoto" alt="" class="h-60 rounded-md" />
      <h3 class="text-4xl my-2">
        <span class="text-pink font-bold">M</span>y <SPAN class="text-blue font-bold">D</SPAN>ream
      </h3>
      <p class="leading-relaxed indent-8">
        My ultimate dream in UX is to finally build a career that doesn't just pay the bills, but
        genuinely fuels my passion every single day.
        <strong
          >I want to be part of a team that crafts truly impactful digital experiences, solving real
          problems for real people and making their lives a little bit easier and more
          enjoyable</strong
        >. Imagine creating solutions that blend thoughtful logic with pure creativity, designing
        systems that are both structured and deeply empathetic to user needs.
      </p>
      <p class="mt-2 leading-relaxed indent-8">
        For me, success means contributing to projects where I can continuously iterate, ideate, and
        tweak until we deliver something truly amazing.
        <strong
          >This isn't just a job for me; it's the culmination of a lifetime spent observing,
          solving, and striving to make things better, now with a clear name: UX design.</strong
        >
      </p>
      <ArrowTransition
        customClass="scale-75 hidden lg:block lg:absolute lg:scale-40 lg:rotate-90 lg:-right-18 lg:-top-14"
      />
    </article>
  </section>
</template>

<style scoped></style>
