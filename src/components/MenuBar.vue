<template>
  <nav class="navbar">
    <MenuBurgerButton v-model="menuState" @changeMenuState="changeMenuState" />
    <ul class="menu" id="menu">
      <MenuItem />
    </ul>
  </nav>
</template>

<script>
import { reactive, toRefs } from 'vue'
import MenuBurgerButton from './MenuBurgerButton'
import MenuItem from './MenuItem'

export default {
  components: {
    MenuBurgerButton,
    MenuItem
  },
  setup() {
    const menuState = reactive({
      menuState: false
    })

    function changeMenuState() {
      if (menuState.value) {
        event.menuState = false
      } else {
        event.menuState = true
      }
    }

    return { ...toRefs(menuState), changeMenuState }
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
