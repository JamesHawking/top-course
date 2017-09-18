<template>
  <div class="container" style="margin-top: 36px">
    <h1 class="login">Login</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button v-on:click="login" type="submit" class="btn btn-primary">Submit</button>
    </form>
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
        await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin-bottom: 36px;
}
</style>
