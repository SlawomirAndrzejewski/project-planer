import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/add-project',
    name: 'AddProject',
    component: () => import('../views/AddProject.vue')
  },
  {
    path: '/edit-project/:id',
    name: 'EditProject',
    component: () => import('../views/EditProject.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
