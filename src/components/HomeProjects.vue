<script setup>
// Images
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeMockUp from '@/assets/images/home/cafe-mockup.png'
import beanMockUp from '@/assets/images/home/bean-mockup.png'
import denkiMockUp from '@/assets/images/home/denki-mockup.png'
</script>

<template>
  <section class="font-main mx-auto">
    <header class="">
      <h1 class="font-bold text-3xl md:text-4xl font-special">My Work</h1>
      <p class="my-2 sm:text-xl">
        End-to-end product and UX work, designed and built from concept to production for real
        businesses and users.
      </p>
    </header>

    <div class="home-projects-container">
      <div class="relative">
        <!-- <h2 class="featured-title">FEATURED</h2> -->
        <ProjectCard
          title="Strengthened Trust and Service Clarity for a Japanese Solar Maintenance Business"
          ux-type="B2B Website UX · Information Architecture"
          description="Redesigned and rebuilt a live solar maintenance website to improve credibility, service clarity, and usability for business and government clients in Japan."
          :image="denkiMockUp"
          route="/case-six"
          loading="lazy"
        />
      </div>
      <ProjectCard
        title="Designed a Character-Driven E-Commerce Experience from Scratch"
        ux-type="Product Design · UX Strategy"
        description="A fully self-directed, research-driven product design project defining the brand, UX strategy, visual system, and front-end implementation for a production-ready e-commerce experience."
        :image="beanMockUp"
        route="/case-five"
        loading="lazy"
      />

      <ProjectCard
        title="Improved Clarity for a Multilingual Cafe Website in Japan"
        ux-type="Website UX · Multilingual Design"
        description="A redesign of a local cafe website focused on clear communication, mobile usability, and serving both Japanese and international customers."
        :image="cafeMockUp"
        route="/case-four"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped></style>
