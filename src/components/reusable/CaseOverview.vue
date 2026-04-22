<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useThemeStore } from '@/stores/theme'
import { IconExternalLink, IconUser, IconCalendar, IconTools } from '@tabler/icons-vue'

const theme = useThemeStore()

const props = defineProps({
  title: String,
  tags: Array,
  videoSrc: String,
  workTitle: String,
  paragraphs: Array,
  role: String,
  date: String,
  toolkit: String,
  pdfFile: String,
  url: String,
})

const currentTagIndex = ref(0)
const tagContainer = ref(null)

const startTagRotation = () => {
  const words = tagContainer.value.querySelectorAll('.tag-item')

  const rotate = () => {
    const currentWord = words[currentTagIndex.value]
    const nextIndex = (currentTagIndex.value + 1) % words.length
    const nextWord = words[nextIndex]

    const tl = gsap.timeline({
      onComplete: () => {
        currentTagIndex.value = nextIndex
        // Wait 2 seconds before next rotation
        gsap.delayedCall(2, rotate)
      },
    })

    // Animate current word out (Up)
    tl.to(currentWord, {
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
    })

    // Animate next word in (From Below) with a bounce
    tl.fromTo(
      nextWord,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)', // This provides the "little bounce"
      },
      '-=0.2', // Slight overlap for smoothness
    )
  }

  // Set initial state
  gsap.set(words, { opacity: 0, y: 20 })
  gsap.set(words[0], { opacity: 1, y: 0 })

  // Kick off the loop
  gsap.delayedCall(2, rotate)
}

onMounted(() => {
  if (props.tags && props.tags.length > 0) {
    startTagRotation()
  }
})
</script>

<template>
  <header id="project-overview" class="pt-10">
    <div class="text-center mb-12 px-4">
      <div class="tag-slot-machine-wrapper">
        <ul ref="tagContainer" class="overview-tag-list font-main">
          <li v-for="(tag, index) in tags" :key="index" class="tag-item" v-show="true">
            {{ tag }}
          </li>
        </ul>
      </div>
      <h3 class="section-title">{{ title }}</h3>
      <ul class="header-metadata font-main">
        <li class="metadata-card">
          <IconUser class="text-pink shrink-0" :size="32" />
          <div class="metadata-text">
            <span class="metadata-label">Role</span>
            <span class="metadata-value">{{ role }}</span>
          </div>
        </li>

        <li class="metadata-card">
          <IconCalendar class="text-pink shrink-0" :size="32" />
          <div class="metadata-text">
            <span class="metadata-label">Date</span>
            <span class="metadata-value">{{ date }}</span>
          </div>
        </li>

        <li class="metadata-card">
          <IconTools class="text-pink shrink-0" :size="32" />
          <div class="metadata-text">
            <span class="metadata-label">Toolkit</span>
            <span class="metadata-value">{{ toolkit }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="video-container-full -mt-8">
      <video
        :key="theme.isDarkMode"
        autoplay
        loop
        muted
        playsinline
        preload="none"
        class="hero-video"
      >
        <source :src="videoSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="content-section max-w-6xl">
      <h4 class="work-title font-main">{{ workTitle }}</h4>

      <div class="description-wrapper">
        <p v-for="(para, index) in paragraphs" :key="index" class="mb-4 leading-normal text-lg">
          {{ para }}
        </p>
      </div>

      <a v-if="url" :href="url" target="_blank" class="live-site-link">
        <span>View live site</span>
        <IconExternalLink :size="18" />
      </a>
    </div>
  </header>
</template>

<style scoped>
.hero-video {
  object-view-box: inset(80px 0 0 0);
}
</style>
