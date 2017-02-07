<template>
  <table>
    <tr>
      <td></td>
      <td v-for="table in maxTable">{{ table }}</td>
    </tr>
    <tr v-for="table in maxTable">
      <td>{{ table }}</td>
      <td v-for="table in maxTable"></td>
    </tr>
  </table>
</template>

<script>
  import GlobalStore from '../store/GlobalStore';
  import {maxTable} from '../store/CalculusStore';

  export default {
    name: 'Stats',
    data() {
      return {
        maxTable
      }
    },
    created() {
      GlobalStore.title = 'Statistiques'
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../main.scss";
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 20px;
    height: 20px;
    text-align: center;
  }
</style>
