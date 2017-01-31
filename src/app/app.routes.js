import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Categories from './components/Categories.vue';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Categories}
  ]
});
