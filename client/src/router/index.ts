import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Launches from '../views/Launches.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Launches',
    component: Launches,
  },
  {
    path: '/launch/:flight_number',
    name: 'Launch',
    component: () =>
      import(/* webpackChunkName: "launch" */ '../views/Launch.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
