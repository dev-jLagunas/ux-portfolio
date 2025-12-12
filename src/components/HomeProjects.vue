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
      <h1 class="font-bold text-3xl md:text-4xl font-special">My UX Work</h1>
      <p class="my-2 sm:text-xl lg:w-3/4">
        A selection of real-world work that highlight my process, versatility, and impact ranging
        from internal systems to full product design.
      </p>
    </header>

    <div class="home-projects-container">
      <div class="relative">
        <!-- <h2 class="featured-title">FEATURED</h2> -->
        <ProjectCard
          title="Tanaka Denki Service"
          ux-type="Website Redesign"
          description="A complete redesign of a Japanese solar maintenance website, improving communication, trust, and usability for business and government clients."
          :image="denkiMockUp"
          route="/case-six"
          loading="lazy"
        />
      </div>
      <ProjectCard
        title="Bean And Beast Chocolates"
        ux-type="E-commerce UX"
        description="Bean And Beast is a luxury chocolate brand focused on telling a story. Each flavor is based on a black and white animal contrasted against vibrant colors and flavors."
        :image="beanMockUp"
        route="/case-five"
        loading="lazy"
      />
      <ProjectCard
        title="Cafe Triangle Redesign"
        ux-type="Web UX"
        description="A multilingual cafe website designed from scratch to clearly showcase the menu and brand while improving usability for both local and international customers."
        :image="cafeMockUp"
        route="/case-one"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped></style>
