<template>
  <div class="wrapper">
    <div class="categories">
      <div class="mode">
        <h2>Apprentissage</h2>
      </div>
      <div class="mode">
        <h2>Evaluation</h2>
      </div>
    </categories>
  </div>
</template>

<script>
  export default {
    name: 'Categories'
  };
</script>

<style lang="sass">
  .categories {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 75%;
  }

  .categories .mode {
    cursor: pointer;
    width: 250px;
    background-color: #329AF0;
    text-align: center;
    border-radius: 4px;
    color: #FFF;
    transition-duration: .3s;
    transition-property: box-shadow, border, background-color;

    &:hover {
      background-color: #4dadf7;
      box-shadow: 0 0 0 3px #FFF, 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
</style>
