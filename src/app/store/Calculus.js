export default class Calculus {

  constructor(firstOperand, secondOperand, result, time) {
    this._firstOperand = firstOperand;
    this._secondOperand = secondOperand;
    this._result = result;
    this._time = time;
  }

  get firstOperand() { return this._firstOperand; }
  get secondOperand() { return this._secondOperand; }
  get result() { return this._result; }
  get time() { return this._time; }
}
