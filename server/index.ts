import express from 'express';
import words from './routes/words';
import rank from './routes/rank';
import bodyParser from 'body-parser';
import cors from 'cors';



const app = express();
// app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

// routes middleware
app.use('/words',words);
app.use('/rank',rank);


const PORT : Number = 5000;




app.listen(PORT,()=>{
    console.log("running in http://localhost:" + PORT);
});
