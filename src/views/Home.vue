<template>
  <div class="wrapper">
    <MenuBar />
    <Main />
  </div>
</template>

<script>
// Have to solve vue3 reactivity problem and create a simple application template
import MenuBar from '@/components/MenuBar'
import Main from '@/components/Main'

export default {
  name: 'Home',
  components: {
    MenuBar,
    Main
  }
}
</script>

<style lang="scss">
.wrapper {
  height: 100vh;
}
</style>
