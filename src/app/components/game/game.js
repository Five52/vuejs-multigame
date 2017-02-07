// @flow

import CalculusStore from '../../store/CalculusStore';
const nbCalculus = 2;

export default {
  name: 'Game',
  props: ['table'],

  data() {
    return {
      index: 0,
      completed: 0,
      nbCorrect: 0,
      answered: false,
      calculus: null,
      time: 0,
      nbCalculus
    };
  },

  created() {
    this.next();
  },

  methods: {
    checkAnswer(e: Event, answer: Object): void {
      if (this.answered) {
        return;
      }
      this.calculus.answer = answer.value;
      this.calculus.time = Math.round((Date.now() - this.time) / 1000);
      // Store the answer on store
      CalculusStore.addResult(this.calculus);

      // Display the answer validity
      if (this.calculus.isCorrect()) {
        this.nbCorrect++;
        answer.class = 'correct';
      } else {
        answer.class = 'incorrect';
      }
      this.calculus.answers.forEach(answer => {
        if (answer.value === this.calculus.result) {
          answer.class = 'correct';
        }
      });

      // Highlight the correct answer
      this.answered = true;
      this.completed++;
    },

    next(): void {
      this.answered = false;
      if (this.index < nbCalculus) {
        let table;
        if (!Number.isNaN(Number(this.table))) {
          table = Number(this.table);
        }
        this.index++;
        this.calculus = CalculusStore.generateRandomCalculus(table);
        this.time = Date.now();
      }
    }
  },

  computed: {
    finished(): boolean {
      return !this.answered && this.completed === nbCalculus;
    }
  }
};
