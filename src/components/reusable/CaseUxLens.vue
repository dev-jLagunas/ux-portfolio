<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Props
defineProps({
  id: String,
  intro: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
})

const uxRoot = ref(null)
const slotContainer = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()
    const steps = slotContainer.value ? Array.from(slotContainer.value.children) : []

    // Desktop: Directional timeline choreography with sticky left column & cascading steps
    mm.add('(min-width: 1024px)', () => {
      // 1. Header & Intro reveal
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.ux-top-wrap',
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse',
        },
      })

      headerTl
        .from('.ux-title-block', {
          x: -34,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        })
        .from(
          '.ux-intro-copy',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.45',
        )

      // 2. Left "Design Framework" anchor column enters from left
      gsap.from('.ux-left-col', {
        x: -38,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ux-timeline-grid',
          start: 'top 82%',
          end: 'bottom 15%',
          toggleActions: 'play reverse play reverse',
        },
      })

      // 3. Vertical timeline rail draws downward
      gsap.fromTo(
        '.ux-rail-line',
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.ux-timeline-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        },
      )

      // 4. Each slotted timeline step slides in from the right sequentially
      if (steps.length) {
        gsap.from(steps, {
          x: 36,
          y: 14,
          opacity: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.ux-timeline-grid',
            start: 'top 80%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        })
      }
    })

    // Mobile & Tablet: Clean vertical cascade without horizontal overflow
    mm.add('(max-width: 1023px)', () => {
      gsap.from('.ux-top-wrap', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ux-top-wrap',
          start: 'top 88%',
          end: 'bottom 12%',
          toggleActions: 'play reverse play reverse',
        },
      })

      gsap.from('.ux-left-col', {
        y: 22,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ux-left-col',
          start: 'top 88%',
          end: 'bottom 12%',
          toggleActions: 'play reverse play reverse',
        },
      })

      steps.forEach((step) => {
        gsap.from(step, {
          y: 24,
          opacity: 0,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    })
  }, uxRoot.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section :id="id || 'ux-timeline-section'" ref="uxRoot" class="max-w-7xl mx-auto overflow-x-clip">
    <div class="ux-top-wrap">
      <div class="section-header-wrapper ux-title-block">
        <p class="section-phase">Full Framework</p>
        <h3 class="section-title">TLDR</h3>
      </div>

      <p class="ux-intro-copy mt-2 md:text-lg max-w-4xl">
        {{ intro }}
      </p>
    </div>

    <article>
      <section>
        <div class="container px-4 py-12 mx-auto">
          <div class="ux-timeline-grid grid gap-8 md:grid-cols-12 items-start">
            <div class="ux-left-col col-span-12 md:col-span-4 lg:sticky lg:top-32">
              <div class="ux-header-wrapper">
                <h3 class="text-3xl font-semibold">Design Framework</h3>
                <span class="text-sm tracking-wide opacity-80">
                  {{ subheading }}
                </span>
              </div>
            </div>

            <div class="relative col-span-12 px-4 space-y-6 md:col-span-8">
              <!-- Animated vertical timeline rail on sm+ screens -->
              <span
                aria-hidden="true"
                class="ux-rail-line hidden sm:block absolute top-2 bottom-2 left-1 w-0.5 bg-gray-300 dark:bg-white/20"
              />
              <div ref="slotContainer" class="ux-slot-wrapper ux-slot-animated">
                <!-- Slot Content Begins -->
                <slot />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </section>
</template>

<style scoped>
.ux-title-block,
.ux-intro-copy,
.ux-left-col,
.ux-rail-line,
.ux-slot-animated > :deep(*) {
  will-change: transform, opacity;
}

/* Override static ::before rail so the animated .ux-rail-line handles the draw-in */
.ux-slot-animated::before {
  display: none;
}
</style>
