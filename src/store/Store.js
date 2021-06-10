import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import All from './modules/All';
import Stores from './modules/Stores';
import Doctors from './modules/Doctors';
Vue.use(Vuex, axios);

export default new Vuex.Store({
    modules: {
        All,
        Stores,
        Doctors,
    },
    state: {
        priceArray: [],
    },
});
