<template>
  <div class="message">
    <header class="message-header">
      <p>{{ question.title }}</p>
    </header>
    <div class="message-body">
      <answers-list 
        :answers="question.answers"
        :selected-answer-index="selectedAnswerIndex"
        @selectAnswer="handleSelectAnswer"
      ></answers-list>
    </div>      
  </div>
</template>

<script>
  import AnswersList from '@/components/answers-list';

  export default {
    name: 'QuestionsListElement',
    components: { AnswersList },
    props: {
      question: Object
    },

    data() {
      return {
        selectedAnswerIndex: null,
      }
    },

    methods: {
      handleSelectAnswer(answerIndex) {
        this.selectedAnswerIndex = answerIndex;
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>