<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, A11y, Keyboard } from 'swiper/modules'
import SlideArticle from './SliderArticle.vue'
// Photos
import selfPhoto from '@/assets/images/about/self-red.webp'
import familyCafePhoto from '@/assets/images/about/family-cafe-about.webp'
import directionPhoto from '@/assets/images/about/direction-about.webp'
import selfCounterPhoto from '@/assets/images/about/self-counter-about.webp'
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
          title="Who I Am"
          intro="I'm a UX designer who combines product thinking, visual design, and front-end execution to create clear, intuitive, and meaningful digital experiences."
          :bullets="[
            'I design end-to-end: from research, flows, and wireframes to polished UI and front-end implementation.',
            'I bring 20+ years of real-world, people-focused experience that strengthens my user empathy and problem-solving.',
            'I approach UX with a blend of logic, creativity, and systems thinking shaped by work across cultures and industries.',
            'I’m multilingual and internationally experienced, which helps me design for diverse users and global audiences.',
          ]"
          tag-label="Core Strengths"
          :tag-items="['Product Thinking', 'User Empathy', 'Visual & Interaction Design']"
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
          intro="Long before I knew the term UX, I was already practicing it through service design, systems thinking, and real-world problem solving."
          :bullets="[
            'Hospitality and education taught me how to read people, remove friction, and design experiences that feel natural and intuitive.',
            'Running our cafe in Japan required full experience design: branding, workflows, touchpoints, visual identity, and service blueprints.',
            'Teaching and linguistics strengthened my ability to communicate clearly, adapt to different users, and design for diverse mental models.',
            'Photography, branding, and storytelling refined my visual instincts and helped me think in composition, hierarchy, and emotion.',
          ]"
          tag-label="Foundational Skills"
          :tag-items="['Service Design', 'Experience Mapping', 'Communication Design']"
        >
          <template #title>
            <span class="font-bold text-pink">M</span>y <span class="font-bold text-blue"> U</span>X
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
          intro="Today I work as a UX designer end-to-end, creating products and systems that combine research, strategy, visual clarity, and front-end execution."
          :bullets="[
            'I run full UX cycles independently: research, user flows, wireframes, prototypes, UI design, and testing.',
            'I build real products like Cafe Triangle and Tanaka Denki, handling both the UX process and the coded implementation.',
            'I collaborate with stakeholders, clients, and users to align goals, clarify requirements, and translate insights into structured solutions.',
            'I create systems where none exist. Information architecture, content workflows, marketing pipelines, and operational tools.',
          ]"
          tag-label="Current Capabilities"
          :tag-items="['End-to-End Design', 'UI & Front-End', 'Stakeholder Collaboration']"
        >
          <template #title>
            <span class="font-bold text-ppink">U</span>X <span class="font-bold text-blue">U</span>I
            <span class="font-bold text-pink">W</span>ork
          </template>
        </SlideArticle>
      </SwiperSlide>

      <SwiperSlide>
        <SlideArticle
          section-id="team"
          :image-src="directionPhoto"
          image-alt="photo of wind arrow"
          title="What I Bring to a Team"
          intro="I’m a designer who thrives in both independent and collaborative environments, bringing clarity, structure, and a user-centered mindset wherever I work."
          :bullets="[
            'I can own entire UX cycles myself or plug into a team and support research, strategy, UI, or implementation as needed.',
            'I communicate clearly across cultures and disciplines, helping teams align and move forward with confidence.',
            'I bring strong systems thinking designing not just screens, but the workflows, operations, and logic behind them.',
            'I care deeply about creating meaningful experiences, and I iterate until the work truly meets user needs and business goals.',
          ]"
          tag-label="Team Value"
          :tag-items="['Collaboration', 'Versatility', 'User-Centered Approach']"
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
