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
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'Main',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
};
</script>
