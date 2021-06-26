import { createApp } from "vue";
import Vuex from "vuex";
import All from "./modules/All";
import Stores from "./modules/Stores";
import Doctors from "./modules/Doctors";
import auth from "./modules/auth";
createApp.use(Vuex);
export default Vuex.createStore({
  modules: {
    All,
    Stores,
    Doctors,
    auth,
  },
});
