<script setup>
import { onMounted, onUnmounted } from 'vue'
import { usePageLoader } from '@/composables/usePageLoader'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Icons
import { IconCamera, IconPalette, IconCoffee, IconDeviceDesktopCode } from '@tabler/icons-vue'

const { isLoading } = usePageLoader(2000)

// Components
import DisplayCard from '@/components/reusable/DisplayCard.vue'
import GuideNav from '@/components/reusable/CaseStickyNav.vue'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'

// Images
import flamingoArt from '@/assets/images/personal/flamingo-art.webp'
import catBoarder from '@/assets/images/personal/cat-boarder-art.webp'
import goingVroom from '@/assets/images/personal/going-vroom.webp'
import walkingFido from '@/assets/images/personal/walking-fido.webp'
import sakuraPhoto from '@/assets/images/personal/sakura-photo.webp'
import catPhoto from '@/assets/images/personal/cat-photo.webp'
import duckPhoto from '@/assets/images/personal/duck-photo.webp'
import naturePhoto from '@/assets/images/personal/nature-photo.webp'
import selfiePhoto from '@/assets/images/personal/selfie-photo.webp'
import pongPhoto from '@/assets/images/personal/pong-photo.webp'
import ghostPhoto from '@/assets/images/personal/ghost-photo.webp'
import smilePhoto from '@/assets/images/personal/smile-photo.webp'
import ankoPhoto from '@/assets/images/personal/anko-cafe.webp'
import cakePhoto from '@/assets/images/personal/cake-cafe.webp'
import chaiPhoto from '@/assets/images/personal/chai-cafe.webp'
import cookiesPhoto from '@/assets/images/personal/cookies-cafe.webp'
import flanPhoto from '@/assets/images/personal/flan-cafe.webp'
import picoPhoto from '@/assets/images/personal/pico-cafe.webp'
import lunchPhoto from '@/assets/images/personal/lunch-cafe.webp'
import mokoPhoto from '@/assets/images/personal/moko-cafe.webp'
import christmasArt from '@/assets/images/personal/christmas-art.webp'
import catArt from '@/assets/images/personal/cat-art.webp'
import mindArt from '@/assets/images/personal/mind-art.webp'
import newYearsArt from '@/assets/images/personal/newyears-art.webp'
import cafeUi from '@/assets/images/personal/cafe-ui.webp'
import chicanoUi from '@/assets/images/personal/chicano-ui.webp'
import galleryUi from '@/assets/images/personal/gallery-ui.webp'
import tiktokUi from '@/assets/images/personal/tiktok-ui.webp'

const spinnerMessage = 'Here you go'
let ctx

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.utils.toArray('.personal-intro').forEach((intro) => {
      gsap.from(intro.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: intro,
          start: 'top 85%',
        },
      })
    })

    gsap.utils.toArray('.personal-grid').forEach((grid) => {
      const cards = grid.querySelectorAll('.display-card-wrapper')
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
        },
      })
    })
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <LoadingSpinner v-if="isLoading" :message="spinnerMessage" />

  <section class="max-w-7xl mx-auto px-4 md:px-8 pb-32">
    <GuideNav
      :sections="[
        { id: 'photo-section', label: 'Photography' },
        { id: 'art-section', label: 'Digital Art' },
        { id: 'cafe-section', label: 'Cafe Triangle' },
        { id: 'design-section', label: 'UI Design' },
      ]"
    />

    <article class="font-main pt-24 md:pt-32" id="photo-section">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-4">
          <div class="sticky top-32 personal-intro">
            <IconCamera class="text-pink mb-4" size="48" />
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Photos</h2>
            <p class="text-lg leading-relaxed mb-4 opacity-80">
              I bought a Fuji X-A5 when we started the cafe, and that’s where my love for
              photography began. I taught myself to use the manual controls and spent a lot of time
              doing food photography for the cafe.
            </p>
            <p class="text-lg leading-relaxed opacity-80">
              Capturing life is such a beautiful thing. I don’t actually know if I’m any good at it,
              but that matters far less than how much I truly enjoy it.
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 personal-grid">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="display-card-wrapper">
              <DisplayCard title="Moko the King" :content="catPhoto" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="White Road" :content="naturePhoto" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Balboa Duck" :content="duckPhoto" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Cherry Blossoms" :content="sakuraPhoto" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Bar Selfie" :content="selfiePhoto" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Classic Pong" :content="pongPhoto" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Neon Ghost" :content="ghostPhoto" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Lovely Smile" :content="smilePhoto" bgColor="bg-blue" />
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="font-main pt-24 md:pt-32" id="art-section">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-8 personal-grid order-2 lg:order-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="display-card-wrapper">
              <DisplayCard title="Riding Cool" :content="flamingoArt" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Ride or Die" :content="catBoarder" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Going Vrooom" :content="goingVroom" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Walking Fido" :content="walkingFido" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Christmas Mummies" :content="christmasArt" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Introspective Cat" :content="catArt" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Mind Crimes" :content="mindArt" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Happy New Year" :content="newYearsArt" bgColor="bg-blue" />
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 order-1 lg:order-2">
          <div class="sticky top-32 personal-intro">
            <IconPalette class="text-blue mb-4" size="48" />
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Digital Art
            </h2>
            <p class="text-lg leading-relaxed mb-4 opacity-80">
              I’ve always enjoyed sketching on paper, but it wasn’t until last year that I started
              exploring digital art. I use Linearity Curve on my iPad to create.
            </p>
            <p class="text-lg leading-relaxed opacity-80">
              I’m drawn to color and simplicity, which comes through not only in my art, but also in
              my photography and UI design.
            </p>
          </div>
        </div>
      </div>
    </article>

    <article class="font-main pt-24 md:pt-32" id="cafe-section">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-4">
          <div class="sticky top-32 personal-intro">
            <IconCoffee class="text-pink mb-4" size="48" />
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Cafe Triangle
            </h2>
            <p class="text-lg leading-relaxed mb-4 opacity-80">
              Cafe Triangle was the cafe my wife and I owned in Japan. It taught me a multitude of
              skills that align perfectly with UX: empathy, branding, and service design.
            </p>
            <p class="text-lg leading-relaxed opacity-80">
              Our days were filled with pastries, lovely guests, animal friends, and the joy of
              being next to my wife all day.
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 personal-grid">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="display-card-wrapper">
              <DisplayCard title="Anko and Moe" :content="ankoPhoto" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Tres Leches Cake" :content="cakePhoto" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Chai Mix" :content="chaiPhoto" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Cookie Marketing" :content="cookiesPhoto" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Flan Design" :content="flanPhoto" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Pico De Gallo" :content="picoPhoto" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Lunch Items" :content="lunchPhoto" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Moko Marketing" :content="mokoPhoto" bgColor="bg-blue" />
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="font-main pt-24 md:pt-32" id="design-section">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-8 personal-grid order-2 lg:order-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="display-card-wrapper">
              <DisplayCard title="Cafe Triangle" :content="cafeUi" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Scroll Gallery" :content="galleryUi" bgColor="bg-blue" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Neon TicTacToe" :content="tiktokUi" bgColor="bg-pink" />
            </div>
            <div class="display-card-wrapper">
              <DisplayCard title="Code Chicano" :content="chicanoUi" bgColor="bg-blue" />
            </div>
          </div>
        </div>

        <div class="lg:col-span-4 order-1 lg:order-2">
          <div class="sticky top-32 personal-intro">
            <IconDeviceDesktopCode class="text-blue mb-4" size="48" />
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">UI Design</h2>
            <p class="text-lg leading-relaxed mb-4 opacity-80">
              I started teaching myself frontend development two and a half years ago. I began with
              HTML, CSS, and JS, then moved to Vue.
            </p>
            <p class="text-lg leading-relaxed opacity-80">
              My focus has shifted toward full-stack. I’m currently working through Boot.dev to
              deepen my understanding of backend development.
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.display-card-wrapper {
  will-change: transform, opacity;
}
</style>
