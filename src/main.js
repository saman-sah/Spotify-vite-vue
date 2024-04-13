import { createApp } from 'vue'
import './assets/css/main.sass'
import router from './router'
import App from './App.vue'

import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')