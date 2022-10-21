"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const { readFileSync } = fs_1.default;
const rank = express_1.default.Router();
rank.post('/', (req, res) => {
    const { finalScore } = req.body ? req.body : 0;
    let { scoresList } = JSON.parse(readFileSync('./TestData.json', 'utf-8'));
    let sortedRanks = scoresList.sort((a, b) => a - b); // sorting the array first to facilitate the search methode.
    let belowRanks = sortedRanks.findIndex((rank) => rank === parseInt(finalScore)); // the findIndex methode will give me exactly the nunmber of students below this mark
    let studentRank = (100 * belowRanks / scoresList.length); // to convert it to percentage.
    studentRank = Math.round(studentRank * 100) / 100; // to rounded to the nearest hunderth.
    return res.status(200).json({ rank: studentRank, finalScore, sortedRanks });
});
exports.default = rank;
