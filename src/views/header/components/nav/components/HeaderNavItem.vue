<template>
  <button :class="['item', { active: active === content.id }]" type="button" @click="clickHandler">
    {{ content.text }}
  </button>
</template>
<script lang="js">
export default {
  name: 'HeaderNavItem',
  props: {
    content: {
      type: Object,
      required: true
    },
  },
  computed: {
    active() {
      return this.$store.getters.getActiveNav
    }
  },
  methods: {
    clickHandler() {
      this.$store.commit('setActiveNav', this.$props.content.id)
    }
  },
}
</script>
<style lang="scss" scoped>
.item {
  background-color: transparent;
  border: none;
  border-radius: 8px;
  padding: 4px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #a6abbd;
  height: fit-content;
  &:hover {
    cursor: pointer;
    background-color: #c3fde2;
  }
}
.item.active {
  color: #fff;
  background-color: #00c368;
  box-shadow: 0px 8px 16px rgba(0, 195, 104, 0.4);
}
@media (max-width: 900px) {
  .item {
    display: none;
  }
}
</style>
