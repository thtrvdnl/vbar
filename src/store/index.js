import $cookies from 'vue-cookies'

import { createStore } from 'vuex'
import { saveStatePlugin } from '@/utils'

const initialState = {
  user: {
    imageLink: 'https://sun1-89.userapi.com/c639119/v639119185/453f7/njy02C7tOgY.jpg',
    name: 'Sergey',
    age: 21,
    about: `Повседневная практика показывает, что сложившаяся структура организации требует от нас системного анализа
    ключевых компонентов планируемого обновления. Задача организации, в особенности же реализация намеченного
    плана развития требует от нас системного анализа системы обучения кадров, соответствующей насущным
    потребностям! Значимость этих проблем настолько очевидна, что новая модель организационной деятельности
    создаёт предпосылки качественно новых шагов для системы масштабного изменения ряда параметров? Не следует,
    однако, забывать о том, что дальнейшее развитие различных форм деятельности в значительной степени
    обуславливает создание направлений прогрессивного развития?`,
    interests: ['Football', 'CS:GO', 'Sport', 'Cars', 'IT'],
    music: ['LSP', 'Kanye West']
  }
}

const localState = JSON.parse(localStorage.getItem('state'))
if (!localState) {
  localStorage.setItem('state', JSON.stringify(initialState))
}

const currentState = JSON.parse(localStorage.getItem('state'))

export default createStore({
  plugins: [saveStatePlugin],
  state: {
    isAuthorized: false,
    ...currentState
  },
  mutations: {
    SET_COOKIE(_, { key, value }) {
      $cookies.set(key, value)
    },
    SET_USER_DATA({ state }, currentUserData) {
      const accessToken = $cookies.get('access_token')

      if (accessToken) {
        state.user = currentUserData
        state.isAuthorized = true
      }
    }
  },
  getters: {}
})
