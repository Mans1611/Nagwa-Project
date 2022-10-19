import express , { Router } from "express";
import fs from 'fs';
const {readFileSync} = fs;


const rank = express.Router()

rank.post('/',(req,res)=>{
    const {finalScore } = req.body ? req.body  : 0;
    let {scoresList} = JSON.parse(readFileSync('./TestData.json','utf-8'));
    let sortedRanks = scoresList.sort((a:any,b:any)=> a-b); // sorting the array first to facilitate the search methode.
    let belowRanks = sortedRanks.findIndex((rank:Number) => rank === parseInt(finalScore)); // the findIndex methode will give me exactly the nunmber of students below this mark
    let studentRank = (100 * belowRanks/scoresList.length);  // to convert it to percentage.
    studentRank = Math.round(studentRank * 100) / 100       // to rounded to the nearest hunderth.
    return res.status(200).json({rank : studentRank, finalScore});
})

export default rank;