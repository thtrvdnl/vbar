<template>
  <profile-layout>
    <main class="main">
      <h2 class="main-title">Редактирование профиля</h2>
      <div class="main-body">
        <app-input
          v-for="input of inputArr"
          :key="input.dataPropName"
          :labelText="input.labelText"
          :inputValue="input.inputValue"
          :dataPropName="'tempName'"
          @icon-click="onIconClick"
        ></app-input>
        <div class="btns-wrapper">
          <app-button class="btn btn-send">Сохранить</app-button>
        </div>
      </div>
    </main>
  </profile-layout>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import ProfileLayout from '@/components/ProfileLayout.vue'

import { getRandomHex } from '@/utils'

export default {
  components: { ProfileLayout, AppInput, AppButton },
  data() {
    const currentUser = this.$store.state.user
    return {
      newUserData: {},
      inputArr: [
        {
          dataPropName: 'email',
          labelText: 'Email',
          inputValue: currentUser.email,
          inputTypeProp: 'email',
          isRequired: true
        },
        {
          dataPropName: 'username',
          labelText: 'Имя пользователя',
          inputValue: currentUser.username,
          inputTypeProp: 'text',
          isRequired: true
        },
        {
          dataPropName: 'phone',
          labelText: 'Номер телефона',
          inputValue: currentUser.phone,
          inputTypeProp: 'tel'
        },
        {
          dataPropName: 'firstName',
          labelText: 'Имя',
          inputValue: currentUser.firstName,
          inputTypeProp: 'text',
          isRequired: true
        },
        {
          dataPropName: 'lastName',
          labelText: 'Фамилия',
          inputValue: currentUser.lastName,
          inputTypeProp: 'text'
        }
      ]
    }
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
  &-body {
    & > * {
      padding-bottom: 35px;
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
}
</style>
