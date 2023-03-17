<template>
  <div class="heading">
    <base-divider />
    <h1 class="text">{{ heading }}</h1>
  </div>
</template>
<script lang="js">
export default {
  name: 'base-heading',
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  font-size: 40px;
  line-height: 47px;
  font-weight: 700;
  color: #2e3a59;
  text-align: center;
  .text {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: inherit;
    text-align: inherit;
  }
}
</style>
