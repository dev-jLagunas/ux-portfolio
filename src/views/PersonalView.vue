<script setup>
import CaseNav from '@/components/reusable/CaseNav.vue'

import DisplayCard from '@/components/reusable/DisplayCard.vue'
import flamingoArt from '@/assets/images/personal/flamingo-art.png'
import catBoarder from '@/assets/images/personal/cat-boarder-art.png'
import goingVroom from '@/assets/images/personal/going-vroom.jpg'
import walkingFido from '@/assets/images/personal/walking-fido.jpg'
import sakuraPhoto from '@/assets/images/personal/sakura-photo.jpg'
import catPhoto from '@/assets/images/personal/cat-photo.jpg'
import duckPhoto from '@/assets/images/personal/duck-photo.jpg'
import naturePhoto from '@/assets/images/personal/nature-photo.jpg'
import selfiePhoto from '@/assets/images/personal/selfie-photo.jpg'
import pongPhoto from '@/assets/images/personal/pong-photo.jpg'
import ghostPhoto from '@/assets/images/personal/ghost-photo.jpg'
import smilePhoto from '@/assets/images/personal/smile-photo.jpg'
import ankoPhoto from '@/assets/images/personal/anko-cafe.jpg'
import cakePhoto from '@/assets/images/personal/cake-cafe.jpg'
import chaiPhoto from '@/assets/images/personal/chai-cafe.jpg'
import cookiesPhoto from '@/assets/images/personal/cookies-cafe.jpg'
import flanPhoto from '@/assets/images/personal/flan-cafe.jpg'
import picoPhoto from '@/assets/images/personal/pico-cafe.jpg'
import lunchPhoto from '@/assets/images/personal/lunch-cafe.jpg'
import mokoPhoto from '@/assets/images/personal/moko-cafe.jpg'
import christmasArt from '@/assets/images/personal/christmas-art.jpg'
import catArt from '@/assets/images/personal/cat-art.jpg'
import mindArt from '@/assets/images/personal/mind-art.jpg'
import newYearsArt from '@/assets/images/personal/newyears-art.jpg'
import cafeUi from '@/assets/images/personal/cafe-ui.png'
import chicanoUi from '@/assets/images/personal/chicano-ui.png'
import galleryUi from '@/assets/images/personal/gallery-ui.png'
import tiktokUi from '@/assets/images/personal/tiktok-ui.png'
</script>

<template>
  <section>
    <CaseNav
      :sections="[
        { id: 'photo-section', label: 'Photography' },
        { id: 'art-section', label: 'Digital Art' },
        { id: 'cafe-section', label: 'Cafe Triangle' },
        { id: 'design-section', label: 'UI Design' },
      ]"
    />
    <article class="font-headings mt-8" id="photo-section">
      <h2 class="text-4xl mb-2 text-center md:text-start font-bold md:text-5xl">Photography</h2>
      <p class="mb-2 text-sm md:text-base">
        I bought a Fuji X-A5 when we started the cafe, and that’s where my love for photography
        began. I taught myself to use the manual controls and spent a lot of time doing food
        photography for the cafe. Experimenting with new techniques, backgrounds, and environments
        was genuinely exciting.
      </p>
      <p class="mb-4 text-sm md:text-base">
        I’m still actively challenging myself with new shots, because capturing life is such a
        beautiful thing. I don’t actually know if I’m any good at it but that matters far less than
        how much I truly enjoy it.
      </p>
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <DisplayCard title="Moko the King" :content="catPhoto" bgColor="bg-pink" />
        <DisplayCard title="Kanazawa White Road" :content="naturePhoto" bgColor="bg-blue" />
        <DisplayCard title="Balboa Duck" :content="duckPhoto" bgColor="bg-pink" />
        <DisplayCard title="Cherry Blossoms" :content="sakuraPhoto" bgColor="bg-blue" />
        <DisplayCard title="Bar Selfie" :content="selfiePhoto" bgColor="bg-pink" />
        <DisplayCard title="Classic Pong" :content="pongPhoto" bgColor="bg-blue" />
        <DisplayCard title="Neon Ghost" :content="ghostPhoto" bgColor="bg-pink" />
        <DisplayCard title="Lovely Smile" :content="smilePhoto" bgColor="bg-blue" />
      </div>
    </article>
    <article class="font-headings mt-8" id="art-section">
      <h2 class="text-4xl mb-2 text-center md:text-start font-bold md:text-5xl">Digital Art</h2>
      <p class="mb-2 text-sm md:text-base">
        I’ve always enjoyed sketching and drawing on paper, but it wasn’t until last year that I
        started exploring digital art. I use Linearity Curve on my iPad to create, and I
        occasionally use other apps to add text and experiment with graphic design.
      </p>
      <p class="mb-4 text-sm md:text-base">
        I’m drawn to color and simplicity, which I think comes through not only in my art, but also
        in my photography and UI design.
      </p>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <DisplayCard title="Riding Cool" :content="flamingoArt" bgColor="bg-pink" />
        <DisplayCard title="Ride or Die" :content="catBoarder" bgColor="bg-blue" />
        <DisplayCard title="Going Vrooom" :content="goingVroom" bgColor="bg-pink" />
        <DisplayCard title="Walking Fido" :content="walkingFido" bgColor="bg-blue" />
        <DisplayCard title="Christmas Mummies" :content="christmasArt" bgColor="bg-pink" />
        <DisplayCard title="Introspective Cat" :content="catArt" bgColor="bg-blue" />
        <DisplayCard title="Mind Crimes" :content="mindArt" bgColor="bg-pink" />
        <DisplayCard title="Happy New Year" :content="newYearsArt" bgColor="bg-blue" />
      </div>
    </article>
    <article class="font-headings mt-8" id="cafe-section">
      <h2 class="text-4xl mb-2 text-center md:text-start font-bold md:text-5xl">Cafe Triangle</h2>
      <p class="mb-2 text-sm md:text-base">
        Cafe Triangle was the cafe my wife and I used to own in Japan. It was one of the most
        transformative experiences of my life and also one of the most practical. It taught me a
        multitude of skills that align perfectly with UX: empathy, branding, service design,
        problem-solving, and visual communication.
      </p>
      <p class="mb-2 text-sm md:text-base">
        Our days were filled with delicious pastries, lovely guests, wonderful animal friends, and
        the joy of being next to my wife all day, every day.
      </p>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <DisplayCard title="Anko and Moe" :content="ankoPhoto" bgColor="bg-pink" />
        <DisplayCard title="Tres Leches Cake" :content="cakePhoto" bgColor="bg-blue" />
        <DisplayCard title="Chai Mix" :content="chaiPhoto" bgColor="bg-pink" />
        <DisplayCard title="Cookie Marketing" :content="cookiesPhoto" bgColor="bg-blue" />
        <DisplayCard title="Flan Design" :content="flanPhoto" bgColor="bg-pink" />
        <DisplayCard title="Pico De Gallo" :content="picoPhoto" bgColor="bg-blue" />
        <DisplayCard title="Lunch Items" :content="lunchPhoto" bgColor="bg-pink" />
        <DisplayCard title="Moko Marketing" :content="mokoPhoto" bgColor="bg-blue" />
      </div>
    </article>
    <article class="font-headings mt-8" id="design-section">
      <h2 class="text-4xl mb-2 text-center md:text-start font-bold md:text-5xl">UI Design</h2>
      <p class="mb-2 text-sm md:text-base">
        I started teaching myself frontend development about two and a half years ago. I began with
        the foundations, HTML, CSS, and JavaScript, then moved on to frameworks like Angular and
        Vue.
      </p>
      <p class="mb-2 text-sm md:text-base">
        While I’m not as active with development as I once was, I still continue learning. These
        days, my focus has shifted more toward full-stack. I’m currently working through the
        Boot.dev course to learn Python, TypeScript, Go, and deepen my understanding of backend
        development.
      </p>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <DisplayCard title="Cafe Triangle" :content="cafeUi" bgColor="bg-pink" />
        <DisplayCard title="Scroll Gallery" :content="galleryUi" bgColor="bg-blue" />
        <DisplayCard title="Neon TicTacToe" :content="tiktokUi" bgColor="bg-pink" />
        <DisplayCard title="Code Chicano" :content="chicanoUi" bgColor="bg-blue" />
      </div>
    </article>
  </section>
</template>

<style scoped></style>
