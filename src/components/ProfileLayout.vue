<template>
  <div class="wrapper">
    <slot></slot>
    <profile-menu></profile-menu>
  </div>
</template>

<script>
import ProfileMenu from '@/components/ProfileMenu.vue'

export default {
  name: 'profile-layout',
  components: { ProfileMenu }
}
</script>

<style lang="scss">
@import '../assets/vars';
</style>
