export const saveStatePlugin = store => {
  store.subscribe((_, state) => localStorage.setItem('state', JSON.stringify(state)))
}

const rnd = (min, max) => Math.floor(Math.random() * (max - min) + min)
const LIGHTEST_COLOR_VALUE = 2744000
const DARKEST_COLOR_VALUE = 12167000

export const getRandomColor = () => `#${rnd(LIGHTEST_COLOR_VALUE, DARKEST_COLOR_VALUE).toString(16)}`
