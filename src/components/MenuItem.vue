<template>
  <li class="menu-item">
    <span :class="`menu-item-small ${menuState ? '' : ' active'}`">
      <fa :icon="icon" class="icon"></fa>
    </span>
    <span :class="`menu-item-full ${menuState ? ' active' : ''}`">{{ text }}</span>
  </li>
</template>

<script>
export default {
  props: {
    menuState: {
      type: Boolean,
      required: true
    },
    icon: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss">
$tooDarkBg: rgb(15, 15, 15);
$darkText: rgb(20, 20, 20);
$iconSize: 18px;

.menu-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  height: 45px;
  max-height: 45px;
  letter-spacing: 0.5px;
  color: $darkText;
  border-bottom: 1px solid rgb(50, 50, 50);
  border-top: 1px solid rgb(100, 100, 100);
  cursor: pointer;
  &-full {
    font-size: 0;
    transition: font-size 0.2s ease-in-out;
    &.active {
      font-size: 1.2em;
    }
  }
  &-small {
    display: flex;
    align-items: center;
    justify-content: center;
    & > .icon {
      width: 0;
      height: 0;
    }
    &.active > .icon {
      fill: $darkText;
      width: $iconSize;
      height: $iconSize;
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover {
    color: rgb(150, 150, 150);
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 3px;
      background: $tooDarkBg;
    }
  }
}
</style>
