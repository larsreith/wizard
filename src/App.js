import React, { Component } from 'react';
import CardHand from './CardHand';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  

  render() {
    console.log("App renders...");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CardHand isPlayer={true} trump="blue" cards={[{cardType: "wizard"}, {cardType: "green", value: 13}, {cardType: "green", value: 12}, {cardType: "blue", value: 1}]}></CardHand>
      </div>
    );
  }

  componentDidMount() {
    console.log("App did mount");
  }
}

export default App;
