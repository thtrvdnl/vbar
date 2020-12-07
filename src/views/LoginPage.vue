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
import getWithJwt from '@/api/get_with_jwt'

import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'

import { getRandomHex } from '@/utils'

export default {
  components: { AppInput, AppButton },
  data() {
    return {
      isLoading: false,
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
    sendUserData() {
      this.checkValidation()
      if (this.isValidated) {
        this.isLoading = true
        this.$load(async () => {
          const res = await this.$api.auth.getAccessToken({
            username: this.username,
            password: this.password
          })

          if (res.status === 200 || res.status === 201) {
            this.$store.dispatch('SET_COOKIE', { key: 'access_token', value: res.data.access })
            this.getUserData(res.data)
          }
        })
      } else {
        console.error('WRONG INPUTS')
      }
    },
    getUserData({ access }) {
      this.isLoading = true
      this.$load(async () => {
        const res = await getWithJwt(access, 'auth/users/me/')

        if (res.status === 200 || res.status === 201) {
          this.getProfileData(access, res.data)
        }
        this.isLoading = false
      })
    },
    getProfileData(accessToken, { id }) {
      this.isLoading = true
      this.$load(async () => {
        const res = await getWithJwt(accessToken, `api/profile/${id}`)

        if (res.status === 200 || res.status === 201) {
          this.$router.push(`/profile/${res.data.username}`)
          this.$store.dispatch('SET_USER_DATA', res.data)
        }
        this.isLoading = false
      })
    },
    inputChange(str, dataPropName) {
      this[dataPropName] = str
      this.checkValidation()
    },
    checkValidation() {
      this.isValidated = this.username.trim() && this.password.trim()?.length > 7
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
