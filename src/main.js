import { createApp } from "vue"
import { IonicVue } from "@modus/ionic-vue"
import router from "@/router"

// Ionic core styles
import "@ionic/core/css/ionic.bundle.css"

import App from '@/App'

createApp(App)
  .use(IonicVue)
  .use(router)
  .mount("#app")
