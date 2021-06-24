import { createStore } from "vuex";
// import axios from 'axios'
import All from "./modules/All";
// import Stores from "./modules/Stores";
// import Doctors from "./modules/Doctors";
// import auth from "./modules/auth";
export default createStore({
  modules: {
    All,
    // Stores,
    // Doctors,
    // auth,
  },
});
