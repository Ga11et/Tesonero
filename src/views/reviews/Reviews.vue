<template>
  <section class="reviews">
    <base-heading heading="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
    <LargeReview v-if="largeReview" :content="largeReview" />
    <div class="mediums">
      <Review :content="reviews[0]" :reverse="true" />
      <Review :content="reviews[1]" />
    </div>
  </section>
</template>
<script lang="js">
import LargeReview from './components/large/LargeReview.vue';
import Review from './components/large/Review.vue';

export default {
  name: 'Reviews',
  computed: {
    largeReview() {
      return this.$store.getters.getLargeReview
    },
    reviews() {
      return this.$store.getters.getReviews
    }
  },
  components: { LargeReview, Review }
}
</script>
<style lang="scss" scoped>
.reviews {
  padding: 100px 80px;
  background-color: #f5f5f5;
  .mediums {
    display: flex;
    padding-top: 100px;
  }
}
</style>
