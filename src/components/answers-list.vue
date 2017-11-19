<template>
  <div>
    <answers-list-element
      v-for="(answer, index) in answers"
      :key="index"
      :answer="answer"
      :is-selected="index === selectedAnswerIndex"
      @selectAnswer="handleSelectAnswer"
    ></answers-list-element>
  </div>
</template>

<script>
  import AnswersListElement from '@/components/answers-list-element';

  export default {
    name: 'AnswersList',
    components: { AnswersListElement },
    props: {
      answers: Array,
      selectedAnswerIndex: Number
    },

    methods: {
      handleSelectAnswer(answer) {
        this.$emit('selectAnswer', this.answers.indexOf(answer))
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>