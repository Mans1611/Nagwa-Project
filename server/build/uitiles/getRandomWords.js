"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrayShuffle_1 = __importDefault(require("./arrayShuffle"));
const classification_1 = __importDefault(require("./classification"));
// this functoion will return 10 random words, and it must be not repated and have at 
const getRandomWords = (words) => {
    let categorizedWords = (0, classification_1.default)(words);
    let randomWords = [];
    // the first loop will pick 4 different pos words, I make it firstly to gaurntee to pick at leaset one from each category.
    let i = 0;
    while (i < 4) {
        const maxLengthofCategory = categorizedWords[i].words.length;
        const randomIndex = Math.floor(Math.random() * maxLengthofCategory); // here we randomly pick the word form the words array.                            
        randomWords.push(categorizedWords[i].words[randomIndex]);
        categorizedWords[i++].words[randomIndex].taken = true; // if the word is new and hasn't been taken we add it to the random words array and we change the taken flage so we dont pick it again
    }
    while (i < 10) {
        const randomCategoryIndex = Math.floor(Math.random() * 4); // here i will randomly choose the category,
        const selectedCategory = categorizedWords[randomCategoryIndex];
        const randomIndex = Math.floor(Math.random() * selectedCategory.words.length); // here we randomly pick the word form the selectedCategory array.                            
        if (!selectedCategory.words[randomIndex].taken) {
            randomWords.push(categorizedWords[randomCategoryIndex].words[randomIndex]);
            categorizedWords[randomCategoryIndex].words[randomIndex].taken = true; // if the word is new and hasn't been taken we add it to the random words array and we change the taken flage so we dont pick it again
            i++;
        }
    }
    // since the first four items will be always known as Pick them on differnce, I need to shuffle the array items.
    return (0, arrayShuffle_1.default)(randomWords);
};
exports.default = getRandomWords;
