import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('@/views/PersonalView.vue'),
    },
    {
      path: '/case-one',
      name: 'case one',
      component: () => import('@/views/cases/CaseOneView.vue'),
    },
    {
      path: '/case-two',
      name: 'case two',
      component: () => import('@/views/cases/CaseTwoView.vue'),
    },
    {
      path: '/case-three',
      name: 'case three',
      component: () => import('@/views/cases/CaseThreeView.vue'),
    },
    {
      path: '/case-four',
      name: 'case four',
      component: () => import('@/views/cases/CaseFourView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 1. Restore scroll on back/forward
    if (savedPosition) return savedPosition

    // 2. Scroll to anchor/hash if defined (e.g., #case-studies)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // 3. Default: always scroll to top
    return { top: 0 }
  },
})

export default router
