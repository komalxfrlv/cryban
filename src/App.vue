<template>
  <nav v-if="logged">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/auth">Auth</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const logged = ref(false);

    return { logged }
  }
}
</script>

<style lang="scss">
body {
  background: #F6F9FF;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  background: #F6F9FF;
}
</style>
