import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./action";
import { createApp } from "vue";
import Vuex from "vuex";
import axios from "axios";

createApp.use(Vuex, axios);

export default Vuex.createStore({
  namespaced: true,
  state,
  mutations,
  actions,
});
