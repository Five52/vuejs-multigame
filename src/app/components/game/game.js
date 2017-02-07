// @flow

import CalculusStore from '../../store/CalculusStore';
const nbCalculus = 10;

export default {
  name: 'Game',
  props: ['table'],

  data() {
    return {
      index: 0,
      completed: 0,
      nbCorrect: 0,
      alreadyAnswered: false,
      answered: false,
      calculus: null,
      currentTime: 0,
      totalTime: 0,
      nbCalculus
    };
  },

  created() {
    // Display the first calculus
    this.next();
  },

  methods: {
    /**
     * Check and store the answer
     * @param {Event} e The event
     * @param {Object} answer The answer
     */
    checkAnswer(e: Event, answer: Object): void {
      if (this.answered) {
        return;
      }
      this.calculus.answer = answer.value;
      const time = Math.round((Date.now() - this.currentTime) / 1000);
      this.calculus.time = time;
      this.totalTime += time;

      // Store the answer
      CalculusStore.addResult(this.calculus);

      // Display the answer validity
      if (this.calculus.isCorrect()) {
        if (!this.alreadyAnswered) {
          this.nbCorrect++;
        }
        answer.class = 'correct';
        this.answered = true;
        this.completed++;
      } else {
        answer.class = 'incorrect';
      }

      this.alreadyAnswered = true;
    },

    /**
     * Restart the game
     */
    retry(): void {
      location.reload();
    },

    /**
     * Go to the next question
     */
    next(): void {
      this.answered = false;
      if (this.index < nbCalculus) {
        let table;
        if (!Number.isNaN(Number(this.table))) {
          table = Number(this.table);
        }
        this.index++;
        this.calculus = CalculusStore.generateRandomCalculus(table);
        this.alreadyAnswered = false;
        this.currentTime = Date.now();
      }
    }
  },

  computed: {
    /**
     * Check if the game is finished
     * @return {boolean} The finished status
     */
    finished(): boolean {
      return !this.answered && this.completed === nbCalculus;
    },

    /**
     * Get the displayed result
     * @return {string} The result
     */
    result(): string {
      if (!this.answered || !this.calculus.isCorrect()) {
        return '?';
      }
      return this.calculus.answer;
    }
  }
};
