// @flow

import Calculus from './Calculus';

class CalculusStore {
  static LAST_TABLE = 9;
  static MAX_PREDICTION_NUMBER = 5;
  _operations: {
    [number]: {
      [number]: Array<{result: number, time: number}>
    }
  };

  constructor() {
    try {
      this._operations = JSON.parse(localStorage.getItem(this.constructor.name) || '{}');
    } catch (e) {
      this._operations = {};
    }
  }

  static get maxAnwserTime(): number {
    return 4;
  }

  getResults(firstOperand: number, secondOperand: number): Object | null {
    if (this._operations[firstOperand] !== undefined && this._operations[firstOperand][secondOperand] !== undefined) {
      const operations = this._operations[firstOperand][secondOperand];
      const correctAnswers = operations.reduce((sum, operation) => {
        const calculus = new Calculus(firstOperand, secondOperand);
        calculus.answer = operation.result;
        calculus.time = operation.time;

        if (calculus.isAnsweredInTime()) {
          sum.fast++;
        } else if (calculus.isCorrect()) {
          sum.good++;
        }
        return sum;
      }, {fast: 0, good: 0});
      return {
        correctAnswers,
        nbOperation: operations.length
      };
    }
    return null;
  }

  addResult(c: Calculus): void {
    if (!(this._operations[c.firstOperand] instanceof Object)) {
      this._operations[c.firstOperand] = {};
    }
    if (!Array.isArray(this._operations[c.firstOperand][c.secondOperand])) {
      this._operations[c.firstOperand][c.secondOperand] = [];
    }

    this._operations[c.firstOperand][c.secondOperand].push({
      result: c.answer,
      time: c.time
    });

    localStorage.setItem(this.constructor.name, JSON.stringify(this._operations));
  }

  getMostIncorrectCalculuses(): Array<Calculus> {
    const calculuses: Array<Calculus> = [];

    for (const firstKey in this._operations) {
      if (this._operations.hasOwnProperty(firstKey)) {
        const firstOperand = Number(firstKey);

        for (const secondKey in this._operations[firstOperand]) {
          if (this._operations[firstOperand].hasOwnProperty(secondKey)) {
            const secondOperand = Number(secondKey);

            const atLeastOneIncorrect = this._operations[firstOperand][secondOperand]
               // The MAX_PREDICTION_NUMBER last element of the array
              .slice(-CalculusStore.MAX_PREDICTION_NUMBER)
              // Check if at least one result is incorrect
              .some(operation => {
                const calculus = new Calculus(firstOperand, secondOperand);
                calculus.answer = operation.result;
                calculus.time = operation.time;
                return calculus.isCorrect() || calculus.isAnsweredInTime();
              });

            if (atLeastOneIncorrect) {
              calculuses.push(new Calculus(firstOperand, secondOperand));
            }
          }
        }
      }
    }

    return shuffle(calculuses);
  }

  generateRandomCalculus(operand?: number): Calculus {
    const isPractise = operand !== undefined;

    if (!isPractise) {
      const storedIncorrectCalculuses = this.getMostIncorrectCalculuses();
      // Return a previously bad answered calculus
      if (Math.random() <= 0.3 && storedIncorrectCalculuses.length) {
        return storedIncorrectCalculuses[0];
      }
    }

    const firstOperand = operand || CalculusStore.getRandomTableNumber();
    const secondOperand = CalculusStore.getRandomTableNumber();

    return new Calculus(firstOperand, secondOperand, isPractise);
  }

  static getRandomTableNumber(): number {
    return Math.ceil(Math.random() * (CalculusStore.LAST_TABLE));
  }
}

function shuffle(array: Array<any>): Array<any> {
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

export default new CalculusStore();
export const maxTable = CalculusStore.LAST_TABLE;
export const maxAnwserTime = CalculusStore.maxAnwserTime;
