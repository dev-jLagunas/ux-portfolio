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
const sectionRef = ref(null)
let mm

onMounted(() => {
  mm = gsap.matchMedia()

  // Animate headings across all screen sizes
  if (sectionRef.value) {
    const titles = sectionRef.value.querySelectorAll('.my-work, .bonus')

    titles.forEach((title) => {
      gsap.fromTo(
        title,
        {
          x: -120,
        },
        {
          x: 0,
          duration: 1.1,
          ease: 'bounce.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
        },
      )
    })
  }

  // Only run card animations on screens 768px and wider
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
  <section ref="sectionRef" class="font-main mx-auto overflow-x-hidden">
    <header class="mb-16">
      <h1 class="section-title my-work mt-4">My Work</h1>
    </header>

    <div ref="container" class="home-projects-container">
      <ProjectCard
        class="project-card-animate"
        title="Built a Confidence-First Bilingual Learning Product for Young Children in Japan"
        ux-type="Product Design · UX Strategy"
        description="An end-to-end, self-initiated product combining pedagogy, UX strategy, visual systems, and front-end development to launch a character-driven English learning platform for Japanese families."
        :image="tlfMockUp"
        bg-color="bg-blue/30"
        :deliverables="[
          'Zero-to-one design and production shipped in 45 days',
          'Reduced cognitive load via single-pattern pedagogical framework',
          '5 published bilingual picture books with custom character IP',
          'Code-first bilingual web app with responsive Japanese typography',
        ]"
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
          bg-color="bg-pink/30"
          reversed
          :deliverables="[
            'Redesigned B2B conversion funnel targeting public sector & commercial clients',
            'Solved 3-year content stall by replacing legacy WP with headless Contentful',
            'Custom Japanese design system and typography optimized for mobile scanability',
            'Production Nuxt 4 & Tailwind web architecture with Netlify inquiry pipeline',
          ]"
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
        bg-color="bg-amber-100"
        :deliverables="[
          'User-tested gifting UX built on 5 qualitative user interviews & journey mapping',
          'Zero-to-one design thinking capstone executed from paper wireframes to live code',
          'Figma design system with 6 character identities, custom packaging, and animal lore',
          'Vue 3 & Tailwind SPA featuring Pinia global cart state and 4-step checkout flow',
        ]"
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
        reversed
        bg-color="bg-emerald-100"
        :deliverables="[
          'Overcame static image menu friction with structured mobile-first navigation',
          'Drove direct customer call volume and foot traffic via one-touch CTA architecture',
          'Trilingual localization engine (JP/EN/ES) built using Angular ngx-translate',
          'Custom component library, dark mode system, and zero-dependency Netlify pipeline',
        ]"
        url="https://cafetriangle-refresh.netlify.app/#home"
        route="/case-one"
        loading="lazy"
      />
      <h2 class="section-title bonus my-4">Bonus</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard
          class="project-card-animate"
          title="Creating a High-Conversion English Coaching Platform"
          ux-type="Linguistics-led UX · Brutalist Design · i18n Architecture"
          description="An 8-iteration build from scratch using Nuxt 4 and Vanilla CSS. This project solves standing out through a custom brutalist aesthetic, color-coded language states, and a live professional timeline designed to filter and convert high-intent adult students."
          :image="langMockUp"
          bg-color="bg-gray-200"
          vertical
          url="https://jlag-english.netlify.app/"
          route="/blog/designing-a-high-conversion-landing-page-for-english-coaching"
          loading="lazy"
        />
        <ProjectCard
          class="project-card-animate"
          marker="Bonus"
          title="Engineering a Designer Identity: The Meta Case Study"
          ux-type="Product Design · Design Systems · Nuxt 4"
          description="A technical and visual breakdown of my portfolio's evolution. This project explores building a recognizable brand through scalable systems, custom architecture, and purposeful interaction."
          :image="portMockUp"
          vertical
          bg-color="bg-gray-200"
          route="/blog/ux-portfolio-meta-case-study"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
