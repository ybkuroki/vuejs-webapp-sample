import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Dialog, Notify } from "quasar";
import quasarLang from "quasar/lang/en-US";

import App from './App.vue'
import router from './router'

// Import quasar CSS
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css"
import "quasar/src/css/index.sass";

const app = createApp(App)

app.use(createPinia())
app.use(router)
// Setup quasar 
app.use(Quasar, {
	plugins: { Dialog, Notify },
	lang: quasarLang,
});

app.mount('#app')
