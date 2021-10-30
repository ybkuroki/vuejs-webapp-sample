import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/LoginView.vue'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'

Vue.use(Router)

var router = new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', component: Login, meta: { anonymous: true } },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/*', redirect: '/home' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.anonymous)) {
    next()
  } else {
    Vue.nextTick(() => router.app.$children[0].checkLogin(to, from, next))
  }
})
export default router