<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { IconX, IconExternalLink, IconBook } from '@tabler/icons-vue'
import avatarImg from '@/assets/images/avatar-pointing.webp'

const isVisible = ref(false)
let timer = null

function closeToast() {
  isVisible.value = false
}

onMounted(() => {
  timer = setTimeout(() => {
    isVisible.value = true
  }, 6000)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <Transition name="toast-slide">
    <aside
      v-if="isVisible"
      class="fixed bottom-20 right-4 lg:bottom-4 md:right-16 lg:right-32 xl:right-64 z-40 max-w-[340px] sm:max-w-[370px] w-[calc(100vw-2rem)] font-main pointer-events-none"
      aria-label="Project Announcement"
    >
      <div class="relative flex flex-col items-end">
        <!-- Speech Bubble Card (Rounded card shape with soft border) -->
        <div
          class="pointer-events-auto relative bg-light text-dark p-5 rounded-3xl border border-dark/20 shadow-xl z-20 w-full"
        >
          <!-- Close button -->
          <button
            @click="closeToast"
            class="absolute top-3 right-3 text-pink hover:bg-dark/5 p-1 hover:cursor-pointer rounded-full transition-colors"
            aria-label="Close notification"
          >
            <IconX :size="16" stroke-width="2" />
          </button>

          <!-- Label & Text -->
          <div class="pr-5">
            <span
              class="inline-block px-2 py-0.5 mb-2 text-[10px] font-bold tracking-wider uppercase text-light bg-dark/90 rounded-2xl"
            >
              Latest Build
            </span>
            <p class="text-sm font-bold text-dark leading-snug">
              Hey, check out this latest project I'm working on!
            </p>
            <p class="text-xs text-dark/80 mt-1 leading-normal">
              Interactive case studies exploring design styles, UI systems, and frontend
              implementation.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="mt-4 flex flex-wrap gap-2">
            <a
              href="https://thedesigntutor.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              class="hero-cta-btn"
            >
              <span>Visit Site</span>
              <IconExternalLink :size="13" stroke-width="2" />
            </a>

            <!-- Placeholder router-link for upcoming blog post -->
            <router-link
              to="/blog/the-design-tutor-build-notes"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-transparent text-dark rounded-lg border border-dark/10 hover:border-dark/20 hover:shadow-sm transition-colors duration-200"
            >
              <span>Read Notes</span>
              <IconBook :size="13" stroke-width="2" />
            </router-link>
          </div>

          <!-- Tail pointing toward avatar head on the bottom right -->
          <div
            class="absolute -bottom-2 right-10 w-4 h-4 bg-light border-r border-b border-dark/10 rotate-45"
          ></div>
        </div>

        <!-- Avatar positioned at bottom right, pointing up-left into the bubble -->
        <figure
          class="w-24 sm:w-28 md:w-48 -mt-2 mr-4 relative z-10 select-none pointer-events-none md:-mr-10"
        >
          <img
            :src="avatarImg"
            alt="Juan pointing to project announcement"
            class="w-full h-auto object-contain"
          />
        </figure>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.toast-slide-enter-active,
.toast-slide-leave-active {
  transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-slide-enter-from,
.toast-slide-leave-to {
  opacity: 0;
  transform: translateY(24px) scale(0.96);
}
</style>
