class Calculator
{
  constructor() {
    this.state = {
      lastvalue: null,
      value: null,
      tmp: null,
      op: null,
      op_symbol: ''
    }
  }

  getScreen() {
    const { tmp, op, op_symbol, value, lastvalue} = this.state;
    let ans = '';
    if(lastvalue != null) ans += lastvalue.toString();
    if(value != null) ans += value.toString();
    if(op != null) ans += op_symbol;
    if(tmp != null) ans += tmp.toString();
    return ans;
  }

  dig(number) {
    const { op, tmp, value, lastvalue } = this.state;
    if (lastvalue) {
      if (op)
        this.state.value = lastvalue;
      this.state.lastvalue = null;
    }

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
    if(op)
      this.state.lastvalue = op(value, tmp);
    this.state.value = null;
    this.state.op = null;
    this.state.op_symbol = '';
    this.state.tmp = null;
    return this;
  }

  plus() {this.state.op = (x, y) => x+y; this.state.op_symbol = '+'; return this;}
  minus() {this.state.op = (x, y) => x-y; this.state.op_symbol = '-'; return this;}
  mult() {this.state.op = (x, y) => x*y; this.state.op_symbol = '*'; return this;}
  divi() {this.state.op = (x, y) => Math.floor(x/y); this.state.op_symbol = '/'; return this;}

  AC() {
    this.state.value = null;
    this.state.tmp = null;
    this.state.op = null;
    return this;
  }

  C() {
    this.state.tmp = 0;
    return this;
  }
}

export default Calculator;