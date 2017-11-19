<template>
  <section v-if="quiz">
    <h2 class="title">{{ quiz.name }}</h2>
    <div class="tag">
      <p>{{ quiz.categoryName }}</p>
    </div>
    <div>
      <img :src="quiz.promo" />
    </div>
  </section>
</template>

<script>
  export default {
    name: 'QuizDetails',
    props: {
      quiz: Object
    }
  }
</script>

<style lang="sass" scoped>

</style>
