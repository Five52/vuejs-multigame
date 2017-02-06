<template>
  <header>
    <div class="wrapper">
      <h1>{{ GlobalStore.title }}</h1>
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
