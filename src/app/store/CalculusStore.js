// @flow

import Calculus from './Calculus';

class CalculusStore {
  static LAST_TABLE = 12;
  _operations: Array<Array<Array<{result: number, time: number}>>>;

  constructor() {
    this._operations = JSON.parse(localStorage.getItem(this.constructor.name) || '[]');
  }

  addResult(c: Calculus): void {
    if (!Array.isArray(this._operations[c.firstOperand])) {
      this._operations[c.firstOperand] = [];
    }
    if (!Array.isArray(this._operations[c.firstOperand][c.secondOperand])) {
      this._operations[c.firstOperand][c.secondOperand] = [];
    }

    this._operations[c.firstOperand][c.secondOperand].push({
      result: c.result,
      time: c.time
    });

    localStorage.setItem(this.constructor.name, JSON.stringify(this._operations));
  }

  generateRandomOperation(firstOperand?: number, secondOperand?: number): Calculus {
    if (firstOperand === undefined) {
      firstOperand = CalculusStore.getRandomTableNumber();
    }

    if (secondOperand === undefined) {
      secondOperand = CalculusStore.getRandomTableNumber();
    }

    return new Calculus(firstOperand, secondOperand);
  }

  static getRandomTableNumber(): number {
    return Math.floor(Math.random() * (CalculusStore.LAST_TABLE + 1));
  }
}

export default new CalculusStore();
