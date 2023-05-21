import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/authentication/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/authentication/Register.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/Customers.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/CardsView.vue')
    },
    {
      path: '/card/:code',
      name: "CardDetails",
      component: () => import('../components/Card/CardDetailsView.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
