import './rank.scss';
import axios from 'axios';
import React,{useEffect,useContext, useState} from 'react'
import CirclePercentage from '../CirclePercentage/CirclePercentage';
import Loading from '../Loading/Loading';
import RankDistrubution from '../RankDistrubution/RankDistrubution';
import { QuestionIndexContext, RankDetails } from '../WordsQuiz/WordsQuiz';
import again from '../../assets/again.png';


const Rank:React.FC = () => {
    const {setIndexScreen,quizezDetails,setRankData}:any = useContext(QuestionIndexContext);
    
    const [lodaing,setLoading] = useState(true);
    useEffect(()=>{
        let isSubscribe = true; 
        const getRank = async()=>{
            const {data} = await axios.post('http://localhost:5000/rank',{
                finalScore : quizezDetails.correctAnswers * 10 //since question weight is 10 marks.
            });
            setLoading(false);
            if(isSubscribe) setRankData(data as RankDetails);
               
        }
        getRank();

    },[])

   return (
    <div className='rank'>
       <h1 className="rank-title">Your Result Statistics</h1>
       {
       lodaing ? 
                <Loading/> :
                <div className="statistics-container">
                    <RankDistrubution/>
                    <CirclePercentage/>
                </div>
       
       }
        <div className="button-wrapper">
            <button onClick={()=> {setIndexScreen(1)}}>Try again <img className='icon' src={again}/></button>
        </div>
    </div>
  )
}

export default Rank