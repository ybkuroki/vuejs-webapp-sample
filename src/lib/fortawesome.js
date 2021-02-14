import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)
library.add(faSignOutAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)