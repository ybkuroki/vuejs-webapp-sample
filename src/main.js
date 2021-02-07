import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  template: '<App ref="app" />',
  components: {
    'App': App
  }
}).$mount('#app')
