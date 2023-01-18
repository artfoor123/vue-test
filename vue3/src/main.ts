import { createApp  } from 'vue'
import './style.css'
import App from './App.vue'
import Bootstrap from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.use(Bootstrap)
app.mount('#app')

