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
      </form>
      <p @click="$router.push('/')" class="divider">или</p>
      <app-button @click="redirectToRegisterPage" class="btn btn-outlined">Зарегестрироваться</app-button>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'

import { getRandomHex } from '@/utils'

const URL = 'http://localhost:8000/auth/jwt/create/'
const URL_AUTH = 'http://localhost:8000/auth/users/me/'
function fetchConfig(method, bodyData, jwtToken = null) {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (jwtToken) {
    config.headers['Authorization'] = `JWT ${jwtToken}`
  }
  if (bodyData) {
    config.body = JSON.stringify(bodyData)
  }
  return config
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
          const response = await fetch(URL, fetchConfig('POST', bodyData))
          const data = await response.json()

          if (data.access) {
            console.log(`Access Token is: ${data.access}, \n refresh token: ${data.refresh}`)
            this.jwtAuth(data)
          } else {
            console.log('Something went wrong: ', data)
          }
        } catch (error) {
          console.log(`Fetch error: ${error}`)
        }
      }
    },
    async jwtAuth({ access }) {
      const response = await fetch(URL_AUTH, fetchConfig('GET', null, access))
      const data = await response.json()

      console.log(data)
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
