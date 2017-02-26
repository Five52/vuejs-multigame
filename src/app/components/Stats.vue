<template>
  <div class="wrapper">
    <div class="info">
      <div class="dot fast">Bien répondu dans les temps</div>
      <div class="dot good">Bien répondu</div>
      <div class="dot bad">Mal répondu</div>
    </div>
    <table>
      <tr>
        <td></td>
        <td v-for="secondOperand in maxTable">{{ secondOperand }}</td>
      </tr>
      <tr v-for="firstOperand in maxTable">
        <td>{{ firstOperand }}</td>
        <td v-for="secondOperand in maxTable">
          <item :data="CS.getResults(firstOperand, secondOperand)"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import GlobalStore from '../store/GlobalStore';
  import CalculusStore from '../store/CalculusStore';
  import Item from './StatsItem.vue';
  import {maxTable} from '../store/CalculusStore';

  export default {
    name: 'Stats',
    components: {
      Item
    },
    data() {
      return {
        maxTable,
        CS: CalculusStore
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
    width: 100%;
    height: 100%;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 0;
  }

  .info {
    display: flex;
    margin-bottom: 5px;
  }

  .dot {
    margin-right: 10px;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      width: 15px;
      height: 15px;
      border-radius: 5px;
      display: inline-block;
      margin-right: 5px;
    }
    &.fast:before {
      background: #40c057;
    }
    &.good:before {
      background: #fab005;
    }
    &.bad:before {
      background: #fa5252;
    }
  }
</style>
