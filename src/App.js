import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './CharacterCard';
const word = "Hello";
class App extends Component {
 render() {
  return (
    <div className = "card">
      <WordCard value="hello555555555555555555555"/>
    </div>
    );
   }
}

export default App;
