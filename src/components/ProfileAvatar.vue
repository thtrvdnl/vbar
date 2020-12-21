<template>
  <div class="banner">
    <img :src="avatar" :alt="firstName" class="banner-img" />
    <div class="avatar-wrapper">
      <img :src="avatar" :alt="firstName" class="avatar" />
      <div class="person-wrapper">
        <h2 class="person-name">&nbsp;{{ firstName }}</h2>
        <span v-if="age" class="person-age">, {{ age }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile-avatar',
  props: {
    avatar: {
      type: String,
      default: 'https://image.flaticon.com/icons/png/512/104/104784.png'
    },
    firstName: {
      type: String,
      default: 'username'
    },
    age: {
      type: Number
    }
  }
}
</script>

<style lang="scss">
@import '../assets/vars';

.avatar {
  width: 100%;
  height: $maxImageHeight;
  max-width: $maxImageWidth;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 0px 20px 50px 0 $dark-10, 0 0 20px 0 $dark-25;

  &-wrapper {
    position: relative;
  }
}
.banner {
  position: relative;
  text-align: center;
  overflow: hidden;
  &-img {
    display: block;
    position: absolute;
    filter: blur(10px);
  }
}
</style>
