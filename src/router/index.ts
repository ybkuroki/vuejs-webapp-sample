import { nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Account from '@/types/account';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { anonymous: true }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*', redirect: '/home'
    }
  ]
})

const checkLogin = (to: any, from: any, next: () => any) => {
  const model = new Account()
  model.getLoginStatus(
    () => {
      next()
    },
    () => {
      router.push("/login")
    }
  )
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.anonymous)) {
    next()
  } else {
    nextTick(() => checkLogin(to, from, next))
  }
})

export default router
