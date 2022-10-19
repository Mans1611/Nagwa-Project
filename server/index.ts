import express from 'express';
import words from './routes/words';
import rank from './routes/rank';
import bodyParser from 'body-parser';



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


const PORT : Number = 5000;


app.use('/words',words);
app.use('/rank',rank);


app.listen(PORT,()=>{
    console.log("running in http://localhost:" + PORT);
});
