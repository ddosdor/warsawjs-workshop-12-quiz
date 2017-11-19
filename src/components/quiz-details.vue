<template>
  <div v-if="quiz">
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
            </div>
          </div>
          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article> 
      </div>
    </div>
    <questions-list :questions="quiz.questions"></questions-list>
  </div>
</template>

<script>
  import QuestionsList from '@/components/questions-list';

  export default {
    name: 'QuizDetails',
    components: { QuestionsList },
    props: {
      quiz: Object
    }
  }
</script>

<style lang="sass" scoped>

</style>
