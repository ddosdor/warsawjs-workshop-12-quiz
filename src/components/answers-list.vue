<template>
  <div>
    <answers-list-element
      v-for="(answer, index) in answers"
      :key="index"
      :answer="answer"
    ></answers-list-element>
  </div>
</template>

<script>
  import AnswersListElement from '@/components/answers-list-element';

  export default {
    name: 'AnswersList',
    components: { AnswersListElement },
    props: {
      answers: Array
    }
  }
</script>

<style lang="sass" scoped>

</style>