<template>
  <div class="wrapper">
    <main class="main">
      <div class="banner">
        <img
          src="https://scontent-arn2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/121166260_823691025121572_1035172798211476107_n.jpg?_nc_ht=scontent-arn2-2.cdninstagram.com&_nc_cat=100&_nc_ohc=IG8vlX-bqnQAX-KBRoe&tp=1&oh=2e8296e38fb6bbf8d2e3613307f4e397&oe=5FE2E7A3"
          alt="Oleg"
          class="banner-img"
        />
        <div class="avatar-wrapper">
          <img
            src="https://scontent-arn2-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/121166260_823691025121572_1035172798211476107_n.jpg?_nc_ht=scontent-arn2-2.cdninstagram.com&_nc_cat=100&_nc_ohc=IG8vlX-bqnQAX-KBRoe&tp=1&oh=2e8296e38fb6bbf8d2e3613307f4e397&oe=5FE2E7A3"
            alt="Oleg"
            class="avatar"
          />
          <div class="person-wrapper">
            <h2 class="person-name">&nbsp;Олег</h2>
            <span class="person-age">, 19</span>
          </div>
        </div>
      </div>
      <div class="main-body">
        <section class="section section-actions">
          <div class="buttons-wrapper">
            <button id="block" class="btn btn-rounded"><i class="material-icons">block</i></button>
            <button id="like" class="btn btn-rounded"><i class="material-icons-outlined">thumb_up</i></button>
            <button id="message" class="btn btn-rounded"><i class="material-icons-outlined">create</i></button>
            <button id="skip" class="btn btn-rounded"><i class="material-icons">arrow_forward</i></button>
          </div>
        </section>
        <section class="section section-about">
          <h4 class="section-title">Обо мне:</h4>
          <p class="person-about">
            Повседневная практика показывает, что сложившаяся структура организации требует от нас системного анализа
            ключевых компонентов планируемого обновления. Задача организации, в особенности же реализация намеченного
            плана развития требует от нас системного анализа системы обучения кадров, соответствующей насущным
            потребностям! Значимость этих проблем настолько очевидна, что новая модель организационной деятельности
            создаёт предпосылки качественно новых шагов для системы масштабного изменения ряда параметров? Не следует,
            однако, забывать о том, что дальнейшее развитие различных форм деятельности в значительной степени
            обуславливает создание направлений прогрессивного развития?
          </p>
        </section>
        <section class="section section-interests">
          <h4 class="section-title">Интересы:</h4>
          <ul class="person-chips person-tags">
            <profile-chip v-for="interest in userInterests" :key="interest" :chipText="interest"></profile-chip>
          </ul>
        </section>
        <section class="section section-music">
          <h4 class="section-title">Я слушаю:</h4>
          <ul class="person-chips person-music">
            <profile-chip v-for="artist in userMusic" :key="artist" :chipText="artist"></profile-chip>
          </ul>
        </section>
      </div>
    </main>
    <app-menu></app-menu>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu'
import ProfileChip from '../components/ProfileChip.vue'

export default {
  components: { AppMenu, ProfileChip },
  data() {
    return {
      userInterests: ['Football', 'CS:GO', 'Sport', 'Cars', 'IT'],
      userMusic: ['LSP', 'Kanye West']
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
