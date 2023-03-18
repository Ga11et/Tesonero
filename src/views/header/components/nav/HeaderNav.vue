<template>
  <div class="nav">
    <LogoSVG class="logo" />
    <HeaderNavItem v-for="item in nav" :key="item.id" :content="item" />
  </div>
</template>
<script lang="js">
import LogoSVG from './components/LogoSVG.vue';
import HeaderNavItem from './components/headerNavItem.vue';

export default {
  name: "HeaderNav",
  computed: {
    nav() {
      return this.$store.getters.getNav;
    }
  },
  components: { HeaderNavItem, LogoSVG }
}
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  gap: calc(94px - 24px * 2);
}
@media (max-width: 1450px) {
  .nav {
    gap: 10px;
  }
}
@media (max-width: 900px) {
  .nav {
    .logo {
      width: 200px;
    }
  }
}
</style>
