<script setup>
// Images
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeTrioPhoto from '@/assets/images/home/cafe-triangle-home.webp'
import notionTrioPhoto from '@/assets/images/home/notion-systems-home.webp'
import marketingTrioPhoto from '@/assets/images/home/marketing-system-home.webp'
import emailTrioPhoto from '@/assets/images/home/newsletter-system-home.webp'
import quickBitesLogo from '@/assets/images/home/quick-bites-logo.png'
</script>

<template>
  <section class="font-headings">
    <header class="px-4">
      <h1 class="font-bold text-3xl text-center md:text-5xl">My UX Work</h1>
      <p class="my-2 text-center">
        A selection of real-world project that highlight my process, versatility, and impact ranging
        from internal systems to full product design.
      </p>
    </header>

    <div
      class="px-4 flex flex-col items-center justify-center gap-6 mt-8 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3"
    >
      <ProjectCard
        title="Cafe Triangle Redesign"
        ux-type="Web UX"
        description="A multilingual cafe website designed from scratch to clearly showcase the menu and brand while improving usability for both local and international customers."
        :image="cafeTrioPhoto"
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
      <ProjectCard
        title="Coming Soon"
        ux-type="In Progress"
        description="Currently conducting user research for a mood-based restaurant recommender app. This case study will demonstrate the full UX process from start to finish, real interviews, journey maps, ideation, testing, and low and high-fidelity prototypes."
        :image="quickBitesLogo"
        route="/case-five"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped></style>
