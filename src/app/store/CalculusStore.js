// @flow

import Calculus from './Calculus';

class CalculusStore {
  static LAST_TABLE = 12;
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

  generateRandomCalculus(firstOperand?: number): Calculus {
    const isPractise = firstOperand !== undefined;
    const operand = firstOperand || CalculusStore.getRandomTableNumber();

    const secondOperand = CalculusStore.getRandomTableNumber();

    return new Calculus(operand, secondOperand, isPractise);
  }

  static getRandomTableNumber(): number {
    return Math.floor(Math.random() * (CalculusStore.LAST_TABLE + 1));
  }
}

export default new CalculusStore();
export const maxTable = CalculusStore.LAST_TABLE;
