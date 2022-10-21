import React from 'react'
import { Word } from '../WordsQuiz/WordsQuiz';
import './choice.scss';

const Choice : React.FC <{choice:string, word:Word ,setPickedAnswer : Function}> = ({choice,word,setPickedAnswer}) => {
  
  if(word.answer)
    return <div 
          className={
            `choice lock ${word.pos === (choice as string).toLowerCase() ? 'green' : ''}${(word.answer !== word.pos && word.answer === choice ? 'red' : '')}`
            }>
            {choice}</div>
  
  return <div onClick={()=>{setPickedAnswer(choice)}} className='not-lock choice'>{choice}</div>
  
}

export default Choice