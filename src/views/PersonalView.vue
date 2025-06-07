<script setup>
import ArrowTransition from '@/components/reusable/ArrowPointer.vue'
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
</script>

<template>
  <section>
    <article class="font-headings mt-8">
      <h2 class="text-6xl mb-4 text-center md:text-start">Digital Art</h2>
      <p>
        Here I want to add some paragraph quickly explaining digital art. and here is a bit more
        filler text just to seee how it looks
      </p>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <DisplayCard title="Riding Cool" :content="flamingoArt" bgColor="bg-pink" />
        <DisplayCard title="Ride or Die" :content="catBoarder" bgColor="bg-blue" />
        <DisplayCard title="Going Vrooom" :content="goingVroom" bgColor="bg-pink" />
        <DisplayCard title="Walking Fido" :content="walkingFido" bgColor="bg-blue" />
      </div>
    </article>
    <article class="font-headings mt-8">
      <h2 class="text-6xl mb-4 text-center md:text-start">Photography</h2>
      <p>
        Here I want to add some paragraph quickly explaining digital art. and here is a bit more
        filler text just to seee how it looks
      </p>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
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
    <article class="font-headings mt-8">
      <h2 class="text-6xl mb-4 text-center md:text-start">Cafe Triangle</h2>
      <p>
        Here I want to add some paragraph quickly explaining digital art. and here is a bit more
        filler text just to seee how it looks
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
  </section>
</template>

<style scoped></style>
