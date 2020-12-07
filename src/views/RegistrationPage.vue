<template>
  <div class="auth-wrapper">
    <div class="auth-body">
      <h3 class="auth-title">Регистрация</h3>
      <form @submit.prevent="sendUserData" method="post" class="auth-form" autocomplete="on">
        <app-input
          v-for="input in inputsArr"
          :key="input.labelId"
          :inputTypeProp="input.inputType"
          :isRequired="input.isRequired"
          :labelId="input.labelId"
          :labelText="input.labelText"
          :isOutlined="true"
          iconClass="before"
          :icon="input.icon"
          @input="isValid"
          v-model="user[input.dataPropName]"
        />
        <app-button :isDisabled="!isValidated" class="btn btn-send" type="submit">Зарегестрироваться</app-button>
      </form>
      <p class="divider">Уже зарегестрированы?</p>
      <app-button class="btn btn-outlined" @click="redirectToLoginPage">Войти</app-button>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'

import { getRandomHex } from '@/utils'

export default {
  components: { AppInput, AppButton },
  data() {
    return {
      isValidated: false,
      user: {
        email: '',
        username: '',
        password: '',
        repeatedPassword: ''
      },
      inputsArr: [
        {
          dataPropName: 'email',
          isRequired: true,
          inputType: 'email',
          labelText: 'Email',
          labelId: getRandomHex(2 ** 10, 2 ** 32),
          icon: 'email'
        },
        {
          dataPropName: 'username',
          isRequired: true,
          labelText: 'Имя пользователя',
          labelId: getRandomHex(2 ** 10, 2 ** 32),
          icon: 'account_circle'
        },
        {
          dataPropName: 'password',
          isRequired: true,
          inputType: 'password',
          labelText: 'Пароль',
          labelId: getRandomHex(2 ** 10, 2 ** 32),
          icon: 'lock'
        },
        {
          dataPropName: 'repeatedPassword',
          isRequired: true,
          inputType: 'password',
          labelText: 'Повторите пароль',
          labelId: getRandomHex(2 ** 10, 2 ** 32),
          icon: 'lock'
        }
      ]
    }
  },
  methods: {
    sendUserData() {
      if (this.isValid()) {
        this.$load(async () => {
          const res = await this.$api.auth.signUp({
            email: this.user.email,
            username: this.user.username,
            password: this.user.password
          })

          if (res.status === 201 || res.status === 200) {
            this.$router.push({ name: 'login' })
          }
          console.log(res.data)
        })
      } else {
        console.log('Incorrect inputs data')
      }
    },
    isValid() {
      this.isValidated =
        this.user.email.trim() &&
        this.user.username.trim() &&
        this.user.password === this.user.repeatedPassword &&
        this.user.password?.length > 7
          ? true
          : false
      return this.isValidated
    },
    redirectToLoginPage() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/auth_page';
</style>
