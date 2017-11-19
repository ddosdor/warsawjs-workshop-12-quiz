<template>
  <div>
    <questions-list-element 
      v-for="(question, index) in questions"
      :key="index"
      :question="question"
    ></questions-list-element>
  </div>
</template>

<script>
  import QuestionsListElement from '@/components/questions-list-element';

  export default {
    name: 'QustionsList',
    components: { QuestionsListElement },
    props: {
      questions: Array 
    },
  }
</script>

<style lang="sass" scoped>

</style>