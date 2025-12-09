<script setup>
// Images
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeMockUp from '@/assets/images/home/cafe-mockup.png'
import notionMockup from '@/assets/images/home/notion-mockup.png'
import marketingMockup from '@/assets/images/home/flyer-mockup.png'
import emailMockup from '@/assets/images/home/newsletter-mockup.png'
import beanMockUp from '@/assets/images/home/bean-mockup.png'
</script>

<template>
  <section class="font-main">
    <header class="">
      <h1 class="font-bold text-3xl md:text-4xl font-special">My UX Work</h1>
      <p class="my-2 sm:text-xl">
        A selection of real-world work that highlight my process, versatility, and impact ranging
        from internal systems to full product design.
      </p>
    </header>

    <div class="home-projects-container">
      <div class="relative md:col-span-2">
        <h2 class="featured-title">FEATURED</h2>
        <ProjectCard
          title="Bean And Beast Chocolates"
          ux-type="E-commerce UX"
          description="Bean And Beast is a luxury chocolate brand focused on telling a story with their flavors. Each flavor is based on a black and white animal contrasted against vibrant colors and flavors. The animals represent different aspects within each of us."
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
        :image="notionMockup"
        route="/case-two"
        loading="lazy"
      />
      <ProjectCard
        title="Department Marketing System"
        ux-type="Design Ops UX"
        description="A full redesign of the department's visual standards and workflows, unifying brand identity and improving clarity across all marketing assets."
        :image="marketingMockup"
        route="/case-three"
        loading="lazy"
      />
      <ProjectCard
        title="Email Newsletter Redesign"
        ux-type="Email UX"
        description="A data-informed newsletter overhaul focused on hierarchy, engagement, and skimmability to boost click-throughs and student interaction."
        :image="emailMockup"
        route="/case-four"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped></style>
