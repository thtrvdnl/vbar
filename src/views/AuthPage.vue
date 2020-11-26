<template>
  <div class="auth-wrapper">
    <div class="auth-body">
      <form method="post">
        <div class="input-wrapper">
          <label for="user-email">Email</label>
          <input v-model="email" required id="user-email" type="email" class="input" />
        </div>
        <div class="input-wrapper">
          <label for="user-name">Имя пользователя</label>
          <input v-model="username" required id="user-name" type="text" class="input" />
        </div>
        <div class="input-wrapper">
          <label for="user-password">Пароль</label>
          <input v-model="password" required id="user-password" type="password" class="input" />
        </div>
        <div class="input-wrapper">
          <label for="user-repeated-password">Повторите пароль</label>
          <input v-model="repeatedPassword" required id="user-repeated-password" type="password" class="input" />
        </div>
      </form>
      <button @click="btnClick">send data</button>
    </div>
  </div>
</template>

<script>
const URL = 'http://localhost:8000/auth/users/'
// function fetchConfig(dataBody) {
//   return {
//     method: 'POST',
//     mode: 'no-cors',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(dataBody)
//   }
// }

export default {
  methods: {
    async btnClick() {
      if (this.password === this.repeatedPassword && /@/.test(this.email) && this.username.trim()) {
        var data = JSON.stringify({ email: 's@m.ru1', username: 'sig1a1', password: 'zxc123as1d' })

        var xhr = new XMLHttpRequest()
        xhr.withCredentials = true

        xhr.addEventListener('readystatechange', function() {
          if (this.readyState === 4) {
            console.log(this.responseText)
          }
        })

        xhr.open('POST', 'http://localhost:8000/auth/users/')
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.send(data)
      } else {
        console.log('Bad data')
      }
    }
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      repeatedPassword: ''
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
  }
}

.input {
  font-size: 18px;
}

@media screen and (min-width: $maxWidth) {
  .auth {
    &-body {
      width: 500px;
      height: 600px;
      border-radius: $appBorderRadius;
      box-shadow: 0 0 20px 0 $dark-25;
    }
  }
}
</style>
