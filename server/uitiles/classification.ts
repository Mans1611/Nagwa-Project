import { categorizedWords, Word } from "../interfaces/interface";


// this function actullay categorized each word to its category, this will be very helpful to diverse the random words. 
const classification = (words : Array <Word>) : Array <categorizedWords> =>{
    
    let categorizedWords: Array<categorizedWords> = [
        {pos : "adverb",words:[]},
        {pos : "noun",words:[]},
        {pos : "adjective",words:[]},
        {pos : "verb",words:[]}
    
    ];

    words.forEach((word)=>{  // iterate over each word in list and classify them upon there pos
        switch(word.pos){
            case "adverb" :
                categorizedWords[0].words.push(word);
                break;
            case "noun" :
                categorizedWords[1].words.push(word);
                break;
            case "adjective" :
                categorizedWords[2].words.push(word);
                break;
            case "verb" :
                categorizedWords[3].words.push(word);
                break;
        }
    })

    return categorizedWords;

}

export default classification;