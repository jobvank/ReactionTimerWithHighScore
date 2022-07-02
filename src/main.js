import { createApp } from 'vue'
import App from './App.vue'

console.log(process.env.SUPABASE_URL) // remove this after you've confirmed it working

createApp(App).mount('#app')
