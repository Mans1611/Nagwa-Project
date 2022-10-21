import React from 'react'
import { QuizDetails } from '../WordsQuiz/WordsQuiz';
import './progressBar.scss';
interface progressBar {
  completed : Number
}
export const ProgressBar:React.FC <{quizezDetails:QuizDetails}> = ({quizezDetails}) => {
  return (
    <div className="progressBar-container">
      <div className="progressBar">
        {quizezDetails.totalAnswerdQuestions === 0 ? 
            null 
          :  <div className="completed" style={{ width: `${quizezDetails.totalAnswerdQuestions * 10}%`}}> 
              {quizezDetails.totalAnswerdQuestions * 10 }%
            </div>
        }
      </div>
    </div>
  )
}
