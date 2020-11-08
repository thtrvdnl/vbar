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
    item: {
      type: Object
    }
  },
  data() {
    return {
      icon: this.item.icon,
      text: this.item.text,
      link: this.item.link
    }
  }
}
</script>

<style lang="scss">
$tooDarkBg: rgb(15, 15, 15);
$darkText: rgb(20, 20, 20);
$iconSize: 24px;

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
  border-bottom: 1px solid rgb(200, 200, 200);
  cursor: pointer;

  &-link {
    display: block;
    width: 100%;
    height: 45px;
    max-height: 45px;
    color: $darkText;
    text-decoration: none;
  }

  &:last-child {
    border-bottom: none;
  }

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
      fill: transparent;
    }
    &.active > .icon {
      fill: $darkText;
      width: $iconSize;
      height: $iconSize;
      transition-property: width, height, fill;
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
    }
  }

  &:hover {
    color: rgb(150, 150, 150);

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 3px;
      background: rgb(35, 90, 120);
    }
  }
}
</style>
