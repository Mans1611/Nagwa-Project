import React , {useContext,useEffect,useState} from 'react'
import Choice from '../Choices/Choice';
import { QuestionIndexContext, QuizDetails, Word } from '../WordsQuiz/WordsQuiz';
import correct from '../../assets/correct.png';
import wrong from '../../assets/wrong.png';

import './displayedword.scss';
const choices = ["Adverb" , "Noun" , "Adjective" , "Verb"];
// const questionIndex = [0,1,2,3,4,5,6,7,8,9];


const DisplayedWord:React.FC <{word:Word, quizezDetails:QuizDetails ,setQuizDetails : Function}> = ({word, quizezDetails,setQuizDetails}) => {

    const {currentIndex,setCurrentIndex, words, setIndexScreen} : any = useContext(QuestionIndexContext)
    const [pickedAnswer, setPickedAnswer] = useState(null); // this variable is carry the user's answer like : adverb,noun etc...
    const [answerStatus,setAnswerStatus] = useState(false);  // this answer will carry the answer wheter it is right or false.
    
    // events
    // aslo I clear the answerStaustes in each event as it cause a bug when move tow previous wrong answer it show that the answer is correct
    const previousQuestion = ()=>{setCurrentIndex(currentIndex - 1);setAnswerStatus(false);setPickedAnswer(null)} // function to move backword. 
    const pickQuestion = (index :Number)=>{setCurrentIndex(index);setAnswerStatus(false);setPickedAnswer(null)}; // function to move to any question.
    const nextQuestion = ()=>{setCurrentIndex(currentIndex + 1);setAnswerStatus(false);setPickedAnswer(null)}   // function to remove forward.
    

    // this function will check the answer wheter it is right or false, and upadte question details.
    const checkAnswer = ()=>{  
        // since null is the intial condition and i need to check it after it triggers.
        if(pickedAnswer!== null && (pickedAnswer as string).toLowerCase() === word.pos){
            setAnswerStatus(true);
            setQuizDetails({
                totalAnswerdQuestions : quizezDetails.totalAnswerdQuestions +1  , 
                correctAnswers : quizezDetails.correctAnswers + 1
                })

            words[currentIndex].answer = (pickedAnswer as String).toLowerCase();
        }
        else{
            setAnswerStatus(false)
            setQuizDetails({
                ...quizezDetails,
                totalAnswerdQuestions : quizezDetails.totalAnswerdQuestions + 1 , 
                }) 
            words[currentIndex].answer = pickedAnswer;  
        }

        if(quizezDetails.totalAnswerdQuestions === 9) { // as the when the function fire total answerd ques is 9 and this is the 10th, so the state will not be updated.
            setTimeout(()=>setIndexScreen(2),2000)      // I set time out to let the user see the answer before it automatically nav to rank screen.
        };
        
    }

    // this function will fire when the user picks an answer and check his answer.
    useEffect(()=>{
        if(pickedAnswer)  checkAnswer();  // to check if the pick answer is defined 
        
    },[pickedAnswer])

    return (
    <div className='displayedWord'>
        <div className="word-container">
            <h1>{word.word}</h1>
        </div>
        <h2 className="qustion">What is the type of the word above?</h2>

        <div className="choices-container">
            {choices.map((choice,index) => <Choice word = {word} setPickedAnswer ={setPickedAnswer} key={index} choice={choice}/> )}
        </div>

        {/* the condition down below is to check : 
            - wheter th question is answerd before by (word.answer) it must be defined, this is very useful in case of 
              I navigate to another word and return back to the same word again, in other words, 
              the answer is cached in case i return to it again.

            - wheter in the current displayed word, I picked an answer or not by (pickedAnswer !== null)
        */}

        { (word.answer || pickedAnswer !== null ) && (
            (answerStatus === true || word.answer === word.pos) ?
                <div className="answer green">
                    {`Awesome, your answer is correct`}
                </div>
                :
                <div className="answer red">
                    
                    {`Wrong, your answer is incorrect`}
                </div>
        )
         }

        <div className="index-container">
            {currentIndex === 0 ? null : <button onClick={previousQuestion} className="index oneStep">Previous</button>}
            
            {words.map( (word : Word ,index:number)=>{
                if(word.answer) 
                    return <button onClick={()=> {pickQuestion(index) }} key={index} className={`index ${currentIndex === index ? 'selected' : ''}`}>
                    {
                        word.answer === word.pos ? 
                        <img className='indexIcon' src={correct}/> 
                        :
                        <img className='indexIcon' src={wrong}/>
                    }
                </button>  
                else {
                    return <button onClick={()=> {pickQuestion(index) }} key={index} className={`index ${currentIndex === index ? 'selected' : ''}`}>{index +1 }</button> }
                }
                )}
            {currentIndex !== 9 ? <button onClick={nextQuestion} className="index oneStep">Next</button> : null}
        
        </div>
    </div>
  )
}

export default DisplayedWord