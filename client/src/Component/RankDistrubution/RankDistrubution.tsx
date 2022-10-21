import React, { useContext, useEffect, useState } from 'react'
import { QuestionIndexContext, RankDetails } from '../WordsQuiz/WordsQuiz';
import './rankDistrubution.scss';
import arrow from '../../assets/arrow.png';
import { useTimer } from '../../customhooks/Timer';

const RankDistrubution:React.FC = () => {
    const {rankData} : any = useContext(QuestionIndexContext); 
    
    let repeated = [0,0,0,0,0,0,0,0,0,0,0]; // this array will have 11 elemnts as 0 and 100 are included 
    const [repeatedMarks,setRepeatedMarks] = useState(repeated);

    const countRepated = (arr : Array<number>,markWeight : number): Array<number>=>{
        
        for(let i = 0 ; i < arr.length;i++){
            let index = arr[i] / markWeight ;  // I am so lucky as the marks is multiple of 10 so i a can get index directly, but it will be general function if i take the markWeight as a parmeter. 
            repeated[index]++  
        }
        return repeated;
    }
    useEffect(():any=>{
        let isSubscribe = true;
        if(isSubscribe && (rankData as RankDetails).sortedRanks ) 
            setRepeatedMarks(countRepated((rankData as RankDetails).sortedRanks, 10));

        return ()=> isSubscribe = false;
    },[])

 return (
    <div className='rankDistrubution-comp'>
        <h1 className="rankDistrubution-title">Rank Distrubtuion</h1>
        <div style={{marginTop : Math.max(...repeatedMarks) * 50}} className="rankDistrubution">
            {repeatedMarks.map((repated,index)=> 
                <div key={index} className='bar-container'>
                    {(rankData.finalScore / 10  ) === index && 
                    <div style={{bottom : (40 * repated)  }} className="indicator">
                        your position
                        <img src={arrow}/>

                    </div> }
                    {/* down bellow in bar I added 1 to to the studen mark after dividing by 10 as 0 and 10 are both included so 30 will corssponde to index 4 not 3  */}
                    <div style={{height: 40 * repated}}  className={`bar ${(rankData.finalScore / 10  ) === index ? 'studentBar' : ''}`}>{index * 10 }</div>
                </div>)}
       
        </div>
    </div>
  )
}

export default RankDistrubution