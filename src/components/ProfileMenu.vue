<template>
  <nav id="menu" class="menu">
    <ul class="menu-list">
      <li class="menu-item">
        <a class="menu-link" href="/profile"><i class="material-icons-outlined">account_circle</i></a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="/search"><i class="material-icons">search</i></a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="/chat"><i class="material-icons-outlined">chat</i></a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="/liked"><i class="material-icons-outlined">thumb_up</i></a>
      </li>
      <li class="menu-item">
        <a class="menu-link" href="/settings"><i class="material-icons-outlined">settings</i></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../assets/vars';

.menu {
  z-index: 10;
  padding: 0 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: $maxWidth;
  display: flex;
  justify-content: center;
  align-items: center;
  height: $menuHeight;
  background-color: $light-95;
  box-shadow: 0 -5px 10px -5px $dark-25;

  &-list {
    font-size: 0;
    width: $menuWidth;
    height: 100%;
    display: flex;
  }

  &-link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: transparent;
    transition: background-color 0.133s ease-in-out;

    & > .material-icons,
    & > .material-icons-outlined {
      font-size: $xxlFontSize;
      color: $iconDark;
    }

    &:hover,
    &:focus {
      background-color: $dark-10;
    }
  }

  &-item {
    flex: 1 1 $menuHeight;
    height: 100%;
    margin: 0 10px 0 0;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
