<template>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isLoading: null
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: Montserrat, Calibri, Arial, sans-serif;
}

ul {
  list-style-type: none;
}

a {
  &,
  &:visited {
    color: rgb(20, 20, 20);
  }
  &:hover {
    color: rgb(120, 120, 120);
  }
  text-decoration: none;
}
</style>
