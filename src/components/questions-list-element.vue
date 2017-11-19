<template>
  <div class="message">
    <header class="message-header question-title" @click="answerIsVisible = !answerIsVisible">
      <p>{{ question.title }}</p>
    </header>
    <div class="message-body animated fadeIn" v-if="answerIsVisible">
      <answers-list :answers="question.answers"></answers-list>
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
        answerIsVisible: false
      }
    },
  }
</script>

<style lang="sass" scoped>
  .question-title
    cursor: pointer
</style>