// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from "./components/SidebarPlugin";

// asset imports
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material";
// import "./assets/scss/material-dashboard.scss";
// library auto imports
// import { MdButton} from 'vue-material/dist/components'
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "es6-promise/auto";

export default {
  install(createApp) {
    createApp.use(SideBar);
    createApp.use(VueMaterial);
  },
};
