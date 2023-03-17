<template>
  <Header />
  <Menu />
  <div class="columns">
    <Reviews class="item" />
    <Questions class="item"></Questions>
  </div>
</template>
<script>
import Header from './views/header/Header.vue'
import Menu from './views/menu/Menu.vue'
import Questions from './views/questions/Questions.vue'
import Reviews from './views/reviews/Reviews.vue'

export default {
  name: 'App',
  components: { Header, Menu, Reviews, Questions },
}
</script>
<style lang="scss" scoped>
.columns {
  display: flex;
  .item {
    width: 50%;
  }
}
</style>
