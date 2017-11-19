<template>
  <p class="answer"
    :class="{ 'answer--selected': isSelected }"
    @click="selectAnswer"
  >
    <i class="fa" 
      :class="{ 'fa-check-square-o': isSelected, 'fa-square-o': !isSelected }"
      aria-hidden="true"></i> {{ answer }}
  </p>
</template>

<script>
  export default {
    name: 'AnswersListElement',
    props: {
      answer: String,
      isSelected: Boolean
    },

    methods: {
      selectAnswer() {
        this.$emit('selectAnswer', this.answer);
      }
    }
  }
</script>

<style lang="sass" scoped>
  .answer:hover
    cursor: pointer
    font-weight: bold

  .answer--selected
    font-weight: bold
</style>