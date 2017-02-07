<template>
  <div class="wrapper">
    <div class="tables">
      <div v-for="table in maxTable">
        <router-link :to="{name: 'practice', params: {id: table}}">
          <div class="table">{{ table }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import GlobalStore from '../store/GlobalStore';
  import {maxTable} from '../store/CalculusStore';

  export default {
    name: 'Tables',
    data() {
      return {
        maxTable
      }
    },
    created() {
      GlobalStore.title = `Tables d'apprentissage`;
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../main.scss";

  .tables {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & > div {
      margin: .5em;
    }
  }

  .table {
    width: 130px;
    height: 80px;
    background-color: $yellow-color;
    border: 1px solid #DDD;
    border-radius: 4px;
    font-size: 1.9em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow .1s;

    &:hover {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);
      border-color: transparent;
    }
  }
</style>
