// @flow

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Categories from './components/Categories.vue';
import Practice from './components/Practice.vue';
import Tables from './components/Tables.vue';
import Stats from './components/Stats.vue';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Categories},
    {path: '/tables', name: 'tables', component: Tables},
    {path: '/apprendre/:id', name: 'practice', component: Practice, props: true},
    {path: '/stats', name: 'stats', component: Stats}
  ]
});
