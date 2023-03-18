<template>
  <div :class="['review', { reverse: $props.reverse }]">
    <img class="image desctop" :src="$props.content.photos.medium" alt="review photo" />
    <img class="image mobile" :src="$props.content.photos.small" alt="review photo" />
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
  .mobile {
    display: none;
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
@media (max-width: 900px) {
  .review {
    padding-top: 20px;
    .desctop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
  .content {
    padding: 0 20px 0 0;
  }
  .review.reverse {
    .content {
      padding-left: 20px;
      padding-right: 0;
    }
  }
}
</style>
