// @flow

export default class Calculus {
  _firstOperand: number;
  _secondOperand: number;
  _result: number;
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

  get result(): number {
    return this._result;
  }

  set result(result: number): this {
    this._result = result;
    return this;
  }

  get time(): number {
    return this._time;
  }

  set time(time: number): this {
    this._time = time;
    return this;
  }
}
