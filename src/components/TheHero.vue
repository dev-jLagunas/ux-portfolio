<script setup>
import { onMounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import { useRouter } from 'vue-router'

// images
import heroMainImg from '@/assets/images/hero-new-image.webp'

// Sound Import
import moneySound from '@/assets/sounds/money-counting.mp3'

const router = useRouter()
const heroContainer = ref(null)

// Initialize Audio object
const playCountingSound = () => {
  const audio = new Audio(moneySound)
  audio.volume = 0.4 // Adjust volume as needed
  audio.play().catch(() => {
    // Browsers sometimes block audio until the user interacts with the page.
    // This catch prevents console errors if autoplay is blocked.
    console.warn('Audio playback blocked by browser until user interaction.')
  })
}

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}

onMounted(async () => {
  await nextTick()

  // Match the 2000ms global loading delay
  setTimeout(() => {
    if (!heroContainer.value) return
    const titles = heroContainer.value.querySelectorAll('.hero-title')

    gsap.fromTo(
      titles,
      {
        y: -150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'bounce.out',
        stagger: {
          each: 0.15,
          onStart: function () {
            // Triggers for each individual element in the stagger
            playCountingSound()
          },
        },
      },
    )
  }, 2100)
})
</script>

<template>
  <header ref="heroContainer" class="mt-8 mx-auto overflow-hidden">
    <section class="grid grid-cols-1 items-center md:grid-cols-2 gap-8 lg:gap-12">
      <article>
        <h2 class="hero-title">Hello, I'm Juan.</h2>
        <h2 class="hero-title text-pink lg:-mt-2">Hola, Soy Juan.</h2>
        <h2 class="hero-title text-blue lg:-mt-2">ハロー、フアンです。</h2>

        <p class="mt-4 leading-5 text-lg sm:text-xl lg:w-full lg:leading-7 2xl:text-2xl font-bold">
          Product Designer · UX/UI <span class="hidden lg:inline">· Front-End · 4+ Years</span>
        </p>

        <p class="mb-2 leading-5 text-lg sm:text-xl font-bold lg:hidden">Front-End · 3+ Years</p>

        <p class="leading-5 md:w-full text-lg sm:text-xl lg:leading-6 xl:leading-7 2xl:text-2xl">
          I merge thoughtful product design with clean, engaging visual systems for international
          audiences, designing and building real products end to end.
        </p>

        <div class="mt-8 hidden md:block md:relative">
          <button class="hero-cta-btn" @click="navigateToWork">See Work</button>
        </div>
      </article>

      <div class="flex justify-center md:justify-end">
        <img
          :src="heroMainImg"
          alt="img of Juan Lagunas"
          class="w-full max-w-[500px] lg:max-w-full"
        />
      </div>
    </section>

    <div class="md:hidden mt-8 w-fit mx-auto relative pb-8">
      <button class="hero-cta-btn" @click="navigateToWork">See Work</button>
    </div>
  </header>
</template>

<style scoped>
.hero-title {
  opacity: 0;
  will-change: transform, opacity;
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
