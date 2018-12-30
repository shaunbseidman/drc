import React, { Component } from 'react';
import './App.css';
import Sign from './Sign'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <header className="App-header">
        <Sign />
        </header>
      </div>
    );
  }
}

export default App;
