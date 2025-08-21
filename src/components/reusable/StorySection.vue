<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, A11y, Keyboard } from 'swiper/modules'
import SlideArticle from './SliderArticle.vue'
// Photos
import selfPhoto from '@/assets/images/about/self-red.webp'
import sunPhoto from '@/assets/images/about/cafe-self-about.webp'
import familyCafePhoto from '@/assets/images/about/family-cafe-about.webp'
import directionPhoto from '@/assets/images/about/direction-about.webp'
import selfCounterPhoto from '@/assets/images/about/self-counter-about.webp'
import selfBlackPhoto from '@/assets/images/about/self-black.webp'
</script>

<template>
  <section class="relative about-swiper">
    <Swiper
      :modules="[Navigation, Autoplay, A11y, Keyboard]"
      :slides-per-view="1"
      :space-between="5"
      :loop="true"
      :autoplay="{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      :keyboard="{ enabled: true }"
      a11y
      navigation
    >
      <SwiperSlide>
        <SlideArticle
          section-id="bio"
          :image-src="selfPhoto"
          image-alt="self image of Juan Lagunas"
          title="My Bio"
          intro="I'm a UX designer with over 20 years of customer-facing experience, from fast food to education to hospitality."
          :bullets="[
            'Learned to understand users deeply by listening and solving problems in real time.',
            'Blended creative thinking with empathy across a variety of roles and cultures.',
            'Developed a passion for simplifying complex systems into intuitive solutions.',
            'Added Japanese as a third language through immersion, and now continue growing in French.',
          ]"
          tag-label="Skills Acquired"
          :tag-items="['User Empathy', 'Systems Thinking', 'Problem Solving']"
        >
          <template #title>
            <span class="font-bold text-pink">A</span>
            <span class="font-bold text-blue"> Q</span>uick
            <span class="font-bold text-pink">S</span>napshot
          </template>
        </SlideArticle>
      </SwiperSlide>
      <SwiperSlide>
        <SlideArticle
          section-id="roots"
          :image-src="familyCafePhoto"
          image-alt="Family of 2 with their cat"
          title="My Roots"
          intro="My early career combined hospitality and education, giving me a strong foundation in communication and service."
          :bullets="[
            'Managed teams at KFC and worked in hospitality at Viejas Casino, gaining hands-on experience in customer service and operations.',
            'Studied Linguistics, which deepened my understanding of communication styles and diverse perspectives.',
            'Taught English for 7 years across age groups and backgrounds, building empathy and adaptability through real human connection.',
          ]"
          tag-label="Skills Acquired"
          :tag-items="['Cross Cultural', 'Operational Management', 'User Advocacy']"
        >
          <template #title>
            <span class="text-pink font-bold">W</span>here
            <span class="text-blue font-bold">I</span>t
            <span class="text-pink font-bold">S</span>tarted
          </template>
        </SlideArticle>
      </SwiperSlide>
      <SwiperSlide>
        <SlideArticle
          section-id="journey"
          :image-src="selfCounterPhoto"
          image-alt="photo of Juan Lagunas behind café counter"
          title="My Journey"
          intro="My time in Japan shaped both my creativity and career direction in unexpected ways."
          :bullets="[
            'Co-founded Cafe Triangle with my wife, managing all aspects of the business from the ground up.',
            'Discovered a passion for photography and creative storytelling while running the café.',
            'Taught myself front-end development after the cafe closed, building a solid portfolio from scratch.',
            'Stumbled across the term UX and instantly realized it described what I’d been doing all along.',
          ]"
          tag-label="Skills Acquired"
          :tag-items="['Web Design', 'Strategic Pivoting', 'Creative Execution']"
        >
          <template #title>
            <span class="text-pink font-bold">T</span>he
            <span class="text-blue font-bold">J</span>apan
            <span class="text-pink font-bold">C</span>hapter
          </template>
        </SlideArticle>
      </SwiperSlide>
      <SwiperSlide>
        <SlideArticle
          section-id="realization"
          :image-src="sunPhoto"
          image-alt="photo of Juan Lagunas in front of wall mural"
          title="My Realization"
          intro="My last job at a university unexpectedly launched me into UX."
          :bullets="[
            'Worked in a chaotic environment lacking structure, which pushed me to create my own systems.',
            'Built Notion-based project tools, overhauled email campaigns using analytics, and created full marketing systems.',
            'Realized I had been practicing UX thinking long before I had a name for it.',
            'Cemented my path by completing the Google UX Design certificate and diving deep into UX literature.',
          ]"
          tag-label="Skills Acquired"
          :tag-items="['User Empathy', 'Marketing Strategy', 'Analytics & Optimization']"
        >
          <template #title>
            <span class="text-pink font-bold">W</span>here
            <span class="text-blue font-bold"> U</span>X
            <span class="text-pink font-bold">C</span>licked
          </template>
        </SlideArticle>
      </SwiperSlide>
      <SwiperSlide>
        <SlideArticle
          section-id="future"
          :image-src="directionPhoto"
          image-alt="photo of wind arrow"
          title="My Future"
          intro="I’m now fully focused on launching my UX design career."
          :bullets="[
            'Ready to bring real-world insight, empathy, and problem-solving to a team environment.',
            'Excited to apply everything I’ve learned through both formal training and lived experience.',
            'View my background not as a story, but as a toolkit for creative, human-centered design.',
            'Eager to collaborate, grow, and contribute in a UX role where I can make real impact.',
          ]"
          tag-label="What I Bring"
          :tag-items="['User Centered', 'Systems Thinking', 'Continuous Learner']"
        >
          <template #title>
            <span class="text-pink font-bold">R</span>eady
            <span class="text-blue font-bold">T</span>o <span class="text-pink font-bold">G</span>o
          </template>
        </SlideArticle>
      </SwiperSlide>
      <SwiperSlide>
        <SlideArticle
          section-id="dream"
          :image-src="selfBlackPhoto"
          image-alt="black and white self portrait of Juan Lagunas"
          title="My Dream"
          intro="My dream is to build a UX career that’s both meaningful and creatively fulfilling."
          :bullets="[
            'I want to craft digital experiences that solve real problems and improve lives.',
            'I see UX as the intersection of thoughtful logic and human-centered creativity.',
            'Success means iterating and refining until we create something truly exceptional.',
            'This isn’t just a job. It’s the culmination of a lifetime of observing and improving.',
          ]"
          tag-label="What I Bring"
          :tag-items="['Design Driven', 'Logic & Creativity', 'Purpose Driven']"
        >
          <template #title>
            <span class="text-pink font-bold">T</span>he
            <span class="text-blue font-bold">B</span>ig
            <span class="text-pink font-bold">G</span>oal
          </template>
        </SlideArticle>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.about-swiper {
  --swiper-navigation-size: 20px; /* arrow icon size */
  --swiper-navigation-color: #333; /* arrow color (Tailwind gray-900) */
}

/* Hide arrows on <768px */
.about-swiper :deep(.swiper-button-prev),
.about-swiper :deep(.swiper-button-next) {
  display: none;
}

/* Show arrows at ≥768px (md) */
@media (min-width: 768px) {
  .about-swiper :deep(.swiper-button-prev),
  .about-swiper :deep(.swiper-button-next) {
    display: flex; /* or block; both work */
  }
}
</style>
