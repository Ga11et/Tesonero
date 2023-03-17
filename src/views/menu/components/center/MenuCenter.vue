<template>
  <div class="center">
    <div class="top">
      <MenuCenterItem
        type="headphones"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      />
      <MenuCenterItem type="box" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
    </div>
    <div class="middle">
      <MenuCenterItem
        type="board"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      />
      <img class="image" src="./assets/berries.png" alt="berries" />
      <MenuCenterItem
        type="pult"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      />
    </div>
    <div class="bottom">
      <MenuCenterItem
        type="headphones"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      />
      <MenuCenterItem type="box" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
    </div>
  </div>
</template>
<script lang="js">
import MenuCenterItem from './components/MenuCenterItem.vue';

export default {
    name: "MenuCenter",
    components: { MenuCenterItem }
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
</style>
