import { createStore } from "vuex";
import All from "./modules/All";
import Stores from "./modules/Stores";
import Doctors from "./modules/Doctors";
import auth from "./modules/auth";
const store = createStore({
  modules: {
    All,
    Stores,
    Doctors,
    auth,
  },
});

export default store;
