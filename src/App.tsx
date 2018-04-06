import * as React from 'react';
import './App.css';
import * as vynosF from 'vynos';

const logo = require('./logo.svg');
console.log(vynosF)
class App extends React.Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          hello!
        </p>
        {vynosF.scriptTag()}
      </div>
    );
  }
}

export default App;
