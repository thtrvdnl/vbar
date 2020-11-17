import { createStore } from 'vuex'
import { saveStatePlugin } from '@/utils'

const initialState = {
  user: {
    avatar: 'https://sun1-89.userapi.com/c639119/v639119185/453f7/njy02C7tOgY.jpg',
    name: 'Олег',
    age: 19,
    about: `Повседневная практика показывает, что сложившаяся структура организации требует от нас системного анализа
    ключевых компонентов планируемого обновления. Задача организации, в особенности же реализация намеченного
    плана развития требует от нас системного анализа системы обучения кадров, соответствующей насущным
    потребностям! Значимость этих проблем настолько очевидна, что новая модель организационной деятельности
    создаёт предпосылки качественно новых шагов для системы масштабного изменения ряда параметров? Не следует,
    однако, забывать о том, что дальнейшее развитие различных форм деятельности в значительной степени
    обуславливает создание направлений прогрессивного развития?`,
    interests: ['Football', 'CS:GO', 'Sport', 'Cars', 'IT'],
    musics: ['LSP', 'Kanye West']
  }
}

const currentState = JSON.parse(localStorage.getItem('state')) || initialState

export default createStore({
  plugins: [saveStatePlugin],
  state: currentState,
  mutations: {},
  getters: {}
})
