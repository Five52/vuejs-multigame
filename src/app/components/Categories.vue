<template>
  <div class="wrapper">
    <div class="categories">
      <router-link :to="{name: 'tables'}">
        <div class="category learn">Apprentissage</div>
      </router-link>
      <div class="category test">Evaluation</div>
    </categories>
  </div>
</template>

<script>
  import GlobalStore from '../store/GlobalStore';

  export default {
    name: 'Categories',
    created() {
      GlobalStore.title = 'Multiply';
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../main.scss";

  .categories {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 75%;
  }

  .learn {
    background-color: $primary-color;
    color: $secondary-color;
  }

  .test {
    background-color: $secondary-color;
    color: $white-color;
  }

  .category {
    // $bgc: #329AF0;

    cursor: pointer;
    width: 250px;
    // background-color: $bgc;
    text-align: center;
    border-radius: 4px;
    // color: #FFF;
    transition-duration: .3s;
    transition-property: box-shadow, border, background-color;
    font-size: 1.5em;
    padding: 20px 0;

    &:hover {
      // background-color: lighten($bgc, 8%);
      box-shadow: 0 0 0 3px #FFF, 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
</style>
