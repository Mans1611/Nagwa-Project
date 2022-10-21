import React,{useContext} from 'react'
import { QuestionIndexContext, RankDetails } from '../WordsQuiz/WordsQuiz';
import './circlePercentage.scss';

const CirclePercentage:React.FC  = () => {
    const {rankData} : any = useContext(QuestionIndexContext);

  return (
    
        <div className='circlePercentage-container'>
        <h2>Your Rank</h2>
            <svg>
                <circle r = "95" cx="100" cy = "100" />
                <circle style={{strokeDashoffset: ((100 * 6) - ((100 * 6) * (rankData as RankDetails).rank / 100))}} r = "95" cx="100" cy = "100" />
            </svg>
            <h3 className="percentage-number">{(rankData as RankDetails).rank}%</h3>
        </div>
    
  )
}

export default CirclePercentage