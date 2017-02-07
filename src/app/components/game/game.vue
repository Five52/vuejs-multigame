<template>
  <div>
    <div class="game" v-show="!finished">
      <div class="question">
        <span class="calculus">{{ calculus.firstOperand }} x {{ calculus.secondOperand }} = {{ calculus.answer || '?' }}</span>
      </div>
      <div class="answers" :class="{ answered }">
        <div
          v-for="choice in calculus.answers"
          class="answer" :class="[choice.class]"
          @click="checkAnswer($event, choice)">{{ choice.value }}</div>
      </div>
    </div>
    <div class="finish" v-show="finished">
      <h2>Exercice terminé en <strong>{{ totalTime }} secondes</strong></h2>
      <img src="./bronze.png" v-if="nbCorrect/nbCalculus < .5">
      <img src="./silver.png" v-if="nbCorrect/nbCalculus >= .5 && nbCorrect/nbCalculus < .9">
      <img src="./gold.png" v-if="nbCorrect/nbCalculus >= .9">
      <div>Tu as <strong>{{ nbCorrect }} bonne{{ nbCorrect > 1 ? 's' : '' }} réponse{{ nbCorrect > 1 ? 's' : '' }}</strong> sur {{ nbCalculus }} !</div>
      <div class="buttons">
        <router-link class="btn" :to="{name: 'home'}" replace>Retour à l'accueil</router-link>
        <span @click="retry()" class="btn">Réessayer</span>
      </div>
    </div>
    <div class="progress">
      <span>{{ index }}/{{ nbCalculus }}</span>
      <div class="bar">
        <span :style="{width: ((completed)/nbCalculus)*100 + '%'}"></span>
      </div>
    </div>
    <div class="next" v-show="answered" @click="next()">Suivant</div>
  </div>
</template>

<script src="./game.js"></script>

<style lang="scss" scoped>
  @import "../../../main.scss";

  .question {
    text-align: center;
    margin-top: 5%;
  }

  .calculus {
    @extend .postit;
    font-size: 4.5em;
  }

  .answers {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 60px;
  }

  .answer {
    cursor: pointer;
    text-align: center;
    width: calc(50% - 12px);
    margin-bottom: 20px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid #DDD;
    border-radius: 4px;
    font-size: 2em;
    transition: background-color .25s;

    .answered & {
      cursor: default;
    }

    &.correct {
      background-color: #7dfb21;
    }

    &.incorrect {
      background-color: #ff6b6b;
    }

    .answers:not(.answered) &:not(.correct):not(.incorrect):hover {
      transition-duration: 0s;
      background-color: #a3daff;
    }
  }

  .buttons {
    margin-top: 1.5em;
    display: flex;
    justify-content: center;

    .btn {
      margin: 0 2px;
    }
  }

  .next {
    @extend .btn;
    $bgc: $purple-color;

    background-color: $bgc;
    color: $white-color;
    float: right;
    margin-top: 10px;

    &:hover {
      background-color: lighten($bgc, 4%);
    }

    &:active {
      background-color: darken($bgc, 4%);
    }
  }

  .finish {
    @extend .postit;
    margin-bottom: 20px;
    padding-bottom: 20px;
    text-align: center;
  }

  .progress {
    text-align: right;
  }

  .bar {
    height: 3px;
    border-radius: 1px;
    background-color: rgba(0,0,0,.08);

    span {
      transition: width .2s ease-out;
      background-color: $purple-color;
      width: 33%;
      display: block;
      height: 100%;
    }
  }
</style>
