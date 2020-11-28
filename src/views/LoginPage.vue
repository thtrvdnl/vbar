<template>
  <div class="auth-wrapper">
    <div class="auth-body">
      <h3 class="auth-title">Авторизация</h3>
      <form @submit.prevent="sendUserData" method="post" class="auth-form" autocomplete="on">
        <app-input
          v-for="input in inputsArr"
          :key="input.labelId"
          :dataPropName="input.dataPropName"
          :isRequired="input.isRequired"
          :inputTypeProp="input.inputType"
          :labelText="input.labelText"
          :icon="input.icon"
          :isOutlined="true"
          iconClass="before"
          @inputChange="inputChange"
          ><i
            v-if="input.icon"
            :class="`input-icon input-icon-before material-icons${input.isOutlined ? '-outlined' : ''}`"
            >{{ input.icon }}</i
          ></app-input
        >
        <app-button class="btn btn-send" :isDisabled="!isValidated" type="submit">Войти</app-button>
        <p @click="$router.push('/')" class="divider">или</p>
        <app-button @click="redirectToRegisterPage" class="btn btn-outlined">Зарегестрироваться</app-button>
      </form>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'

import { getRandomHex } from '@/utils'

const URL = 'http://localhost:8000/auth/jwt/create/'
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
      username: '',
      password: '',
      isValidated: false,
      inputsArr: [
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
        }
      ]
    }
  },
  methods: {
    async sendUserData() {
      this.checkValidation()
      if (this.isValidated) {
        const bodyData = {
          username: this.username,
          password: this.password
        }
        try {
          const response = await fetch(URL, fetchConfig(bodyData))
          const data = await response.json()

          console.log(data)
          if (0) {
            this.$router.push('/')
          }
        } catch (error) {}
      }
    },
    inputChange(str, dataPropName) {
      this[dataPropName] = str
      this.checkValidation()
    },
    checkValidation() {
      this.isValidated = this.username.trim() && this.password.trim().length > 7 ? true : false
    },
    redirectToRegisterPage() {
      this.$router.push({ name: 'registration' })
    }
  }
}
</script>

<style lang="scss">
@import '../assets/auth_page';
</style>
