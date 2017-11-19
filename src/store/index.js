import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { getQuestionIndexByTitle } from '@/helpers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quiz: null,
    isEnded: false,
    score: 0,
  },

  mutations: {
    'INIT_STATE'(state, payload) {
      const _state = state;
      _state.quiz = payload.quiz;
    },
    'PUT_USER_ANSWER'(state, payload) {
      const _state = state;
      const { questionTitle, answerIndex } = payload;
      const questionIndex = getQuestionIndexByTitle(questionTitle, _state.quiz.questions)
      _state.quiz.questions[questionIndex]['userAnswerIndex'] = answerIndex;
      _state.quiz.questions[questionIndex]['isCorrect'] = _state.quiz.questions[questionIndex].correctAnswerIndex === answerIndex;
    },
    'CHECK_RESULTS'(state) {
      const _state = state;
      _state.quiz.questions.forEach(question => {
        if (question.userAnswerIndex || (question.userAnswerIndex === question.correctAnswerIndex)) {
          _state.score = _state.score + 1;
        }
      });
      _state.isEnded = true;
    }
  },

  actions: {
    async init({ commit }) {
       const quiz = (await axios.get('/static/quiz.json')).data;
       commit('INIT_STATE', { quiz })
    }
  },

  getters: {
    quiz: state => state.quiz,
    isEnded: state => state.isEnded,
    score: state => state.score
  }
})