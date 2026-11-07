<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Modal Logic
import { showContactModal } from '@/composables/useContactModal'

// Tabler Icons
import { IconHeartHandshake, IconEye, IconRocket, IconMail } from '@tabler/icons-vue'

// Photos
import selfPhoto from '@/assets/images/about/self-red.webp'
import familyCafePhoto from '@/assets/images/about/family-cafe-about.webp'
import selfPhotoBlue from '@/assets/images/about/self-blue.webp'
import familyCatPhoto from '@/assets/images/about/family-cats.webp'
import mokoMugCafe from '@/assets/images/about/moko-mug-cafe.webp'
import okjaOrange from '@/assets/images/about/okja-orange.webp'
import selfBlueBar from '@/assets/images/about/self-blue-bar.webp'
import familyCatsNew from '@/assets/images/about/family-cats-new.webp'

gsap.registerPlugin(ScrollTrigger)

const aboutSection = ref(null)
let ctx

const techStack = [
  'VUE 3',
  'NUXT',
  'JAVASCRIPT',
  'TAILWIND',
  'GSAP',
  'FIGMA',
  'DESIGN SYSTEMS',
  'UX STRATEGY',
]

const designSkills = [
  'UX DESIGN',
  'UI DESIGN',
  'USER RESEARCH',
  'PROTOTYPING',
  'INFORMATION ARCHITECTURE',
  'VISUAL SYSTEMS',
]

const principles = [
  { title: 'EMPATHY', desc: 'Reading people to reduce friction.', icon: IconHeartHandshake },
  { title: 'CLARITY', desc: 'Making complex systems usable.', icon: IconEye },
  { title: 'EXECUTION', desc: 'Bringing ideas to life in code.', icon: IconRocket },
]

const gallery = [
  { src: selfPhotoBlue, span: 'col-span-2 row-span-4' },
  { src: mokoMugCafe, span: 'col-span-1 row-span-1' },
  { src: familyCatPhoto, span: 'col-span-1 row-span-1' },
  { src: okjaOrange, span: 'col-span-1 row-span-1' },
  { src: selfPhoto, span: 'col-span-1 row-span-1' },
  { src: familyCafePhoto, span: 'col-span-1 row-span-1' },
  { src: familyCatsNew, span: 'col-span-1 row-span-1' },
  { src: selfBlueBar, span: 'col-span-1 row-span-1' },
]

function openModal() {
  showContactModal.value = true
}

onMounted(async () => {
  await nextTick()

  ctx = gsap.context(() => {
    // Initial states set cleanly inside context
    gsap.set('.animate-text', { y: 20, opacity: 0 })
    gsap.set('.masonry-item', { scale: 0.85, opacity: 0 })
    gsap.set('.tech-pill', { opacity: 0, y: 6 })

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
    })

    // Immediate on-load sequence with no artificial delay
    tl.to('.animate-text', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.08,
    })
      .to(
        '.masonry-item',
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: 'back.out(1.3)',
        },
        '-=0.4',
      )
      .to(
        '.tech-pill',
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.03,
        },
        '-=0.3',
      )
  }, aboutSection.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section ref="aboutSection" class="font-main py-12 md:py-16 mx-auto px-6">
    <header class="mb-12 text-left lg:mt-8">
      <h2 class="animate-text section-title">About Me</h2>
      <div class="animate-text mt-2">
        <a
          href="/Juan-Resume.pdf"
          download
          class="text-uppercase tracking-widest transition-colors hover:text-blue"
        >
          [ DOWNLOAD RESUME ]
        </a>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <article class="lg:col-span-5 space-y-10">
        <div class="animate-text space-y-4 leading-snug">
          <p class="text-xl font-bold border-l-4 border-blue pl-4">
            I’m Juan, a product designer who builds clean, functional digital systems.
          </p>
          <p class="text-sm md:text-base">
            I spent my early career working in service and education. Running my own business taught
            me how to look at things from a user’s perspective. It’s where I learned that good
            design is really just about removing friction.
          </p>
          <p class="text-sm md:text-base">
            Now, I design and build products. I handle the process from initial research to the
            final frontend code. I’m focused on making sure the finished product is clean,
            functional, and easy to use.
          </p>
        </div>

        <div class="animate-text grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
          <div v-for="item in principles" :key="item.title" class="flex items-center gap-4">
            <div class="p-2 border border-gray-200/10 dark:border-gray-700 rounded-full shrink-0">
              <component :is="item.icon" size="24" stroke-width="1.5" />
            </div>
            <div>
              <h4 class="font-bold text-sm tracking-tight">{{ item.title }}</h4>
              <p class="text-xs">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <div class="animate-text pt-6 border-t border-gray-100/10 dark:border-gray-800">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in techStack"
              :key="tech"
              class="tech-pill px-3 py-1 text-[10px] md:text-xs font-bold tracking-widest border rounded-2xl border-gray-200 dark:border-gray-700"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        <div class="animate-text pt-6 border-t border-gray-100 dark:border-gray-800">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in designSkills"
              :key="skill"
              class="tech-pill px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest border rounded-2xl border-gray-200 dark:border-gray-700"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </article>

      <article class="lg:col-span-7 space-y-8 mb-16">
        <div class="grid grid-cols-3 gap-2 auto-rows-[100px] md:auto-rows-[120px]">
          <div
            v-for="(img, index) in gallery"
            :key="index"
            :class="['masonry-item overflow-hidden rounded-2xl bg-gray-50', img.span]"
          >
            <img :src="img.src" class="w-full h-full object-cover" />
          </div>

          <button
            @click="openModal"
            class="masonry-item col-span-3 row-span-1 flex flex-col items-center justify-center gap-2 border rounded-2xl hover:cursor-pointer hover:bg-pink hover:text-white transition-all duration-300 group"
          >
            <IconMail
              size="28"
              stroke-width="1.5"
              class="group-hover:scale-110 transition-transform"
            />
            <span class="text-[10px] font-bold uppercase tracking-widest">Contact Me</span>
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.animate-text,
.masonry-item,
.tech-pill {
  will-change: transform, opacity;
}
</style>
