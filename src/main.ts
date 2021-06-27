import { createApp, h } from "vue";
// import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
//store.js
// import store from
// import store from "@/store";
import routes from "./router";
//axios
import axios from "axios";
// Plugins
// import GlobalDirectives from "@/globalDirectives";
import GlobalComponents from "@/globalComponents";

// MaterialDashboard plugin
// import materialDashboard from "./material-dashboard";

import Chartist from "chartist";

axios.defaults.baseURL = "http://edalili.e-dalely.com/public";

// createApp.prototype.$Chartist = Chartist;
const app = createApp({
  render() {
    return h(App);
  },
  data() {
    return {
      Chartist: Chartist,
    };
  },
});
app.use(routes);
// app.use(store);
// app.use(materialDashboard);
app.mount("#app");
app.use(GlobalComponents);
// app.use(GlobalDirectives);
