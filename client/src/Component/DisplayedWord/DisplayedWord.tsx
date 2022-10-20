import React , {useContext,useEffect,useState} from 'react'
import Choice from '../Choices/Choice';
import { QuestionIndexContext, Word } from '../WordsQuiz/WordsQuiz';
import correct from '../../assets/correct.png';

import './displayedword.scss';
const choices = ["Adverb" , "Noun" , "Adjactive" , "Verb"];
const questionIndex = [0,1,2,3,4,5,6,7,8,9];


const DisplayedWord:React.FC <{word:Word}> = ({word}) => {

    const {currentIndex,setCurrentIndex} : any = useContext(QuestionIndexContext)
    
    const  [pickedAnswer, setPickedAnswer] = useState(null); // this variable is carry the user's answer like : adverb,noun etc...
    const [answerStatus,setAnswerStatus] = useState(false);  // this answer will carry the answer wheter it is right or false.
    console.log(pickedAnswer);
    // events
    const previousQuestion = ()=>{setCurrentIndex(currentIndex - 1)} // function to move backword.
    const pickQuestion = (index :Number)=>{setCurrentIndex(index)}; // function to move to any question.
    const nextQuestion = ()=>{setCurrentIndex(currentIndex + 1);setPickedAnswer(null)}   // function to remove forward.
    
    const checkAnswer = ()=>{ 
        // since null is the intial condition and i need to check it after it triggers.
        if(pickedAnswer!== null && (pickedAnswer as string).toLowerCase() === word.pos){
            setAnswerStatus(true);
        }
        else{
            setAnswerStatus(false)
        }
        
    }

    // this function will fire when the user picks an answer and check his answer.
    useEffect(()=>{
        checkAnswer();
    },[pickedAnswer])

    return (
    <div className='displayedWord'>
        <div className="word-container">
            <h1>{word.word}</h1>
        </div>
        <h2 className="qustion">Which pos is the word above?</h2>

        <div className="choices-container">
            {choices.map((choice,index) => <Choice setPickedAnswer ={setPickedAnswer} key={index} choice={choice}/> )}
        </div>

        { pickedAnswer &&(
            answerStatus === true ?
                <div className="answer right">
                    <img src={correct} className="answerIcon"/>
                    {`Awesome,  ${word.word} is ${word.pos}`}
                    </div>
                :
                <div className="answer right">{`Wrong, ${word.word} is not ${pickedAnswer}`}</div>
        )
         }

        <div className="index-container">
            {currentIndex === 0 ? null : <button onClick={previousQuestion} className="index oneStep">Previous</button>}
            {questionIndex.map(index=> <button onClick={()=> {pickQuestion(index) }} key={index} className={`index ${currentIndex === index ? 'selected' : ''}`}>{index +1 }</button> )}
            {currentIndex === 9 ? <button className='index'>Submit</button> :  <button onClick={nextQuestion} className="index oneStep">Next</button>}
        </div>
    </div>
  )
}

export default DisplayedWord