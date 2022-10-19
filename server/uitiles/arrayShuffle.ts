

// actully this function I toke it from stack overflow to randomise the items in the array.
// code link : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

const arrayShuffle = (array : Array<any>) => {

    let currentIndex = array.length,  randomIndex;

   
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];

    }

    return array;
  }
  

export default arrayShuffle;