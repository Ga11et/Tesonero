<template>
  <a href="/" class="item">
    <CenterItemSVG class="svg" :type="$props.type" />
    <p class="text">{{ $props.text }}</p>
  </a>
</template>
<script lang="js">
import CenterItemSVG from './svgs/CenterItemSVG.vue';

export default {
    name: "MenuCenterItem",
    props: {
      type: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    },
    components: { CenterItemSVG }
}
</script>
<style lang="scss" scoped>
.item {
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 190px;
  .text {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    color: #2e3a59;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
    .svg {
      stroke: #00c368;
    }
  }
}
</style>
