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
          :dataPropName="input.dataPropName"
          :isOutlined="true"
          iconClass="before"
          :icon="input.icon"
          @inputChange="inputChange"
        />
        <app-button :isDisabled="!isValidated" class="btn btn-send" type="submit">Зарегестрироваться</app-button>
        <p class="divider">или</p>
        <app-button class="btn btn-outlined" @click="redirectToLoginPage">Войти</app-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'

import { getRandomHex } from '@/utils'

const URL = 'http://localhost:8000/auth/users/'
function fetchConfig(bodyData) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }
}

export default {
  components: { AppInput, AppButton },
  data() {
    return {
      isValidated: false,
      email: '',
      username: '',
      password: '',
      repeatedPassword: '',
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
    async sendUserData() {
      if (this.isValidated) {
        const userData = {
          email: this.email,
          username: this.username,
          password: this.password
        }

        try {
          const response = await fetch(URL, fetchConfig(userData))
          const data = await response.json()

          if (data.id) {
            console.log('You was registrated successfully, your data is:', data)
            this.email = this.password = this.repeatedPassword = this.username = ''
            this.isValidated = false
            this.$router.push('/')
          } else {
            console.log('Something went wrong', data)
          }
        } catch (error) {
          console.log(`Fetch error: ${error}`)
        }
      } else {
        console.log('Incorrect inputs data')
      }
    },
    inputChange(str, dataPropName) {
      this[dataPropName] = str
      this.checkValidation()
    },
    checkValidation() {
      this.isValidated =
        this.email.trim() && this.username.trim() && this.password === this.repeatedPassword && this.password.length > 7
          ? true
          : false
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
