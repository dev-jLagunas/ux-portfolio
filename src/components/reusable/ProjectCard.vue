<script setup>
// Props
defineProps({
  uxType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  visualRoute: {
    type: String,
    required: false,
    default: '',
  },
  url: {
    type: String,
    required: false,
    default: '',
  },
  marker: {
    type: String,
    required: false,
    default: '',
  },
  bgColor: {
    type: String,
    required: false,
    default: 'bg-blue/40',
  },
  deliverables: {
    type: Array,
    required: false,
    default: () => [],
  },
  reversed: {
    type: Boolean,
    required: false,
    default: false,
  },
  vertical: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <div class="project-card-container relative md:h-full md:w-full shadow-sm">
    <!-- Badges / Links -->
    <div
      v-if="marker"
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark text-light px-4 py-1 rounded text-sm tracking-widest shadow-sm"
    >
      {{ marker }}
    </div>

    <a
      v-else-if="url"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-blue font-medium bg-light px-4 py-1 rounded-2xl text-reg tracking-widest shadow-sm hover:scale-105 hover:underline transition-all duration-300"
    >
      Live Site
    </a>

    <!-- Card Content Grid -->
    <div
      class="grid grid-cols-1 gap-6 items-center h-full"
      :class="{ 'md:grid-cols-2': !vertical }"
    >
      <!-- Visual Column -->
      <div class="flex flex-col justify-center" :class="{ 'md:order-2': reversed && !vertical }">
        <router-link :to="route" class="block h-full">
          <figure
            :class="[bgColor]"
            class="w-full h-full min-h-[220px] rounded-3xl hover:rotate-1 duration-300 transition-transform overflow-hidden flex items-center justify-center p-4 sm:p-6"
          >
            <img
              :src="image"
              alt="project preview"
              class="project-image-zoom w-full h-full object-contain max-w-100 mx-auto select-none"
              loading="lazy"
            />
          </figure>
        </router-link>
      </div>

      <!-- Text / Info Column -->
      <div
        class="flex flex-col justify-between py-1"
        :class="{ 'md:order-1': reversed && !vertical }"
      >
        <div>
          <p class="project-type">{{ uxType }}</p>
          <h3 class="project-title leading-6 my-2">{{ title }}</h3>
          <p class="mb-4 md:text-md lg:text-lg leading-5">
            {{ description }}
          </p>

          <!-- Deliverables List: Visible only on 1024px and up when not strictly vertical -->
          <div
            v-if="deliverables && deliverables.length && !vertical"
            class="hidden lg:flex flex-col justify-end gap-1.5 pt-1 pb-3 my-2"
          >
            <span class="text-[11px] font-bold uppercase tracking-wider text-copy/60">
              Key Deliverables
            </span>
            <ul class="flex flex-col gap-1.5">
              <li
                v-for="(item, idx) in deliverables"
                :key="idx"
                class="flex items-center gap-2 text-sm text-copy/90"
              >
                <span
                  class="flex items-center justify-center w-4 h-4 rounded-full text-emerald-600 shrink-0"
                >
                  <svg
                    class="w-2.5 h-2.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span class="font-medium leading-tight">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3 items-center justify-between pt-2">
          <router-link :to="route">
            <button
              class="hero-cta-btn px-4 py-2 text-sm rounded bg-pink uppercase font-bold border duration-300 transition-all"
            >
              Full Case Study
            </button>
          </router-link>

          <router-link v-if="visualRoute" :to="visualRoute">
            <button
              class="px-4 py-2 text-sm rounded-2xl hover:cursor-pointer border border-dark/10 uppercase font-bold hover:rounded-lg duration-300 transition-all"
            >
              Visual Case Study
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card-container {
  position: relative;
}

.project-image-zoom {
  animation: subtleCameraBreath 8s ease-in-out infinite alternate;
  will-change: transform, opacity;
}

@keyframes subtleCameraBreath {
  0% {
    transform: scale(1);
    opacity: 0.94;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.08);
    opacity: 0.97;
  }
}
</style>
