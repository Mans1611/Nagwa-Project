import React from 'react';
import './App.css';
import Title from './Component/Title/Title';
import WordsQuiz from './Component/WordsQuiz/WordsQuiz';

const App: React.FC =  () => {
  return (
    <div className="App">
      <Title/>
      <WordsQuiz/>
    </div>
  );
}

export default App;
