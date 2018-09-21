import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import ChanonQuestion from './ChanonQuestion';

const word = "rainbow";
const Quest = "Engineering";
class App extends Component{
  render(){
    return(
      <div>
        <WordCard value={word}/>
        <ChanonQuestion value={Quest}/>
      </div>
    );
  }
}

export default App;