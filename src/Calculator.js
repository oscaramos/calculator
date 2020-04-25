class Calculator
{
  constructor() {
    this.state = {
      lastvalue: '',
      left: '',
      right: '',
      op: null,
      op_symbol: '',
      MAXDIG: 8,
      err: false,
    }
  }

  getScreen() {
    const { right, op, op_symbol, left, lastvalue, err} = this.state;
    let ans = '';
    if(err)
      ans += 'ERR';
    else {
      if(lastvalue) ans += lastvalue;
      if(left) ans += left;
      if(op != null) ans += op_symbol;
      if(right) ans += right;
    }
    return ans;
  }

  dig(number) {
    const { op, right, left, lastvalue } = this.state;
    if (this.toLastValue()) {
      if (op)
        this.state.left = lastvalue;
      this.state.lastvalue = null;
    }

    if(this.toLeft()){
      const newleft = left + number.toString();
      if(newleft.length <= this.state.MAXDIG)
        this.state.left = newleft;
    }
    else {
      let newright = right + number.toString();
      if(newright.length <= this.state.MAXDIG)
        this.state.right = newright;
    }
    return this;
  }

  dot() {
    return this.dig('.');
  }

  num(number) {
    number.toString().split().forEach(x => this.dig(x));
    return this;
  }

  equal() {
    const { left, right, op } = this.state;
    if(op)
    {
      let lastVal = op(Number.parseFloat(left), Number.parseFloat(right));
      lastVal = Math.round(lastVal*1000)/1000;
      this.state.lastvalue = lastVal.toString();
      if(this.state.lastvalue.length > this.state.MAXDIG)
        this.state.err = true;
    }
    this.state.left = '';
    this.state.op = null;
    this.state.op_symbol = '';
    this.state.right = '';
    return this;
  }

  plus() {this.state.op = (x, y) => x+y; this.state.op_symbol = '+'; return this;}

  minus() {this.state.op = (x, y) => x-y; this.state.op_symbol = '-'; return this;}
  mult() {this.state.op = (x, y) => x*y; this.state.op_symbol = '*'; return this;}
  divi() {this.state.op = (x, y) => Math.floor(x/y); this.state.op_symbol = '/'; return this;}
  AC() {
    this.state.lastvalue = null;
    this.state.left = '';
    this.state.right = '';
    this.state.op = null;
    this.state.op_symbol = '';
    this.state.err = false;
    return this;
  }

  C() {
    if (this.toLastValue())
      this.state.lastvalue = '';
    if(this.toLeft())
      this.state.left = '';
    else
      this.state.right = '';
    return this;
  }

  sign() {
    const { left, right, lastvalue } = this.state;
    if (this.toLastValue())
      this.state.lastvalue = -lastvalue;
    else if(this.toLeft())
      this.state.left = -left;
    else
      this.state.right = -right;
    return this;
  }

  del() {
    const { left, right, lastvalue } = this.state;
    if (this.toLastValue())
      this.state.lastvalue = lastvalue.slice(0, -1);
    else if(this.toLeft())
      this.state.left = left.slice(0, -1);
    else
      this.state.right = right.slice(0, -1);
    return this;
  }

  toLeft() {
    return this.state.op === null;
  }

  toLastValue() {
    return this.state.lastvalue;
  }
}

export default Calculator;