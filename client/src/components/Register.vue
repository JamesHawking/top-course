<template>
  <div class="layout">
    <span>A</span>
    <Row type="flex" justify="center">
      <Input v-model="login" placeholder="Login..." style="width: 300px"></Input>
    </Row>
    <Row type="flex" justify="center">
      <Input v-model="password" placeholder="Login..." style="width: 300px"></Input>
    </Row>
    <Button type="primary" icon="checkmark-round" @click="register">
        <span>Click me!</span>
    </Button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthService';

export default {
  name: 'hello',
  data() {
    return {
      login: '',
      password: '',
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(response);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        height: 100vh;
    }
</style>
