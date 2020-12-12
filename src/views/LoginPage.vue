<template>
  <div class="auth-wrapper">
    <div class="auth-body">
      <h3 class="auth-title">Авторизация</h3>
      <form @submit.prevent="sendUserData" method="post" class="auth-form" autocomplete="on">
        <app-input
          v-for="input in inputsArr"
          :key="input.labelId"
          :isRequired="input.isRequired"
          :inputTypeProp="input.inputType"
          :labelText="input.labelText"
          :icon="input.icon"
          :isOutlined="true"
          iconClass="before"
          @input="isValid"
          v-model="user[input.dataPropName]"
          ><i
            v-if="input.icon"
            :class="`input-icon input-icon-before material-icons${input.isOutlined ? '-outlined' : ''}`"
            >{{ input.icon }}</i
          ></app-input
        >
        <app-button class="btn btn-send" :isDisabled="!isValidated" type="submit">Войти</app-button>
      </form>
      <p @click="$router.push('/')" class="divider">Еще не зарегестрированы?</p>
      <app-button @click="redirectToRegisterPage" class="btn btn-outlined">Зарегестрироваться</app-button>
    </div>
  </div>
</template>

<script>
import getWithJwt from '@/api/get_with_jwt'

import AuthMixin from '@/mixins/AuthMixin'
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'

import { getRandomHex } from '@/utils'

export default {
  name: 'login-page',
  mixins: [AuthMixin],
  components: { AppInput, AppButton },
  data() {
    return {}
  },
  methods: {
    sendUserData() {
      if (this.isValid()) {
        this.$load(async () => {
          const res = await this.$api.auth.getAccessToken({
            username: this.user.username,
            password: this.user.password
          })

          if (res.status === 200 || res.status === 201) {
            this.$store.commit('SET_COOKIE', { key: 'access_token', value: res.data.access })
            this.getUserData(res.data)
          }
        })
      } else {
        console.error('WRONG INPUTS')
      }
    },
    getUserData({ access }) {
      this.$load(async () => {
        const res = await getWithJwt(access, 'auth/users/me/')

        if (res.status === 200 || res.status === 201) {
          this.getProfileData(access, res.data)
        }
      })
    },
    getProfileData(accessToken, { id }) {
      this.$load(async () => {
        const res = await getWithJwt(accessToken, `api/profile/${id}`)

        if (res.status === 200 || res.status === 201) {
          this.$store.commit('SET_USER_DATA', res.data)
          if (res.data.username) {
            this.$router.push(`/profile/${res.data.username}`)
          } else {
            console.error('Wrong data: ', res)
          }
        }
      })
    },
    isValid() {
      this.isValidated = this.user.username.trim() && this.user.password.trim()?.length > 7
      return this.isValidated
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
