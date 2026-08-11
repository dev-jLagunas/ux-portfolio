<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Images
import ProjectCard from '@/components/reusable/ProjectCard.vue'
import cafeMockUp from '@/assets/images/home/cafe-mockup.webp'
import beanMockUp from '@/assets/images/home/bean-mockup.webp'
import denkiMockUp from '@/assets/images/home/denki-mockup.webp'
import tlfMockUp from '@/assets/images/cases/case-tlf/tlf-mockup.webp'
import langMockUp from '@/assets/images/home/language-mockup.webp'
import portMockUp from '@/assets/images/home/ux-port-mockup.webp'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)
let mm

onMounted(() => {
  mm = gsap.matchMedia()

  // Only run animations on screens 768px and wider
  mm.add('(min-width: 768px)', () => {
    if (!container.value) return

    const cards = container.value.querySelectorAll('.project-card-animate')

    cards.forEach((card, index) => {
      const isLeftColumn = index % 2 === 0
      const startX = isLeftColumn ? -60 : 60

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: startX,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })
  })
})

onUnmounted(() => {
  if (mm) mm.revert()
})
</script>

<template>
  <section class="font-main mx-auto overflow-x-hidden">
    <header class="mb-16">
      <h1 class="section-title mt-4">My Work</h1>
    </header>

    <div ref="container" class="home-projects-container">
      <ProjectCard
        class="project-card-animate"
        title="Built a Confidence-First Bilingual Learning Product for Young Children in Japan"
        ux-type="Product Design · UX Strategy · Multilingual UX"
        description="An end-to-end, self-initiated product combining pedagogy, UX strategy, visual systems, and front-end development to launch a character-driven English learning platform for Japanese families."
        :image="tlfMockUp"
        visualRoute="/blog/tlf-case-study"
        url="https://the-language-friends.com/"
        route="/case-tlf"
        loading="lazy"
      />

      <div class="relative project-card-animate">
        <ProjectCard
          title="Strengthened Trust and Service Clarity for a Japanese Solar Maintenance Business"
          ux-type="B2B Website UX · Information Architecture"
          description="Redesigned and rebuilt a live solar maintenance website to improve credibility, service clarity, and usability for business and government clients in Japan."
          :image="denkiMockUp"
          visualRoute="/blog/denki-case-study"
          url="https://tdss.co.jp/"
          route="/case-six"
          loading="lazy"
        />
      </div>

      <ProjectCard
        class="project-card-animate"
        title="Designed a Character-Driven E-Commerce Experience from Scratch"
        ux-type="Product Design · UX Strategy"
        description="A fully self-directed, research-driven product design project defining the brand, UX strategy, visual system, and front-end implementation for a production-ready e-commerce experience."
        :image="beanMockUp"
        visualRoute="/blog/bean-and-beast-visual-case-study"
        url="https://dev-jlagunas.github.io/bean-and-beast/#/"
        route="/case-five"
        loading="lazy"
      />

      <ProjectCard
        class="project-card-animate"
        title="Improved Clarity for a Multilingual Cafe Website in Japan"
        ux-type="Website UX · Multilingual Design"
        description="A redesign of a local cafe website focused on clear communication, mobile usability, and serving both Japanese and international customers."
        :image="cafeMockUp"
        url="https://cafetriangle-refresh.netlify.app/#home"
        route="/case-one"
        loading="lazy"
      />
      <ProjectCard
        class="project-card-animate"
        title="Creating a High-Conversion English Coaching Platform"
        ux-type="Linguistics-led UX · Brutalist Design · i18n Architecture"
        description="An 8-iteration build from scratch using Nuxt 4 and Vanilla CSS. This project solves standing out through a custom brutalist aesthetic, color-coded language states, and a live professional timeline designed to filter and convert high-intent adult students."
        :image="langMockUp"
        url="https://jlag-english.netlify.app/"
        route="/blog/designing-a-high-conversion-landing-page-for-english-coaching"
        loading="lazy"
      />
      <div class="project-card-animate">
        <ProjectCard
          marker="Bonus"
          title="Engineering a Designer Identity: The Meta Case Study"
          ux-type="Product Design · Design Systems · Nuxt 4"
          description="A technical and visual breakdown of my portfolio's evolution. This project explores building a recognizable brand through scalable systems, custom architecture, and purposeful interaction."
          :image="portMockUp"
          route="/blog/ux-portfolio-meta-case-study"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
