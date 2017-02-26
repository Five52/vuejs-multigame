// @flow

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Categories from './components/Categories.vue';
import Practice from './components/Practice.vue';
import Test from './components/Test.vue';
import Tables from './components/Tables.vue';
import Stats from './components/Stats.vue';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/vue/', name: 'home', component: Categories},
    {path: '/vue/tables', name: 'tables', component: Tables},
    {path: '/vue/apprendre/:id', name: 'practice', component: Practice, props: true},
    {path: '/vue/evaluation', name: 'test', component: Test},
    {path: '/vue/stats', name: 'stats', component: Stats}
  ]
});
