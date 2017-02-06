<template>
  <app-root>
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </app-root>
</template>

<script>
  import AppHeader from './components/Header.vue';
  import AppFooter from './components/Footer.vue';

  export default {
    components: {
      AppHeader,
      AppFooter
    }
  };
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: #EFEFEF;
    color: #353535;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
  }

  .wrapper {
    display: block;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
    flex: 1;
  }

  app-root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    display: flex;
    flex: 1;
  }

  h1,
  h2,
  h3 {
    font-weight: 400;
  }
</style>
