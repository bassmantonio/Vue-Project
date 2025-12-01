import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/modules/counter/components/Counter.vue')
    },
    {
      path: '/tasksList',
      name: 'tasksList',
      component: () => import('@/modules/tasksList/components/TasksList.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/modules/records/views/RegisterView.vue')
    }
  ],
})

export default router
