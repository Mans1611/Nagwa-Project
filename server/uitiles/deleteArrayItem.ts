
const deleteArrayItem = (deltedItem : any, array : Array <any>)=>{
    let newArr = []
    const index = array.findIndex((item => item === deltedItem));
    newArr = array.slice(0,index);

    if(newArr.length !== index+1) // this to avoid if the index was the last item of the array
        newArr.slice(index+1);

    return newArr;
} 