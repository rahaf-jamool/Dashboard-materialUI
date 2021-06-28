import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export const signIn = ({ commit }, Credentials) => {
  axios.post("/api/auth/login", Credentials);
  console.log(response);
  commit("attempt", response);
};

export const attempt = ({ commit }, token) => {
  commit("SET_TOKEN", token);
  try {
    axios.get("url/api/auth/me", {
      headers: {
        Authorization: "Bearer" + token,
      },
    });
    commit("SET_USER", response.data);
  } catch (e) {
    commit("SET_TOKEN", null);
    commit("SET_USER", null);
  }
};
