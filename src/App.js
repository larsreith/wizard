import React, { Component } from 'react';
import Card from './Card';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Card cardType="blue" value="12" />
        <Card cardType="red" value="11" isUpsideDown={false} />
        <Card cardType="yellow" value="13" isUpsideDown={false} />
        <Card cardType="green" value="12" />
        <Card cardType="wizard" />
        <Card cardType="jester" />
      </div>
    );
  }
}

export default App;
