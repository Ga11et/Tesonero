<template>
  <div class="nav">
    <LogoSVG />
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
</style>
