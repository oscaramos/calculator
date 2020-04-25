class Calculator
{
  constructor() {
    this.state = {
      lastvalue: null,
      left: null,
      right: null,
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
      ans = 'ERR';
    else {
      if(lastvalue != null) ans += lastvalue.toString();
      if(left != null) ans += left.toString();
      if(op != null) ans += op_symbol;
      if(right != null) ans += right.toString();
    }
    return ans;
  }

  dig(number) {
    const { op, right, left, lastvalue } = this.state;
    if (lastvalue) {
      if (op)
        this.state.left = lastvalue;
      this.state.lastvalue = null;
    }

    if(op === null){
      const newleft = left*10 + number;
      if(newleft.toString().length <= this.state.MAXDIG)
        this.state.left = newleft;
    }
    else {
      let newright = right*10 + number;
      if(newright.toString().length <= this.state.MAXDIG)
        this.state.right = newright;
    }
    return this;
  }

  num(number) {
    number.toString().split().forEach(x => this.dig(parseInt(x)));
    return this;
  }

  equal() {
    const { left, right, op } = this.state;
    if(op)
    {
      this.state.lastvalue = op(left, right);
      if(this.state.lastvalue.toString().length > this.state.MAXDIG)
        this.state.err = true;
    }
    this.state.left = null;
    this.state.op = null;
    this.state.op_symbol = '';
    this.state.right = null;
    return this;
  }

  plus() {this.state.op = (x, y) => x+y; this.state.op_symbol = '+'; return this;}
  minus() {this.state.op = (x, y) => x-y; this.state.op_symbol = '-'; return this;}
  mult() {this.state.op = (x, y) => x*y; this.state.op_symbol = '*'; return this;}
  divi() {this.state.op = (x, y) => Math.floor(x/y); this.state.op_symbol = '/'; return this;}

  AC() {
    this.state.left = null;
    this.state.right = null;
    this.state.op = null;
    return this;
  }

  C() {
    this.state.right = 0;
    return this;
  }
}

export default Calculator;