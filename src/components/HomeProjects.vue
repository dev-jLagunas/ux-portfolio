<script setup>
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeTrioPhoto from '@/assets/images/home/cafe-triangle-home.png'
import notionTrioPhoto from '@/assets/images/home/notion-systems-home.png'
import marketingTrioPhoto from '@/assets/images/home/marketing-system-home.png'
import emailTrioPhoto from '@/assets/images/home/newsletter-system-home.png'
defineProps()
</script>

<template>
  <section class="font-headings" v-bind="$attrs">
    <header class="px-4">
      <h1 class="font-bold text-3xl text-center md:text-5xl">My UX Work</h1>
      <p class="my-2 text-center">
        A selection of real-world project that highlight my process, versatility, and impact ranging
        from internal systems to full product design.
      </p>
    </header>

    <div class="px-4 flex flex-col gap-6 mt-8 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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
    </div>
  </section>
</template>

<style scoped></style>
