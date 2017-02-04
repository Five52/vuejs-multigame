import Vue from 'vue';
import {router} from './app/app.routes.js';
import AppComponent from './app/app.component.vue';
Vue.config.ignoredElements = ['app-root'];

export default new Vue({
  el: 'app-root',
  router,
  components: {
    'app-root': AppComponent
  },
  render: h => h('app-root')
});
