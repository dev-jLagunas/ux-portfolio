<script setup>
// Images
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeMockUp from '@/assets/images/home/cafe-mockup.webp'
import beanMockUp from '@/assets/images/home/bean-mockup.webp'
import denkiMockUp from '@/assets/images/home/denki-mockup.webp'
import tlfMockUp from '@/assets/images/cases/case-tlf/tlf-mockup.webp'
</script>

<template>
  <section class="font-main mx-auto max-w-7xl">
    <header class="">
      <h1 class="font-bold text-3xl md:text-4xl font-special">My Work</h1>
      <p class="my-2 sm:text-xl">
        End-to-end product and UX work, designed and built from concept to production for real
        businesses and users.
      </p>
    </header>

    <div class="home-projects-container">
      <ProjectCard
        title="Built a Confidence-First Bilingual Learning Product for Young Children in Japan"
        ux-type="Product Design · UX Strategy · Multilingual UX"
        description="An end-to-end, self-initiated product combining pedagogy, UX strategy, visual systems, and front-end development to launch a character-driven English learning platform for Japanese families."
        :image="tlfMockUp"
        url="https://the-language-friends.com/"
        route="/case-tlf"
        loading="lazy"
      />

      <div class="relative">
        <ProjectCard
          title="Strengthened Trust and Service Clarity for a Japanese Solar Maintenance Business"
          ux-type="B2B Website UX · Information Architecture"
          description="Redesigned and rebuilt a live solar maintenance website to improve credibility, service clarity, and usability for business and government clients in Japan."
          :image="denkiMockUp"
          url="https://tdss.co.jp/"
          route="/case-six"
          loading="lazy"
        />
      </div>
      <ProjectCard
        title="Designed a Character-Driven E-Commerce Experience from Scratch"
        ux-type="Product Design · UX Strategy"
        description="A fully self-directed, research-driven product design project defining the brand, UX strategy, visual system, and front-end implementation for a production-ready e-commerce experience."
        :image="beanMockUp"
        url="https://dev-jlagunas.github.io/bean-and-beast/#/"
        route="/case-five"
        loading="lazy"
      />

      <ProjectCard
        title="Improved Clarity for a Multilingual Cafe Website in Japan"
        ux-type="Website UX · Multilingual Design"
        description="A redesign of a local cafe website focused on clear communication, mobile usability, and serving both Japanese and international customers."
        :image="cafeMockUp"
        url="https://cafetriangle-refresh.netlify.app/#home"
        route="/case-one"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped></style>
