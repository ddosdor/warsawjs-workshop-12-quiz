<template>
  <div v-if="quiz" class="quiz-details">
    <div class="message">
      <div class="message-body">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="quiz.promo">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p><strong>{{ quiz.name }}</strong>
                <br>
                Quiz category: {{ quiz.categoryName }}
              </p>
              <p v-if="isEnded">Twój wynik: {{ score }} / 7</p>
            </div>
          </div>
          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article> 
      </div>
    </div>
    <questions-list :questions="quiz.questions"></questions-list>
    <div class="quiz-details__results has-text-centered">
      <button class="button is-primary"
        @click="submitResults"
      >Sprawdź wyniki!!</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import QuestionsList from '@/components/questions-list';

  export default {
    name: 'QuizDetails',
    components: { QuestionsList },
    props: {
      quiz: Object
    },

    computed: {
      ...mapGetters(['isEnded', 'score'])
    },

    methods: {
      submitResults() {
        this.$store.commit('CHECK_RESULTS');
      }
    }
  }
</script>

<style lang="sass" scoped>
  .quiz-details__results
    margin-top: 20px

</style>
