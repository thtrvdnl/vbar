<template>
  <li class="menu-item">
    <span class="menu-item-small">☺</span>
    <span class="menu-item-full">Item 1</span>
  </li>
</template>

<script>
export default {}
</script>

<style lang="scss">
$tooDarkBg: rgb(15, 15, 15);
$darkText: rgb(20, 20, 20);

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
    font-size: 36px;
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
