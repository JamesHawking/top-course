<template>
  <div class="container" style="margin-top: 36px">
    <div class="col-6 centered">
      <h1 class="login">Login</h1>
      <form>
        <div class="form-group">
          <label class="form-label" for="exampleInputEmail1">Email address</label>
          <input class="form-input input-lg" v-model="email" type="email" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label class="form-label" for="exampleInputPassword1">Password</label>
          <input class="form-input input-lg" v-model="password" type="password" placeholder="Password">
        </div>
        <button v-on:click="login" type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div v-html="error" />
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthService';

export default {
  name: 'hello',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });

        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
