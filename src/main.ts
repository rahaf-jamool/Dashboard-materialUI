import { createApp } from "vue";
import App from "./App.vue";
//store.js
import store from "@/store";
//axios
import axios from "axios";
// Plugins
import GlobalDirectives from "@/globalDirectives";
import GlobalComponents from "@/globalComponents";
// MaterialDashboard plugin
// import materialDashboard from "./material-dashboard";
import Chartist from "chartist";
axios.defaults.baseURL = "http://edalili.e-dalely.com/public";
const app = createApp({
  App,
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
