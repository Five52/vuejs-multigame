<template>
  <div class="wrapper">
    <table>
      <tr>
        <td></td>
        <td v-for="table in maxTable">{{ table }}</td>
      </tr>
      <tr v-for="i in maxTable">
        <td>{{ i }}</td>
        <td v-for="j in maxTable">
          {{ CalculusStore.get }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import GlobalStore from '../store/GlobalStore';
  import CalculusStore from '../store/CalculusStore';
  import {maxTable} from '../store/CalculusStore';

  export default {
    name: 'Stats',
    data() {
      return {
        maxTable,
        CalculusStore
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
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>
