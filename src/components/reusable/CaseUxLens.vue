<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
    const steps = slotContainer.value ? Array.from(slotContainer.value.children) : []

    gsap.from('.ux-reveal', {
      y: 24,
      opacity: 0,
      duration: 0.65,
      stagger: 0.1,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: uxRoot.value,
        start: 'top 85%',
        once: true,
      },
    })

    if (steps.length) {
      gsap.from(steps, {
        y: 22,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: slotContainer.value,
          start: 'top 85%',
          once: true,
        },
      })
    }
  }, uxRoot.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section :id="id || 'ux-timeline-section'" ref="uxRoot" class="max-w-7xl mx-auto">
    <div class="section-header-wrapper ux-reveal">
      <p class="section-phase">Full Framework</p>
      <h3 class="section-title">TLDR</h3>
    </div>

    <article>
      <p class="mt-2 md:text-lg ux-reveal">
        {{ intro }}
      </p>

      <section>
        <div class="container px-4 py-8 mx-auto">
          <div class="grid gap-4 md:grid-cols-12">
            <div class="col-span-12 md:col-span-3 ux-reveal">
              <div class="ux-header-wrapper">
                <h3 class="text-3xl font-semibold">Design Framework</h3>
                <span class="text-sm tracking-wide">
                  {{ subheading }}
                </span>
              </div>
            </div>

            <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div ref="slotContainer" class="ux-slot-wrapper">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </section>
</template>

<style scoped></style>
