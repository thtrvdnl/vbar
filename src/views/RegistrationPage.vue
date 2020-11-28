<template>
  <div class="auth-wrapper">
    <div class="auth-body" @submit.prevent="sendUserData">
      <h3 class="auth-title">Регистрация</h3>
      <form @submit.prevent="" method="post" class="auth-form" autocomplete="on">
        <app-input
          v-for="input in inputsArr"
          :key="input.labelId"
          :inputTypeProp="input.inputType"
          :isRequired="input.isRequired"
          :labelId="input.labelId"
          :labelText="input.labelText"
          :dataPropName="input.dataPropName"
          @inputChange="inputChange"
        />
        <app-button :isDisabled="!isValidated" class="btn btn-send" type="submit">Зарегестрироваться</app-button>
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
          labelId: getRandomHex(2 ** 10, 2 ** 32)
        },
        {
          dataPropName: 'username',
          isRequired: true,
          labelText: 'Имя пользователя',
          labelId: getRandomHex(2 ** 10, 2 ** 32)
        },
        {
          dataPropName: 'password',
          isRequired: true,
          inputType: 'password',
          labelText: 'Пароль',
          labelId: getRandomHex(2 ** 10, 2 ** 32)
        },
        {
          dataPropName: 'repeatedPassword',
          isRequired: true,
          inputType: 'password',
          labelText: 'Повторите пароль',
          labelId: getRandomHex(2 ** 10, 2 ** 32)
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
    }
  }
}
</script>

<style lang="scss">
@import '../assets/vars';

body {
  background-color: $iconDark;
}

.auth {
  &-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-body {
    width: 100%;
    height: 100vh;
    background-color: $mainBg;
    font-size: 20px;
    padding: 15px 20px;
  }
  &-title {
    font-size: 28px;
    margin-bottom: 25px;
    color: $textDark;
    text-align: center;
  }
  &-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    text-align: center;
  }
}

.input-wrapper {
  margin-bottom: 30px;
}

@media screen and (min-width: $maxWidth) {
  .auth {
    &-body {
      width: 500px;
      height: 600px;
      border-radius: $appBorderRadius;
      box-shadow: 0 0 20px 0 $dark-25;
      padding: 25px 35px;
    }
    &-title {
      margin-bottom: 40px;
    }
  }
  .input-wrapper {
    margin-bottom: 40px;
  }
}
</style>
