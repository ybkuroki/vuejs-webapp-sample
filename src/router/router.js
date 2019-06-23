import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../views/login.vue'
import Top from '../views/top.vue'

var router = new Router({
    base: '/',
    routes: [
        {path: '/login', component: Login, meta: {anonymous: true}},
        {path: '/top', component: Top},
        {path: '/*', redirect: '/top'}
    ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.anonymous)) {
    next()
  } else {
    Vue.nextTick(() => router.app.$refs.app.checkLogin(to, from, next))
  }
})
export default router