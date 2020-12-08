<template>
  <profile-layout>
    <main class="main">
      <h2 class="main-title">Редактирование профиля</h2>
      <div class="main-body">
        <app-input
          :disabled="true"
          labelText="Имя пользователя"
          iconClass="after-out"
          icon="edit"
          placeholder=""
          :inputValue="user.username"
          :dataPropName="'tempName'"
          @iconClick="onIconClick"
        ></app-input>
      </div>
    </main>
  </profile-layout>
</template>

<script>
import { mapState } from 'vuex'
import AppInput from '../components/AppInput.vue'
import ProfileLayout from '../components/ProfileLayout.vue'

export default {
  components: { ProfileLayout, AppInput },
  computed: { ...mapState(['user']) },
  data() {
    return {}
  },
  methods: {
    onIconClick(propName) {
      console.log(propName)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/vars';

.main {
  &-title {
    text-align: center;
    font-size: $xlFontSize;
    padding: 20px 10px;
  }
}
</style>
