<template>
  <div id="app" class="container">
      <the-header></the-header>
      <quiz-details :quiz="quiz"></quiz-details>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

import TheHeader from '@/components/the-header.vue';
import QuizDetails from '@/components/quiz-details.vue';

export default {
  name: 'app',
  components: { TheHeader, QuizDetails },

  mounted() {
    this.init();
  },

  computed: {
    ...mapGetters(['quiz'])
  },

  methods: {
    ...mapActions(['init'])
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
