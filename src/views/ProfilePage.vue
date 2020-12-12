<template>
  <div class="wrapper">
    <main class="main">
      <profile-avatar :imageLink="user.imageLink" :userName="user.name" :userAge="user.age"></profile-avatar>
      <div class="main-body">
        <section class="section section-actions">
          <div class="buttons-wrapper">
            <app-button
              v-for="button in buttons"
              :key="button.id"
              :buttonId="button.id"
              buttonClass="btn btn-rounded"
              :isOutlined="button.isOutlined"
              ><i :class="`material-icons${button.isOutlined ? '-outlined' : ''}`">{{ button.icon }}</i></app-button
            >
          </div>
        </section>
        <section class="section section-about">
          <h4 class="section-title">{{ titles.about }}</h4>
          <p class="person-about">{{ user.about }}</p>
        </section>
        <section class="section section-interests">
          <h4 class="section-title">{{ titles.interests }}</h4>
          <ul class="person-chips person-tags">
            <profile-chip v-for="interest in user.interests" :key="interest" :chipText="interest"></profile-chip>
          </ul>
        </section>
        <section class="section section-music">
          <h4 class="section-title">{{ titles.music }}</h4>
          <ul class="person-chips person-music">
            <profile-chip v-for="artist in user.music" :key="artist" :chipText="artist"></profile-chip>
          </ul>
        </section>
      </div>
    </main>
    <profile-menu></profile-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ProfileMenu from '@/components/ProfileMenu'
import ProfileChip from '@/components/ProfileChip'
import AppButton from '@/components/AppButton'
import ProfileAvatar from '@/components/ProfileAvatar'

export default {
  name: 'profile-page',
  components: { ProfileMenu, ProfileChip, AppButton, ProfileAvatar },
  computed: mapState(['user']),
  mounted() {
    console.log(this.user)
  },
  data() {
    return {
      titles: {
        about: 'Обо мне:',
        interests: 'Интересы:',
        music: 'Я слушаю:'
      },
      buttons: [
        {
          icon: 'block',
          id: 'block'
        },
        {
          icon: 'thumb_up',
          id: 'like',
          isOutlined: true
        },
        {
          icon: 'create',
          id: 'message',
          isOutlined: true
        },
        {
          icon: 'arrow_forward',
          id: 'skip'
        }
      ]
    }
  }
}
</script>
