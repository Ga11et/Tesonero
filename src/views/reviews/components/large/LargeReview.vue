<template>
  <div class="review">
    <img class="image desctop" :src="$props.content.photos.large" alt="review photo" />
    <img class="image mobile" :src="$props.content.photos.medium" alt="review photo" />
    <div class="content">
      <p class="paragraph">{{ $props.content.text }}</p>
      <p class="author">{{ $props.content.author }}</p>
      <div class="before">
        <QuotesSVG class="svg" />
        <QuotesSVG class="svg" />
      </div>
      <div class="after">
        <QuotesSVG class="svg" />
        <QuotesSVG class="svg" />
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
  .mobile {
    display: none;
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
@media (max-width: 900px) {
  .review {
    box-shadow: 0px 8px 16px rgba(0, 195, 104, 0.24);
    border-radius: 32px;
    margin: 80px 20px 20px;
    position: relative;
    .image {
      position: absolute;
      top: -50px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .image.desctop {
      display: none;
    }
    .image.mobile {
      display: block;
    }
    .content {
      padding: 40px 20px 20px;
      .paragraph {
        text-align: center;
      }
      .author {
        text-align: center;
      }
      .before,
      .after {
        top: -25px;
        top: -25px;
        .svg {
          fill: #e7ebf0;
        }
      }
      .before {
        left: 15px;
      }
      .after {
        right: 15px;
      }
    }
  }
}
</style>
