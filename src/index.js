import Vue from 'vue';
import {router} from './app/app.routes.js';

import './index.scss';
import AppComponent from './app/app.component.vue';

export default new Vue({
  el: 'app-root',
  router,
  components: {
    'app-root': AppComponent
  },
  render: h => h('app-root')
});
