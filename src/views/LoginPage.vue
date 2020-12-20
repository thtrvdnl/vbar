<template>
  <div class="auth-wrapper">
    <div class="auth-body">
      <h3 class="auth-title">Авторизация</h3>
      <form @submit.prevent="signIn" method="post" class="auth-form">
        <app-input
          v-for="input in inputsArr"
          :key="input.labelId"
          :isRequired="input.isRequired"
          :inputTypeProp="input.inputType"
          :labelText="input.labelText"
          :icon="input.icon"
          :isOutlined="true"
          :autocomplete="true"
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
      <p class="divider">Еще не зарегестрированы?</p>
      <app-button @click="redirectToRegisterPage" class="btn btn-outlined">Зарегестрироваться</app-button>
    </div>
  </div>
</template>

<script>
import getWithJwt from '@/api/get_with_jwt'

import AuthMixin from '@/mixins/AuthMixin'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'

import { getRandomHex } from '@/utils'

export default {
  name: 'login-page',
  mixins: [AuthMixin],
  components: { AppInput, AppButton },
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      isValidated: false
    }
  },
  methods: {
    async signIn() {
      if (this.isValid()) {
        const username = await this.$store.dispatch('SEND_USER_DATA', {
          username: this.user.username,
          password: this.user.password
        })

        if (username) {
          this.$router.push({ name: 'profile', params: { username } })
        }
      } else {
        console.error('WRONG INPUTS')
      }
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
