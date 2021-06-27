import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./action";
import * as getters from "./getters";
// import { createApp } from "vue";
import { createStore } from "vuex";
// import axios from "axios";

// createApp.use(axios);

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
