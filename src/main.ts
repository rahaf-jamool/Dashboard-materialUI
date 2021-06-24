import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import GlobalDirectives from "./globalDirectives.js"
// import material-dashboard from './material-dashboard.js'
import Chartist from "chartist";

// app.prototype.$Chartist = Chartist;
// app.use(GlobalDirectives)

const app = createApp({
  App,
  router,
  store,
  // GlobalDirectives,
  data() {
    return {
      Chartist: Chartist,
    };
  },
});
app.mount("#app");
