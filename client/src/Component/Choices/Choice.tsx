import React from 'react'
import './choice.scss';

const Choice : React.FC <{choice:string, setPickedAnswer : Function}> = ({choice,setPickedAnswer}) => {
    ;

  return (
    <div onClick={()=>{setPickedAnswer(choice)}} className='choice'>{choice}</div>
  )
}

export default Choice