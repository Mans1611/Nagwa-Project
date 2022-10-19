import express , { Router } from "express";
import fs from 'fs';
const {readFileSync} = fs;
import { categorizedWords, Word } from "../interfaces/interface";
import getRandomWords from "../uitiles/getRandomWords";



const words = express.Router()

words.get('/',(req,res)=>{
    let data = JSON.parse(readFileSync('./TestData.json','utf-8'));
    const randomWords : Array<Word> =  getRandomWords(data.wordList);
    return res.status(200).json(randomWords);
    
})

export default words;