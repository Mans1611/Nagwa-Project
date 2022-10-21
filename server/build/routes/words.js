"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const { readFileSync } = fs_1.default;
const getRandomWords_1 = __importDefault(require("../uitiles/getRandomWords"));
const words = express_1.default.Router();
words.get('/', (req, res) => {
    let data = JSON.parse(readFileSync('./TestData.json', 'utf-8'));
    const randomWords = (0, getRandomWords_1.default)(data.wordList);
    return res.status(200).json(randomWords);
});
exports.default = words;
