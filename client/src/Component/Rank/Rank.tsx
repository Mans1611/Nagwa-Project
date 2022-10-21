import axios from 'axios';
import React,{useEffect,useContext} from 'react'
import CirclePercentage from '../CirclePercentage/CirclePercentage';
import RankDistrubution from '../RankDistrubution/RankDistrubution';
import { QuestionIndexContext, RankDetails } from '../WordsQuiz/WordsQuiz';
import './rank.scss';

const Rank:React.FC = () => {
    const {setIndexScreen,quizezDetails,setRankData}:any = useContext(QuestionIndexContext);
    
    useEffect(()=>{
        let isSubscribe = true; 
        const getRank = async()=>{
           
            const {data} = await axios.post('http://localhost:5000/rank',{
                finalScore : quizezDetails.correctAnswers * 10 //since question weight is 10 marks.
            });
            if(isSubscribe) setRankData(data as RankDetails);
            
            
        }

        getRank();

    },[])

   return (
    <div className='rank'>
       <h1 className="rank-title">Your Result Statistics</h1>
        <div className="statistics-container">
            <RankDistrubution/>
            <CirclePercentage/>
        </div>
        <div className="button-wrapper">
            <button onClick={()=> {setIndexScreen(1)}}>Try again</button>
        </div>
    </div>
  )
}

export default Rank