<template>
  <div class="wrapper">
    <game :table="id"/>
  </div>
</template>

<script>
  import Game from './game/game.vue';
  import GlobalStore from '../store/GlobalStore';

  export default {
    name: 'Practice',
    props: ['id'],
    components: {
      Game
    },
    created() {
      GlobalStore.title = 'Entrainement';
    }
  };
</script>
