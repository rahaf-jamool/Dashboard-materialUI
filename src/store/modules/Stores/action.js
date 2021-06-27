// import { createApp } from "vue";
// import Vuex from "vuex";
import axios from "axios";

// createApp.use(Vuex, axios);
// let lang = window.localStorage.getItem("lang");

export const loadStores = ({ commit }) => {
  axios
    .get(`/api/stores/getAll`)
    .then((res) => {
      console.warn("Store :", res.data.Stores);
      let Stores = res.data.Stores;
      commit("SET_Stores", Stores);
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
};
export const loadstore = ({ commit }, productId) => {
  axios
    .get(`/api/stores/getById/${productId}`)
    .then((res) => {
      console.warn("StorebyId :", res.data);
      let store = res.data.Store;
      commit("SET_Store", store);
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
};
