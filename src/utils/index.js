export const saveStatePlugin = store => {
  store.subscribe((_, state) => localStorage.setItem('state', JSON.stringify(state)))
}

const rnd = (min, max) => Math.floor(Math.random() * (max - min) + min)
const LIGHTEST_COLOR_VALUE = 2744000
const DARKEST_COLOR_VALUE = 12167000

export const getRandomHex = (min = 2 ** 2, max = 2 ** 24) => `${rnd(min, max).toString(16)}`
export const getRandomColor = () => `#${getRandomHex(LIGHTEST_COLOR_VALUE, DARKEST_COLOR_VALUE)}`
export const reverseString = str =>
  str
    .split('')
    .reverse()
    .join('')

export const toCamel = s =>
  s.replace(/([-_][a-z])/gi, $1 =>
    $1
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  )

export const toSnake = s => s.replace(/[A-Z]/g, l => `_${l.toLowerCase()}`)

export const keysToSnake = obj => {
  const result = {}
  Object.keys(obj).forEach(k => (result[toSnake(k)] = obj[k]))
  return result
}

export const convertKeys = (obj, callback) => {
  const result = {}
  Object.keys(obj).forEach(k => (result[callback(k)] = obj[k]))
  return result
}

export const addJwt = (instance, accessToken) => {
  instance.defaults.headers.common['Authorization'] = `JWT ${accessToken}`
  return instance
}
