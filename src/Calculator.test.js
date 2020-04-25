import Calculator from "./Calculator";

let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

const expectScreen = expectedScreen => {
  expect(calculator.getScreen()).toBe(expectedScreen);
};

describe('One operator and equal', () => {
  it('2+2=4', () => {
    calculator.dig(2).plus().dig(2).equal();
    expectScreen('4');
  });

  it('10+100=110 with dig()', () => {
    calculator.dig(1).dig(0).plus().dig(1).dig(0).dig(0).equal();
    expectScreen('110');
  });

  it('10+100=110 with num()', () => {
    calculator.num(10).plus().num(100).equal();
    expectScreen('110');
  });

  it('3-2=1', () => {
    calculator.dig(3).minus().dig(2).equal();
    expectScreen('1');
  });

  it('5*5=25', () => {
    calculator.dig(5).mult().dig(5).equal();
    expectScreen('25');
  });

  it('7/3=2', () => {
    calculator.dig(7).divi().dig(3).equal();
    expectScreen('2');
  });

  it('2/3=0', () => {
    calculator.dig(2).divi().dig(3).equal();
    expectScreen('0');
  });
});

describe('Multiple operations and equal', () => {
  it('1+1=2|2+2+4', () => {
    calculator.dig(1).plus().dig(1).equal().dig(2).plus().dig(2).equal();
    expectScreen('4');
  });

  it('1+1=2|+3=5', () => {
    calculator.dig(1).plus().dig(1).equal().plus().dig(3).equal();
    expectScreen('5');
  });
});

describe('Screen', () => {
  it('equal at beginning', () => {
    expectScreen('');
    calculator.equal();
    expectScreen('');
  });

  it('2+2=4', () => {
    expectScreen('');
    calculator.dig(2);
    expectScreen('2');
    calculator.plus();
    expectScreen('2+');
    calculator.dig(2);
    expectScreen('2+2');
    calculator.equal();
    expectScreen('4');
  });

  it('1+1=2|3+3=6', () => {
    expectScreen('');
    calculator.dig(1);
    expectScreen('1');
    calculator.plus();
    expectScreen('1+');
    calculator.dig(1);
    expectScreen('1+1');
    calculator.equal();
    expectScreen('2');

    calculator.dig(3);
    expectScreen('3');
    calculator.plus();
    expectScreen('3+')
    calculator.dig(3);
    expectScreen('3+3')
    calculator.equal();
    expectScreen('6');
  });

  it('10+10=20*2=40', () => {
    expectScreen('');
    calculator.num(10);
    expectScreen('10');
    calculator.plus();
    expectScreen('10+');
    calculator.num(10);
    expectScreen('10+10');
    calculator.equal();
    expectScreen('20');
    calculator.mult();
    expectScreen('20*');
    calculator.dig(2);
    expectScreen('20*2');
    calculator.equal();
    expectScreen('40');
  });
});

describe('One operation AC or C and equal', () => {
  it('15 and AC', () => {
    calculator.num(15).AC().equal();
    expectScreen('');
  });

  it('15+12C5 = 20', () => {
    calculator.num(15).plus().num(12).C().dig(5).equal();
    expectScreen('20');
  });
});

describe('Limit to 8 digits', () => {
  it('The limit should be 8 digits', () => {
    calculator.num(12345678);
    expectScreen('12345678');
    calculator.dig(1);
    expectScreen('12345678');
  });

  it('On operation that exceeds then screen display ERR and stop new actions incoming', () => {
    calculator.num(12345678);
    expectScreen('12345678');
    calculator.mult();
    calculator.num(10);
    calculator.equal();
    expectScreen('ERR');

    calculator.num(10);
    calculator.plus();
    calculator.num(10);
    calculator.equal();
    expectScreen('ERR');
  });
});

describe('Change sign', () => {
  it('15(+/-)+20=5', () => {
    calculator.num(15).sign().plus().num(20).equal();
    expectScreen('5');
  });

  it('15+20(+/-)=-5', () => {
    calculator.num(15).plus().num(20).sign().equal();
    expectScreen('-5');
  });

  it('15+20=35(+/-)', () => {
    calculator.num(15).plus().num(20).equal().sign();
    expectScreen('-35');
  });
});

describe('floating numbers', () => {
  it('3.141', () => {
    calculator.dig(3).dot().dig(1).dig(4).dig(1);
    expectScreen('3.141');
  });

  it('1.5+1.5', () => {
    calculator.num(1.5).plus().num(1.5).equal();
    expectScreen('3');
  });
})

describe('Delete button', () => {
  it('12<+1=2', () => {
    calculator.num(12).del().plus().dig(1).equal();
    expectScreen('2');
  });

  it('1+12<=2', () => {
    calculator.dig(1).plus().num(12).del().equal();
    expectScreen('2');
  });

  it('12+12=24<+2=4', () => {
    calculator.num(12).plus().num(12).equal().del().plus().num(2).equal();
    expectScreen('4');
  });
});