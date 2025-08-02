<script setup>
// Images
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeMockUp from '@/assets/images/home/cafe-mockup.png'
import notionTrioPhoto from '@/assets/images/home/notion-systems-home.webp'
import marketingTrioPhoto from '@/assets/images/home/marketing-system-home.webp'
import emailTrioPhoto from '@/assets/images/home/newsletter-system-home.webp'
import beanMockUp from '@/assets/images/home/bean-mockup.png'
</script>

<template>
  <section class="font-main">
    <header class="">
      <h1 class="font-bold text-3xl md:text-5xl">My UX Work</h1>
      <p class="my-2 sm:text-xl">
        A selection of real-world project that highlight my process, versatility, and impact ranging
        from internal systems to full product design.
      </p>
    </header>

    <div
      class="flex flex-col items-center justify-center gap-6 mt-8 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3"
    >
      <div class="relative md:col-span-2">
        <h2
          class="font-bold bg-blue text-white tracking-wider rounded-sm mx-auto mb-2 w-fit px-4 py-1 md:-top-3 md:z-10 md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          FEATURED
        </h2>
        <ProjectCard
          title="Bean And Beast Chocolates"
          ux-type="E-commerce UX"
          description="A full-scope UX capstone project built from scratch using the design thinking framework, combining research, branding, and front-end development into a polished gifting experience."
          :image="beanMockUp"
          route="/case-five"
          loading="lazy"
        />
      </div>

      <ProjectCard
        title="Cafe Triangle Redesign"
        ux-type="Web UX"
        description="A multilingual cafe website designed from scratch to clearly showcase the menu and brand while improving usability for both local and international customers."
        :image="cafeMockUp"
        route="/case-one"
        loading="lazy"
      />
      <ProjectCard
        title="Notion Project Management System"
        ux-type="Systems UX"
        description="A fully custom Notion workspace that streamlined project management, boosted team accountability, and replaced chaotic email chains with clear systems."
        :image="notionTrioPhoto"
        route="/case-two"
        loading="lazy"
      />
      <ProjectCard
        title="Department Marketing System"
        ux-type="Design Ops UX"
        description="A full redesign of the department's visual standards and workflows, unifying brand identity and improving clarity across all marketing assets."
        :image="marketingTrioPhoto"
        route="/case-three"
        loading="lazy"
      />
      <ProjectCard
        title="Email Newsletter Redesign"
        ux-type="Email UX"
        description="A data-informed newsletter overhaul focused on hierarchy, engagement, and skimmability to boost click-throughs and student interaction."
        :image="emailTrioPhoto"
        route="/case-four"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped></style>
