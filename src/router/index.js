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
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue'),
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('@/views/BlogPost.vue'),
      props: true,
    },
    {
      path: '/case-one',
      name: 'case one',
      component: () => import('@/views/cases/CaseOneView.vue'),
    },
    {
      path: '/case-five',
      name: 'case five',
      component: () => import('@/views/cases/CaseFiveView.vue'),
    },
    {
      path: '/case-six',
      name: 'case six',
      component: () => import('@/views/cases/CaseSixView.vue'),
    },
    {
      path: '/case-tlf',
      name: 'case tlf',
      component: () => import('@/views/cases/CaseTlfView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If the user clicks 'back', take them to where they were
    if (savedPosition) {
      return savedPosition
    }

    // If the URL has a #hash (like #overview-section), jump to it
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Default: Always scroll to the absolute top of the page
    return { top: 0, left: 0 }
  },
})

router.afterEach((to) => {
  if (to.name?.startsWith('case') || to.path.includes('/case-')) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }

  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: to.fullPath,
    })
  }
})

export default router
