import { createApp } from 'vue'
import App from './App.vue'

require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working

createApp(App).mount('#app')
