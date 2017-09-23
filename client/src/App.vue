<template>
  <div id="app">
    <header class="navbar bg-light nav-shadow">
      <section class="navbar-section">
        <router-link class="btn btn-link" to="register">Register</router-link>
        <router-link class="btn btn-link" to="login">Login</router-link>
      </section>
      <section class="navbar-center">
        <!-- centered logo or brand -->
      </section>
      <section class="navbar-section">
        <a href="#" class="btn btn-link">Twitter</a>
        <a href="#" class="btn btn-link">GitHub</a>
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
};
</script>

<style>
.nav-shadow {
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, .16);
}

.bg-light {
  background-color: #fff!important;
}
</style>
  // background-color: #f1f1f1;