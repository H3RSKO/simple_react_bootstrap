import React, { Component } from 'react';
import './App.css';
import config from './config/site'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row-bg">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
                Learn React (and bootstrap), Simplified {config.test}
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
