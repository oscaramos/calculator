import Calculator from "./Calculator";

let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

const expectValue = expectedNumber => {
  expect(calculator.getValue()).toBe(expectedNumber);
};

it('2+2=4', () => {
  calculator.dig(2).plus().dig(2).equal();
  expectValue(4);
});

it('10+100=110', () => {
  calculator.dig(1).dig(0).plus().dig(1).dig(0).dig(0).equal();
  expectValue(110);
});

it('10+100=110 with num', () => {
  calculator.num(10).plus().num(100).equal();
  expectValue(110);
});

it('3-2=1', () => {
  calculator.dig(3).minus().dig(2).equal();
  expectValue(1);
});

it('5*5=25', () => {
  calculator.dig(5).mult().dig(5).equal();
  expectValue(25);
});

it('7/3=2', () => {
  calculator.dig(7).divi().dig(3).equal();
  expectValue(2);
});

it('15 and AC', () => {
  calculator.num(15).AC().equal();
  expectValue(0);
});

it('15+12C5 = 20', () => {
  calculator.num(15).plus().num(12).C().dig(5).equal();
  expectValue(20);
});
