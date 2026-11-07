<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThemeStore } from '@/stores/theme'
import { IconExternalLink, IconUser, IconCalendar, IconTools } from '@tabler/icons-vue'

gsap.registerPlugin(ScrollTrigger)

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

const overviewContainer = ref(null)
const headerMeta = ref(null)
const videoWrap = ref(null)
const contentWrap = ref(null)
const currentTagIndex = ref(0)
const tagContainer = ref(null)

let stInstance = null

const startTagRotation = () => {
  const words = tagContainer.value.querySelectorAll('.tag-item')

  const rotate = () => {
    const currentWord = words[currentTagIndex.value]
    const nextIndex = (currentTagIndex.value + 1) % words.length
    const nextWord = words[nextIndex]

    const tl = gsap.timeline({
      onComplete: () => {
        currentTagIndex.value = nextIndex
        gsap.delayedCall(2, rotate)
      },
    })

    tl.to(currentWord, {
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
    })

    tl.fromTo(
      nextWord,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
      },
      '-=0.2',
    )
  }

  gsap.set(words, { opacity: 0, y: 20 })
  gsap.set(words[0], { opacity: 1, y: 0 })

  gsap.delayedCall(2, rotate)
}

onMounted(async () => {
  if (props.tags && props.tags.length > 0) {
    startTagRotation()
  }

  await nextTick()

  if (!overviewContainer.value) return

  const tl = gsap.timeline({ paused: true })

  tl.fromTo(
    overviewContainer.value,
    {
      scale: 0.92,
      opacity: 0,
      transformOrigin: 'top center',
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.4)',
    },
    0,
  )
    .fromTo(
      headerMeta.value,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      0.1,
    )
    .fromTo(
      videoWrap.value,
      { scale: 0.96, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: 'power2.out' },
      0.2,
    )
    .fromTo(
      contentWrap.value,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
      0.3,
    )

  stInstance = ScrollTrigger.create({
    trigger: overviewContainer.value,
    start: 'top 90%',
    onEnter: () => tl.play(),
    onEnterBack: () => tl.play(),
  })

  tl.play()
})

onBeforeUnmount(() => {
  if (stInstance) stInstance.kill()
})
</script>

<template>
  <header
    ref="overviewContainer"
    id="project-overview"
    class="case-overview-wrap pt-10 will-change-transform"
  >
    <div ref="headerMeta" class="text-center mb-12 px-4">
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
          <IconUser class="text-copy shrink-0" :size="19" />
          <div class="metadata-text">
            <span class="metadata-label">Role</span>
            <span class="metadata-value">{{ role }}</span>
          </div>
        </li>

        <li class="metadata-card">
          <IconCalendar class="text-copy shrink-0" :size="19" />
          <div class="metadata-text">
            <span class="metadata-label">Date</span>
            <span class="metadata-value">{{ date }}</span>
          </div>
        </li>

        <li class="metadata-card">
          <IconTools class="text-copy shrink-0" :size="19" />
          <div class="metadata-text">
            <span class="metadata-label">Toolkit</span>
            <span class="metadata-value">{{ toolkit }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div ref="videoWrap" class="video-container-full -mt-4">
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

    <div ref="contentWrap" class="content-section max-w-6xl">
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
