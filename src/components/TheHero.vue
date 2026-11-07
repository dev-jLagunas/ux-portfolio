<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'vue-router'

// images
import heroMainImg from '@/assets/images/hero-new-image.webp'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const heroContainer = ref(null)
const textCol = ref(null)
const imageCol = ref(null)

let stInstance = null

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}

onMounted(async () => {
  await nextTick()

  // Match global loading delay (2100ms)
  setTimeout(() => {
    if (!heroContainer.value) return

    const tl = gsap.timeline({ paused: true })

    // Hero pops open from scale 0.85 with a clean overshoot bounce
    tl.fromTo(
      heroContainer.value,
      {
        scale: 0.88,
        opacity: 0,
        transformOrigin: 'center center',
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: 'back.out(1.5)',
      },
      0,
    )
      // Content reveals inside as it expands
      .fromTo(
        textCol.value,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        0.2,
      )
      .fromTo(
        imageCol.value,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        0.2,
      )

    stInstance = ScrollTrigger.create({
      trigger: heroContainer.value,
      start: 'top 85%',
      onEnter: () => tl.play(),
      onEnterBack: () => tl.play(),
    })

    tl.play()
  }, 2100)
})

onBeforeUnmount(() => {
  if (stInstance) stInstance.kill()
})
</script>

<template>
  <header
    ref="heroContainer"
    class="hero-texture-wrap mt-4 mx-auto lg:mt-0 overflow-hidden rounded-2xl relative will-change-transform"
  >
    <section
      class="grid grid-cols-1 items-center md:grid-cols-2 gap-8 lg:gap-12 relative z-10 p-2 sm:p-4"
    >
      <article ref="textCol" class="hero-col flex flex-col justify-center">
        <h2 class="hero-title">Hello, I'm Juan.</h2>
        <h2 class="hero-title -mt-1">Hola, Soy Juan<span class="text-pink">.</span></h2>
        <h2 class="hero-title -mt-1">ハロー、フアンです<span class="text-blue">。</span></h2>

        <p
          class="my-2 leading-5 text-lg sm:text-xl lg:w-2/3 xl:w-full lg:leading-7 2xl:text-2xl font-bold text-wrap"
        >
          Product Designer · UX/UI · Front-End · 4+ Years
        </p>

        <p
          class="leading-5 text-lg sm:text-xl xl:leading-7 2xl:text-3xl 2xl:leading-9 font-main text-copy"
        >
          I merge thoughtful product design with clean, engaging visual systems for international
          audiences, designing and building real products end to end.
        </p>

        <div class="mt-8 hidden md:block md:relative">
          <button class="hero-cta-btn" @click="navigateToWork">See Work</button>
        </div>
      </article>

      <div ref="imageCol" class="hero-col flex justify-center md:justify-end">
        <img
          :src="heroMainImg"
          alt="img of Juan Lagunas"
          class="w-full max-w-[500px] lg:max-w-full select-none"
        />
      </div>
    </section>

    <div class="md:hidden mt-8 w-fit mx-auto relative pb-8 z-10">
      <button class="hero-cta-btn" @click="navigateToWork">See Work</button>
    </div>
  </header>
</template>

<style scoped>
.hero-texture-wrap {
  opacity: 0;
}

.hero-texture-wrap::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2 L30 16 L16 30 L2 16 Z' fill='none' stroke='%23000000' stroke-opacity='0.030' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 28px 28px;
  z-index: 0;
}

.hero-col {
  opacity: 0;
  will-change: transform, opacity;
  position: relative;
  z-index: 10;
}

h2,
img {
  -webkit-mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%);
  mask-image: linear-gradient(45deg, #000 25%, rgba(0, 0, 0, 0.2) 50%, #000 75%);
  -webkit-mask-size: 800%;
  mask-size: 900%;
  -webkit-mask-position: 0;
  mask-position: 0;
}

h2:hover,
img:hover {
  transition:
    mask-position 1s ease,
    -webkit-mask-position 1s ease;
  -webkit-mask-position: 120%;
  mask-position: 120%;
  opacity: 1;
}
</style>
