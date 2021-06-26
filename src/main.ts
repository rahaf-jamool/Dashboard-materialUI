import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
//store.js
import store from "@/store";
import routes from "./router";
//axios
import axios from "axios";
// Plugins
import GlobalDirectives from "@/globalDirectives";
import GlobalComponents from "@/globalComponents";
// MaterialDashboard plugin
// import materialDashboard from "./material-dashboard";
import Chartist from "chartist";
axios.defaults.baseURL = "http://edalili.e-dalely.com/public";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [],
});

const app = createApp({
  App,
  routes,
  data() {
    return {
      Chartist: Chartist,
    };
  },
});
app.mount("#app");
app.use(GlobalDirectives);
app.use(GlobalComponents);
// app.use(materialDashboard);
app.use(store);
app.use(router);
