import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Container from '@/Components/Container.vue'
import Icon from '@/components/Icon.vue';



const app = createApp(App)

app.use(createPinia())
    .use(router)
    .component('container', Container)
    .component('Icon', Icon)
    .mount('#app')
