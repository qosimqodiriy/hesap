import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    
    {
      name: 'about',
      path: '/about',
      component: () => import('../views/about.vue'),
    },
  ],
})

export default router
