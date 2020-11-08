<template>
  <nav :class="`navbar ${menuState ? ' active' : ''}`">
    <MenuBurgerButton :menuState="menuState" @changeMenuState="changeMenuState" />
    <ul class="menu" id="menu">
      <MenuItem v-for="item of menuItems" :key="item.id" :menuState="menuState" :item="item" />
    </ul>
  </nav>
</template>

<script>
//TODO: Router (nav) links
import MenuBurgerButton from './MenuBurgerButton'
import MenuItem from './MenuItem'

export default {
  components: {
    MenuBurgerButton,
    MenuItem
  },
  data() {
    return {
      menuState: false,
      menuItems: [
        {
          id: 'home',
          icon: 'home',
          text: 'Домашняя',
          link: '/'
        },
        {
          id: 'profile',
          icon: 'user',
          text: 'Профиль',
          link: '/user/'
        },
        {
          id: 'search',
          icon: 'search',
          text: 'Поиск',
          link: '/search'
        }
      ]
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
  background-color: rgb(235, 235, 245);
  padding: 30px 0 20px 0;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  transition-property: width, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  // transition: width 0.2s ease-in-out;
  // border-right: 3px solid rgba(200, 200, 200, 0.3);
  box-shadow: 0 0 10px 0 rgba(200, 200, 200, 0.8);
  &.active {
    width: 200px;
    box-shadow: 0 0 20px 0 rgba(200, 200, 200, 0.6);
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
