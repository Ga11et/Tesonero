<template>
  <div class="heading">
    <base-divider :class="{ mobile: $props.level !== 2 }" />
    <h2 class="text" v-if="$props.level === 2">{{ heading }}</h2>
    <h1 class="text" v-else>{{ heading }}</h1>
  </div>
</template>
<script lang="js">
export default {
  name: 'base-heading',
  props: {
    heading: {
      type: String,
      required: true
    },
    level: Number
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
@media (max-width: 900px) {
  .heading {
    font-size: 24px;
    line-height: 28px;
    margin: 0 20px;
    .mobile {
      display: none;
    }
  }
}
</style>
