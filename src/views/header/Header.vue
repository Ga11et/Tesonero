<template>
  <header class="header">
    <HeaderNav />
    <HeaderButton />
  </header>
</template>
<script lang="js">
import HeaderButton from './components/HeaderButton.vue'
import HeaderNav from './components/nav/headerNav.vue';
export default {
  name: 'Header',
  components: { HeaderNav, HeaderButton }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 84px;
  height: 160px;
}
@media (max-width: 1450px) {
  .header {
    margin: 0 40px;
  }
}
@media (max-width: 900px) {
  .header {
    justify-content: center;
    height: 100px;
  }
}
</style>
