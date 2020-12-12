import { getRandomHex } from '@/utils'

export default {
  data() {
    return {
      isValidated: false,
      user: {
        username: '',
        password: ''
      },
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
  }
}
