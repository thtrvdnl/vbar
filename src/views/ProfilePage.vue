<template>
  <div class="wrapper">
    <main class="main">
      <profile-avatar :imageLink="user.imageLink" :userName="user.name" :userAge="user.age"></profile-avatar>
      <div class="main-body">
        <section class="section section-actions">
          <div class="buttons-wrapper">
            <profile-button
              v-for="button in buttons"
              :key="button.id"
              :buttonId="button.id"
              :buttonType="button.type"
              :isOutlined="button.isOutlined"
            />
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
    <app-menu></app-menu>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu'
import ProfileChip from '@/components/ProfileChip'
import ProfileButton from '@/components/ProfileButton'
import ProfileAvatar from '@/components/ProfileAvatar'

export default {
  components: { AppMenu, ProfileChip, ProfileButton, ProfileAvatar },
  data() {
    return {
      titles: {
        about: 'Обо мне:',
        interests: 'Интересы:',
        music: 'Я слушаю:'
      },
      user: {
        name: 'Кидала',
        age: 33,
        imageLink:
          'https://sun9-22.userapi.com/impf/vX8WjY7YpW-_ju0zJzIyKFARF8VUybaJqLGxIw/x8c8-vuseZg.jpg?size=960x960&quality=96&proxy=1&sign=d196759d085c6005493a8ff2814c07a7',
        about:
          'Повседневная практика показывает, что сложившаяся структура организации требует от нас системного анализа ключевых компонентов планируемого обновления. Задача организации, в особенности же реализация намеченного плана развития требует от нас системного анализа системы обучения кадров, соответствующей насущным потребностям! Значимость этих проблем настолько очевидна, что новая модель организационной деятельности создаёт предпосылки качественно новых шагов для системы масштабного изменения ряда параметров? Не следует, однако, забывать о том, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание направлений прогрессивного развития?',
        interests: ['Football', 'CS:GO', 'Sport', 'Cars', 'IT'],
        music: ['LSP', 'Kanye West']
      },
      buttons: [
        {
          type: 'block',
          id: 'block'
        },
        {
          type: 'thumb_up',
          id: 'like',
          isOutlined: true
        },
        {
          type: 'create',
          id: 'message',
          isOutlined: true
        },
        {
          type: 'arrow_forward',
          id: 'skip'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/fonts';
@import '../assets/reset';
@import '../assets/vars';
@import '../assets/main';

body {
  background-color: $iconDark;
}

.wrapper {
  position: relative;
  background-color: $mainBg;
  min-width: $minWidth;
  min-height: $defHeight;
  max-width: $maxWidth;
  margin: 0 auto;
  padding: 0 0 30px 0;
  box-shadow: 0 0 15px 3px $dark-25;
}

// @media
@import '../assets/not_mobile';
</style>
