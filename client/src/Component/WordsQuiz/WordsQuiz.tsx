
import axios from 'axios'
import React , {useState,useEffect, createContext} from 'react'
import { initialIndexState, reducerIndexFunction } from '../../Reducers/QuestionIndexReducer';
import DisplayedWord from '../DisplayedWord/DisplayedWord';
import Loading from '../Loading/Loading';
import { ProgressBar } from '../ProgressBar/ProgressBar'
import './wordsquiz.scss';


export interface Word {
    id:Number,
    word:String,
    pos:String
}

export const QuestionIndexContext = createContext({});

const WordsQuiz: React.FC  = () => {

    const [isLoading,setLoading] = useState(true);
    const [words,setWords] = useState([]);
    const [currentIndex,setCurrentIndex]= useState(0);
    // this hook's function will run when in component first render to fetch words from server
    useEffect(():any => {
        let subscribe = true;
        const fetchWords = async ()=>{
            try{
                const {data} = await axios.get('http://localhost:5000/words');
                // if(subscribe) // so if the component is shown now it will set the data
                    setWords(data);
                setLoading(false);
            }catch(err){
                console.log(err);
            } 
        }

        fetchWords();
        return ()=> subscribe = false; // clean-up function in case if the component is not mounted any more.
    }, []);

    //const [indexState,indexDispatch] = useReducer(initialIndexState as any ,reducerIndexFunction);

    
    if(isLoading)
        return <Loading/>;
    return (
        <QuestionIndexContext.Provider value = {{currentIndex,setCurrentIndex}}>
            <div className='words-screen'>
                <DisplayedWord word = {words[currentIndex]}/>
                <ProgressBar completed={10}/>
            </div>
        </QuestionIndexContext.Provider>
  )
}

export default WordsQuiz