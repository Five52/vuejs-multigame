<template>
  <div class="item" v-if="data">
    <span class="bg fast" :style="{width: fast + '%'}"></span>
    <span class="bg good" :style="{width: percent + '%'}"></span>
    <span class="bg bad" :style="{width: 100 - percent + '%'}"></span>
    <div class="info">
      <span>{{ percent }}%</span>
      <span class="sub">{{ correct }} / {{ data.nbOperation }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Stats',
    props: ['data'],
    computed: {
      fast() {
        return Number((this.data.correctAnswers.fast / this.data.nbOperation).toFixed(2)) * 100
      },
      good() {
        return Number((this.data.correctAnswers.good / this.data.nbOperation).toFixed(2)) * 100
      },
      correct() {
        return this.data.correctAnswers.good + this.data.correctAnswers.fast;
      },
      percent() {
        return Number(((this.data.correctAnswers.good + this.data.correctAnswers.fast) / this.data.nbOperation).toFixed(2)) * 100
      }
    }
  };
</script>

<style lang="scss" scoped>
  .item {
    position: relative;
    height: 100%;
  }
  .info {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-flow: column;

    .sub {
      font-size: .8em;
    }
  }
  .bg {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    &.fast {
      z-index: 0;
      left: 0;
      background: #40c057;
    }
    &.good {
      left: 0;
      background: #fab005;
    }
    &.bad {
      right: 0;
      background: #fa5252;
    }
  }
</style>
