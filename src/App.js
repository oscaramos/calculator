import React from 'react';

import Button from "./Button";
import Calculator from "./Calculator";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: new Calculator(),
      screen: 0
    };
  }

  onPressKey = (key) => () => {
    const { calculator } = this.state;
    const isDigit = (x) => /\d/.exec(x);

    if(isDigit(key)) calculator.dig(parseInt(key));
    if(key === '+') calculator.plus();
    if(key === '-') calculator.minus();
    if(key === 'x') calculator.mult();
    if(key === '/') calculator.divi();
    if(key === '=') calculator.equal();
    if(key === 'AC') calculator.AC();
    if(key === 'C') calculator.C();
    if(key === '+/-') calculator.sign();
    this.setState({screen: calculator.getScreen()});
  };

  render() {
    const { screen } = this.state;
    return (
      <div className='App'>
        <div className='calculator'>
          <div className='screen'>
            <div className='screen'>
              <div className='screen-text'>{screen}</div>
            </div>
          </div>
          <div className='keys'>
            <div className='operations'>
              <Button isNumeric value='AC' onClick={this.onPressKey('AC')}/>
              <Button isNumeric value='C' onClick={this.onPressKey('C')} />
              <Button isNumeric value='⌫' onClick={this.onPressKey('⌫')} />
            </div>
            <div className='numeric'>
              <Button isNumeric value='7' onClick={this.onPressKey('7')}/>
              <Button isNumeric value='8' onClick={this.onPressKey('8')}/>
              <Button isNumeric value='9' onClick={this.onPressKey('9')}/>
              <Button isNumeric value='4' onClick={this.onPressKey('4')}/>
              <Button isNumeric value='5' onClick={this.onPressKey('5')}/>
              <Button isNumeric value='6' onClick={this.onPressKey('6')}/>
              <Button isNumeric value='1' onClick={this.onPressKey('1')}/>
              <Button isNumeric value='2' onClick={this.onPressKey('2')}/>
              <Button isNumeric value='3' onClick={this.onPressKey('3')}/>
              <Button isNumeric value='+/-' onClick={this.onPressKey('+/-')}/>
              <Button isNumeric value='0' onClick={this.onPressKey('0')}/>
              <Button isNumeric value='.' onClick={this.onPressKey('.')}/>
            </div>
            <div className='operators'>
              <Button isOperator value='/' onClick={this.onPressKey('/')}/>
              <Button isOperator value='x' onClick={this.onPressKey('x')}/>
              <Button isOperator value='-' onClick={this.onPressKey('-')}/>
              <Button isOperator value='+' onClick={this.onPressKey('+')}/>
              <Button isOperator value='=' onClick={this.onPressKey('=')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
