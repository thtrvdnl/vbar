<template>
  <profile-layout>
    <main class="main">
      <h2 class="main-title">Редактирование профиля</h2>
      <div class="main-body">
        <form @submit.prevent="onSubmit" class="main-form">
          <app-input
            v-for="input of inputArr"
            :key="input.dataPropName"
            :labelText="input.labelText"
            :inputValue="input.inputValue"
            :dataPropName="input.dataPropName"
            @input="onInput"
            @icon-click="onIconClick"
          ></app-input>
          <div class="checkboxes-wrapper">
            <h3 class="checkboxes-title">Beer grades</h3>
            <app-checkbox>Dark</app-checkbox>
          </div>
          <div class="btns-wrapper">
            <app-button type="submit" class="btn btn-send">Сохранить</app-button>
          </div>
        </form>
      </div>
    </main>
  </profile-layout>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '@/components/AppButton.vue'
import AppInput from '@/components/AppInput.vue'
import AppCheckbox from '@/components/AppCheckbox.vue'
import ProfileLayout from '@/components/ProfileLayout.vue'

import { getRandomHex } from '@/utils'

export default {
  name: 'edit-profile-page',
  components: { ProfileLayout, AppInput, AppButton, AppCheckbox },
  computed: {
    ...mapState({
      // currentUser: state => state.user
    })
  },
  data() {
    return {
      newUserData: {},
      inputArr: [
        {
          dataPropName: 'email',
          labelText: 'Email',
          inputValue: this.$store.state.user.email,
          inputTypeProp: 'email',
          isRequired: true
        },
        {
          dataPropName: 'username',
          labelText: 'Имя пользователя',
          inputValue: this.$store.state.user.username,
          inputTypeProp: 'text',
          isRequired: true
        },
        {
          dataPropName: 'phone',
          labelText: 'Номер телефона',
          inputValue: this.$store.state.user.phone,
          inputTypeProp: 'tel'
        },
        {
          dataPropName: 'firstName',
          labelText: 'Имя',
          inputValue: this.$store.state.user.firstName,
          inputTypeProp: 'text',
          isRequired: true
        },
        {
          dataPropName: 'lastName',
          labelText: 'Фамилия',
          inputValue: this.$store.state.user.lastName,
          inputTypeProp: 'text'
        }
      ],
      checkboxArr: [{}]
    }
  },
  methods: {
    onIconClick(propName) {
      console.log(propName)
    },
    onInput(str, propName) {
      this.newUserData[propName] = str
    },
    async onSubmit() {
      if (Object.keys(this.newUserData).length) {
        const res = await this.$store.dispatch('UPDATE_PROFILE', this.newUserData)
        console.log(res)
      }
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
  &-form {
    & > * {
      padding-bottom: 35px;
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
}

.checkboxes {
  &-title {
    text-align: left;
    font-size: $lFontSize;
  }
  &-wrapper {
    padding: 0 10px;
  }
}
</style>
