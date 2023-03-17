<template>
  <section class="questions">
    <base-heading class="heading" heading="Lorem ipsum, dolor sit adipisicing elit." />
    <p class="subHeading">Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
  </section>
</template>
<script lang="js">
export default {
  name: 'Questions'
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
    padding-top: 20px;
  }
}
</style>
