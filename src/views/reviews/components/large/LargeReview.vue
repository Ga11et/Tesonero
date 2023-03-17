<template>
  <div class="review">
    <img class="image" :src="$props.content.photos.large" alt="review photo" />
    <div class="content">
      <p class="paragraph">{{ $props.content.text }}</p>
      <p class="author">{{ $props.content.author }}</p>
      <div class="before">
        <QuotesSVG />
        <QuotesSVG />
      </div>
      <div class="after">
        <QuotesSVG />
        <QuotesSVG />
      </div>
    </div>
  </div>
</template>
<script lang="js">
import QuotesSVG from './components/QuotesSVG.vue';

export default {
    name: "LargeReview",
    props: {
        content: {
            type: Object,
            required: true
        }
    },
    components: { QuotesSVG }
}
</script>
<style lang="scss" scoped>
.review {
  display: flex;
  align-items: flex-start;
  padding-top: 50px;
  .image {
    display: block;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 7px;
    padding-left: 60px;
    position: relative;
    .paragraph {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #2e3a59;
    }
    .author {
      font-size: 16px;
      line-height: 19px;
      font-weight: 700;
      color: #2e3a59;
    }
    .before {
      position: absolute;
      left: 0;
      top: 0;
      transform: rotate(180deg);
    }
    .after {
      position: absolute;
      bottom: -10px;
      right: -10px;
    }
  }
}
</style>
