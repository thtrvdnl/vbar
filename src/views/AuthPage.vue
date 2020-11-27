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
function fetchConfig() {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: 'SegaHAA',
    email: 'ssge@a.com', password: 'hosspa12345'})
  }
    fetch(URL, requestOptions)
    .then(response => response.json())
}

export default {
  methods: {
    async btnClick() {
      fetchConfig()
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
