const home = {
  template: '<h1>Accueil</h1>'
};

const learn  = {
  template: '<h1>Apprentissage</h1>'
};

const learnTable = {
  template: `
    <div>
      <h1>Apprendre la table de {{ $route.params.table }}</h1>
      <ul>
        <li v-for="n in store.highestTable">{{ n }}</li> 
      </ul>
    </div>
  `,
  data: () => {store}
};

const evaluation = {
  template: '<h1>Evaluation</h1>'
};

const store = {
  message: 'Hello',
  highestTable: 10
};

const router = new VueRouter({
  routes: [
    {path: '/', name: 'home', component: home},
    {path: '/apprendre', name: 'learn', component: learn},
    {path: '/apprendre/:table', name: 'learn-table', component: learnTable },
    {path: '/evaluation', name: 'evaluation', component: evaluation}
  ]
});

new Vue({
  el: '#app',
  data: {store},
  router
});
