import React from 'react';
import './App.css';
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 123456789
    };
  }


  pressKey = (key) => () => {
    console.log(key);
  };

  render() {
    const { value } = this.state;
    return (
      <div className='App'>
        <div className='calculator'>
          <div className='screen'>
            <div className='screen'>
              <div className='screen-text'>{value}</div>
            </div>
          </div>
          <div className='keys'>
            <div className='operations'>
              <Button isNumeric value='AC' onClick={this.pressKey('AC')}/>
              <Button isNumeric value='C' onClick={this.pressKey('C')} />
              <Button isNumeric value='⌫' onClick={this.pressKey('⌫')} />
            </div>
            <div className='numeric'>
              <Button isNumeric value='7' onClick={this.pressKey('7')}/>
              <Button isNumeric value='8' onClick={this.pressKey('8')}/>
              <Button isNumeric value='9' onClick={this.pressKey('9')}/>
              <Button isNumeric value='4' onClick={this.pressKey('4')}/>
              <Button isNumeric value='5' onClick={this.pressKey('5')}/>
              <Button isNumeric value='6' onClick={this.pressKey('6')}/>
              <Button isNumeric value='1' onClick={this.pressKey('1')}/>
              <Button isNumeric value='2' onClick={this.pressKey('2')}/>
              <Button isNumeric value='3' onClick={this.pressKey('3')}/>
              <Button isNumeric value='+' onClick={this.pressKey('+')}/>
              <Button isNumeric value='0' onClick={this.pressKey('0')}/>
              <Button isNumeric value='.' onClick={this.pressKey('.')}/>
            </div>
            <div className='operators'>
              <Button isOperator value='/' onClick={this.pressKey('/')}/>
              <Button isOperator value='x' onClick={this.pressKey('x')}/>
              <Button isOperator value='-' onClick={this.pressKey('-')}/>
              <Button isOperator value='+' onClick={this.pressKey('+')}/>
              <Button isOperator value='=' onClick={this.pressKey('=')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
