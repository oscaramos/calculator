class Calculator
{
  constructor() {
    this.state = {
      value: null,
      tmp: 0,
      op: null
    };
  }


  dig(number) {
    const { op, tmp, value} = this.state;
    if(op === null)
      this.state.value = value*10 + number;
    else
      this.state.tmp = tmp*10 + number;
    return this;
  }

  num(number) {
    number.toString().split().forEach(x => this.dig(parseInt(x)));
    return this;
  }

  equal() {
    const { value, tmp, op } = this.state;
    this.state.value = op(value, tmp);
  }

  plus() {this.state.op = (x, y) => x+y; return this;}
  minus() {this.state.op = (x, y) => x-y; return this;}
  mult() {this.state.op = (x, y) => x*y; return this;}
  divi() {this.state.op = (x, y) => Math.floor(x/y); return this;}

  AC() {
    this.state.value = null;
    this.state.tmp = 0;
    this.state.op = () => 0;
    return this;
  }

  C() {
    this.state.tmp = 0;
    return this;
  }

  getValue() {return this.state.value;}
}

export default Calculator;