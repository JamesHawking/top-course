import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/List';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Landing from '@/components/Landing';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
  ],
});
