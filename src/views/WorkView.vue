<script setup>
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeTrioPhoto from '@/assets/images/home/cafe-triangle-home.png'
import notionTrioPhoto from '@/assets/images/home/notion-systems-home.png'
import marketingTrioPhoto from '@/assets/images/home/marketing-system-home.png'
import emailTrioPhoto from '@/assets/images/home/newsletter-system-home.png'
</script>

<template>
  <div class="mb-16 font-headings">
    <header>
      <h1 class="text-4xl font-bold text-center mt-8">All Case Studies</h1>
      <p class="mt-2 mb-8 md:text-center md:px-8">
        Each project below comes from real-world experience. These case studies showcase how I
        applied UX thinking to everything from web and email redesigns to internal systems and team
        workflows. Though non-traditional, each one demonstrates practical design impact, strategic
        thinking, and end-to-end execution.
      </p>
    </header>
    <section class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        title="Cafe Triangle"
        ux-type="Web UX"
        description="A multilingual cafe website designed from scratch to clearly showcase the menu and brand while improving usability for both local and international customers."
        :image="cafeTrioPhoto"
        route="/case-one"
      />
      <ProjectCard
        title="Notion Project Management System"
        ux-type="Systems UX"
        description="A fully custm Notion workspace that streamlined project tracking, boosted team accountability, and replaced chaotic email chains with clear systems."
        :image="notionTrioPhoto"
        route="/case-two"
      />
      <ProjectCard
        title="Department Marketing System"
        ux-type="Design Ops UX"
        description="A full redesign of the department's visual standards and workflows, unifying brand identity and imprving clairty across all marketing assets."
        :image="marketingTrioPhoto"
        route="/case-three"
      />
      <ProjectCard
        title="Email Newsletter Redesign"
        ux-type="Email UX"
        description="A data-informed newsletter overhaul focused on hierarchy, engagement, and skimmability to boost click-throughs and student interaction."
        :image="emailTrioPhoto"
        route="/case-four"
      />
    </section>
  </div>
</template>

<style scoped></style>
