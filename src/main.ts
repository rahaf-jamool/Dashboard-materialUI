import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import GlobalDirectives from "@/globalDirectives";
// import Chartist from 'chartist'

// app.prototype.$Chartist = Chartist;

createApp(App)
  .use(store)
  .use(router)
  // .use(GlobalDirectives)
  .mount("#app");
