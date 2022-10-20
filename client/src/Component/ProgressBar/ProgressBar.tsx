import React from 'react'
import './progressBar.scss';
interface progressBar {
  completed : Number
}
export const ProgressBar:React.FC <{completed:Number}> = ({completed}) => {
  return (
    <div className="progressBar-container">
      <div className="progressBar">
        <div className="completed" style={{ width: `${completed}%`}}> 
          {completed as React.ReactNode}%
        </div>
      </div>
    </div>
  )
}
