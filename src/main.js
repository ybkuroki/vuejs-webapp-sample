import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import '@/registerServiceWorker'

import '@/plugins/vue-material'
import '@/plugins/fortawesome'
import '@/plugins/custom'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
