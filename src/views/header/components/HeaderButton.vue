<template>
  <button class="button" type="button">Button</button>
</template>
<script lang="js">
export default {
  name: 'HeaderButton'
}
</script>
<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 8px;
  padding: 4px 24px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #fff;
  background-color: #14c472;
  box-shadow: 0px 8px 16px rgba(0, 195, 104, 0.4);
  transition: 300ms;
  &:hover {
    cursor: pointer;
    background-color: #6bc79c;
    transition: 300ms;
  }
}
</style>
