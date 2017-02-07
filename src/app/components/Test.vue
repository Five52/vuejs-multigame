<template>
  <div class="wrapper">
    <game />
  </div>
</template>

<script>
  import Game from './game/game.vue';
  import GlobalStore from '../store/GlobalStore';

  export default {
    name: 'Test',
    components: {
      Game
    },
    created() {
      GlobalStore.title = 'Évaluation';
    }
  };
</script>
