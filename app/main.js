import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import Home from './components/Home.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
