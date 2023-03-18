<template>
  <div class="center">
    <base-heading class="heading" heading="Lorem ipsum, dolor sit amet consectetur" />
    <div class="top">
      <MenuCenterItem v-for="item in items.slice(0, 2)" :key="item.id" :content="item" />
    </div>
    <div class="middle">
      <MenuCenterItem v-for="item in items.slice(2, 4)" :key="item.id" :content="item" />
      <img class="image" :src="berriesIMG" alt="berries" />
    </div>
    <div class="bottom">
      <MenuCenterItem v-for="item in items.slice(4, 6)" :key="item.id" :content="item" />
    </div>
  </div>
  <div class="mobile">
    <img class="image" :src="berriesIMG" alt="berries" />
    <base-heading class="heading" heading="Lorem ipsum, dolor sit amet consectetur" />
    <MenuMobile class="swiper" />
  </div>
</template>
<script lang="js">
import MenuCenterItem from './components/MenuCenterItem.vue';
import MenuMobile from './components/MenuMobile.vue';

export default {
    name: "MenuCenter",
    computed: {
      items() {
        return this.$store.getters.getMenuItems
      },
      berriesIMG() {
        return this.$store.getters.getBerriesIMG
      }
    },
    components: { MenuCenterItem, MenuMobile }
}
</script>
<style lang="scss" scoped>
.center {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 70px;
  .top,
  .middle,
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top,
  .bottom {
    gap: 100px;
  }
  .middle {
    position: relative;
    gap: 420px;
    .image {
      position: absolute;
      top: 50%;
      transform: translate(0, -80px);
      display: block;
      object-fit: cover;
      overflow: visible;
      height: 230px;
      width: 440px;
      z-index: 0;
    }
  }
}
.mobile {
  display: none;
}
@media (max-width: 900px) {
  .center {
    display: none;
  }
  .mobile {
    display: flex;
    flex-direction: column;
    .heading {
      position: relative;
      top: -100px;
    }
    .swiper {
      width: 100%;
    }
  }
}
@media (max-width: 500px) {
  .mobile {
    .heading {
      position: relative;
      top: -50px;
    }
  }
}
</style>
