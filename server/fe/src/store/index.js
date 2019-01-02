import Vue from 'vue';
import Vuex from 'vuex';
import loginState from './State/login';
import articleData from './State/article';
import loginMutation from './Mutations/login';
import articleMutation from './Mutations/article';
import articleActions from './Actions/article.js';


Vue.use(Vuex);

const state = {
    ...loginState,
    ...articleData
};

const mutations = {
    ...loginMutation,
    ...articleMutation
};

const actions = {
    ...articleActions
};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});

export default store;