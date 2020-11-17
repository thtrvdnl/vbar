export const saveStatePlugin = store => {
  store.subscribe((_, state) => localStorage.setItem('state', JSON.stringify(state)))
}
