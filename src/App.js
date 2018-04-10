import React, { Component } from 'react';
import Board from './Board';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  

  render() {
    console.log("App renders...");
    return (
      <div className="App">
        <Board />
      </div>
    );
  }

  componentDidMount() {
    console.log("App did mount");
  }
}

export default App;
