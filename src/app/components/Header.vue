<template>
  <header>
    <div class="wrapper">
      <h1>{{ GlobalStore.title }}</h1>
      <router-link :to="{name: 'stats'}">STATS</router-link>
    </div>
  </header>
</template>

<script>
  import GlobalStore from '../store/GlobalStore';

  export default {
    name: 'Header',
    data() {
      return {
        GlobalStore
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .router-link-active {
    display: none;
  }

  a:hover {
    opacity: .7;
  }

  h1 {
    display: inline-block;
  }
</style>
