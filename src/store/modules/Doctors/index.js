import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./action";
import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";

createApp.use(createStore, axios);

export default {
  state,
  mutations,
  actions,
};
