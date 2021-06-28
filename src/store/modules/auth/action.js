import axios from "axios";

export const signIn = async ({ dispatch }, Credentials) => {
  let res = await axios.post(
    "http://edalili.e-dalely.com/public/api/auth/login",
    Credentials
  );
  console.log(res.data);
  return dispatch("attempt", res.data.access_token);
};
export const attempt = async ({ commit }, token) => {
  console.log(token);
  commit("SET_TOKEN", token);
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
};

//Register
export const register = async ({ dispatch }, Credentials) => {
  let res = await axios.post(
    "http://edalili.e-dalely.com/public/api/auth/register",
    Credentials
  );
  console.log(res.data);
  return dispatch("attempt1", res.data.access_token);
};
export const attempt1 = async ({ commit }, token) => {
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
};
