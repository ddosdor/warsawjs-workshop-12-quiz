import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quiz: null,
    score: 0,
  },

  mutations: {
    'INIT_STATE'(state, payload) {
      const _state = state;
      _state.quiz = payload.quiz;
    },
  },

  actions: {
    async init({ commit }) {
       const quiz = (await axios.get('/static/quiz.json')).data;
       commit('INIT_STATE', { quiz })
    }
  },

  getters: {
    quiz: state => state.quiz
  }
})