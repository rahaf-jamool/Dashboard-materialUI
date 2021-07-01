export default {
  state: {
    token: null,
    user: null,
  },
  mutations: {
    //auth
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    //register
    SET_TOKEN1(state, token) {
      state.token = token;
    },
  },
  actions: {
    //auth
    async signIn({ dispatch }, Credentials) {
      let res = await axios.post(
        "http://edalili.e-dalely.com/public/api/auth/login",
        Credentials
      );
      console.log(res.data);
      return dispatch("attempt", res.data.access_token);
    },
    async attempt({ commit, state }, token) {
      if (token) {
        commit("SET_TOKEN", token);
      }
      console.log(token);
      if (!state.token) {
        return;
      }
      // try {
      // let res = await axios.get('auth/me');
      //   let res = await axios.get("auth/me", {
      //     headers: {
      //       Authorization: "Bearer" + token,
      //     },});
      //     commit('SET_USER', res.data);
      // } catch (e) {
      //     commit('SET_TOKEN', null);
      //     commit('SET_USER', null);
      // }
    },
    //     signOut ({commit}) {
    //         return axios.post('auth/signout').then(() => {
    //         commit('SET_TOKEN', null);
    //             commit('SET_USER', null);
    //              })
    //     }
    //Register
    async register({ dispatch }, Credentials) {
      let res = await axios.post(
        "http://edalili.e-dalely.com/public/api/auth/register",
        Credentials
      );
      console.log(res.data);
      return dispatch("attempt1", res.data.access_token);
    },
    async attempt1({ commit }, token) {
      console.log(token);
      commit("SET_TOKEN1", token);
      // try {
      //   let res = await axios.get("auth/me", {
      //     headers: {
      //       Authorization: "Bearer" + token,
      //     },
      //   });
      //   commit("SET_USER", res.data);
      // } catch (e) {
      //   commit("SET_TOKEN", null);
      //   commit("SET_USER", null);
      // }
    },
  },
  getters: {
    //auth
    authenticated(state) {
      return state.token && state.user;
      // return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
  },
};
