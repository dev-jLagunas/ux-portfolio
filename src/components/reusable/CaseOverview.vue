<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThemeStore } from '@/stores/theme'
import { IconExternalLink, IconUser, IconCalendar, IconTools } from '@tabler/icons-vue'

gsap.registerPlugin(ScrollTrigger)

const theme = useThemeStore()

defineProps({
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

let stInstance = null

onMounted(async () => {
  await nextTick()

  if (!overviewContainer.value) return

  const tl = gsap.timeline({ paused: true })

  tl.fromTo(
    headerMeta.value,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
    0,
  )
    .fromTo(
      contentWrap.value,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      0.15,
    )
    .fromTo(
      videoWrap.value,
      { scale: 0.97, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: 'power2.out' },
      0.2,
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
  <header ref="overviewContainer" id="project-overview" class="pt-8 md:pt-14 max-w-7xl mx-auto">
    <!-- Top Editorial Header -->
    <div ref="headerMeta" class="overview-header">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-3">
        <span class="overview-eyebrow">{{ title }}</span>
        <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" class="live-site-link">
          <span>View Live Site</span>
          <IconExternalLink :size="16" />
        </a>
      </div>

      <h1 class="overview-title">{{ workTitle }}</h1>

      <ul v-if="tags && tags.length" class="overview-tag-list">
        <li v-for="(tag, index) in tags" :key="index" class="overview-tag-pill">
          {{ tag }}
        </li>
      </ul>
    </div>

    <!-- 2-Column Split: Overview Copy on Left, Video + Specs on Right -->
    <div class="overview-body-grid">
      <div ref="contentWrap" class="overview-copy-col">
        <div class="space-y-4">
          <p
            v-for="(para, index) in paragraphs"
            :key="index"
            class="text-base md:text-lg leading-relaxed"
          >
            {{ para }}
          </p>
        </div>
      </div>

      <div ref="videoWrap" class="overview-media-col">
        <div class="video-container-full">
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

        <ul class="header-metadata">
          <li class="metadata-card">
            <IconUser class="text-pink shrink-0 mt-0.5" :size="18" />
            <div class="metadata-text">
              <span class="metadata-label">Role</span>
              <span class="metadata-value">{{ role }}</span>
            </div>
          </li>

          <li class="metadata-card">
            <IconCalendar class="text-blue shrink-0 mt-0.5" :size="18" />
            <div class="metadata-text">
              <span class="metadata-label">Timeline</span>
              <span class="metadata-value">{{ date }}</span>
            </div>
          </li>

          <li class="metadata-card">
            <IconTools class="text-pink shrink-0 mt-0.5" :size="18" />
            <div class="metadata-text">
              <span class="metadata-label">Toolkit</span>
              <span class="metadata-value">{{ toolkit }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-video {
  object-view-box: inset(80px 0 0 0);
}
</style>
