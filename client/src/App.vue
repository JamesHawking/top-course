<template>
  <div id="app">
    <header class="navbar">
      <section class="navbar-section">
        <router-link class="btn btn-link" to="register">Register</router-link>
        <router-link class="btn btn-link" to="login">Login</router-link>
                <router-link class="btn btn-link" to="List">List</router-link>
      </section>
      <section class="navbar-center">
        <img class="img-fit-contain" style="max-width: 100%;" src="">
      </section>
      <section class="navbar-section">
        <a href="#" class="btn btn-link">Twitter</a>
        <a href="#" class="btn btn-link">GitHub</a>
        <button class="btn" v-if="$store.state.isUserLoggedIn" @click="logout">Logout</button>
      </section>
    </header>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({
        name: 'root',
      });
    },
  },
};
</script>

<style>
.nav-shadow {
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, .16);
}

.bg-light {
  background-color: #fff!important;
}

.navbar .navbar-center {
  align-items: initial;
}

.nav-width {}

body {
  -webkit-font-smoothing: antialiased;
}
</style>
  // background-color: #f1f1f1;