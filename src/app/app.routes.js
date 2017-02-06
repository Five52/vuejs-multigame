// @flow

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Categories from './components/Categories.vue';
import Tables from './components/Tables.vue';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Categories},
    {path: '/tables', name: 'tables', component: Tables}
  ]
});
