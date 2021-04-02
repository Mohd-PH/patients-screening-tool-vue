<template>
  <div id="app">
    <WelcomeAlert></WelcomeAlert>
  </div>
</template>

<script>
import WelcomeAlert from './components/WelcomeAlert'

export default {
  name: 'app',
  components: {
    WelcomeAlert
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
