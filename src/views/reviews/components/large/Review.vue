<template>
  <div :class="['review', { reverse: $props.reverse }]">
    <img class="image" :src="$props.content.photos.medium" alt="review photo" />
    <div class="content">
      <p class="paragraph">{{ $props.content.text }}</p>
      <p class="author">{{ $props.content.author }}</p>
    </div>
  </div>
</template>
<script lang="js">
export default {
  name: 'Review',
  props: {
    content: {
      type: Object,
      required: true
    },
    reverse: Boolean
  }
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
    position: relative;
    padding-top: 10px;
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
  }
}
.review.reverse {
  flex-direction: row-reverse;
}
</style>
