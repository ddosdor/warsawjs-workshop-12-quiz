<template>
  <div class="message">
    <header class="message-header">
      <p>{{ question.title }}
        <span class="tag" :class="[question.isCorrect ? 'is-success' : 'is-danger']" v-if="isEnded">
          {{ question.isCorrect ? 'Prawidłowa' : 'Błędna' }}
        </span>
      </p>
    </header>
    <div class="message-body">
      <answers-list 
        :answers="question.answers"
        :selected-answer-index="selectedAnswerIndex"
        :correct-answer-index="question.correctAnswerIndex"
        @selectAnswer="handleSelectAnswer"
      ></answers-list>
    </div>      
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import AnswersList from '@/components/answers-list';

  export default {
    name: 'QuestionsListElement',
    components: { AnswersList },
    props: {
      question: Object
    },

    data() {
      return {
        selectedAnswerIndex: null
      }
    },

    computed: {
      ...mapGetters(['isEnded']),
    },

    methods: {
      handleSelectAnswer(answerIndex) {
        this.selectedAnswerIndex = answerIndex;
        const questionTitle = this.question.title;
        this.$store.commit('PUT_USER_ANSWER', { questionTitle, answerIndex })
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>