<template>
  <p class="answer"
    :class="{ 'answer--selected': isSelected, 'answer--corrected': isEnded && corrected }"
    @click="selectAnswer"
  >
    <i class="fa" 
      :class="{ 'fa-check-square-o': isSelected, 'fa-square-o': !isSelected }"
      aria-hidden="true"></i> {{ answer }}
  </p>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'AnswersListElement',
    props: {
      answer: String,
      isSelected: Boolean,
      corrected: Boolean
    },

    computed: {
      ...mapGetters(['isEnded'])
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

  .answer--corrected
    background: green
    color: white
</style>