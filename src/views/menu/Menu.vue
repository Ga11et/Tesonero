<template>
  <section class="menu">
    <img class="rightBubbles" :src="rightBubblesIMG" alt="rightBubbles" />
    <img class="leftBubbles" :src="leftBubblesIMG" alt="leftBubbles" />
    <MenuCenter />
  </section>
</template>
<script lang="js">
import MenuCenter from './components/center/MenuCenter.vue';

export default {
    name: "Menu",
    computed: {
      leftBubblesIMG() {
        return this.$store.getters.getLeftBubblesIMG
      },
      rightBubblesIMG() {
        return this.$store.getters.getRightBubblesIMG
      },
    },
    components: { MenuCenter }
}
</script>
<style lang="scss" scoped>
.menu {
  background: linear-gradient(111.04deg, #e2e2e2 0.39%, rgba(255, 255, 255, 0) 86.46%);
  height: 950px;
  padding: 75px;
  position: relative;
  z-index: 1;
  .heading {
    text-transform: uppercase;
  }
  .rightBubbles {
    position: absolute;
    top: -30px;
    right: 0;
    z-index: -1;
  }
  .leftBubbles {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
}
@media (max-width: 900px) {
  .menu {
    background: white;
    padding: 0;
    height: auto;
    .rightBubbles,
    .leftBubbles {
      display: none;
    }
  }
}
</style>
