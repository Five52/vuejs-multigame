import Calculus from './Calculus';

class CalculusStore {
  static get LAST_TABLE() { return 12 };

  constructor() {
    this.operations = [];
  }

  addResult(c : Calculus) {
    this.operations[c.firstOperand] = this.operations[c.firstOperand] || [];
    this.operations[c.firstOperand][c.secondOperand] = this.operations[c.firstOperand][c.secondOperand] || [];
    this.operations[c.firstOperand][c.secondOperand] = {
      result: c.result,
      time: c.time
    };
  }

  static generateRandomOperation(firstOperand) {
    firstOperand = firstOperand
      || CalculusStore.getRandomTableNumber()
    ;
    secondOperand = CalculusStore.getRandomTableNumber();
  }

  static getRandomTableNumber() {
    return Math.floor(Math.random() * (CalculusStore.LAST_TABLE + 1));
  }
}
export default new CalculusStore();
