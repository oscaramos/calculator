import React from 'react';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='calculator'>
          <div className='screen'>
            <div className='screen'>
              <div className='screen-text'>123456789</div>
            </div>
          </div>
          <div className='keys'>
            <div className='operations'>
              <div className='key numeric-key'><span>AC</span></div>
              <div className='key numeric-key'><span>C</span></div>
              <div className='key numeric-key'><span>?</span></div>
            </div>
            <div className='numeric'>
              <div className='key numeric-key'><span>7</span></div>
              <div className='key numeric-key'><span>8</span></div>
              <div className='key numeric-key'><span>9</span></div>
              <div className='key numeric-key'><span>4</span></div>
              <div className='key numeric-key'><span>5</span></div>
              <div className='key numeric-key'><span>6</span></div>
              <div className='key numeric-key'><span>1</span></div>
              <div className='key numeric-key'><span>2</span></div>
              <div className='key numeric-key'><span>3</span></div>
              <div className='key numeric-key'><span>+/-</span></div>
              <div className='key numeric-key'><span>0</span></div>
              <div className='key numeric-key'><span>.</span></div>
            </div>
            <div className='operators'>
              <div className='key operator-key'><span>/</span></div>
              <div className='key operator-key'><span>x</span></div>
              <div className='key operator-key'><span>-</span></div>
              <div className='key operator-key'><span>+</span></div>
              <div className='key operator-key'><span>=</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
