import React, { Component } from 'react';
import logo from './assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              animation: 'App-logo-spin infinite 20s linear',
              height: '40vmin'
            }}
          />
        </header>
      </div>
    );
  }
}

export default App;
