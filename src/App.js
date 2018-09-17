import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';

class App extends Component {
  x="Hello {''World''}"
  render() {
    return (
      <div className="App">
        <CharacterCard value="h"/>
        <CharacterCard value="i"/>
      </div>
    );
  }
}

export default App;
