import Vue from 'vue';
import Vuex from 'vuex';
import loginState from './State/login';
import loginMutation from './Mutations/login';

Vue.use(Vuex);

const state = {
    ...loginState
};

const mutations = {
    ...loginMutation
};

const store = new Vuex.Store({
    state,
    mutations
});

export default store;