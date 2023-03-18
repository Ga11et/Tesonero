<template>
  <swiper
    class="container"
    :modules="modules"
    :navigation="true"
    :pagination="true"
    :slidesPerView="1"
  >
    <swiper-slide v-for="item in items" :key="item.id">
      <MenuCenterItem :content="item" class="slideItem" />
    </swiper-slide>
  </swiper>
</template>
<script lang="js">
import MenuCenterItem from './MenuCenterItem.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './customSlider.css'

export default {
  name: "MenuMobile",
  computed: {
    items() {
      return this.$store.getters.getMenuItems;
    },
  },
  setup() {
      return {
        modules: [Navigation, Pagination],
      };
    },
  components: { MenuCenterItem, Swiper, SwiperSlide }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 0 80px;
}
.slideItem {
  margin: 0 auto 80px;
}
</style>
