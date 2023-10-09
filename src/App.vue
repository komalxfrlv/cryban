<template>
  <nav v-if="logged">
    <div class="main-logo">LOGO</div>
    <div class="navigation">
      <router-link to="/logined">Account</router-link>
      <router-link to="/SavingVaults">Saving Vaults</router-link>
      <router-link to="/StakeEarn">Stake & Earn</router-link>
      <router-link to="/Affiate">Affiate</router-link>
      <router-link to="/CryptoCard">Crypto Card</router-link>
    </div>
    <div class="personal-cabinet">
      <text>Personal Cabinet</text>
      <Icon class="personal-icon" icon="raphael:arrowdown" />
    </div>
  </nav>
  <router-view/>
</template>

<script>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';

export default {
  components:{
    Icon,
  },
  setup() {
    const logged = ref(true);

    return { logged }
  }
}
</script>

<style lang="scss">
:root{
  --link-active-text: #5175d0;
  --link-hover-text: #314985;
  // --gray-color: #27315e80;
  --gray-color: #72758080;
  --black-color: #171717;
  --valuta-color: #1f1e3d;

  --main-content-width: 80vw;
  --main-container-top-spacing: 2vh;
}

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
  padding: 16px 8px;
  // position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1000;
  font-weight: bold;
  
  a {
    font-weight: bold;
    color: var(--black-color);
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .main-logo{
    width: 5%;
  }
  background: #F6F9FF;
  .navigation{
    width: 74%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .personal-cabinet{
    width: 11%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text{
      color: var(--black-color);
    }
    .personal-icon{
      font-size: 20px;
    }
  }
}
</style>
