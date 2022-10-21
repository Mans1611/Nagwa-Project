import React ,{useContext} from 'react'
import { QuestionIndexContext } from '../WordsQuiz/WordsQuiz';
import './startScreen.scss';

const StartScreen:React.FC = () => {
    const {setLoading,setIndexScreen} : any = useContext(QuestionIndexContext);

  return (
    <div className='start-screen'>
        <h1>Take The Words Categorization,and Skill your English</h1>
        <div className="button-wrapper">
            <button onClick={()=> {setLoading(true) ; setIndexScreen(1)}}>Start</button>
        </div>
    </div>
  )
}

export default StartScreen