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

<style lang="scss" src="../main.scss"></style>
