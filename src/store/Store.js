import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import All from './modules/All';
import Stores from './modules/Stores';
import Doctors from './modules/Doctors';
 import auth from './modules/auth';

import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex, axios);

export default new Vuex.Store({
    modules: {
        All,
        Stores,
        Doctors,
        auth
    },
    state: {
        priceArray: [],
    },
    plugins: [createPersistedState()],
});
