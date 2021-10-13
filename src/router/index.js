import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lista',
    name: 'Lista',
    component: () => import(/* webpackChunkName: "lista" */ '../views/Lista.vue')
  },
  {
    path: '/novo',
    name: 'Novo',
    component: () => import(/* webpackChunkName: "lista" */ '../views/Novo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
