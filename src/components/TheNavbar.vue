<script setup>
import { computed } from 'vue'
import { showContactModal } from '@/composables/useContactModal'
import { useRouter, useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'

// Svg Icons
import nameLogoDark from '@/assets/images/name_logo_sm.webp'
import nameLogoLight from '@/assets/images/name-logo-light.webp'
import userDarkSvg from '@/assets/svgs/dark-user.svg'
import workDarkSvg from '@/assets/svgs/dark-design-works.svg'
import personalDarkSvg from '@/assets/svgs/personal-dark.svg'
import userWhiteSvg from '@/assets/svgs/white-user.svg'
import workWhiteSvg from '@/assets/svgs/white-design-works.svg'
import personalWhiteSvg from '@/assets/svgs/personal-white.svg'
import blogWhiteSvg from '@/assets/svgs/blog-white.svg'
import blogDarkSvg from '@/assets/svgs/blog-dark.svg'

// Store
const theme = useThemeStore()

// Computed Properties
const workIcon = computed(() => (theme.isDarkMode ? workWhiteSvg : workDarkSvg))
const userIcon = computed(() => (theme.isDarkMode ? userWhiteSvg : userDarkSvg))
const personalIcon = computed(() => (theme.isDarkMode ? personalWhiteSvg : personalDarkSvg))
const nameLogo = computed(() => (theme.isDarkMode ? nameLogoLight : nameLogoDark))
const blogIcon = computed(() => (theme.isDarkMode ? blogWhiteSvg : blogDarkSvg))

// Methods
function openModal() {
  showContactModal.value = true
}

// Routing
const router = useRouter()
const route = useRoute()

function navigateToWork() {
  router.push({ name: 'home', hash: '#case-studies' })
}
</script>

<template>
  <nav class="nav-container-styles mx-auto py-1 font-main">
    <!-- Brand / Logo -->
    <router-link to="/" class="transition-opacity hover:opacity-80">
      <img :src="nameLogo" alt="Name logo of Juan Lagunas" class="h-16 lg:h-20 object-contain" />
    </router-link>

    <!-- Navigation Links -->
    <ul class="flex items-center justify-between w-[75%] lg:w-[70%]">
      <!-- Work -->
      <li
        class="nav-pill-item"
        @click="navigateToWork"
        :class="{ 'is-active': route.path === '/' }"
      >
        <img
          :src="workIcon"
          alt="svg of a briefcase"
          class="h-5 mb-1 transition-transform duration-200"
        />
        <span class="text-xs lg:text-sm tracking-tight leading-none">Work</span>
      </li>

      <!-- About -->
      <router-link to="/about" v-slot="{ isActive }" custom>
        <li class="nav-pill-item" :class="{ 'is-active': isActive }" @click="router.push('/about')">
          <img
            :src="userIcon"
            alt="svg of a name card"
            class="h-5 mb-1 transition-transform duration-200"
          />
          <span class="text-xs lg:text-sm tracking-tight leading-none">About</span>
        </li>
      </router-link>

      <!-- Personal -->
      <router-link to="/personal" v-slot="{ isActive }" custom>
        <li
          class="nav-pill-item"
          :class="{ 'is-active': isActive }"
          @click="router.push('/personal')"
        >
          <img
            :src="personalIcon"
            alt="svg of smiley face"
            class="h-5 mb-1 transition-transform duration-200"
          />
          <span class="text-xs lg:text-sm tracking-tight leading-none">Personal</span>
        </li>
      </router-link>

      <!-- Blog -->
      <router-link to="/blog" v-slot="{ isActive }" custom>
        <li class="nav-pill-item" :class="{ 'is-active': isActive }" @click="router.push('/blog')">
          <img
            :src="blogIcon"
            alt="Blog svg icon"
            class="h-5 mb-1 transition-transform duration-200"
          />
          <span class="text-xs lg:text-sm tracking-tight leading-none">Blog</span>
        </li>
      </router-link>

      <!-- Action Buttons -->
      <li>
        <ul class="flex items-center gap-3">
          <!-- Contact Modal Button -->
          <li class="relative group">
            <button class="nav-btn-styles" @click="openModal" aria-label="Contact">
              <i class="fa-solid fa-envelope text-base leading-none"></i>
            </button>

            <!-- Tooltip -->
            <span
              class="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-dark/90 dark:bg-light/90 text-light dark:text-dark text-[11px] font-medium px-2 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
            >
              Contact
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-pill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem; /* w-20 */
  height: 3.5rem; /* h-14 */
  border-radius: 1.5rem; /* rounded-3xl */
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-out;
  padding-block: 2rem;
}

.nav-pill-item:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.nav-pill-item.is-active {
  opacity: 1;
  border-color: rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.02);
  font-weight: 500;
}

:global(.dark) .nav-pill-item.is-active {
  border-color: rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.04);
}
</style>
