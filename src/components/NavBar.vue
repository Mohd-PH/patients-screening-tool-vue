<template>
  <div class="WelcomeAlert">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">Patients screening tool</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link tag="b-nav-item" to="/">Home</router-link>
          <router-link tag="b-nav-item" to="/about">About</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
