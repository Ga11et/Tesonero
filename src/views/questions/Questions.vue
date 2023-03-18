<template>
  <section class="questions">
    <base-heading class="heading" heading="Lorem ipsum, dolor sit adipisicing elit." :level="2" />
    <p class="subHeading">Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
    <Question v-for="item in questions" :key="item.id" :content="item" />
  </section>
</template>
<script lang="js">
import Question from './components/Question.vue';

export default {
    name: "Questions",
    computed: {
      questions() {
        return this.$store.getters.getQuestions
      }
    },
    components: { Question }
}
</script>
<style lang="scss" scoped>
.questions {
  background-color: #f8fbff;
  padding: 100px 80px;
  .heading {
    max-width: 600px;
    margin: 0 auto;
    gap: 13px;
    line-height: 65px;
  }
  .subHeading {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #2e3a59;
    text-align: center;
    padding: 20px 0 10px;
  }
}
@media (max-width: 1450px) {
  .questions {
    padding: 100px 40px;
  }
}
@media (max-width: 900px) {
  .questions {
    .heading {
      gap: 13px;
      line-height: 28px;
    }
    padding: 20px 20px;
  }
}
</style>
