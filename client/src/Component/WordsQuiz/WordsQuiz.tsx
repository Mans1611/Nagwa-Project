
import axios from 'axios'
import React , {useState,useEffect, createContext} from 'react'
import DisplayedWord from '../DisplayedWord/DisplayedWord';
import Loading from '../Loading/Loading';
import { ProgressBar } from '../ProgressBar/ProgressBar'
import Rank from '../Rank/Rank';
import StartScreen from '../StartScreen/StartScreen';
import Timer from '../Timer/Timer';
import './wordsquiz.scss';


export interface Word {
    id:Number,
    word:String,
    pos:String,
    answer:String // this will store the address of the studen's answer.
}
export interface QuizDetails  {
    totalAnswerdQuestions:number,
    correctAnswers:number
}
export interface RankDetails  {
    rank:number,
    sortedRanks:Array <number>
}


export const QuestionIndexContext = createContext({}); 

const WordsQuiz: React.FC  = () => {

    const [isLoading,setLoading] = useState(true);
    const [words,setWords] = useState([]);              // store the words array from the server.
    const [currentIndex,setCurrentIndex]= useState(0);  // store the displayed question.
    const [rankData,setRankData]= useState({});         // store the displayed question.
    const [indexScreen,setIndexScreen] = useState(0); // 0 -> startscreen, 1 -> quiz screen, 2 -> rank screen.
    
    const [quizezDetails,setQuizDetails] = useState({totalAnswerdQuestions : 0 , correctAnswers : 0});
    // this hook's function will run when in component first render to fetch words from server
    useEffect(():any => {
        let subscribe = true;
        setQuizDetails({totalAnswerdQuestions : 0 , correctAnswers : 0})
        setCurrentIndex(0)
        const fetchWords = async ()=>{
            setLoading(true)
            try{
                const {data} = await axios.get('http://localhost:5000/words');
                if(subscribe) // so if the component is shown now it will set the data
                    setWords(data);
                }catch(err){
                console.log(err);
            } 
        }
        if (indexScreen === 1) fetchWords();

        setLoading(false);
        return ()=> subscribe = false; // clean-up function in case if the component is not mounted any more.
    }, [indexScreen]);

    
    if(isLoading)
        return <Loading/>;

    return (
        // the store of variables, just like redux 
        <QuestionIndexContext.Provider value = {{
            currentIndex,setCurrentIndex,
            words,
            quizezDetails,
            setIndexScreen,
            setLoading,
            rankData,setRankData
            }}>

            <div className='screens-container'>
                {indexScreen === 0 && <StartScreen/>}        
                {indexScreen === 1 && 
                    <>
                        <Timer/>
                        {words.length > 0 && <DisplayedWord quizezDetails = {quizezDetails} setQuizDetails = {setQuizDetails}  word = {words[currentIndex]}/> }
                        <ProgressBar quizezDetails = {quizezDetails} />
                    </>
                }
                {indexScreen === 2 && <Rank/>  }
            </div>
            
           
        </QuestionIndexContext.Provider>
  )
}

export default WordsQuiz