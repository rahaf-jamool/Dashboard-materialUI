import store from "./Store";
// import index from "./index";
import axios from "axios";
// import auth from "./modules/auth";

store.subscribe((mutations) => {
  // console.log(mutations);
  switch (mutations.type) {
    case "auth/SET_TOKEN":
      if (mutations.payload) {
        axios.defaults.headers.common[
          "token_type"
        ] = `bearer ${mutations.payload}`;
        localStorage.setItem("token", mutations.payload);
      } else {
        axios.defaults.headers.common["token_type"] = null;
        localStorage.removeItem("token");
      }
      // console.log(mutations.payload)
      break;
  }
});
