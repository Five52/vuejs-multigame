// @flow

import Calculus from './Calculus';

class CalculusStore {
  static LAST_TABLE = 12;
  _operations = [];

  addResult(c: Calculus): void {
    this._operations[c.firstOperand] = this._operations[c.firstOperand] || [];
    this._operations[c.firstOperand][c.secondOperand] = this._operations[c.firstOperand][c.secondOperand] || [];
    this._operations[c.firstOperand][c.secondOperand] = {
      result: c.result,
      time: c.time
    };
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
