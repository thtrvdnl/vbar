<template>
  <LoadingOverlay v-if="isLoading" />
  <div class="wrapper">
    <MenuBar @dataLoading="dataLoading" @dataLoaded="dataLoaded" />
    <Main />
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import Main from '@/components/Main'
import LoadingOverlay from '@/components/LoadingOverlay'

export default {
  name: 'Home',
  components: {
    MenuBar,
    Main,
    LoadingOverlay
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    dataLoading() {
      this.isLoading = true
    },
    dataLoaded() {
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  height: 100vh;
}
</style>
