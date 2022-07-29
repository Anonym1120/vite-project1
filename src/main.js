import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import elementPlus from './plugins/element'
import './assets/main.css'

const app = createApp(App)

elementPlus(app)

app.use(createPinia())
   .use(router)
   .mount('#app')
