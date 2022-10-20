import React from 'react';
import './App.css';
import WordsQuiz from './Component/WordsQuiz/WordsQuiz';

const App: React.FC =  () => {
  return (
    <div className="App">
      <div className="title-wrapper">
        <h1>Nagwa</h1>
      </div>

      <WordsQuiz/>
    </div>
  );
}

export default App;
