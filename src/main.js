import Vue from 'vue'
import App from './app.vue'
import router from './router/router'
import store from './store/store'

import '../node_modules/semantic-ui-css/semantic.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  template: '<App ref="app" />',
  components: {
    'App': App
  }
}).$mount('#app')
