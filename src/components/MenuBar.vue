<template>
  <nav :class="`navbar ${menuState ? ' active' : ''}`">
    <MenuBurgerButton :menuState="menuState" @changeMenuState="changeMenuState" />
    <ul class="menu" id="menu">
      <MenuItem :menuState="menuState" />
    </ul>
  </nav>
</template>

<script>
// import { reactive, toRefs } from 'vue'
// import axios from 'axios'

import MenuBurgerButton from './MenuBurgerButton'
import MenuItem from './MenuItem'

export default {
  components: {
    MenuBurgerButton,
    MenuItem
  },
  data() {
    return {
      menuState: false
    }
  },
  methods: {
    changeMenuState() {
      this.menuState = !this.menuState
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  background-color: #fff;
  padding: 30px 0 20px 0;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  transition: width 0.2s ease-in-out;
  &.active {
    width: 200px;
  }
}
.menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
  padding: 10px 0;
  transition: width 0.2s ease-in-out 0.1s;
}
</style>
