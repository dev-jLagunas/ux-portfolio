<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, A11y, Keyboard } from 'swiper/modules'
import SlideArticle from '@/components/reusable/SliderArticle.vue'
import { usePageLoader } from '@/composables/usePageLoader'
import LoadingSpinner from '@/components/reusable/LoadingSpinner.vue'

// Spinner Logic
const { isLoading } = usePageLoader(2000)
const spinnerMessage = 'Hang tight!'

// Photos
import selfPhoto from '@/assets/images/about/self-red.webp'
import familyCafePhoto from '@/assets/images/about/family-cafe-about.webp'
import directionPhoto from '@/assets/images/about/direction-about.webp'
import selfCounterPhoto from '@/assets/images/about/self-counter-about.webp'
</script>

<template>
  <LoadingSpinner v-if="isLoading" :message="spinnerMessage" />
  <div class="font-main pt-8 pb-24 md:pb-0 max-w-7xl mx-auto">
    <h2 class="text-center font-bold text-4xl font-special">About Me</h2>
    <a href="/Juan-Resume.pdf" download class="block text-center underline underline-offset-2 mb-8">
      Download Resume
    </a>
    <section class="relative about-swiper mt-8">
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
            title="Who I Am"
            intro="I'm a UX designer focused on creating clear, intuitive digital experiences through strong product thinking and thoughtful execution."
            :bullets="[
              'I design end-to-end, from research and flows to polished UI and front-end implementation.',
              'I bring deep, real-world experience that strengthens user empathy and practical problem-solving.',
            ]"
            tag-label="Core Strengths"
            :tag-items="['Product Thinking', 'User Empathy']"
          >
            <template #title>
              <span class="font-bold text-pink">W</span>ho
              <span class="font-bold text-blue"> A</span>m
              <span class="font-bold text-pink">I</span>
            </template>
          </SlideArticle>
        </SwiperSlide>
        <SwiperSlide>
          <SlideArticle
            section-id="foundations"
            :image-src="familyCafePhoto"
            image-alt="Family of 2 with their cat"
            title="My UX Foundations"
            intro="Before formally entering UX, I developed its core principles through hands-on work in service, education, and real-world systems."
            :bullets="[
              'Hospitality and education taught me to read people, reduce friction, and design experiences that feel intuitive.',
              'Running a cafe in Japan required end-to-end experience design across branding, workflows, and service touchpoints.',
            ]"
            tag-label="Foundational Skills"
            :tag-items="['Service Design', 'Experience Mapping']"
          >
            <template #title>
              <span class="font-bold text-pink">M</span>y
              <span class="font-bold text-blue"> U</span>X
              <span class="font-bold text-pink">F</span>oundations
            </template>
          </SlideArticle>
        </SwiperSlide>
        <SwiperSlide>
          <SlideArticle
            section-id="practice"
            :image-src="selfCounterPhoto"
            image-alt="photo of Juan Lagunas behind café counter"
            title="How I Practice UX Today"
            intro="Today I design and build end-to-end UX systems that balance research, clarity, and real-world execution."
            :bullets="[
              'I run full UX cycles independently, from research and flows to UI design and testing.',
              'I design and build real products, handling both UX strategy and front-end implementation.',
            ]"
            tag-label="Current Capabilities"
            :tag-items="['End-to-End Design', 'UI & Front-End']"
          >
            <template #title>
              <span class="font-bold text-ppink">U</span>X
              <span class="font-bold text-blue">U</span>I
              <span class="font-bold text-pink">W</span>ork
            </template>
          </SlideArticle>
        </SwiperSlide>

        <SwiperSlide
          ><SlideArticle
            section-id="team"
            :image-src="directionPhoto"
            image-alt="photo of wind arrow"
            title="What I Bring to a Team"
            intro="I bring clarity, structure, and a user-centered mindset to both independent and collaborative team environments."
            :bullets="[
              'I can own full UX cycles or integrate seamlessly into a team to support research, design, or implementation.',
              'I communicate clearly across disciplines and cultures, helping teams align and move forward with confidence.',
            ]"
            tag-label="Team Value"
            :tag-items="['Collaboration', 'Versatility']"
          >
            <template #title>
              <span class="font-bold text-pink">W</span>hat
              <span class="font-bold text-blue">I</span>
              <span class="font-bold text-pink"> B</span>ring
            </template>
          </SlideArticle>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.about-swiper {
  --swiper-navigation-size: 20px;
  --swiper-navigation-color: #333;
}

.about-swiper :deep(.swiper-button-prev),
.about-swiper :deep(.swiper-button-next) {
  opacity: 0.4;
  transition: opacity 0.9s ease;
  transform: translateY(-50px);
}

.about-swiper :deep(.swiper-button-prev:hover),
.about-swiper :deep(.swiper-button-next:hover) {
  opacity: 0.8;
}
</style>
