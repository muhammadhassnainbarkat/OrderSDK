import { createApp } from 'vue'
import App from './App.vue'

import PopUpSdk from "./components/PopUpSdk.vue";


let app  = createApp(App);
app.component("PopUpSdk", PopUpSdk)

app.mount('#app')
