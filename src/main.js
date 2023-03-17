import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store/store'
import './components/base'
import { registerComponents } from './components/base'

const app = createApp(App).use(store)
registerComponents(app)
app.mount('#app')
