import Vue from 'vue';
import Vuex from 'vuex';

import authentication from './modules/authentication.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    error: null,
    loading: false,
    information: null
  },
  getters: {
    getError(state) {
      return state.error;
    },
    getInformation(state) {
      return state.information;
    },
    getLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    setInformation(state, payload) {
      state.information = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    }
  },
  actions: {},
  modules: {
    authentication
  }
})

export default store;
