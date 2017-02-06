// @flow

import CalculusStore from './CalculusStore';

export default class Calculus {
  _firstOperand: number;
  _secondOperand: number;
  _answer: number;
  _time: number;

  constructor(firstOperand: number, secondOperand: number) {
    this._firstOperand = firstOperand;
    this._secondOperand = secondOperand;
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

  generateRandomAnswers(tableRelated: boolean = false): Array<number> {
    const answers = [this.firstOperand * this.secondOperand];
    if (tableRelated) {
      for (let i = 0; i < 3; i++) {
        let answer;
        do {
          answer = this.firstOperand * CalculusStore.constructor.getRandomTableNumber();
        } while (answers.includes(answer));
        answers.push(answer);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        let answer;
        do {
          const changeFirstOperation = Math.random() < 0.5;
          const delta = Math.pow(-1, Math.floor(Math.random() * 2));
          if (changeFirstOperation) {
            answer = (this.firstOperand + delta) * this.secondOperand;
          } else {
            answer = (this.secondOperand + delta) * this.firstOperand;
          }
        } while (answers.includes(answer));
        answers.push(answer);
      }
    }
    return this.shuffle(answers);
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
