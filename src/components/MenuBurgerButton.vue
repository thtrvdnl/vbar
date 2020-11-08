<template>
  <div class="burger-wrapper">
    <button class="burger" id="burger" @click="changeMenuState">
      <div :class="`burger-line burger-line-1 ${menuState ? ' active' : ''}`"></div>
      <div :class="`burger-line burger-line-2 ${menuState ? ' active' : ''}`"></div>
      <div :class="`burger-line burger-line-3 ${menuState ? ' active' : ''}`"></div>
      <div :class="`burger-line burger-line-4 ${menuState ? ' active' : ''}`"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    menuState: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    changeMenuState() {
      this.$emit('change-menu-state')
    }
  }
}
</script>

<style lang="scss">
$burgerWidth: 30px;
$burgetHeight: 19px;
$burgerLine: 3px;
$firstIndent: 8px;
$secondIndent: 16px;
$bgLight: rgb(15, 15, 15);

.burger {
  position: relative;
  display: inline-block;
  background: none;
  border: none;
  width: $burgerWidth;
  height: $burgetHeight;
  cursor: pointer;

  &-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 15px 0 0;
  }

  &:hover > &-line {
    background: rgb(150, 150, 150);
  }

  &-line {
    position: absolute;
    top: 0;
    left: 0;
    width: $burgerWidth;
    height: $burgerLine;
    background: $bgLight;
    transition-property: top, left, width, height, transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0.15s;

    &-2,
    &-3 {
      top: $firstIndent;
    }

    &-2 {
      &.active {
        transform: rotate(45deg);
      }
    }

    &-3 {
      &.active {
        transform: rotate(-45deg);
      }
    }

    &-4 {
      top: $secondIndent;
    }

    &-1,
    &-4 {
      &.active {
        top: $firstIndent;
        left: $secondIndent;
        width: 0;
        height: 0;
      }
    }
  }
}
</style>
