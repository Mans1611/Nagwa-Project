import React, { useContext } from 'react'
import { useTimer } from '../../customhooks/Timer'
import { QuestionIndexContext } from '../WordsQuiz/WordsQuiz'
import './timer.scss'
const Timer:React.FC = () => {
    
    const {setIndexScreen}:any = useContext(QuestionIndexContext);

    const [min,sec,timeUp] = useTimer(10); // timer is 10 min
    if(timeUp)
        return setIndexScreen(2);  // to render the rank screen, as the time is up
  return (
    <div className='timer-contianer'>
        <h4 className="label">Time Left</h4>
        <div className="timer-wrapper">
            {/* the condition below is just show the min less than 10 like that 08 not jsut 8 */}
            <div className="timer">{min >= 10 ?  min : '0'+ min}</div>
            <div className="timer">{sec >= 10 ?  sec : '0'+ sec}</div>
        </div>
    </div>
  )
}

export default Timer