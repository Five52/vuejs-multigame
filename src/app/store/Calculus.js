// @flow

import {maxTable, maxAnwserTime} from './CalculusStore';

type Answer = {value: number};

export default class Calculus {
  _firstOperand: number;
  _secondOperand: number;
  _answer: number;
  _time: number;
  _isPractise: boolean;
  _answers: Array<Answer>;

  constructor(firstOperand: number, secondOperand: number, isPractise: boolean = false) {
    this._firstOperand = firstOperand;
    this._secondOperand = secondOperand;
    this._isPractise = isPractise;
  }

  get firstOperand(): number {
    return this._firstOperand;
  }

  get secondOperand(): number {
    return this._secondOperand;
  }

  get answer(): number {
    return this._answer;
  }

  set answer(answer: number): this {
    this._answer = answer;
    return this;
  }

  get result(): number {
    return this._firstOperand * this._secondOperand;
  }

  get time(): number {
    return this._time;
  }

  set time(time: number): this {
    this._time = time;
    return this;
  }

  get answers(): Array<Answer> {
    if (!this._answers) {
      this._answers = this._generateRandomAnswers(this._isPractise);
    }
    return this._answers;
  }

  isCorrect(): boolean {
    return this.answer === this.result;
  }

  isAnsweredInTime(): boolean {
    return this.time < maxAnwserTime;
  }

  /**
   * Generate 4 random answers
   * @param {boolean} tableRelated - true if the answers must be related to the first operand
   * @return {Array<Number>}
   */
  _generateRandomAnswers(tableRelated: boolean = false): Array<Answer> {
    if (tableRelated) {
      return this._generateRandomRelatedAnswers();
    }
    return this._generateRandomUnrelatedAnswers();
  }

  _generateRandomRelatedAnswers() {
    const answers = [];
    for (let i = 0; i <= maxTable; i++) {
      answers.push(this.firstOperand * i);
    }
    return this.shuffle(answers).map(value => {
      return {
        value
      };
    });
  }

  _generateRandomUnrelatedAnswers() {
    const answers = [];
    let answer: number;
    for (let i = this._firstOperand - 1; i <= this._firstOperand + 1; i++) {
      for (let j = this._secondOperand - 1; j <= this._secondOperand + 1; j++) {
        answer = i * j;
        if (answer >= 0 && !answers.includes(answer) && answer !== this.result) {
          answers.push(answer);
        }
      }
    }
    answer = Math.floor((Math.max(...answers) + Math.min(...answers)) / 2);
    if (!answers.includes(answer) && answer !== this.result) {
      answers.push(answer);
    }
    let delta = 1;
    while (answers.length < 4) {
      const answerMinus = answer - delta;
      const answerPlus = answers + delta;
      if (!answers.includes(answerPlus) && answerPlus !== this.result) {
        answers.push(answerPlus);
      }
      if (answerMinus >= 0 &&
        !answers.includes(answerMinus) &&
        answerMinus !== this.result) {
        answers.push(answerMinus);
      }
      delta++;
    }

    return this.shuffle(
      [this.result]
      .concat(this.shuffle(answers).slice(0, 3))
    ).map(value => {
      return {
        value
      };
    });
  }

  shuffle(array: Array<number>) {
    let m = array.length;
    let t;
    let i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}
